import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamMemberDetailsComponent } from './team-member-details/team-member-details.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  {
    path: '',
    component: TeamListComponent
  },
  {
    path: 'team/:id',
    component: TeamDetailsComponent
  },
  {
    path: 'team-member/:id',
    component: TeamMemberDetailsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
