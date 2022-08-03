import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { closeModal } from '../../redux/slices/errorModalSlice';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function WarningModal() {
    const [open, setOpen] = React.useState(false);
    const unexceptedError = useAppSelector(state => state.errorModalReducer);
    const dispatch = useAppDispatch();
    const handleClose = () => { (dispatch(closeModal(false))) };

    React.useEffect(() => {
        setOpen(unexceptedError.showModal);
    }, [unexceptedError.showModal]);

    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <b> Unexcepted Error</b>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {unexceptedError.message}
                    </Typography>
                    <Button onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </div>
    );
}