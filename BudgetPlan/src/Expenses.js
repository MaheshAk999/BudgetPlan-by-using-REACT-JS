import { useState } from "react"
import { memo,useRef } from "react"
function Expenses(props)
{
    const [editt,setEdit]=useState(false)
    const [bool,setBool]=useState(false)
    const Name=useRef('')
    const Cost=useRef(0)
    const EXpenses=[
]
const EditProp=()=>{
    let a=Name.current.value
    let b=Cost.current.value
    const values=[...value]
    values.map((i)=>{
        if(i.edit===true && b>=0)
        {
            if(Number(b-i.cost)<=props.remain)
            {
            props.AddEdit(Number(b-i.cost))
            i.edit=false
            i.name=a
            i.cost=b
            }
            
            else{
                alert("Insufficient funds")
            }
        }
        else if(i.edit===true && b<=0)
            {
                alert("Cost is in negative")
                i.edit=false

            }
            setEdit(false)
    })
    Name.current.value=''
    Cost.current.value=''
setValue(values)

}
const AddItem=()=>{

    let a=Name.current.value
    let b=Cost.current.value
    if(a.length===0 || b.length===0)
    {
        alert("Please fill all the fields") 
        return 
    }
    else
    if(props.remain<b)
    {
        alert("Insufficient funds")
    }
    else 
    if(!isNaN(b) && isNaN(a) && props.remain>=b && b>=0)
    {
    props.Set(Number(b))
    setValue([...value,{name:Name.current.value,cost:Cost.current.value,boolen:false,edit:false}])
    
    }
    else
    alert("Invalid Data")
    Name.current.value=''
    Cost.current.value=''
}
const Edit=(index)=>{
    Name.current.value=index.name 
    Cost.current.value=index.cost
    index.edit=true
    setEdit(true)
}
const [value,setValue]=useState(EXpenses)
const Delete=(index,cost)=>{
    const a=value.filter((i)=>i!==index)
    props.Amount(Number(cost))
    setValue(a)
}
const Change=(ind,booo)=>{
    const values=[...value]
    let b=!booo 
     ind.boolen=b
     setValue(values)
}
return (
    <> 
    <div>
    <div align='center'>
        <h2> Add Expenses </h2>
        <input type="text" ref={Name} style={{width:'70%',border:'1px solid black'}} className="form-control" placeholder="Expense Name"/>
        <br />
        <input type="number" ref={Cost} style={{width:'70%',border:'1px solid black'}} className="form-control" placeholder="Cost"/>
 <br />
 {
    editt ? <button className="btn btn-outline-dark" onClick={()=>{
        setBool((bool)=>{
            return !bool
        })
        setTimeout(()=>{
            setBool((bool)=>{
                return !bool 
            })
        },1000)
        setTimeout(()=>{
            EditProp()
        },1500)
    }
    }> Edit  </button> : <button onClick={()=>{
        setBool((bool)=>{
            return !bool
        })
        setTimeout(()=>{
            setBool((bool)=>{
                return !bool 
            })
        },1000)
        setTimeout(()=>{
            AddItem()
        },1500)
    }
    } 
    className="btn btn-outline-danger"> Add </button>
 }  
        <br />
    <br />
        {bool?  <>  <span style={{textAlign:'center'}} class="spinner-border spinner-border-md text-danger"></span> &nbsp;<span style={{fontSize:'25px',color:'red'}}> Loading </span></>: null}
        </div>
    </div>
    <div>
    <h1> Expenses </h1>
    <br />
    <br />
    <ul className="list-group" >
        {value.map((index)=>{
            return (
            <li id={index} className="list-group-item" style={{fontSize:'20px'}}> 
            <span class="form-check form-switch" style={{float:'left'}} > 
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={index.boolen} onClick={()=>{
               Change(index,index.boolen)
            }
                }/>
            </span>
                &nbsp; &nbsp; 
            <span>
            { !index.boolen ? <span><b>  ExpenseName : {index.name} </b> </span>: <strike> <b>  ExpenseName : {index.name}  </b>  </strike> }
               </span>
            <button onClick={()=>Delete(index,index.cost)} style={{fontSize:'20px',float:"right"}} className="btn btn-outline-danger"> X </button>
            <button style={{float:'right',marginRight:'0.3cm',fontSize:'20px'}} class="btn btn-outline-dark" onClick={()=>Edit(index)}> Edit </button>
            <span className="badge bg-primary" style={{fontSize:'20px',padding:'10px',float:'right',marginRight:'0.3cm'}}>
                Cost :{index.cost}
            </span>
             </li>
            )
        })}
    </ul>
    </div>
    </>
)
}
export default memo(Expenses) 