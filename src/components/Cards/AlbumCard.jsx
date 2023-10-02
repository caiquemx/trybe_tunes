export default function AlbumCard(data) {
  return (
    <div
      id="card-container"
      className="container mx-auto border border-1 border-black"
    >
      <img src={data.artworkUrl100} alt="album cover image" />
      <p>{data.collectionName}</p>
      <p>{data.artistName}</p>
    </div>
  );
}
