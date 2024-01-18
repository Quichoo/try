import { Container, Grid } from "@mui/material";
import Item from '@mui/material/Grid';

export function Home() {
    return (
        <Container maxWidth="lg">
            <h1>Cafe Juan</h1>
            <Grid container spacing={4}>
                <Grid lg={8}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid xs={8}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        </Container>
    ) 
}

export default Home