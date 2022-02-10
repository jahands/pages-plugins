## Pages Plugins

# UUIDs

This plugin adds a function for generating UUIDs

## Installation

```sh
npm install --save @cfpreview/pages-plugins-uuids
```

## Usage

```typescript
// ./functions/api/uuid.ts
import UUIDsPagesPluginFunction from "../../uuids"

export const onRequest: PagesFunction = UUIDsPagesPluginFunction();

```
