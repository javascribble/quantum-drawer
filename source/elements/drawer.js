import { Component } from '../../references/quantum.js';

export class Drawer extends Component {
    constructor() {
        super();
    }

    static template = document.querySelector('#quantum-drawer');

    static attributes = [];
}

customElements.define('quantum-drawer', Drawer);