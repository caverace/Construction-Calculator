import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

function SideBar({ children }: { children: ReactNode }) {
    return <div className="border-r p-2 flex flex-col gap-2">{children}</div>;
}

function SideButton({ children }: { children?: ReactNode }) {
    return (
        <Button variant="secondary" size="icon">
            {children}
        </Button>
    );
}

export { SideBar, SideButton };
