(function (vue_utils) {
    function start () {
        return new Vue({
            el: '#Root'
        });
    }

    function initialize() {
        vue_utils.root = window.urlRoot;
        
        vue_utils.push_component('App', {
            data: function () {
                return  {
                    new_post: false
                }
            },
            methods: {
                create_post: function () {
                    this.new_post = true;
                }
            }
        });

        vue_utils.register_components(start);
    }

    window.addEventListener('load', initialize);
}(window.vue_utils));
