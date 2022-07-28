import TransactionNewForm from "../Components/TransactionNewForm";
import Animation from "../Components/Animation";

function New() {
  return (
    <div className="New">
      <Animation />
      <TransactionNewForm />
      <marquee loop="100"><img src="https://miro.medium.com/max/645/0*1B31atH5V153v5JP.jpg"></img> <img src="https://www.bigdataframework.org/wp-content/uploads/2019/11/2.jpg"></img></marquee>
    </div>
  );
}

export default New;