import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [timeRemaining, setTimeRemaining] = useState(timeout);

  useEffect(() => {
    console.log("Timer out Mounted");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      console.log("Timer out Un-mounted");
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTimer) => prevTimer - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={timeRemaining} max={timeout} className={mode} />;
}
