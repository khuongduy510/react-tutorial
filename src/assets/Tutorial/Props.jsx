// props = giống như đối số của hàm và thuộc tính của HTML
//         khi truyền prop thì prop của component con phải trùng với conponent cha
//         
export default function Props(prop) {
  return (
    <>
      <div className="className">
        <p>Name: {prop.name}</p>
        <p>Age: {prop.age}</p>
      </div>
    </>
  );
}
