import { NavLink, Outlet } from 'react-router'
import Header from '../Header/Header'

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>

		// <NavLink to=''></NavLink>
		// <NavLink></NavLink>
	)

}

export default Layout