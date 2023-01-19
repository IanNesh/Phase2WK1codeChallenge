import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, search }) {

 

 

  const filteredTransactions = transactions.filter(transDescription => {
    if(search === '') return true
    return transDescription.description.includes(search)
  })

  const mapTransaction = filteredTransactions.map(transaction => {
    return <Transaction key={transaction.id} date={transaction.date} amount={transaction.amount} 
    description={transaction.description} category={transaction.category} />
  })

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        { mapTransaction }
      </tbody>
    </table>
  );
}

export default TransactionsList;