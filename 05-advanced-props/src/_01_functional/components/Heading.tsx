type TypeHeadingProps = {
  children: string | JSX.Element | React.ReactNode;
};

interface InterfaceHeadingProps {
  children: string | JSX.Element | React.ReactNode;
}

export const Heading = ({ children }: TypeHeadingProps) => {
  return <h3> {children}</h3>;
};

export const Heading2 = ({ children }: InterfaceHeadingProps) => {
  return <h3> {children}</h3>;
};
