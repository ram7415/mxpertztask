import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Stories from './components/Stories';
import StoryDetail from './components/StoryDetail';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Stories />,
  },
  {
    path: '/story/:id',
    element: <StoryDetail />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
