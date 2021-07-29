const ReadLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
const chalk = require('chalk');

console.clear();
console.log(chalk.redBright(`
================================================================================
=                                                                              =
=    ███████╗ ██████╗ ██╗      ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗    =
=    ██╔════╝██╔═══██╗██║      ██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝    =
=    ███████╗██║   ██║██║      ███████╗██║     ██████╔╝██║██████╔╝   ██║       =
=    ╚════██║██║▄▄ ██║██║      ╚════██║██║     ██╔══██╗██║██╔═══╝    ██║       =
=    ███████║╚██████╔╝███████╗ ███████║╚██████╗██║  ██║██║██║        ██║       =
=    ╚══════╝ ╚══▀▀═╝ ╚══════╝ ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝       =
=                         https://github.com/iuseyahoo                         = 
================================================================================`));

async function Main() {
    // sudo python3 sqlmap.py -u "url" --level 1 --risk 1
    console.log("\nEnter URL")
    ReadLine.question("> ", URL => {
        console.log("\nLevel (1-5)")
        ReadLine.question("> ", LEVEL => {
            console.log("\nRisk (1-3)");
            ReadLine.question("> ", RISK => {
                console.log("\n(1) - Show Script | (2) - Exit")
                ReadLine.question("> ", SOE => {

                    if (SOE === '1') {
                        console.log(`\nsudo python3 sqlmap.py -u "${URL}" --level ${LEVEL} --risk ${RISK}`)
                    }

                    if (SOE === '2') {
                        function exitScript() {
                            process.exit(1);
                        }
                        exitScript().catch(error => {
                            console.error(error)
                        })
                    }
                })
            })
        })
    })
}

Main().catch(error => {
    console.error(error)
})