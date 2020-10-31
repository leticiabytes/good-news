/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { CircularProgress, InputLabel } from '@material-ui/core';

import { Container, Box, Button, Input } from './styles';
import api from '../../../services/api';

export const schema = yup.object().shape({
  title: yup.string().required('Você precisa informar o título da notícia'),
  tag: yup.string().required('Você precisa informar uma tag'),
  bodyText: yup.string().required('Você precisa informar o corpo da notícia'),
});

interface IFormInputs {
  title: string;
  tag: string;
  bodyText: string;
  image: string;
}

interface IPost {
  id: string;
}

const EditPost: React.FC = () => {
  const history = useHistory();

  const params = useParams<IPost>();
  const [post, setPost] = useState<IFormInputs>();

  useEffect(() => {
    api.get(`goodnews/${params.id}`).then(response => {
      setPost(response.data);
    });
  }, [params.id]);

  const { control, handleSubmit, errors } = useForm<IFormInputs>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    async (data: IFormInputs) => {
      const dataPost = {
        title: data.title,
        tag: data.tag,
        bodyText: data.bodyText,
        image: data.image,
      };

      try {
        await api.patch(`/goodnews/${params.id}`, dataPost);
        history.push('/posts');
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    },
    [params.id, history],
  );

  return (
    <Container>
      <Box>
        <header>
          <h2>Notícia</h2>
          <p>Editar publicação</p>
        </header>
        {post ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputLabel shrink className="inputLabel">
              Título
            </InputLabel>
            <Controller
              as={
                <Input
                  error={Boolean(errors.title)}
                  helperText={errors.title && errors.title?.message}
                  type="text"
                  variant="outlined"
                />
              }
              name="title"
              control={control}
              defaultValue={post.title}
            />
            <InputLabel shrink className="inputLabel">
              Tag
            </InputLabel>
            <Controller
              as={
                <Input
                  error={Boolean(errors.tag)}
                  helperText={errors.tag && errors.tag?.message}
                  type="text"
                  variant="outlined"
                />
              }
              name="tag"
              control={control}
              defaultValue={post.tag}
            />
            <InputLabel shrink className="inputLabel">
              Link da Imagem
            </InputLabel>
            <Controller
              as={<Input type="text" variant="outlined" />}
              name="image"
              control={control}
              defaultValue={post.image}
            />
            <InputLabel shrink className="inputLabel">
              Corpo
            </InputLabel>
            <Controller
              as={
                <Input
                  error={Boolean(errors.bodyText)}
                  helperText={errors.bodyText && errors.bodyText?.message}
                  type="text"
                  variant="outlined"
                  multiline
                  rowsMax={10}
                  inputProps={{
                    style: {
                      height: 150,
                    },
                  }}
                />
              }
              name="bodyText"
              control={control}
              defaultValue={post.bodyText}
            />
            <Button type="submit">SALVAR</Button>
          </form>
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Container>
  );
};

export default EditPost;
