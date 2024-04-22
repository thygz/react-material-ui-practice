import {
    Box,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardMedia,
} from '@mui/material';

export const MuiCard = () => {
    return (
        <Box width="300px">
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="unsplash image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        React
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        React is a Javascript library for building user
                        interfaces. React can be used as a base in the
                        development of single-page or mobile applications.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn more</Button>
                </CardActions>
            </Card>
        </Box>
    );
};
