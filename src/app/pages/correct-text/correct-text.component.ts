import { Component, OnInit } from '@angular/core';
import { AllServicesService } from '../../request.service';
import { Collapse, Ripple, initTE } from 'tw-elements';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-correct-text',
  templateUrl: './correct-text.component.html',
  styleUrls: ['./correct-text.component.scss'],
})
export class CorrectTextComponent {
  text = '';
  loading = false;
  textControl = new FormControl('', Validators.required);

  mensagem = window.speechSynthesis.cancel();

  constructor(private service: AllServicesService) {}
  ngOnInit(): void {
    initTE({ Ripple, Collapse });
  }

  resposta() {
    this.text = ''
    this.loading = true;
    const body = {
      prompt: this.textControl.value,
    };

    this.service.corretorRedacao(body).subscribe((res) => {
      this.loading = false;
      this.text = res.text;
    });
  }
}
