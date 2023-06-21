import { defineStore } from "pinia"

export const usePatientsStore = defineStore('patients', {

	state: () => ({
		patients: []
	}),

	actions: {}
})