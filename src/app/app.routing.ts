import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamMemberDetailsComponent } from './team-member-details/team-member-details.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { AddTeamMemberComponent } from './add-team-member/add-team-member.component';


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
    path: 'add-team',
    component: AddTeamComponent
  },
  {
    path: 'add-team-member',
    component: AddTeamMemberComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
