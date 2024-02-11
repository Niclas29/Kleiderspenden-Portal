import { Routes } from '@angular/router';
import { SpendenComponent } from './spenden/spenden.component';
import { HomeComponent } from './home/home.component';
import { GeschaeftsstellenComponent } from './geschaeftsstellen/geschaeftsstellen.component';

const routeConfig : Routes = [
    {path : 'spenden', component : SpendenComponent, title : 'Spenden' },
    {path : 'home' , component : HomeComponent, title : 'Home Page'},
    {path : '' , component : HomeComponent, title : 'Home Page'},
    {path : 'geschaeftsstellen', component : GeschaeftsstellenComponent, title: 'Geschäftsstellen'}
];

export default routeConfig;
