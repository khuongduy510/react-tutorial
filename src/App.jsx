import ConditionalRendering from "./assets/Tutorial/Conditional-rendering";
import Props from "./assets/Tutorial/props";
import List from "./assets/Tutorial/List";
import Event from "./assets/Tutorial/Event";
import UseState from "./assets/Tutorial/UseState";
import Color from "./components/Color";
import UpdateFunc from "./assets/Tutorial/UpdateFunc";
import UseEffect from "./assets/Tutorial/useEffect";
import RandomGift from "./components/RandomGift";
function App() {
  const fruits = [
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
    { id: 3, name: "lemon" },
  ];
  return (
    <>
      <Props name="Duy" age="21" />
      <ConditionalRendering username="duykc2003" isStudent="false" />
      <List item={fruits} />
      <Event />
      <UseState />
      <Color />
      <UpdateFunc />
      <UseEffect />
      <RandomGift />
    </>
  );
}

export default App;
