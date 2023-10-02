import Header from "../components/Header";
import SkeletonHeader from "../components/SkeletonHeader";
import useFetchUserData from "../CustomHooks/useFetchUserData";

export default function Home() {
  const userData = useFetchUserData();
  return (
    <>
      {!userData ? (
        <SkeletonHeader />
      ) : (
        <>
          <Header page={"home"} userName={userData.name} />
          <div>Home</div>
        </>
      )}
    </>
  );
}
