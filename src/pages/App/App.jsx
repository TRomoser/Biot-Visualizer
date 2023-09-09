import { Route, Routes, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import { fetchData } from '../../utilities/fetch-yaml';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import NavBar from '../../components/NavBar/NavBar';

function App() {
  const url = 'https://oap.cloud.buildingsiot.com/api'
  const [data, setData] = useState(null);

  useEffect(() => {
    
    const equipmentQuery = `
      query Versions {
        equipment(version: "1.1") {
            name
        }
    }
  `;
    const fetchQueryData = async () => {
      const url = 'https://oap.cloud.buildingsiot.com/api'
      const data = await fetchData(url, equipmentQuery);
      setData(data);
      // console.log('data', data);
    };
    fetchQueryData();
  }, []);

  return (
    <div className="App">
      {/* implement Login via -> user ? NavBar & Routes : AuthPage */}
      <NavBar />
      <Routes>
        {data ? <Route path="/" element={<HomePage data={data.equipment} />} /> : <Route path='/' element={<HomePage />} />}
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
