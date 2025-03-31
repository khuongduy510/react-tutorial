// update function = một hàm được truyền như một đối số cho setState()
//                   ví dụ: setYear(()=>{})
//                   Cho phép cập nhật an toàn với nhiều bản cập nhật

import { useState } from "react";

//                   trạng thái và các hàm không đồng bộ
export default function UpdateFunc() {
  const [car, setCar] = useState({ year: 2025, model: "BMW", name: "I5" });
  const [foods, setFoods] = useState([
    "🍕 Pizza",
    "🍔 Burger",
    "🍝 Pasta",
    "🥗 Salad",
  ]);
  const [persons, setPersons] = useState([]);
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState(new Date().getFullYear());
  const [location, setLocation] = useState("");

  function addPersons() {
    const newCar = {
      name: name,
      birthday: birthday,
      location: location,
    };
    setPersons((car) => [...car, newCar]);
  }

  function removeCar(index) {
    setPersons(persons.filter((_, i) => i !== index));
  }
  

  function handleName(event) {
    setName(event.target.value);
  }
  function handleBirthday(event) {
    setBirthday(event.target.value);
  }

  function handleLocation(event) {
    setLocation(event.target.value);
  }

  function changeYear(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }

  function changeModel(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  function changeName(event) {
    setCar((c) => ({ ...c, name: event.target.value }));
  }

  function removeFoods(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }
  return (
    <div>
      <div>
        You favorite car is: {car.year} {car.model} {car.name}
      </div>
      <input type="text" value={car.year} onChange={changeYear} />
      <input type="text" value={car.model} onChange={changeModel} />
      <input type="text" value={car.name} onChange={changeName} />

      <ul>
        {foods.map((food, index) => {
          return (
            <li key={index} onClick={() => removeFoods(index)}>
              {food}
            </li>
          );
        })}
      </ul>

      <ul>
        {persons.map((person, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                removeCar(index);
              }}
            >
              {person.name}
              {person.birthday}
              {person.location}
            </li>
          );
        })}
      </ul>
      <input type="text" value={name} onChange={handleName} />
      <input type="text" value={birthday} onChange={handleBirthday} />
      <input type="text" value={location} onChange={handleLocation} />
      <button onClick={addPersons}>Submit</button>
    </div>
  );
}
