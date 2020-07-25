let publisherSubscriber = {};

(function(container) {
    let id = 0;

    container.subscribe = function(topic, func) {
        if (!(topic in container)) {
            container[topic] = [];
        };

        container[topic].push({
            id: ++id,
            callback: func
        });

        return id;
    };

    container.unsubscribe = function(topic, id) {
        publisherSubscriber[topic] = publisherSubscriber[topic].filter(x => x.id != id);
    };

    container.publish = function(topic, data) {
        container[topic].forEach(element => {
            element.callback(data);
        });
    };


})(publisherSubscriber);

const id1 = publisherSubscriber.subscribe('click', function(data) {
    console.log("1 ======> ", data);
});

const id2 = publisherSubscriber.subscribe('hover', function(data) {
    console.log("2 ======> ", data);
});

const id3 = publisherSubscriber.subscribe('click', function(data) {
    console.log("3 ======> ", data);
});

publisherSubscriber.publish("click", {data: 1});

publisherSubscriber.unsubscribe("click", id1);

publisherSubscriber.publish("click", {data: 1});

console.log(id1, id2, id3);

