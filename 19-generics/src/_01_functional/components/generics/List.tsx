// type TypeListProps = {
//   items: string[] | number[];
//   onClick: (value: string | number) => void;
// };

// export const List = ({ items, onClick }: TypeListProps) => {
//   return (
//     <>
//       <h2>List of items :</h2>
//       {items.map((item, index) => (
//         <div key={index} onClick={() => onClick(item)}>
//           {item}
//         </div>
//       ))}
//     </>
//   );
// };

//----------------------------------------------------------

/* Adding generics */

// type TypeListProps<T> = {
//   items: T[];
//   onClick: (value: T) => void;
// };

// export const List = <T extends Object>({
//   items,
//   onClick,
// }: TypeListProps<T>) => {
//   return (
//     <>
//       <h2>List of items :</h2>
//       {items.map((item, index) => (
//         <div key={index} onClick={() => onClick(item)}>
//           {item} {/* <-- ?? */}
//         </div>
//       ))}
//     </>
//   );
// };

//----------------------------------------------------------

/*  Adding constraints on generics */

// import ObjectLister from "./ObjectLister";

// type TypeListProps<T> = {
//   items: T[];
//   onClick: (value: T) => void;
// };

// export const List = <T extends string | number | object>({
//   items,
//   onClick,
// }: TypeListProps<T>) => {
//   return (
//     <>
//       <h2>List of items :</h2>
//       {items.map((item, index) => {
//         if (typeof item === "object" && !Array.isArray(item) && item !== null) {
//           return <ObjectLister item={item} />;
//         } else {
//           return (
//             <div key={index} onClick={() => onClick(item)}>
//               {item}
//             </div>
//           );
//         }
//       })}
//     </>
//   );
// };

//-----------------------------------------------------

/*  Adding specific constraints on object generics */

// import ObjectLister from "./ObjectLister";

// type TypeListProps<T> = {
//   items: T[];
//   onClick: (value: T) => void;
// };

// export const List = <T extends string | number | { id: number }>({
//   items,
//   onClick,
// }: TypeListProps<T>) => {
//   return (
//     <>
//       <h2>List of items :</h2>
//       {items.map((item, index) => {
//         if (typeof item === "object" && !Array.isArray(item) && item !== null) {
//           return <ObjectLister item={item} />;
//         } else {
//           return (
//             <div key={index} onClick={() => onClick(item)}>
//               {item}
//             </div>
//           );
//         }
//       })}
//     </>
//   );
// };

//-----------------------------------------------------

/*  Adding specific constraints on object generics */

import ObjectLister from "./ObjectLister";

type TypeListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export function List<T extends string | number | { id: number }>({
  items,
  onClick,
}: TypeListProps<T>) {
  return (
    <>
      <h2>List of items :</h2>
      {items.map((item, index) => {
        if (typeof item === "object" && !Array.isArray(item) && item !== null) {
          return <ObjectLister item={item} />;
        } else {
          return (
            <div key={index} onClick={() => onClick(item)}>
              {item}
            </div>
          );
        }
      })}
    </>
  );
}
