import NavBar from '../components/layout/NavBar';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import Footer from '../components/layout/Footer';
function Layout() {
    return (
        <>
            <Header>
                <NavBar />
            </Header>
            <Main>
                <h1>Hello World</h1>
            </Main>
            <Footer />
        </>

    )

}

export default Layout;