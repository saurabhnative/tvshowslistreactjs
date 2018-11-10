import axios from 'axios';
import {Handler} from '../apiHandlers/tvShowListApiHandlers';
import {ApiBaseUrl} from '../../constants/urlConstants';
export function fetchTvShowsList(showId) {
    return (dispatch) => {
        dispatch(Handler.tvShowsListFetching());
        axios.get(`${ApiBaseUrl}shows`)
                  .then(function (response) {
                    // handle success
                    dispatch(Handler.tvShowsListFetchSuccess(response.data));
                  })
                  .catch(function (error) {
                    // handle error
                    console.log(error);
                    dispatch(Handler.tvShowsListFetchSuccess(error));
                  })
    };
}
