import { Tooltip } from "./ToolTip"
import { cn } from "../utils"

export const SideBarHeader = ({ heading }) => {
    return (
        <div className={'flex gap-6 md:gap-10 w-full h-16 justify-start items-center px-4 py-4 border-b border-b-headline-text'}>
        <h1 className="font-heading text-2xl font-bold md:text-3xl">{heading}</h1>
        </div>
    )
}
