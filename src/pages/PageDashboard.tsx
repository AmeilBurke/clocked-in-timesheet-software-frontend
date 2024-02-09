import { SetStateAction } from 'react'
import { Account, Trade, Establishment, Role } from '../types/typeIndex'
import PageWorkerDashboard from './subPages/PageWorkerDashboard'
import ComponentNavbar from '../components/ComponentNavbar'

const PageDashboard = ({ fullUserInfo, setFullUserInfo, allTrades, allEstablishments, allRoles }: { fullUserInfo: Account, setFullUserInfo: React.Dispatch<SetStateAction<Account | undefined>>, allTrades: Trade[], allEstablishments: Establishment[], allRoles: Role[] }) => {

    if (fullUserInfo.account_role_id === 1004) {
        return (
            <ComponentNavbar setFullUserInfo={setFullUserInfo} fullUserInfo={fullUserInfo} allTrades={allTrades} allRoles={allRoles}>
                <PageWorkerDashboard fullUserInfo={fullUserInfo} allTrades={allTrades} allEstablishments={allEstablishments} />
            </ComponentNavbar>
        )
    } else {
        return (
            <></>
        )
    }

}

export default PageDashboard