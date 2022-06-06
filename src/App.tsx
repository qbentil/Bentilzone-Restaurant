import './App.css';
import { Header, Home } from './components';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />
      <main className='mt-24 p-8 w-full'>

        {/* Routes */}
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
