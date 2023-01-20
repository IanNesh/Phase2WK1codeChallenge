import React from "react";
function Transaction({ date, description, category, amount, id, handleDeleteTransaction }) {
  const handleDelete = ()=>{
    handleDeleteTransaction(id)
  }
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button className="ui button" onClick={handleDelete}>Delete</button></td>
    </tr>
  );
}
export default Transaction;