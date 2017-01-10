(function () {
    angular
        .module("contactAppModule")
        .service("AppDataSvc", function (AppNameSvc) {
            this.name = AppNameSvc;
            this.author = "Raju Raghuwanshi",
            this.buildDate = new Date().toTimeString()
        });
})();