Cake o' Clock
============

Created using [Jekyll](https://jekyllrb.com/) and the [Agency Jekyll theme](https://github.com/y7kim/agency-jekyll-theme).

Configuration
-------------

The following settings are available under *_config.yml*

- **url**: Website URL
- **baseurl**: Use if baseurl is not /
- **title**: Website title
- **email**: Contact email address
- **phone**: Contact phone number
- **description**: Website description
- **season**: To activate a season, enter the desired CATEGORY name here. If no season is set, the SEASONAL Category is not displayed
- **seasonMessage**: This will be displayed - under the main season header
- **seasonBackground**: If set, the chosen image will be used as a background for the season section and all text will be switched to WHITE for visibility. (place image under /img/backgrounds/Seasonal/SEASON_NAME)
- **tickerMessage**: If set, this message is displayed at the bottom as a News Ticker.
- **tickerBackground**: If set, the chosen image will be used as a background for the News Ticker. (place image under /img/ticker)
- **people**: List of testimonials
    - name: Client Name
    - pic: Client pic (place under /img/testimonials)
    - review: Client Review Test
- **social**: Social Network Links
    - title: Name of social Network
    - url: URL of content

Creating Posts
--------------

Posts should be created under the *_posts* dir. 

Although not necessary, posts should be placed under the relevant subdirectory for better organization.

A post file should be named in the following format:

`YEAR-MONTH-DAY-title.MARKUP`

The date determines where the post will appear chronologically.

The following parameters are available:

- **title**: Post title
- **subtitle**: Post subtitle displayed under main title
- **layout**: Layout format
- **modal-id**: ID of matching modal that will be opened on click. ID has to unique. 
- **date**: Post date
- **img**: Main image displayed within post modal
- **thumbnail**: Thumbnail image displayed in post grid
- **alt**: Image alt text
- **category**: Category under which this post should be displayed
- **price**: Product Price
- **availableFrom**: If set, a FROM date is displayed for when orders are accepted
- **availableTo**: If set, an END date is displayed for when orders are accepted
- **description**: Product description

Local Deployment
----------------

This website has been created using [Jekyll](https://jekyllrb.com/) and thus requires Jekyll and its dependencies in order to be built.

To facilitate this a Vagrantfile is included which can be used to spin up a VM with all the required dependencies. The Vagrantfile assumes that [Vagrant](https://www.vagrantup.com/) and [VirtualBox](https://www.virtualbox.org/) are already installed.

To start the VM, go to your working directory and run:

{% codeblock %}
vagrant up
{% endcodeblock %}

This will download any required OS images if not already present and start the VM for you.

Once the VM is up, log into it via:

{% codeblock %}
vagrant ssh
{% endcodeblock %}

Now that we are logged in, go to the /vagrant directory:

{% codeblock %}
cd /vagrant
{% endcodeblock %}

This directory will be a mount of the location of your Vagrantfile, i.e. your working directory, meaning that the project files will also be mounted here.

Now start serving the website locally using jekyll:

{% codeblock %}
jekyll serve
{% endcodeblock %}
