import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {

  id!: number;

  id$ = this.router.paramMap.pipe(map((params) => params.get('roomid')));

  constructor(private router: ActivatedRoute){

  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
   // this.id = this.router.snapshot.params['roomid'];
   // this.router.params.subscribe((params) => {this.id = params['roomid']});
  }

}
