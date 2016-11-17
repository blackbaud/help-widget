import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sky-help',
  template: require('./sky-help.component.html'),
  styleUrls: ['./sky-help.component.scss']
})
export class SkyHelpComponent implements OnInit {
  public isOpen: boolean = false;
  ngOnInit(): void {}
  toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }
}
