/**
 * Component to show complete details about TV show
 * @type {Class}
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class TVShowDetails extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="TVShowDetails">

      </div>
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
