import React from "react";
import ChildWrap from './ChildWrap'

function ParentWrap(){
    return(
        <>
        <ChildWrap/>
        <p>Child 1</p>
        <p>Child 2</p>
        <ChildWrap/>
        </>
    )
}
export default ParentWrap;