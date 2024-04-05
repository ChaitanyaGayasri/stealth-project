import {useState} from 'react'

const User = () => {

    const [about,setAbout] = useState("")
console.log(about)
  return (

      
      [0, 1, 2, 3, 4, 5].map((item,) => (

          // eslint-disable-next-line react/jsx-key
          <div className='candidate-details' onClick={() => setAbout(item)}>
              <div className='user-details'>
                  <img className='img' src='https://i.postimg.cc/brJC2dZR/8222-1.jpg' alt='' />
                  <h1 className='user-head'>Saurav Singh</h1>
                  <br />

              </div>
              <p>75%</p>
          </div>

      ))
          
  )
}

export default User