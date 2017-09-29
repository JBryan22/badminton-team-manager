import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { MemberService } from '../member.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Member } from '../member.model';
import { Team } from '../team.model';

@Component({
  selector: 'app-team-member-details',
  templateUrl: './team-member-details.component.html',
  styleUrls: ['./team-member-details.component.css'],
  providers: [MemberService]
})
export class TeamMemberDetailsComponent implements OnInit {
  selectedMember: FirebaseObjectObservable<any>;
  selectedMemberId: string;
  editable: boolean = false;

  constructor(private route: ActivatedRoute, private memberService: MemberService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.selectedMemberId = urlParameters['id'];
    });
    this.memberService.getMemberById(this.selectedMemberId).subscribe(dataLastEmittedFromObserver => {
      this.selectedMember = dataLastEmittedFromObserver;
    });
    // this.memberService.getMemberById(this.selectedMemberId).subscribe(dataLastEmittedFromObserver => {
    //   this.selectedMember = new Member(
    //     dataLastEmittedFromObserver.name,
    //     dataLastEmittedFromObserver.age,
    //     dataLastEmittedFromObserver.skillLevel,
    //     dataLastEmittedFromObserver.about,
    //     dataLastEmittedFromObserver.teamId
    //   )
    // })
  }

  editMember() {
    this.editable = true;
  }

  cancelEdit() {
    this.editable = false;
  }

  finishEdit(selectedMember) {
    this.memberService.updateMember(selectedMember);
    this.editable = false;
  }

}
