/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { InputLabel, IconButton } from '@material-ui/core';
import { FiEye, FiEyeOff } from 'react-icons/fi/';

import { randomToken } from '../../utils/index.js';

import {
  Container,
  Box,
  Button,
  InputAdornment,
  Footer,
  Input,
} from './styles';
import Logo from '../../assets/images/Logo.svg';
import api from '../../services/api';

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
  token: string;
  name: string;
  email: string;
  password: string;
  confirmPass: string;
}

interface State {
  password: string;
  showPassword: boolean;
}

const Signup: React.FC = () => {
  const history = useHistory();

  const [messageError, setMessageError] = useState();
  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false,
  });

  const { control, handleSubmit, errors } = useForm<IFormInputs>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const onSubmit = useCallback(
    async (data: IFormInputs) => {
      const dataUser = {
        token: randomToken(10),
        name: data.name,
        email: data.email,
        password: data.password,
      };

      try {
        await api.post('/users', dataUser);
        history.push('/login');
      } catch (err) {
        setMessageError(err);
      }
    },
    [history],
  );

  return (
    <>
      <Container>
        <nav>
          <img src={Logo} alt="Good News" />
          <div>
            <Link to="/">INÍCIO</Link>
            <Link to="/login">LOGIN</Link>
          </div>
        </nav>
        <Box>
          <span style={{ color: 'red' }}>{messageError && messageError}</span>

          <header>
            <h2>Cadastrar</h2>
            <p>
              Crie sua conta e publique good news <b>good news</b> :)
            </p>
            <hr />
          </header>
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
              defaultValue=""
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
              defaultValue=""
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
              defaultValue=""
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
              defaultValue=""
            />
            <Button type="submit">CADASTRAR</Button>
          </form>
          <Link to="/login">
            Já possui conta?&#160;
            <b>Login</b>
          </Link>
        </Box>
      </Container>
      <Footer>
        <small>© Copyright 2020 - Good News</small>
      </Footer>
    </>
  );
};

export default Signup;
