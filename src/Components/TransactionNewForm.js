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
    // description: "",
  });
  const navigate = useNavigate();

  const addTransaction = () => {
    axios.post(`${API}/transactions`, transaction)
      .then(response => navigate(`/transactions`)) // happy path! only happens if above request worked
      .catch(error => console.error(error)) // bad path! happens when our request fails!
  };
  /* We need a function to SEND our DATA to the DATABASE
    1. Get a handle on our data
    2. send a POST request to our DB
    3. < What happens after we succeed? >
  */
  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

//   const handleCheckboxChange = () => {
//     setTransaction({ ...transaction, isFavorite: !transaction.isFavorite });
//   };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction();
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          value={transaction.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <br />
         <label htmlFor="date">Date: </label>
        <input
          id="date"
          type="date"
          name="date"
          value={transaction.date}
          placeholder="Date"
          onChange={handleTextChange}
        />
        <br />
        <label for="amount">Amount: </label>
        <input
          id="amount"
          type="number"
          required
          value={transaction.amount}
          placeholder="0"
          min = "-300"
          max = "3000"
          onChange={handleTextChange}
        />
       <br/>
        {/* <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={transaction.isFavorite}
        /> */}<br/>
        <label htmlFor="from">From: </label>
        <textarea
          id="from"
          name="from"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="From"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default TransactionNewForm;