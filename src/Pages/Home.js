import React from "react";
import Time from "../Components/Time";

function Home() {
    return (
      <div className="Home">
       <h2>𝕳𝖊𝖓𝖉𝖗𝖎𝖝 𝕭𝖚𝖉𝖌𝖊𝖙ing 𝕬𝖕𝖕</h2>
        <marquee direction="up"><h3>𝖂𝖊𝖑𝖈𝖔𝖒𝖊 𝖙𝖔 𝖙𝖍𝖊 𝕲𝖗𝖊𝖆𝖙𝖊𝖘𝖙 𝕬𝖕𝖕 𝖔𝖋 𝖆𝖑𝖑 𝖙𝖎𝖒𝖊𝖘!</h3></marquee>
      
    
        <Time />
      </div>
    );
  }
  
  export default Home;