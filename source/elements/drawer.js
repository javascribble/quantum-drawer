import html from '../templates/drawer.js';

const { Component, template, define } = quantum;

export class Drawer extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-drawer', Drawer);