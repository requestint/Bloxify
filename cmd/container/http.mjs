/* Libraries */ 
import fs from 'fs' 
import path from 'path' 
import { fileURLToPath } from 'url' 
import { parseArgs } from 'util' 
import { load } from 'js-toml' 
import { exit } from 'process' 


/* Varibles */ 
const __dirname = path.dirname(fileURLToPath(import.meta.url)) 
const def_config_path = path.resolve(__dirname, '..', 'config', 'default.toml')

/* Tables */ 
const Flags = { 
  test: { type: "boolean", short: "t" }, 
  method: { type: "string", short: "m" }, 
  payload: { type: "string", short: "p" } 
} 
const { values } = parseArgs({ Flags, allowPositionals: true }) 

/* functions */ 

/** 
 * @function GetTomlConfiguration(dest) 
     @param {string} dest 
   
    @returns {object} Parsed TOML data 
 */ 
function GetTomlConfiguration(dest) { 
  try { 
    // Varibles 
    let new_path = path.resolve((dest || def_config_path)) 
    let file_content 

    // checking that the file exists 
    if (!fs.existsSync(new_path)) { 
      // If the targeted file is missing, automatically drop back to the project default configuration file
      new_path = def_config_path 
    } 

    if (!fs.existsSync(new_path)) { 
      throw new Error(`Config file not found at ${new_path}`) 
    } 

    // now that we've determined if the file exists now we'll read it 
    file_content = fs.readFileSync(new_path, "utf-8") 
    return load(file_content) 
  } catch(err) { 
    console.error("failed to resolve function GetTomlConfiguration(): " + err.message) 
    exit(1) 
  } 
} 
