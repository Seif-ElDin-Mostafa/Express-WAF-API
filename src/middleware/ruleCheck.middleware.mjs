import express from "express";

export default (req, res, next) => {
    const { url, headers, query } = req;
    const sqlWords = ["SELECT", "UPDATE", "DELETE", "INSERT"];
    const allowedUserAgents = [
        /Chrome/i,
        /Edg/i,
        /PostmanRuntime/i
    ];

    if(sqlWords.some(word => url.toUpperCase().includes(word))) {
        console.log("SQL Injection detected");
        return res.status(403).send("Request blocked: SQL Injection detected");
    }

    const xssPattern = /<script.*?>.*?<\/script>/gi;
    if (Object.values(query).some(value => xssPattern.test(value))) {
        console.log("XSS detected");
        return res.status(403).send('Request blocked: XSS detected.');
    }

    if (!allowedUserAgents.some(agent => agent.test(headers['user-agent']))) {
        console.log("Malicious user agent detected");
        return res.status(403).send('Request blocked: Malicious user agent detected.');
    }
    
    if (url.includes('../')) {
        console.log("Path traversal detected");
        return res.status(403).send('Request blocked: Path traversal detected.');
    }

    next();
}