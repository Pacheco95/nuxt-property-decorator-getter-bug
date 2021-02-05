import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

export const namespace = "example-store";

const fakeFetch = () =>
  new Promise<string>(resolve => {
    setTimeout(() => {
      resolve("Hello world!");
    }, 1000);
  });

@Module({ name: namespace, stateFactory: true, namespaced: true })
export default class ExampleStore extends VuexModule {
  loading = false;
  data = "";

  @Mutation
  public setLoading(loading: boolean) {
    this.loading = loading;
  }

  @Mutation
  public setData(data: string) {
    this.data = data;
  }

  @Action
  async fetchText() {
    this.setLoading(true);
    this.setData(await fakeFetch());
    this.setLoading(false);
  }
}
