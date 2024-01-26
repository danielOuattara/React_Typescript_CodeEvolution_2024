type TypeDanielProps = {
  children: React.ReactNode; // <-- for a React component
};

export const Daniel = ({ children }: TypeDanielProps) => {
  return <h2>{children}</h2>;
};
