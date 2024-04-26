import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../features/auth/authSlice"
// import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isManager = false
    let isAdmin = false
    let status = "Employee"

    if (token) {

        // const decoded = jwtDecode(token)

        const decoded = JSON.parse(atob(token.split('.')[1]));

        // console.log(decoded)

        const { username, roles } = decoded.UserInfo

        // console.log(username, roles)

        isManager = roles.includes('Manager')
        // console.log(isManager)
        isAdmin = roles.includes('Admin')

        if (isManager) status = "Manager"
        if (isAdmin) status = "Admin"

        return { username, roles, status, isManager, isAdmin }
    }

    return { username: '', roles: [], isManager, isAdmin, status }
}
export default useAuth