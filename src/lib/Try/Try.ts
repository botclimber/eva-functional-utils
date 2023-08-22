export class Try<T> {
  private value: T | undefined;
  private error: Error | undefined;

  private constructor(value: T | undefined, error: Error | undefined){
      this.value = value;
      this.error = error;
  }

  itFail(){
      return this.error !== undefined;
  }

  itSucceed(){
      return this.value !== undefined;
  }

  getOrElse(option: T): T {
      return this.value !== undefined ? this.value : option;
  }

  getError(): Error | undefined {
      return this.error;
    }

  static evaluate<T>(fn: () => T): Try<T> {
      try{return new Try<T>(fn(), undefined) }
      catch(e: any){ return new Try<T>(undefined, e) }
  }
}