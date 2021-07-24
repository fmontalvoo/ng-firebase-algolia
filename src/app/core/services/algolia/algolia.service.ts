import { Injectable } from '@angular/core';

import algoliasearch from "algoliasearch";

import { ItemModel } from 'src/app/models/item.model';

import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class AlgoliaService {

  static ITEMS_INDEX: string = "items_index";

  private client;
  private index;

  constructor() {
    this.client = algoliasearch(
      environment.algoliaConfig.appId,
      environment.algoliaConfig.apiKey
    );

    this.index = this.client.initIndex(AlgoliaService.ITEMS_INDEX);
  }

  public createItemIndex(item: ItemModel) {
    return this.index.saveObject(item);
  }

  public async searchItems(query: string) {
    return this.index.search(query);
  }

  public getItems(query: string, page: number) {
    return this.index.search(query,{
      page: page,
      // hitsPerPage: 2  
    });

    // return this.index.search(query);
  }
}
