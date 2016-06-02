var App = {
    help: function () {
        this.echo("Available commands:");
        this.echo("\tcowsay");
        this.echo("\tabout");
        this.echo("\thelp");
        this.echo("");
    },
    cowsay: function (text) {
        this.echo(cowsay(text))
    },
    about: function () {
        this.echo("hellows!!!.", {raw: true});
    },
    id: function () {
        this.echo("uid=1000(tui) gid=1000(tui)");
    }
}

jQuery(document).ready(function ($) {
    $('body').terminal(App, {
        greetings: "     __                      \n"+
    "    |__|__ __  ____    ____  \n"+
    "    |  |  |  \\/    \\  / ___\\ \n"+
    "    |  |  |  /   |  \\/ /_/  >\n"+
    "/\\__|  |____/|___|  /\\___  / \n"+
    "\\______|          \\//_____/\n",
        prompt: function (p) {
            var path = '~'
            p("127.0.0.1:" + path + "$ ");
        },
        onBlur: function () {
            return false;
        },
        tabcompletion: true
    });
});
