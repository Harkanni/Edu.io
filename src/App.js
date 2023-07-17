import { useEffect, useState } from "react"
import Cards from "./components/Cards";
import Spinner from "./components/Spinner"
import CourseNavigation from "./components/CourseNavigation";
import styles from "./components/styles.module.css"
import { motion, AnimatePresence } from "framer-motion";

import { apiUrl, filterData } from "./data";
import courseData from "./courses.json"

function App() {
  const [cardState, setCardState] = useState([])
  const [category, setCategory] = useState(filterData[0].title)
  const [loading, setLoading] = useState(true)


async function setData() {
  setLoading(true)
  try {
      // let response = await fetch(apiUrl)
      // let output = await response.json()
      setCardState(courseData.data)
  } catch (error) {
      alert(error)
  }
  finally {
    setLoading(false)
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
        <CourseNavigation nav={filterData} category={category} setCategory={setCategory}></CourseNavigation>

        { loading ? (<Spinner></Spinner>) : (<Cards category={category} courses={cardState} setCardState={setCardState}></Cards>)}
      </div>
      
    </div>
  );
}

export default App;
