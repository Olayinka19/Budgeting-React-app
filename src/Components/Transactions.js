import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";
// ^^ this is our new package for making API calls
const API = process.env.REACT_APP_API_URL;
// request for data must come AFTER component is loaded to the DOM
// otherwise we have a RACE condition  - page might be done before data arrives;
function Transactions() {
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    axios.get(`${API}/transactions`)
      .then((response) => { setTransactions(response.data) })
      .catch((error) => { console.error(error) })
  },[])
  // when the dependency array of a useEffect is empty the code inside will only run once: after the component mounts!
  // adding a value to our dependency array will cause our useEffect to run anytime that value changes
  

  return (
    <div className="Transactions">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              {/* <th>Take me there</th>
              <th>See this transaction</th> */}
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return <Transaction key={index} transaction={transaction} index={index} />;
            })}
          </tbody>
          <h1>Bank Account Total: {transactions.amount}</h1>
        </table>
      </section>
    </div>
  );
}

export default Transactions;