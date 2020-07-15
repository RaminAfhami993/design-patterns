const sigleton = (function() {
    let config;

    function initializationConfiguration(values) {
        this.randomNumber = Math.random();
        values = values || {};
        this.size = values.size;
        this.number = values.number;
    };

    return {
        getConfig: function(values) {
            if (config === undefined) {
                config = new initializationConfiguration(values);
            };
            return config;
        }
    }
})();


let configObject = sigleton.getConfig({size: 5});
console.log(configObject);

let newConfigObject = sigleton.getConfig({number: 10});
console.log(newConfigObject);

