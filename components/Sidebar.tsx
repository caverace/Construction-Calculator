import { useState, type MouseEventHandler, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { BrickWall, PanelLeftOpen, Ruler } from "lucide-react";

function SideButton({ children, onClick }: { children: ReactNode, onClick?: MouseEventHandler<HTMLButtonElement> }) {
    return (
        <Button variant="outline" className="size-12 w-full" onClick={onClick}>
            {children}
        </Button>
    );
}

function SideBar() {
    const [ isOpen, setOpen ] = useState<boolean>(false);

    return (
        <div className={`${isOpen ? "w-64" : null} border-r p-2 flex flex-col gap-2 justify-between [&_svg:not([class*='size-'])]:size-6`}>
            <div className="flex flex-col gap-2">
                <SideButton>
                    <Ruler />
                </SideButton>
                <SideButton>
                    <BrickWall />
                </SideButton>
            </div>
            <SideButton onClick={() => setOpen(!isOpen)}>
                <PanelLeftOpen />
            </SideButton>
        </div>
    );
}

export default SideBar;
