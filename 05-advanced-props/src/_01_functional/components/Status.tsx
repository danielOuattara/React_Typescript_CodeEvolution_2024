type TypeStatusProps = {
  status: "loading" | "success" | "error";
  // only strings among --> 'loading' | 'success' | 'error
};

// export const Status = ({status}: TypeStatusProps) => {
//   let message;

//   if (.status === "loading") {
//     message = "...loading";
//   } else if (status === "success") {
//     message = "Success";
//   } else {
//     message = "Error fetching data";
//   }
//   return (
//     <div>
//       <h2>Status: {message}</h2>
//     </div>
//   );
// };

//-----------------------------------------

export const Status = ({ status }: TypeStatusProps) => {
  return (
    <div>
      <h2>Status: {status}</h2>
    </div>
  );
};
