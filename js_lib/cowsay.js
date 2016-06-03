var artList = [
    [
        "        \\         __------~~-,",
        "         \\                  ",
        "               /               \\",
        "              /                :",
        "             |                  ",
        "             |                  |",
        "             |                  |",
        "              |   _--           |",
        "              _| =-.     .-.   ||",
        "              o|/o/       _.   |",
        "              /  ~          \\ |",
        "            (____@)  ___~    |",
        "               |_===~~~.`    |",
        "            _______.--~     |",
        "            \\________       |",
        "                     \\      |",
        "                   __/-___-- -__",
        "                  /            _ \\"
    ],
    [
        "         \\   ^__^",
        "          \\  (oo)\\________",
        "             (__)\\        )\/\\ ",
        "                 ||----w |",
        "                 ||     ||"
    ],
    [
        "         \\",
        "          \\",
        "              oO)-.                       .-(Oo",
        "             /__  _\\                     /_  __\\",
        "             \\  \\(  |     ()~()         |  )/  /",
        "              \\__|\\ |    (-___-)        | /|__/",
        "              '  '--'    ==`-'==        '--'  '"
    ],
    [
        "         \\",
        "          \\   \\",
        "               \\ /\\",
        "               ( )",
        "             .( o )."
    ],
    [
        "          \\                    / \\  //\\",
        "           \\     |\\___/|      /   \\//  \\\\",
        "                 /0  0  \\__  /    //  | \\ \\",
        "                /     /  \\/_/    //   |  \\  \\",
        "                @_^_@'/   \\/_   //    |   \\   \\",
        "                //_^_/     \\/_ //     |    \\    \\",
        "             ( //) |        \\///      |     \\     \\",
        "           ( / /) _|_ /   )  //       |      \\     _\\",
        "         ( // /) '/,_ _ _/  ( ; -.    |    _ _\\.-~        .-~~~^-.",
        "       (( / / )) ,-{        _      `-.|.-~-.           .~         `.",
        "      (( // / ))  '/\\      /                 ~-. _ .-~      .-~^-.  \\",
        "      (( /// ))      `.   {            }                   /      \\  \\",
        "       (( / ))     .----~-.\\        \\-'                 .~         \\  `. \\^-.",
        "                  ///.----..>        \\             _ -~             `.  ^-`  ^-_",
        "                    ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~",
        "                                                                       /.-~"
    ],
    [
        "         \\     /\\  ___  /\\",
        "          \\   // \\/   \\/ \\\\",
        "             ((    O O    ))",
        "              \\\\ /     \\ //",
        "               \\/  | |  \\/",
        "                |  | |  |",
        "                |  | |  |",
        "                |   o   |",
        "                | |   | |",
        "                |m|   |m|"
    ],
    [
        "         \\",
        "          \\",
        "                                        .::!!!!!!!:.",
        "       .!!!!!:.                        .:!!!!!!!!!!!!",
        "       ~~~~!!!!!!.                 .:!!!!!!!!!UWWW$$$",
        "           :$$NWX!!:           .:!!!!!!XUWW$$$$$$$$$P",
        "           $$$$$##WX!:      .<!!!!UW$$$$'  $$$$$$$$#",
        "           $$$$$  $$$UX   :!!UW$$$$$$$$$   4$$$$$*",
        "           ^$$$B  $$$$\\     $$$$$$$$$$$$   d$$R'",
        "             '*$bd$$$$      '*$$$$$$$$$$$o+#'",
        "                  ''''          '''''''"
    ],
    [
        "         \\            .    .     .",
        "          \\      .  . .     `  ,",
        "           \\    .; .  : .' :  :  : .",
        "            \\   i..`: i` i.i.,i  i .",
        "             \\   `,--.|i |i|ii|ii|i:",
        "                  UooU\\.'@@@@@@`.||'",
        "                  \\__/(@@@@@@@@@@)'",
        "                       (@@@@@@@@)",
        "                       `YY~~~~YY'",
        "                        ||    ||"
    ],
    [
        "         \\    ____",
        "          \\  /    \\",
        "            | ^__^ |",
        "            | (oo) |______",
        "            | (__) |      )\\/\\",
        "             \\____/|----w |",
        "                  ||     ||  ",
        "",
        "    	            Moofasa"
    ],
    [
        "         \\",
        "          \\   \\_\\_    _/_/",
        "           \\      \\__/",
        "                  (oo)\\_______",
        "                  (__)\\       )\\/\\",
        "                      ||----w |",
        "                      ||     ||"
    ],
    [
        "         \\",
        "          \\",
        "              .--.",
        "             |o_o |",
        "             |:_/ |",
        "            //   \\ \\",
        "           (|     | )",
        "          /'\\_   _/`\\",
        "          \\___)=(___/"
    ]
]

var padLine = function (line, longest_line, pad_char) {
    pad_char = pad_char || " ";
    var pad_str = "";
    for (var i = line.length; i < longest_line - 1; i++) {
        pad_str += pad_char;
    }
    return pad_str;
};

var breakTextIntoLines = function (text, max_len) {
    max_len = (typeof max_len === "number" ? max_len : 50);
    var longest_line = 0,
        line_num = 0,
        line_length = 0,
        lines = [],
        words = text.split(" "),
        output = [];

    for (var i = 0, len = words.length; i < len; i++) {
        if ((line_length + words[i].length + 1) > max_len) {
            line_num++;
            line_length = 0;
        }
        if (lines.length <= line_num) {
            lines.push([]);
        }
        lines[line_num].push(words[i]);
        line_length += words[i].length + 1;
        longest_line = Math.max(longest_line, line_length);
    }

    var output_line,
        joined_line;
    output.push(buildLine(padLine("", longest_line, "-"), true));
    for (i = 0, len = lines.length; i < len; i++) {
        joined_line = lines[i].join(" ");
        output_line = buildLine(joined_line + padLine(joined_line, longest_line, " "), false);
        output.push(output_line);
    }
    output.push(buildLine(padLine("", longest_line, "-"), true));
    return output;
};

var buildLine = function (line, no_cap) {
    return (no_cap ? " " : "<") + " " + line + " " + (no_cap ? " " : ">");
};

var cowsay = function (text, line_length) {
    var rand = artList[Math.floor(Math.random() * artList.length)];
    return breakTextIntoLines(text, line_length).concat(rand).join("\n");
};
