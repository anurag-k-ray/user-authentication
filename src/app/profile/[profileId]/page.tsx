const UserProfile = ({ params }: any) => {
  return (
    <div>
      <h1>
        User profile <span>{params.profileId}</span>
      </h1>
    </div>
  );
};
export default UserProfile;
