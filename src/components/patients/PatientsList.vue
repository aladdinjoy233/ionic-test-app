<template>
	<ion-list>
		<patients-list-item v-for="patient in patients" :key="patient.id" :patient="patient"></patients-list-item>
	</ion-list>
</template>

<script>
import { IonList } from '@ionic/vue'
import PatientsListItem from './PatientsListItem.vue';

export default {
	props: ['patients'],	
	components: {
		IonList,
		PatientsListItem
	},
}
</script>