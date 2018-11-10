/**
 * This file contains all handler functions for making
 * api calls for fetching tv shows list
 */
import * as actionTypes from '../../constants/apiConstants.js';
export const Handler = {
  tvShowsListFetching: function() {
    return {
      type: actionTypes.TVSHOWSLIST_FETCHING,
      isLoading: true
    }
  },
  tvShowsListFetchError: function(error) {
    return {
      type: actionTypes.TVSHOWSLIST_FETCH_ERROR,
      error: error
    }
  },
  tvShowsListFetchSuccess: function(items) {
    return {
      type: actionTypes.TVSHOWSLIST_FETCH_SUCCESS,
      items
    }
  }
}
