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
      </div>
    </div>
  );
}

export default App;
