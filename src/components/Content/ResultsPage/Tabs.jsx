import { useState } from 'react'
import './Tabs.scss'
import {IoIosArrowDown} from 'react-icons/io'
import {VscSearch} from 'react-icons/vsc'

export default function Tabs () {
    const [tab, setTab] = useState(1);

    const toggleTab = (index) => {
        setTab(index)
    }
    return (
        <div className="container">
            <div className="bloc-tabs">
                <div className={tab === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>SEARCH PRODUCTS</div>
                <div className={tab === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>LIST OF RESERVATIONS</div>
                <div className={tab === 3 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(3)}>SEND TASK</div>
            </div>
            <div className="content-tabs">
                <div className={tab === 1 ? 'content content-active' : 'content'}>
                    <div className="form">
                            <div className='form-col'>
                                <label htmlFor="destination">Destination:</label>
                                <select name="destination" id="destination">
                                    <option value="select" selected disabled>Select</option>
                                </select>
                                <label htmlFor="start_date">Date from:</label>
                                <input type="date" id="start_date"/>
                                <label htmlFor="end_date">To:</label>
                                <input type="date" id="end_date"/>
                            </div>
                            <div className='form-col'>
                                <label htmlFor="type">Type:</label>
                                <select name="type" id="type">
                                    <option value="select" selected disabled>Select</option>
                                </select>
                                <label htmlFor="adults">Adult:</label>
                                <select name="adults" id="adults">
                                    <option value="select" selected disabled>Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                <label htmlFor="children">Children:</label>
                                <select name="children" id="children">
                                    <option value="select" selected disabled>Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>

                            <div className="form-col">
                                <label htmlFor="indication">Indication:</label>
                                <select name="indication" id="indication">
                                    <option value="select" selected disabled>Select</option>
                                </select>  
                                <label htmlFor="category">Category:</label>
                                <select name="category" id="category">
                                    <option value="select" selected disabled>Select</option>
                                </select>
                                
                            </div>                                                    
                    </div>
                    <div className='form-bottom'>
                        <button className='form-bottom-more'>More options  <IoIosArrowDown/></button>
                        <button className='form-bottom-search' type="submit"><VscSearch/>Search</button>
                    </div>

                </div>
                <div className={tab === 2 ? 'content content-active' : 'content'}>
                    <h2>List of reservations</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis qui nemo, eaque natus quam commodi. Quia ducimus minus quisquam dolor recusandae, asperiores blanditiis! Vero porro provident quibusdam culpa, soluta cum.</p>
                </div>
                <div className={tab === 3 ? 'content content-active' : 'content'}>
                    <h2>Send task</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis qui nemo, eaque natus quam commodi. Quia ducimus minus quisquam dolor recusandae, asperiores blanditiis! Vero porro provident quibusdam culpa, soluta cum.</p>
                </div>

            </div>
        </div>
    )
}