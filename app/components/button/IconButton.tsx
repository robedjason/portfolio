type BaseIconButtonProps = { icon: React.ReactNode, className?: string } & (
    {href?: string} | {onClick: () => void}
)

type IconButtonPropsWithHref = BaseIconButtonProps & {href: string}
type IconButtonPropsWithOnClick = BaseIconButtonProps & {onClick: () => void}

type IconButtonProps = IconButtonPropsWithHref | IconButtonPropsWithOnClick

export default function IconButton({ icon, className, ...props }: IconButtonProps) {
    const wrapper = (content: React.ReactNode) => ('href' in props) ? (<a href={props.href}>{content}</a>) : 
        ('onClick' in props) ? <div onClick={props.onClick}>{content}</div> : content
    
    return wrapper(<div className={`cursor-pointer ${className}`}>
        {icon}
    </div>)
}