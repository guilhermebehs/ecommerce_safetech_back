import { Router } from 'express';

export abstract class AbstractRoutes {
    protected routes: Router

    constructor () {
      this.routes = Router();
    }

    protected abstract createGetResourceRoute():any;
    protected abstract createGetAllResourcesRoute():any;
    protected abstract createSaveResourceRoute():any;
    protected abstract createUpdateResourceRoute():any;
    protected abstract createDeleteResourceRoute():any;
    protected abstract createSignInRoute():any;
    protected abstract createSignUpRoute():any;

    createRoutes (): Router {
      this.createGetResourceRoute();
      this.createGetAllResourcesRoute();
      this.createSaveResourceRoute();
      this.createUpdateResourceRoute();
      this.createDeleteResourceRoute();
      this.createSignInRoute();
      this.createSignUpRoute();
      return this.routes;
    }
}
