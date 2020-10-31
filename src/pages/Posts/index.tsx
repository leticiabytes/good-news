/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MUIDataTable from 'mui-datatables';
import { IconButton } from '@material-ui/core';

import { FiEdit, FiDelete, FiEye } from 'react-icons/fi';
import { Add } from '@material-ui/icons';

import api from '../../services/api';
import { Container } from './styles';
import { textLabels, maxLenght } from '../../utils/index.js';

interface IPosts {
  id: number;
  title: string;
  tag: string;
  author: string;
  bodyText: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  useEffect(() => {
    async function loadPosts(): Promise<void> {
      await api.get('goodnews').then(res => setPosts(res.data));
    }
    loadPosts();
  }, []);

  async function handleDeletePost(id: number): Promise<void> {
    await api.delete(`/goodnews/${id}`);

    const updatedState = posts.filter(post => post.id !== id);
    setPosts(updatedState);
  }

  const columns = [
    {
      name: 'id',
      options: {
        filter: false,
        display: 'excluded',
      },
    },
    {
      name: 'title',
      label: 'Titulo',
    },
    {
      name: 'tag',
      label: 'Tag',
    },
    {
      name: 'author',
      label: 'Autor',
    },
    {
      name: 'bodyText',
      label: 'Corpo',
    },
    {
      name: 'actions',
      label: 'Ações',
      options: {
        filter: false,
        download: false,
        sort: false,
        customBodyRender: (value: any, tableMeta: any) => {
          return (
            <>
              <Link to={`/posts/view/${tableMeta.rowData[0]}`}>
                <IconButton>
                  <FiEye />
                </IconButton>
              </Link>
              <Link to={`/posts/edit/${tableMeta.rowData[0]}`}>
                <IconButton>
                  <FiEdit />
                </IconButton>
              </Link>
              <IconButton
                onClick={() => handleDeletePost(tableMeta.rowData[0])}
              >
                <FiDelete />
              </IconButton>
            </>
          );
        },
      },
    },
  ];

  const options = {
    filter: true,
    rowsPerPage: 10,
    textLabels,
    customToolbar: () => {
      return (
        <Link to="/posts/create">
          <IconButton>
            <Add />
          </IconButton>
        </Link>
      );
    },
  };

  return (
    <>
      <Container>
        <h4>Publicações</h4>

        <MUIDataTable
          title=" "
          data={posts.map(item => {
            return [
              item.id,
              maxLenght(item.title),
              item.tag,
              item.author,
              maxLenght(item.bodyText),
              '',
            ];
          })}
          columns={columns}
          options={options}
        />
      </Container>
    </>
  );
};

export default Posts;
