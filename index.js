import fs from "fs"
import os from "os"
import { exec } from "child_process"

// fs.writeFileSync("hello.txt", "Esse arquivo foi criado pelo node! Uhuul!")

// console.log(os.platform())
// console.log(os.cpus().length)

exec("mkdir hacker && cd hacker && touch my_hack.txt")