import { cn } from "../utils"

type AvatarProps = {
    avatarUrl?: string | null
    alt: string
    width: number
    height: number
}

export const Avatar = ({ avatarUrl, alt, width, height }: AvatarProps) => {
    const widthClass = `w-${width}`
    const heightClass = `h-${height}`

    return (
        <>
            {avatarUrl ? (
                <div className="flex flex-col justify-center items-center">
                    <img src={avatarUrl} alt={alt} width={50} height={50} className="object-cover rounded-full" />
                </div>
            ) : (
                <div
                    className={cn(
                        'flex flex-col items-center justify-center text-center bg-bg-light rounded-full text-body-text-light text-xs font-bold',
                        widthClass,
                        heightClass
                    )}
                >
                    Upload Avatar
                </div>
            )}
        </>
    )
}