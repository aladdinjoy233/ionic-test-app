<template>
	<ion-item :router-link="`/patients/${patient.id}`">
		<ion-thumbnail slot="start">
			<ion-img :src="patient.avatar || '/empty-user.jpg'"></ion-img>
		</ion-thumbnail>

		<ion-label>
			{{ patient.nombre }} {{ patient.apellidos }}
		</ion-label>
	</ion-item>
</template>

<script>
import {
	IonItem,
	IonImg,
	IonThumbnail,
	IonLabel
} from '@ionic/vue'

export default {
	props: ['patient'],
	components: {
		IonItem,
		IonImg,
		IonThumbnail,
		IonLabel
	},
}
</script>