import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CrudModule } from './crud/crud.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ResumebuilderModule } from './modules/resumebuilder/resumebuilder.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule, 
    CrudModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxMaskModule,
    ResumebuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
