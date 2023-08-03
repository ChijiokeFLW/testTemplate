import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { defaultHomepage } from "discourse/lib/utilities";

export default class CustomHomepageContent extends Component {
  // constructor() {
  //   super(...arguments);
  //   this.router = service();
  // }
  @service router;

  get isHomepage() {
    const currentRouteName = this.router.currentRouteName;
    // console.log(`${this.router}, discovery.${defaultHomepage()}`);
    return currentRouteName === `discovery.${defaultHomepage()}`;
  }
}