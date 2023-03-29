import React from 'react'
import Sidenav from './sideBar'
import Navbar from './navBar'
import { BsChevronRight} from 'react-icons/bs'
import christian from '../images/christian.png'
import amen from '../images/Amen.png'
import emmanuel from '../images/Emmanuel.png'
import somo from '../images/somo.png'
import oscar from '../images/oscar.png'

const employeePerformance = () =>{
    return(
        <div className='App'>
            <Navbar/>
            <div className='page'>
                <Sidenav />
                <div className='content'>
                    <div className='content-header-one performance'>
                        <div className='header-box'>
                            <h2>Performance Reviews</h2>
                            <div className='progressbarCont'><p className='progressBar completed'></p></div>
                            <p>9/24 Completed (40%)</p>
                        </div>
                        <div className='header-box'>
                            <h2>360 Appraisal</h2>
                            <div className='progressbarCont'><p className='progressBar'></p></div>
                            <p>9/24 in progress(40%)</p>
                        </div>
                        <div className='header-box'>
                            <h2>Goal Reviews</h2>
                            <div className='progressbarCont'><p className='progressBar overdue'></p></div>
                            <p>9/24 Overdue (40%)</p>
                        </div>
                    </div>
                    <div className='employeePerformance'>
                        <div className='homepageGrid-header'>
                            <h2>Employee Performance</h2>
                        </div>
                        <div className='ratingsGrid'>
                            <div className='ratings-grid-header'>
                                <h2>Employee Name</h2>
                                <h2>KPI vs Goals</h2>
                                <h2>Competency</h2>
                                <h2>Ratings</h2>
                                <h2>Final Score</h2>
                            </div>
                            <div className='ratings-grid-content'>
                                <div className='goalTitle'>
                                    <div>
                                        <img src={christian}/>
                                        <p>Christian Apithy</p>
                                    </div>
                                    <div>
                                        <img src={amen}/>
                                        <p>Amen Dossou-Yovo</p>
                                    </div>
                                    <div>
                                        <img src={emmanuel}/>
                                        <p>Emmanuel Sossou</p>
                                    </div>
                                    <div>
                                        <img src={somo}/>
                                        <p>Somogyi Adrián</p>
                                    </div>
                                    <div>
                                        <img src={oscar}/>
                                        <p>Oscar Kossou</p>
                                    </div>
                                    <div>
                                        <img src={oscar}/>
                                        <p>Oscar Kossou</p>
                                    </div>
                                    <div>
                                        <img src={oscar}/>
                                        <p>Oscar Kossou</p>
                                    </div>
                                </div>
                                <div className='goalTitle'>
                                    <p>2.4</p>
                                    <p>5.4</p>
                                    <p>3.4</p>
                                    <p>4.4</p>
                                    <p>3.2</p>
                                    <p>1.4</p>
                                    <p>3.0</p>
                                </div>
                                <div className='goalTitle'>
                                    <p>4.0</p>
                                    <p>4.0</p>
                                    <p>4.0</p>
                                    <p>-</p>
                                    <p>-</p>
                                    <p>-</p>
                                    <p>-</p>
                                </div>
                                <div className='goalTitle'>
                                    <p>Excellent</p>
                                    <p>Satisfactory</p>
                                    <p>Outstanding</p>
                                    <p>-</p>
                                    <p>-</p>
                                    <p>-</p>
                                    <p>14 Sep 2020</p>
                                </div>
                                <div className='goalTitle'>
                                    <p>4.2</p>
                                    <p>4.2</p>
                                    <p>4.2</p>
                                    <p>--</p>
                                    <p>--</p>
                                    <p>--</p>
                                    <p>--</p>
                                </div>
                                <div className='goalTitle right'>
                                    <p>Reviews <BsChevronRight /></p>
                                    <p>Reviews <BsChevronRight /></p>
                                    <p>Reviews <BsChevronRight /></p>
                                    <p>Reviews <BsChevronRight /></p>
                                    <p>Reviews <BsChevronRight /></p>
                                    <p>Reviews <BsChevronRight /></p>
                                    <p>Reviews <BsChevronRight /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default employeePerformance