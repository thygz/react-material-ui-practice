import './App.css';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { MuiResponsiveness } from './components/MuiResponsiveness';
// import { MuiMasonry } from './components/MuiMasonry';
// import { MuiTimeline } from './components/MuiTimeline';
// import { MuiTabs } from './components/MuiTabs';
// import { MuiPicker } from './components/MuiPicker';
// import { LocalizationProvider } from '@mui/lab';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import { MuiLoadingButton } from './components/MuiLoadingButton';
// import { MuiSkeleton } from './components/MuiSkeleton';
// import { MuiProgress } from './components/MuiProgress';
// import { MuiDialog } from './components/MuiDialog';
// import { MuiSnackbar } from './components/MuiSnackbar';
// import { MuiAlert } from './components/MuiAlert';
// import { MuiTable } from './components/MuiTable';
// import { MuiTooltip } from './components/MuiTooltip';
// import { MuiChip } from './components/MuiChip';
// import { MuiList } from './components/MuiList';
// import { MuiBadge } from './components/MuiBadge';
// import { MuiAvatar } from './components/MuiAvatar';
// import { MuiBottomNavigation } from './components/MuiBottomNavigation';
// import { MuiSpeedDial } from './components/MuiSpeedDial';
// import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
// import { MuiDrawer } from './components/MuiDrawer';
// import { MuiLink } from './components/MuiLink';
// import { MuiNavbar } from './components/MuiNavbar';
// import { MuiImageList } from './components/MuiImageList';
// import { MuiAccordion } from './components/MuiAccordion';
// import { MuiCard } from './components/MuiCard';
// import { MuiLayout } from './components/MuiLayout';
// import { MuiAutocomplete } from './components/MuiAutocomplete';
// import { MuiRating } from './components/MuiRating';
// import { MuiSwitch } from './components/MuiSwitch';
// import { MuiCheckbox } from './components/MuiCheckbox';
// import { MuiRadioButton } from './components/MuiRadioButton';
// import { MuiSelect } from './components/MuiSelect';
// import { MuiButton } from './components/MuiButton';
// import { MuiTextField } from './components/MuiTextField';
// import { MuiTypography } from './components/MuiTypography';

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        secondary: {
            main: colors.orange[500],
        },
        neutral: {
            main: colors.grey[500],
            darker: colors.grey[700],
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div className="App">
                    {/* <MuiTypography /> */}
                    {/* <MuiButton /> */}
                    {/* <MuiTextField /> */}
                    {/* <MuiSelect /> */}
                    {/* <MuiRadioButton /> */}
                    {/* <MuiCheckbox /> */}
                    {/* <MuiSwitch /> */}
                    {/* <MuiRating /> */}
                    {/* <MuiAutocomplete /> */}
                    {/* <MuiLayout /> */}
                    {/* <MuiCard /> */}
                    {/* <MuiAccordion /> */}
                    {/* <MuiImageList /> */}
                    {/* <MuiNavbar /> */}
                    {/* <MuiBreadcrumbs /> */}
                    {/* <MuiDrawer /> */}
                    {/* <MuiLink /> */}
                    {/* <MuiSpeedDial /> */}
                    {/* <MuiBottomNavigation /> */}
                    {/* <MuiAvatar /> */}
                    {/* <MuiBadge /> */}
                    {/* <MuiList /> */}
                    {/* <MuiChip /> */}
                    {/* <MuiTooltip /> */}
                    {/* <MuiTable /> */}
                    {/* <MuiAlert /> */}
                    {/* <MuiSnackbar /> */}
                    {/* <MuiDialog /> */}
                    {/* <MuiProgress /> */}
                    {/* <MuiSkeleton /> */}
                    {/* <MuiLoadingButton /> */}
                    {/* <MuiPicker /> */}
                    {/* <MuiTabs /> */}
                    {/* <MuiTimeline /> */}
                    {/* <MuiMasonry /> */}
                    <MuiResponsiveness />
                </div>
            </LocalizationProvider>
        </ThemeProvider>
    );
}

export default App;
