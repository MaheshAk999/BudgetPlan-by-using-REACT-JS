import { memo } from 'react'
import './bootstrap.min.css'
function Remaining({remain})
{
    return (
        <>
        <div align='center' className="alert alert-danger" style={{fontSize:'25px'}}> 
          <b> Remaining : {remain} </b>  
        </div>
        </>
    )
}
export default memo(Remaining)