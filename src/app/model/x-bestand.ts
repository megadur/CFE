import { Em } from './em';
import { Ins } from './ins';
import { Par } from './par';
import { Rnr } from './rnr';
import { Spr } from './spr';
import { Stock } from './stock';

export class XBestand {
    id: string;
    stock: Stock;
    em: Em;
    par: Par;
    rnr: Rnr;
    spr: Spr;
    ins: Ins;
}
