import "./globals.css";
import HelloWorld from "@/src/pages/HelloWorld";
import { SideBar } from "@/components/SideBar";
import { useState } from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

function App() {
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <div className="flex h-full">
            <div className="flex">
                <SideBar openHooks={[isOpen, setOpen]} />
                <Button
                    variant="outline"
                    className={`m-2 size-12 [&_svg:not([class*='size-'])]:size-6`}
                    onClick={() => setOpen(!isOpen)}
                >
                    {isOpen ? (
                        <PanelLeftClose size={12} />
                    ) : (
                        <PanelLeftOpen size={12} />
                    )}
                </Button>
            </div>
            <HelloWorld />
        </div>
    );
}

export default App;
