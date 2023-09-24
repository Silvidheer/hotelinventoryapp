import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService]
})
export class EmployeeComponent{

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  empName: string = 'John';

  constructor(@Self() private roomService: RoomsService){}

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

}
