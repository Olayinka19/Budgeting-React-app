import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import axios from "axios";

const API = process.env.REACT_APP_API_URL;
function TransactionDetails() {
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();

  const navigate = useNavigate();

  useEffect(
    () => {
      axios
        .get(`${API}/transactions/${index}`)
        .then((response) => setTransaction(response.data))
        .catch((error) => navigate(`/error-page`));
    },[]
  );

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then((response) => navigate(`/transactions`))
      .catch((error) => console.error(error));

  };
  return (
    <article className="showP">
      <h2 className="showP1">𝕹𝖆𝖒𝖊: {transaction.name}</h2>
      <hr></hr>
      <h2 className="showP2">ꪑꪮꪀꪻꫝ: {transaction.month}</h2>
      <hr></hr>
      <h3 className="showP3">Dαƚҽ: {transaction.date}</h3>
      <hr></hr>
      <h3 className="showP4">A̾m̾o̾u̾n̾t̾: {transaction.amount}</h3>
      <hr></hr>
      <h3 className="showP5">👌☢  𝒻Ř๏м  🐲😎: {transaction.from}</h3>
      <hr></hr>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>βąçҟ</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button>Ɛժìէ</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>𝕯𝖊𝖑𝖊𝖙𝖊</button>
        </div>
      </div>
    </article>
  );
}

export default TransactionDetails;