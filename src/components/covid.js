import React, { useEffect, useState } from 'react'
import './covid.css';

const Covid = () => {

    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json')
            const actualData = await res.json();
            console.log(actualData.cases_time_series[45]);
            setData(actualData.cases_time_series[45]);
        }
        catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <section >
                <div className="heading">
                    <h1> 🔴Live</h1>
                    <h2> Covid-20 Corona Virus tracker </h2>
                </div>

                <div className='main-section'>
                    <div className='secion1'>
                        <div className='card1'>
                            <h3><span>Our </span>Country</h3>
                            <h1>PAKISTAN </h1>
                        </div>

                        <div className='card2'>
                            <h3><span>Total </span>Recoverd</h3>
                            <h1>{data.totalrecovered} </h1>
                        </div>

                        <div className='card3'>
                            <h3><span>Total </span>Confirmed</h3>
                            <h1>{data.totalconfirmed} </h1>
                        </div>
                    </div>
               

                <div className='section2' >

                    <div className='card4'>
                        <h3><span>Total </span>Death</h3>
                        <h1>{data.totaldeceased}</h1>
                    </div>

                    <div className='card5'>
                        <h3><span>Daily </span>Confirmed</h3>
                        <h1>{data.dailyconfirmed}</h1>
                    </div>
                    <div className='card6'>
                        <h3><span>Last </span>Update</h3>
                        <h1>{data.date} </h1>
                    </div>

                </div>
                </div>
                {/* <ul>
                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner ">
                                <p className="class__name"><span>Our </span>Country</p>
                                <p className="card__total card__small">PAKISTAN </p>
                            </div>

                        </div>

                    </li>

                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner ">
                                <p className="class__name"><span>Total </span>Recoverd</p>
                                <p className="card__total card__small">{data.totalrecovered} </p>
                            </div>

                        </div>

                    </li>

                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner ">
                                <p className="class__name"><span>Total </span>Confirmed</p>
                                <p className="card__total card__small">{data.totalconfirmed} </p>
                            </div>

                        </div>

                    </li>

                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner ">
                                <p className="class__name"><span>Total </span>Death</p>
                                <p className="card__total card__small">{data.totaldeceased}</p>
                            </div>

                        </div>

                    </li>

                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner ">
                                <p className="class__name"><span>Daily </span>Confirmed</p>
                                <p className="card__total card__small">{data.dailyconfirmed}</p>
                            </div>

                        </div>

                    </li>

                    <li className="card">
                        <div className="card__main">
                            <div className="card__inner ">
                                <p className="class__name"><span>Last </span>Update</p>
                                <p className="card__total card__small">{data.date} </p>
                            </div>

                        </div>

                    </li>


                </ul> */}
            </section>
        </>
    )
}

export default Covid

