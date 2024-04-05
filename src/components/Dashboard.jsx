//import React from 'react'

import "./Dashboard.css"

import Sidebar from './Sidebar';
import Assignment from './Assignment';




const Dashboard = () => {
  return (
    <div className='container'>
        
        {/* <div className='sidebar'>
            <div className='top-section'>
            <HiMiniBarsArrowDown className='arrow'/>
            <h1 className='heading'>Hi, AltWorld</h1>
            </div>
            <div className='home-container'>
            <div className='top-section2'>
            <button className='button'><IoHomeOutline className='home'/></button>
            <h1 className='heading'>Dashboard</h1>
            </div>

            <div className='box-container'>
                <button className='add'><IoAdd/></button>
                <br/>
                <h1 className='head'>New Assignment</h1>
                <p className='paragraph'>Select From Pre-defined Questions to have a quick turnaround</p>
            </div>
            </div>
        </div> */}
        <Sidebar/>

        {/* <div className='upper-page'>
        <h1 className='Pages'>Pages/Assignment</h1>
        <p className='upper'>Sales BDE</p>
        <div className='project-card'>

            <div className='sales'>
                <h1 className='sales-head'>Sales BDE</h1>
                <div className='sales2'>
                <p className='sales-para'>Active</p>
                <button className='mark'><FaPen/></button>
                </div>
            </div>

            <div className='sales'>
                <h1 className='sales-head'>Assignment Link</h1>
                <img src='' alt=''/>
            </div>

            <div className='sales'>
                <h1 className='sales-head'>Assignment Hour</h1>
                <p>Hours</p>
            </div>

            <div className='sales'>
                <h1 className='sales-head'>Assignment Ends At</h1>
                <p>11 March 2024</p>
            </div>
            <div>
            <button><FaGoogleDrive/> To Review</button>
            <button><IoPersonAddSharp/> Shortilisted</button>
            </div>

            <div>
                <h1>Candidate</h1>
                <h1>Score</h1>
            </div>


            <div className='candidate-details'>
                <div>
                <img src='' alt=''/>
                <h1>Saurav Singh</h1>
                <p>Mail</p>
                </div>
                <p>Score</p>
            </div>

        </div>
        </div> */}
        <Assignment/>
        
    </div>
  )
}

export default Dashboard