import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function HelloWorld() {
    const [count, setCount] = useState(0);

    return (
        <div className="grow flex flex-col gap-2 items-center justify-center">
            <h1 className="text-3xl font-bold">Hello world 🦈</h1>
            <Button onClick={() => setCount(count + 1)}>Count: {count}</Button>
        </div>
    );
}
