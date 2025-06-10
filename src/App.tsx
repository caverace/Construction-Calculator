import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="w-full flex flex-col gap-2 justify-center items-center h-[100vh]">
            <h1 className="text-3xl font-bold">Hello world 🦈</h1>
            <button
                className="border p-2 rounded shadow hover:bg-gray-100 transition-all"
                onClick={() => setCount(count + 1)}
            >
                Count: {count}
            </button>
        </div>
    );
}

export default App;
