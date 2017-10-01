import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers: [TeamService, AngularFireAuth]
})
export class TeamListComponent implements OnInit {
  teams: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: Router, private teamService: TeamService) {
    this.user = this.afAuth.authState;
  }

  ngOnInit() {
    this.teams = this.teamService.getTeams();
  }

  goToTeamDetails(clickedTeam) {
    this.router.navigate(['team', clickedTeam.$key])
  }
}
