import { useEffect } from 'react';
import { Terminal } from 'xterm';
import { AttachAddon } from 'xterm-addon-attach';

import 'xterm/css/xterm.css';

function XTerminal() {
    const term = new Terminal({
        cursorBlink: "block"
    });
    const socket = new WebSocket("ws://localhost:5000")
    const attachAddon = new AttachAddon(socket);
  
    term.loadAddon(attachAddon);    
    
    var curr_line = "";
    term.onKey(function(tEvent) {
        curr_line += tEvent.key;
        term.write(tEvent.key);
    });
    
    useEffect(() => {
        term.open(document.getElementById("terminal"));
    });

    return (
        <div id="test"></div>
    );
}

export default XTerminal;