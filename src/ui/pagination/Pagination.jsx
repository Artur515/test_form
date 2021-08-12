import React from 'react';

const Pagination = ({page, setCheckedPage}) => {
    return (
        <div>
            <ul className="pagination pagination-sm">
                <li onClick={() => {
                    setCheckedPage(page)
                }} className="page-item disabled page-link">
                    {page}
                </li>
            </ul>
        </div>
    );
};

export default Pagination;