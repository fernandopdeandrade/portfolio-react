import Spinner from 'react-bootstrap/Spinner';
import '../styles/SpinnerLoading.css';

function SpinnerLoading() {
  return (
    <>
      <div className="spinner-loading">
        <Spinner
          animation="border"
          variant="warning"
          size="lg"
          style={ {
            position: 'absolute',
            top: '40%',
            zIndex: '999',
            height: '120px',
            width: '120px',
          } }
        />
        <span className="span-loading">Loading...</span>
      </div>
    </>
  );
}

export default SpinnerLoading;
