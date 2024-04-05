


//import React from 'react';
import About from './About';

const Card = () => {
    return (
        <div className='card-container'>
            
            <div className='card'>
                <div className='person'>
                    <div className='main'>
                        <img className='img' src='https://i.postimg.cc/brJC2dZR/8222-1.jpg' alt='' />
                        <h1 className='user-head'>Saurav Singh</h1>
                    </div>
                    <p className='ele'>75%</p>
                </div>
                <div className='behavior'>
                    <h1 className='main-head'>behavioural</h1>
                    <button style={{ backgroundColor: 'green', width: "200px",margin:"20px" ,color: 'white', padding: '8px 15px', borderRadius: '10px', border: 'none' }}>
                    </button>
                    <p className='num'>9/10</p>
                </div>


                <div className='behavior'>
                    <h1 className='main-head'>communcation</h1>
                    <button style={{ backgroundColor: 'green', width: "200px", margin: "20px", color: 'white', padding: '8px 15px', borderRadius: '10px', border: 'none' }}>
                    </button>
                    <p className='num'>9/10</p>
                </div>

                <div className='behavior'>
                    <h1 className='main-head'>Sitation handling</h1>
                    <button style={{ backgroundColor: 'green', width: "200px", margin: "20px", color: 'white', padding: '8px 15px', borderRadius: '10px', border: 'none' }}>
                    </button>
                    <p className='num'>9/10</p>
                    </div>
                    
                <About/>
            </div>

            
            </div>
    );
}

export default Card;

