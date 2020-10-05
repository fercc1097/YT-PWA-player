import React, { useReducer } from 'react';

export const GlobalContext = React.createContext();

const initialState = {
  searchState: 'home',
  searchResult: [],
  relatedVideos: [],
  menuOpen: false,
  snackbarMsg: false,
  currentVideoSnippet: {},
  themeSelectValue: 'Default',
  loggedIn: {},
  user: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setCurrentVideoSnippet':
      return {
        ...state,
        currentVideoSnippet: action.snippet,
      };

    case 'setRelatedVideos': {
      return {
        ...state,
        relatedVideos: action.snippet,
      };
    }
    case 'setSnackbarMsg': {
      return {
        ...state,
        snackbarMsg: action.snippet,
      };
    }
    case 'setThemeSelectValue': {
      return {
        ...state,
        themeSelectValue: action.snippet,
      };
    }
    case 'setSearchState': {
      return {
        ...state,
        searchState: action.snippet,
      };
    }
    case 'setSearchResult': {
      return {
        ...state,
        searchResult: action.snippet,
      };
    }
    case 'setMenuOpen': {
      return {
        ...state,
        menuOpen: action.snippet,
      };
    }
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const GlobalState = (props) => {
  const globalState = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={globalState}>
      {props.children}
    </GlobalContext.Provider>
  );
};
