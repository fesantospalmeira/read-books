import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Livros from './routes/Livros';
import Autores from './routes/Autores';
import { BooksPageWrapper } from './components/CardRecommender'
import { AuthorPageWrapper } from './components/AuthorsList';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;
  
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/livros' element={<Livros />} />
        <Route path='/autores' element={<Autores />} />
        <Route path='/autores/:id' element={<AuthorPageWrapper />} />
        <Route path='/detalhes/:id' element={<BooksPageWrapper />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
