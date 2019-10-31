const Net = require("net");
const dns = require("dns").promises;

const [, , ...arguments] = process.argv;
const [minPortValue, maxPortValue] = [0, 65535];

const help = `
    Usage: sniffer.js [--help] [--ports <number>-<number>] [--host <value>]

    These are commands used in sniffer application: 

        host       Host address, IP or URL.
                   Examples: --host ukr.net,
                             --host 172.217.3.110
        
        ports       Ports range. Numbers must be more than 0 and less than 65535.
                   Examples: --port 30-562,
                             --port 1-65535.
                             
        help       Show all commands.
`;

const handleHostCheck = async host => {
  try {
    const result = await dns.lookup(host);
    return await result.address;
  } catch (err) {
    throw Error("Invalid host");
  }
};

const isPortValid = port => port >= minPortValue && port <= maxPortValue;

const getPortsRange = ports => {
  const [first, last] = ports.split("-");
  if (isPortValid(first) && isPortValid(last)) {
    return [Number(first), Number(last)];
  } else {
    throw Error("Invalid port range");
  }
};

const getHostAndPorts = async (hostString, portString) => {
  const host = await handleHostCheck(hostString);
  const [firstPort, lastPort] = getPortsRange(portString);
  return { host, firstPort, lastPort };
};

const tryToConnect = (host, port) => {
  const client = new Net.Socket();
  client.setTimeout(300);
  client.connect({ port, host });
  return new Promise(resolve => {
    client.on("connect", () => {
      process.stdout.write(".");
      client.destroy();
      return resolve(port);
    });
    client.on("timeout", () => {
      client.destroy();
      return resolve(false);
    });
    client.on("error", () => {
      client.destroy();
      return resolve(false);
    });
  });
};

const checkConnectedPorts = async ({ host, firstPort, lastPort }) => {
  const promises = [];
  for (let i = firstPort; i <= lastPort; i++) {
    promises.push(tryToConnect(host, i));
  }
  const ports = await Promise.all(promises);
  return ports.filter(Boolean);
};

const openedPorts = async (host, ports) => {
  const hostAndPorts = await getHostAndPorts(host, ports);
  return await checkConnectedPorts(hostAndPorts);
};

parseArguments = (...args) => {
  if (args.includes("--help")) {
    console.log(help);
    process.exit(0);
  }
  if (args.length < 4 || !args.includes("--ports") || !args.includes("--host")) {
    console.log("Use --help to correct input");
    process.exit(1);
  }
  return { host: args[3], ports: args[1] };
};

const printResults = async args => {
  const { host, ports } = parseArguments(...args);
  const openPorts = await openedPorts(host, ports);
  if (openPorts.length) return `${openPorts} ports are opened`;
  return "All ports closed";
};

printResults(arguments)
    .then(res => {
      console.log(`\n${res}`);
      process.exit(0);
    });
