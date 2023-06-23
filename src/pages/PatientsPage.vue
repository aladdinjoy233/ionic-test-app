<template>

	<base-layout page-title="All patients">
		<template v-slot:actions-end>
			<ion-button router-link="/patients/add">
				<ion-icon slot="icon-only" :icon="add"></ion-icon>
			</ion-button>
		</template>
		<patients-list :patients="patients"></patients-list>
	</base-layout>
		
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue"
import { add } from "ionicons/icons"
import PatientsList from "../components/patients/PatientsList.vue"
import axios from 'axios'

export default {
	components: {
		IonButton,
		IonIcon,
		PatientsList,
	},

	data() {
		return {
			patients: []
		}	
	},

	methods: {
		obtenerDatos() {
			const fetchUrl = `${this.$baseUrl}get_pacientes`

			axios.get(fetchUrl)
				.then(res => {
					this.patients = res.data.datos
				})
				.catch(err => console.log(err))
		}
	},

	computed: {
	},

	setup() {
		return { add }
	},

	mounted() {
		this.obtenerDatos()
	}
}
</script>