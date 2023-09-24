import { AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
  
})
export class RoomsComponent implements OnInit, DoCheck,  AfterViewChecked, OnDestroy{

  hotelName = 'Hilton Hotel';  

  numberofRooms = 10;

  hideRooms = true;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  title = 'Room List';

  roomList : RoomList[] = [];

  stream = new Observable<string>(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    //observer.error();
  });

  priceFilter = new FormControl(0);

  roomsCount$ = this.roomsService.getRooms$.pipe(
    map((rooms) => this.roomList.length)
  )

  @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(@SkipSelf() private roomsService: RoomsService,
      private configService: ConfigService){}

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  ngAfterViewChecked(): void {
   // throw new Error('Method not implemented.');
  }
  
  totalBytes = 0;

  subscription!: Subscription;

  error$ = new Subject<string>;

  getError$ = this.error$.asObservable();

  rooms$ = this.roomsService.getRooms$.pipe(
    // catchError((err) => {
    //   console.log(err);
    //   this.error$.next(err.messsage);
    //   return of([]);
    // })
  );

  // ngAfterViewInit(): void {
  //   this.headerComponent.title = "Rooms View";

  //   this.headerChildrenComponent.last.title = "Last Title";
  // }

  ngDoCheck(): void {
    console.log('on changes is called');
  }
  
  ngOnInit(): void {

    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type){
        case HttpEventType.Sent: {
          console.log('Request has been made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes+= event.loaded
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }
      }
    })

    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log('error'),
    });
    this.roomList = this.roomsService.getRooms();
    this.stream.subscribe((data) => console.log(data));
    this.stream.subscribe((data) => console.log(data));
    this.subscription = this.roomsService.getRooms$.subscribe(rooms => {
      this.roomList =  rooms;
    });
  }

  toggle(){
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  // editRoom(){

  // }
  
  selectRoom(room: RoomList){
    this.selectedRoom = room;
  }

  addRoom(){
    const room: RoomList = {
      roomNumber: '4',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free  Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1518791-8f162',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 2.4
    };

    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
