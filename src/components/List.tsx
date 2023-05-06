

export const List = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex flex-col h-full p-2 overflow-y-auto space-y-2  divide-y">{children}</div>
}