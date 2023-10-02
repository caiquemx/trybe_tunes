import { useEffect, useState } from "react";
import searchAlbumsAPI from "../services/searchAlbumsAPI";

export default function useFetchSearch(searchString) {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchAlbuns = async () => {
      const result = await searchAlbumsAPI(searchString);
      setTimeout(() => setData(result), 2000);
    };
    fetchAlbuns();
  }, [searchString]);

  return data;
}
