import { Component, signal } from '@angular/core';
import { PlayerInfo } from './components/player-info/player-info';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayerInfo],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('grid_project');
}
