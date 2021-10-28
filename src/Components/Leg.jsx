const Leg = ({leg}) => (
  <div>
    <div>Name: {leg.address}</div>
    <div>Dist: {leg.distance}</div>
    <div>Time: {leg.time}</div>
    {/* <div>Directions: {leg.instructions}</div> */}
  </div>
);

export default Leg;
