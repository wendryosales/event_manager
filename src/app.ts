import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from '../build/routes';

class App {
  private readonly app: express.Express;

  constructor(expressApp = express()) {
    this.app = expressApp;

    this.config();
  }

  private config(): void {
    this.app.use(express.json());

    this.app.use('/docs', swaggerUi.serve, async (_req: express.Request, res: express.Response) => {
      res.send(swaggerUi.generateHTML(await import('../swagger.json')));
    });

    RegisterRoutes(this.app);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  }
}

export default App;
