import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  isShown:boolean = false;
  title = 'Dashboard';
  activeTab = '';
  list = ['country', 'regions'];
  info: string = [
    "This is demo covid dashboard.",
    "Show all data from covid19api and covid19india"
  ].join('\n');


  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.activeTab = this.router.url.split('/main/')[1];

    this.router.events.subscribe((event: any) => {
      this.activeTab = event.url
        ? (event.url.split('/main/')[1]).split(';')[0]
        : this.activeTab
    });
  }

  redirect(name) {
    this.isShown = !this.isShown;
    this.router.navigateByUrl(`/main/${name}`);
  } 

  checkUrl(data) {
    return !!(this.router.url === `main/${data}`);
  }
}
