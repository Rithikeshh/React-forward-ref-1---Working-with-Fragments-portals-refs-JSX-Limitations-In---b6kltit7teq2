'use client'
import React ,{ forwardRef, useRef,useState,useEffect} from 'react';
const InputField= forwardRef((props, ref)=>{
    // const ref = useRef(ref)
    return(
    <div>
      <input id="input" type="text"  ref={ref}/>
    </div>
    )
    }
)
export default InputField;