(function (vue_utils) {
    function start () {
        return new Vue({
            el: '#Root'
        });
    }

    function initialize() {
        vue_utils.root = window.urlRoot;
        
        vue_utils.push_component('App', { });

        vue_utils.register_components(start);
    }

    window.addEventListener('load', initialize);
}(window.vue_utils));
