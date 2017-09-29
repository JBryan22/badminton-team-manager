import { Injectable } from '@angular/core';
import { Team } from './team.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TeamService {
  teams: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.teams = this.database.list('data/teams');
  }

  getTeams() {
    return this.teams;
  }

  addTeam(newTeam: Team) {
    this.teams.push(newTeam);
  }

  getTeamById(teamId: string) {
    return this.database.object('data/teams/' + teamId);
  }

  updateTeam(localUpdatedTeam) {
    let teamEntryInFirebase = this.getTeamById(localUpdatedTeam.$key);
    teamEntryInFirebase.update({name: localUpdatedTeam.name,
                                about: localUpdatedTeam.about});
  }

  deleteTeam(localTeamToDelete) {
    let teamEntryInFirebase = this.getTeamById(localTeamToDelete.$key);
    teamEntryInFirebase.remove();
  }

}
