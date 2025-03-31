export default function Event() {
  const onClick = (e) => {
    alert(e);
  };
  return <button onClick={onClick}>Click me</button>;
}
