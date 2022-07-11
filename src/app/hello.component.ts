import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>{{name}}</h1>`,
  styles: [`h1 { font-size: 3em; margin-bottom: 1rem; text-align:center }`],
})
export class HelloComponent {
  @Input() name: string;
}
