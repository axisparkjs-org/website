# Function: EnvSettings()

> **EnvSettings**(): `ParameterDecorator`

A parameter decorator that injects the application settings. It works as `@Inject(AXISPARK_ENV_SETTINGS)`.

```typescript
@Injectable()
export class MailService {
    constructor(@EnvSettings() private readonly settings: EnvSettings) {}
}
```

## Returns

`ParameterDecorator`

A parameter decorator.
