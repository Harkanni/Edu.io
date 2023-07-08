import styles from "./styles.module.css"


const CourseNavigation = ({nav, category, setCategory}) => {
    const filterCategory = (event) => {
        console.log(event, event.target.innerHTML)
        setCategory(event.target.innerHTML)
    }
    console.log(category)

    return (
        <div>
            <nav>
                {nav.map((navItem) => (
                    <li onClick={filterCategory} key={navItem.id} className={navItem.title == category ? styles.navItemActive : styles.navItem}>{navItem.title}</li>
                ))}
            </nav>
        </div>
    )
}

export default CourseNavigation;