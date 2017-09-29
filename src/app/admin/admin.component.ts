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

  constructor(private memberService: MemberService, private teamService: TeamService) { }

  ngOnInit() {

  }

  submitMemberForm(name: string, age: number, skillLevel: string, about: string, teamId:string) {
    let newMember: Member = new Member(name, age, skillLevel, about, teamId);
    this.memberService.addMember(newMember);
  }

  submitTeamForm(name: string, about: string) {
    console.log(name);
    console.log(about);
    let newTeam: Team = new Team(name, about);
    this.teamService.addTeam(newTeam);
  }

}
