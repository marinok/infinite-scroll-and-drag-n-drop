import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  userList: Array<Object> = [];
  userList2: Array<Object> = [];

  constructor () {}

  ngOnInit () {
    this.userList = [
      { name: 'Tammie Daluz'},
      { name: 'Suzy Hayworth'},
      { name: 'Shaunna Hippert'},
      { name: 'Moises Signor'},
      { name: 'Tamela Faucette'},
      { name: 'Tiffany Lisi'},
      { name: 'Jamie Vanbrunt'},
      { name: 'Elena Hammon'},
      { name: 'Corie Sullens'},
      { name: 'Shawnda Wing'},
      { name: 'Alberta Naples'},
      { name: 'Devorah Lowrie'},
      { name: 'Jenna Heilmann'},
      { name: 'Robby Daigre'},
      { name: 'Lavona Gallagher'},
      { name: 'Melodi Brummer'},
      { name: 'Paula Headley'},
      { name: 'Beckie Hohler'},
      { name: 'Twanna Porto'},
      { name: 'Kiley Leinen'},
      { name: 'Rutha Currie'},
      { name: 'Kathleen Mumford'},
      { name: 'Georgeann Spector'},
      { name: 'Marlo Huck'},
      { name: 'Tyson Digirolamo'},
      { name: 'Lily Goldsborough'},
      { name: 'Raisa Marbury'},
      { name: 'Osvaldo Lautenschlage'},
      { name: 'Florencia Ruggieri'},
      { name: 'Young Marsh'},
      { name: 'Charlott Olivier'},
      { name: 'Jayna Buttram'},
      { name: 'Katelynn Mona'},
      { name: 'Kera Whitener'},
      { name: 'Paulette Pinard'},
      { name: 'Katia Medellin'},
      { name: 'Darron Duane'}
    ];
    this.userList2 = [
      { name: 'Tammie Daluz'},
      { name: 'Suzy Hayworth'},
      { name: 'Shaunna Hippert'},
      { name: 'Moises Signor'},
      { name: 'Tamela Faucette'},
      { name: 'Tiffany Lisi'},
      { name: 'Jamie Vanbrunt'},
      { name: 'Elena Hammon'},
      { name: 'Corie Sullens'},
      { name: 'Shawnda Wing'},
      { name: 'Alberta Naples'},
      { name: 'Devorah Lowrie'},
      { name: 'Jenna Heilmann'},
      { name: 'Robby Daigre'},
      { name: 'Lavona Gallagher'},
      { name: 'Melodi Brummer'},
      { name: 'Paula Headley'},
      { name: 'Beckie Hohler'},
      { name: 'Twanna Porto'},
      { name: 'Kiley Leinen'},
      { name: 'Rutha Currie'},
      { name: 'Kathleen Mumford'},
      { name: 'Georgeann Spector'},
      { name: 'Marlo Huck'},
      { name: 'Tyson Digirolamo'},
      { name: 'Lily Goldsborough'},
      { name: 'Raisa Marbury'},
      { name: 'Osvaldo Lautenschlage'},
      { name: 'Florencia Ruggieri'},
      { name: 'Young Marsh'},
      { name: 'Charlott Olivier'},
      { name: 'Jayna Buttram'},
      { name: 'Katelynn Mona'},
      { name: 'Kera Whitener'},
      { name: 'Paulette Pinard'},
      { name: 'Katia Medellin'},
      { name: 'Darron Duane'}
    ];
  }
  
  
  dropDropList(event: CdkDragDrop<object[]>):void {
    moveItemInArray(this.userList2, event.previousIndex, event.currentIndex);
    event.item.data.previousIndex = event.previousIndex;
  }

  

}
