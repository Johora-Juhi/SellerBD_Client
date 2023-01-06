import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Route/Route';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
            <RouterProvider router={router} />
            <ToastContainer/>
    </div>
  );
}

export default App;
