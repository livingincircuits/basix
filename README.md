# Basix

A minimal and responsive theme for [Ghost](http://github.com/tryghost/ghost/)

Visit Ghost at: [www.ghost.org](http://www.ghost.org "Ghost")

## Prerequisites

1. Node.js
2. Ruby
3. Sass
4. Grunt

## Installation

* Clone (or fork) this repository into your /content/themes/ folder in Ghost.
* Run `npm install` in the Basix directory to install grunt modules.
* Run `grunt` to build the Sass files, or `grunt watch` if you decide to make changes.
* Open site's dashboard (`http://yoursite.com/ghost`).
* Navigate to "Settings".
* At the very bottom find "Theme" line — select this theme and save!

##Configuration

### Ghost Settings

1. In dashboard open "Settings" page.
2. Fill in info about your blog and upload it's logo and cover.
3. Open "User Section".
4. Fill in all applicable info about yourself.

### Theme Settings

Navigate to the theme folder and open "partials".

#####Comments

Ghost doesn't have a native comment system, so we'll have to use Disqus.

1. Go to [disqus.com](http://disqus.com) and sign up. Or in, if you already have an account.
2. Register new site and get the code.
3. Open "comments.hbs" and paste the Disqus code in there.

#####Analytics

1. Open "analytics.hbs"
2. Paste the code you aqquired from your analytics service and save.

##Credits

Many thanks to all who have made [www.ghost.org](http://www.ghost.org "Ghost") possible.