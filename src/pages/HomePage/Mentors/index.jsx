import CardUser from "../../../components/CardUser";

import "./style.css";

const Mentors = ({ users, onProfile }) => {
  return (
    <div className="grid justify-items-center pl-28 ">
      <div className="container">
        <div className="mb-16">
          <h1 className="mentors-title">
            Mentores <span className="mentors-available">disponíveis agora!</span>
          </h1>
          <p className="mentors-connect">
            Click no botão conectar para entrar em contato com o colega
            desejado.{" "}
          </p>
        </div>
        <div className="mentors-container-card">
          <CardUser users={users} onProfile={onProfile} />
        </div>
      </div>
    </div>
  );
};

export default Mentors;
