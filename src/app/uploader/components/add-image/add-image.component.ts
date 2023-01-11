import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageDetails } from '../../model/imageDetails';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent {
  imgDetails?:ImageDetails;
  constructor(public dialogRef: MatDialogRef<AddImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  onChooseFile(event:any){

    if (event.type === 'change') {
      const file: File = event.target.files[0];
      this.imgDetails = {
    
        imageUrl:'file.name',
        imageName:file.name,
        ImageType:file.type,
        file:file,
      }
    }
  }
  onSaveImage(){
    if(this.imgDetails?.imageName){
      this.dialogRef.close({data:this.imgDetails, type:'save'})
    }else{
      console.log('Please select an image!');
    }
    
  }
}
