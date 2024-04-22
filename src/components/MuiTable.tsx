import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
} from '@mui/material';

export const MuiTable = () => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
            <Table aria-label="simple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First name</TableCell>
                        <TableCell>Last name</TableCell>
                        <TableCell align="center">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{
                                '&last-child td, &last-child th': { border: 0 },
                            }}
                        >
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const tableData = [
    {
        id: 1,
        first_name: 'Marjie',
        last_name: 'Spennock',
        email: 'mspennock0@merriam-webster.com',
        gender: 'Female',
        ip_address: '166.14.254.201',
    },
    {
        id: 2,
        first_name: 'Sonni',
        last_name: 'Stoile',
        email: 'sstoile1@gnu.org',
        gender: 'Polygender',
        ip_address: '239.197.120.221',
    },
    {
        id: 3,
        first_name: 'Jessy',
        last_name: 'Glison',
        email: 'jglison2@slideshare.net',
        gender: 'Female',
        ip_address: '97.144.99.155',
    },
    {
        id: 4,
        first_name: 'Elvyn',
        last_name: 'Moyles',
        email: 'emoyles3@icq.com',
        gender: 'Male',
        ip_address: '27.30.209.111',
    },
    {
        id: 5,
        first_name: 'Jessee',
        last_name: 'Gasgarth',
        email: 'jgasgarth4@joomla.org',
        gender: 'Male',
        ip_address: '52.166.218.43',
    },
    {
        id: 6,
        first_name: 'Casper',
        last_name: 'Goodright',
        email: 'cgoodright5@home.pl',
        gender: 'Male',
        ip_address: '254.207.182.241',
    },
    {
        id: 7,
        first_name: 'Jasen',
        last_name: 'Sukbhans',
        email: 'jsukbhans6@bloglovin.com',
        gender: 'Male',
        ip_address: '87.73.27.115',
    },
    {
        id: 8,
        first_name: 'Rockey',
        last_name: 'Levis',
        email: 'rlevis7@cafepress.com',
        gender: 'Male',
        ip_address: '31.114.170.80',
    },
    {
        id: 9,
        first_name: 'Maisie',
        last_name: 'Malinson',
        email: 'mmalinson8@opensource.org',
        gender: 'Female',
        ip_address: '142.35.249.210',
    },
    {
        id: 10,
        first_name: 'Dannie',
        last_name: 'Dyte',
        email: 'ddyte9@dell.com',
        gender: 'Female',
        ip_address: '83.141.70.54',
    },
];
