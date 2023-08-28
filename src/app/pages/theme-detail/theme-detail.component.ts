import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collapse, Ripple, initTE } from 'tw-elements';

@Component({
  selector: 'app-theme-detail',
  templateUrl: './theme-detail.component.html',
  styleUrls: ['./theme-detail.component.scss'],
})
export class ThemeDetailComponent implements OnInit {
  @Input() buildPage: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.buildPage);

    localStorage.removeItem('topic');

    initTE({ Collapse, Ripple });
  }

  goToTheme(topic: string) {
    this.router.navigateByUrl('theme-detail');
    localStorage.setItem('topic', topic);
  }
}
