const Singleton = function() {
  if (Singleton.singletonInstance) {
    return Singleton.singletonInstance;
  }
  Singleton.singletonInstance = this;
};
