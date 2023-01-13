import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
import GoalList from "./components/GoalList";

function App() {
  const [goal, setGoal] = useState('');
  const [goalList, setGoalList] = useState([]);
  return (
    <div className="App">
      <Header></Header>
      <Form goal={goal} setGoal={setGoal} goalList={goalList} setGoalList={setGoalList} />
      <GoalList goalList={goalList} setGoalList={setGoalList}/>
    </div>
  );
}

export default App;
