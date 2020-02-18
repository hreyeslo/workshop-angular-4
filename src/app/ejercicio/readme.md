En este ejercicio se pide:

  - Crear un provider con el InjectorToken especial 'APP_INITIALIZER', asociandolo a una factory (función init). Tendrá como dependencia única el servicio del core 'Injector'.

  - Se debe recuperar, antes de que la aplicación arranque, el usuario de la api definida en la constante 'api'.

  - Se debe guardar, antes de que arranque la aplicación, dicho usuario en el servicio InitialService, mediante el método 'setUser'.

  - Si todo es correcto, debe visualizarse el json por pantalla.