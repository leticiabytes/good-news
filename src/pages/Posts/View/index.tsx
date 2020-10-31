/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CircularProgress } from '@material-ui/core';

import { Container, Box } from './styles';
import api from '../../../services/api';

interface IPostProps {
  title: string;
  tag: string;
  author: string;
  bodyText: string;
  image: string;
}

interface IPost {
  id: string;
}

const View: React.FC = () => {
  const params = useParams<IPost>();
  const [post, setPost] = useState<IPostProps>();

  useEffect(() => {
    api.get(`goodnews/${params.id}`).then(response => {
      setPost(response.data);
    });
  }, [params.id]);

  return (
    <Container>
      <Box>
        {post ? (
          <>
            <img src={post.image} alt={post.title} />
            <header>
              <h2>{post.title}</h2>
              <div className="subHeader">
                <p>{post.tag}</p>
                <p>
                  Por: <b>{post.author}</b>
                </p>
              </div>
            </header>
            <main>
              <p>{post.bodyText}</p>
            </main>
          </>
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Container>
  );
};

export default View;
