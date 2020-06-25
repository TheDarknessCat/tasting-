
function UserInput  (obj){
return `BEGIN:VCARD
VERSION:4.0
N:${obj.FirstName};${obj.LastName};;${obj.Mr_or_Mrs};
FN:${obj.FullName}
ORG:${obj.CompanyName}
ITLE:${obj.Title}
PHOTO;'${obj.photo}'
TEL;TYPE=work,voice;VALUE=uri:tel:${obj.WorkPhNo}
TEL;TYPE=home,voice;VALUE=uri:tel:${obj.HomePhNo}
ADR;TYPE=WORK;PREF=1;LABEL="${obj.WorkADR_R}":;;${obj.WorkADR}
ADR;TYPE=HOME;LABEL="${obj.HomeADR_R}":;;${obj.HomeADR}
EMAIL:${obj.Gmail}
REV:${obj.REV}
x-qq:21588891
END:VCARD`
                
                };
    
        console.log("*_______________#Running_vcfFileSaving.js!___________*")
module.exports = {
    UserInput : UserInput
}