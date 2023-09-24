import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_service_config } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';


@Injectable({
  providedIn: 'root'
})

export class RoomsService {

  roomList: RoomList[] = [
    {
      roomNumber: '1',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free  Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1518791-8f162',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5
    },
    {
      roomNumber: '2',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free  Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://images.unsplash.com/photo-1518791-8f162',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 5.6
    },
    {
      roomNumber: '3',
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free  Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos: 'https://images.unsplash.com/photo-1518791-8f162',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 3.45654
    }
  ];

  headers = new HttpHeaders({ 'token': '12255453366sgsgsghj'});
    
  getRooms$ = this.http.get<RoomList[]>('/api/rooms', {
    headers: this.headers,
  }).pipe(
    shareReplay(1)
  );

  constructor(@Inject(APP_service_config) private config: AppConfig, private http: HttpClient) { 
    console.log('Room Service Initialized....');
    console.log(this.config.apiEndpoint);
  }

  getRooms() {
    return this.roomList;
    //return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList){
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList){
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  getPhotos(){
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
        reportProgress: true,
    });
    return this.http.request(request);
  }
}
