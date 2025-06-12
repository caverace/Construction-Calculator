import * as React from "react";
import { Button } from "@/components/ui/button";
import { BrickWall, PanelLeftOpen, Ruler } from "lucide-react";

function SideButton({ children }: { children: React.ReactNode }) {
    return (
        <Button variant="outline" className="size-12">
            {children}
        </Button>
    );
}

function SideBar() {
    return (
        <div className="border-r p-2 flex flex-col gap-2 justify-between [&_svg:not([class*='size-'])]:size-8">
            <div className="flex flex-col gap-2">
                <SideButton>
                    <Ruler />
                </SideButton>
                <SideButton>
                    <BrickWall />
                </SideButton>
            </div>
            <SideButton>
                <PanelLeftOpen />
            </SideButton>
        </div>
    );
}

export default SideBar;
