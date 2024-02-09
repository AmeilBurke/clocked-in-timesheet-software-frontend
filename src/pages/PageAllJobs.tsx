import React, { SetStateAction } from 'react'
import { Account, Trade, Establishment, Role } from '../types/typeIndex'

const PageAllJobs = ({ fullUserInfo, setFullUserInfo, allTrades, allEstablishments, allRoles }: { fullUserInfo: Account, setFullUserInfo: React.Dispatch<SetStateAction<Account | undefined>>, allTrades: Trade[], allEstablishments: Establishment[], allRoles: Role[] }) => {
  return (
    <div>PageAllJobs</div>
  )
}

export default PageAllJobs