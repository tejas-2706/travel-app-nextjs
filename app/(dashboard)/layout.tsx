export default function Layout({children} : {children:React.ReactNode}) {
    return (
        <div className="w-screen">
            {children}
        </div>
    )
}