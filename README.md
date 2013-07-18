vizbukkit
=========

A bookmarklet that shows 20 random images from the bukk.it index.
Works on modern browsers that support querySelectorAll.

Installation
------------
Just create a bookmarklet called "vizbukkit" in your browser with the following URL:

    javascript:(function() {
    var s=document.createElement('script');
    s.src='https://github.com/dylansmith/vizbukkit/blob/master/vizbukkit.js';
    document.head.appendChild(s);
    })();

Or just drag this onto your browser toolbar:

[vizbukkit](javascript:(function(){var s=document.createElement('script');s.src='https://github.com/dylansmith/vizbukkit/blob/master/vizbukkit.js';document.head.appendChild(s);})();)

Usage
-----
1. Visit bukk.it
2. Click bookmarklet
3. ???
4. Profit