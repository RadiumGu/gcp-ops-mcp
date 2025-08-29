# GCP MCP for Q CLI

This MCP server has been adapted for use with Amazon Q CLI.

## Setup for Q CLI

1. Install dependencies:
```bash
cd /Users/glei/genai/gcp-mcp
npm install
```

2. Build the project:
```bash
npm run build
```

3. Configure Q CLI to use this MCP server by adding to your Q CLI configuration:
```json
{
  "mcpServers": {
    "gcp-mcp": {
      "command": "node",
      "args": ["/Users/glei/genai/gcp-mcp/bin.js"],
      "env": {
        "NODE_PATH": "/Users/glei/genai/gcp-mcp/node_modules"
      }
    }
  }
}
```

4. Set up GCP credentials:
```bash
gcloud auth application-default login
```

## Usage with Q CLI

You can now use GCP commands through Q CLI:
- "List all my GCP projects"
- "Show Cloud SQL instances in project X"
- "What's my GCP billing status?"
- "List GKE clusters in us-central1"
- "Show Cloud Storage buckets"
- "List Cloud Functions in project X"

The server will be available as `gcp-mcp___run-gcp-code` and `gcp-mcp___list-projects` tools in Q CLI.
