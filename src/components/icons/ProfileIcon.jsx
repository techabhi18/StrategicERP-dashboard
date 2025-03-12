import React from 'react'

const ProfileIcon = ({ color = '#183EC2' }) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.00006 3.25926C7.95837 3.25926 7.11392 4.12566 7.11392 5.19443C7.11392 6.2632 7.95837 7.1296 9.00006 7.1296C10.0417 7.1296 10.8862 6.2632 10.8862 5.19443C10.8862 4.12566 10.0417 3.25926 9.00006 3.25926ZM5.39924 5.19443C5.39924 3.15406 7.01137 1.5 9.00006 1.5C10.9887 1.5 12.6009 3.15406 12.6009 5.19443C12.6009 7.23481 10.9887 8.88886 9.00006 8.88886C7.01137 8.88886 5.39924 7.23481 5.39924 5.19443ZM9.00001 10.1204C6.12277 10.1204 3.70687 12.1394 3.02165 14.8709C2.9688 15.0816 3.0139 15.3055 3.14382 15.4774C3.27373 15.6494 3.47385 15.75 3.68588 15.75H14.3142C14.5262 15.75 14.7264 15.6494 14.8563 15.4774C14.9862 15.3055 15.0312 15.0816 14.9784 14.8709C14.2932 12.1394 11.8773 10.1204 9.00001 10.1204Z" fill={color} />
        </svg>
    )
}

export default ProfileIcon
