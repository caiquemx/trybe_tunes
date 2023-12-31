import Header from "../components/Header";
import SkeletonHeader from "../components/SkeletonHeader";
import useFetchUserData from "../CustomHooks/useFetchUserData";

export default function Profile() {
  const userData = useFetchUserData();

  return (
    <>
      {!userData ? (
        <SkeletonHeader />
      ) : (
        <>
          <Header page={"profile"} userName={userData.name} />
          <div>Profile</div>
        </>
      )}
    </>
  );
}
