import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { MemberService } from '../member.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Member } from '../member.model';
import { Team } from '../team.model';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css'],
  providers: [MemberService, TeamService]
})
export class TeamDetailsComponent implements OnInit {
  members: Member[] = [];
  selectedTeamId: string;
  selectedTeam: Team;


  constructor(
    private route:ActivatedRoute,
    private location: Location,
    private router: Router,
    private teamService: TeamService,
    private memberService: MemberService
  ) { }

  ngOnInit() {
    //get Team ID
        console.log("got here");
    this.route.params.forEach((urlParameters) => {
      this.selectedTeamId = urlParameters['id'];
    });
    //get Team
    this.teamService.getTeamById(this.selectedTeamId).subscribe(dataLastEmittedFromObserver => {
      this.selectedTeam = new Team(dataLastEmittedFromObserver.name,
                                  dataLastEmittedFromObserver.about)
    });
    //get Team Members
    this.memberService.getMembers().subscribe(dataLastEmittedFromObserver => {
      for(let i = 0; i < dataLastEmittedFromObserver.length; i++) {
        this.members.push(new Member(
          dataLastEmittedFromObserver[i].name,
          dataLastEmittedFromObserver[i].age,
          dataLastEmittedFromObserver[i].skillLevel,
          dataLastEmittedFromObserver[i].about,
          dataLastEmittedFromObserver[i].teamId
        ));
      }
    });
    console.log(this.members);
  }

}
