import React, { useEffect, useState } from 'react';
import CardUser from '../../../components/CardUser';
import { api } from '../../../services/api';
import './style.css';

const Mentors = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        setLoading(true);
        api.get('/').then((response) => setUsers(response.data.users));
        console.log(users);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoadingError(true);
      }
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <p>Carregando...</p>
      </div>
    );
  }

  if (loadingError) {
    return (
      <div className="loading">
        <p>Erro ao carregar os dados.</p>
      </div>
    );
  }

  return (
    <div className="grid justify-items-center pl-28 ">
      <div className="container ">
        <div className="mb-16">
          <h1 className="mentores">
            Mentores <span className='disponiveis'>disponíveis agora!</span>
          </h1>
          <p className="conectar">Click no botão conectar para entrar em contato com o colega desejado. </p>
        </div>
        <CardUser />
      </div>
    </div>
  );
};

export default Mentors;
