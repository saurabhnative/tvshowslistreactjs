/**
 * HomeScreen component to show tv shows list
 * @type {Class}
 */
import React, { Component } from 'react';
import './homepage.css';
import { connect } from 'react-redux';
import { fetchTvShowsList } from '../../actions/componentActions/tvShowListActions.js';
import { Col } from 'antd';
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
      const showsList = topShows.map((tvShow)=>{
        return this.renderTVShowData(tvShow);
      })
      this.setState({showsList});
    }
  }

  /**
   * Funtion to render TV show cards in UI
   * @param  {Object} data [data for each card]
   * @return {JSX Markup}      [Card elements JSX markup]
   */
  renderTVShowData(data){
    return(
      <Col className="gutter-row" span={6} key={data.name}>
      <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={data.image.medium}
          onClick= {() => this.handleCardClick(data.id)}/>}
        >
          <Meta
            title={data.name}
            description={data.premiered}
          />
        </Card>
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
