import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers: [TeamService]
})
export class TeamListComponent implements OnInit {
  teams: FirebaseListObservable<any[]>;

  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit() {
    this.teams = this.teamService.getTeams();
  }

  goToTeamDetails(clickedTeam) {
    this.router.navigate(['team', clickedTeam.$key])
  }
}
