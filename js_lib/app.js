var App = {
    help: function () {
        this.echo("\nAvailable commands:");
        this.echo("\tprojects -> list with personal projects");
        this.echo("\tcowsay   -> generates ASCII pictures with a message");
        this.echo("\tabout    -> about myself");
        this.echo("\thelp     -> this screen");
        this.echo("");
    },
    projects: function () {
        this.echo("\nsoon!!!\n")
    },
    cowsay: function (text) {
        this.echo(cowsay(text))
    },
    about: function () {
        this.echo("\nChoose the best way to know or contact me. :)\n");
        this.echo("-> <a href='mailto:erickjung@gmail.com'>email</a>\n", {raw: true});
        this.echo("-> <a href='https://github.com/erickjung' target='_blank'>github</a>\n", {raw: true});
        this.echo("-> <a href='https://linkedin.com/in/erickjung' target='_blank'>linkedin</a>\n", {raw: true});
        this.echo("-> <a href='https://twitter.com/erickjung' target='_blank'>twitter</a>\n", {raw: true});
        this.echo("-> <a href='https://medium.com/@erickjung' target='_blank'>medium</a>\n", {raw: true});
        this.echo("\n");
    }
}

jQuery(document).ready(function ($) {
    $('body').terminal(App, {
        greetings: cowsay("yo! welcome!!") +
        "\n\n\n" +
        "-- erickjung.com --\n" +
        ">> Initializing system... [[[b;#44D544;]DONE]]\n" +
        ">> Detecting user ip... [[[b;#44D544;]DONE]]\n\n" +
        ">> Logging as yo\n\n" +
        "Type [[b;#44D544;]help] to get a list of available commands.\n\n",
        prompt: function (p) {
            p(myip + ":yo$ ");
        },
        onBlur: function () {
            return false;
        },
        tabcompletion: true,
    });
});
