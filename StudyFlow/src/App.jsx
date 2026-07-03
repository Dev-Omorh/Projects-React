function App() {
  return (
    <div>
      <div className="logo">
        {" "}
        <img src="logo.png" alt="logo" /> StudyFlow
      </div>

      <div className="content">
        <div className="greeting">
          <h1>Good Evening, Alex!</h1>
          <p>Friday, July 3, 2026.</p>
        </div>

        <div className="card">
          <div>
            <img src="logo.png" alt="logo" />
            <p>1</p>
            <p>Due Today</p>
          </div>
          <div>
            <img src="logo.png" alt="logo" />
            <p>4</p>
            <p>Pending Assignments</p>
          </div>
          <div>
            <img src="logo.png" alt="logo" />
            <p>3</p>
            <p>Upcoming Exams</p>
          </div>
          <div>
            <img src="logo.png" alt="logo" />
            <p>4</p>
            <p>Enrolled Courses</p>
          </div>
        </div>

        <div className="courses">
          <div className="Task">
            <h2>Upcoming Tasks</h2>
            <p>
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
        </div>

        <div>
          <div className="Exam">
            <h2>Exam Countdown</h2>
            <p>
              <a href="/exam">View all </a>
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
        </div>

        </div>
      </div>
    </div>
  );
}
<p>You are enrolled in 4 courses.</p>;

export default App;
