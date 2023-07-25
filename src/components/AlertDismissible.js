import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import '../styles/AlertDismissible.css';

function AlertDismissible() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div className="alert-message">
        <Alert variant="danger">
          <Alert.Heading>Oh nãooo! Você cometeu um erro!</Alert.Heading>
          <p>
            O que você estava buscando talvez não exista nessa página, quem sabe
            essa pesquisa funcione na página correta :(
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={ () => setShow(false) } variant="outline-success">
              Fechar
            </Button>
          </div>
        </Alert>
      </div>
    );
  }
}

export default AlertDismissible;
