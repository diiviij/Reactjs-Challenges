import { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTime(time + 1);
    }, 1000);
  });

  return (
    <>
      <h1>I have rendered {time} times!</h1>;
    </>
  );
}
