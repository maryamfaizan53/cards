import React from 'react'
 interface Tprops{
  name:string;
  age:number;
  rollno:number;
  day:string;
  slot:string;
 }

const page = (props:Tprops) => {
  return (
    <div>
         <div>
     <h1>name:{props.name}</h1>
     <h1>age:{props.age}</h1>
     <h1>rollno:{props.rollno}</h1>
     <h1>day:{props.day}</h1>
     <h1>{props.slot}</h1>
    </div>




    </div>
  )
}

export default page

