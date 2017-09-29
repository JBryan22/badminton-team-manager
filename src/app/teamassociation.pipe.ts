import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'teamAssociation',
  pure: false
})
export class TeamAssociationPipe implements PipeTransform {

  transform(input: Member[], selectedTeamId) {
    let output: Member[] = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i].teamId == selectedTeamId) {
        output.push(input[i])
      }
    }
    return output;
  }

}
