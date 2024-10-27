import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CanvasComponent } from './components/canvas/canvas.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent,SidebarComponent,CanvasComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-app';
}
