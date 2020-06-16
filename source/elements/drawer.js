import { Quantum, define } from '../../references/quantum.js';
import { drawer } from '../templates/drawer.js';

export class Drawer extends Quantum {
    constructor() {
        super(drawer);
    }
}

define(Drawer);