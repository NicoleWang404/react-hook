import React, { useCallback, useEffect, useState } from "react";

export default function Callback() {
    const [count, setCount] = useState(0);

    const handleCountAdd = () => {
        setCount(count => count + 1);
    };

    const handleCountAddByCallBack = useCallback(() => {
        setCount(count => count + 1);
    }, []);



    const callBack = useCallback(() =>{


    },[])

    return (
        <div className="App">
            <h3>CountAddByChild1: {count}</h3>
            <Child1 addByCallBack={handleCountAddByCallBack} add={handleCountAdd} />
        </div>
    );
}

const Child1 = React.memo(function (props) {
    const { add, addByCallBack } = props;

    // 没有缓存，recreate，re-render，所以会触发 useEffect
    useEffect(() => {
        console.log("addUpdate", props);
    }, [add]);

    // 有缓存，所以不触发 useEffect
    useEffect(() => {
        console.log("addByCallBackUpdate", props);
    }, [addByCallBack]);

    return (
        <div>
            <button onClick={props.add}>add +1</button>
            <br />
            <button onClick={props.addByCallBack}>addByCallBack +1</button>
        </div>
    );
});