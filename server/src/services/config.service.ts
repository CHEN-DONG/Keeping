import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
    private readonly envConfig: { [porp: string]: string };

    constructor() {
        this.envConfig = dotenv.parse(fs.readFileSync('.env'));
    }

    get(key: string): string {
        return this.envConfig[key];
    }
}
