using {
    Country,
   
} from '@sap/cds/common';

//Voyage Master 
namespace NAUTI_MAS;


//voyage type table
entity VOYTYP {
   key VOYCD  : String(4);     //Voyage code
       VOYDES : String(40) @mandatory @assert.notNull; //Voyage Code Description
};

//Cargo Type Master table
entity CARTYP {

   key CARCD  : String(4);//Vessel Type
    CARDES : String(40)@mandatory @assert.notNull; //Cargo type description
};

//Currency Master Data type table
entity CURR {

   Key NAVOYCUR     : String(4); //Currency Type

    NAVOYGCURDES : String(40) //Currency Description


};



//Bid Master Data table
entity MAS_BID{
   key BNAME: String(12)@assert.unique @mandatory @assert.notNull;
   key CODE : String(10)@assert.unique @mandatory @assert.notNull; //This field represents a unique Code
     VALUE: String(50); //value
     CVALUE:String(13);
     CUNIT:String(5);  
     DATATYPE : String(3); //data type
     TABLENAME: String(20);
     MULTI_CHOICE:Boolean;
}


//Port Master Code table
entity ZPORT {

   key ZF_VALUE : String(50); //Type of currency

    ZF_DESC  : String(50); // field description

    COUNTRY  : Country; //country

    COUNTRYN : Country; //country


};

//Unit of Measurement table
entity NAVOYGUOM {
   KEY UOM    : String(3); //unit of measurement
    UOMDES : String(30); //UOM Description


};

//Cost Component table
entity NAVOYGC {

   key COSTCODE : String(4)@assert.unique @mandatory @assert.notNull;
    //cost code

    CSTCODES : String(35); //cost code description


};

//Event Master Data table
entity EVENT_MAS {

   key EVTTY : String(20)    @assert.unique @mandatory @assert.notNull; //Event type

    TEXT  : String(40); //Event text description


};

//Reference Document Search Help table
entity REF_DOC_S {
    DOCIND  : String(1) ;//Reference document indicator (PSX)
    DOCDESC : String(20) //Doc Desc
};
entity ZBP_MAS{
key LIFNR :String(10);
    PARTNER_ROLE :String(7);
    ANRED :String(15);
    NAME1 :String(35);
    NAME2 :String(35);
    NAME3: String(35);
    SORT1 : String(20);
    STR_SUPPL1 : String(40);
    STR_SUPPL2 : String(40);
    HOUSE_NUM1 :String(10);
    STRAS :String(60);
    PSTLZ :String(10);
    ORT01 :String(35);
    LAND1 :String(3);
    REGIO :String(3);
    TIME_ZONE :String(6);
    SPRAS :String(1);
    TELF1 :String(16);
    TELF2 :String(16);
    TELFX :String(31);
    SMTP_ADDR :String(241);
    ERDAT :String(8);
    DATE_TO :String(8);    

};
//Release Strategy for Maintain Group table
entity ZUSER {
    
key ZUSERNAME :String(12)@assert.unique @mandatory @assert.notNull;//User Name 
    ZGROUP :String(12);//User ID group 


};
//Release Strategy for Chartering table
entity ZCHAT_REL{  
    RELS :String(10);//Release Strategy 
    VOYTY :String(4);//Voyage Type 
    VESTY :String(4);//Vessel Type
    ZGROUP :String(12);//User ID group 
key APP1 :String(12)@assert.unique @mandatory @assert.notNull;//Username 
};
//Release Strategy for Voyage table
entity ZVOY_REL{ 
    RELS :String(10);//Release Strategy  Code
    VOYTY :String(4);//Voyage Type 
    VESTY :String(4);//Vessel Type 
key ZGROUP :String(12)@assert.unique @mandatory @assert.notNull;//User ID group 
    APP1 :String(12)@assert.unique @mandatory @assert.notNull;//Username 
};
// port loc master table
entity PORTMASTER{
    key COUNTRY: String(12)@assert.unique @mandatory @assert.notNull;
    PORTC : String(15)@assert.unique @mandatory @assert.notNull;
    PORTN: String(50); //value
    REANCHO:String;
    LATITUDE:String;  
    LONGITUDE : String;
    COUNTRYN: String(50);
    LOCID:String(10);
    IND:String(1);
}
// country master table 
entity ZCOUNTRY {
Key ZF_VALUE :String(50);//Value 
    ZF_DESC :String(50);//field description
};
entity EPATH {
  
        IND :String(1);//Process indicator 
key     API_KEY :String(150);//Marine Traffic API KEY 
        API_URL :String(255);//PATH 
        EPATH :String(255);//PATH 
};
entity CLASS{
    ZF_VALUE:String(50);
    ZF_DESC:String(50);
}







