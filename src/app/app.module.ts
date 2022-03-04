import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IgxIconModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxListModule, IgxInputGroupModule, IgxSelectModule, IgxGridModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { MyInfoComponent } from './my-info/my-info.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyInfoComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxListModule,
    FormsModule,
    IgxInputGroupModule,
    IgxSelectModule,
    IgxGridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
