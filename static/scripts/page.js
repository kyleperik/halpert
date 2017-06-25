window.vue_utils.push_component('Page', {
    props: ['name', 'title'],
    data: function () {
        return {
            content: null
        };
    },
    created: function () {
        fetch(urlRoot + 'static/pages/' + this.name + '.md')
            .then(r => r.text())
            .then(t => this.content = marked(t));
    }
});
