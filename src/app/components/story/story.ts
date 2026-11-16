import { Component, Input } from '@angular/core';
import { Stories } from '../../models/stories';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-story',
  styleUrl: './story.css',
  templateUrl: './story.html',
})
export class Story {
  @Input() story!: Stories;
}
