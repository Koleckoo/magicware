import './Result.scss'
import {AiFillStar} from 'react-icons/ai'
import {FaThumbsUp} from 'react-icons/fa'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io'

export default function Result({hotel}) {

    return (
    <div className='result'>
        <div className='result__top'>
            <div className='result__header'>
                <div className='result__header-image'>
                    <img src={hotel.img} alt="room image" />
                </div>
                <div className='result__header-description'>
                <h3 className='result__header-description-name'>{hotel.name}</h3>
                <p>{hotel.location}</p> 
                </div>           
                <div className='result__header-stars'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                <div className='result__header-icon'><FaThumbsUp/></div>
            </div>
            <div className="result__price">
                <div className='result__price-elements'>
                    <div className='result__price-elements-price'>Price</div>
                    <div className='result__price-elements-number'>{hotel.price} EUR</div>
                    <div className='result__price-elements-icon'><BsFillInfoCircleFill/></div>
                </div>
                <div className='result__price-nights'>Per 5 nights</div>
                <button className='result__price-btn'>BOOK</button>
            </div>
        </div>
        <div className='result__buttons'>
            <button>Description</button>
            <button>Images</button>
            <button>Map</button>
            <button>Reviews</button>
        </div>
        <div className='result__table'>
            <table>
                <thead>
                    <tr>
                        <th>Room</th>
                        <th>Board</th>
                        <th>Date</th>
                        <th>Cancellation Policy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Double or twine standard</th>
                        <th>BB</th>
                        <th>21/12/2023-30/01/2023</th>
                        <th><BsFillInfoCircleFill/>from 25/12/2023</th>
                    </tr>
                </tbody>
            </table>
        <button className='result__more'>View more prices and board types  <IoIosArrowDown/></button>
        </div>

    </div>)
}