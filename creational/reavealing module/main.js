const collection = (function() {

    //private members
    objects = [];

    addObject = function(object) {
        objects.push(object);
    };

    removeObject = function(object) {
        const index = objects.indexOf(object);
        if (index !== -1) objects.splice(index, 1);
    };

    getObjects = function() {
        return JSON.parse(JSON.stringify(objects))
    };

    // public objects
    return {
        getObjects,
        deleteObject: removeObject,
        addObject: addObject
    }

})();

console.log(collection.getObjects());
collection.addObject("Ramin")
console.log(collection.getObjects());
collection.addObject("Mahone")
console.log(collection.getObjects());
collection.deleteObject("Mahone")
console.log(collection.getObjects());
