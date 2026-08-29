import React from 'react'

const Card = (props) => {
  return (
    // <div className="card">
    //   <img src="https://img.magnific.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
    //   <h1>Bunty, 21</h1>
    //   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae expedita iusto nesciunt!</p>
    //   <button>View Profile</button>
    // </div>
    <div className="card">
      <img src="https://img.magnific.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
      <h1>{props.user}, {props.age}</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae expedita iusto nesciunt!</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card