# Function: Signal()

> **Signal**(): `ParameterDecorator`

A decorator for injecting the `AbortSignal` of the execution into a method parameter. The signal is aborted when the execution times out or its client stops waiting (the HTTP connection is closed, the WebSocket is disconnected or the MCP request is cancelled). Pass it to `fetch`, database drivers or your own loops so the work stops when nobody will read the result. It works in every transport.

```typescript
@Get('report')
@Timeout(5000)
async report(@Signal() signal: AbortSignal) {
    const response = await fetch(this.reportsUrl, { signal });
    return response.json();
}
```

## Returns

`ParameterDecorator`

A parameter decorator that injects the signal of the execution.
