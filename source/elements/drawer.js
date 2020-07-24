import html from '../templates/drawer.js';

export class Drawer extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-drawer', Drawer);