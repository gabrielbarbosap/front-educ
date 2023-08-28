import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, initTE } from 'tw-elements';
import { FormControl } from '@angular/forms';
import { AllServicesService } from 'src/app/request.service';
@Component({
  selector: 'app-ludic-selects',
  templateUrl: './ludic-selects.component.html',
  styleUrls: ['./ludic-selects.component.scss'],
})
export class LudicSelectsComponent implements OnInit {
  subject = new FormControl('');
  history = '';
  view = true;
  constructor(private service: AllServicesService) {}

  ngOnInit(): void {
    initTE({ Select });
  }

  goToHistory() {
    this.view = false
    this.service.getLudico().subscribe((res) => {
      this.history = res.text;
      this.view = true;
    });
  }
}
