import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { LocalStorageToken } from './localstorage.token';
import { ConfigService } from './services/config.service';
import { InitService } from './init.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline temlate!</h1>
  // <p>Angular is awesome</p>`,
  styleUrls: ['./app.component.scss']
  //styles: [`h1 {color:red}`]
})
export class AppComponent implements OnInit{
  

  title = 'hotelinventoryapp';

  role = 'Admin';

  @ViewChild('name', { static: true } )name!: ElementRef;
  
  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   console.log(event);
    // });

    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log('Navigation Started');
    });

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      console.log('Navigation Completed');
    });
    this.name.nativeElement.innerText = "Hilton Hotel";
    this.localStorage.setItem('name', 'Hilton Hotel');
  }

  constructor(@Inject(LocalStorageToken) private localStorage: any,
  private initService: InitService,
  private configService: ConfigService,
  private router: Router){}
  
  
}
