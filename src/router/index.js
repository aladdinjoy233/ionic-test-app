import { createRouter, createWebHistory } from '@ionic/vue-router';
import PatientsPage from '../pages/PatientsPage.vue';

const routes = [
	{
		path: '/',
		redirect: '/patients'
	},
	{
		path: '/patients',
		component: PatientsPage
	},
	{
		path: '/patients/:id',
		component: () => import('../pages/PatientsDetailsPage.vue')
	},
	{
		path: '/patients/add',
		component: () => import('../pages/AddPatientPage.vue')
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router
