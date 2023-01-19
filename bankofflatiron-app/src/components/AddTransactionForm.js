import React,{useState}from "react";

function AddTransactionForm({handleNewTransaction}) {

  const[formData,setFormData]=useState({
    date:"",
    description:'',
    category:"",
    amount:""

  })
  function handleInput(e){
    const name = e.target.name
    let value = e.target.value

    setFormData({...formData,
    [name]: value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    handleNewTransaction(formData);
  }



  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
      <div className="inline fields">
          <input value={formData.date} onChange={handleInput} type="date" name="date" />
          <input value={formData.description} onChange={handleInput} type="text" name="description" placeholder="Description" />
          <input value={formData.category} onChange={handleInput} type="text" name="category" placeholder="Category" />
          <input value={formData.amount} onChange={handleInput} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;