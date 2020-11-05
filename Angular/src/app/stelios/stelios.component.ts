import { Component } from '@angular/core';

import { steliosservice } from './stelios.service';

@Component({
  selector: 'app-stelios',
  templateUrl: './stelios.component.html',
  styleUrls: ['./stelios.component.css']
})

export class SteliosComponent {

  constructor(service: steliosservice) { 
    
  }

  ngOnInit(): void {
  }

}
