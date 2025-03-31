// useEffect = React Hook cho phép React THỰC HIỆN MỘT ĐOẠN CODE KHI (chọn một)
//             1. Thành phần này được render lại
//             2. Thành phần này được mount
//             3. Trạng thái thay đổi

// useEffect(function, [dependencies])
// function: là một hàm callback
// dependencies: mảng giá trị mà useEffect theo dõi để chạy lại khi
// chúng thay đổi

// 1. useEffect(() => { ... });: Chạy mỗi khi component render
// 2. useEffect(() => { ... }, []);: Chỉ chạy một lần khi component được mount
// 3. useEffect(() => { ... }, [dependency]);: Chạy khi giá trị trong mảng dependencies thay đổi

// USES
// #1. EVENT LISTENERS
// #2. DOM MANIPULATION
// #3. Subcription (real-time updates)
// #4. Fretching data form an API
// #5. Clean up when component unmounts
import { useState, useEffect } from "react";

export default function UseEffect() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    useEffect(()=>{
        document.title = `Bạn đã nhấn ${count} lần, màu là ${color}`;
        console.log("Component đã render lại");
    },[count, color]); // Chạy khi count hoặc color thay đổi
    function increase() {
        setCount(count + 1);
    }

    function changeColor(){
        setColor(color === "green" ? "blue" : "green");
    }
    return (
        <div>
            <div id="display" style={{color}}>{count}</div>
            <button onClick={increase}>Tăng</button>
            <button onClick={changeColor}>Đổi màu</button>
        </div>
    );

}