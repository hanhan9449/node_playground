import { Link } from "react-router-dom";

export function Header() {
    return <nav>
    <Link to="/Foo">Foo</Link>
    <Link to="/Bar">Bar</Link>
    <Link to="/Baz">Baz</Link>
  </nav>
}