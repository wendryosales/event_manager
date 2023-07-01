import * as express from 'express';

class App {
  private app: express.Express;

  constructor(expressApp = express()) {
    this.app = expressApp;

    this.config();
  }

  private config(): void {
    this.app.use(express.json());

    this.app.get('/', (req, res) => {
      res.json({
        message: 'Hello World!',
      });
    });
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  }
}

export default App;
