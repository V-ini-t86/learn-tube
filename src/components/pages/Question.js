import { Divider, Grid } from "@mui/material";
import axios from "axios";
import React ,{useEffect, useState}from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Navbar from "../home/Navbar";
import QuestionColumn from "../pquestion/QuestionColumn";
import SolutionColumn from "../pquestion/SolutionColumn";
import Container from '@mui/material/Container';

function Question() {
  const { quename } = useParams();
  const [videos,setVideos]=useState([]);
  const [currVid,setCurrVid]=useState("");
  const url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=5&q=%${quename}leetcode%22&safeSearch=none&videoCaption=any&videoDefinition=any&videoDimension=any&videoDuration=any&videoEmbeddable=any&videoLicense=any&videoSyndicated=any&videoType=any&key=AIzaSyCEUkomcugQk0OGYu3Rec8rOe6Hf2cJcEU`;
   //  console.log(quename)//  console.log(url);
  
   useEffect(()=>{
   axios.get(url)
   .then(res=>{
      let ids=res.data.items.map((obj,ind)=>{
        if(ind==0){setCurrVid(obj?.id?.videoId);}
       return obj?.id?.videoId;
        
       });
    
    ids=ids.filter(val=>{
     if(val!=undefined) return val;
    })

     setVideos(ids);
   })
   .catch((err)=>{ 
     console.log(err)
    });
 },[]);

return (
    <>
      <Navbar />
      <Container maxWidth="xl" >

      <Grid container spacing={35}>

        <Grid item lg={6}>
          <QuestionColumn currVid={currVid} />
        </Grid>

        <Grid item lg={6}>
          {/* <Divider orientation="vertical" flexItem /> */}
          <h1>Solutions</h1>
          <SolutionColumn setCurrVid={setCurrVid} videos={videos} />
        </Grid>
        
      </Grid>
      </Container>
    </>
  );
}

export default Question;
