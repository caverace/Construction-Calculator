import { BrickWall, Ruler } from "lucide-react";
import "./globals.css";
import HelloWorld from "./pages/HelloWorld";
import { SideBar, SideButton } from "@/components/Sidebar";

function App() {
    return (
        <div className="flex h-full">
            <SideBar>
                <SideButton>
                    <Ruler />
                </SideButton>
                <SideButton>
                    <BrickWall />
                </SideButton>
            </SideBar>
            <HelloWorld />
        </div>
    );
}

export default App;
