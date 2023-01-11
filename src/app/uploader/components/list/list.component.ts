import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ImageDetails } from '../../model/imageDetails';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() imgsList:ImageDetails[] = [];

}
