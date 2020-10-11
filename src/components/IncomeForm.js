import React from 'react';

function IncomeForm() {
  return(
    <form className="income-form">
      <div className="form-inner">
        <input type="text" name="desc" id="desc" placeholder="Descrição do gasto..." />
        <input type="number" name="price" id="price" placeholder="Preço..." />
        <input type="date" name="date" id="date" placeholder="Data do gasto" />
        <input type="submit" value="Add gasto" />
      </div>
    </form>
  );
}

export default IncomeForm;