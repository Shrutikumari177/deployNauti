using {NAUTI_MAS} from '../db/schema';

service nauticalBTP{
    entity CARTYP as projection on NAUTI_MAS.CARTYP;
    entity CLASS as projection on NAUTI_MAS.CLASS;
    entity CURR as projection on NAUTI_MAS.CURR;
    entity EPATH as projection on NAUTI_MAS.EPATH;
    entity EVENT_MAS as projection on NAUTI_MAS.EVENT_MAS;
    entity MAS_BID as projection on NAUTI_MAS.MAS_BID;
    entity NAVOYGC as projection on NAUTI_MAS.NAVOYGC;
    entity NAVOYGUOM as projection on NAUTI_MAS.NAVOYGUOM;
    entity PORTMASTER as projection on NAUTI_MAS.PORTMASTER;
    entity REF_DOC_S as projection on NAUTI_MAS.REF_DOC_S;
    entity VOYTYP as projection on NAUTI_MAS.VOYTYP;
    entity ZBP_MAS as projection on NAUTI_MAS.ZBP_MAS;
    entity ZCHAT_REL as projection on NAUTI_MAS.ZCHAT_REL;
    entity ZCOUNTRY as projection on NAUTI_MAS.ZCOUNTRY;
    entity ZUSER as projection on NAUTI_MAS.ZUSER;
    entity ZPORT as projection on NAUTI_MAS.ZPORT;
    entity ZVOY_REL as projection on NAUTI_MAS.ZVOY_REL;
}