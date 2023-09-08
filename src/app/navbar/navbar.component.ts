import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  
  hamburger:boolean = false
  windowWidth: number = window.innerWidth;

 
  ngOnInit(): void {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
    this.closeMenu(); // Close the menu on resize (if open)
  }

  toggleMenu() {
    this.hamburger = !this.hamburger;
  }
  closeMenu() {
    this.hamburger = false;
  }
}
