import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import Home from './features/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <main className='weather-page'>
      <ToastContainer
        position="top-right"
        limit={5}
        theme={'colored'}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
