import { Component } from '@angular/core';
import { CepServiceService } from './services/cep-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cepAngular';
  constructor(private cepService: CepServiceService) {}
  consultaCep(valor: any, form: any) {
    return this.cepService
      .buscar(valor)
      .subscribe((dados) => this.populaForm(dados, form));
  }

  populaForm(dados: any, form: any) {
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf,
    });
  }
}
