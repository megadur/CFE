import { Em } from './em';
import { Ins } from './ins';
import { Par } from './par';
import { Rnr } from './rnr';
import { Spr } from './spr';
import { Stock } from './stock';
import { XAuftrag } from './x_auftrag';
import { XAuftragExt } from './x_auftrag_ext';
import { XError } from './x_error';
import { XMessage } from './x_message';

export class XBestandExt {
    id: string;
    stock: Stock;
    em: Em;
    par: Par;
    rnr: Rnr;
    spr: Spr;
    ins: Ins;
    xai: XAuftrag;
    xae: XAuftragExt;
    msg: XMessage;
    err: XError;
}
