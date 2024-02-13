// import React from "react";

// type TypeTextProps = {
//   size?: "sm" | "md" | "lg";
//   color?: "primary" | "secondary";
//   children: React.ReactNode;
// };

// export function Text({ size, color, children }: TypeTextProps) {
//   return <div className={`class-with-${size}-${color}`}>{children}</div>;
// }

//-----------------------------------------------------

// import React from "react";

// type TypeTextProps = {
//   size?: "sm" | "md" | "lg";
//   color?: "primary" | "secondary";
//   children: React.ReactNode;
//   as?: string;
// };

// export function Text({ size, color, children, as }: TypeTextProps) {
//   const Component = as || "div";
//   return (
//     <Component className={`class-with-${size}-${color}`}>{children}</Component>
//   );
// }

//-----------------------------------------------------

// import React from "react";

// type TypeTextProps = {
//   size?: "sm" | "md" | "lg";
//   color?: "primary" | "secondary";
//   children: React.ReactNode;
//   as?: React.ElementType;
// };

// export function Text({ size, color, children, as }: TypeTextProps) {
//   const Component = as || "div";
//   return (
//     <Component className={`class-with-${size}-${color}`}>{children}</Component>
//   );
// }

//-----------------------------------------------------

// import React from "react";

// type TypeTextOwnProps<E extends React.ElementType> = {
//   size?: "sm" | "md" | "lg";
//   color?: "primary" | "secondary";
//   children: React.ReactNode;
//   as?: E;
// };

// type TypeTextProps<E extends React.ElementType> = TypeTextOwnProps<E> &
//   React.ComponentProps<E>;

// export function Text({ size, color, children, as }: TypeTextProps) {
//   const Component = as || "div";
//   return (
//     <Component className={`class-with-${size}-${color}`}>{children}</Component>
//   );
// }
//-----------------------------------------------------

// import React from "react";

// type TypeTextOwnProps<E extends React.ElementType> = {
//   size?: "sm" | "md" | "lg";
//   color?: "primary" | "secondary";
//   children: React.ReactNode;
//   as?: E;
// };

// type TypeTextProps<E extends React.ElementType> = TypeTextOwnProps<E> &
//   Omit<React.ComponentProps<E>, keyof TypeTextOwnProps<E>>;

// export function Text({ size, color, children, as }: TypeTextProps) {
//   const Component = as || "div";
//   return (
//     <Component className={`class-with-${size}-${color}`}>{children}</Component>
//   );
// }

//----------------------------------------------------------------

// test.tsx
// import React from "react";

// type TypeTextOwnProps<E extends React.ElementType> = {
//   size?: "sm" | "md" | "lg";
//   color?: "primary" | "secondary";
//   children: React.ReactNode;
//   as?: E;
// };

// type TypeTextProps<E extends React.ElementType> = TypeTextOwnProps<E> &
//   Omit<React.ComponentProps<E>, keyof TypeTextOwnProps<E>>;

// export function Text<E extends React.ElementType = "div">({
//   size,
//   color,
//   children,
//   as,
// }: TypeTextProps<E>) {
//   const Component = as || "div";
//   return (
//     <Component className={`class-with-${size}-${color}`}>{children}</Component>
//   );
// }
