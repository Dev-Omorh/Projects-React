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

        <div className="courses">
          <div className="Tasks">
            <div className="heading">
              <h2 className="text-black-700 font-bold">Upcoming Tasks</h2>
              <p className="text-blue-500">
                <a href="/task"> View all </a>
              </p>
            </div>

            <div>
              <label htmlFor="task">
                <input type="radio" myRadio="" id="task" /> Read Chapter 7 -
                Memory & Cognition
                <p> MATH 202</p>
              </label>

              <div>
                <p>High</p>
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
                <p>High</p>
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
                <p>High</p>
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
                <p>High</p>
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
                <p>High</p>
                <p>Today</p>
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
