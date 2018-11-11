/**
 * Component to show complete details about TV show
 * @type {Class}
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../../components/Header/header';
/**
 * Layout Components from antd UI library
 * More info: https://ant.design/components/layout/
 */
import { Layout } from 'antd';
const  { Content } = Layout;

class TVShowDetails extends Component {
  render() {
    console.log(this.props);
    return (
      <Layout>
        <HeaderComponent/>
        <Content>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TVShowDetails);
