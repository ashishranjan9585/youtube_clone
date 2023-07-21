import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Main from './components/Main';
import VideoPage from './components/VideoPage';
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './utils/store';
import Demo from './components/Demo';
import SearchPage from './components/SearchPage';

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <Body/>,
    children : [
      {
        path : '/',
        element : <Main/>
      },
      {
        path : 'watch',
        element : <VideoPage/>
      },
      {
        path : 'demo',
        element : <Demo/>
      },
      {
        path : 'search',
        element : <SearchPage/>
      }
    ]
  }
])
function App() {
  return (
    <Provider store={store}>
    <div className="">
      <Header/>
      {/* <Body/> */}
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
