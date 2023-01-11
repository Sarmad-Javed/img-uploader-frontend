import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ImageUploaderComponent } from './pages/image-uploader/image-uploader.component';
import { MatTableModule } from '@angular/material/table';
import { AddImageComponent } from './components/add-image/add-image.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { ViewImageComponent } from './components/view-image/view-image.component';
const routes: Routes = [
    {
        path: '',
        component: ImageUploaderComponent,
    },
    {
        path: 'img/:id',
        component: ViewImageComponent,
    }
];
@NgModule({
    declarations: [
        ListComponent,
        ImageUploaderComponent,
        AddImageComponent,
        ViewImageComponent,
       
    ],
    imports: [ CommonModule,MatTableModule, MatDialogModule, MatButtonModule,MatIconModule,MatInputModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UpladerModule { }
