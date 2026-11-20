# Interface: ResolutionChainState

The state shared by every step of one resolution chain. The dependencies of a constructor are resolved in parallel, each one in a fork
of the chain with its own state, linked to the state of the chain that forks it.

## Properties

### forks

> `readonly` **forks**: `Set`\<`ResolutionChainState`\>

The states of the forks of this chain.

***

### parent?

> `readonly` `optional` **parent?**: `ResolutionChainState`

The state of the chain that forked this one, if any.

***

### waitingFor

> `readonly` **waitingFor**: `Set`\<[`PendingInstance`](PendingInstance.md)\<`unknown`\>\>

The pending instances that the chain is waiting for.
