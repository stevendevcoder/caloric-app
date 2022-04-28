import {AiFillHome} from 'react-icons/ai';
import {IoSettingsOutline, IoSearch, IoPieChartOutline} from 'react-icons/io5'; 
import React from 'react';
import { DASHBOARD, DASHBOARD_CHARTS, DASHBOARD_SEARCH, DASHBOARD_SETTINGS } from './route.constants';
export const sidebarData = [
	{
		icon: <AiFillHome/>, 
		name: 'Home', 
		route: DASHBOARD
	},
	{
		icon: <IoSearch/>, 
		name: 'Buscar', 
		route: DASHBOARD_SEARCH
	},{
		icon: <IoPieChartOutline/>, 
		name: 'Graficos', 
		route: DASHBOARD_CHARTS
	},
	{
		icon: <IoSettingsOutline/>, 
		name: 'Configuración', 
		route: DASHBOARD_SETTINGS
	}
];