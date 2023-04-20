import './ResultsPage.scss'
import {AiFillStar} from 'react-icons/ai'
import {IoIosArrowUp} from 'react-icons/io'
import Tabs from './Tabs'
import Result from './Result'
import hotels from './hotels'
import Pagination from './Pagination'
import { useState } from 'react'

export default function ResultsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 3;
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = hotels.slice(indexOfFirstResult, indexOfLastResult);

    const handlePageChange = (event, pageNumber) => {
        event.preventDefault();
        setCurrentPage(pageNumber);
    }
    return <section>
        <div className='header'>
            <div className='header__name'>
                <div className='header__name-name'>Hotel Angello Prague</div> 
                <div className='header__name-stars'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
            </div>
            <div className='header__info'>
                <div className='header__info-discount'>15% OFF</div>
                <button className='header__info-btn'>More</button>
            </div>
        </div>
        <div className='tabs'>
            <Tabs/>
        </div>
        <div className='filter'>
            <div>Sort by:</div>
            <div>Price <IoIosArrowUp/></div>
            <div>|</div>
            <div>Category <IoIosArrowUp/></div>
        </div>
        <div className='results'>
            {currentResults.map((hotel) => {
                return <Result key={hotel.id} hotel={hotel}/>
            })}
        </div>
        <Pagination currentPage={currentPage} resultsPerPage={resultsPerPage} totalResults={hotels.length} onPageChange={handlePageChange}/>
    </section>
}