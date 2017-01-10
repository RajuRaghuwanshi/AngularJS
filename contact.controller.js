(function () {
    angular
        .module("contactAppModule")
        .controller("contactCntrl", function (contactDataSvc) {

            this.contacts = contactDataSvc.contacts;
            var self = this;
            this.selectedContact = this.contacts[0];

            this.selectContact = function (index) {
                self.selectedContact = self.contacts[index];
            }
        });
})();
