import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ApplynowComponent } from './applynow/applynow.component';
import{FormsModule} from '@angular/forms';
import { ProcessComponent } from './process/process.component';
import { ViewapplyComponent } from './viewapply/viewapply.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ApplynowComponent,
    ProcessComponent,
    ViewapplyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
