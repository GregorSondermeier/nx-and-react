import { Header, HeaderProps } from './header';
import React from 'react';

export default {
  component: Header,
  title: 'Header',
};

export const primary = () => {
  const props: HeaderProps = {};

  return <Header />;
};
