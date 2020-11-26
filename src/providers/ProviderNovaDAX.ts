import * as BaseProvider from '../BaseProvider';

export class Api extends BaseProvider.Api {
  apiName = 'NovaDAX';

  apiDocs = [['API Docs', 'https://doc.novadax.com/en-US/#get-latest-ticker-for-specific-pair']];

  interval = 15;

  getUrl({ base, quote }) {
    return `https://api.novadax.com/v1/market/ticker/?symbol=${base}_${quote}`;
  }

  getLast({ data }) {
    return data[lastPrice];
  }
}
