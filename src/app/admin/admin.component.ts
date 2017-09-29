import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Team } from '../team.model';
import { MemberService } from '../member.service';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService, TeamService]
})
export class AdminComponent implements OnInit {
  teams;

  constructor(private memberService: MemberService, private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeams().subscribe(dataLastEmittedFromObserver => {
      this.teams = dataLastEmittedFromObserver;
    })
  }

  submitMemberForm(name: string, age: number, skillLevel: string, about: string, teamId:string) {
    let newMember: Member = new Member(name, age, skillLevel, about, teamId);
    this.memberService.addMember(newMember);
  }

  submitTeamForm(name: string, about: string) {
    let newTeam: Team = new Team(name, about);
    this.teamService.addTeam(newTeam);
  }

  updateTeam(team) {
    this.teamService.updateTeam(team);
  }

  deleteTeam(selectedTeam) {
    if (confirm("Are you sure you want to remove this team? This will delete all players on this team.")) {
      this.teamService.deleteTeam(selectedTeam);
    }
  }

}
