# Decentraland LAND owner tracker

Scripts to track LAND owners.

## scripts/subgraph

First you'll need to create an `.env` file with your Graph Studio API key, see [`.env.example`](.env.example). The API key must have a GRT balance (less than 1 GRT is used per run). Then run:

```bash
yarn install
yarn graphclient build
yarn ts-node scripts/subgraph.ts
```

You'll find the results in the `data` folder.