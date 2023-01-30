import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const root: any = createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />);
if (!root) throw new Error('Failed to find the root element');
root.render(<h1>Something from index</h1>);

// const domNode = document.getElementById('root');
// const root = createRoot(domNode as HTMLElement);

// root.render(<App />);

// example fromRedux toolkit quick-start
// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'
// import { store } from './app/store'
// import { Provider } from 'react-redux'

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
