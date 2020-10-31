import { FiHome, FiPaperclip, FiUser } from 'react-icons/fi'

export const nav = [
  {
    href: '/home',
    icon: <FiHome />,
    title: 'Início'
  },
  {
    href: '/posts',
    icon: <FiPaperclip />,
    title: 'Publicações'
  },
  {
    href: '/users',
    icon: <FiUser />,
    title: 'Usuários'
  },
];
