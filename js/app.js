var App={help:function(){this.echo("\nAvailable commands:"),this.echo("	projects -> list with personal projects"),this.echo("	cowsay   -> generates ASCII pictures with a message"),this.echo("	about    -> about myself"),this.echo("	help     -> this screen"),this.echo("")},projects:function(){this.echo("\nsoon!!!\n")},cowsay:function(t){this.echo(cowsay(t))},about:function(){this.echo("\nChoose the best way to know or contact me. :)\n"),this.echo("-> <a href='mailto:erickjung@gmail.com'>email</a>\n",{raw:!0}),this.echo("-> <a href='https://github.com/erickjung' target='_blank'>github</a>\n",{raw:!0}),this.echo("-> <a href='https://linkedin.com/in/erickjung' target='_blank'>linkedin</a>\n",{raw:!0}),this.echo("-> <a href='https://twitter.com/erickjung' target='_blank'>twitter</a>\n",{raw:!0}),this.echo("-> <a href='https://medium.com/@erickjung' target='_blank'>medium</a>\n",{raw:!0}),this.echo("\n")}};jQuery(document).ready(function(t){t("body").terminal(App,{greetings:cowsay("yo! welcome!!")+"\n\n\n-- erickjung.com --\n>> Initializing system... [[[b;#44D544;]DONE]]\n>> Detecting user ip... [[[b;#44D544;]DONE]]\n>> Logging as yo\n\nType [[b;#44D544;]help] to get a list of available commands.\n\n",prompt:function(t){t(myip+":yo$ ")},onBlur:function(){return!1},tabcompletion:!0})});