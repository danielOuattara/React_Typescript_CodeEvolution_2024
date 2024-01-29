import * as React from "react";

type TypeName = {
  firstName: string;
  lastName: string;
  id: number;
};

type TypePersonProps = {
  person: {
    firstName: string;
    lastName: string;
  };
  hobbies: string[];
};

type TypePersonalitiesListProps = {
  names: {
    id: number;
    firstName: string;
    lastName: string;
  }[];
};

type TypeButtonProps = {
  onClick?: () => void;
  handleClick?: () => void;
  handleClickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickEventId?: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => void;
};

type TypeContainerProps = {
  styles: React.CSSProperties;
};

type TypeDanielProps = {
  children: React.ReactNode;
};

type TypeGreetProps = {
  name: string;
  messageCount?: number; // ? -> optional props
  isLoggedIn: false;
};

type TypeHeadingProps = {
  children: string;
};

type TypeHobbiesListProps = {
  hobbies: string[];
};

type TypeInputProps = {
  value?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type PersonalitiesListProps = {
  names: {
    id: number;
    firstName: string;
    lastName: string;
  }[];
};

type TypePersonalitiesListProps = {
  names: TypeName[];
};

type TypeStatusProps = {
  status: "loading" | "success" | "error";
};

type TypeCSSProps = {
  styles: React.CSSProperties;
};

type GreetClassProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};
