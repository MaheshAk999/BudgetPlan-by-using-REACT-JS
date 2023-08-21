import Budget from './Budget'
import ReactDOM from "react-dom/client";
import './bootstrap.min.css'
import Remaining from './Remaining';
import Spent from './Spent';
import Expenses from './Expenses';
import { useState } from 'react';
function BudgetPlan()
{
  const Rupees=2500 
  const [Remain,setRemain]=useState(2500)
  const [SPent,setSpent]=useState(0)
  const SetRupees=(Cost)=>{
  setRemain(Remain-Cost)
  setSpent(SPent+Cost)
 }
 const AddDeletedAmount=(Cost)=>{
  setRemain((Remain)=>{
    return Remain+Cost
  })
  setSpent((SPent)=>{
    return SPent-Cost
  })
 }
 const EditCost=(cost)=>{
  setRemain((Remain)=>{
    return Remain-cost
  })
  setSpent((SPent)=>{
    return SPent+cost
  })
 }
 const EditBudget=(rupee)=>{
  setRemain(()=>{
    return rupee-SPent
  })
 }
  return (
    <> 
    <head>
      <style>
      </style>
    </head>
    <div style={{padding:'25px'}}>
    <marquee style={{backgroundColor:'antiquewhite', fontFamily:'Georgia', fontStyle:'bold'}}> <h2><span style={{fontSize:'45px',color:'rgb(230, 30, 30)'}}> B</span>udget Plan </h2> </marquee>
    <div className="row mt-3"> 
    <br />
    <div className='col-md-4'> 
      <Budget rupees={Rupees}  spent={SPent} SetBudgett={(bud)=>EditBudget(bud)}/>
      </div>
      <div className='col-md-4'> 
      <Remaining remain={Remain}/>
      </div>
      <div className='col-md-4'> 
      <Spent spent={SPent}/>
      </div>
    </div>
    <div> 
      <Expenses remain={Remain} AddEdit={(cost)=>EditCost(cost)} Set={(Cost)=>SetRupees(Cost)} Amount={(Cost)=>AddDeletedAmount(Cost)}/>
      </div>
    </div> 
    </>
  )
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<BudgetPlan />)
