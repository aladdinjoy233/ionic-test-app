<template>
	<base-layout page-title="Add a patient" page-default-back-link="/patients">
		<create-patients-form @save-memory="saveMemory"></create-patients-form>
	</base-layout>
</template>

<script>
import CreatePatientsForm from '../components/patients/CreatePatientsForm.vue';

export default {
	components: { CreatePatientsForm },

	methods: {
		saveMemory(memoryData) {
			this.$store.dispatch('addMemory', memoryData)
			this.$router.replace('/memories')
		}
	},
}
</script>