import piston from "piston-client";
(async () => {
    const client = piston();
    const result = await client.execute('java', 'console.log("Hello world!")', { language: '3.9.4 '});
})();