import React from 'react';


const Pagination = ({page, setCheckedPage, checkedPage}) => {
    return (
        <div>
            <ul className="pagination pagination-sm">
                <li onClick={() => {
                    setCheckedPage(page)
                }} className={checkedPage === page ? 'page-item disabled' : 'page-item active'}>
                    <div className='page-link'>{page}</div>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;