import React, {useState, useEffect} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() {

  const [devs, setDevs] = useState([]);
    
  useEffect(()=>{
    async function loadDevs() {
      const response = await api.get('/devs');//recupera tudo do /devs
      setDevs(response.data);
    }
    loadDevs();
  },[])

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })

    setGithubUsername('');
    setTechs('');

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
