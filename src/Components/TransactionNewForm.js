import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL

function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    name: "",
    date: "",
    amount: "",
    from: "",
    
  });
  const navigate = useNavigate();

  const addTransaction = () => {
    axios.post(`${API}/transactions`, transaction)
      .then(response => navigate(`/transactions`)) 
      .catch(error => console.error(error)) 
  };
  
  function handleTextChange  (event) {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };



  function handleSubmit (event) {
    event.preventDefault();
    addTransaction();
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nαɱҽ: </label>
        <input
          id="name"
          value={transaction.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <br />
        <hr></hr>
        <label htmlFor="name">Mðñ†h: </label>
        <input
          id="month"
          value={transaction.month}
          type="text"
          onChange={handleTextChange}
          placeholder="month"
          required
        />
        <br></br>
        <hr></hr>
         <label htmlFor="date">ᗪ卂ㄒ乇: </label>
        <input
          id="date"
          type="date"
          name="date"
          value={transaction.date}
          placeholder="Date"
          onChange={handleTextChange}
        />
        <br />
        <hr></hr>
        <label for="amount">Aɱσυɳƚ:  </label>
        <input
          id="amount"
          type="number"
          required
          value={transaction.amount}
          placeholder="$$$"
          min = "-300"
          max = "3000"
          onChange={handleTextChange}
        />
       <br/>
       <hr></hr>
    
        <label htmlFor="from">千尺ㄖ爪:</label>
        <textarea
          id="from"
          name="from"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="From"
        />
        <br />
        <hr></hr>
        <input type="submit" />
      </form>
    </div>
  );
}

export default TransactionNewForm;