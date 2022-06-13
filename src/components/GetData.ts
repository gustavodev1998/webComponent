import { LitElement } from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('get-data')
export class GetData extends LitElement {

    @property({ type: String }) url = '';
    @property({ type: String }) method = '';

    getProperties() {
        return {
            url: this.url,
            method: this.method
        }
    }

    /* Construtor é executado antes de mudar as propriedas q enviamos */
    constructor() {
        super();
        console.log("olaWEB COMPOENNT DATA")
    }

    firstUpdated() {
        this.getData()
    }

    /* Subir de filhos para o pais */
    _sendData(data: unknown) {
        this.dispatchEvent(new CustomEvent('ApiData', {
                detail: { data: data },
                bubbles: true,
                composed: true
        }))
    }

    getData() {
        fetch(this.url, {
            method: this.method
        })
        .then( (response) => {
            if(response.ok) return response.json();
            return Promise.reject(response);
        })
        .then( (data) => {
            this._sendData(data)
        })
        .catch( (error) => { console.warn('Something went wrong', error)})
    }

}


declare global {
    interface HTMLElementTagNameMap {
      'get-data': GetData
    }
}