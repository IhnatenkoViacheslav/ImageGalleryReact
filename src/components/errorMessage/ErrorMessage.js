import img from "./error.gif";

const ErrorMessage = () => {
  return (
    <div>
      <img
        style={{
          display: "block",
          width: "250px",
          height: "250px",
          objectFit: "contain",
          margin: "0 auto",
        }}
        src={img}
        alt="Error"
      />
      <p className="text-6xl py-4 text-center">No images found</p>
    </div>
  );
};

export default ErrorMessage;
