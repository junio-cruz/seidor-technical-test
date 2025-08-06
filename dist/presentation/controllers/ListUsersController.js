var Qe=Object.create;var h=Object.defineProperty;var Ye=Object.getOwnPropertyDescriptor;var et=Object.getOwnPropertyNames;var tt=Object.getPrototypeOf,rt=Object.prototype.hasOwnProperty;var p=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),at=(t,e)=>{for(var a in e)h(t,a,{get:e[a],enumerable:!0})},N=(t,e,a,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of et(e))!rt.call(t,r)&&r!==a&&h(t,r,{get:()=>e[r],enumerable:!(l=Ye(e,r))||l.enumerable});return t};var it=(t,e,a)=>(a=t!=null?Qe(tt(t)):{},N(e||!t||!t.__esModule?h(a,"default",{value:t,enumerable:!0}):a,t)),lt=t=>N(h({},"__esModule",{value:!0}),t);var M=p((Lt,D)=>{"use strict";function nt(t){return typeof t!="object"||Array.isArray(t)||t==null?!1:Object.keys(t).length>0}function z(t,e,a={}){for(let l in e)if(nt(e[l]))t[l]=t[l]||{},z(t[l],e[l],a);else{if(a.skipIfExist===!0&&t[l]!==void 0)continue;t[l]=e[l]}return t}D.exports=z});var J=p((zt,H)=>{function st(t){return t===void 0||t===null?"":typeof t.toString=="function"?t:typeof t}H.exports=(t,e,a)=>t.replace(e,st(a))});var X=p((Dt,B)=>{"use strict";B.exports={required:"The '{field}' field is required.",string:"The '{field}' field must be a string.",stringEmpty:"The '{field}' field must not be empty.",stringMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",stringMax:"The '{field}' field length must be less than or equal to {expected} characters long.",stringLength:"The '{field}' field length must be {expected} characters long.",stringPattern:"The '{field}' field fails to match the required pattern.",stringContains:"The '{field}' field must contain the '{expected}' text.",stringEnum:"The '{field}' field does not match any of the allowed values.",stringNumeric:"The '{field}' field must be a numeric string.",stringAlpha:"The '{field}' field must be an alphabetic string.",stringAlphanum:"The '{field}' field must be an alphanumeric string.",stringAlphadash:"The '{field}' field must be an alphadash string.",stringHex:"The '{field}' field must be a hex string.",stringSingleLine:"The '{field}' field must be a single line string.",stringBase64:"The '{field}' field must be a base64 string.",number:"The '{field}' field must be a number.",numberMin:"The '{field}' field must be greater than or equal to {expected}.",numberMax:"The '{field}' field must be less than or equal to {expected}.",numberEqual:"The '{field}' field must be equal to {expected}.",numberNotEqual:"The '{field}' field can't be equal to {expected}.",numberInteger:"The '{field}' field must be an integer.",numberPositive:"The '{field}' field must be a positive number.",numberNegative:"The '{field}' field must be a negative number.",array:"The '{field}' field must be an array.",arrayEmpty:"The '{field}' field must not be an empty array.",arrayMin:"The '{field}' field must contain at least {expected} items.",arrayMax:"The '{field}' field must contain less than or equal to {expected} items.",arrayLength:"The '{field}' field must contain {expected} items.",arrayContains:"The '{field}' field must contain the '{expected}' item.",arrayUnique:"The '{actual}' value in '{field}' field does not unique the '{expected}' values.",arrayEnum:"The '{actual}' value in '{field}' field does not match any of the '{expected}' values.",tuple:"The '{field}' field must be an array.",tupleEmpty:"The '{field}' field must not be an empty array.",tupleLength:"The '{field}' field must contain {expected} items.",boolean:"The '{field}' field must be a boolean.",currency:"The '{field}' must be a valid currency format",date:"The '{field}' field must be a Date.",dateMin:"The '{field}' field must be greater than or equal to {expected}.",dateMax:"The '{field}' field must be less than or equal to {expected}.",enumValue:"The '{field}' field value '{expected}' does not match any of the allowed values.",equalValue:"The '{field}' field value must be equal to '{expected}'.",equalField:"The '{field}' field value must be equal to '{expected}' field value.",forbidden:"The '{field}' field is forbidden.",function:"The '{field}' field must be a function.",email:"The '{field}' field must be a valid e-mail.",emailEmpty:"The '{field}' field must not be empty.",emailMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",emailMax:"The '{field}' field length must be less than or equal to {expected} characters long.",luhn:"The '{field}' field must be a valid checksum luhn.",mac:"The '{field}' field must be a valid MAC address.",object:"The '{field}' must be an Object.",objectStrict:"The object '{field}' contains forbidden keys: '{actual}'.",objectMinProps:"The object '{field}' must contain at least {expected} properties.",objectMaxProps:"The object '{field}' must contain {expected} properties at most.",url:"The '{field}' field must be a valid URL.",urlEmpty:"The '{field}' field must not be empty.",uuid:"The '{field}' field must be a valid UUID.",uuidVersion:"The '{field}' field must be a valid UUID version provided.",classInstanceOf:"The '{field}' field must be an instance of the '{expected}' class.",objectID:"The '{field}' field must be an valid ObjectID",record:"The '{field}' must be an Object."}});var K=p((Mt,Z)=>{"use strict";Z.exports=function(){let t=[];return t.push(`
		return value;
	`),{source:t.join(`
`)}}});var W=p((Ht,G)=>{"use strict";G.exports=function({schema:t,messages:e},a,l){let r=[],i=!1;if(t.convert===!0&&(i=!0,r.push(`
			if (!Array.isArray(value) && value != null) {
				value = [value];
			}
		`)),r.push(`
		if (!Array.isArray(value)) {
			${this.makeError({type:"array",actual:"value",messages:e})}
			return value;
		}

		var len = value.length;
	`),t.empty===!1&&r.push(`
			if (len === 0) {
				${this.makeError({type:"arrayEmpty",actual:"value",messages:e})}
			}
		`),t.min!=null&&r.push(`
			if (len < ${t.min}) {
				${this.makeError({type:"arrayMin",expected:t.min,actual:"len",messages:e})}
			}
		`),t.max!=null&&r.push(`
			if (len > ${t.max}) {
				${this.makeError({type:"arrayMax",expected:t.max,actual:"len",messages:e})}
			}
		`),t.length!=null&&r.push(`
			if (len !== ${t.length}) {
				${this.makeError({type:"arrayLength",expected:t.length,actual:"len",messages:e})}
			}
		`),t.contains!=null&&r.push(`
			if (value.indexOf(${JSON.stringify(t.contains)}) === -1) {
				${this.makeError({type:"arrayContains",expected:JSON.stringify(t.contains),actual:"value",messages:e})}
			}
		`),t.unique===!0&&r.push(`
			if(len > (new Set(value)).size) {
				${this.makeError({type:"arrayUnique",expected:"Array.from(new Set(value.filter((item, index) => value.indexOf(item) !== index)))",actual:"value",messages:e})}
			}
		`),t.enum!=null){let n=JSON.stringify(t.enum);r.push(`
			for (var i = 0; i < value.length; i++) {
				if (${n}.indexOf(value[i]) === -1) {
					${this.makeError({type:"arrayEnum",expected:'"'+t.enum.join(", ")+'"',actual:"value[i]",messages:e})}
				}
			}
		`)}if(t.items!=null){r.push(`
			var arr = value;
			var parentField = field;
			for (var i = 0; i < arr.length; i++) {
				value = arr[i];
		`);let n=a+"[]",u=this.getRuleFromSchema(t.items),s=`arr[i] = ${l.async?"await ":""}context.fn[%%INDEX%%](arr[i], (parentField ? parentField : "") + "[" + i + "]", parent, errors, context)`;r.push(this.compileRule(u,l,n,s,"arr[i]")),r.push(`
			}
		`),r.push(`
		return arr;
	`)}else r.push(`
		return value;
	`);return{sanitized:i,source:r.join(`
`)}}});var Y=p((Jt,Q)=>{"use strict";Q.exports=function({schema:t,messages:e},a,l){let r=[],i=!1;return r.push(`
		var origValue = value;
	`),t.convert===!0&&(i=!0,r.push(`
			if (typeof value !== "boolean") {
				if (
				value === 1
				|| value === "true"
				|| value === "1"
				|| value === "on"
				) {
					value = true;
				} else if (
				value === 0
				|| value === "false"
				|| value === "0"
				|| value === "off"
				) {
					value = false;
				}
			}
		`)),r.push(`
		if (typeof value !== "boolean") {
			${this.makeError({type:"boolean",actual:"origValue",messages:e})}
		}
		
		return value;
	`),{sanitized:i,source:r.join(`
`)}}});var te=p((Bt,ee)=>{"use strict";ee.exports=function({schema:t,messages:e,index:a},l,r){let i=[],n=t.instanceOf.name?t.instanceOf.name:"<UnknowClass>";return r.customs[a]?r.customs[a].schema=t:r.customs[a]={schema:t},i.push(`
		if (!(value instanceof context.customs[${a}].schema.instanceOf))
			${this.makeError({type:"classInstanceOf",actual:"value",expected:"'"+n+"'",messages:e})}
	`),i.push(`
		return value;
	`),{source:i.join(`
`)}}});var ae=p((Xt,re)=>{"use strict";re.exports=function({schema:t,messages:e,index:a},l,r){let i=[];return i.push(`
		${this.makeCustomValidator({fnName:"check",path:l,schema:t,messages:e,context:r,ruleIndex:a})}
		return value;
	`),{source:i.join(`
`)}}});var le=p((Zt,ie)=>{"use strict";var ut="(?=.*\\d)^(-?~1|~1-?)(([0-9]\\d{0,2}(~2\\d{3})*)|0)?(\\~3\\d{1,2})?$";ie.exports=function({schema:t,messages:e},a,l){let r=t.currencySymbol||null,i=t.thousandSeparator||",",n=t.decimalSeparator||".",u=t.customRegex,s=!t.symbolOptional,o=ut.replace(/~1/g,r?`\\${r}${s?"":"?"}`:"").replace("~2",i).replace("~3",n),c=[];return c.push(`
		if (!value.match(${u||new RegExp(o)})) {
			${this.makeError({type:"currency",actual:"value",messages:e})}
			return value;
		}

		return value;
	`),{source:c.join(`
`)}}});var se=p((Kt,ne)=>{"use strict";ne.exports=function({schema:t,messages:e},a,l){let r=[],i=!1;return r.push(`
		var origValue = value;
	`),t.convert===!0&&(i=!0,r.push(`
			if (!(value instanceof Date)) {
				value = new Date(value.length && !isNaN(+value) ? +value : value);
			}
		`)),r.push(`
		if (!(value instanceof Date) || isNaN(value.getTime()))
			${this.makeError({type:"date",actual:"origValue",messages:e})}

		return value;
	`),{sanitized:i,source:r.join(`
`)}}});var oe=p((Gt,ue)=>{"use strict";var ot=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,pt=/^\S+@\S+\.\S+$/;ue.exports=function({schema:t,messages:e},a,l){let r=[],i=t.mode=="precise"?ot:pt,n=!1;return r.push(`
		if (typeof value !== "string") {
			${this.makeError({type:"string",actual:"value",messages:e})}
			return value;
		}
	`),t.empty?r.push(`
			if (value.length === 0) return value;
		`):r.push(`
			if (value.length === 0) {
				${this.makeError({type:"emailEmpty",actual:"value",messages:e})}
				return value;
			}
		`),t.normalize&&(n=!0,r.push(`
			value = value.trim().toLowerCase();
		`)),t.min!=null&&r.push(`
			if (value.length < ${t.min}) {
				${this.makeError({type:"emailMin",expected:t.min,actual:"value.length",messages:e})}
			}
		`),t.max!=null&&r.push(`
			if (value.length > ${t.max}) {
				${this.makeError({type:"emailMax",expected:t.max,actual:"value.length",messages:e})}
			}
		`),r.push(`
		if (!${i.toString()}.test(value)) {
			${this.makeError({type:"email",actual:"value",messages:e})}
		}

		return value;
	`),{sanitized:n,source:r.join(`
`)}}});var ce=p((Wt,pe)=>{"use strict";pe.exports=function({schema:t,messages:e},a,l){return{source:`
			if (${JSON.stringify(t.values||[])}.indexOf(value) === -1)
				${this.makeError({type:"enumValue",expected:'"'+t.values.join(", ")+'"',actual:"value",messages:e})}
			
			return value;
		`}}});var de=p((Qt,fe)=>{"use strict";fe.exports=function({schema:t,messages:e},a,l){let r=[];return t.field?(t.strict?r.push(`
				if (value !== parent["${t.field}"])
			`):r.push(`
				if (value != parent["${t.field}"])
			`),r.push(`
				${this.makeError({type:"equalField",actual:"value",expected:JSON.stringify(t.field),messages:e})}
		`)):(t.strict?r.push(`
				if (value !== ${JSON.stringify(t.value)})
			`):r.push(`
				if (value != ${JSON.stringify(t.value)})
			`),r.push(`
				${this.makeError({type:"equalValue",actual:"value",expected:JSON.stringify(t.value),messages:e})}
		`)),r.push(`
		return value;
	`),{source:r.join(`
`)}}});var ye=p((Yt,he)=>{"use strict";he.exports=function({schema:e,messages:a},l,r){let i=[];return i.push(`
		if (value !== null && value !== undefined) {
	`),e.remove?i.push(`
			return undefined;
		`):i.push(`
			${this.makeError({type:"forbidden",actual:"value",messages:a})}
		`),i.push(`
		}

		return value;
	`),{source:i.join(`
`)}}});var ve=p((er,me)=>{"use strict";me.exports=function({schema:t,messages:e},a,l){return{source:`
			if (typeof value !== "function")
				${this.makeError({type:"function",actual:"value",messages:e})}

			return value;
		`}}});var be=p((tr,ge)=>{"use strict";ge.exports=function({schema:t,messages:e},a,l){let r=[];r.push(`
		var hasValid = false;
		var newVal = value;
		var checkErrors = [];
		var errorsSize = errors.length;
	`);for(let i=0;i<t.rules.length;i++){r.push(`
			if (!hasValid) {
				var _errors = [];
		`);let n=this.getRuleFromSchema(t.rules[i]);r.push(this.compileRule(n,l,a,`var tmpVal = ${l.async?"await ":""}context.fn[%%INDEX%%](value, field, parent, _errors, context);`,"tmpVal")),r.push(`
				if (errors.length == errorsSize && _errors.length == 0) {
					hasValid = true;
					newVal = tmpVal;
				} else {
					Array.prototype.push.apply(checkErrors, [].concat(_errors, errors.splice(errorsSize)));
				}
			}
		`)}return r.push(`
		if (!hasValid) {
			Array.prototype.push.apply(errors, checkErrors);
		}

		return newVal;
	`),{source:r.join(`
`)}}});var $e=p((rr,xe)=>{"use strict";xe.exports=function({schema:t,messages:e},a,l){let r=[];r.push(`
		var origValue = value;
	`);let i=!1;return t.convert===!0&&(i=!0,r.push(`
			if (typeof value !== "number") {
				value = Number(value);
			}
		`)),r.push(`
		if (typeof value !== "number" || isNaN(value) || !isFinite(value)) {
			${this.makeError({type:"number",actual:"origValue",messages:e})}
			return value;
		}
	`),t.min!=null&&r.push(`
			if (value < ${t.min}) {
				${this.makeError({type:"numberMin",expected:t.min,actual:"origValue",messages:e})}
			}
		`),t.max!=null&&r.push(`
			if (value > ${t.max}) {
				${this.makeError({type:"numberMax",expected:t.max,actual:"origValue",messages:e})}
			}
		`),t.equal!=null&&r.push(`
			if (value !== ${t.equal}) {
				${this.makeError({type:"numberEqual",expected:t.equal,actual:"origValue",messages:e})}
			}
		`),t.notEqual!=null&&r.push(`
			if (value === ${t.notEqual}) {
				${this.makeError({type:"numberNotEqual",expected:t.notEqual,actual:"origValue",messages:e})}
			}
		`),t.integer===!0&&r.push(`
			if (value % 1 !== 0) {
				${this.makeError({type:"numberInteger",actual:"origValue",messages:e})}
			}
		`),t.positive===!0&&r.push(`
			if (value <= 0) {
				${this.makeError({type:"numberPositive",actual:"origValue",messages:e})}
			}
		`),t.negative===!0&&r.push(`
			if (value >= 0) {
				${this.makeError({type:"numberNegative",actual:"origValue",messages:e})}
			}
		`),r.push(`
		return value;
	`),{sanitized:i,source:r.join(`
`)}}});var Se=p((ar,Ee)=>{"use strict";var ct=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,ft=/["'\\\n\r\u2028\u2029]/g;function k(t){return t.replace(ft,function(e){switch(e){case'"':case"'":case"\\":return"\\"+e;case`
`:return"\\n";case"\r":return"\\r";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029"}})}Ee.exports=function({schema:t,messages:e},a,l){let r=[];r.push(`
		if (typeof value !== "object" || value === null || Array.isArray(value)) {
			${this.makeError({type:"object",actual:"value",messages:e})}
			return value;
		}
	`);let i=t.properties||t.props;if(i){r.push("var parentObj = value;"),r.push("var parentField = field;");let n=Object.keys(i);for(let u=0;u<n.length;u++){let s=n[u],o=k(s),c=ct.test(o)?`.${o}`:`['${o}']`,f=`parentObj${c}`,w=(a?a+".":"")+s,V=i[s].label,Ke=V?`'${k(V)}'`:void 0;r.push(`
// Field: ${k(w)}`),r.push(`field = parentField ? parentField + "${c}" : "${o}";`),r.push(`value = ${f};`),r.push(`label = ${Ke}`);let Ge=this.getRuleFromSchema(i[s]),We=`
				${f} = ${l.async?"await ":""}context.fn[%%INDEX%%](value, field, parentObj, errors, context, label);
			`;r.push(this.compileRule(Ge,l,w,We,f)),this.opts.haltOnFirstError===!0&&r.push("if (errors.length) return parentObj;")}if(t.strict){let u=Object.keys(i);r.push(`
				field = parentField;
				var invalidProps = [];
				var props = Object.keys(parentObj);

				for (let i = 0; i < props.length; i++) {
					if (${JSON.stringify(u)}.indexOf(props[i]) === -1) {
						invalidProps.push(props[i]);
					}
				}
				if (invalidProps.length) {
			`),t.strict==="remove"?(r.push(`
					if (errors.length === 0) {
				`),r.push(`
						invalidProps.forEach(function(field) {
							delete parentObj[field];
						});
				`),r.push(`
					}
				`)):r.push(`
					${this.makeError({type:"objectStrict",expected:'"'+u.join(", ")+'"',actual:"invalidProps.join(', ')",messages:e})}
				`),r.push(`
				}
			`)}}return(t.minProps!=null||t.maxProps!=null)&&(t.strict?r.push(`
				props = Object.keys(${i?"parentObj":"value"});
			`):r.push(`
				var props = Object.keys(${i?"parentObj":"value"});
				${i?"field = parentField;":""}
			`)),t.minProps!=null&&r.push(`
			if (props.length < ${t.minProps}) {
				${this.makeError({type:"objectMinProps",expected:t.minProps,actual:"props.length",messages:e})}
			}
		`),t.maxProps!=null&&r.push(`
			if (props.length > ${t.maxProps}) {
				${this.makeError({type:"objectMaxProps",expected:t.maxProps,actual:"props.length",messages:e})}
			}
		`),i?r.push(`
			return parentObj;
		`):r.push(`
			return value;
		`),{source:r.join(`
`)}}});var Oe=p((ir,ke)=>{"use strict";ke.exports=function({schema:t,messages:e,index:a},l,r){let i=[];return r.customs[a]?r.customs[a].schema=t:r.customs[a]={schema:t},i.push(`
		const ObjectID = context.customs[${a}].schema.ObjectID;
		if (!ObjectID.isValid(value)) {
			${this.makeError({type:"objectID",actual:"value",messages:e})}
			return;
		}
	`),t.convert===!0?i.push("return new ObjectID(value)"):t.convert==="hexString"?i.push("return value.toString()"):i.push("return value"),{source:i.join(`
`)}}});var je=p((lr,Te)=>{function dt(t){for(let e in t.messages)e.startsWith("string")&&(t.messages[e]=t.messages[e].replace(" field "," key "))}Te.exports=function({schema:e,messages:a},l,r){let i=[];i.push(`
		if (typeof value !== "object" || value === null || Array.isArray(value)) {
			${this.makeError({type:"record",actual:"value",messages:a})}
			return value;
		}
	`);let n=e.key||"string",u=e.value||"any";i.push(`
		const record = value;
		let sanitizedKey, sanitizedValue;
		const result = {};
		for (let key in value) {
	`),i.push("sanitizedKey = value = key;");let s=this.getRuleFromSchema(n);dt(s);let o=`
		sanitizedKey = ${r.async?"await ":""}context.fn[%%INDEX%%](key, field ? field + "." + key : key, record, errors, context);
	`;i.push(this.compileRule(s,r,null,o,"sanitizedKey")),i.push("sanitizedValue = value = record[key];");let c=this.getRuleFromSchema(u),f=`
		sanitizedValue = ${r.async?"await ":""}context.fn[%%INDEX%%](value, field ? field + "." + key : key, record, errors, context);
	`;return i.push(this.compileRule(c,r,`${l}[key]`,f,"sanitizedValue")),i.push("result[sanitizedKey] = sanitizedValue;"),i.push(`
		}
	`),i.push("return result;"),{source:i.join(`
`)}}});var Ae=p((nr,Re)=>{"use strict";var ht=/^-?[0-9]\d*(\.\d+)?$/,yt=/^[a-zA-Z]+$/,mt=/^[a-zA-Z0-9]+$/,vt=/^[a-zA-Z0-9_-]+$/,gt=/^[0-9a-fA-F]+$/,bt=/^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?$/;Re.exports=function({schema:e,messages:a},l,r){let i=[],n=!1;if(e.convert===!0&&(n=!0,i.push(`
			if (typeof value !== "string") {
				value = String(value);
			}
		`)),i.push(`
		if (typeof value !== "string") {
			${this.makeError({type:"string",actual:"value",messages:a})}
			return value;
		}

		var origValue = value;
	`),e.trim&&(n=!0,i.push(`
			value = value.trim();
		`)),e.trimLeft&&(n=!0,i.push(`
			value = value.trimLeft();
		`)),e.trimRight&&(n=!0,i.push(`
			value = value.trimRight();
		`)),e.padStart){n=!0;let u=e.padChar!=null?e.padChar:" ";i.push(`
			value = value.padStart(${e.padStart}, ${JSON.stringify(u)});
		`)}if(e.padEnd){n=!0;let u=e.padChar!=null?e.padChar:" ";i.push(`
			value = value.padEnd(${e.padEnd}, ${JSON.stringify(u)});
		`)}if(e.lowercase&&(n=!0,i.push(`
			value = value.toLowerCase();
		`)),e.uppercase&&(n=!0,i.push(`
			value = value.toUpperCase();
		`)),e.localeLowercase&&(n=!0,i.push(`
			value = value.toLocaleLowerCase();
		`)),e.localeUppercase&&(n=!0,i.push(`
			value = value.toLocaleUpperCase();
		`)),i.push(`
			var len = value.length;
	`),e.empty===!1?i.push(`
			if (len === 0) {
				${this.makeError({type:"stringEmpty",actual:"value",messages:a})}
			}
		`):e.empty===!0&&i.push(`
			if (len === 0) {
				return value;
			}
		`),e.min!=null&&i.push(`
			if (len < ${e.min}) {
				${this.makeError({type:"stringMin",expected:e.min,actual:"len",messages:a})}
			}
		`),e.max!=null&&i.push(`
			if (len > ${e.max}) {
				${this.makeError({type:"stringMax",expected:e.max,actual:"len",messages:a})}
			}
		`),e.length!=null&&i.push(`
			if (len !== ${e.length}) {
				${this.makeError({type:"stringLength",expected:e.length,actual:"len",messages:a})}
			}
		`),e.pattern!=null){let u=e.pattern;typeof e.pattern=="string"&&(u=new RegExp(e.pattern,e.patternFlags)),i.push(`
			if (!${u.toString()}.test(value)) {
				${this.makeError({type:"stringPattern",expected:`"${u.toString().replace(/"/g,"\\$&")}"`,actual:"origValue",messages:a})}
			}
		`)}if(e.contains!=null&&i.push(`
			if (value.indexOf("${e.contains}") === -1) {
				${this.makeError({type:"stringContains",expected:'"'+e.contains+'"',actual:"origValue",messages:a})}
			}
		`),e.enum!=null){let u=JSON.stringify(e.enum);i.push(`
			if (${u}.indexOf(value) === -1) {
				${this.makeError({type:"stringEnum",expected:'"'+e.enum.join(", ")+'"',actual:"origValue",messages:a})}
			}
		`)}return e.numeric===!0&&i.push(`
			if (!${ht.toString()}.test(value) ) {
				${this.makeError({type:"stringNumeric",actual:"origValue",messages:a})}
			}
		`),e.alpha===!0&&i.push(`
			if(!${yt.toString()}.test(value)) {
				${this.makeError({type:"stringAlpha",actual:"origValue",messages:a})}
			}
		`),e.alphanum===!0&&i.push(`
			if(!${mt.toString()}.test(value)) {
				${this.makeError({type:"stringAlphanum",actual:"origValue",messages:a})}
			}
		`),e.alphadash===!0&&i.push(`
			if(!${vt.toString()}.test(value)) {
				${this.makeError({type:"stringAlphadash",actual:"origValue",messages:a})}
			}
		`),e.hex===!0&&i.push(`
			if(value.length % 2 !== 0 || !${gt.toString()}.test(value)) {
				${this.makeError({type:"stringHex",actual:"origValue",messages:a})}
			}
		`),e.singleLine===!0&&i.push(`
			if(value.includes("\\n")) {
				${this.makeError({type:"stringSingleLine",messages:a})}
			}
		`),e.base64===!0&&i.push(`
			if(!${bt.toString()}.test(value)) {
				${this.makeError({type:"stringBase64",actual:"origValue",messages:a})}
			}
		`),i.push(`
		return value;
	`),{sanitized:n,source:i.join(`
`)}}});var Ve=p((sr,we)=>{"use strict";we.exports=function({schema:t,messages:e},a,l){let r=[];if(t.items!=null){if(!Array.isArray(t.items))throw new Error(`Invalid '${t.type}' schema. The 'items' field must be an array.`);if(t.items.length===0)throw new Error(`Invalid '${t.type}' schema. The 'items' field must not be an empty array.`)}if(r.push(`
		if (!Array.isArray(value)) {
			${this.makeError({type:"tuple",actual:"value",messages:e})}
			return value;
		}

		var len = value.length;
	`),t.empty===!1&&r.push(`
			if (len === 0) {
				${this.makeError({type:"tupleEmpty",actual:"value",messages:e})}
				return value;
			}
		`),t.items!=null){r.push(`
			if (${t.empty} !== false && len === 0) {
				return value;
			}

			if (len !== ${t.items.length}) {
				${this.makeError({type:"tupleLength",expected:t.items.length,actual:"len",messages:e})}
				return value;
			}
		`),r.push(`
			var arr = value;
			var parentField = field;
		`);for(let i=0;i<t.items.length;i++){r.push(`
			value = arr[${i}];
		`);let n=`${a}[${i}]`,u=this.getRuleFromSchema(t.items[i]),s=`
			arr[${i}] = ${l.async?"await ":""}context.fn[%%INDEX%%](arr[${i}], (parentField ? parentField : "") + "[" + ${i} + "]", parent, errors, context);
		`;r.push(this.compileRule(u,l,n,s,`arr[${i}]`))}r.push(`
		return arr;
	`)}else r.push(`
		return value;
	`);return{source:r.join(`
`)}}});var qe=p((ur,Ne)=>{"use strict";var xt=/^https?:\/\/\S+/;Ne.exports=function({schema:t,messages:e},a,l){let r=[];return r.push(`
		if (typeof value !== "string") {
			${this.makeError({type:"string",actual:"value",messages:e})}
			return value;
		}
	`),t.empty?r.push(`
			if (value.length === 0) return value;
		`):r.push(`
			if (value.length === 0) {
				${this.makeError({type:"urlEmpty",actual:"value",messages:e})}
				return value;
			}
		`),r.push(`
		if (!${xt.toString()}.test(value)) {
			${this.makeError({type:"url",actual:"value",messages:e})}
		}

		return value;
	`),{source:r.join(`
`)}}});var Ce=p((or,Ue)=>{"use strict";var $t=/^([0-9a-f]{8}-[0-9a-f]{4}-[1-6][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}|[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12})$/i;Ue.exports=function({schema:t,messages:e},a){let l=[];return l.push(`
		if (typeof value !== "string") {
			${this.makeError({type:"string",actual:"value",messages:e})}
			return value;
		}

		var val = value.toLowerCase();
		if (!${$t.toString()}.test(val)) {
			${this.makeError({type:"uuid",actual:"value",messages:e})}
			return value;
		}

		const version = val.charAt(14) | 0;
	`),parseInt(t.version)<7&&l.push(`
			if (${t.version} !== version) {
				${this.makeError({type:"uuidVersion",expected:t.version,actual:"version",messages:e})}
				return value;
			}
		`),l.push(`
		switch (version) {
		case 0:
		case 1:
		case 2:
		case 6:
			break;
		case 3:
		case 4:
		case 5:
			if (["8", "9", "a", "b"].indexOf(val.charAt(19)) === -1) {
				${this.makeError({type:"uuid",actual:"value",messages:e})}
			}
		}

		return value;
	`),{source:l.join(`
`)}}});var Pe=p((pr,Ie)=>{"use strict";var Et=/^((([a-f0-9][a-f0-9]+[-]){5}|([a-f0-9][a-f0-9]+[:]){5})([a-f0-9][a-f0-9])$)|(^([a-f0-9][a-f0-9][a-f0-9][a-f0-9]+[.]){2}([a-f0-9][a-f0-9][a-f0-9][a-f0-9]))$/i;Ie.exports=function({schema:t,messages:e},a,l){return{source:`
			if (typeof value !== "string") {
				${this.makeError({type:"string",actual:"value",messages:e})}
				return value;
			}

			var v = value.toLowerCase();
			if (!${Et.toString()}.test(v)) {
				${this.makeError({type:"mac",actual:"value",messages:e})}
			}
			
			return value;
		`}}});var Fe=p((cr,_e)=>{"use strict";_e.exports=function({schema:t,messages:e},a,l){return{source:`
			if (typeof value !== "string") {
				${this.makeError({type:"string",actual:"value",messages:e})}
				return value;
			}

			if (typeof value !== "string")
				value = String(value);

			val = value.replace(/\\D+/g, "");

			var array = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
			var len = val ? val.length : 0,
				bit = 1,
				sum = 0;
			while (len--) {
				sum += !(bit ^= 1) ? parseInt(val[len], 10) : array[val[len]];
			}

			if (!(sum % 10 === 0 && sum > 0)) {
				${this.makeError({type:"luhn",actual:"value",messages:e})}
			}

			return value;
		`}}});var Me=p((fr,De)=>{var O,Le,T,ze,St="prettier",kt="cli-highlight";De.exports=function(t){O||(O=require(St),Le={parser:"babel",useTabs:!1,printWidth:120,trailingComma:"none",tabWidth:4,singleQuote:!1,semi:!0,bracketSpacing:!0},T=require(kt),ze={language:"js",theme:T.fromJson({keyword:["white","bold"],built_in:"magenta",literal:"cyan",number:"magenta",regexp:"red",string:["yellow","bold"],symbol:"plain",class:"blue",attr:"plain",function:["white","bold"],title:"plain",params:"green",comment:"grey"})});let e=O.format(t,Le);return T.highlight(e,ze)}});var Je=p((dr,He)=>{"use strict";var b;try{b=new Function("return Object.getPrototypeOf(async function(){}).constructor")()}catch{}var d=M(),Ot=J();function Tt(){return Object.assign({},X())}function jt(){return{any:K(),array:W(),boolean:Y(),class:te(),custom:ae(),currency:le(),date:se(),email:oe(),enum:ce(),equal:de(),forbidden:ye(),function:ve(),multi:be(),number:$e(),object:Se(),objectID:Oe(),record:je(),string:Ae(),tuple:Ve(),url:qe(),uuid:Ce(),mac:Pe(),luhn:Fe()}}var j=class{constructor(e){if(this.opts={},this.defaults={},this.messages=Tt(),this.rules=jt(),this.aliases={},this.cache=new Map,e){if(d(this.opts,e),e.defaults&&d(this.defaults,e.defaults),e.messages)for(let a in e.messages)this.addMessage(a,e.messages[a]);if(e.aliases)for(let a in e.aliases)this.alias(a,e.aliases[a]);if(e.customRules)for(let a in e.customRules)this.add(a,e.customRules[a]);if(e.plugins){let a=e.plugins;if(!Array.isArray(a))throw new Error("Plugins type must be array");a.forEach(this.plugin.bind(this))}if(this.opts.debug){let a=function(l){return l};typeof window>"u"&&(a=Me()),this._formatter=a}}}validate(e,a){return this.compile(a)(e)}wrapRequiredCheckSourceCode(e,a,l,r){let i=[],{considerNullAsAValue:n=!1}=this.opts,u,s=e.schema.optional===!0||e.schema.type==="forbidden",o=n?e.schema.nullable!==!1||e.schema.type==="forbidden":e.schema.optional===!0||e.schema.nullable===!0||e.schema.type==="forbidden";if(n?e.schema.default!=null&&e.schema.default!=null:e.schema.default!=null){s=!1,n?e.schema.nullable===!1&&(o=!1):e.schema.nullable!==!0&&(o=!1);let f;typeof e.schema.default=="function"?(l.customs[e.index]||(l.customs[e.index]={}),l.customs[e.index].defaultFn=e.schema.default,f=`context.customs[${e.index}].defaultFn.call(this, context.rules[${e.index}].schema, field, parent, context)`):f=JSON.stringify(e.schema.default),u=`
				value = ${f};
				${r} = value;
			`}else u=this.makeError({type:"required",actual:"value",messages:e.messages});return i.push(`
			${`if (value === undefined) { ${s?`
// allow undefined
`:u} }`}
			${`else if (value === null) { ${o?`
// allow null
`:u} }`}
			${a?`else { ${a} }`:""}
		`),i.join(`
`)}compile(e){if(e===null||typeof e!="object")throw new Error("Invalid schema.");let a=this,l={index:0,async:e.$$async===!0,rules:[],fn:[],customs:{},utils:{replace:Ot}};if(this.cache.clear(),delete e.$$async,l.async&&!b)throw new Error("Asynchronous mode is not supported.");if(e.$$root!==!0)if(Array.isArray(e))e=this.getRuleFromSchema(e).schema;else{let c=Object.assign({},e);e={type:"object",strict:c.$$strict,properties:c},delete c.$$strict}let r=["var errors = [];","var field;","var parent = null;",`var label = ${e.label?'"'+e.label+'"':"null"};`],i=this.getRuleFromSchema(e);r.push(this.compileRule(i,l,null,`${l.async?"await ":""}context.fn[%%INDEX%%](value, field, null, errors, context, label);`,"value")),r.push("if (errors.length) {"),r.push(`
			return errors.map(err => {
				if (err.message) {
					err.message = context.utils.replace(err.message, /\\{field\\}/g, err.label || err.field);
					err.message = context.utils.replace(err.message, /\\{expected\\}/g, err.expected);
					err.message = context.utils.replace(err.message, /\\{actual\\}/g, err.actual);
				}
				if(!err.label) delete err.label
				return err;
			});
		`),r.push("}"),r.push("return true;");let n=r.join(`
`),u=l.async?b:Function,s=new u("value","context",n);this.opts.debug&&console.log(this._formatter(`// Main check function
`+s.toString())),this.cache.clear();let o=function(c,f){return l.data=c,f&&f.meta&&(l.meta=f.meta),s.call(a,c,l)};return o.async=l.async,o}compileRule(e,a,l,r,i){let n=[],u=this.cache.get(e.schema);if(u)e=u,e.cycle=!0,e.cycleStack=[],n.push(this.wrapRequiredCheckSourceCode(e,`
				var rule = context.rules[${e.index}];
				if (rule.cycleStack.indexOf(value) === -1) {
					rule.cycleStack.push(value);
					${r.replace(/%%INDEX%%/g,e.index)}
					rule.cycleStack.pop(value);
				}
			`,a,i));else{this.cache.set(e.schema,e),e.index=a.index,a.rules[a.index]=e;let s=l??"$$root";a.index++;let o=e.ruleFunction.call(this,e,l,a);o.source=o.source.replace(/%%INDEX%%/g,e.index);let c=a.async?b:Function,f=new c("value","field","parent","errors","context","label",o.source);a.fn[e.index]=f.bind(this),n.push(this.wrapRequiredCheckSourceCode(e,r.replace(/%%INDEX%%/g,e.index),a,i)),n.push(this.makeCustomValidator({vName:i,path:s,schema:e.schema,context:a,messages:e.messages,ruleIndex:e.index})),this.opts.debug&&console.log(this._formatter(`// Context.fn[${e.index}]
`+f.toString()))}return n.join(`
`)}getRuleFromSchema(e){e=this.resolveType(e);let a=this.aliases[e.type];a&&(delete e.type,e=d(e,a,{skipIfExist:!0}));let l=this.rules[e.type];if(!l)throw new Error("Invalid '"+e.type+"' type in validator schema.");return{messages:Object.assign({},this.messages,e.messages),schema:d(e,this.defaults[e.type],{skipIfExist:!0}),ruleFunction:l}}parseShortHand(e){let a=e.split("|").map(i=>i.trim()),l=a[0],r;return l.endsWith("[]")?r=this.getRuleFromSchema({type:"array",items:l.slice(0,-2)}).schema:r={type:a[0]},a.slice(1).map(i=>{let n=i.indexOf(":");if(n!==-1){let u=i.substr(0,n).trim(),s=i.substr(n+1).trim();s==="true"||s==="false"?s=s==="true":Number.isNaN(Number(s))||(s=Number(s)),r[u]=s}else i.startsWith("no-")?r[i.slice(3)]=!1:r[i]=!0}),r}makeError({type:e,field:a,expected:l,actual:r,messages:i}){let n={type:`"${e}"`,message:`"${i[e]}"`};return a?n.field=`"${a}"`:n.field="field",l!=null&&(n.expected=l),r!=null&&(n.actual=r),n.label="label",`errors.push({ ${Object.keys(n).map(s=>`${s}: ${n[s]}`).join(", ")} });`}makeCustomValidator({vName:e="value",fnName:a="custom",ruleIndex:l,path:r,schema:i,context:n,messages:u}){let s="rule"+l,o="fnCustomErrors"+l;if(typeof i[a]=="function"){if(n.customs[l]?(n.customs[l].messages=u,n.customs[l].schema=i):n.customs[l]={messages:u,schema:i},this.opts.useNewCustomCheckerFunction)return`
               		const ${s} = context.customs[${l}];
					const ${o} = [];
					${e} = ${n.async?"await ":""}${s}.schema.${a}.call(this, ${e}, ${o} , ${s}.schema, "${r}", parent, context);
					if (Array.isArray(${o} )) {
                  		${o} .forEach(err => errors.push(Object.assign({ message: ${s}.messages[err.type], field }, err)));
					}
				`;let c="res_"+s;return`
				const ${s} = context.customs[${l}];
				const ${c} = ${n.async?"await ":""}${s}.schema.${a}.call(this, ${e}, ${s}.schema, "${r}", parent, context);
				if (Array.isArray(${c})) {
					${c}.forEach(err => errors.push(Object.assign({ message: ${s}.messages[err.type], field }, err)));
				}
		`}return""}add(e,a){this.rules[e]=a}addMessage(e,a){this.messages[e]=a}alias(e,a){if(this.rules[e])throw new Error("Alias name must not be a rule name");this.aliases[e]=a}plugin(e){if(typeof e!="function")throw new Error("Plugin fn type must be function");return e(this)}resolveType(e){if(typeof e=="string")e=this.parseShortHand(e);else if(Array.isArray(e)){if(e.length===0)throw new Error("Invalid schema.");e={type:"multi",rules:e},e.rules.map(i=>this.getRuleFromSchema(i)).every(i=>i.schema.optional===!0)&&(e.optional=!0);let l=!this.opts.considerNullAsAValue;e.rules.map(i=>this.getRuleFromSchema(i)).every(i=>i.schema.nullable===l)&&(e.nullable=l)}if(e.$$type){let a=e.$$type,l=this.getRuleFromSchema(a).schema;delete e.$$type;let r=Object.assign({},e);for(let i in e)delete e[i];d(e,l,{skipIfExist:!0}),e.props=r}return e}normalize(e){let a=this.resolveType(e);if(this.aliases[a.type]&&(a=d(a,this.normalize(this.aliases[a.type]),{skipIfExists:!0})),a=d(a,this.defaults[a.type],{skipIfExist:!0}),a.type==="multi")return a.rules=a.rules.map(l=>this.normalize(l)),a.optional=a.rules.every(l=>l.optional===!0),a;if(a.type==="array")return a.items=this.normalize(a.items),a;if(a.type==="object"&&a.props&&Object.entries(a.props).forEach(([l,r])=>a.props[l]=this.normalize(r)),typeof e=="object")if(e.type){let l=this.normalize(e.type);d(a,l,{skipIfExists:!0})}else Object.entries(e).forEach(([l,r])=>a[l]=this.normalize(r));return a}};He.exports=j});var Xe=p((hr,Be)=>{Be.exports=Je()});var At={};at(At,{ListUsersController:()=>R,default:()=>Rt});module.exports=lt(At);(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="1b82db27-eec8-4200-91a3-10ab66dd69e6",t._sentryDebugIdIdentifier="sentry-dbid-1b82db27-eec8-4200-91a3-10ab66dd69e6")}catch{}})();var $=class{constructor(e,a){this.body=e;this.statusCode=a}},y=class t extends ${constructor(a){super(a,200);this.body=a;Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace(this,t)}};var E=class t extends Error{constructor(a,l,r,i=500){super(a);this.message=a;this.data=l;this.stack=r;this.statusCode=i;this.name="HttpError",Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace(this,t)}},m=class t extends E{constructor(a,l="HttpBadRequestError",r,i="BAD_REQUEST",n=400){super(i,a,r,n);this.data=a;this.name=l;this.stack=r;this.message=i;this.statusCode=n;Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace(this,t)}};var S=class{constructor(e){this.entityModel=e;this.clientSession=e}clientSession;start(){return this.clientSession=[],!!this.clientSession}getSession(){if(this.clientSession)return this.clientSession;throw new Error("START_DATABASE_ERROR")}updateSession(e){return this.clientSession=e,this.clientSession}},q=new S([]);var v=class{async execute(e){let a={};e?.filter?.name&&(a.name=e.filter.name),e?.filter?.email_verified&&(a.email_verified=e.filter.email_verified),e?.filter?.role&&(a.role=e.filter.role);let l=q.getSession(),r=e.pagination?.page||1,i=e.pagination?.page_size||10,[n,u]=[l.filter(()=>a).sort().slice(i*r-i),l.length];return{page:r,page_data:n,page_count:n.length,all_count:n.length,all_pages_count:Math.ceil(u/i)}}};var g=class{constructor(e,a=new v){this.logger=e;this.listUsersRepository=a;this.logger=this.logger.getChild("ListUsersUseCase")}async execute(e){this.logger.debug("execute input",JSON.stringify(e));let a=await this.listUsersRepository.execute(e);return this.logger.debug("execute output",a),a}};var U=({optional:t=!1})=>({type:"string",optional:t});var C=({optional:t=!1})=>({type:"string",enum:["fan","influencer","internal"],optional:t});var I=({optional:t=!1})=>({type:"number",integer:!0,min:1,convert:!0,optional:t}),P=({optional:t=!1})=>({type:"number",integer:!0,min:1,convert:!0,optional:t});var _=({optional:t=!1})=>({type:"boolean",convert:!0,optional:t});var F=({optional:t=!1})=>({type:"date",convert:!0,nullable:!0,optional:t});var L=t=>({user_id:t.user_id,name:t.name,email:t.email,email_verified:t.email_verified,role:t.role,languages:t.languages,created_at:t.created_at,bio:t.bio||void 0,photo_url:t.photo_url||void 0,deleted_at:t.deleted_at||void 0,approved_at:t.approved_at});var Ze=it(Xe()),x=class{async validate(e,a){let r=await new Ze.default({useNewCustomCheckerFunction:!0}).validate(e,a);return r===!0?{isValid:r,errors:[]}:{isValid:!1,errors:r.map(i=>i.message||`${i.field} - ${i.type}`)}}};var R=class{constructor(e,a=new x,l=new g(e)){this.logger=e;this.requestValidator=a;this.listUsersUseCase=l;this.logger=this.logger.getChild("ListUsersController")}async handle(e){let{name:a,role:l,email_verified:r,approved_at:i,page:n,page_size:u}=e.query;i==="null"&&(i=null);let s=await this.requestValidator.validate({name:a,role:l,email_verified:r,approved_at:i,page:n,page_size:u},{name:U({optional:!0}),role:C({optional:!0}),email_verified:_({optional:!0}),approved_at:F({optional:!0}),page:I({optional:!0}),pageSize:P({optional:!0})});if(!s.isValid)return new m(s.errors);let o={name:a,role:l,email_verified:r,approved_at:i,page:n,page_size:u};Object.keys(o).forEach(f=>o[f]===void 0&&delete o[f]);let c=await this.listUsersUseCase.execute({filter:o,order:{[e.query?.orderField||"created_at"]:e.query?.orderDirection||"asc"},pagination:{page:Number(e.query?.page)||1,page_size:Number(e.query?.page_size)||10}});return new y({...c,page_result:c.page_data.map(f=>L(f))})}};var Rt=void 0;0&&(module.exports={ListUsersController});
//# sourceMappingURL=ListUsersController.js.map
