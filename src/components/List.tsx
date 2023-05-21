

export const List = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex flex-col w-full h-full overflow-y-auto space-y-2  divide-y">{children}</div>
}