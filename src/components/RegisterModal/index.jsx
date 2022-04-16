import Modal from "react-modal";
import closeIcon from "./assets/close-icon.svg";
import successIcon from "./assets/success.svg";

const RegisterModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-register-overlay"
      className="react-modal-register-content"
    >
      <div>
        <button className="react-modal-close" onClick={onRequestClose}>
          <img src={closeIcon} alt="fechar modal" />
        </button>
        <div className="react-modal-register-success">
          <img src={successIcon} alt="sucesso" />
        </div>

        <h1>Cadastro realizado!</h1>
        <p>
          Seja bem vindo ao Technical Share. <br /> Você esta sendo
          redirecionado para a tela de Login.
        </p>
      </div>
    </Modal>
  );
};

export default RegisterModal;
