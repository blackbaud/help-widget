import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sky-help',
  template: require('./sky-help.component.html'),
  styles: [require('./sky-help.component.scss')]
})
export class SkyHelpComponent implements OnInit {
  public isOpen: boolean = false;
  ngOnInit(): void {}
  toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }
}
