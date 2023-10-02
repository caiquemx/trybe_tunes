import Header from "../components/Header";
import SkeletonHeader from "../components/SkeletonHeader";
import useFetchUserData from "../CustomHooks/useFetchUserData";

export default function Favorites() {
  const userData = useFetchUserData();

  return (
    <>
      {!userData ? (
        <SkeletonHeader />
      ) : (
        <>
          <Header page={"favorites"} userName={userData.name} />
          <div>Favorites</div>
        </>
      )}
    </>
  );
}
