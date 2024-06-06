import Footer from "./footer";
import Nav from "./nav";


export default function Layout ({children}) {
    

    return (
        <div className="flex min-h-screen flex-col">
            <Nav />

            <main className="flex container justify-between flex-1">
                {children}
            </main>

            <Footer />
        </div>
    )
}