import React from 'react';
import Navbar from './navBar';
import Sidenav from './sideBar';


const settings = () =>{
    return(
      <div className='App'>
      <Navbar/>
      <div className='page'>
          <Sidenav />
          <div className='content'>
              <div className='settingsAdmin'>
                  <h2>AA</h2>
                  <div>
                    <h1>Adebisi Akin</h1>
                    <p>Product Manager (Owner)</p>
                  </div>
              </div>
              <div className='settingsContent'>
                  <div className='settingsContent-left'>
                        <h2>Company details</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Purus odio porttitor dignissim orci non purus. Nunc nisi ut </p>
                    </div>
                    <form>
                      <div className='twoCol-row'>
                        <div>
                          <label>Company name</label>
                          <input placeholder='Aya & Co.'/>
                        </div>
                        <div>
                          <label>Business Type</label>
                          <select>
                            <option selected>--Select option--</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label>Address</label>
                        <input placeholder='adebis@aya.com'/>
                      </div>
                      <div className='twoCol-row'>
                        <div>
                          <label>Country</label>
                          <select>
                            <option selected>Nigeria</option>
                          </select>
                        </div>
                        <div>
                          <label>State</label>
                          <select>
                            <option selected>Lagos</option>
                          </select>
                        </div>
                      </div>
                      <div className='twoCol-row'>
                        <div>
                          <label>Number of employees</label>
                          <select>
                            <option selected>--Select Option--</option>
                          </select>
                        </div>
                        <div>
                          <label>Reg no.</label>
                          <input placeholder='622342'/>
                        </div>
                      </div>
                    </form>
                </div>
            </div>
      </div>
  </div>
    )
}

export default settings