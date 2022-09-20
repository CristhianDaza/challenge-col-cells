(function(document) {
  'use strict';

  window.CellsPolymer.start({
    routes: {
      'login': '/',
      'another': '/another',
      'routerExample': '/routerExample/:queryStringToPrettyUrl',
      'generator': '/generator'
    }
  });
}(document));
