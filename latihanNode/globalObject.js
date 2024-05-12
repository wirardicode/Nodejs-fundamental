const globals= Object.getOwnPropertyNames(global);
const proses= Object.getOwnPropertyNames(process);
const consoles= Object.getOwnPropertyNames(console);

console.log(
    {
        globals,
        proses,
        consoles,
    }
)

/*
contoh penggunaan global object yaitu:
process salah satunya adalah .memoryUsage

const cpuInformation = process.memoryUsage();
console.log(cpuInformation);
*/ 
const cpuInformation = process.memoryUsage();

console.log(cpuInformation);