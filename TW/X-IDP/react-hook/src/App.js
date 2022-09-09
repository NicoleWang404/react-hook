import React, {useState, useEffect, useMemo, useCallback} from 'react';
import './App.css';

// 打log
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }
//
//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState({count: this.state.count + 1})
//         }, 1000);
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }
//
//     minusButton = () => {
//         this.setState({count: this.state.count - 1})
//     }
//
//     render() {
//         return (
//             <>
//                 <h2>{this.state.count}</h2>
//                 <button onClick={this.minusButton}>-</button>
//
//             </>
//
//     )
//     }
// }


function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('red')
    // console.log('111')
//每次更新都打印
    let timer
    useEffect(() => {  //每一个括号和箭头代表啥
        console.log('aaa')
        timer = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);

        return () => {
            clearInterval(timer) //放里面和放外面有什么区别
            console.log('bbb')   //return只有在状态更新才会执行  内部函数放useEffect外面会一直执行 放return前面定时器关闭
        }
    }, [color])


    function minusButton() {
        setCount(prevCount => prevCount - 1)
        setColor('green')
    }

    function plusButton() {
        setCount(prevCount => prevCount + 1)
        setColor('red')
    }

    const [firstName, setFirstName] = useState('');

    // const [fullName, setFullName] = useState('');
    //
    // useEffect(()=>{
    //     setFullName(`${firstName}33333`);
    // },[firstName]);

    const fullName = useMemo(() => {
        return `${firstName}33333`
    }, [firstName])

    const fullNamee = useCallback ( `${firstName}33333`, [firstName])


    // useEffect(()=>{
    //     console.log('111')
    // },[color])


    return (
        <div>
            <button onClick={minusButton}>-</button>
            <span> {count} </span>
            <span>{color}</span>
            <button onClick={plusButton}>+</button>
            <h1>{fullName}</h1>
            <input onChange={(e) => setFirstName(e.target.value)}/>
        </div>
    )

}

export default App;
