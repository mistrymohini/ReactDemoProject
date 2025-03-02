import React from 'react'

// export default function FRInput() {
//   return (
//     <input type='text'/>
//   )
// }
const FRInput=React.forwardRef((props,ref)=>{
    return (
            <div><input type='text' ref={ref}/></div>
          )

})

export default FRInput