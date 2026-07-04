function Tasks() {
  return (
    <div>
      <div className="logo text-xl font-bold ">
        <img src="logo.png" alt="logo" /> <p>StudyFlow</p>
      </div>

      <div className="content p-4 bg-gray-100 w-full ">
        <div className="greeting">
          <div>
            <h1 className="text-3xl font-bold">Good Evening, Alex!</h1>
            <p className="text-gray-600">Friday, July 3, 2026.</p>
          </div>
          <div>
            <button className=""> + Add Task</button>
          </div>
        </div>

        <div className="card w-full flex justify-between  pt-4 gap-4">
          <button>All Tasks</button>
          <button>Due Today</button>
          <button>High Priority</button>
          <button>Completed</button>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Tasks;
