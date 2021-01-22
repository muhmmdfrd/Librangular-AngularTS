import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { getToken } from "src/helpers/helper";

@Injectable({
    providedIn: 'root'
})
export class NgService {

    private baseurl = "http://ws.first.local/MathService.asmx/Call";

    constructor(private service: HttpClient) { }

    AngularService(data: { [k: string]: any }) {
        data.token = data.method === "Login" ? null : getToken();
        const requestData = { data };

        return this.service.post(this.baseurl, requestData).toPromise();
    }
}