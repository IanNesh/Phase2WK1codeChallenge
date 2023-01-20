import React, {useEffect, useState} from "react";
import TransactionsList from "./TransactionList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
function AccountContainer() {
  const [search, setSearch] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [searchedArray, setSearchArray] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8001/transactions")
    .then(response=> response.json())
    .then(data=>setTransactions(data))
    
  },[transactions])
  function handleDeleteTransaction(id) {
    fetch(` http://localhost:8001/transactions/${id}`, {
      method: "DELETE"
    })
      .then((r) => r.json)
      .then((data) => {
        console.log(data)
        
      })
  }
  function handleSearch(searchName){
    setSearch(searchName)
    const searchedItems = transactions.filter((transaction)=>{
      return transaction.description.toLowerCase().includes(search.toLowerCase()) || transaction.category.toLowerCase().includes(search.toLowerCase())
    })
    setSearchArray(searchedItems)
  }
  const displayedArray = searchedArray.length > 0? searchedArray:transactions
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm  />
      <TransactionsList transactions={displayedArray}  handleDeleteTransaction={handleDeleteTransaction}/>
    </div>
  );
}
export default AccountContainer;