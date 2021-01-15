import html from '../templates/drawer.js';

export class Drawer extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-drawer', Drawer);