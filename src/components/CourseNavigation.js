import styles from "./styles.module.css"


const CourseNavigation = ({nav}) => {
    return (
        <div>
            <nav>
                {nav.map((navItem) => (
                    <li key={navItem.id} className={styles.navItem}>{navItem.title}</li>
                ))}
            </nav>
        </div>
    )
}

export default CourseNavigation;