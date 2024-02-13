// import React, { Component } from "react";

// type TypeTextProps = {
//   size?: "sm" | "md" | "lg";
//   color?: "primary" | "secondary";
//   children: React.ReactNode;
// };

// export default class Test extends Component<TypeTextProps> {
//   render() {
//     const { size, color, children } = this.props;
//     return <div className={`class-with-${size}-${color}`}>{children}</div>;
//   }
// }

//-----------------------------------------------------

// import React, { Component } from "react";

// type TypeTextProps = {
//   size?: "sm" | "md" | "lg";
//   color?: "primary" | "secondary";
//   children: React.ReactNode;
//   as?: string;
// };

// export default class Test extends Component<TypeTextProps> {
//   render() {
//     const { size, color, children, as } = this.props;
//     const Component = as || "div";

//     return (
//       <Component className={`class-with-${size}-${color}`}>
//         {children}
//       </Component>
//     );
//   }
// }

//-----------------------------------------------------

// import React, { Component } from "react";

// type TypeTextProps = {
//   size?: "sm" | "md" | "lg";
//   color?: "primary" | "secondary";
//   children: React.ReactNode;
//   as?: React.ElementType;
// };

// export default class Test extends Component<TypeTextProps> {
//   render() {
//     const { size, color, children, as } = this.props;
//     const Component = as || "div";

//     return (
//       <Component className={`class-with-${size}-${color}`}>
//         {children}
//       </Component>
//     );
//   }
// }

//-----------------------------------------------------
// import React, { Component } from "react";

// type TypeTextOwnProps<E extends React.ElementType> = {
//   size?: "sm" | "md" | "lg";
//   color?: "primary" | "secondary";
//   children: React.ReactNode;
//   as?: E;
// };

// type TypeTextProps<E extends React.ElementType> = TypeTextOwnProps<E> &
//   React.ComponentProps<E>;

// export default class Text extends Component<TypeTextProps> {
//   render() {
//     const { size, color, children, as } = this.props;
//     const Component = as || "div";
//     return (
//       <Component className={`class-with-${size}-${color}`}>
//         {children}
//       </Component>
//     );
//   }
// }

//-----------------------------------------------------

// import React, { Component } from "react";

// type TypeTextOwnProps<E extends React.ElementType> = {
//   size?: "sm" | "md" | "lg";
//   color?: "primary" | "secondary";
//   children: React.ReactNode;
//   as?: E;
// };

// type TypeTextProps<E extends React.ElementType> = TypeTextOwnProps<E> &
//   Omit<React.ComponentProps<E>, keyof TypeTextOwnProps<E>>;

// export default class Text extends Component<TypeTextProps> {
//   render() {
//     const { size, color, children, as } = this.props;
//     const Component = as || "div";
//     return (
//       <Component className={`class-with-${size}-${color}`}>
//         {children}
//       </Component>
//     );
//   }
// }

//----------------------------------------------------------------

import React, { Component } from "react";

type TypeTextOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

type TypeTextProps<E extends React.ElementType> = TypeTextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TypeTextOwnProps<E>>;

export default class Text<
  E extends React.ElementType = "div",
> extends Component<TypeTextProps<E>> {
  render() {
    const { size, color, children, as } = this.props;
    const CustomComponent = as || "div";
    return (
      <CustomComponent className={`class-with-${size}-${color}`}>
        {children}
      </CustomComponent>
    ) as JSX.Element;
  }
}
