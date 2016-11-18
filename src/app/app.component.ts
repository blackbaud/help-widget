import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'sky-app',
  template: require('./app.component.html')
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title) { }

  public ngOnInit(): void {
    this.setTitle('My App');
  }

  public setTitle(title: string): void {
    this.titleService.setTitle(title);
  }
}
