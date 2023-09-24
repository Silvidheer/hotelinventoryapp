import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent {


  successMessage = '';

  room: RoomList = {
    roomNumber: '',
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private roomsService: RoomsService) { }

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  AddRoom(roomsForm: NgForm) {
    this.roomsService
    .addRoom(this.room)
    .subscribe((data) => {
      this.successMessage = 'Room Added Successfully';
    });
    roomsForm.reset({
      roomNumber: '',
      roomType: '',
      amenities: '',
      checkinTime: new Date(),
      checkoutTime: new Date(),
      photos: '',
      price: 0,
      rating: 0,
    });
  }
}
