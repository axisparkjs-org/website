# Type Alias: McpContent

> **McpContent** = \{ `text`: `string`; `type`: `"text"`; \} \| \{ `data`: `string`; `mimeType`: `string`; `type`: `"image"`; \} \| \{ `data`: `string`; `mimeType`: `string`; `type`: `"audio"`; \} \| \{ `resource`: [`McpResourceContents`](McpResourceContents.md); `type`: `"resource"`; \} \| \{ `description?`: `string`; `mimeType?`: `string`; `name`: `string`; `title?`: `string`; `type`: `"resource_link"`; `uri`: `string`; \}

A content block of a tool result or a prompt message.
