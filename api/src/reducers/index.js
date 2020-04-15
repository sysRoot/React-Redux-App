import { initialState } from '../state';
import { FETCH_DATA, FETCH_SUCCESS, FETCH_ERROR } from '../actions';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA: {
            const nextState = {
                ...state,
                isLoading: true,
                error: '',
            };
            return nextState;
        }
        case FETCH_SUCCESS: {
            const nextState = {
                ...state,
                pastTickers: state.tickerData.hasOwnProperty('ask')
                    ? [...state.pastTickers, { ...state.tickerData }]
                    : state.pastTickers,
                tickerData: action.payload,
                isLoading: false,
                error: '',
            };
            return nextState;
        }
        case FETCH_ERROR: {
            const nextState = {
                ...state,
                isLoading: false,
                error: action.payload,
            };
            return nextState;
        }
        default: {
            return state;
        }
    }
};
