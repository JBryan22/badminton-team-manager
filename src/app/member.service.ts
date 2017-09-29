import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = this.database.list('data/members');
  }

  getMembers() {
    return this.members;
  }

  getMemberById(memberId: string) {
    return this.database.object('data/members/' + memberId);
  }

  addMembers(newMember) {
    this.members.push(newMember);
  }

  updateMember(localUpdatedMember) {
    let memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({name: localUpdatedMember.name,
                                  age: localUpdatedMember.age,
                                  skillLevel: localUpdatedMember.skillLevel,
                                  about: localUpdatedMember.about,
                                  teamId: localUpdatedMember.teamId});
  }

  deleteMember(localMemberToDelete) {
    let memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }
}
