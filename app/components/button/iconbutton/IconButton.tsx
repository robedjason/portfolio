import "./iconbutton.css"


export default function IconButton({ icon, href }: { icon: React.ReactNode, href?: string }) {
    const wrapper = (content: React.ReactNode) => href ? (<a href={href}>{content}</a>) : content
    
    return wrapper(<div className="icon-button">
        {icon}
    </div>)
}