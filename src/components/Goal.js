import styles from '../style.module.css'

const Goal = ({goalItem, goalList, setGoalList}) => {
    const deleteGoal = () => {
        setGoalList(goalList.filter((item) => item.id !== goalItem.id))
    }
    return(<div>
        <div className={styles.goalItem}>
            <h3 className={styles.goalname}>{goalItem.name}</h3>
            <button onClick={deleteGoal} className={styles.delBtn}>Done</button>
        </div>
    </div>)
}

export default Goal