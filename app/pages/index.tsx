import { Suspense } from 'react'
import { Link, BlitzPage, useMutation, Routes } from 'blitz'
import Layout from 'app/core/layouts/Layout'
import { useCurrentUser } from 'app/core/hooks/useCurrentUser'
import { useQuery, Image } from 'blitz'
import getItems from 'app/recipes/queries/getItems'

import logout from 'app/auth/mutations/logout'
import { DenizenRecipe, IndexedDenizenScript } from 'app/recipes/types'
import { Tooltip } from '@mantine/core'
import { useHash } from '@mantine/hooks'

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
	['0', '#000000'],
	['1', '#0000AA'],
	['2', '#00AA00'],
	['3', '#00AAAA'],
	['4', '#AA0000'],
	['5', '#AA00AA'],
	['6', '#FFAA00'],
	['7', '#AAAAAA'],
	['8', '#555555'],
	['9', '#5555FF'],
	['a', '#55FF55'],
	['b', '#55FFFF'],
	['c', '#FF5555'],
	['d', '#FF55FF'],
	['e', '#FFFF55'],
	['f', '#FFFFFF'],
])

const renderMinecraftStringToHtml = (name: string) => name
	.replaceAll('<yellow>', '<&e>')
	.replaceAll('<dark_gray>', '<&8>')
	.replaceAll('<dark_red>', '<&4>')
	.replaceAll('&lb', '[')
	.replaceAll('&rb', ']')
	.replaceAll(/\n/g, '<br />')
	.split(/<&/)
	.map(element => translateColor(element.substring(0, 1), element.slice(2)))
	.join('')

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
	const name = renderMinecraftStringToHtml(typeof item['display name'] == 'string' ? item['display name'] :  '')
	const lore = (typeof item.lore == 'string' ? item.lore.split('\n') : item.lore || []).map(renderMinecraftStringToHtml).join('<br />')
	return (
		<Tooltip
			withArrow
			arrowSize={3}
			position="bottom"
			placement="start"
			label={
				<>
					{hideText && <span className="ml-2" dangerouslySetInnerHTML={{ __html: name }} />}
					<div dangerouslySetInnerHTML={{ __html: lore }} />
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
				{hideText || <span className="ml-2" dangerouslySetInnerHTML={{ __html: name }} />}
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
		<div>
			{/* <div className="text-xl">{(props.recipe.recipe_id || '').replaceAll('_', ' ')}</div> */}
			{/* <div className="text-xl">{(props.recipe.recipe_id || '')}</div> */}
			<div className="flex bg-gray-400 justify-start">
				<div className="flex flex-wrap">
					{inputs.map((input, id) => (
						<a href={`#${findItem(input)?.id}`} className="w-1/3 p-2" key={id}>
							{findItem(input) && <ItemDisplay hideText item={findItem(input)} />}
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

interface ItemCardProps {
	items: IndexedDenizenScript[]
	item: IndexedDenizenScript
}

const ItemCard = ({ item, items }: ItemCardProps) => {
	const [hash] = useHash()
	return (
		<div className="p-4 w-1/4" id={item.id}>
			{item.id}
			<div className={`${hash.replace('#', '') == item.id ? 'bg-blue-400' : 'bg-gray-300'} p-4 rounded`}>
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
}

const RecipeList = () => {
	const [items] = useQuery(getItems, null)
	const itemCategories = [...new Set(items.map(item => item.id.split('_')[0] || 'uncategorized'))]
	const itemsWithCategories = items.map(item => ({
		...item,
		category: item.id.split('_')[0] || 'uncategorized',
	}))
	return (
		<div>
			<div className="flex m-4">
				{itemCategories.map(itemCategory => (
					<a className="mr-2 px-2 py-1 rounded hover:bg-blue-600" key={itemCategory} href={`#${itemCategory}`}>
						{itemCategory}
					</a>
				))}
			</div>
			{itemCategories.map(itemCategory => (
				<div key={itemCategory} id={itemCategory}>
					<h2 className="text-xl m-4">{itemCategory} - {itemsWithCategories.filter(item => item.category == itemCategory).length} Rezepte </h2>
					<div className="flex flex-wrap">
						{itemsWithCategories.filter(item => item.category == itemCategory).sort((a,b) => a.id.localeCompare(b.id)).map((item) => <ItemCard key={item.id} item={item} items={items} />)}
					</div>
				</div>
			))}
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
