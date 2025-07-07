import { useState, type MouseEventHandler, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { BrickWall, PanelLeftOpen, Ruler } from "lucide-react";

function SideBar() {
    const [ isOpen, setOpen ] = useState<boolean>(false);

    function SideButton({ children, onClick, title }: { children: ReactNode, onClick?: MouseEventHandler<HTMLButtonElement>, title?: string }) {
        return (
            <Button variant="outline" className={`size-12 justify-start ${isOpen ? "w-full" : null}`} onClick={onClick}>
                {children}
                {isOpen ? title : null}
            </Button>
        );
    }

    return (
        <div className={`${isOpen ? "w-48" : null} border-r p-2 flex flex-col gap-2 bg-background justify-between [&_svg:not([class*='size-'])]:size-6`}>
            <div className="flex flex-col gap-2">
                <SideButton title="Measurements">
                    <Ruler />
                </SideButton>
                <SideButton title="Materials">
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
