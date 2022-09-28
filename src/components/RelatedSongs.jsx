import { SongBar } from "./SongBar";

export const RelatedSongs = ({ relatedData, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId}) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
    <div className="mt-6 w-full flex flex-col">
      {relatedData?.map((song,i) => (
        <SongBar 
          key={`${song.key}-${artistId}`}
          song={song}
          i={i}
          artistId={artistId}
          activeSong={activeSong}
          isPlaying={isPlaying}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
);
