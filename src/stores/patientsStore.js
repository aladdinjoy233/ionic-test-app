import { defineStore } from "pinia"

export const usePatientsStore = defineStore('patients', {

	state: () => ({
		patients: [],
	}),

	actions: {
		fetchPatients() {
			const baseURL = 'http://127.0.0.1/gestioo_core_medicina/debug_externo/get_pacientes'

			fetch(baseURL, { method: 'GET' })
				.then(res => res.json())
				.then(data => {
					this.patients = data.datos
				})
				.catch(err => {
					console.log(err)
				})
		},
	}
})