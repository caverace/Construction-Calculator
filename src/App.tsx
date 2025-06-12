import "./globals.css";
import HelloWorld from "./pages/HelloWorld";
import SideBar from "@/components/Sidebar";

function App() {
    return (
        <div className="flex h-full">
            <SideBar />
            <HelloWorld />
        </div>
    );
}

export default App;
