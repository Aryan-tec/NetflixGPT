
const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-full aspect-video pt-[20%] pl-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-5xl w-1/3">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="p-2">
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">▶Play</button>
        <button className="bg-gray-500 text-white p-4 px-12 mx-2 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
