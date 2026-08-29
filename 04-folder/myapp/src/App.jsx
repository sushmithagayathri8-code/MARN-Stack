import React from 'react'
import Card from './components/Card.jsx'

const jobOpenings=[
  {
    img:"https://pngimg.com/uploads/meta/meta_PNG12.png",
    company:"Meta",
    duration:"3 days ago",
    role:"Frontend Engineer",
    tag1:"Remote",
    tag2:"Senior level",
    pay:"$8000",
    location:"Bangalore"
  },
  
];


const App = () => {
  return (
    <div className='parent'>
      {/* <Card img="" company="" duration="" role="" tag1="" tag2="" pay="" location=""/> */}
      {jobOpenings.map((e)=>{
        return <Card img={e.img} company={e.company} duration={e.duration} role={e.role} tag1={e.tag1} tag2={e.tag2} pay={e.pay} location={e.location}/>
      })}      
    </div>
  )
}

export default App