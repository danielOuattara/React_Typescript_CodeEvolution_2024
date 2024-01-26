/* 
type ==> for applications
interface ==> for libraries
*/

//--------------------------------------------------------------------

type TypeGreetProps = {
  name: string | number;
  number: number;
};

export const Greet = (props: TypeGreetProps) => {
  return (
    <div>
      <h2>Welcome to React TypeScript, {props.name}</h2>
      <h3>{props.number}</h3>
    </div>
  );
};

//---------------------------------------------------------------------

interface InterfaceGreet2Props {
  name?: string | number;
  number?: number;
}
export const Greet2 = ({ name, number }: InterfaceGreet2Props) => {
  return (
    <div>
      <h2>Welcome to React TypeScript, {name}</h2>
      <h3>{number}</h3>
    </div>
  );
};
