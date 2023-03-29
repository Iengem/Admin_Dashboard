import React from 'react'
import Sidenav from './sideBar'
import Navbar from './navBar'
import christian from '../images/christian.png'
import amen from '../images/Amen.png'
import emmanuel from '../images/Emmanuel.png'
import somo from '../images/somo.png'
import oscar from '../images/oscar.png'


const goals = () =>{
    return(
        <div className='App'>
            <Navbar/>
            <div className='page'>
                <Sidenav />
                <div className='content'>
                    <div className='adminGoal-page'>
                        <div className='content-header-one'>
                            <div className='header-box first-box'>
                                <h1>24</h1>
                                <p>Goals in total</p>
                            </div>
                            <div className='header-box'>
                                <h2>Completed</h2>
                                <div className='progressbarCont'><p className='progressBar completed'></p></div>
                                <p>10/24 Completed (42%)</p>
                            </div>
                            <div className='header-box'>
                                <h2>Goals</h2>
                                <div className='progressbarCont'><p className='progressBar'></p></div>
                                <p>4/24 in progress(16%)</p>
                            </div>
                            <div className='header-box'>
                                <h2>Goals</h2>
                                <div className='progressbarCont'><p className='progressBar overdue'></p></div>
                                <p>10/24 Overdue (42%)</p>
                            </div>
                        </div>
                        <div className='employeePage'>
                            <div className='performanceGrid'>
                                <h2 className='performance-header'>Goals</h2>
                                <div className='performance-grid-header'>
                                    <h2>Employee Name</h2>
                                    <h2>Goal Title</h2>
                                    <h2 className='goal-column'>Category</h2>
                                    <h2>Start Date</h2>
                                    <h2>End Date</h2>
                                    <h2>Status</h2>
                                </div>
                                <div className='performance-grid-content'>
                                    <div className='performance-grid-column'>
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
                                    <div className='performance-grid-column date'>
                                        <p>Change Reservoir</p>
                                        <p>Inspect Temperature</p>
                                        <p>inspect Hydraulic Level</p>
                                        <p>Check Bearings</p>
                                        <p>Grease Bearings</p>
                                        <p>Grease Bearings</p>
                                        <p>Grease Bearings</p>
                                    </div>
                                    <div className='performance-grid-column date goal-column'>
                                        <p>Access Management</p>
                                        <p>App Integration</p>
                                        <p>App Testing</p>
                                        <p>Business Process Management</p>
                                        <p>Case Management</p>
                                        <p>Case Management</p>
                                        <p>Case Management</p>
                                    </div>
                                    <div className='performance-grid-column middle'>
                                        <p>03 Aug 2020</p>
                                        <p>06 Jun 2020</p>
                                        <p>14 Sep 2020</p>
                                        <p>02 Nov 2020</p>
                                        <p>14 Sep 2020</p>
                                        <p>14 Sep 2020</p>
                                        <p>14 Sep 2020</p>
                                    </div>
                                    <div className='performance-grid-column date'>
                                        <p>1 Jan 2022</p>
                                        <p>4 Apr 2022</p>
                                        <p>11 Nov 2022</p>
                                        <p>3 Mar 2022</p>
                                        <p>3 Mar 2022</p>
                                        <p>3 Mar 2022</p>
                                        <p>1 Jan 2022</p>
                                    </div>
                                    <div className='performance-grid-column date last'>
                                        <p className='Overdue'>Overdue</p>
                                        <p className='Successful'>Completed</p>
                                        <p className='Cancelled'>In Progress</p>
                                        <p className='Successful'>Completed</p>
                                        <p className='Successful'>Completed</p>
                                        <p className='Successful'>Completed</p>
                                        <p className='Successful'>Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default goals