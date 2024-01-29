type TypeCSSProps = {
  styles: React.CSSProperties;
};

export const Container = ({ styles }: TypeCSSProps) => {
  return <div style={styles}>Text content goes here</div>;
};
