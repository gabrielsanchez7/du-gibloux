import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/HomeComponent';
import { LoaderComponent } from './components/LoaderComponent';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'loading', component: LoaderComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);