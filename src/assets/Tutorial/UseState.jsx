// React Hook = chức năng đặc biệt cho phép các thành phần chức năng
//              để sử dụng các tính năng của React mà không cần viết
//              các thành phần lớp

import { useState } from "react";

// useState() = một hook React cho phép tạo biến có trạng thái và hàm
//              setter để cập nhật giá trị biến đó trong Virtual DOM
export default function UseState() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div>
      <div id="display">{count}</div>
      <button onClick={increase}>Tăng</button>
      <button onClick={decrease}>Giảm</button>
      <button onClick={reset}>Đặt lại</button>
    </div>
  );
}
