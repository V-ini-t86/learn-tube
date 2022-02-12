import React from "react";
import tw from "twin.macro";
import YouTube from "react-youtube";

const List = tw.div`p-5 mx-auto shadow-lg mt-4 w-auto drop-shadow-md rounded-lg drop-shadow-xl`;

function SolutionColumn({setCurrVid,videos}) {
  const listsOfSolutions = videos;
 
 
  return (
    <div>
      <h3>Solutions By Other Youtuber</h3>
      {listsOfSolutions.map((id) => {
        return (
          <List>
           {/* <YouTube videoId={id} opts={opts}/> */}
           <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`} height={180} width={300} onClick={()=>{setCurrVid(id) }} ></img>
          </List>
        );
      })}
    </div>
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
