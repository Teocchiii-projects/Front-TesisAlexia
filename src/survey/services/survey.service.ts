import http from "../../shared/http-common.ts";

export class SurveyService{
    _resourceEndpoint="/surveys";

    getAll(){
        return http.get(this._resourceEndpoint);
    }

    async create(newSurvey: any) {
        const response = await http.post(this._resourceEndpoint, newSurvey);
        if (response.status !== 201) {
            throw new Error("Failed to create survey");
        }
        console.log(response.data);
        return response.data;
    }
}