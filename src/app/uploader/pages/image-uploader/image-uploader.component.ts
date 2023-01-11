import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs';
import { AddImageComponent } from '../../components/add-image/add-image.component';
import { UploaderService } from '../../services/uplaoder.service';
@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent {
  dialogRef: any;
  imgsList: any;
  constructor(public dialog: MatDialog, private uploadeService: UploaderService) {
    this.getImgs();
  }
  openDialogue() {
    this.dialogRef = this.dialog.open(AddImageComponent, {
      height: '385px',
      width: '400px',
    });
    this.onClose();
  }
  onClose() {
    this.dialogRef
      .afterClosed()
      .pipe(first())
      .subscribe((result: any) => {
        this.uploadeService.save(result.data).pipe((first())).subscribe((data) => {
          this.getImgs();
        })
      })
  }

  getImgs() {
    this.uploadeService.getAll().pipe((first())).subscribe((data) => {
      this.imgsList = data
    })
  }
}
