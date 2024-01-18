import { SetStateAction } from 'react'
import ComponentNavbar from '../components/ComponentNavbar'
import { Account } from '../types/typeIndex'
import { Box } from '@chakra-ui/react'

const PageDashboard = ({ fullUserInfo, setFullUserInfo }: { fullUserInfo: Account, setFullUserInfo: React.Dispatch<SetStateAction<Account | undefined>> }) => {
    return (
        <ComponentNavbar fullUserInfo={fullUserInfo} setFullUserInfo={setFullUserInfo} >
            <Box textTransform="capitalize">Welcome {fullUserInfo.account_name}</Box>
        </ComponentNavbar>
    )
}

export default PageDashboard