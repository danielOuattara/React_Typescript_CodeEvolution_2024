import { TypeInputProps } from "../../../../types";

export const Input = ({ value, handleChange }: TypeInputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      <br />
      <input type="text" value={value} onChange={handleInputChange} />
    </>
  );
};
