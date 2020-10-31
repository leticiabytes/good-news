/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';

import MUIDataTable from 'mui-datatables';
import { IconButton } from '@material-ui/core';

import { FiEdit, FiDelete } from 'react-icons/fi';
import { Add } from '@material-ui/icons';

import Modal from '../../components/Modal';

import FormAdd from './Forms/FormAdd';
import FormEdit from './Forms/FormEdit';

import api from '../../services/api';
import { Container } from './styles';
import { textLabels } from '../../utils/index.js';

interface IUsers {
  id: number;
  name: string;
  email: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUsers[]>([]);
  useEffect(() => {
    async function loadUsers(): Promise<void> {
      await api.get('users').then(res => setUsers(res.data));
    }

    loadUsers();
  }, []);

  async function handleDeleteUser(id: number): Promise<void> {
    await api.delete(`/users/${id}`);

    const updatedState = users.filter(user => user.id !== id);
    setUsers(updatedState);
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
      name: 'name',
      label: 'Nome',
    },
    {
      name: 'email',
      label: 'E-mail',
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
              <Modal title="Editar Usuário" icon={<FiEdit />}>
                <FormEdit id={tableMeta.rowData[0]} />
              </Modal>
              <IconButton
                onClick={() => handleDeleteUser(tableMeta.rowData[0])}
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
        <Modal title="Novo Usuário" icon={<Add />}>
          <FormAdd />
        </Modal>
      );
    },
  };

  return (
    <>
      <Container>
        <h4>Usuários</h4>

        <MUIDataTable
          title=" "
          data={users.map(item => {
            return [item.id, item.name, item.email, '', ''];
          })}
          columns={columns}
          options={options}
        />
      </Container>
    </>
  );
};

export default Users;
