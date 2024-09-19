// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//URLBase: 'http://167.99.144.245:8080/api', //'http://127.0.0.1:44446', // // 'http://172.20.10.2:8095'  //'http://192.168.0.101:8095' //'http://181.189.137.115:44466' //
//URLBase: 'http://172.16.20.134:44446',

export const environment = {
  production: false,
  URLBase: 'http://localhost:8080/api',
  preOrderId: 'P',
  orderId: 'O',
  AUTH_KEY: 'key_value',
  dashboard_route: '/4dlab/dashboard',
  preOrder_create: '/pre-ordenes/nueva-pre-orden',
  preOrder_list: '/pre-ordenes/lista-pre-orden',
  order_create: '/ordenes/adminsion-de-ordenes',
  order_list: '/ordenes/listado-de-ordenes',
  order_detail: '/ordenes/detalle-de-la-orden',
};

/*
  //
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
