import styles from './styles.module.css';
import { motion } from 'framer-motion';

const Card = ({ course, likedCourses, setLikedCourses }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className={styles.card}
    >
      <div>
        <img className={styles.cardImage} src={course.image.url}></img>
      </div>
      <div layout className={styles.cardDescription}>
        <h1>{course.title}</h1>
        <p>{course.description}</p>
      </div>
    </motion.div>
  );
};

export default Card;
