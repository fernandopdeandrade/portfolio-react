import Spinner from "react-bootstrap/Spinner";
import "../styles/SpinnerLoading.css";

function SpinnerLoading() {
  return (
    <>
      <div className="spinner-loading">
        <Spinner
          animation="border"
          variant="warning"
          size="lg"
          style={{
            position: "absolute",
            top: "40%",
            left: "43%",
            zIndex: "999",
            height: "200px",
            width: "200px",
          }}
        ></Spinner>
        <span className="span-loading">Loading...</span>
      </div>
    </>
  );
}

export default SpinnerLoading;
