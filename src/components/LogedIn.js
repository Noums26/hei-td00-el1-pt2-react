import React from 'react';

const LogedIn = ({identifiant}) => {
    return (
        <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            {identifiant}
        </div>
    );
};

export default LogedIn;