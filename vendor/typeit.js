// Стиль печатающей машинки

new TypeIt(".type-effect", {
    speed: 60,
    afterComplete: function (instance) {
        instance.destroy();
    }
}).go()