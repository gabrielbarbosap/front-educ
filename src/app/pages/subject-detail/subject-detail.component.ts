import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, initTE } from 'tw-elements';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.scss'],
})
export class SubjectDetailComponent implements OnInit {
  subject = new FormControl('');
  theme = new FormControl('');

  configPage: any;
  themeSelect = localStorage.getItem('theme-select');

  constructor(private router: Router) {}

  ngOnInit(): void {
    initTE({ Select });

    if(this.themeSelect) {
      this.configPage = JSON.parse(this.themeSelect)
    }
  }

  goToTheme() {
    this.configPage = {
      theme: this.theme.value,
      subject: this.subject.value,
    };
    localStorage.setItem('theme-select', JSON.stringify(this.configPage));
    console.log(this.configPage);
  }
}
