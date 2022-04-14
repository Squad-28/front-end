import CardUser from '../../../components/CardUser';

import './style.css';

const Mentors = ({ users }) => {
  return (
    <div className="grid justify-items-center pl-28 ">
      <div className="container">
        <div className="mb-16">
          <h1 className="mentores">
            Mentores <span className="disponiveis">disponíveis agora!</span>
          </h1>
          <p className="conectar">
            Click no botão conectar para entrar em contato com o colega
            desejado.{" "}
          </p>
        </div>
        <div className="container-card">
          <CardUser users={users} />
        </div>
      </div>
    </div>
  );
};

export default Mentors;
