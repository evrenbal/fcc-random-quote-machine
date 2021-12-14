import { useReducer, useCallback } from 'react';
import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';

/* Type Declarations */

enum HTTPACTIONS {
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  CLEAR = 'CLEAR' ,
}

type State = {
  loading: boolean,
  data: any | null,
  error: string | null
}

type ReducerAction = {
  type: HTTPACTIONS,
  identifier?: any,
  responseData?: any,
  errorMessage?: any
}

/*
 * Initial Http State - Defaults
 */

const initialHttpState: State = {
  loading: false,
  data: null,
  error: null,
}
const httpReducer : React.Reducer< State, ReducerAction> = ( prevHttpState, action ) => {
  switch (action.type) {
    case HTTPACTIONS.REQUEST:
      return Object.assign( {}, initialHttpState, {loading: true, identifier: action.identifier} ); 
    case HTTPACTIONS.SUCCESS:
      return Object.assign( {}, prevHttpState, { data: action.responseData} );
    case HTTPACTIONS.ERROR:
      return Object.assign( {}, prevHttpState, {error: action.errorMessage} );
    case HTTPACTIONS.CLEAR:
      return initialHttpState;
    default:
      throw new Error('Unhandled Http Action!');
  }
}

type RequestConfig = {
  url : string,
  method?: "GET" | "POST",
  responseType?: 'arraybuffer' | 'document' | 'json' | 'jsonp' | 'text' | 'stream' | 'blob' ,
  headers? : AxiosRequestHeaders,
  payLoad? : any,
  reqExtra? : any,
  reqIdentifier?: any, 
}

const useHttp = () => {

  const [httpState, dispatchHttp] = useReducer( httpReducer, initialHttpState);

  const clear = useCallback(() => dispatchHttp({ type: HTTPACTIONS.CLEAR }), []);

  const request = useCallback(
    ( requestConfig : RequestConfig ) => {
      dispatchHttp({ type: HTTPACTIONS.REQUEST });

      requestConfig.responseType  = requestConfig.responseType || 'json';
      requestConfig.method        = requestConfig.method || 'GET';
      requestConfig.payLoad       = requestConfig.payLoad || {};
      requestConfig.headers       = Object.assign ( {
                                    'X-Requested-With': 'XMLHttpRequest'
                                  }, requestConfig.headers || {} );

      axios.request ({
        method: requestConfig.method,
        url: requestConfig.url,
        data: requestConfig.payLoad,
        headers : requestConfig.headers,
      }).then( response => {
        dispatchHttp({ type: HTTPACTIONS.SUCCESS, responseData: response.data });
      }).catch( error => {
        dispatchHttp({ type: HTTPACTIONS.ERROR, errorMessage: `Error fetching data! ${error.message}` });
      });
    },
  // Dependencies for use callback
  []
  );

  return {
    response : {
      isLoading: httpState.loading,
      data: httpState.data,
      error: httpState.error,
    },
    request: request,
    clear: clear
  };
};

export default useHttp;
