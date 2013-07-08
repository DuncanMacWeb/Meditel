# Meditel

[Meditel](http://hacks.rewiredstate.org/events/bmj/meditel-medical-decision-trees-on-basic-mobile-phones) helps health workers in the developing world diagnose and treat using basic mobile phones, by providing key info for medics in the developing world over [USSD](http://en.wikipedia.org/wiki/Unstructured_Supplementary_Service_Data).

It takes health workers through a decision tree through USSD messaging, using a concise question-and-answer format to diagnosis, treatment and/or referral.

Contributions are welcome, technical or otherwise. Pull requests, issues and tweets FTW.

See the [Rewired State project page](http://hacks.rewiredstate.org/events/bmj/meditel-medical-decision-trees-on-basic-mobile-phones) for details of the non-technical help we need.

## Installation

This app is based on [airbnb/rendr-app-template](https://github.com/airbnb/rendr-app-template), so installation should be similar. Here are the steps:

First, make sure to have Node >= 0.8.0 [installed on your system](http://nodejs.org/). Also, make sure to have `grunt-cli` installed globally.

    $ npm install -g grunt-cli

If you see an error on startup that looks [like this](https://github.com/airbnb/rendr-app-template/issues/2), then you may need to un-install a global copy of `grunt`:

    $ npm uninstall -g grunt

Clone this repo to a local directory and run `npm install` to install dependencies:

    $ git clone git@github.com:DuncanMacWeb/Meditel.git
    $ cd rendr-app-template
    $ npm install

Then, use `grunt server` to start up the web server. Grunt will recompile and restart the server when files change.

    $ grunt server
	Running "bgShell:runNode" (bgShell) task

	Running "handlebars:compile" (handlebars) task
	File "app/templates/compiledTemplates.js" created.

	Running "rendr_stitch:compile" (rendr_stitch) task
	4 Apr 09:58:02 - [nodemon] v0.7.2
	4 Apr 09:58:02 - [nodemon] watching: /Users/..../Meditel
	4 Apr 09:58:02 - [nodemon] starting `node index.js`
	4 Apr 09:58:02 - [nodemon] reading ignore list
	File "public/mergedAssets.js" created.

	Running "stylus:compile" (stylus) task
	File public/styles.css created.
	server pid 87338 listening on port 3030 in development mode

	Running "watch" task
	Waiting...

Now, pull up the app in your web browser. It defaults to port `3030`.

    $ open http://localhost:3030

You can choose a different port by passing the `PORT` environment variable:

    $ PORT=80 grunt server
