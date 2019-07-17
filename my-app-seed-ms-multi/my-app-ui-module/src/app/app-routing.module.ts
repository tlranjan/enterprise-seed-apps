import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { CoreComponent } from './core/core.component';
import { FirstComponent } from './core/first/first.component';

const routes: Routes = [
	{ path: '', redirectTo: 'core/home', pathMatch: 'full' },
	{
		path: 'core',
		component: CoreComponent,
		children: [
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: 'home', component: HomeComponent },
			{ path: 'first', component: FirstComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }
