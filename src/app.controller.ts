import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
    @Get()
    getStatus(){
        return {
            status: 'okay',
            service: 'SavdoAi API',
            timestamp: new Date().toISOString(),
        };
    }

    @Get('health')
    healthCheck(){
        return { status: 'healthy' }
    }
}