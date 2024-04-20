import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'sentai-sidebar',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './sidebar.ng.html',
  styleUrl: './sidebar.scss'
})
export class SidebarComponent {

}
