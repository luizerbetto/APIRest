import express, {Request, Response} from 'express';

class Server {
    private app: express.Application;

    constructor(){
        this.app = express(); // inica a aplicação
        this.configuration();
        this.routes();
    }

    /**
     * Metodo de configuração do servidor
     * caso não passe a porta no ambiente ela sera 3000.
     */
    public configuration(){
        this.app.set('port', process.env.PORT || 3000);
    }

    /**
     * Metodo de configuração das rotas
     */
    public routes(){
        this.app.get('/', (req: Request, res: Response) =>{
            res.send("Hello world!");
        });
    }

    /**
     * Metodo de inicialização
     */
    public start(){
        this.app.listen(this.app.get('port'), () =>{
            console.log(`Server is listening ${this.app.get('port')} port.`);
        });
    }
}

const server = new Server(); // cria instancia do servidor
server.start();