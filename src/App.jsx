import './App.css';
import styled, { ThemeProvider } from "styled-components"
import { Menu, Navbar } from './components';
import { darkTheme, lightTheme } from './utils/theme';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Video from "./components/pages/Video"
import Home from "./components/pages/Home"
import Loguin from './components/pages/Signin';

const Container = styled.div`
    display: flex;
    font-size: 1rem;
    `
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bgLight};
  color: ${({ theme }) => theme.text};
`
const Wrapper = styled.div`
  padding: 22px 96px;
`

function App() {

  const [darkMode, setDarkMode] = useState(true)


  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container className="App">
        <Router>
          <Menu darkMode={darkMode} SetDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path='/'>
                  <Route index element={<Home/>} />
                  <Route path='signin' element={<Loguin/>}/>
                  <Route path='video'>
                    <Route path=':id' element={<Video/>} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
