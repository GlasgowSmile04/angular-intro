import { ActivatedRoute } from '@angular/router';
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
  shouldShowPaginator = true;

  constructor( private amiiboService: AmiiboService, private paginationService: PaginationService, private route: ActivatedRoute ) { }

  getAmiibos() {
    this.route.params.subscribe(params => {
      if ( params.category ) {
        this.amiiboService.getFilteredAmiibos(params.category, params.value).subscribe(amiibos => {
          this.amiibos = amiibos.amiibo;
          this.setPage(1);
        });
      } else {
        this.amiiboService.getAmiibos().subscribe(amiibos => {
          this.amiibos = amiibos.amiibo;
          this.setPage(1);
        });
      }
    });
  }

  setPage(page: number) {
    const amiiboCount = this.amiibos.length;
    this.paginator = this.paginationService.getPaginator(amiiboCount, page, 12);
    if ( page < 1 || page > this.paginator.pagesCount ) { return; }
    const startIndex = this.paginator.startIndex,
          endIndex = this.paginator.endIndex + 1;
    this.pagedItems = this.amiibos.slice(startIndex, endIndex);
  }

  setAmiibos(): AmiiboInterface[] {
    if ( !this.searchText ) { this.shouldShowPaginator = true; return this.pagedItems; }
    this.shouldShowPaginator = false;
    return this.amiibos;
  }

  ngOnInit() {
    this.getAmiibos();
  }

}

