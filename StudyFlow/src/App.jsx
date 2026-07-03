function App() {
  return (
    <div>
      <div className="logo text-xl font-bold ">
        <img src="logo.png" alt="logo" /> StudyFlow
      </div>

      <div className="content p-4 bg-gray-100">
        <div className="greeting">
          <h1 className="text-3xl font-bold">Good Evening, Alex!</h1>
          <p className="text-gray-600">Friday, July 3, 2026.</p>
        </div>

        <div className="card w-full p-4 flex justify-between gap-4">
          <div className="bg-white rounded-lg shadow-md w-3/12 p-4 flex flex-col items-left ">
            <img src="logo.png" alt="logo" />
            <p>1</p>
            <p>Due Today</p>
          </div>
          <div className="bg-white rounded-lg shadow-md w-3/12 p-4 flex flex-col items-left ">
            <img src="logo.png" alt="logo" />
            <p>4</p>
            <p>Pending Assignments</p>
          </div>
          <div className="bg-white rounded-lg shadow-md w-3/12 p-4 flex flex-col items-left ">
            <img src="logo.png" alt="logo" />
            <p>3</p>
            <p>Upcoming Exams</p>
          </div>
          <div className="bg-white rounded-lg shadow-md w-3/12 p-4 flex flex-col items-left ">
            <img src="logo.png" alt="logo" />
            <p>4</p>
            <p>Enrolled Courses</p>
          </div>
        </div>

        <div className="courses flex justify-between gap-4">
          <div className="Tasks bg-white rounded-lg shadow-md w-3xl p-4 flex flex-col items-left">
            <div className="heading">
              <h2 className="text-black-700 font-bold">Upcoming Tasks</h2>
              <p className="text-blue-500">
                <a href="/task"> View all </a>
              </p>
            </div>

            <div>
              <label htmlFor="task flex flex-col">
                <input type="radio" myRadio="" id="task" />
                <p>Complete Problem Set 5</p>
                <p> MATH 202</p>
              </label>

              <div>
                <p className="bg-red-100 text-red-500 border-1 border-red-400 rounded-2xl w-14 text-center">
                  High
                </p>
                <p>Today</p>
              </div>
            </div>

            <div>
              <label htmlFor="task">
                <input type="radio" myRadio="" id="task" /> Read Chapter 7 -
                Memory & Cognition
                <p> MATH 202</p>
              </label>

              <div>
                <p className="bg-red-100 text-red-500 border-1 border-red-400 rounded-2xl w-14 text-center">
                  High
                </p>
                <p>Tomorrow</p>
              </div>
            </div>

            <div>
              <label htmlFor="task">
                <input type="radio" myRadio="" id="task" /> Outline essay on the
                French Revolution
                <p> HiST 215</p>
              </label>

              <div>
                <p className="bg-red-100 text-yellow-500 border-1 border-yellow-400 rounded-2xl w-18 text-center">
                  Medium
                </p>
                <p>3d</p>
              </div>
            </div>

            <div>
              <label htmlFor="task">
                <input type="radio" myRadio="" id="task" /> Submit thesis draft
                professor
                <p> ENG 101</p>
              </label>

              <div>
                <p className="bg-red-100 text-red-500 border-1 border-red-400 rounded-2xl w-14 text-center">
                  High
                </p>
                <p>4d</p>
              </div>
            </div>

            <div>
              <label htmlFor="task">
                <input type="radio" myRadio="" id="task" /> Practice integration
                by parts
                <p> MATH 202</p>
              </label>

              <div>
                <p className="bg-yellow-100 text-yellow-500 border-1 border-yellow-400 rounded-2xl w-18 text-center">
                  Medium
                </p>
                <p className="text-gray-400">5d</p>
              </div>
            </div>
          </div>

          <div clasName="Exam">
            <div className="heading">
              <h2 className="text-black-700 font-bold">Exam Countdown</h2>
              <p className="text-blue-500">
                <a href="/exam">View all </a>
              </p>
            </div>

            <div>
              <div className="counting">
                <div>
                  <div>
                    <p>12</p>
                    <p>DAYS</p>
                  </div>
                  <div>
                    <p>PSY101 Midterm Exam</p>
                    <p>Jul 15</p>
                  </div>
                </div>
                <div>.</div>
              </div>

              <div className="counting">
                <div>
                  <div>
                    <p>15</p>
                    <p>DAYS</p>
                  </div>
                  <div>
                    <p>HIST215 Exam</p>
                    <p>Jul 18</p>
                  </div>
                </div>
                <div>.</div>
              </div>

              <div className="counting">
                <div>
                  <div>
                    <p>19</p>
                    <p>DAYS</p>
                  </div>
                  <div>
                    <p>Calculus II Final</p>
                    <p>Jul 22</p>
                  </div>
                </div>
                <div>.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
<p>You are enrolled in 4 courses.</p>;

export default App;
