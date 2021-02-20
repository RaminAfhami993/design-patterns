var publisherSubscriber  = {};

(function(container) {
    var id = 0;

    container.subscribe = function(topic, f) {
        if (!(topic in container)) {
            container[topic] = [];
        };

        container[topic].push({
            id: ++id,
            callback: f 
        });

        return id;
    };

    container.unsubscribe = function(topic, id) {
        container[topic] = container[topic].filter(x => x.id != id);
    };

    container.publish = function(topic, data) {
        container[topic].forEach(element => {
            element.callback(data);
        });
    };
})(publisherSubscriber);


var id1 = publisherSubscriber.subscribe('click', function(data) {
    console.log('1 ===> ', data);
});

var id2 = publisherSubscriber.subscribe('hover', function(data) {
    console.log('2 ===> ', data);
});

var id3 = publisherSubscriber.subscribe('click', function(data) {
    console.log('3 ===> ', data);
});

publisherSubscriber.publish('click', {test: "sample"});
console.log(1);

publisherSubscriber.publish('hover', {test: "sample"});
console.log(2);

publisherSubscriber.unsubscribe('click', id1)

publisherSubscriber.publish('click', {test: "sample"});
console.log(2);

publisherSubscriber.publish('hover', {test: "sample"});
console.log(3);
