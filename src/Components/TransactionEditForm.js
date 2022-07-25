import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function TransactionEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    name: "",
    date: "",
    amount: "",
    from: "",
    // isFavorite: false,
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

//   const handleCheckboxChange = () => {
//     setTransaction({ ...transaction, isFavorite: !transaction.isFavorite });
//   };
  // we need a function to SEND our UPDATED transaction to the DB
  useEffect(() => {
    axios.get(`${API}/transactions/${index}`)
      .then(response => setTransaction(response.data))
      .catch(error => console.error(error))
    /* 
      1. Get a handle on the data from our user
      2. Send a request to the DB
      3. < What do if it succeeds ? >
    */
  }, [index]);

  const updateTransaction = () => {
    axios.put(`${API}/transactions/${index}`, transaction) 
    // two arguments because the second argument(transaction) is the data we have to send. In the backend it is our request.body
      .then(response => {
        setTransaction(response.data)
        // updating the transaction in state to the updated transaction from our backend
        navigate(`/transactions/${index}`)
        // navigatng back to our transaction show page
      })
      .catch(error => console.error(error))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={transaction.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <br/>
        {/* <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={transaction.url}
          placeholder="http://"
          onChange={handleTextChange}
        /> */}
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          type="text"
          name="date"
          value={transaction.date}
          placeholder="Date"
          onChange={handleTextChange}
        />
        <br/>
        <label for="amount">Amount: </label>
        <input
          id="amount"
          type="number"
          required
          value={transaction.amount}
          placeholder="Amount"
          min = "-300"
          max = "1000"
          onChange={handleTextChange}
        />
        <br/>
        {/* <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={transaction.isFavorite} */}
        {/* /> */}
        
        <label htmlFor="from">From: </label>
        <textarea
          id="from"
          name="from"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="Describe why you bookmarked this site"
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default TransactionEditForm;