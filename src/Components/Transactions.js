import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    axios.get(`${API}/transactions`)
      .then((response) => { setTransactions(response.data) })
      .catch((error) => { console.error(error) })
  },[])

  function addTotal  () {
    let total = 0;
    transactions.map((transaction => {
      total += Number(transaction.amount)
      return total;
    }))
    
  }

  return (
    <div className="Transactions">
      <section>
        <table>
          <thead>
            <tr>
            
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
          
              return
              <Transaction key={index} transaction={transaction} index={index}/>
              
              
            })}
          </tbody>
          <h1>(っ◔◡◔)っ ♥ Bank Account Total ♥: ${addTotal()}</h1>
        </table>
      </section>
    </div>
  );
}

export default Transactions;