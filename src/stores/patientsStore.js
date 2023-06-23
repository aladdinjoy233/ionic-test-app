import { defineStore } from "pinia"

export const usePatientsStore = defineStore('patients', {

	state: () => ({
		patients: [],

		baseUrl: 'http://127.0.0.1/gestioo_core_medicina/debug_externo/'
	}),

	actions: {
		fetchPatients() {
			const baseURL = `${this.baseUrl}get_pacientes`

			fetch(baseURL, { method: 'GET' })
				.then(res => res.json())
				.then(data => {
					this.patients = data.datos
				})
				.catch(err => console.log(err))
		},
	},

	getters: {
		getPatient(state) {
			return (patientId) =>  state.patients.find(patient => patient.id == patientId)
		}
	}
})