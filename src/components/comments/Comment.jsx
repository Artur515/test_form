import React from 'react';


const Comment = ({created_at, name, text, visible}) => {
    return (
        <div className="card border-info mb-3">
            <div className="card-body">
                <h4 className="card-title text-warning ">Name :{name}</h4>
                <h6 className="card-subtitle mb-2 text-muted">created: {created_at}</h6>
                <p className="card-text">{text}</p>
            </div>
        </div>

    );
};

export default Comment;