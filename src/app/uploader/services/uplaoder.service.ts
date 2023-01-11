import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { environment } from 'src/environments/enviornment';
import { ImageDetails } from '../../uploader/model/imageDetails';

@Injectable({
  providedIn: 'root',
})
export class UploaderService {
  private UplaoderServiceUrl: string;
  constructor(private http: HttpClient) {
    this.UplaoderServiceUrl = environment.imageServiceUrl;
  }
  save(imgData: ImageDetails): Observable<any> {

    const data = new FormData();
    data.append('imageName', imgData.imageName);
    data.append('imageUrl', imgData.imageUrl);
    data.append('imageType', imgData.ImageType);
    data.append('file', imgData.file);

    return this.http
      .post(this.UplaoderServiceUrl, data)
      .pipe(map((data: any) => data as ImageDetails));
  }

    //returns all images
    getAll(): Observable<ImageDetails[]> {
  
      return this.http
        .get(this.UplaoderServiceUrl)
        .pipe(map((data: any) => data as ImageDetails[]));
    }

    getById(id:any): Observable<ImageDetails> {
  
      return this.http
        .get(`${this.UplaoderServiceUrl}/id?id=${id}`)
        .pipe(map((data: any) => data as ImageDetails));
    }

}
