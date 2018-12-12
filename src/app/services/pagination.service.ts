import { Injectable } from '@angular/core';
import * as _ from 'underscore';


@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  getPaginator(allItems: number, currentPage: number, itemsOnPage: number) {
    const pagesCount = Math.ceil( allItems / itemsOnPage );
    let firstPage: number,
        lastPage: number;
    if ( pagesCount <= 12 ) {
      firstPage = 1;
      lastPage = pagesCount;
    } else {
      if ( currentPage <= 3 ) {
        firstPage = 1;
        lastPage = 5;
      } else if ( currentPage + 1 >= pagesCount ) {
        firstPage = pagesCount - 4;
        lastPage = pagesCount;
      } else {
        firstPage = currentPage - 2;
        lastPage = currentPage + 2;
      }
    }
    const startIndex = (currentPage - 1 ) * itemsOnPage,
          endIndex = Math.min(startIndex + itemsOnPage - 1, allItems - 1),
          pages = _.range(firstPage, lastPage + 1);
    return {
      allItems: allItems,
      currentPage: currentPage,
      itemsOnPage: itemsOnPage,
      pagesCount: pagesCount,
      firstPage: firstPage,
      lastPage: lastPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
}
