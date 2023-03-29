import React from 'react'
import Navbar from './navBar'
import Sidebar from './sideBar'
import { CiSearch } from 'react-icons/ci';
import christian from '../images/christian.png'
import amen from '../images/Amen.png'
import emmanuel from '../images/Emmanuel.png'
import somo from '../images/somo.png'
import oscar from '../images/oscar.png'


const Employee = ()=>{
    return(
        <div className='App'>
            <Navbar/>
            <div className='page'>
                <Sidebar/>
                <div className='content'>
                    <div className='employeePage'>
                        <div className='employeeTop'>
                            <div className='employeeSearch'>
                                <CiSearch className='home'/>
                                <input placeholder='Find employee'/>
                            </div>
                            <button>Add Employee</button>
                        </div>
                        <div className='performanceGrid'>
                            <h2 className='performance-header'>Employee Status</h2>
                            <div className='performance-grid-header'>
                                <h2>Employee</h2>
                                <h2>Employee ID</h2>
                                <h2>Email Address</h2>
                                <h2>Role</h2>
                                <h2>Gender</h2>
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
                                </div>
                                <div className='performance-grid-column date'>
                                    <p>44312</p>
                                    <p>95832</p>
                                    <p>39083</p>
                                    <p>50349</p>
                                    <p>84732</p>
                                </div>
                                <div className='performance-grid-column date'>
                                    <p>danghoang87hl@gmail.com</p>
                                    <p>joshua74@schuster.com</p>
                                    <p>veda.prosacco@gmail.com</p>
                                    <p>thuhang.nute@gmail.com</p>
                                    <p>ckctm12@gmail.com</p>
                                </div>
                                <div className='performance-grid-column middle'>
                                    <p>Staff</p>
                                    <p>Admin</p>
                                    <p>Staff</p>
                                    <p>Staff</p>
                                    <p>Staff</p>
                                </div>
                                <div className='performance-grid-column date'>
                                    <p>Female</p>
                                    <p>Male</p>
                                    <p>Female</p>
                                    <p>Male</p>
                                    <p>Female</p>
                                </div>
                                <div className='performance-grid-column date last'>
                                    <p>Inactive</p>
                                    <p>Active</p>
                                    <p>Inactive</p>
                                    <p>Active</p>
                                    <p>Active</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employee