// import React from 'react'
import { HiMiniBarsArrowDown } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";


const Sidebar = () => {
  return (
    <div className='sidebar'>
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
</div>
  )
}

export default Sidebar