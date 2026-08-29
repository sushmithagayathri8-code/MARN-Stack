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
  {
    img:"https://datawider.com/wp-content/uploads/2025/10/Amazon_Logo-font.jpg",
    company:"amazon",
    duration:"10 days ago",
    role:"Frontend Engineer",
    tag1:"Remote",
    tag2:"Senior level",
    pay:"$15000",
    location:"hyd"
  },
  {
    img:"https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/29/41/8b/29418bae-5722-ec62-c08b-c33cb69705fe/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png",
    company:"zomato",
    duration:" 15 days ago",
    role:"delivery boy",
    tag1:"Remote",
    tag2:"part time",
    pay:"$1000",
    location:"vijayawada"
  },
  {
    img:"https://th.bing.com/th/id/OIP.LugGFdeWnec5XLf-8oLkuQHaEK?w=276&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    company:"Tcs",
    duration:"1week ago",
    role:"Frontend Engineer",
    tag1:"Remote",
    tag2:"Senior level",
    pay:"$18000",
    location:"hyd"
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