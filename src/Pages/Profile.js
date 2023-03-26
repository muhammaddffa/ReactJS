import React from "react"
import { useNavigate } from "react-router-dom"

const Profile = () => {

    const navigate = useNavigate()
    
    return (
        <div>
            <h3>CEK HALAMAN PROFILE</h3>
            <button onClick={() => navigate(-1)}>
                Balik Halaman HOME
            </button>
        </div>
    )
}

export default Profile