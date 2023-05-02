import { Tooltip } from "./ToolTip"
import { cn } from "../utils"

export const SideBarHeader = ({ options, className="" }) => {
    return (
        <div className={'flex gap-6 md:gap-10 w-full h-16 justify-start items-center px-4 py-4 border-b border-b-headline-text'}>
            {options?.map((option) => {
                return (
                    <Tooltip key={option.key} content={option.key}>
                        <button
                            className={cn('text-headline-text overflow-hidde p-1', option.buttonStyle && option.buttonStyle)}
                            key={option.key}
                            onClick={option.onClick}
                        >
                            {option.display}
                        </button>
                    </Tooltip>
                )
            })}
        </div>
    )
}
