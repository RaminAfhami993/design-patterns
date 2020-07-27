var invoker = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    }
};

var manager = {
    execute: function(name, args) {
        if (name in invoker) {
            return invoker[name].apply(invoker, [].slice.call(arguments, 1))
        };

        return false;
    }
}

console.log(manager.execute('add', 2, 3));
console.log(manager.execute('subtract', 2, 3));
