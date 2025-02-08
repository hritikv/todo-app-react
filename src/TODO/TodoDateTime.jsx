import { useEffect, useState } from "react";

export const TodoDateTime = () => {
  const [dateTime, setDatetime] = useState(""); //for date and time

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatDate = now.toLocaleDateString();
      const formatTime = now.toLocaleTimeString();
      setDatetime(`${formatDate} - ${formatTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <h2>{dateTime}</h2>;
};
