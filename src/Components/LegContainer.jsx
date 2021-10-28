import Leg from './Leg';

const LegContainer = ({legs}) => {
    return (    
        <div>{legs.map(leg => <Leg leg={leg}/>)}</div>
    )
}

export default LegContainer
