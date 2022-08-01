import { useState, useEffect } from "react";
import Transaction from "../Components/Transaction";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  
    let total = 0;
    let amounts = transactions.map((transaction) => Number(transaction.amount));

    amounts.forEach((amount) => {
      total += amount;
    });
   
 
  return (
    <div className="Transactions">
      <section>
        <table>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <Transaction
                key={index}
                transaction={transaction}
                index={index}
              />
            ))}
          </tbody>
          <h1>(っ◔◡◔)っ ♥ Bank Account Total ♥: ${total}</h1>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
