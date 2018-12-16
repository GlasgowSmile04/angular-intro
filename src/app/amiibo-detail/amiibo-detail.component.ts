import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AmiiboInterface } from '../interfaces/amiibo-interface';
import { AmiiboService } from '../services/amiibo.service';


@Component({
  selector: 'app-amiibo-detail',
  templateUrl: './amiibo-detail.component.html',
  styleUrls: ['./amiibo-detail.component.css']
})
export class AmiiboDetailComponent implements OnInit {

  amiibo: AmiiboInterface;

  constructor(private amiiboService: AmiiboService, private route: ActivatedRoute) { }

  getAmiiboTail() {
    this.route.params.subscribe(params => {
      this.getAmiibo(params.id);
    });
  }

  getAmiibo(id: string) {
    this.amiiboService.getAmiibo(id).subscribe(amiibo => {this.amiibo = amiibo.amiibo[0]; });
  }

  ngOnInit() {
    this.getAmiiboTail();
  }

}
