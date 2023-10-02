export default function AlbumCard({ data }) {
  return (
    <div
      id="card-container"
      className="first:ml-6 first:mt-6 w-1/6 border border-1 border-black flex flex-col items-center justify-normal rounded-md space-y-6 text-center hover:cursor-pointer hover:-translate-y-2 hover:bg-gray-100 delay-75"
    >
      <img
        className="w-full h-1/2 rounded-t-md"
        src={data.artworkUrl100}
        alt="album cover image"
      />
      <p className="text-sm">{data.collectionName}</p>
      <p className="text-lg font-bold">{data.artistName}</p>
    </div>
  );
}
