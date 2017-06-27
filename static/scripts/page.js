window.vue_utils.push_component('Page', {
    props: ['name', 'title', 'initial_edit'],
    data: function () {
        return {
            markdown: null,
            edit: this.initial_edit
        };
    },
    computed: {
        content: function () {
            if (!this.markdown) return null;
            return marked(this.markdown);
        },
        url: function () {
            return urlRoot + 'pages/' + this.name + '.md';
        }
    },
    methods: {
        load: function () {
            fetch(this.url)
            .then(r => {
                if (!r.ok) throw new Error(r.statusText);
                return r;
            })
            .then(r => r.text())
            .then(t => this.markdown = t)
            .catch(e => {
                this.markdown = '## Error Loading Post :(';
                throw e;
            });
        },
        save: function () {
            var key = prompt('admin key');
            if (key === null) return;
            fetch(this.url + '?admin_key=' + key, {
                method: 'POST',
                body: this.markdown
            })
            .then(r => {
                if (!r.ok) throw(new Error(r.statusText));
                this.edit = false;
            })
            .catch(e => {
                alert('Error Saving :(');
            });
        },
        keydown: function (e) {
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                this.save();
            }
        }
    },
    created: function () {
        this.load();
    }
});
