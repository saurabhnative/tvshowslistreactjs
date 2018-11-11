import React from 'react';
import './header.css';
import { Layout } from 'antd';
const { Header } = Layout;

const HeaderComponent = () => {
  return(
    <Header>
       <span className="title">TV Shows</span>
    </Header>
  );
}

export default HeaderComponent;
