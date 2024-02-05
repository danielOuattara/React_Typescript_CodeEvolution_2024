// import { Component } from "react";

// type TypeListProps = {
//   items: string[] | number[];
//   onClick: (value: string | number) => void;
// };

// export class List extends Component<TypeListProps> {
//   render() {
//     const { items, onClick } = this.props;
//     return (
//       <>
//         <h2>List of items :</h2>
//         {items.map((item, index) => (
//           <div key={index} onClick={() => onClick(item)}>
//             {item}
//           </div>
//         ))}
//       </>
//     );
//   }
// }

//----------------------------------------------------------

// /* Adding generics + constraints */

// import { Component } from "react";
// import ObjectLister from "./ObjectLister";

// type TypeListProps<T> = {
//   items: T[];
//   onClick: (value: T) => void;
// };

// export class List<T extends string | number | Object> extends Component<
//   TypeListProps<T>
// > {
//   render() {
//     const { items, onClick } = this.props;
//     return (
//       <>
//         <h2>List of items :</h2>
//         {items.map((item, index) => {
//           if (
//             typeof item === "object" &&
//             !Array.isArray(item) &&
//             item !== null
//           ) {
//             return <ObjectLister item={item} />;
//           } else {
//             return (
//               <div key={index} onClick={() => onClick(item)}>
//                 {item}
//               </div>
//             );
//           }
//         })}
//       </>
//     );
//   }
// }

//----------------------------------------------------------

/* Adding generics + constraints + specific constraints on object */

import { Component } from "react";
import ObjectLister from "./ObjectLister";

type TypeListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export class List<T extends string | number | { id: number }> extends Component<
  TypeListProps<T>
> {
  render() {
    const { items, onClick } = this.props;
    return (
      <>
        <h2>List of items :</h2>
        {items.map((item, index) => {
          if (
            typeof item === "object" &&
            !Array.isArray(item) &&
            item !== null
          ) {
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
}
