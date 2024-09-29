import "./App.css";

import { Header } from "./components/Header";
import { Addtask } from "./components/Addtask";
import { Showtask } from "./components/Showtask";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "two"
  );
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );

  function handleSubmit(e) {
    e.preventDefault();
    const date = new Date();
    setTasklist([
      ...tasklist,
      {
        id: date.getTime(),
        naam: e.target[0].value,
        dateString: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      },
    ]);
    e.target[0].value = "";
  }

  const handleDelete = (id) => {
    const deletetasklist = tasklist.filter((tasked) => tasked.id !== id);
    setTasklist(deletetasklist);
  };

  function handleClear() {
    setTasklist([]);
  }
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <main className={theme}>
      <div className="container">
        <Header theme={theme} setTheme={setTheme}></Header>
        <Addtask handleSubmit={handleSubmit}></Addtask>
        <Showtask
          tasklist={tasklist}
          setTasklist={setTasklist}
          handleDelete={handleDelete}
          handleClear={handleClear}
        ></Showtask>
      </div>
    </main>
  );
}
export default App;
