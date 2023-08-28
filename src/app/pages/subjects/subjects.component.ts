import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  constructor(private router: Router) {}

ngOnInit(): void {
  localStorage.removeItem('theme-select')
}

  goToTheme(page: string) {
    this.router.navigateByUrl(page);
  }
}
