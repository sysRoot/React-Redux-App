import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchData = () => (dispatch) => {
    dispatch({ type: FETCH_DATA });
    axios
        .get('https://api.gemini.com/v1/pubticker/ethusd')
        .then((response) => {
            dispatch({ type: FETCH_SUCCESS, payload: response.data });
        })
        .catch((error) => {
            dispatch({ type: FETCH_ERROR, payload: error });
        });
};
