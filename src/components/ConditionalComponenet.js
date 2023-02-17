import React, { useState } from 'react'

export default function ConditionalComponenet() {
  const [display, setDisplay] = useState(true);
  
  return display ? (
  
    <div>
        <h1>This is true condition.</h1>
    </div>) : (
        <div>
            <h1>This is false.</h1>
        </div>
    );

}
//   let output;
//   if(display){
//     output =<h1>This is a funcational components.</h1>
//   }else{

//     output = <h1>This is also the same</h1>
//   }

//   return (
//     <div>
//         {output}
//     </div>
//   )


// }
