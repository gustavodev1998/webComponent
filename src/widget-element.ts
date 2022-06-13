import { html, css, LitElement } from 'lit'
import {customElement, property} from 'lit/decorators.js';

import * as Icon from './icon';

import x from './images/do-utilizador.svg'

@customElement('widget-element')
export class WidgetElement extends LitElement {

    @property({ type: String }) name = '';

    @property({ type: String }) svgPath = '';

    @property({ type: Boolean }) status = false;

    @property({ type: String }) id = '';

    @property({ type: String }) widgetProperties = '';
    
    @property({ type: Array }) data = new Array;

    constructor() {
        super();
    }

    static styles = css`

        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: 'Roboto', 'Poppins', sans-serif;
        }

        h3 {
          color: #3b4b5e;
        }

        p {
          color: #677787;
        }

        .image-wrapper {
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto;
          width: 100px;
            height: 100px;
          box-shadow: 0px 0px 20px 4px rgb(0 0 0 / 10%);
        }

        span img {
          max-width: 100%;
        }


        .widget-wrapper {
            position: absolute;
            top: 50%;
            left: 50%;
 
            width: 225px;
            height: 225px;
        
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border-radius: 1rem;
            border: 5px solid #ebf0f2;
            text-align: center;

            transform: translate(-50%, -50%);
            box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.06);
        } 

        .widget-info {
            display: flex;
            flex-direction: column;
            padding: 1rem;
        }

        .widget-info h3 { 
            margin: 20px 0;
        }

        /* CAMERA */

        .componentWindowArea {
            position:fixed;
            left:0;
            top:0;
            bottom:0;
            right:0;
            background-color:rgba(255, 255, 255, 0.5);
            display:none;
            transition: all ease .5s;
            justify-content: center;
            align-items: center;
            overflow-y:auto;
        }

        .component-wrapper {
            border-radius: 10px;
            box-shadow: rgb(153 153 153) 0px 0px 15px;
            padding: 0rem 1rem;
        }

        .component-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 1rem;
        }

        .component-name {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
        }

        .component-name h3 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .component-body {
            width: 900px;
            display: flex;
            padding: 0rem 1rem;
        }

        form {
          width: 100%;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }

        label {
            font-size: 18.72px;
            color: rgba(27, 43, 65, 0.69);
        }

        input,
        textarea {
          margin-bottom: 0.8rem;
          height: 2.2rem;
          outline: none;
          border-radius: 0.375rem;
          border: none;
          background-color: transparent;
          padding-left: 0.1875rem;
          
        }

        .input-wrapper, .input-wrapper-btn {
          padding: 1rem; 
        }

        input[type='submit'] {
          text-align: center;
          width: 100%;
        }

         /* RESET SELECT */
         select {
          appearance: none;
          background-color: transparent;
          border: none;
          padding: 0 1em 0 0;
          margin: 0;
          width: 100%;
          font-family: inherit;
          font-size: inherit;
          cursor: inherit;
          line-height: inherit;
          outline: none;
          border: none;
        }

        select {
          width: 100%;
          min-width: 15ch;
          max-width: 30ch;
          min-height: 36px;
         
          border-radius: 0.25em;
        
          padding: 0 0.25em;
          font-size: 1.25rem;
          cursor: pointer;
          line-height: 1.1;
          background-color: #fff;
          background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
               
          --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
          background: #dde1e7;
        
        }


        .btn {
          width: 11rem;
          height: 3.5rem;
          padding: 0 2rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
       
          color: white;
          font: 700 1rem var(--body-font);
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 0.25rem;
          cursor: pointer;
          opacity: 0.8;
          transition: all ease-in-out 0.3s;
          color: rgb(255, 255, 255);
          font-weight: bold;
          background-color: rgb(0, 106, 245);
          opacity: 0.9;
        }

        .btn:hover {
            opacity: 1;
        }

        .close {
            cursor: pointer;
            font-weight: bold;

            position: relative;
            top: 0;
        }


        /* END CAMERA */



        /* DRAGGABLE */

        .widget-header {
            width: 100%;
            font-size: 23px;
            font-weight: 500;
            padding: 17px 30px;
            border-bottom: 1px solid #ccc;
     
            cursor: pointer;
            margin-bottom: 1rem;
            height: 25%;
        }

        .widget-header.active {
            cursor: move;
            user-select: none;
        }

        .widget-header h4 {
            overflow: hidden;
        }

        .widget-body {
            height: 75%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

    `

    renderDefault() {
        return html``
    }



    renderBackground() {

        return html`

            <style>
                svg {           
                    width: 75px;
                    height: 75px;
                }

                .widget-wrapper {
                    border: 5px solid ${this.status ? 'green' : 'red'} !important;
                }
            </style>

            <div class="widget-wrapper" >
        
                <header @mousedown="${this.handleMouseDown}"  @dragstart="${this.handleDragStart}" @mouseup="${this.handleMouseUp}" class="widget-header"> <h3>${this.name}</h3></header>

                <div @click="${this.handleWidget}" class="widget-body">
                    <span class="image-wrapper" >
                <!--   ${Icon.camSVG} --> 
                <!-- ADD ON ERROR ON VAADIN -->
                 <img src="${this.svgPath}" alt="Your IoT Image" />

                    </span>
                </div>

            </div>
        `;
    }

    
    _updateCameraInfo(event: MouseEvent, id: string) {
        event.preventDefault()

        let body : any = {}


        let inputWrappers = this.shadowRoot?.querySelectorAll('.input-wrapper')

        /* GETS ALL THE SELECTED VALUES AND POP THEM IN THE BODY FOR HTTP REQUEST */
        inputWrappers?.forEach( (selected, index) => {

            var selectTag: any = selected.childNodes[3]
            var selectedValue: any = selectTag.options[selectTag.selectedIndex].value
     
            if(selectedValue === '') {
                body[selectTag.id] = this.data[index]
            }

            else {
                body[selectTag.id] = selectedValue 
            }
            
        })

        fetch(`http://localhost:8080/caminfo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
            body: JSON.stringify(body)
        })
        .then( (response) => {
            if(response.ok) return response.json();
            return Promise.reject(response);
        })
        .then( (data) => console.log(data))
        .catch( (error) => { console.warn('Something went wrong', error)}) 

    }


    renderCameraForm(data: String[]) {

        return html`
   
            <div class="componentWindowArea">

                <div class="component-wrapper">

                    <div class="component-name">
                        <h3>${this.name}</h3>
                        <div class="close" @click="${this.handleOnClose}">&#x2715</div>
                    </div>
                    

                    <div class="component-body">

                        <!-- SUBSTITUTE FOR CAMERA RECORDER -->
                        <div class="component-top">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/r6zIGXun57U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>


                        <form>

                            <div class="input-wrapper">
                                <label for="Resolution">Resolution: </label>
                                <select id="Resolution">
                                    <option value="" selected disabled hidden>${data[0]}</option>
                                    <option value="120x120">120x120</option>
                                    <option value="540x540">540x540</option>
                                    <option value="720x720">720x720</option>
                                    <option value="1080x1080">1080x1080</option>~
                                </select>

                                <span class="focus"></span>
                            </div>

                            <div class="input-wrapper">
                                <label for="Zoom">Zoom: </label>

                                <select id="Zoom">
                                    <option value="" selected disabled hidden>${data[1]}</option>
                                    <option value="1x">1x</option>
                                    <option value="5x">5x</option>
                                    <option value="10x">10x</option>
                                    <option value="20x">20x</option>
                                </select>
                            </div>

                            <div class="input-wrapper">
                                <label for="Snapshot">Snapshot: </label>

                                <select id="Snapshot">
                                    <option value="" selected disabled hidden>${data[2]}</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>

                            <div class="input-wrapper">
                                <label for="Angle">Angle: </label>

                                <select id="Angle">
                                    <option value="" selected disabled hidden>${data[3]}&deg;</option>
                                    <option value="0">0&deg;</option>
                                    <option value="90">90&deg;</option>
                                    <option value="180">180&deg;</option>
                                    <option value="360">360&deg;</option>
                                </select>
                            </div>

                            <div class="input-wrapper-btn">
                                <input type="submit" value="Submission" class="btn" @click="${(e: MouseEvent) => this._updateCameraInfo(e, this.id)}"/>
                            </div>

                        </form>

                    </div> 

                </div>

            </div>
            
        
        `;
    }



    render() {

        /* GET THE PROPERTIES FROM UPPER ELEMENT */
        this.data = this.widgetProperties.split(',');

        return html`
            ${this.renderBackground()}

            ${this.renderCameraForm(this.data)}
        `;
    }


    /* SECOND WINDOW FOR VIDEO FORM */
    handleWidget() {
        
        let widgetItem : any = this.shadowRoot?.querySelector('.componentWindowArea')

        let inputWrappers = this.shadowRoot?.querySelectorAll('.input-wrapper')

        /* RESET SELECTED PROP IF THE USER DIDNT SUBMIT THE FORM */
        inputWrappers?.forEach( (selected) => {
 
            var selectedTag: any = selected.childNodes[3]
            selectedTag.options[0].selected = true
             
        })

        widgetItem.style.display = 'flex'
    }

    handleOnClose() {
        let widgetItem : any = this.shadowRoot?.querySelector('.componentWindowArea')
        widgetItem.style.display = 'none'
    }

    /* DRAGGING ELEMENT */
    handleDrag({movementX, movementY} : any) {
    
        let widgetItem : any = this.shadowRoot?.querySelector('.widget-wrapper')

        let getStyle = window.getComputedStyle(widgetItem)
        let leftVal = parseInt(getStyle.left)
        let topVal = parseInt(getStyle.top)
        console.log(topVal, leftVal)

        widgetItem.style.left = `${leftVal + movementX}px`
        widgetItem.style.top = `${topVal + movementY}px`
        document.removeEventListener('mousemove', (e: MouseEvent) => {this.handleDrag(e)})
    }


    handleMouseDown(e: MouseEvent) {
   
        let widgetHeader : any = this.shadowRoot?.querySelector('header')
    
        console.log("mousedown")
        widgetHeader.addEventListener('mousemove', (e: MouseEvent) => {this.handleDrag(e)})
       
    }

    handleMouseUp(e: MouseEvent) {
        let widgetHeader : any = this.shadowRoot?.querySelector('header')

        widgetHeader.classList.remove('active')
        widgetHeader.removeEventListener('mousemove', (e: MouseEvent) => {this.handleDrag(e)})
    }

    handleDragStart(e: MouseEvent) {
        return false;
    }

}

declare global {
    interface HTMLElementTagNameMap {
      'widget-element': WidgetElement
    }
}