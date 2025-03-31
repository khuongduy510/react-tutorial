import { useEffect, useState } from "react";

export default function Countdown() {
  const [countdown, setCountdown] = useState(180);
  const [iscounting, setIscounting] = useState(false);
  useEffect(() => {
    if(!iscounting) return;
    
  }, [countdown]);
  return (
    <>
      <div>{countdown}</div>
      <button >Start</button>
    </>
  );
}
