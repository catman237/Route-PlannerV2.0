import React from 'react'
import AssistantDirectionOutlinedIcon from '@mui/icons-material/AssistantDirectionOutlined';

const Header = () => {



    return (
        <div className='headerContainer'>
            <div className="left">
                <h1>Route Planner</h1>
            </div>
            <div className="right">
               <AssistantDirectionOutlinedIcon className="headerImg"/> 
            </div>
        </div>
    )
}

export default Header
