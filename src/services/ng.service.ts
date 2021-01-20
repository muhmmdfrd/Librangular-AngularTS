import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class NgService {

    private baseurl = "http://ws.first.local/MathService.asmx/Call";

    constructor(private service: HttpClient) { }

    AngularService(data: { [k: string]: any }) {
        data.token = "a0ea3df5-1724-4d97-9d91-3b1dfaeb9c00";
        const requestData = { data };

        return this.service.post(this.baseurl, requestData).toPromise();
    }
}