import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-green-500 text-white p-3 flex justify-around">
            <Link to="/conferencia" className="hover:underline">Conferência</Link>
            <Link to="/gerencial" className="hover:underline">Gerencial</Link>
            <Link to="/" className="hover:underline">Sair</Link>
        </nav>
    );
}
