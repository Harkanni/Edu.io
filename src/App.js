import { useEffect, useState } from "react"
import Cards from "./components/Cards";
import Spinner from "./components/Spinner"
import CourseNavigation from "./components/CourseNavigation";
import styles from "./components/styles.module.css"

import { apiUrl, filterData } from "./data";
import courseData from "./courses.json"

function App() {
  const [cardState, setCardState] = useState(null)
  const [category, setCategory] = useState("All")
  const [loading, setLoading] = useState(null)


async function setData() {
  setLoading(true)
  try {
      let response = await fetch(apiUrl)
      let output = await response.json()
      console.log(output)
      setCardState(courseData)
      // console.log(cardState)
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
        <CourseNavigation nav={filterData}></CourseNavigation>

        {loading ? <Spinner></Spinner> : <Cards category={category} cardData={cardState} setCardState={setCardState}></Cards>}
      </div>
      
    </div>
  );
}

export default App;
