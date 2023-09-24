import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges{
  
  @Input() rooms: RoomList[] = [];

  @Input() title = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() price = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }


}
