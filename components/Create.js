import { toast } from "react-toastify";
// import "./globals.css";
// import css from "./Create.module.css";

const Create = (props) => {
    const {
        title,
        settitle,
        description,
        setDescription,
        status,
        setStatus,
        activeTask,
        tasks,
        setTasks,
        setActiveTask,
    } = props;

    const SubmitHandler = (e) => {
        e.preventDefault();

    // Validation 
    if (title.length < 5 || description.length < 10) {
        toast.error("Title and Description must be more than 5 and 10 characters respectively");
        return;
      }

      
    const data = {
        title,
        description,
        status,
        date: new Date().toLocaleDateString(),
      };

      setTasks ([...tasks,data])

      settitle("");
      setDescription("");
      setStatus("Due");
    };

      const UpdateTask = (e) => {
        e.preventDefault();
        const copyTasks = [...tasks];
        copyTasks[activeTask] = {...copyTasks[activeTask],
            title,
            description,
            status,
        };
        setTasks(copyTasks);
        setActiveTask(null);
        settitle("");
        setDescription("");
        setStatus("due");
    };

  return (
      <form>
        <h2>Task Here...</h2>
        <input className = "form-control mb-3" 
         type="text"
         placeholder='Title' 
         value={title} 
         onChange={(e) => settitle(e.target.value)} />

        <textarea 
        className = "form-control mb-3" 
        placeholder='Description here...' 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}></textarea>
    
       <select value={status} 
       className = "form-control mb-3" 
       onChange={(e) => setStatus(e.target.value)}>

          <option value="due">Due</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        {activeTask === null ? (
                <button onClick={SubmitHandler}className="btn btn-primary">
                    Create Task
                </button>
            ) : (
                <button onClick={UpdateTask} 
                className="btn btn-primary">
                    Update Task
                </button>
            )}
      </form>
  );
};

export default Create;

