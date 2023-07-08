import React from 'react';
import Card from './Card';
import { useState } from 'react';
import styles from './styles.module.css';
import { AnimatePresence, motion } from 'framer-motion';

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if (category === 'All') {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      console.log(allCourses[0]);
      return allCourses;
    } else {
      //main sirf specific categiry ka data array krunga
      return courses[category];
    }
  }

  return (
    <motion.div layout className={styles.cardContainer}>
      <AnimatePresence>
        {getCourses().map((course) => (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Cards;
