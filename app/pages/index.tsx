import { Suspense } from "react"
import { Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { useQuery } from "blitz"
import getItems from "app/recipes/queries/getItems"

import logout from "app/auth/mutations/logout"
import { DenizenRecipe, IndexedDenizenScript } from "app/recipes/types"

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

interface RecipeProps {
	recipe: DenizenRecipe
	items: IndexedDenizenScript[]
}

const Recipe = (props: RecipeProps) => {
	const inputs = Array.isArray(props.recipe.input) ? props.recipe.input : [props.recipe.input]
	const findRecipe = (id: string) => props.items.find((r) => r.id === id)
	return (
		<div className="w-1/4 p-4">
			{/* <div className="text-xl">{(props.recipe.recipe_id || '').replaceAll('_', ' ')}</div> */}
			{/* <div className="text-xl">{(props.recipe.recipe_id || '')}</div> */}
			<div className="flex bg-gray-400">
				<div className="flex flex-wrap w-1/4">
					{inputs.map((input, id) => (
						<div className="w-1/3 p-2" key={id}>
							{input}
						</div>
					))}
				</div>
			</div>
			<div>
				{/* {props.recipe.output['display name']} */}
				{/* {props.recipe.output.lore} */}
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
					<div className="p-4 bg-gray-400 m-4" key={item.id}>
						{item.id} -
						{item.recipes.map((recipe, id) => (
							<Recipe items={items} recipe={recipe} key={id} />
						))}
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
				<div className="buttons" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
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
