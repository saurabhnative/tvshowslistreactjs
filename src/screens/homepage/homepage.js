/**
 * HomeScreen component to show tv shows list
 * @type {Class}
 */
import React, { Component } from 'react';
import './homepage.css';
import { connect } from 'react-redux';
import { fetchTvShowsList } from '../../actions/componentActions/tvShowListActions.js';
import { Col,Row } from 'antd';
import { Card } from 'antd';

/**
 * Layout Components from antd UI library
 * More info: https://ant.design/components/layout/
 */
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
const { Meta } = Card;

class HomeScreen extends Component {
  state = {
    showsList : []
  }

  componentDidMount(){
    this.props.fetchTvShowsList();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.tvShowsListState.tvShowItems.length){
      const topShows = nextProps.tvShowsListState.tvShowItems.filter((item,index) => {
        if(index < 12){
          return true;
        } else {
          return false;
        }
      });
      let rows = [];
      let cols = [];
      topShows.map((tvShow,index) => {
        cols.push(this.renderTVShowData(tvShow));
        if(cols.length === 4){
          rows.push(
            <Row type="flex" justify="center">
             {cols}
            </Row>
          );
          cols = [];
        }
        // rows.push(this.renderTVShowData(tvShow));
        return null;
      });
      this.setState({ showsList: rows});
    }
  }

  /**
   * Funtion to render TV show cards in UI
   * @param  {Object} data [data for each card]
   * @return {JSX Markup}      [Card elements JSX markup]
   */
  renderTVShowData(data){
    return(
      <Col xs={24} sm={12} md={6} lg={6} xl={6} key={data.name}>
      <center>
      <Card
          hoverable
          className="tvShowCard"
          cover={<img alt="example" src={data.image.medium}/>}
          onClick= {() => this.handleCardClick(data.id)}
        >
          <Meta
            title={data.name}
            description={data.premiered}
          />
        </Card>
        </center>
      </Col>
    )
  }

  /**
   * Function to redirect user to individual show information
   * @param  {Integer} id [unique id for each show]
   * @return {null}    [null]
   */
  handleCardClick(id) {
    this.props.history.push(`/showdetails/${id}`);
  }

  render() {
    return (
      <div className="App">
      <Layout>
        <Header>
           <span className="title">TV Show Details</span>
        </Header>
        <Content className="content">
        {this.state.showsList}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tvShowsListState: state.tvShowListReducer
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTvShowsList: (showid) => dispatch(fetchTvShowsList(showid))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
