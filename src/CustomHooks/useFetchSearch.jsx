import { useEffect, useState } from "react";
import searchAlbumsAPI from "../services/searchAlbumsAPI";

export default function useFetchSearch(searchString) {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchAlbuns = async () => {
      const result = await searchAlbumsAPI(searchString);
      setData(result);
    };
    fetchAlbuns();
  }, []);

  return data;
}
