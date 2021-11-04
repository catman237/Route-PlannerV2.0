import Leg from "./Leg";

const LegContainer = ({ legs, status }) => {
  console.log(legs);
  console.log("status", status);
  return (
    <div className="legContainter">
      {status === "OK" ? (
        legs.map((leg) => <Leg leg={leg} />)
      ) : (
        <div>
          <h1>ERROR: {status.replace("_", " ")}</h1>
          <h3>Please hit the clear button and try again</h3>
        </div>
      )}
    </div>
  );
};

export default LegContainer;
