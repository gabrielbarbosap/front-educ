import { Component, OnInit } from '@angular/core';
import { AllServicesService } from '../../request.service';
import { Collapse, Ripple, initTE } from 'tw-elements';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-interactive',
  templateUrl: './chat-interactive.component.html',
  styleUrls: ['./chat-interactive.component.scss'],
})
export class ChatInteractiveComponent implements OnInit {
  text = '';
  loading = false;
  chat = new FormControl('', Validators.required);

  mensagem = window.speechSynthesis.cancel();

  constructor(private service: AllServicesService) {}
  ngOnInit(): void {
    initTE({ Ripple, Collapse });
  }

  resposta() {
    this.text = '';
    this.loading = true;
    const body = {
      prompt: this.chat.value,
    };

    this.service.chat(body).subscribe((res) => {
      this.chat.setValue('');
      this.loading = false;
      console.log(res);
      this.text = res.text;
    });
  }
}
