# Cross-Origin file transfer

This is a file transfer system that can be used from two machines connected to the same local network. This can be useful for machines using CLI. It offers high speeds taking
0.009 seconds to send 0.3 MB of data accross systems.

## How to use it?

Just run
`node sender.js` on the sending computer. Then run `node receiver.js` [IP_ADDRESS] on the receiving computer where IP_ADDRESS is the IP address of the sending computer. Don’t forget to make sure that port 8000 is not in use.

- Put the file that needs to be sent in the sender folder.
- The received file will be in the receiver folder.

**NOTICE: Terminect is currently in beta, but completely functional. U may test it on the same local machine(open two cmd's)**
