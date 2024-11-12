import { useState } from "react";

const NewFeaturedPage = () => {
  const [count, setCount] = useState(10);
  const [list, setList] = useState([""]);
  const [name, setName] = useState("")

  const addFive = () => {
    setCount(count + 5);
  };

  const numbers = [10, 10, 20];
  const sumUp = numbers.reduce((cv, n) => cv + n, 0)

  const onAddName = () => {
    setList([...list, name]);
    setName("");
  }

  return (
    <section className="flex flex-col items-center">
      <div>
        <h1>Current Score: {count}</h1>
        <button className="border p-2 bg-slate-50" onClick={addFive}>
          Count
        </button>
      </div>
      <div className="mt-5">
        <h1 className="text-[20px] font-bold mb-5">Name List</h1>
        <ul>
          {list.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <input type="text" className="border p-2 mr-4 mt-4" value={name} onChange={(e) => setName(e.target.value)} />
        <button className="border px-4 py-2 hover:border-indigo-500/100" onClick={onAddName}>Add Name</button>
        <p>{sumUp}</p>
      </div>
    </section>
  );
};

export default NewFeaturedPage;
