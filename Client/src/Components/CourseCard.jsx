import React from 'react'

const CourseCard = ({ courses }) => {
    console.log(courses)
    return (
        <>
            {courses && courses.map((course, index) => (
                <div key={index} className="course-card">
                    <h3>{course.title}</h3>
                    <p>{course.desc}</p>
                    <p>Duration: {course.duration} months</p>
                </div>
            ))}
        </>
    )
}

export default CourseCard;