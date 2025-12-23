import "./navbutton.css";

export default function NavButton({ 
    children,
    selected,
    onClick,
}: {
    children: React.ReactNode,
    selected: boolean,
    onClick: () => void
}) {
    return <div onClick={onClick} className={`nav-button ${selected && "selected"}`}>
        {children}
    </div>
}