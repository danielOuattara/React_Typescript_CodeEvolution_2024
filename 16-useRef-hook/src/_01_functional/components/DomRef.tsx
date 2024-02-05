// import { useRef, useEffect } from "react";

// export default function DomRef() {
//   const inputRef = useRef<HTMLInputElement>(null!);

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   return <input type="text" ref={inputRef} />;
// }

//----------------------------------------------------

// import { useRef, useEffect } from "react";

// export default function DomRef() {
//   const inputRef = useRef<HTMLInputElement>(null!);

//   /* <-- the "!" above guaranties that the HTML element
// is not null on load: so no optional parameter required */

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   return <input type="text" ref={inputRef} />;
// }

//-------------------------------------------------------


import { useRef, useEffect } from "react";

export default function DomRef() {
  const inputRef = useRef<HTMLInputElement>(null);

  /* <-- the "!" above guaranties that the HTML element
is not null on load: so no optional parameter required */

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input type="text" ref={inputRef} />;
}
