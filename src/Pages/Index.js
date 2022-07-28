// import { Transition } from "react-spring";
import Transactions from "../Components/Transactions";
import Transition from "../Components/Transition";

function Index() {
  return (
    <div className="Index">
      <marquee loop="100" bgcolor="white" color="white">▀▄▀▄▀▄ 𝔴εℓ匚𝕠мᗴ 𝐭Ø 𝕠Ł𝔸𝕐ᎥŇ𝐤𝐀'𝓼 ᵇ𝔲𝐃gⒺⓣᶤ𝐧Ｇ αƤ𝓅! ▄▀▄▀▄▀</marquee>
      <Transactions /> 
      <br></br>
      {/* <Transition /> */}
      <marquee loop="100"><img src="https://miro.medium.com/max/645/0*1B31atH5V153v5JP.jpg"></img> <img src="https://www.bigdataframework.org/wp-content/uploads/2019/11/2.jpg"></img></marquee> 
    </div>
  );
}

export default Index;