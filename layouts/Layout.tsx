import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from '@emotion/styled'


const Container = styled.div`
    padding: 40px;
`


const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            <Container>
                {children}
            </Container>
            <Footer />
        </div>
    )
}


export default Layout
