import { useState } from "react";
import "./globals.css";
import { Button } from "@/components/ui/button";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="w-full flex flex-col gap-2 justify-center items-center h-[100vh]">
            <h1 className="text-3xl font-bold">Hello world 🦈</h1>
            <Button onClick={() => setCount(count + 1)}>Count: {count}</Button>
        </div>
    );
}

export default App;
