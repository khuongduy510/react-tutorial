// conditional rendering = cho phép bạn kiểm soát những gì hiển thị trên
//                         ứng dụng của bạn dựa trên điều kiện nhất định
//                         (show, hide and change component)
export default function ConditionalRendering(prop) {
  if (prop.isStudent) {
    return (
      <>
        <h2>Welcome to {prop.username}</h2>
      </>
    );
  }else{
    return <h2>Hello World</h2>
  }
}
