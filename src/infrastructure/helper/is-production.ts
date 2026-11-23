import { conf } from "../../core";

export function isProd(){
    return conf.NODE_ENV === "production";
}