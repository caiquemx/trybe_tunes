import { useEffect, useState } from "react";
import { getUser } from "../services/userAPI";

export default function useFetchUserData() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchName = async () => {
      const result = await getUser();
      setData(result);
    };
    fetchName();
  }, []);
  return data;
}
