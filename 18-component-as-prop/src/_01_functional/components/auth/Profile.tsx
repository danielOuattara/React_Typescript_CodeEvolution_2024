export type TypeProfileProps = {
  name: string;
};

const Profile = ({ name }: TypeProfileProps) => {
  return <div> Private Profile: user {name}</div>;
};

export default Profile;
