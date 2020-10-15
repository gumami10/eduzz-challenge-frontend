const HTTP_GET_MOVIES_FETCHING = "HTTP_GET_MOVIES_FETCHING";
const HTTP_GET_MOVIES_SUCCESS = "HTTP_GET_MOVIES_SUCCESS";
const HTTP_GET_MOVIES_FAIL = "HTTP_GET_MOVIES_FAIL";

interface IState  {
    movies: any,
    errors: boolean,
    isLoading: boolean
}

const initialState : IState = {
    movies: [],
    errors: false,
    isLoading: false
}

interface IAction {
    type: string,
    payload: any
}

export default function reducer(state = initialState, action: IAction) {
    switch (action.type) {
        case HTTP_GET_MOVIES_FETCHING:
            return {
                movies: initialState.movies,
                errors: state.errors,
                isLoading: true
            }
        case HTTP_GET_MOVIES_SUCCESS:
            return {
                movies: action.payload,
                errors: false,
                isLoading: false
            }
        case HTTP_GET_MOVIES_FAIL:
            alert("It looks like something went wrong, this site might not work correctly");
            console.log(action.payload)
            return {
                movies: initialState.movies,
                errors: true,
                isLoading: false
            }
        default:
            return state;
    }
}

export const getMovies = (searchValue?: string) => {
    if(searchValue !== "")
        return (dispatch: any) => {
            dispatch({
                type: HTTP_GET_MOVIES_FETCHING,
                payload: null
            })
            fetch("https://swapi.co/api/films/?search="+ searchValue, {
                method: "GET"
            })
            .then(response => response.json())
            .then(json => {
                dispatch({ type: HTTP_GET_MOVIES_SUCCESS, payload: json.results })
            })
            .catch(error => {
                return dispatch({
                type: HTTP_GET_MOVIES_FAIL,
                payload: error
                })
            })
        }
    else
        return (dispatch: any) => {
            dispatch({
                type: HTTP_GET_MOVIES_FETCHING,
                payload: null
            })
            fetch("https://swapi.co/api/films/", {
                method: "GET"
            })
            .then(response => response.json())
            .then(json => dispatch({ type: HTTP_GET_MOVIES_SUCCESS, payload: json.results }))
            .catch(error => {
                return dispatch({
                type: HTTP_GET_MOVIES_FAIL,
                payload: error
                })
            })
        }
}

