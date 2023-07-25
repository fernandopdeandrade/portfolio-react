import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MessageResponse.css';

function SuccessMessage() {
  return (
    <div className="success">
      <h1>Success!</h1>
      <p>
        Obrigado pela sua mensagem. Eu entrarei em contato para responder o mais
        breve possível.
      </p>
      <Link to="/">
        <button>Retornar para Home</button>
      </Link>
    </div>
  );
}

export default SuccessMessage;
