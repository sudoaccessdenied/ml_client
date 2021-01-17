// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    linReg :"http://localhost:5000/linear_reg_api",
    logistic :"http://localhost:5000/logistic_reg_api",
    neural : "http://localhost:5000/neural_network_api",
    knn :"http://localhost:5000/knn_api",
    kmeans : "http://localhost:5000/kmeans_api",
    // inputImg:"http://localhost:5000/static/kmeans_input.png",
    outputImg:'http://localhost:5000'
   
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
