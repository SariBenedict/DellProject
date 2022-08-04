import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { closeModal } from '../../redux/slices/errorModalSlice';
import useStyles from './WarningModal.styles';

export default function WarningModal() {
    const [isOpen, setIsOpen] = React.useState(false);
    const unexceptedError = useAppSelector(state => state.errorModalReducer);
    const dispatch = useAppDispatch();
    const handleClose = () => { (dispatch(closeModal())) };
    const classes = useStyles();
    React.useEffect(() => {
        setIsOpen(unexceptedError.showModal);
    }, [unexceptedError.showModal]);

    return (
        <div>
            <Modal
                open={isOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.box}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <b> Unexcepted Error</b>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {unexceptedError.message}
                    </Typography>
                    <Button color='error' onClick={handleClose}><b>Close</b></Button>
                </Box>
            </Modal>
        </div>
    );
}