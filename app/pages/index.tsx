import { Suspense } from 'react'
import { Link, BlitzPage, useMutation, Routes } from 'blitz'
import Layout from 'app/core/layouts/Layout'
import { useCurrentUser } from 'app/core/hooks/useCurrentUser'
import { useQuery, Image } from 'blitz'
import getItems from 'app/recipes/queries/getItems'

import logout from 'app/auth/mutations/logout'
import { DenizenRecipe, IndexedDenizenScript } from 'app/recipes/types'
import { Tooltip } from '@mantine/core'

const UserInfo = () => {
	const currentUser = useCurrentUser()
	const [logoutMutation] = useMutation(logout)

	if (currentUser) {
		return (
			<>
				<button
					className="button small"
					onClick={async () => {
						await logoutMutation()
					}}
				>
					Logout
				</button>
				<div>
					User id: <code>{currentUser.id}</code>
					<br />
					User role: <code>{currentUser.role}</code>
				</div>
			</>
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

const colorCodeMap = new Map([
	['0', 'Black'],
	['1', 'Blue'],
	['2', 'Green'],
	['3', 'DarkCyan'],
	['4', 'Red'],
	['5', 'Purple'],
	['6', 'Gold'],
	['7', 'DarkGray'],
	['8', 'Gray'],
	['9', 'LightBlue'],
	['a', 'LightGreen'],
	['b', 'Cyan'],
	['c', 'Salmon'],
	['d', 'Magenta'],
	['e', 'Yellow'],
	['f', 'White'],
])
const translateColor = (colorCode, string) => `
    <span style="color:${translateColorCode(colorCode)}">
            ${string.replace(/ /g, '&nbsp;')}
    </span>
`
const translateColorCode = (colorCode) => colorCodeMap.get(colorCode) || 'White'
interface ItemDisplayProps {
	item: IndexedDenizenScript | undefined
	hideText?: boolean
}

const ItemDisplay = ({ item, hideText }: ItemDisplayProps) => {
	if (!item) return <></>
	return (
		<Tooltip
			withArrow
			arrowSize={3}
			position="bottom"
			placement="start"
			label={
				<>
					{hideText && <span className="ml-2">{item['display name']}</span>}
					<pre dangerouslySetInnerHTML={{ __html: item.lore }} />
				</>
			}
		>
			<div className="rounded-md border-2 border-purple-800 bg-gray-900 p-2 text-white">
				<Image
					src={item.filepath}
					alt={item['display name']}
					width={16}
					height={16}
					layout="fixed"
				/>
				{hideText || <span className="ml-2">{item['display name']}</span>}
			</div>
		</Tooltip>
	)
}

interface RecipeProps {
	recipe: DenizenRecipe
	items: IndexedDenizenScript[]
}

const Recipe = (props: RecipeProps) => {
	const inputs = Array.isArray(props.recipe.input) ? props.recipe.input : [props.recipe.input]
	const findItem = (itemId: string) => props.items.find((item) => item.id === itemId)
	return (
		<div className="p-4">
			{/* <div className="text-xl">{(props.recipe.recipe_id || '').replaceAll('_', ' ')}</div> */}
			{/* <div className="text-xl">{(props.recipe.recipe_id || '')}</div> */}
			<div className="flex bg-gray-400 justify-start">
				<div className="flex flex-wrap">
					{inputs.map((input, id) => (
						<div className="w-1/3 p-2" key={id}>
							{findItem(input) && <ItemDisplay hideText item={findItem(input)} />}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

const RecipeList = () => {
	const [items] = useQuery(getItems, null)

	return (
		<div className="flex flex-wrap">
			{items.map((item) => {
				return (
					<div className="p-4 w-1/4" key={item.id}>
						<div className="bg-gray-300 p-4 rounded">
							<ItemDisplay item={item} />
							{item.recipes.map((recipe, id) => (
								<div key={id}>
									Rezept {id + 1}:{recipe.type}
									<Recipe items={items} recipe={recipe} />
								</div>
							))}
						</div>
					</div>
				)
			})}
		</div>
	)
}

const Home: BlitzPage = () => {
	return (
		<div className="container">
			<main>
				<div className="buttons" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
					<Suspense fallback="Loading...">
						<RecipeList />
					</Suspense>
				</div>
			</main>
		</div>
	)
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
