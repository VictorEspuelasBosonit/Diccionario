import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InglesComponent } from './ingles/ingles.component';
import { EspanolComponent } from './espanol/espanol.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { ContentComponent } from './content/content.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEspanolComponent } from './add-espanol/add-espanol.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ContentenglishComponent } from './contentenglish/contentenglish.component';
import { AddInglesComponent } from './add-ingles/add-ingles.component';
import { InglesViewComponent } from './ingles-view/ingles-view.component';
import { EspanolViewComponent } from './espanol-view/espanol-view.component';


@NgModule({
  declarations: [
    AppComponent,
    InglesComponent,
    EspanolComponent,
    HomeComponent,
    ContentComponent,
    AddEspanolComponent,
    ContentenglishComponent,
    AddInglesComponent,
    InglesViewComponent,
    EspanolViewComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule, 
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
