import styled from '@emotion/styled'
import Link from "next/link"


const Nav = styled.nav`
    height: 80px;
    background-color: grey;
    display: flex;
    padding-left: 40px;
    padding-right: 40px;
    align-items: center;
    justify-content: space-between;

    h3 {
        color: white;

        &:hover {
            cursor: pointer;
            color: blue;
        }
    }
`


const Navbar = () => {
    return (
        <Nav>
            <Link href="/">
                <h3>Inicio</h3>
            </Link>
            <Link href="/pagina2">
                <h3>
                    Pagina2
                </h3>
            </Link>
        </Nav>
    )
}

export default Navbar
