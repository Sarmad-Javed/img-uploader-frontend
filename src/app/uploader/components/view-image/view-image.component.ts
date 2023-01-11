import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { ImageDetails } from '../../model/imageDetails';
import { UploaderService } from '../../services/uplaoder.service';
@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.scss']
})
export class ViewImageComponent {
  id:any;
  imgDetails?:ImageDetails;
  constructor(private route:ActivatedRoute,private uploaderService:UploaderService){
    this.id=this.route.snapshot.paramMap.get("id");
    this.getImgById(this.id)
  }
  getImgById(id:any){
    this.uploaderService.getById(id).pipe(first()).subscribe(data => this.imgDetails = data)
  }
}
