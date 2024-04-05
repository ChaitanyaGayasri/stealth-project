
import { FaPen } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa6";
import { IoPersonAddSharp } from "react-icons/io5";
import  { useEffect, useState } from 'react';

const Header = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://iidqq7w3ik.execute-api.ap-south-1.amazonaws.com/dev/assignment_details')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1 className='Pages'>Pages/Assignment</h1>
            <p className='upper'>{data.title}</p>

            <div className='project-card'>

                <div className='sales'>
                    <h1 className='sales-head1'>Sales BDE</h1>
                    <div className='sales2'>
                        <p className='sales-para'>Active</p>
                        <button className='mark'><FaPen /></button>
                    </div>
                </div>

                <div className='sales'>
                    <h1 className='sales-head'>Assignment Link</h1>
                    <img src='' alt='' />
                </div>

                <div className='sales'>
                    <h1 className='sales-head'>Assignment Hour</h1>
                    <p>{data.assignmentHour}</p>
                </div>

                <div className='sales'>
                    <h1 className='sales-head'>Assignment Ends At</h1>
                    <p>{data.assignmentEndsAt}</p>
                </div>
                <div className='btn-container'>
                    <button className='btn1'><FaGoogleDrive /> To Review</button>
                    <br />
                    <button className='btn2'><IoPersonAddSharp /> Shortlisted</button>
                </div>

                <div className='score'>
                    <h1 className='h1'>Candidate</h1>
                    <h1 className='h1'>Score</h1>
                </div>

            </div>

        </div>
    );
};

export default Header;








