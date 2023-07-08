import { useEffect, useState } from "react"
import Cards from "./components/Cards";
import CourseNavigation from "./components/CourseNavigation";
import styles from "./components/styles.module.css"

import { filterData } from "./data";
import courseData from "./courses.json"

function App() {
  const [cardState, setCardState] = useState(null)
  const [category, setCategory] = useState("All")


const setData = async () => {
  try {
      let response = await fetch("../courses.json")
      setCardState(courseData)
      console.log(cardState)
  } catch (error) {
      alert(error)
  }
}
  useEffect(() => {
      setData()
  }, [])



  return (
    <div >
      <header className={styles.header}>
        <h1>Top Courses</h1>
      </header> 

      <div className={styles.main}>
        <CourseNavigation nav={filterData}></CourseNavigation>

        <Cards category={category} cardData={cardState} setCardState={setCardState}></Cards>
      </div>
      
    </div>
  );
}

export default App;
