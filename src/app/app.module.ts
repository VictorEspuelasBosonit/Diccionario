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
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { ContentenglishComponent } from './contentenglish/contentenglish.component';
import { AddInglesComponent } from './add-ingles/add-ingles.component';
import { InglesViewComponent } from './ingles-view/ingles-view.component';
import { LoginComponent } from './login/login.component';
import { HttpErrorInterceptorService } from './services/httperror-interceptor.service';
import { EspanolViewComponent } from './espanol-view/espanol-view.component';
import { AddEspanolComponent } from './add-espanol/add-espanol.component';
import { ContentComponent } from './content/content.component';



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
    LoginComponent,

    
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
