import { MantineProvider, createTheme } from '@mantine/core';
import { Global } from '@emotion/react';
import Portfolio from './components/Portfolio/Portfolio';
import GlobalStyles from './styles/GlobalStyles';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

const theme = createTheme({
  fontFamily: 'Pretendard, sans-serif',
  primaryColor: 'cyan',
  colors: {
    dark: ['#fff', '#adadad', '#828282', '#6c6c6c', '#525252', '#404040', '#2c2c2c', '#121212', '#01010A', '#000000'],
  },
});

function App() {
  return (
    <>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <Global styles={GlobalStyles} />
        <Portfolio />
      </MantineProvider>
    </>
  );
}

export default App;
