import React from 'react'
import Card from './Card'

// import Card from "./Card"

const Cards = ({cardData, setCardState, category}) => {

    const dataArray = () => {
        if(category == "All") {
            let allCoursesArray = []
            Object.values(cardData).forEach((data) => {
                data.forEach((courseData) => {
                    allCoursesArray.push(courseData)
                })
            })
            return allCoursesArray
        }
    }


    // console.log(cardData)
    dataArray()
    console.log("Done")
    return (
        <div>
        </div>
    )
}

export default Cards