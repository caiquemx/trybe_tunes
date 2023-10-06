import { useParams } from "react-router-dom";
import AlbumCard from "../components/Cards/AlbumCard";
import useFetchMusics from "../CustomHooks/useFetchMusics";

export default function Album() {
  const { id } = useParams();
  const data = useFetchMusics(id || "") || "";

  const { artworkUrl100, collectionName, artistName } = data[0] || "";
  const cardData = {
    artworkUrl100,
    artistName,
    collectionName,
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-row items-center justify-center border border-2 border-black p-4">
        <AlbumCard data={cardData} />
        <div className="grid grid-cols-2 gap-4">
          {data &&
            data.map((ele, i) => {
              if (i == 0) return;
              console.log(ele);
              return (
                <div
                  key={ele.trackId}
                  className="flex flex-col items-center justify-center"
                >
                  <audio src={ele.previewUrl} controls>
                    <track kind="captions" src={ele.trackViewUrl} />O seu
                    navegador não suporta o elemento <code>audio</code>.
                  </audio>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
