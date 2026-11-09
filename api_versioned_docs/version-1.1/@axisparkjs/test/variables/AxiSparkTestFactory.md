# Variable: AxiSparkTestFactory

> `const` **AxiSparkTestFactory**: [`AxiSparkTestFactoryStatic`](../classes/AxiSparkTestFactoryStatic.md)

A factory for creating test instances of AxiSparkCore. It provides a `create` method that can be called with an optional `AxiSparkTestConfig` object to customize the configuration of the test instance. The factory sets up a test context with default settings, including a null log transport and a test environment, and allows for the registration of plugins and providers as specified in the configuration.
