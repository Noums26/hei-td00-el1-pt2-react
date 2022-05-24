import React from 'react';

export const CardHeader = ({title, icon}) => {
    return (
        <div className="card-header">
            {icon != '' ? <i className={icon}> </i> : null}
            {title}
        </div>
    );
};

export const CardBody = ({children}) => {
    return (
        <div className="card-body">
            {children}
        </div>
    )
}

const CardMaster = ({addStyle, children, title, icon}) => {
    if (title == null) {
        return (
            <div className={"card " + addStyle}>
            <CardBody>
                {children}
            </CardBody>
        </div>
        )        
    }

    return (
        <div className={"card " + addStyle}>
            <CardHeader title={title} icon={icon} />
            <CardBody>
                {children}
            </CardBody>
        </div>
    );
};

export default CardMaster;