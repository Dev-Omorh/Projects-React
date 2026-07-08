import Logo from "./Exam countdown";
import Button from "./components/Button";

function Exam() {
  return (
    <div>
      <div>
        <Logo />
      </div>

      <div className="content p-4 bg-gray-100 w-full">
        <div className="Header flex justify-between">
          <div>
            <h1 className="text-3xl font-bold">Exam Countdown</h1>
            <p className="text-gray-600">5 upcoming</p>
          </div>

          <Button />
        </div>

        <div>
          <div>
            <p>HIST 215</p>
            <h2>World History: 1500-2026</h2>
            <p>Dr. Amara Osei</p>
          </div>

          <div>
            <div>
              <p>3</p>
              <p>Credits</p>
            </div>

            <div>
              <p>1</p>
              <p>Pending</p>
            </div>

            <div>
              <p>1</p>
              <p>Tasks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exam;
