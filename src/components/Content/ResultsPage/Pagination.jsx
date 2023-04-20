import './Pagination.scss'

export default function Pagination ({ currentPage, resultsPerPage, totalResults, onPageChange }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
    }

    return (
        <div className='pagination__container'>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                <li key={number} className="page-item">
                    <a onClick={(e) => onPageChange(e, number)} href="#" className={currentPage === number ? "page-link active" : 'page-link'}>
                    {number}
                    </a>
                </li>
                ))}
            </ul>
        </div>
    );
}