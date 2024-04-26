import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Shop Runners!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Bengaluru City, Shop Runners teams provides a trained staff ready to meet your shop running needs.</p>
                <address className="public__addr">
                    Shop Runners<br />
                    555 IN Drive<br />
                    Bengaluru City, PIN 560066<br />
                    <a href="tel:+91 8528528528">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Sham Sundar</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public