import React from 'react'

const Header = () => {

    const headerImage = 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.18169-9/18740446_1519601628090447_5422015250123808074_n.png?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TcTBBFUTx1gAX_0nU7h&_nc_ht=scontent.fapa1-2.fna&oh=01767e53b0dff008ad87b68e235c0433&oe=619F74C6'

    return (
        <div className='headerContainer'>
            <div className="left">
                <h1>Route Planner</h1>
            </div>
            <div className="right">
                <img className='headerImg' src={headerImage} alt='headerLogoImage'/>
            </div>
        </div>
    )
}

export default Header
