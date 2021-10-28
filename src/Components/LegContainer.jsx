import Leg from "./Leg";

const LegContainer = ({legs}) => {
  return (
    <div className="legContainter">
      {legs.map((leg) => (
        <Leg leg={leg} />
      ))}
    </div>
  );
};

export default LegContainer;
