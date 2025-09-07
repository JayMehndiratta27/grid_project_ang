import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonGrid } from '../common-grid/common-grid';

interface Player {
  name: string;
}

@Component({
  selector: 'app-player-info',
  imports: [RouterModule, CommonGrid],
  standalone: true,
  templateUrl: './player-info.html',
  styleUrls: ['./player-info.css']
})
export class PlayerInfo {
  
  private router = inject(Router);

  constructor() { }
  
  array: any[] = [
    {
      Name: "Jay Mehndiratta",
      Email: "mehndirattajay747@gmail.com",
      Image: "assets/images/player-avatar.jpg"
    },
    {
      Name: "Sanskar",
      Email: "sankar124@gmail.com",
      Image: "assets/images/player-avatar.jpg"
    },
    {
      Name: "Pranav",
      Email: "prnav11@gmail.com",
      Image: "assets/images/player-avatar.jpg"
    },
    { 
      Name: "Devyani",
      Email: "devyani@gmail.com",
      Image: "assets/images/player-avatar.jpg"
    },
    { 
      Name: "Himanshu",
      Email: "hiamsss@gmail.com",
      Image: "assets/images/player-avatar.jpg"
    },
    {
      Name: "Stephen",
      Email: "stephen@gmail.com",
      Image: "assets/images/player-avatar.jpg"
    },
    {
      Name: "James",
      Email: "james@gmail.com",
      Image: "assets/images/player-avatar.jpg"
    },
    {
      Name: "Jordan",
      Email: "jordan23@gmail.com",
      Image: "assets/images/player-avatar.jpg"
    },
    ];
  
  columns = [
    { name: 'Image', header: 'Photo' },
    { name: 'Name', header: 'Name' },
    { name: 'Email', header: 'Email' }
  ];

  getImageSource(row: any): string {
    return row.Image || "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjMDA3YmZmIi8+CjxjaXJjbGUgY3g9IjMwIiBjeT0iMjAiIHI9IjgiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjE1IiB5PSIzNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K";
  }
  
}


