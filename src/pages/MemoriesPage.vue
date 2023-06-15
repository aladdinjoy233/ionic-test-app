<template>

	<base-layout page-title="All memories">

		<ion-list>
			<ion-item router-link="/memories/1">A trip into the mountains</ion-item>
			<ion-item>Surfing the sea</ion-item>
			<ion-item>Yummy food</ion-item>
		</ion-list>

	</base-layout>
		
</template>

<script>
import {
	IonList,
	IonItem
} from '@ionic/vue'

export default {
	components: {
		IonList,
		IonItem
	},

	data() {
		return {
			memories: [
				{
					id: 'm1',
					image: '',
					title: 'A trip into the mountains',
					description: 'Peaking the mountains'
				},
				{
					id: 'm2',
					image: '',
					title: 'Surfing the sea',
					description: 'Surfs ups'
				},
				{
					id: 'm3',
					image: '',
					title: 'Yummy food',
					description: 'Food was good'
				}
			]
		}
	}
}
</script>