import React from 'react';
import WidgetOptions from './WidgetOptions'
import './Widget.css';

function Widget() {
    return (
        <div className="widget">
            <div className="widget__header">
                <h5>Spaces to follow</h5>
            </div>
            <WidgetOptions />
        </div>
    )
}

export default Widget;
