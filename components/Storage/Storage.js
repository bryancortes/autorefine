import React from 'react'
import UserInfo from './UserInfo'
import StorageInfo from './StorageInfo'
import StorageDetailList from './StorageDetailList'
import { useSession } from 'next-auth/react'

function Storage() {
    const {data:session}=useSession();
  return session&&(
    <div>
        <UserInfo/>
        <StorageInfo/>
        <StorageDetailList/>
    </div>
  )
}

export default Storage