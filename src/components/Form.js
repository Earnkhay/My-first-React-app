import styles from '../style.module.css'
import shortid from 'shortid';
 
const Form = ({goal, setGoal, goalList, setGoalList}) => {
    const handleChange =(e) => {
        setGoal(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setGoalList([...goalList, {name: goal, id: shortid.generate()}])
        setGoal('')
    }
    
    return <div className={styles.goalForm}>
        <form onSubmit={handleSubmit}>
            <input value={goal} onChange={handleChange} className={styles.goalInput} placeholder="Add your Goal"></input>
            <button type='submit' className={styles.goalButton}>Add</button>
        </form>
    </div>
}

export default Form