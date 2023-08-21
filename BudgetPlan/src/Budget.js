import { memo,useState } from "react"
function Budget(props)
{
    var c=0
    const [disable,setDisable]=useState(false)
    const [bool,setBool]=useState(false)
    const [value,setValue]=useState(props.rupees)
    return (
        <> 
        <div className="alert alert-primary font-bold" style={{fontSize:'20px'}} align='center'>
            <b style={{fontSize:'22px'}}> Budget :   <input value={value} disabled={!bool} style={{width:'4cm'}} tpye="number" onChange={(e)=>setValue(e.target.value)} /> </b>
            &nbsp; 
                 {
                  !bool?<button className="btn btn-outline-dark" disabled={disable} onClick={()=>{
                    setBool(!bool)
                }}> 
                 Edit Budget </button>:<button className="btn btn-outline-danger" onClick={()=>{
                    setBool(!bool)
                    if(props.spent>value)
                    {
                        alert("Budget is less than spent amount")
                        setBool(props.rupees)
                    }
                    else{
                        props.SetBudgett(Number(value))
                    }
                    
                }}> Set Budget</button>
            }
        
        </div>
        </>
    )
}
export default  memo(Budget)