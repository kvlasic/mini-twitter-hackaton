import React from 'react'
import { useParams} from "react-router-dom"

export const User = ({users}) => {
    const {userID} = useParams()
    
    const singleUser = users && users.find((u) => u.username === userID)

    return (
        <div>
            <p>User {singleUser.username}</p>
        </div>
    )
}
