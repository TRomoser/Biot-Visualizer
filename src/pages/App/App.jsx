import { Route, Routes, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import { fetchData } from '../../utilities/fetch-api';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import NavBar from '../../components/NavBar/NavBar';

function App() {
  const url = 'https://oap.cloud.buildingsiot.com/api'
  const [data, setData] = useState(null);

  useEffect(() => {
    const equipmentQuery = `
    query Tags {
      equipment(version: "1.1") {
        code
        name
        shortName
        description
        isBase
        extends
        extendedBy {
            code
            name
            shortName
            description
            isBase
        }
      }
    }
    `;
    const fetchQueryData = async () => {
      const url = 'https://oap.cloud.buildingsiot.com/api'
      const data = await fetchData(url, equipmentQuery);
      setData(data);
      console.table('Data-object app', data);
    };
    fetchQueryData();
  }, []);

  return (
    <div className="App">
      {/* implement Login via -> user ? NavBar & Routes : AuthPage */}
      <NavBar />
      <Routes>
        {data ? <Route path="/" element={<HomePage data={data} />} /> : <Route path='/' element={<HomePage />} />}
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
