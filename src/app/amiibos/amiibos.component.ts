import { Component, OnInit } from '@angular/core';

import { AmiiboService } from '../services/amiibo.service';
import { AmiiboInterface } from '../interfaces/amiibo-interface';
import { PaginationService } from '../services/pagination.service';

@Component({
  selector: 'app-amiibos',
  templateUrl: './amiibos.component.html',
  styleUrls: ['./amiibos.component.css']
})
export class AmiibosComponent implements OnInit {

  amiibos: AmiiboInterface[];
  paginator: any = {};
  searchText: string;
  pagedItems: AmiiboInterface[] = [];

  constructor( private amiibo: AmiiboService, private paginationService: PaginationService ) { }

  getAmiibos() {
    return this.amiibo.getAmiibos().subscribe((res => {
      console.log(res);
      this.amiibos = res.amiibo;
      this.setPage(1);
    }));
  }

  setPage(page: number) {
    const amiiboCount = this.amiibos.length;
    this.paginator = this.paginationService.getPaginator(amiiboCount, page, 12);
    if ( page < 1 || page > this.paginator.pagesCount ) { return; }
    const startIndex = this.paginator.startIndex,
          endIndex = this.paginator.endIndex + 1;
    this.pagedItems = this.amiibos.slice(startIndex, endIndex);
  }

  ngOnInit() {
    this.getAmiibos();
  }

}

