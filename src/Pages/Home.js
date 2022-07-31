import React from "react";
import Transition from "../Components/Transition";
import Time from "../Components/Time";
import Transition2 from "../Components/Transition2";
function Home() {
    return (
      <div className="Home">
       <h2>𝕳𝖊𝖓𝖉𝖗𝖎𝖝 𝕭𝖚𝖉𝖌𝖊𝖙ing 𝕬𝖕𝖕</h2>
        <h3>𝖂𝖊𝖑𝖈𝖔𝖒𝖊 𝖙𝖔 𝖙𝖍𝖊 𝕲𝖗𝖊𝖆𝖙𝖊𝖘𝖙 𝕬𝖕𝖕 𝖔𝖋 𝖆𝖑𝖑 𝖙𝖎𝖒𝖊𝖘!</h3>
        {/* <Transition /> <Transition2 />  */}
        <Time />
      </div>
    );
  }
  
  export default Home;