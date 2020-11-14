import React from 'react'
import * as actionTypes from '../actionTypes'


export const themeHandler = (theme) => {
  return {
    type: actionTypes.TOGGLE_THEME,
    theme: theme
  };
};


