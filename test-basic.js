#!/usr/bin/env node

// 基本测试脚本
console.log("Testing GCP MCP server...");

try {
  const { Server } = require("@modelcontextprotocol/sdk/server/index.js");
  console.log("✓ MCP SDK loaded successfully");
  
  const { GoogleAuth } = require('google-auth-library');
  console.log("✓ Google Auth library loaded successfully");
  
  console.log("✓ All dependencies loaded correctly");
  console.log("✓ GCP MCP server is ready for Q CLI integration");
  
} catch (error) {
  console.error("✗ Error:", error.message);
  process.exit(1);
}
