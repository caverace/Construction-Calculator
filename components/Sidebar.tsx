import {
    type Dispatch,
    type MouseEventHandler,
    type ReactNode,
    type SetStateAction,
} from "react";
import { Button } from "@/components/ui/button";
import { BrickWall, Ruler } from "lucide-react";
import SignIn from "@/components/SignIn";

function SideButton({
    isOpen,
    children,
    onClick,
    title,
}: {
    isOpen: boolean;
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    title?: string;
}) {
    return (
        <Button
            variant="outline"
            className={`size-12 justify-start ${isOpen ? "w-full" : null}`}
            onClick={onClick}
        >
            {children}
            {isOpen ? title : null}
        </Button>
    );
}

function SideBar({
    openHooks,
}: {
    openHooks: [boolean, Dispatch<SetStateAction<boolean>>];
}) {
    const [isOpen] = openHooks;

    return (
        <div
            className={`${isOpen ? "w-48" : null} bg-background flex flex-col justify-between gap-2 border-r p-2 [&_svg:not([class*='size-'])]:size-6`}
        >
            <div className="flex flex-col gap-2">
                <SideButton title="Measurements" isOpen={isOpen}>
                    <Ruler />
                </SideButton>
                <SideButton title="Materials" isOpen={isOpen}>
                    <BrickWall />
                </SideButton>
                <SignIn isOpen={isOpen} />
            </div>
        </div>
    );
}

export { SideBar, SideButton };
