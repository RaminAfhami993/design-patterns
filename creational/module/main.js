const collection = (function() {

    //private members
    objects = [];

    // public objects
    return {
        addObject: function(object) {
            objects.push(object);
        },
        removeObject: function(object) {
            const index = objects.indexOf(object);
            if (index !== -1) objects.splice(index, 1);
        },
        getObjects: function() {
            return JSON.parse(JSON.stringify(objects))
        }
    };
})();

console.log(collection.getObjects());
collection.addObject("Ramin")
console.log(collection.getObjects());
collection.addObject("Mahone")
console.log(collection.getObjects());
collection.removeObject("Mahone")
console.log(collection.getObjects());
