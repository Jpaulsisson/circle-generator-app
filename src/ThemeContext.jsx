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

  

//   case 'light':
//     setTheme({
//       ,
//     });
//     break;
//   case 'mellow':
//     setTheme({
//       color: 'var(--primaryClrMellow)',
//       backgroundColor: 'var(--backgroundClrMellow)',
//       borderColor: 'var(--primaryClrMellow)',
//     });
//     break;
//   case 'random':
//     setTheme({
//       color: `${firstRandomHex}`,
//       backgroundColor: `${secondRandomHex}`,
//       borderColor: `${thirdRandomHex}`,
//     });
//     break;
//     default: alert('something is wrong... maybe try hitting refresh')
// }
// );
