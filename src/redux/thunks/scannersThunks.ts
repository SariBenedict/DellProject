import axios from 'axios'
import { getAllScannersFromserver} from '../../api/getAllScanners'
import { resiveScanners } from '../slices/scannersSlice'
import { AppDispatch } from '../store'

export const getAllScanners = () => {
    return async (dispatch: AppDispatch) => {
        
        try {
            const scanners = (await getAllScannersFromserver()).data
            dispatch(resiveScanners(scanners))
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);

            } else {
                console.log('unexpected error: ', error);

            }
        }

    }
    
}