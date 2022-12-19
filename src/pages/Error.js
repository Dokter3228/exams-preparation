import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";
const Error = () => {
  return (
    <div className="error-container">
      <h2>Страница отсутствует бля</h2>
      <Link to="/" className="back-link">
        Обратно к СЭУ
      </Link>
    </div>
  );
};

export default Error;
