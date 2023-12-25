import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import HomePage from './pages/Home.tsx';
import SessionsPage from './pages/Sessions.tsx';
import SessionPage from './pages/Session.tsx';
import Root from './pages/Root.tsx';
import ModalProvider from './context';
import { store } from './store';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: 'sessions', element: <SessionsPage /> },
      { path: 'sessions/:id', element: <SessionPage /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <RouterProvider router={Router} />
      </ModalProvider>
    </Provider>
  );
}

export default App;
