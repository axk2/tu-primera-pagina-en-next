import Layout from "../layouts/Layout"
import { Grid, Portada, Post } from "../styles/Inicio"


const index = () => {
    return (
        <Layout>
            <Portada />
            <Grid>
                <Post />
                <Post />
                <Post />
            </Grid>
        </Layout>
    )
}


export default index