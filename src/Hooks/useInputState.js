import { useState } from "react";

const useInputState =(defaultvalue='')=>{
    const [value , setvalue]=useState(defaultvalue);

    // const onChange =e=>{
    //     setvalue(e.target.value);

    // }
    const handle =e=>{
        setvalue(e.target.value);
    }
    // return {value,onChange};
    return [value,handle];
}
export default useInputState;