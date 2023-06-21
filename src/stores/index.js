import { createStore } from 'vuex'

const store = createStore({
	state() {
		return {
			patients: []
		}
	},

	mutations: {
		addMemory(state, memoryData) {
			const newMemory = {
				id: new Date().toISOString(),
				...memoryData
			}

			state.patients.unshift(newMemory)
		},

		setPatients(state, patientData) {
			state.patients = patientData
		}
	},

	actions: {
		addMemory(context, memoryData) {
			context.commit('addMemory', memoryData)
		},

		fetchPatients({ commit }) {
			const baseURL = 'http://127.0.0.1/gestioo_core_medicina/debug_externo/get_pacientes'

			fetch(baseURL, { method: 'GET' })
				.then(res => res.json())
				.then(data => {
					commit('setPatients', data.datos)
				})
				.catch(err => {
					console.log(err)
				})
		},
	},

	getters: {
		patients: (state) => state.patients,

		patient(state) {
			return (patientId) => {
				const patient = state.patients.find((p) => p.id === patientId)
				console.log(patient)
				return patient
			}
		}
	}
})

export default store