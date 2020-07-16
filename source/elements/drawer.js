import { Component, template } from '../../references/quantum.js';
import html from '../templates/drawer.js';

export class Drawer extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-drawer', Drawer);