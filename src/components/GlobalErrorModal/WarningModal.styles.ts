import { makeStyles } from '@mui/styles'
const useStyles = makeStyles({
    Box: {

        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        p: 4,
        borderRadius:10

    },
});
export default useStyles;