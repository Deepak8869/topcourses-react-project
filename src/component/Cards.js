import React from 'react';
import Card from './Card';

const Cards = ({courses}) => {
    let allCourses = []; 

    //return you a list of all courses from the api response
    const getCourses = ()=>{
        console.log("printion course");
        console.log(courses);
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })
       return allCourses;
    }
  return (
    <div className='flex justify-center items-center gap-4 mb-4'>
        {
        getCourses().map((course) => {
            return <Card key={course.id} course={course}/>
        }
        )
    }
    </div>
  )
}

export default Cards;