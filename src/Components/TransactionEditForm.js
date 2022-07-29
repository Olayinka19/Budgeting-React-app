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
  
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value});
  };

  useEffect(() => {
    axios.get(`${API}/transactions/${index}`)
      .then(response => setTransaction(response.data))
      .catch(error => console.error(error))

   
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
        <label htmlFor="name">𝕹𝖆𝖒𝖊:</label>
        <input
          id="name"
          value={transaction.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <br/>
        <label htmlFor="month">𝕸𝖔𝖓𝖙𝖍:</label>
        <input
          id="month"
          value={transaction.month}
          type="text"
          onChange={handleTextChange}
          placeholder="Month"
          required
        />
        <br></br>
        <label htmlFor="date">Ðå†ê: </label>
        <input
          id="date"
          type="text"
          name="date"
          value={transaction.date}
          placeholder="Date"
          onChange={handleTextChange}
        />
        <br/>
        <label for="amount">ǟʍօʊռȶ: </label>
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

        
        <label htmlFor="from">千尺ㄖ爪: </label>
        <textarea
          id="from"
          name="from"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="Type Here"
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <button>几乇ᐯ乇尺爪丨几ᗪ!</button>
      </Link>
    </div>
  );
}

export default TransactionEditForm;