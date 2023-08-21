import { memo } from "react"
function Spent({spent})
{
    return (
        <>
        <div align='center' className="alert alert-success" style={{fontSize:'25px'}}> 
        <b> Spent : {spent} </b>
        </div>
        </>
    )
}
export default memo(Spent)