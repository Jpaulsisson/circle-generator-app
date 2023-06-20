import { createContext } from "react";


export const ThemeContext = createContext({
    themeDefault: { 
      style: {
        color: 'var(--primaryClrDefault)',
        backgroundColor: 'var(--backgroundClrDefault)',
        borderColor: 'var(--primaryClrDefault)',
    }},
    themeLight: { 
      style: {
        color: 'var(--primaryClrLight)',
        backgroundColor: 'var(--backgroundClrLight)',
        borderColor: 'var(--primaryClrLight)',
    }},
    themeMellow: { 
      style: {
        color: 'var(--primaryClrMellow)',
        backgroundColor: 'var(--backgroundClrMellow)',
        borderColor: 'var(--primaryClrMellow)',
    }},
    themeRandom: { 
      style: {
        color: 'var(--primaryClrDefault)',
        backgroundColor: 'var(--backgroundClrDefault)',
        borderColor: 'var(--primaryClrDefault)',
    }},  
  });

  
