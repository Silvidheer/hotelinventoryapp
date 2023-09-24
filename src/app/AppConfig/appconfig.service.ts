import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface";
import { environment } from "src/environments/environment.development";

export const APP_service_config = new InjectionToken('app config');

export const APP_CONFIG: AppConfig = {
    apiEndpoint: environment.apiEndpoint
}