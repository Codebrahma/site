---
title: 'Google Cloud Functions Serverless remove command'
menuText: remove
menuOrder: 9
description: 'Remove a deployed Service and all of its Google Cloud Functions Functions, Events and Resources'
layout: Doc
gitLink: /docs/providers/google/cli-reference/remove.md
---

# Google - Remove

The `serverless remove` command will remove the deployed service, defined in your current working directory, from the provider.

**Note:** Only the deployed service with all its resources will be removed. The code on your local machine will remain.

```bash
serverless remove
```

## Examples

### Service removal

```bash
serverless remove
```

This example will remove the deployed service of your current working directory.
