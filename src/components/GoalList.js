import Goal from './Goal'

const GoalList = ({goalList, setGoalList}) => {
    return(<div>
        {goalList.map((goalItem) => (
            <Goal key={goalItem.id} goalItem={goalItem} goalList={goalList} setGoalList={setGoalList}/>
        ))}
    </div>)
}

export default GoalList