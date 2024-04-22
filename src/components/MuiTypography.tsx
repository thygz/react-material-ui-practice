import { Typography } from '@mui/material';

export const MuiTypography = () => {
    return (
        <div>
            <Typography variant="h1">h1 heading</Typography>
            <Typography variant="h2">h2 heading</Typography>
            <Typography variant="h3">h3 heading</Typography>
            <Typography variant="h4" component="h1" gutterBottom>
                h4 heading
            </Typography>
            <Typography variant="h5">h5 heading</Typography>
            <Typography variant="h6">h6 heading</Typography>
            <Typography variant="subtitle1">Sub title 1</Typography>
            <Typography variant="subtitle2">Sub title 2</Typography>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                exercitationem nisi hic necessitatibus recusandae aperiam,
                veniam eum amet ad quaerat optio deserunt reprehenderit minus.
                Enim deserunt possimus similique unde molestiae.
            </Typography>
            <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum est
                fuga iusto repellat rerum beatae enim exercitationem commodi, ab
                deleniti placeat accusamus! Et quas ut rem. Libero modi
                voluptatem hic!
            </Typography>
        </div>
    );
};
