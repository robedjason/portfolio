type BaseTextButtonProps = { text: string, className?: string } & (
    {href?: string, download?: any} | {onClick: () => void}
)

type TextButtonPropsWithHref = BaseTextButtonProps & {href: string, download?: any}
type TextButtonPropsWithOnClick = BaseTextButtonProps & {onClick: () => void}

type TextButtonProps = TextButtonPropsWithHref | TextButtonPropsWithOnClick

export default function TextButton({ text, className, ...props }: TextButtonProps) {
    const wrapper = (content: React.ReactNode) => ('href' in props) ? (<a href={props.href} download={props.download}>{content}</a>) : 
        ('onClick' in props) ? <div onClick={props.onClick}>{content}</div> : content
    
    return wrapper(<div className={`bg-emerald-200 dark:bg-emerald-700 rounded-lg border cursor-pointer ${className}`}>
        {text}
    </div>)
}