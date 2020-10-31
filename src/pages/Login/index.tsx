/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { InputLabel, IconButton } from '@material-ui/core';
import { FiEye, FiEyeOff } from 'react-icons/fi/';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Box,
  Button,
  InputAdornment,
  Footer,
  Input,
} from './styles';
import Logo from '../../assets/images/Logo.svg';

export const schema = yup.object().shape({
  email: yup
    .string()
    .email('Informe um e-mail válido')
    .max(255)
    .required('Você precisa informar o e-mail'),
  password: yup.string().required('Informe a senha'),
});

interface IFormInputs {
  email: string;
  password: string;
}

interface State {
  password: string;
  showPassword: boolean;
}

const Login: React.FC = () => {
  const { signIn } = useAuth();

  const [messageError, setMessageError] = useState();
  const { control, handleSubmit, errors } = useForm<IFormInputs>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  // const onSubmit = (data: IFormInputs) => console.log(data);

  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const onSubmit = useCallback(
    async (data: IFormInputs) => {
      try {
        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        setMessageError(err);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <nav>
        <img src={Logo} alt="Good News" />
        <div>
          <Link to="/">INÍCIO</Link>
          <Link to="/signup">CADASTRAR</Link>
        </div>
      </nav>
      <Box>
        <header>
          <h2>Login</h2>
          <p>
            Acesse sua conta para publicar <b>good news</b> :)
          </p>
          <span style={{ color: 'red' }}>{messageError && messageError}</span>
          <hr />
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            name="password"
            control={control}
            defaultValue=""
          />
          <Button type="submit">ACESSAR</Button>
        </form>
        <Link to="/signup">
          Não possui conta?&#160;
          <b>Cadastrar</b>
        </Link>
      </Box>
      <Footer>
        <small>© Copyright 2020 - Good News</small>
      </Footer>
    </Container>
  );
};

export default Login;
