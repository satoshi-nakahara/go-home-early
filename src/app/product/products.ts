export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      heading1:'heading1',
      heading2:'heading2',
      heading3:'heading3',
      headingtxt1:'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
      headingtxt2:'サンプルテキスト２ サンプルテキスト２ サンプルテキスト２ サンプルテキスト２ サンプルテキスト２ サンプルテキスト２ サンプルテキスト２ サンプルテキスト２ サンプルテキスト２ サンプルテキスト２ サンプルテキスト２ サンプルテキスト２ ',
      headingtxt3:'サンプルテキスト３   サンプルテキスト３   サンプルテキスト３   サンプルテキスト３   サンプルテキスト３   サンプルテキスト３   サンプルテキスト３   サンプルテキスト３   サンプルテキスト３   サンプルテキスト３   サンプルテキスト３   ',
      coverimg: './assets/img/phone-cover.jpg',
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      
      heading1:'heading1',
      heading2:'heading2',
      heading3:'heading3',
      headingtxt1:'サンプルテキスト１',
      headingtxt2:'サンプルテキスト２',
      headingtxt3:'サンプルテキスト３',
      coverimg: 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',

    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: '',
      heading1:'heading1',
      heading2:'heading2',
      heading3:'heading3',
      headingtxt1:'サンプルテキスト１',
      headingtxt2:'サンプルテキスト２',
      headingtxt3:'サンプルテキスト３',
      coverimg: './assets/img/phone-cover.jpg',

    },
    {
      id: 4,
      name: 'Phone SE',
      price: 399,
      description: '',
      heading1:'heading1',
      heading2:'heading2',
      heading3:'heading3',
      headingtxt1:'サンプルテキスト１',
      headingtxt2:'サンプルテキスト２',
      headingtxt3:'サンプルテキスト３',
      coverimg: './assets/img/phone-cover.jpg',

    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */