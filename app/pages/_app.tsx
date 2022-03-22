import 'app/core/styles/index.css'
import {
	AppProps,
	ErrorBoundary,
	AuthenticationError,
	AuthorizationError,
	ErrorFallbackProps,
	useQueryErrorResetBoundary,
	Head,
} from 'blitz'
import { MantineProvider, MantineThemeOverride } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import LoginForm from 'app/auth/components/LoginForm'
import favicon from 'public/favicon.png'
import Layout from 'app/core/layouts/Layout'
import Error from 'app/core/components/Error'
import { useLocalStorageValue } from '@mantine/hooks'

const theme: MantineThemeOverride = {
	primaryColor: 'indigo',
	fontSizes: {
		xl: 40,
	},
}

export default function App({ Component, pageProps }: AppProps) {
	const [colorScheme, setColorScheme] = useLocalStorageValue({
		key: 'colorScheme',
		defaultValue: 'light' as 'light' | 'dark',
	})
	const getLayout = Component.getLayout || ((page) => page)
	return (
		<>
			<Head>
				<title>Athalon Rezepte</title>
				<link rel="icon" href={favicon.src} />
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<MantineProvider theme={{ ...theme, colorScheme }} withGlobalStyles>
				<NotificationsProvider>
					<ErrorBoundary
						FallbackComponent={RootErrorFallback}
						onReset={useQueryErrorResetBoundary().reset}
					>
						{getLayout(<Component {...pageProps} />)}
					</ErrorBoundary>
				</NotificationsProvider>
			</MantineProvider>
		</>
	)
}

function RootErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
	const [colorScheme, setColorScheme] = useLocalStorageValue({
		key: 'colorScheme',
		defaultValue: 'light' as 'light' | 'dark',
	})
	if (error instanceof AuthenticationError) {
		return (
			<Layout>
				Kein Zugang bitte einloggen!
				<LoginForm onSuccess={resetErrorBoundary} />
			</Layout>
		)
	} else if (error instanceof AuthorizationError) {
		return (
			<Layout>
				<Error
					statusCode={error.statusCode}
					title="Sorry, you are not authorized to access this!!! muh"
				/>
			</Layout>
		)
	} else {
		return (
			<Layout>
				<Error statusCode={error.statusCode || 400} title={error.message || error.name} />
			</Layout>
		)
	}
}
