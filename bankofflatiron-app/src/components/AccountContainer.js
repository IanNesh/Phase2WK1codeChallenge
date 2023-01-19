import React, { useState} from "react";
import TransactionsList from "./TransactionsList";
import AddTransactionForm from "./AddTransactionForm";
import Search from "./Search";

function AccountContainer({ transactions, handleNewTransaction }) {

  const [search, setSearch] = useState('')

  function handleSearch(e){
    setSearch(search => e.target.value)
  }

  
  return (
    <div>
      <Search search={search} handleSearch={handleSearch} />
      <AddTransactionForm handleNewTransaction={handleNewTransaction} />
      <TransactionsList transactions={transactions} search={search}/>
    </div>
  );
}

export default AccountContainer;