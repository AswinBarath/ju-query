import React from 'react';
import SidebarOptions from './SidebarOptions';
import '../css/Sidebar.css';

function Sidebar({setSelection}) {
    return (
        <div className = "sidebar">
            <SidebarOptions 
                setSelection = {setSelection}
            />
        </div>
    )
}

export default Sidebar;
