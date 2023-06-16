import { createStore } from 'vuex'

const store = createStore({
	state() {
		return {
			memories: [
				{
					id: 'm1',
					image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1920px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
					title: 'A trip into the mountains',
					description: 'Peaking the mountains'
				},
				{
					id: 'm2',
					image: 'https://hips.hearstapps.com/hmg-prod/images/ocean-quotes-index-1624414741.jpg',
					title: 'Surfing the sea',
					description: 'Surfs ups'
				},
				{
					id: 'm3',
					image: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
					title: 'Yummy food',
					description: 'Food was good'
				}
			]
		}
	},

	mutations: {
		addMemory(state, memoryData) {
			const newMemory = {
				id: new Date().toISOString(),
				...memoryData
			}

			state.memories.unshift(newMemory)
		}
	},

	actions: {
		addMemory(context, memoryData) {
			context.commit('addMemory', memoryData)
		}
	},

	getters: {
		memories: (state) => state.memories,

		memory(state) {
			return (memoryId) => state.memories.find(memory => memory.id === memoryId)
		}
	}
})

export default store