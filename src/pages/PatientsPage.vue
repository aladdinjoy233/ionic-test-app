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
import { usePatientsStore } from "../stores/patientsStore"

const store = usePatientsStore()

export default {
	components: {
		IonButton,
		IonIcon,
		PatientsList,
	},

	data() {
		return {
			add // IonIcons
		}	
	},

	computed: {
		patients() {
			return this.$store.getters.patients
		}
	},
	mounted() {
		this.$store.dispatch('fetchPatients')
	}
}
</script>