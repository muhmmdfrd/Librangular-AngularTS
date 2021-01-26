import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { getToken } from "src/helpers/helper";
import { onComplete, onError, onSuccess } from "src/interfaces/service.type";

@Injectable({
    providedIn: 'root'
})
export class NgService {

    private baseurl = "http://ws.first.local/MathService.asmx/Call";

    constructor(private service: HttpClient) { }

    private AngularService(data: { [k: string]: any }) {
        data.token = data.method === "Login" ? null : getToken();
        return this.service.post(this.baseurl, { data }).toPromise();
    }

    Send(data: { [k: string]: any }, success: onSuccess, error: onError, complete: onComplete) {
        this.AngularService(data)
            .then(({ d }: any) => d.Success ? success(d.Values) : error(d.Message))
            .catch((err) => error(err))
            .finally(() => complete())
    }
}