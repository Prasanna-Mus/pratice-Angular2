import { Component } from '@angular/core';
import { Rooms } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'] 
})
export class RoomsComponent {
 hotelName='Hilton Hotel';
  numberofRooms=10;
  hideRooms = false;
 
  rooms : Rooms = {
    totalRooms :20,
    availablRooms:10,
    bookedRooms:5
  }

toggle(){
  this.hideRooms=!this.hideRooms;
}
}
