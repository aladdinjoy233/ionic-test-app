<template>

	<base-layout :page-title="patient ? patient.nombre : 'Loading...'" page-default-back-link="/patients">
		<h2 v-if="!patient">Could not find a memory for the given id.</h2>
		<patient-overview
			v-else
			:title="patient.nombre"
			:image="patient.avatar || '/empty-user.jpg'"
			:description="patient.dni">
		</patient-overview>
	</base-layout>

</template>

<script>
import PatientOverview from '../components/patients/PatientOverview.vue'
import { usePatientsStore } from "../stores/patientsStore"
import axios from 'axios'

const paciente_default = {
	id: null,
	nombre: '',
	apellidos: '',
	avatar: '',
	dni: null
}

export default {
	components: {
		PatientOverview
	},

	data() {
		return {
			patient: JSON.parse(JSON.stringify(paciente_default)),
			patientId: this.$route.params.id
		}
	},

	methods: {
		obtenerDatos() {
			const fetchUrl = `${this.$baseUrl}get_paciente/${this.patientId}`

			axios.get(fetchUrl)
				.then(res => {
					this.patient = res.data.datos
				})
				.catch(err => console.log(err))
		}
	},

	computed: {
	},

	// watch: {
	// 	$route(currentRoute) {
	// 		this.patientId = currentRoute.params.id
	// 	}
	// },

	mounted() {
		this.obtenerDatos()
	},
}
</script>