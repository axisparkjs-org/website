# Interface: EnvSettings

The type of the application settings when they are injected without a type of their own. Augment it to type the injected settings in the whole application:

```typescript
declare module '@axisparkjs/core' {
    interface EnvSettings {
        port: number;
        databaseUrl: string;
    }
}
```

## Indexable

> \[`key`: `string`\]: `unknown`
