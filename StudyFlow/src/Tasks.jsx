function Tasks() {
  return (
    <div>
      <div className="logo text-xl font-bold ">
        <img src="logo.png" alt="logo" /> <p>StudyFlow</p>
      </div>

      <div className="content p-4 bg-gray-100 w-full ">
        <div className="Header">
          <div>
            <h1 className="text-3xl font-bold">Tasks</h1>
            <p className="text-gray-600">5 pending</p>
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

        <div>
          <div className="p-4">
            <div className="flex justify-between pb-4">
              <label htmlFor="task" className="flex flex-row gap-4">
                <input type="radio" myRadio="" id="task" value="task" />
                <div>
                  <p>Complete Problem Set 5</p>
                  <div className="text-gray-400">
                    <p> MATH 202</p>
                    <p>Today</p>
                  </div>
                </div>
              </label>

              <div className="flex flex-col justify-items-end">
                <p className="bg-red-100 text-red-500 border-2 border-red-400 rounded-2xl w-14 text-center items-end">
                  High
                </p>
              </div>
            </div>

            <div className="flex justify-between pb-4">
              <label htmlFor="task" className="flex flex-row gap-4">
                <input type="radio" myRadio="" id="task" />
                <div>
                  <p>Read Chapter 7 - Memory & Cognition</p>
                  <div className="text-gray-400">
                    <p> MATH 202</p>
                    <p>Tomorrow</p>
                  </div>
                </div>
              </label>

              <div className="flex flex-col justify-items-end">
                <p className="bg-red-100 text-red-500 border-2 border-red-400 rounded-2xl w-14 text-center">
                  High
                </p>
              </div>
            </div>

            <div className="flex justify-between pb-4">
              <label htmlFor="task" className="flex flex-row gap-4">
                <input type="radio" myRadio="" id="task" />
                <div>
                  <p>Outline essay on the French Revolution</p>
                  <div className="text-gray-400 flex">
                    <p> HiST 215</p>
                    <p>3d</p>
                  </div>
                </div>
              </label>

              <div className="flex flex-col justify-items-end">
                <p className="bg-red-100 text-yellow-500 border-2 border-yellow-400 rounded-2xl w-18 text-center ">
                  Medium
                </p>
              </div>
            </div>

            <div className="flex justify-between pb-4">
              <label htmlFor="task" className="flex flex-row gap-4">
                <input type="radio" myRadio="" id="task" />
                <div>
                  <p>Submit thesis draft professor</p>
                  <div className="text-gray-400">
                    <p> ENG 101</p>
                    <p>4d</p>
                  </div>
                </div>
              </label>

              <div className="flex flex-col justify-items-end">
                <p className="bg-red-100 text-red-500 border-2 border-red-400 rounded-2xl w-14 text-center">
                  High
                </p>
              </div>
            </div>

            <div className="flex justify-between pb-4">
              <label htmlFor="task" className="flex flex-row gap-4">
                <input type="radio" myRadio="" id="task" />
                <div>
                  <p>Practice integration by parts</p>
                  <div className="text-gray-400">
                    <p> MATH 202</p>
                    <p>5d</p>
                  </div>
                </div>
              </label>

              <div className="flex flex-col justify-items-end">
                <p className="bg-yellow-100 text-yellow-500 border-2 border-yellow-400 rounded-2xl w-18 text-center">
                  Medium
                </p>
              </div>
            </div>

            <div className="flex justify-between pb-4">
              <label htmlFor="task" className="flex flex-row gap-4">
                <input type="radio" myRadio="" id="task" />
                <div>
                  <p>Review lecture notes from Monday</p>
                  <div className="text-gray-400">
                    <p> psy 101</p>
                    <p>Due Jul 8</p>
                  </div>
                </div>
              </label>

              <div className="flex flex-col justify-items-end">
                <p className="bg-yellow-100 text-yellow-500 border-2 border-yellow-400 rounded-2xl w-18 text-center">
                  Medium
                </p>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Tasks;
