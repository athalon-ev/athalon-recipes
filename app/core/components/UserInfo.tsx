import logout from 'app/auth/mutations/logout'
import { Link, Routes, useMutation } from 'blitz'
import { useCurrentUser } from '../hooks/useCurrentUser'

const UserInfo = () => {
	const currentUser = useCurrentUser()
	const [logoutMutation] = useMutation(logout)

	if (currentUser) {
		return (
			<div className="flex">
				<button
					onClick={async () => {
						await logoutMutation()
					}}
				>
					Logout
				</button>
				<div>
					User id: <code>{currentUser.id}</code>
					User role: <code>{currentUser.role}</code>
				</div>
			</div>
		)
	} else {
		return (
			<>
				<Link href={Routes.SignupPage()}>
					<a className="button small">
						<strong>Sign Up</strong>
					</a>
				</Link>
				<Link href={Routes.LoginPage()}>
					<a className="button small">
						<strong>Login</strong>
					</a>
				</Link>
			</>
		)
	}
}
export default UserInfo
