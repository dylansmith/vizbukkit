(function() {

    if (window.location.origin !== 'http://bukk.it') {
        if (confirm('Hey, this isn\'t bukk.it! Do you want to go there now?')) {
            window.location = 'http://bukk.it';
        } else {
            return;
        }
    }

    var styles = "\
        #vizbukkit { padding:15px; font: 14px normal Arial, Arial, Helvetica, sans-serif; position:fixed; top:0; left:0; bottom:0; right:0; background:#fff; }\
        #vizbukkit nav a { padding:0 2px; }\
        #vizbukkit figure { height:150px; display:inline-block; margin:15px; }\
        #vizbukkit figure img { height:100%; }";

    window.vizbukkit = {

        container: null,
        num: 20,

        init: function() {
            var c, s;
            this.teardown();
            c = this.container = document.createElement('div');
            c.id = 'vizbukkit';
            c.innerHTML = "\
                <nav>\
                    <a href=\"javascript:vizbukkit.update();\">Randomise</a>\
                    <a href=\"javascript:vizbukkit.teardown();\">Close</a>\
                    (Just right-click and copy image URL)\
                </nav>";
            s = document.createElement('style');
            s.id = 'vizbukkit-styles';
            s.innerHTML = styles;
            document.body.appendChild(c);
            document.body.appendChild(s);
            this.update();
        },

        clear: function() {
            this._delNodes(document.querySelectorAll('#vizbukkit figure'));
        },

        teardown: function() {
            this._delNodes(document.querySelectorAll('[id^=vizbukkit]'));
        },

        update: function() {
            var i, rand=[], href, nodes = document.querySelectorAll('tr > td:nth-child(2) a');

            this.clear();
            for (i=0; i<this.num; i++) rand.push(Math.floor(Math.random() * nodes.length));
            for (i=0; i<rand.length; i++) {
                href = nodes[rand[i]].href;
                fig = document.createElement('figure');
                fig.innerHTML = '<img src="%s">'.split('%s').join(href);
                this.container.appendChild(fig);
            }
        },

        _delNodes: function(nodes) {
            for (var i=0; i<nodes.length; i++) nodes[i].parentNode.removeChild(nodes[i]);
        }
    };

    window.vizbukkit.init();

})();