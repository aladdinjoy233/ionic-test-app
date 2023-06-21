<template>

	<base-layout :page-title="loadedPatient ? loadedPatient.nombre : 'Loading...'" page-default-back-link="/patients">
		<h2 v-if="!loadedPatient">Could not find a memory for the given id.</h2>
		<patient-overview
			v-else
			:title="loadedPatient.nombre"
			:image="loadedPatient.avatar"
			:description="loadedPatient.dni">
		</patient-overview>
	</base-layout>

</template>

<script>
import PatientOverview from '../components/patients/PatientOverview.vue'

export default {
	components: {
		PatientOverview
	},

	data() {
		return {
			patientId: this.$route.params.id
		}
	},

	computed: {
		loadedPatient() {
			return this.$store.getters.patient(this.patientId)
		}
	},

	watch: {
		$route(currentRoute) {
			this.patientId = currentRoute.params.id
		}
	}
}
</script>