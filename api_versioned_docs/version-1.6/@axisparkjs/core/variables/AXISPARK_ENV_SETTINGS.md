# Variable: AXISPARK\_ENV\_SETTINGS

> `const` **AXISPARK\_ENV\_SETTINGS**: `InjectionToken`

An injection token bound to the application settings, the deeply frozen object returned by the `load` function of the `settings` option. Without the `settings` option, it is bound to an empty object.

```typescript
@Injectable()
export class MailService {
    constructor(@Inject(AXISPARK_ENV_SETTINGS) private readonly settings: AppSettings) {}
}
```
