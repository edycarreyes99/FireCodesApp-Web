// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebaseCOnfig:{
    apiKey: "AIzaSyDMowvUZLmnUPUN_HPGx4mfB5kPgzRTXoA",
    authDomain: "firecodesapplication.firebaseapp.com",
    databaseURL: "https://firecodesapplication.firebaseio.com",
    projectId: "firecodesapplication",
    storageBucket: "firecodesapplication.appspot.com",
    messagingSenderId: "252476057333"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
