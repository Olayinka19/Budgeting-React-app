import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();
  // this is whatever the value of our id in the params is
  const navigate = useNavigate();

  useEffect(
    () => {
      axios
        .get(`${API}/transactions/${index}`)
        .then((response) => setTransaction(response.data))
        .catch((error) => navigate(`/error-page`));
      // this could navigate to any route that we didnt define really... but we should navigate to something appropriate we dont have like `/404` or `/error`
    },[index]
  );

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then((response) => navigate(`/transactions`))
      .catch((error) => console.error(error));

  };
  return (
    <article>
      <h3>
        {transaction.isFavorite ? <span>⭐️</span> : null} {transactions.name}
      </h3>
      <h5>
        <span>
          <a href={transaction.url}>{transaction.name}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {transaction.url}
      </h5>
      <h6>{transaction.category}</h6>
      <p>{transaction.description}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default TransactionDetails;