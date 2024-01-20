import { SetStateAction } from 'react'
import ComponentWorkerNavbar from '../components/ComponentWorkerNavbar'
import { Account, Trade } from '../types/typeIndex'
import PageWorkerDashboard from './subPages/PageWorkerDashboard'

const PageDashboard = ({ fullUserInfo, setFullUserInfo, allTrades }: { fullUserInfo: Account, setFullUserInfo: React.Dispatch<SetStateAction<Account | undefined>>, allTrades: Trade[] }) => {
    console.log(fullUserInfo);

    if (fullUserInfo.account_role_id === 1004) {
        return (
            <ComponentWorkerNavbar setFullUserInfo={setFullUserInfo}>
                <PageWorkerDashboard fullUserInfo={fullUserInfo} allTrades={allTrades} />
            </ComponentWorkerNavbar>
        )
    } else {
        //  To be done for managers nav
        return (
            <></>
        )
    }

}

export default PageDashboard