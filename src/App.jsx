import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  
  // <TaskForm createTask={createTask} />
  // <TaskList tasks={tasks} deleteTask={deleteTask}/>

  return (
    <main className="bg-zinc-900 h-screen">
     <div className="container mx-auto p-10">
       <TaskForm/>
       <TaskList/>
     </div>
    </main>
  );
}

export default App;
