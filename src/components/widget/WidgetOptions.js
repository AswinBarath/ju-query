import React from 'react';
import './WidgetOptions.css';

function WidgetOptions() {
    return (
        <div className="widget__contents">
            <a href="https://community.codecademy.com/jain-university-ju/" target="_blank" rel="noreferrer">
                <div className="widget__content">
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACXCAMAAAAvQTlLAAAAflBMVEX///8UHDv19fUQGTkABTEAACLd3uCtrbMAAC8LFTcAACpwc4MrMkx6fIfV1tm1trwAACcAAB0ACTEAABrIyc4bIkFqbXu+v8UAAADP0NTn6OkAAA1iZnaLjZh1d4Wkpa09Qlk2OU2bnaZbXW5FSF1AQlMfITwAABUiKkdSVmrWFoGWAAACe0lEQVR4nO2afZOaMBCHhSTyJhhA4fAMWHu9tt//C1YlInjQIV7PzXR+z38O2ckzkF2ThcUCAAAAAAAAAAAAAAAAZuHW8UNEuy/2EqH/CK/LL/bizHkEAS94/QdeTMwke6oXWy2TWSz32TO9gtXcgMiHF7xmAy8z4GUGvMyAlxnwMgNeZsDLDHiZ8Tcv17XPK/FUXRS1ahKLvHbNgfs8O8H97Ntx0FIi9Fqv0sDpCMTKs8IrCntWl4thcVtpZF6xcD4gb2JUXrH8qHUWI/aqUt3fYTwVItePlElF6+V+1/2abLsvk6RSbyE7L7BjF0DjtfG11g9dt1yVBUHQS0gar5q3GXi4TVsGzqYXQOPlt6srXfeGbAYln8Rr99reru10AIlXmV4m5bVlXk1bvMR6OoDES4WXSf3SMq9rOm6mA0i8oktVZU5lmVehve43g+Re3E6viNv5HON20sy2da/rBLetTnjtXlV40wE0/0N5W1eL6QASL/flMinzLfNabNt9s2h6Q7xBFtB46YXP3m8ux5+D3RiNVxW0G8PgXafkbp8xxm/be6rzUFtZz++VV8pbN3v//Jvlivr8uLye006HICnl9a18GBN7Lby7JoD2Ij4/nlD5hy8XmIi6y3R9k6PDh1oZo1/3Z5ZvKe+eZsDTQ397QdovrOKDL8ITUh7q4eaCuI+5S8qjUsqr7r8/s6DvOwq84GUAvMww9qqf6sV+letZlL/vvkurpkb+Ey+HhTPRf1CdV5GODpNi7KWXuZcpnVeUjV5nnNqLj16n98L9ssIrlXMzcZBuL10+5nKU/HNeC+8xmuu05dSIz2kBAAAAAAAAAAAAAAAAOX8Ad608luA68LAAAAAASUVORK5CYII="
                        alt=""
                    />
                    <div className="widget__contentTitle">
                        <h5>Codecademy (JU) Chapter</h5>
                        <p>Initiative to provide guidance and awareness</p>
                    </div>
                </div>
            </a>
            <a href="https://medium.com/techsoftware" target="_blank" rel="noreferrer">
                <div className="widget__content">
                    <img
                        src="https://cdn-images-1.medium.com/fit/c/64/64/1*pys6Xb0bV4Ld9KcI8np8QQ.png"
                        alt=""
                    />
                    <div className="widget__contentTitle">
                        <h5>TechSoftware</h5>
                        <p>Technology and Software blends into singularity</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default WidgetOptions;