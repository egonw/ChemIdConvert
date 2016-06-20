import request = require('request');
import http = require('http');
import Promise = require('bluebird');

let defaultBasePath = 'http://chemidconvert/v1';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

/* tslint:disable:no-unused-variable */

export class InlineResponse200 {
    /**
    * Compound structure notated using InChI notation
    */
    'inchi': string;
}

export class InlineResponse2001 {
    /**
    * Compound structure notated using InChIKey
    */
    'inchikey': string;
}

export class InlineResponse2002 {
    /**
    * Compound structure notated using (canonical) SMILES notation
    */
    'smiles': string;
}

export class InlineResponse2003 {
    /**
    * Compound structure notated using a CAS number
    */
    'cas': string;
}

export class SimpleError {
}


export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: request.Options): void;
}

export class HttpBasicAuth implements Authentication {
    public username: string;
    public password: string;
    applyToRequest(requestOptions: request.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string;

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: request.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header") {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string;

    applyToRequest(requestOptions: request.Options): void {
        requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
    }
}

export class VoidAuth implements Authentication {
    public username: string;
    public password: string;
    applyToRequest(requestOptions: request.Options): void {
        // Do nothing
    }
}

export enum CASInChIApiApiKeys {
}

export class CASInChIApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: CASInChIApiApiKeys, value: string) {
        this.authentications[CASInChIApiApiKeys[key]].apiKey = value;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Converts from a InChI format into a CAS number
     * Converts from a InChI format into a CAS number. Only a single match is returned if there is an ambiguity in the conversion. The conversion is performed by using an external webservice and has relatively high latency. 
     * @param inchi Compound structure notated using InChI notation
     */
    public inchiToCasGet (inchi: string) : Promise<{ response: http.ClientResponse; body: InlineResponse2003;  }> {
        const localVarPath = this.basePath + '/inchi/to/cas';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'inchi' is not null or undefined
        if (inchi === null || inchi === undefined) {
            throw new Error('Required parameter inchi was null or undefined when calling inchiToCasGet.');
        }

        if (inchi !== undefined) {
            queryParameters['inchi'] = inchi;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse2003;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum CASInChIKeyApiApiKeys {
}

export class CASInChIKeyApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: CASInChIKeyApiApiKeys, value: string) {
        this.authentications[CASInChIKeyApiApiKeys[key]].apiKey = value;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Converts from a InChIKey format into a CAS number
     * Converts from a InChIKey format into a CAS number. Only a single match is returned if there is an ambiguity in the conversion. The conversion is performed by using an external webservice and has relatively high latency. 
     * @param inchikey Compound structure notated using InChIKey notation
     */
    public inchikeyToCasGet (inchikey: string) : Promise<{ response: http.ClientResponse; body: InlineResponse2003;  }> {
        const localVarPath = this.basePath + '/inchikey/to/cas';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'inchikey' is not null or undefined
        if (inchikey === null || inchikey === undefined) {
            throw new Error('Required parameter inchikey was null or undefined when calling inchikeyToCasGet.');
        }

        if (inchikey !== undefined) {
            queryParameters['inchikey'] = inchikey;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse2003;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum InChICASApiApiKeys {
}

export class InChICASApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: InChICASApiApiKeys, value: string) {
        this.authentications[InChICASApiApiKeys[key]].apiKey = value;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Converts from a CAS number into InChI format
     * Converts from a CAS number into InChI. Only a single match is returned if there is an ambiguity in the conversion. The conversion is performed by using an external webservice and has relatively high latency. 
     * @param cas Compound structure notated as a CAS number (3 groups of numbers separated by dashes)
     */
    public casToInchiGet (cas: string) : Promise<{ response: http.ClientResponse; body: InlineResponse200;  }> {
        const localVarPath = this.basePath + '/cas/to/inchi';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'cas' is not null or undefined
        if (cas === null || cas === undefined) {
            throw new Error('Required parameter cas was null or undefined when calling casToInchiGet.');
        }

        if (cas !== undefined) {
            queryParameters['cas'] = cas;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse200;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum InChIInChIKeyApiApiKeys {
}

export class InChIInChIKeyApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: InChIInChIKeyApiApiKeys, value: string) {
        this.authentications[InChIInChIKeyApiApiKeys[key]].apiKey = value;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Converts from a InChI format into InChIKey format
     * Converts from InChI format into InChIKey. The conversion is performed in process via rdkit. 
     * @param inchi Compound structure notated using InChI notation
     */
    public inchiToInchikeyGet (inchi: string) : Promise<{ response: http.ClientResponse; body: InlineResponse2001;  }> {
        const localVarPath = this.basePath + '/inchi/to/inchikey';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'inchi' is not null or undefined
        if (inchi === null || inchi === undefined) {
            throw new Error('Required parameter inchi was null or undefined when calling inchiToInchikeyGet.');
        }

        if (inchi !== undefined) {
            queryParameters['inchi'] = inchi;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse2001;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Converts from a InChIKey format into InChI format
     * Converts from InChIKey format into InChI. The conversion is performed by using an external webservice and has relatively high latency. 
     * @param inchikey Compound structure notated using InChIKey notation
     */
    public inchikeyToInchiGet (inchikey: string) : Promise<{ response: http.ClientResponse; body: InlineResponse200;  }> {
        const localVarPath = this.basePath + '/inchikey/to/inchi';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'inchikey' is not null or undefined
        if (inchikey === null || inchikey === undefined) {
            throw new Error('Required parameter inchikey was null or undefined when calling inchikeyToInchiGet.');
        }

        if (inchikey !== undefined) {
            queryParameters['inchikey'] = inchikey;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse200;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum InChiKeyCASApiApiKeys {
}

export class InChiKeyCASApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: InChiKeyCASApiApiKeys, value: string) {
        this.authentications[InChiKeyCASApiApiKeys[key]].apiKey = value;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Converts from a CAS number into InChIKey format
     * Converts from a CAS number into InChIKey. Only a single match is returned if there is an ambiguity in the conversion. The conversion is performed by using an external webservice and has relatively high latency. 
     * @param cas Compound structure notated as a CAS number (3 groups of numbers separated by dashes)
     */
    public casToInchikeyGet (cas: string) : Promise<{ response: http.ClientResponse; body: InlineResponse2001;  }> {
        const localVarPath = this.basePath + '/cas/to/inchikey';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'cas' is not null or undefined
        if (cas === null || cas === undefined) {
            throw new Error('Required parameter cas was null or undefined when calling casToInchikeyGet.');
        }

        if (cas !== undefined) {
            queryParameters['cas'] = cas;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse2001;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum SMILESCASApiApiKeys {
}

export class SMILESCASApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: SMILESCASApiApiKeys, value: string) {
        this.authentications[SMILESCASApiApiKeys[key]].apiKey = value;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Converts from a CAS number into (canonical) SMILES format
     * Converts from a CAS number into (canonical) SMILES. Only a single match is returned if there is an ambiguity in the conversion. The conversion is performed by using an external webservice and has relatively high latency. 
     * @param cas Compound structure notated as a CAS number (3 groups of numbers separated by dashes)
     */
    public casToSmilesGet (cas: string) : Promise<{ response: http.ClientResponse; body: InlineResponse2002;  }> {
        const localVarPath = this.basePath + '/cas/to/smiles';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'cas' is not null or undefined
        if (cas === null || cas === undefined) {
            throw new Error('Required parameter cas was null or undefined when calling casToSmilesGet.');
        }

        if (cas !== undefined) {
            queryParameters['cas'] = cas;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse2002;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Converts from a SMILES format into a CAS number
     * Converts from a SMILES format into a CAS number. Only a single match is returned if there is an ambiguity in the conversion. The conversion is performed by using an external webservice and has relatively high latency. 
     * @param smiles Compound structure notated using SMILES notation
     */
    public smilesToCasGet (smiles: string) : Promise<{ response: http.ClientResponse; body: InlineResponse2003;  }> {
        const localVarPath = this.basePath + '/smiles/to/cas';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'smiles' is not null or undefined
        if (smiles === null || smiles === undefined) {
            throw new Error('Required parameter smiles was null or undefined when calling smilesToCasGet.');
        }

        if (smiles !== undefined) {
            queryParameters['smiles'] = smiles;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse2003;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum SMILESInChIApiApiKeys {
}

export class SMILESInChIApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: SMILESInChIApiApiKeys, value: string) {
        this.authentications[SMILESInChIApiApiKeys[key]].apiKey = value;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Converts from a InChI format into (canonical) SMILES format
     * Converts from InChI format into (canonical) SMILES. Only a single match is returned if there is an ambiguity in the conversion. The conversion is performed in process via rdkit. 
     * @param inchi Compound structure notated using InChI notation
     */
    public inchiToSmilesGet (inchi: string) : Promise<{ response: http.ClientResponse; body: InlineResponse2002;  }> {
        const localVarPath = this.basePath + '/inchi/to/smiles';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'inchi' is not null or undefined
        if (inchi === null || inchi === undefined) {
            throw new Error('Required parameter inchi was null or undefined when calling inchiToSmilesGet.');
        }

        if (inchi !== undefined) {
            queryParameters['inchi'] = inchi;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse2002;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Converts from a SMILES format into InChI format
     * Converts from a SMILES format into InChI format. Only a single match is returned if there is an ambiguity in the conversion. The conversion is performed in process via rdkit. 
     * @param smiles Compound structure notated using SMILES notation
     */
    public smilesToInchiGet (smiles: string) : Promise<{ response: http.ClientResponse; body: InlineResponse200;  }> {
        const localVarPath = this.basePath + '/smiles/to/inchi';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'smiles' is not null or undefined
        if (smiles === null || smiles === undefined) {
            throw new Error('Required parameter smiles was null or undefined when calling smilesToInchiGet.');
        }

        if (smiles !== undefined) {
            queryParameters['smiles'] = smiles;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse200;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
export enum SMILESInChIKeyApiApiKeys {
}

export class SMILESInChIKeyApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: SMILESInChIKeyApiApiKeys, value: string) {
        this.authentications[SMILESInChIKeyApiApiKeys[key]].apiKey = value;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * Converts from a InChIKey format into (canonical) SMILES format
     * Converts from InChIKey format into (canonical) SMILES. The conversion is performed by using an external webservice and has relatively high latency. 
     * @param inchikey Compound structure notated using InChIKey notation
     */
    public inchikeyToSmilesGet (inchikey: string) : Promise<{ response: http.ClientResponse; body: InlineResponse2002;  }> {
        const localVarPath = this.basePath + '/inchikey/to/smiles';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'inchikey' is not null or undefined
        if (inchikey === null || inchikey === undefined) {
            throw new Error('Required parameter inchikey was null or undefined when calling inchikeyToSmilesGet.');
        }

        if (inchikey !== undefined) {
            queryParameters['inchikey'] = inchikey;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse2002;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * Converts from a SMILES format into InChIKey format
     * Converts from SMILES format into InChIKey. The conversion is performed in process via rdkit. 
     * @param smiles Compound structure notated using SMILES notation
     */
    public smilesToInchikeyGet (smiles: string) : Promise<{ response: http.ClientResponse; body: InlineResponse2001;  }> {
        const localVarPath = this.basePath + '/smiles/to/inchikey';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'smiles' is not null or undefined
        if (smiles === null || smiles === undefined) {
            throw new Error('Required parameter smiles was null or undefined when calling smilesToInchikeyGet.');
        }

        if (smiles !== undefined) {
            queryParameters['smiles'] = smiles;
        }

        let useFormData = false;

        let requestOptions: request.Options = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: InlineResponse2001;  }>((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
