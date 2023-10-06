import { useState, useEffect } from "react";
import getMusics from "../services/musicsAPI";

export default function useFetchMusics(id) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchMusics = async () => {
      const result = await getMusics(id);
      setData(result);
    };
    fetchMusics();
  }, [id]);

  return data;
}
