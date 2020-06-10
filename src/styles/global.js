import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus{
  outline: 0;
}

html, body, #root{
  /* max-width: 1200px; */
  height: 100%;
  font-family: 'Roboto', sans-serif;
}

body {
  -webkit-font-smoothing: antialiased;
}

a{
  text-decoration: none;
}
ul {
  list-style: none;
}

button{
  cursor: pointer;
}
`;
