import React from "react";
import tw from "twin.macro";
import { Stack } from "@mui/material";
import YouTube from "react-youtube";

const List = tw.div`p-5 shadow-lg mt-4 w-80 flex justify-center drop-shadow-md rounded-lg drop-shadow-xl`;

function SolutionColumn({ setCurrVid, videos }) {
  const listsOfSolutions = videos;

  return (
    <Stack overflow="auto" height="550px">
      <h3>Solutions By Other Youtuber</h3>
      {listsOfSolutions.map((id) => {
        return (
          <List>
            <img
              src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`}
              height={180}
              width={300}
              onClick={() => {
                setCurrVid(id);
              }}
            ></img>
          </List>
        );
      })}
    </Stack>
  );
}

export default SolutionColumn;

// [
//   {
//     id: 1,
//     link: "https://www.youtube.com/watch?v=KLlXCFG5TnA",
//     youtubeId: "KLlXCFG5TnA",
//     channelName: "Neetcode",
//   },
//   {
//     id: 2,
//     link: "https://www.youtube.com/watch?v=l5Ruk_Ub8B4",
//     youtubeId: "l5Ruk_Ub8B4",
//     channelName: "Pepcoding",
//   },
//   {
//     id: 3,
//     link: "https://www.youtube.com/watch?v=Ivyh3V4QolA",
//     youtubeId: "Ivyh3V4QolA",
//     channelName: "Web Dev Simplified",
//   },
//   {
//     id: 4,
//     link: "https://www.youtube.com/watch?v=BoHO04xVeU0",
//     youtubeId: "BoHO04xVeU0",
//     channelName: "Nick White",
//   },
//   {
//     id: 5,
//     link: "https://www.youtube.com/watch?v=TcsYEnMrnFo",
//     youtubeId: "TcsYEnMrnFo",
//     channelName: "Java Brains",
//   },
// ];
