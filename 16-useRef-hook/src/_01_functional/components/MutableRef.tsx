// import { useState, useRef, useEffect } from "react";

// export default function MutableRef() {
//   const [timer, setTimer] = useState(0);
//   const [continueTimer, setContinueTimer] = useState(false);
//   const interValRef = useRef<number | null>(null);

//   const stopTimer = () => {
//     if (interValRef.current) {
//       window.clearInterval(interValRef.current);
//       setContinueTimer(false);
//     }
//   };

//   useEffect(() => {
//     interValRef.current = window.setInterval(() => {
//       setTimer((timer) => timer + 1);
//     }, 1000);
//     return () => stopTimer();
//   }, []);

//   useEffect(() => {
//     if (continueTimer) {
//       interValRef.current = window.setInterval(() => {
//         setTimer((timer) => timer + 1);
//       }, 1000);
//       return () => stopTimer();
//     }
//   }, [continueTimer]);

//   return (
//     <>
//       HookTimer - {timer}
//       <button onClick={() => setContinueTimer(true)}>Continue</button>
//       <button onClick={() => stopTimer()}>Stop Timer</button>
//     </>
//   );
// }

//----------------------------------------------------------------

import { useState, useRef, useEffect } from "react";

export default function MutableRef() {
  const [timer, setTimer] = useState(0);
  const [continueTimer, setContinueTimer] = useState(false);
  const interValRef = useRef<number>();

  const startTimer = () => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (interValRef.current) {
      window.clearInterval(interValRef.current);
      setContinueTimer(false);
    }
  };

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, []);

  useEffect(() => {
    if (continueTimer) {
      startTimer();
      return stopTimer;
    }
  }, [continueTimer]);

  return (
    <>
      HookTimer - {timer}
      <button onClick={() => setContinueTimer(true)}>Continue</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </>
  );
}

// -----------------------------------------------------------------------------

// import { useState, useRef, useEffect } from "react";

// export default function MutableRef() {
//   const [timer, setTimer] = useState(0);
//   const [stopTiming, setStopTiming] = useState(false);
//   const interValRef = useRef<number | null>(null);

//   const toggleTimer = () => {
//     setStopTiming(!stopTiming);
//     if (stopTiming && interValRef.current) {
//       return window.clearInterval(interValRef.current);
//     } else if (interValRef.current) {
//     }
//   };

//   // const continueTimer = () => {
//   //   if (interValRef.current)
//   //     window.setInterval(() => {
//   //       setTimer((timer) => timer + 1);
//   //     }, 1000);
//   // };

//   useEffect(() => {
//     // setStopTiming(false);
//     interValRef.current = window.setInterval(() => {
//       setTimer((timer) => timer + 1);
//     }, 1000);
//     return () => {
//       if (interValRef.current) {
//         return window.clearInterval(interValRef.current);
//       }
//     };
//   }, []);

//   return (
//     <>
//       HookTimer - {timer}
//       {/* <button onClick={() => continueTimer()}>Continue</button> */}
//       <button onClick={toggleTimer}>
//         {stopTiming ? "Continue Timer" : "Stop Timer"}
//       </button>
//     </>
//   );
// }
