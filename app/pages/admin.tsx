import { Suspense, useEffect, useState } from 'react'
import { BlitzPage, useMutation } from 'blitz'
import Layout from 'app/core/layouts/Layout'
import { useQuery } from 'blitz'
import { Set } from 'immutable'
import initializeBasicAuth from 'nextjs-basic-auth'

import ItemCraftingRecipeCard from 'app/recipes/components/ItemCraftingRecipeCard'
import ItemCategories from 'app/recipes/components/ItemCategories'
import ItemCategoriesMenu from 'app/recipes/components/ItemCategoriesMenu'
import { Alert, Button } from '@mantine/core'

import getItemWithSettings from 'app/recipes/queries/getItemWithSettings'
import setItemConfigMutation from 'app/recipes/mutations/setItemSettings'

export async function getServerSideProps(ctx) {
	const { req, res } = ctx
	const basicAuthCheck = initializeBasicAuth({
		users: [
			{ user: process.env.AUTH_USER || '', password: process.env.AUTH_PASS || '' }
		]
	})
	await basicAuthCheck(req, res)

	return {
		props: {}
	}
}

const RecipeList = () => {
	const [items] = useQuery(getItemWithSettings, null)
	const [setItemConfig, { status, error }] = useMutation(setItemConfigMutation)
	const [view, setView] = useState<'all' | 'hidden' | 'visible'>('all')
	const [hiddenItems, setHiddenItems] = useState(Set(items.filter(i => i.hidden).map(i => i.id)))
	const [filteredItems, setFilteredItems] = useState(items)
	useEffect(() => {
		setFilteredItems(items.filter(item => ({
			all: true,
			hidden: hiddenItems.has(item.id),
			visible: !hiddenItems.has(item.id),
		})[view]))
	}, [items, hiddenItems, view])
	return (
		<div>
			<div className="p-4">
				<p className="mr-2">Ansichten</p>
				<Button onClick={() => setView('hidden')} className="mr-2" variant={view == 'hidden' ? 'filled' : 'outline'}>{hiddenItems.size} Versteckte{hiddenItems.size == 1 && 's'} Rezept{hiddenItems.size != 1 && 'e'}</Button>
				<Button onClick={() => setView('visible')} className="mr-2" variant={view == 'visible' ? 'filled' : 'outline'}>{items.length - hiddenItems.size} Öffentliche{items.length - hiddenItems.size == 1 && 's'} Rezept{items.length - hiddenItems.size != 1 && 'e'}</Button>
				<Button onClick={() => setView('all')} className="mr-2" variant={view == 'all' ? 'filled' : 'outline'}>{items.length} Rezept{items.length != 1 && 'e'} Gesamt</Button>
			</div>
			<div className="p-4">
				{status == 'success' && <Alert color="green" title="Alles gut!">
					Items wurden erfolgreich gespeichert
				</Alert>}
				{status == 'loading' && <Alert color="yellow">
					Änderungen werden gespeichert
				</Alert>}
				{status == 'error' && <Alert color="red">
					Fehler: {error}
				</Alert>}
				<Button className="mt-2" color="green" loading={status == 'loading'} onClick={() => setItemConfig({ hiddenItems: hiddenItems.toArray() })}>Änderungen Speichern</Button>
			</div>
			<ItemCategoriesMenu items={filteredItems} />
			<ItemCategories
				items={filteredItems}
				itemCard={({ item, items: filteredItems }) =>
					<ItemCraftingRecipeCard
						key={item.id}
						onClick={e => setHiddenItems(hiddenItems.has(item.id) ? hiddenItems.delete(item.id) : hiddenItems.add(item.id))}
						item={item}
						items={filteredItems}
						className="cursor-pointer"
					>
						<div className={`p-4 ${hiddenItems.has(item.id) ? 'text-white/90 bg-red-600' : 'text-black/70 bg-green-400'}`}>
							Rezept {hiddenItems.has(item.id) ? 'versteckt' : 'öffentlich'}
						</div>
					</ItemCraftingRecipeCard>
				}
			/>
		</div>
	)
}

const AdminPage: BlitzPage = () => {
	return (
		<Suspense fallback="Loading...">
			<RecipeList />
		</Suspense>
	)
}

AdminPage.suppressFirstRenderFlicker = true
AdminPage.getLayout = (page) => <Layout>{page}</Layout>

export default AdminPage
