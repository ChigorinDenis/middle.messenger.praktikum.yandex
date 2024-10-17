import Route from './Route';
import Block from '../framework/Block';

type BlockConstructor = new () => Block;
type Middleware = (pathname: string) => boolean;
interface RouteWithMiddleware {
  route: Route;
  middleware?: Middleware;
}

export default class Router {

  protected routes: RouteWithMiddleware[];

  protected history;

  protected _currentRoute: Route | null;

  protected _rootQuery: string;

  private static __instance: Router | null = null;

  constructor(rootQuery: string) {
      if (Router.__instance) {
          return Router.__instance;
      }

      this.routes = [];
      this.history = window.history;
      this._currentRoute = null;
      this._rootQuery = rootQuery;

      Router.__instance = this;
  }

  use(pathname:string, block: BlockConstructor, middleware?: Middleware) {
      const route = new Route(pathname, block, {rootQuery: this._rootQuery});
      this.routes.push({ route, middleware});
      return this;
  }

  start() {
    window.onpopstate = ((e: PopStateEvent) => {
       const target = e.currentTarget as Window;
       this._onRoute(target.location.pathname);
    }).bind(this);
    this._onRoute(window.location.pathname)
  }

  _onRoute(pathname:string) {
      const routeData = this.getRoute(pathname);
       if (!routeData) {
          console.error(`Route not found for pathname: ${pathname}`);
          return;
      }

      const { route, middleware } = routeData;

      // Проверяем middleware перед рендерингом маршрута
      if (middleware && !middleware(pathname)) {
          console.warn(`Middleware blocked access to: ${pathname}`);
          return;
      }

      if (this._currentRoute && this._currentRoute !== route) {
          this._currentRoute.leave();
      }

      this._currentRoute = route || null;

      route.render();
      
      
  }

  go(pathname: string) {
    if (this._currentRoute && this._currentRoute.match(pathname)) {
      return;
    }
    
    if (this.history) {
      this.history.pushState({}, '', pathname);
    }
    this._onRoute(pathname);
  }

  back() {
    if (this.history) {
      this.history.back();
    }
  }

  forward() {
    if (this.history) {
      this.history.forward();
    }
    
  }

  getRoute(pathname:string) {
      return this.routes.find(({route}) => route.match(pathname));
  }
}
