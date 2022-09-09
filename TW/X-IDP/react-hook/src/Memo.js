import { useState, useMemo } from "react";

export default function Memo() {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    //没useMemo，即使是更新 total, count也会重新计算 持续渲染 re-render re-create
    const countNumber = (() => {
        console.log("countNumber 被调用");
        return count;
    })();



    //useMemo, 只有 total 改变，才会重新计算
    const totalCount = useMemo(() => {
        console.log("totalCount 被调用");
        return total;
    }, [total]);
//memo和effect区别
    return (
        <div className="App">
            s
            <h3>countToString: {countNumber}</h3>
            <h3>totalToString: {totalCount}</h3>
            <button onClick={() => {setCount(count => count + 1)}}>
                Add Count
            </button>
            <br />
            <button onClick={() => {setTotal(total=> total + 1)}}>
                Add Total
            </button>
        </div>
    );
}