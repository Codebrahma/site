---
title: 'Serverless Framework - Google Cloud Functions Guide - Quick Start'
menuText: 'Quick Start'
menuOrder: 2
description: 'Get started with Google Cloud Functions in 5 minutes or less'
layout: Doc
gitLink: /docs/providers/google/guide/quick-start.md
---

# Google - Quick Start

This guide is designed to help you get started as quick as possible.

## 1. Create a new service

1. Create a new service with the [`google-nodejs`](https://github.com/serverless/serverless/tree/master/lib/plugins/create/templates/google-nodejs) template

```bash
serverless create --template google-nodejs --path my-service
```

2. Install the dependencies

```bash
cd my-service
npm install
```

## 2. Set up the credentials

Read through [credentials doc](../credentials) to setup the credentials.

## 3. Update `serverless.yml`

Update the `project` and `credentials` in your projects `serverless.yml`

## 4. Deploy

Run the [deploy command](../../cli-reference/deploy)

```bash
serverless deploy
```

## 5. Invoke

Run the [invoke command](../../cli-reference/invoke)

```bash
serverless invoke --function first
```
