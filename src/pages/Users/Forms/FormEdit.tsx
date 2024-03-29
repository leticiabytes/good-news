/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect, useCallback } from 'react';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { InputLabel, IconButton, CircularProgress } from '@material-ui/core';
import { FiEye, FiEyeOff } from 'react-icons/fi/';

import api from '../../../services/api';

import { Button, InputAdornment, Input } from './styles';

export const schema = yup.object().shape({
  name: yup.string().max(255).required('Você precisa informar o nome'),
  email: yup
    .string()
    .email('Informe um e-mail válido')
    .max(255)
    .required('Você precisa informar um e-mail'),
  password: yup
    .string()
    .min(6, 'A senha precisa conter no mínimo 6 digitos')
    .required('Informe uma senha'),
  confirmPass: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas não estão iguais')
    .required('Confirme a senha'),
});

interface IFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPass: string;
}

interface IUser {
  id: string;
}

interface State {
  password: string;
  showPassword: boolean;
}

const Form: React.FC<IUser> = ({ id }) => {
  const [user, setUser] = useState<IFormInputs>();
  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false,
  });

  const { control, handleSubmit, errors } = useForm<IFormInputs>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    async function loadUser(): Promise<void> {
      await api.get(`users/${id}`).then(res => {
        setUser(res.data);
      });
    }

    loadUser();
  }, [id]);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const onSubmit = useCallback(
    async (data: IFormInputs) => {
      const dataUser = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      try {
        await api.patch(`/users/${id}`, dataUser);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    },
    [id],
  );

  return (
    <>
      {user ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputLabel shrink className="inputLabel">
            Nome
          </InputLabel>
          <Controller
            as={
              <Input
                error={Boolean(errors.name)}
                helperText={errors.name && errors.name?.message}
                type="text"
                variant="outlined"
              />
            }
            name="name"
            control={control}
            defaultValue={user.name}
          />

          <InputLabel shrink className="inputLabel">
            Email
          </InputLabel>
          <Controller
            as={
              <Input
                type="text"
                error={Boolean(errors.email)}
                helperText={errors.email && errors.email?.message}
                variant="outlined"
              />
            }
            name="email"
            control={control}
            defaultValue={user.email}
          />

          <InputLabel shrink className="inputLabel">
            Senha
          </InputLabel>
          <Controller
            as={
              <Input
                type={values.showPassword ? 'text' : 'password'}
                error={Boolean(errors.password)}
                helperText={errors.password && errors.password?.message}
                variant="outlined"
                value={values.password}
              />
            }
            name="password"
            control={control}
            defaultValue={user.password}
          />
          <InputLabel shrink className="inputLabel">
            Confirme a senha
          </InputLabel>
          <Controller
            as={
              <Input
                variant="outlined"
                error={Boolean(errors.confirmPass)}
                helperText={errors.confirmPass && errors.confirmPass?.message}
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword}>
                        {values.showPassword ? (
                          <FiEye
                            size={22}
                            color={values.showPassword && '#005288'}
                          />
                        ) : (
                          <FiEyeOff size={22} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            }
            name="confirmPass"
            control={control}
            defaultValue={user.password}
          />
          <Button type="submit">ATUALIZAR</Button>
        </form>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Form;
