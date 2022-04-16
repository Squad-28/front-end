import Modal from "react-modal";
import closeIcon from "./assets/close-icon.svg";

const ConfirmModal = ({ isOpen, onRequestClose, onTeams }) => {
  const handleTeams = () => {
    window.location.href = onTeams;
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div>
        <button className="react-modal-close" onClick={onRequestClose}>
          <img src={closeIcon} alt="fechar modal" />
        </button>
        <h1>
          Tem certeza que deseja <br /> contectar?
        </h1>
        <p>
          Ao clicar em <span>sim</span>, você será direcionado <br /> para a
          plataforma <span>Teams</span>.
        </p>
      </div>

      <div className="react-modal-content-actions">
        <div className="btn-1">
          <button onClick={onRequestClose}>Não</button>
        </div>
        <div className="btn-2">
          <button onClick={handleTeams}>Sim</button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
