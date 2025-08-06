var Fe=Object.create;var h=Object.defineProperty;var Ie=Object.getOwnPropertyDescriptor;var ze=Object.getOwnPropertyNames;var Me=Object.getPrototypeOf,De=Object.prototype.hasOwnProperty;var o=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),_e=(t,e)=>{for(var i in e)h(t,i,{get:e[i],enumerable:!0})},S=(t,e,i,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of ze(e))!De.call(t,r)&&r!==i&&h(t,r,{get:()=>e[r],enumerable:!(u=Ie(e,r))||u.enumerable});return t};var Le=(t,e,i)=>(i=t!=null?Fe(Me(t)):{},S(e||!t||!t.__esModule?h(i,"default",{value:t,enumerable:!0}):i,t)),Ue=t=>S(h({},"__esModule",{value:!0}),t);var w=o((vt,j)=>{"use strict";function Je(t){return typeof t!="object"||Array.isArray(t)||t==null?!1:Object.keys(t).length>0}function T(t,e,i={}){for(let u in e)if(Je(e[u]))t[u]=t[u]||{},T(t[u],e[u],i);else{if(i.skipIfExist===!0&&t[u]!==void 0)continue;t[u]=e[u]}return t}j.exports=T});var N=o((yt,A)=>{function He(t){return t===void 0||t===null?"":typeof t.toString=="function"?t:typeof t}A.exports=(t,e,i)=>t.replace(e,He(i))});var O=o((mt,q)=>{"use strict";q.exports={required:"The '{field}' field is required.",string:"The '{field}' field must be a string.",stringEmpty:"The '{field}' field must not be empty.",stringMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",stringMax:"The '{field}' field length must be less than or equal to {expected} characters long.",stringLength:"The '{field}' field length must be {expected} characters long.",stringPattern:"The '{field}' field fails to match the required pattern.",stringContains:"The '{field}' field must contain the '{expected}' text.",stringEnum:"The '{field}' field does not match any of the allowed values.",stringNumeric:"The '{field}' field must be a numeric string.",stringAlpha:"The '{field}' field must be an alphabetic string.",stringAlphanum:"The '{field}' field must be an alphanumeric string.",stringAlphadash:"The '{field}' field must be an alphadash string.",stringHex:"The '{field}' field must be a hex string.",stringSingleLine:"The '{field}' field must be a single line string.",stringBase64:"The '{field}' field must be a base64 string.",number:"The '{field}' field must be a number.",numberMin:"The '{field}' field must be greater than or equal to {expected}.",numberMax:"The '{field}' field must be less than or equal to {expected}.",numberEqual:"The '{field}' field must be equal to {expected}.",numberNotEqual:"The '{field}' field can't be equal to {expected}.",numberInteger:"The '{field}' field must be an integer.",numberPositive:"The '{field}' field must be a positive number.",numberNegative:"The '{field}' field must be a negative number.",array:"The '{field}' field must be an array.",arrayEmpty:"The '{field}' field must not be an empty array.",arrayMin:"The '{field}' field must contain at least {expected} items.",arrayMax:"The '{field}' field must contain less than or equal to {expected} items.",arrayLength:"The '{field}' field must contain {expected} items.",arrayContains:"The '{field}' field must contain the '{expected}' item.",arrayUnique:"The '{actual}' value in '{field}' field does not unique the '{expected}' values.",arrayEnum:"The '{actual}' value in '{field}' field does not match any of the '{expected}' values.",tuple:"The '{field}' field must be an array.",tupleEmpty:"The '{field}' field must not be an empty array.",tupleLength:"The '{field}' field must contain {expected} items.",boolean:"The '{field}' field must be a boolean.",currency:"The '{field}' must be a valid currency format",date:"The '{field}' field must be a Date.",dateMin:"The '{field}' field must be greater than or equal to {expected}.",dateMax:"The '{field}' field must be less than or equal to {expected}.",enumValue:"The '{field}' field value '{expected}' does not match any of the allowed values.",equalValue:"The '{field}' field value must be equal to '{expected}'.",equalField:"The '{field}' field value must be equal to '{expected}' field value.",forbidden:"The '{field}' field is forbidden.",function:"The '{field}' field must be a function.",email:"The '{field}' field must be a valid e-mail.",emailEmpty:"The '{field}' field must not be empty.",emailMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",emailMax:"The '{field}' field length must be less than or equal to {expected} characters long.",luhn:"The '{field}' field must be a valid checksum luhn.",mac:"The '{field}' field must be a valid MAC address.",object:"The '{field}' must be an Object.",objectStrict:"The object '{field}' contains forbidden keys: '{actual}'.",objectMinProps:"The object '{field}' must contain at least {expected} properties.",objectMaxProps:"The object '{field}' must contain {expected} properties at most.",url:"The '{field}' field must be a valid URL.",urlEmpty:"The '{field}' field must not be empty.",uuid:"The '{field}' field must be a valid UUID.",uuidVersion:"The '{field}' field must be a valid UUID version provided.",classInstanceOf:"The '{field}' field must be an instance of the '{expected}' class.",objectID:"The '{field}' field must be an valid ObjectID",record:"The '{field}' must be an Object."}});var V=o((gt,R)=>{"use strict";R.exports=function(){let t=[];return t.push(`
		return value;
	`),{source:t.join(`
`)}}});var P=o(($t,C)=>{"use strict";C.exports=function({schema:t,messages:e},i,u){let r=[],a=!1;if(t.convert===!0&&(a=!0,r.push(`
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
		`),t.enum!=null){let l=JSON.stringify(t.enum);r.push(`
			for (var i = 0; i < value.length; i++) {
				if (${l}.indexOf(value[i]) === -1) {
					${this.makeError({type:"arrayEnum",expected:'"'+t.enum.join(", ")+'"',actual:"value[i]",messages:e})}
				}
			}
		`)}if(t.items!=null){r.push(`
			var arr = value;
			var parentField = field;
			for (var i = 0; i < arr.length; i++) {
				value = arr[i];
		`);let l=i+"[]",s=this.getRuleFromSchema(t.items),n=`arr[i] = ${u.async?"await ":""}context.fn[%%INDEX%%](arr[i], (parentField ? parentField : "") + "[" + i + "]", parent, errors, context)`;r.push(this.compileRule(s,u,l,n,"arr[i]")),r.push(`
			}
		`),r.push(`
		return arr;
	`)}else r.push(`
		return value;
	`);return{sanitized:a,source:r.join(`
`)}}});var I=o((bt,F)=>{"use strict";F.exports=function({schema:t,messages:e},i,u){let r=[],a=!1;return r.push(`
		var origValue = value;
	`),t.convert===!0&&(a=!0,r.push(`
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
	`),{sanitized:a,source:r.join(`
`)}}});var M=o((xt,z)=>{"use strict";z.exports=function({schema:t,messages:e,index:i},u,r){let a=[],l=t.instanceOf.name?t.instanceOf.name:"<UnknowClass>";return r.customs[i]?r.customs[i].schema=t:r.customs[i]={schema:t},a.push(`
		if (!(value instanceof context.customs[${i}].schema.instanceOf))
			${this.makeError({type:"classInstanceOf",actual:"value",expected:"'"+l+"'",messages:e})}
	`),a.push(`
		return value;
	`),{source:a.join(`
`)}}});var _=o((Et,D)=>{"use strict";D.exports=function({schema:t,messages:e,index:i},u,r){let a=[];return a.push(`
		${this.makeCustomValidator({fnName:"check",path:u,schema:t,messages:e,context:r,ruleIndex:i})}
		return value;
	`),{source:a.join(`
`)}}});var U=o((kt,L)=>{"use strict";var Xe="(?=.*\\d)^(-?~1|~1-?)(([0-9]\\d{0,2}(~2\\d{3})*)|0)?(\\~3\\d{1,2})?$";L.exports=function({schema:t,messages:e},i,u){let r=t.currencySymbol||null,a=t.thousandSeparator||",",l=t.decimalSeparator||".",s=t.customRegex,n=!t.symbolOptional,p=Xe.replace(/~1/g,r?`\\${r}${n?"":"?"}`:"").replace("~2",a).replace("~3",l),f=[];return f.push(`
		if (!value.match(${s||new RegExp(p)})) {
			${this.makeError({type:"currency",actual:"value",messages:e})}
			return value;
		}

		return value;
	`),{source:f.join(`
`)}}});var H=o((St,J)=>{"use strict";J.exports=function({schema:t,messages:e},i,u){let r=[],a=!1;return r.push(`
		var origValue = value;
	`),t.convert===!0&&(a=!0,r.push(`
			if (!(value instanceof Date)) {
				value = new Date(value.length && !isNaN(+value) ? +value : value);
			}
		`)),r.push(`
		if (!(value instanceof Date) || isNaN(value.getTime()))
			${this.makeError({type:"date",actual:"origValue",messages:e})}

		return value;
	`),{sanitized:a,source:r.join(`
`)}}});var Z=o((Tt,X)=>{"use strict";var Ze=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Ke=/^\S+@\S+\.\S+$/;X.exports=function({schema:t,messages:e},i,u){let r=[],a=t.mode=="precise"?Ze:Ke,l=!1;return r.push(`
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
		`),t.normalize&&(l=!0,r.push(`
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
		if (!${a.toString()}.test(value)) {
			${this.makeError({type:"email",actual:"value",messages:e})}
		}

		return value;
	`),{sanitized:l,source:r.join(`
`)}}});var W=o((jt,K)=>{"use strict";K.exports=function({schema:t,messages:e},i,u){return{source:`
			if (${JSON.stringify(t.values||[])}.indexOf(value) === -1)
				${this.makeError({type:"enumValue",expected:'"'+t.values.join(", ")+'"',actual:"value",messages:e})}
			
			return value;
		`}}});var G=o((wt,B)=>{"use strict";B.exports=function({schema:t,messages:e},i,u){let r=[];return t.field?(t.strict?r.push(`
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
`)}}});var Y=o((At,Q)=>{"use strict";Q.exports=function({schema:e,messages:i},u,r){let a=[];return a.push(`
		if (value !== null && value !== undefined) {
	`),e.remove?a.push(`
			return undefined;
		`):a.push(`
			${this.makeError({type:"forbidden",actual:"value",messages:i})}
		`),a.push(`
		}

		return value;
	`),{source:a.join(`
`)}}});var te=o((Nt,ee)=>{"use strict";ee.exports=function({schema:t,messages:e},i,u){return{source:`
			if (typeof value !== "function")
				${this.makeError({type:"function",actual:"value",messages:e})}

			return value;
		`}}});var ie=o((qt,re)=>{"use strict";re.exports=function({schema:t,messages:e},i,u){let r=[];r.push(`
		var hasValid = false;
		var newVal = value;
		var checkErrors = [];
		var errorsSize = errors.length;
	`);for(let a=0;a<t.rules.length;a++){r.push(`
			if (!hasValid) {
				var _errors = [];
		`);let l=this.getRuleFromSchema(t.rules[a]);r.push(this.compileRule(l,u,i,`var tmpVal = ${u.async?"await ":""}context.fn[%%INDEX%%](value, field, parent, _errors, context);`,"tmpVal")),r.push(`
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
`)}}});var ue=o((Ot,ae)=>{"use strict";ae.exports=function({schema:t,messages:e},i,u){let r=[];r.push(`
		var origValue = value;
	`);let a=!1;return t.convert===!0&&(a=!0,r.push(`
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
	`),{sanitized:a,source:r.join(`
`)}}});var ne=o((Rt,le)=>{"use strict";var We=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,Be=/["'\\\n\r\u2028\u2029]/g;function y(t){return t.replace(Be,function(e){switch(e){case'"':case"'":case"\\":return"\\"+e;case`
`:return"\\n";case"\r":return"\\r";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029"}})}le.exports=function({schema:t,messages:e},i,u){let r=[];r.push(`
		if (typeof value !== "object" || value === null || Array.isArray(value)) {
			${this.makeError({type:"object",actual:"value",messages:e})}
			return value;
		}
	`);let a=t.properties||t.props;if(a){r.push("var parentObj = value;"),r.push("var parentField = field;");let l=Object.keys(a);for(let s=0;s<l.length;s++){let n=l[s],p=y(n),f=We.test(p)?`.${p}`:`['${p}']`,c=`parentObj${f}`,E=(i?i+".":"")+n,k=a[n].label,Ve=k?`'${y(k)}'`:void 0;r.push(`
// Field: ${y(E)}`),r.push(`field = parentField ? parentField + "${f}" : "${p}";`),r.push(`value = ${c};`),r.push(`label = ${Ve}`);let Ce=this.getRuleFromSchema(a[n]),Pe=`
				${c} = ${u.async?"await ":""}context.fn[%%INDEX%%](value, field, parentObj, errors, context, label);
			`;r.push(this.compileRule(Ce,u,E,Pe,c)),this.opts.haltOnFirstError===!0&&r.push("if (errors.length) return parentObj;")}if(t.strict){let s=Object.keys(a);r.push(`
				field = parentField;
				var invalidProps = [];
				var props = Object.keys(parentObj);

				for (let i = 0; i < props.length; i++) {
					if (${JSON.stringify(s)}.indexOf(props[i]) === -1) {
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
					${this.makeError({type:"objectStrict",expected:'"'+s.join(", ")+'"',actual:"invalidProps.join(', ')",messages:e})}
				`),r.push(`
				}
			`)}}return(t.minProps!=null||t.maxProps!=null)&&(t.strict?r.push(`
				props = Object.keys(${a?"parentObj":"value"});
			`):r.push(`
				var props = Object.keys(${a?"parentObj":"value"});
				${a?"field = parentField;":""}
			`)),t.minProps!=null&&r.push(`
			if (props.length < ${t.minProps}) {
				${this.makeError({type:"objectMinProps",expected:t.minProps,actual:"props.length",messages:e})}
			}
		`),t.maxProps!=null&&r.push(`
			if (props.length > ${t.maxProps}) {
				${this.makeError({type:"objectMaxProps",expected:t.maxProps,actual:"props.length",messages:e})}
			}
		`),a?r.push(`
			return parentObj;
		`):r.push(`
			return value;
		`),{source:r.join(`
`)}}});var oe=o((Vt,se)=>{"use strict";se.exports=function({schema:t,messages:e,index:i},u,r){let a=[];return r.customs[i]?r.customs[i].schema=t:r.customs[i]={schema:t},a.push(`
		const ObjectID = context.customs[${i}].schema.ObjectID;
		if (!ObjectID.isValid(value)) {
			${this.makeError({type:"objectID",actual:"value",messages:e})}
			return;
		}
	`),t.convert===!0?a.push("return new ObjectID(value)"):t.convert==="hexString"?a.push("return value.toString()"):a.push("return value"),{source:a.join(`
`)}}});var fe=o((Ct,pe)=>{function Ge(t){for(let e in t.messages)e.startsWith("string")&&(t.messages[e]=t.messages[e].replace(" field "," key "))}pe.exports=function({schema:e,messages:i},u,r){let a=[];a.push(`
		if (typeof value !== "object" || value === null || Array.isArray(value)) {
			${this.makeError({type:"record",actual:"value",messages:i})}
			return value;
		}
	`);let l=e.key||"string",s=e.value||"any";a.push(`
		const record = value;
		let sanitizedKey, sanitizedValue;
		const result = {};
		for (let key in value) {
	`),a.push("sanitizedKey = value = key;");let n=this.getRuleFromSchema(l);Ge(n);let p=`
		sanitizedKey = ${r.async?"await ":""}context.fn[%%INDEX%%](key, field ? field + "." + key : key, record, errors, context);
	`;a.push(this.compileRule(n,r,null,p,"sanitizedKey")),a.push("sanitizedValue = value = record[key];");let f=this.getRuleFromSchema(s),c=`
		sanitizedValue = ${r.async?"await ":""}context.fn[%%INDEX%%](value, field ? field + "." + key : key, record, errors, context);
	`;return a.push(this.compileRule(f,r,`${u}[key]`,c,"sanitizedValue")),a.push("result[sanitizedKey] = sanitizedValue;"),a.push(`
		}
	`),a.push("return result;"),{source:a.join(`
`)}}});var de=o((Pt,ce)=>{"use strict";var Qe=/^-?[0-9]\d*(\.\d+)?$/,Ye=/^[a-zA-Z]+$/,et=/^[a-zA-Z0-9]+$/,tt=/^[a-zA-Z0-9_-]+$/,rt=/^[0-9a-fA-F]+$/,it=/^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?$/;ce.exports=function({schema:e,messages:i},u,r){let a=[],l=!1;if(e.convert===!0&&(l=!0,a.push(`
			if (typeof value !== "string") {
				value = String(value);
			}
		`)),a.push(`
		if (typeof value !== "string") {
			${this.makeError({type:"string",actual:"value",messages:i})}
			return value;
		}

		var origValue = value;
	`),e.trim&&(l=!0,a.push(`
			value = value.trim();
		`)),e.trimLeft&&(l=!0,a.push(`
			value = value.trimLeft();
		`)),e.trimRight&&(l=!0,a.push(`
			value = value.trimRight();
		`)),e.padStart){l=!0;let s=e.padChar!=null?e.padChar:" ";a.push(`
			value = value.padStart(${e.padStart}, ${JSON.stringify(s)});
		`)}if(e.padEnd){l=!0;let s=e.padChar!=null?e.padChar:" ";a.push(`
			value = value.padEnd(${e.padEnd}, ${JSON.stringify(s)});
		`)}if(e.lowercase&&(l=!0,a.push(`
			value = value.toLowerCase();
		`)),e.uppercase&&(l=!0,a.push(`
			value = value.toUpperCase();
		`)),e.localeLowercase&&(l=!0,a.push(`
			value = value.toLocaleLowerCase();
		`)),e.localeUppercase&&(l=!0,a.push(`
			value = value.toLocaleUpperCase();
		`)),a.push(`
			var len = value.length;
	`),e.empty===!1?a.push(`
			if (len === 0) {
				${this.makeError({type:"stringEmpty",actual:"value",messages:i})}
			}
		`):e.empty===!0&&a.push(`
			if (len === 0) {
				return value;
			}
		`),e.min!=null&&a.push(`
			if (len < ${e.min}) {
				${this.makeError({type:"stringMin",expected:e.min,actual:"len",messages:i})}
			}
		`),e.max!=null&&a.push(`
			if (len > ${e.max}) {
				${this.makeError({type:"stringMax",expected:e.max,actual:"len",messages:i})}
			}
		`),e.length!=null&&a.push(`
			if (len !== ${e.length}) {
				${this.makeError({type:"stringLength",expected:e.length,actual:"len",messages:i})}
			}
		`),e.pattern!=null){let s=e.pattern;typeof e.pattern=="string"&&(s=new RegExp(e.pattern,e.patternFlags)),a.push(`
			if (!${s.toString()}.test(value)) {
				${this.makeError({type:"stringPattern",expected:`"${s.toString().replace(/"/g,"\\$&")}"`,actual:"origValue",messages:i})}
			}
		`)}if(e.contains!=null&&a.push(`
			if (value.indexOf("${e.contains}") === -1) {
				${this.makeError({type:"stringContains",expected:'"'+e.contains+'"',actual:"origValue",messages:i})}
			}
		`),e.enum!=null){let s=JSON.stringify(e.enum);a.push(`
			if (${s}.indexOf(value) === -1) {
				${this.makeError({type:"stringEnum",expected:'"'+e.enum.join(", ")+'"',actual:"origValue",messages:i})}
			}
		`)}return e.numeric===!0&&a.push(`
			if (!${Qe.toString()}.test(value) ) {
				${this.makeError({type:"stringNumeric",actual:"origValue",messages:i})}
			}
		`),e.alpha===!0&&a.push(`
			if(!${Ye.toString()}.test(value)) {
				${this.makeError({type:"stringAlpha",actual:"origValue",messages:i})}
			}
		`),e.alphanum===!0&&a.push(`
			if(!${et.toString()}.test(value)) {
				${this.makeError({type:"stringAlphanum",actual:"origValue",messages:i})}
			}
		`),e.alphadash===!0&&a.push(`
			if(!${tt.toString()}.test(value)) {
				${this.makeError({type:"stringAlphadash",actual:"origValue",messages:i})}
			}
		`),e.hex===!0&&a.push(`
			if(value.length % 2 !== 0 || !${rt.toString()}.test(value)) {
				${this.makeError({type:"stringHex",actual:"origValue",messages:i})}
			}
		`),e.singleLine===!0&&a.push(`
			if(value.includes("\\n")) {
				${this.makeError({type:"stringSingleLine",messages:i})}
			}
		`),e.base64===!0&&a.push(`
			if(!${it.toString()}.test(value)) {
				${this.makeError({type:"stringBase64",actual:"origValue",messages:i})}
			}
		`),a.push(`
		return value;
	`),{sanitized:l,source:a.join(`
`)}}});var ve=o((Ft,he)=>{"use strict";he.exports=function({schema:t,messages:e},i,u){let r=[];if(t.items!=null){if(!Array.isArray(t.items))throw new Error(`Invalid '${t.type}' schema. The 'items' field must be an array.`);if(t.items.length===0)throw new Error(`Invalid '${t.type}' schema. The 'items' field must not be an empty array.`)}if(r.push(`
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
		`);for(let a=0;a<t.items.length;a++){r.push(`
			value = arr[${a}];
		`);let l=`${i}[${a}]`,s=this.getRuleFromSchema(t.items[a]),n=`
			arr[${a}] = ${u.async?"await ":""}context.fn[%%INDEX%%](arr[${a}], (parentField ? parentField : "") + "[" + ${a} + "]", parent, errors, context);
		`;r.push(this.compileRule(s,u,l,n,`arr[${a}]`))}r.push(`
		return arr;
	`)}else r.push(`
		return value;
	`);return{source:r.join(`
`)}}});var me=o((It,ye)=>{"use strict";var at=/^https?:\/\/\S+/;ye.exports=function({schema:t,messages:e},i,u){let r=[];return r.push(`
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
		if (!${at.toString()}.test(value)) {
			${this.makeError({type:"url",actual:"value",messages:e})}
		}

		return value;
	`),{source:r.join(`
`)}}});var $e=o((zt,ge)=>{"use strict";var ut=/^([0-9a-f]{8}-[0-9a-f]{4}-[1-6][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}|[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12})$/i;ge.exports=function({schema:t,messages:e},i){let u=[];return u.push(`
		if (typeof value !== "string") {
			${this.makeError({type:"string",actual:"value",messages:e})}
			return value;
		}

		var val = value.toLowerCase();
		if (!${ut.toString()}.test(val)) {
			${this.makeError({type:"uuid",actual:"value",messages:e})}
			return value;
		}

		const version = val.charAt(14) | 0;
	`),parseInt(t.version)<7&&u.push(`
			if (${t.version} !== version) {
				${this.makeError({type:"uuidVersion",expected:t.version,actual:"version",messages:e})}
				return value;
			}
		`),u.push(`
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
	`),{source:u.join(`
`)}}});var xe=o((Mt,be)=>{"use strict";var lt=/^((([a-f0-9][a-f0-9]+[-]){5}|([a-f0-9][a-f0-9]+[:]){5})([a-f0-9][a-f0-9])$)|(^([a-f0-9][a-f0-9][a-f0-9][a-f0-9]+[.]){2}([a-f0-9][a-f0-9][a-f0-9][a-f0-9]))$/i;be.exports=function({schema:t,messages:e},i,u){return{source:`
			if (typeof value !== "string") {
				${this.makeError({type:"string",actual:"value",messages:e})}
				return value;
			}

			var v = value.toLowerCase();
			if (!${lt.toString()}.test(v)) {
				${this.makeError({type:"mac",actual:"value",messages:e})}
			}
			
			return value;
		`}}});var ke=o((Dt,Ee)=>{"use strict";Ee.exports=function({schema:t,messages:e},i,u){return{source:`
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
		`}}});var we=o((_t,je)=>{var m,Se,g,Te,nt="prettier",st="cli-highlight";je.exports=function(t){m||(m=require(nt),Se={parser:"babel",useTabs:!1,printWidth:120,trailingComma:"none",tabWidth:4,singleQuote:!1,semi:!0,bracketSpacing:!0},g=require(st),Te={language:"js",theme:g.fromJson({keyword:["white","bold"],built_in:"magenta",literal:"cyan",number:"magenta",regexp:"red",string:["yellow","bold"],symbol:"plain",class:"blue",attr:"plain",function:["white","bold"],title:"plain",params:"green",comment:"grey"})});let e=m.format(t,Se);return g.highlight(e,Te)}});var Ne=o((Lt,Ae)=>{"use strict";var v;try{v=new Function("return Object.getPrototypeOf(async function(){}).constructor")()}catch{}var d=w(),ot=N();function pt(){return Object.assign({},O())}function ft(){return{any:V(),array:P(),boolean:I(),class:M(),custom:_(),currency:U(),date:H(),email:Z(),enum:W(),equal:G(),forbidden:Y(),function:te(),multi:ie(),number:ue(),object:ne(),objectID:oe(),record:fe(),string:de(),tuple:ve(),url:me(),uuid:$e(),mac:xe(),luhn:ke()}}var $=class{constructor(e){if(this.opts={},this.defaults={},this.messages=pt(),this.rules=ft(),this.aliases={},this.cache=new Map,e){if(d(this.opts,e),e.defaults&&d(this.defaults,e.defaults),e.messages)for(let i in e.messages)this.addMessage(i,e.messages[i]);if(e.aliases)for(let i in e.aliases)this.alias(i,e.aliases[i]);if(e.customRules)for(let i in e.customRules)this.add(i,e.customRules[i]);if(e.plugins){let i=e.plugins;if(!Array.isArray(i))throw new Error("Plugins type must be array");i.forEach(this.plugin.bind(this))}if(this.opts.debug){let i=function(u){return u};typeof window>"u"&&(i=we()),this._formatter=i}}}validate(e,i){return this.compile(i)(e)}wrapRequiredCheckSourceCode(e,i,u,r){let a=[],{considerNullAsAValue:l=!1}=this.opts,s,n=e.schema.optional===!0||e.schema.type==="forbidden",p=l?e.schema.nullable!==!1||e.schema.type==="forbidden":e.schema.optional===!0||e.schema.nullable===!0||e.schema.type==="forbidden";if(l?e.schema.default!=null&&e.schema.default!=null:e.schema.default!=null){n=!1,l?e.schema.nullable===!1&&(p=!1):e.schema.nullable!==!0&&(p=!1);let c;typeof e.schema.default=="function"?(u.customs[e.index]||(u.customs[e.index]={}),u.customs[e.index].defaultFn=e.schema.default,c=`context.customs[${e.index}].defaultFn.call(this, context.rules[${e.index}].schema, field, parent, context)`):c=JSON.stringify(e.schema.default),s=`
				value = ${c};
				${r} = value;
			`}else s=this.makeError({type:"required",actual:"value",messages:e.messages});return a.push(`
			${`if (value === undefined) { ${n?`
// allow undefined
`:s} }`}
			${`else if (value === null) { ${p?`
// allow null
`:s} }`}
			${i?`else { ${i} }`:""}
		`),a.join(`
`)}compile(e){if(e===null||typeof e!="object")throw new Error("Invalid schema.");let i=this,u={index:0,async:e.$$async===!0,rules:[],fn:[],customs:{},utils:{replace:ot}};if(this.cache.clear(),delete e.$$async,u.async&&!v)throw new Error("Asynchronous mode is not supported.");if(e.$$root!==!0)if(Array.isArray(e))e=this.getRuleFromSchema(e).schema;else{let f=Object.assign({},e);e={type:"object",strict:f.$$strict,properties:f},delete f.$$strict}let r=["var errors = [];","var field;","var parent = null;",`var label = ${e.label?'"'+e.label+'"':"null"};`],a=this.getRuleFromSchema(e);r.push(this.compileRule(a,u,null,`${u.async?"await ":""}context.fn[%%INDEX%%](value, field, null, errors, context, label);`,"value")),r.push("if (errors.length) {"),r.push(`
			return errors.map(err => {
				if (err.message) {
					err.message = context.utils.replace(err.message, /\\{field\\}/g, err.label || err.field);
					err.message = context.utils.replace(err.message, /\\{expected\\}/g, err.expected);
					err.message = context.utils.replace(err.message, /\\{actual\\}/g, err.actual);
				}
				if(!err.label) delete err.label
				return err;
			});
		`),r.push("}"),r.push("return true;");let l=r.join(`
`),s=u.async?v:Function,n=new s("value","context",l);this.opts.debug&&console.log(this._formatter(`// Main check function
`+n.toString())),this.cache.clear();let p=function(f,c){return u.data=f,c&&c.meta&&(u.meta=c.meta),n.call(i,f,u)};return p.async=u.async,p}compileRule(e,i,u,r,a){let l=[],s=this.cache.get(e.schema);if(s)e=s,e.cycle=!0,e.cycleStack=[],l.push(this.wrapRequiredCheckSourceCode(e,`
				var rule = context.rules[${e.index}];
				if (rule.cycleStack.indexOf(value) === -1) {
					rule.cycleStack.push(value);
					${r.replace(/%%INDEX%%/g,e.index)}
					rule.cycleStack.pop(value);
				}
			`,i,a));else{this.cache.set(e.schema,e),e.index=i.index,i.rules[i.index]=e;let n=u??"$$root";i.index++;let p=e.ruleFunction.call(this,e,u,i);p.source=p.source.replace(/%%INDEX%%/g,e.index);let f=i.async?v:Function,c=new f("value","field","parent","errors","context","label",p.source);i.fn[e.index]=c.bind(this),l.push(this.wrapRequiredCheckSourceCode(e,r.replace(/%%INDEX%%/g,e.index),i,a)),l.push(this.makeCustomValidator({vName:a,path:n,schema:e.schema,context:i,messages:e.messages,ruleIndex:e.index})),this.opts.debug&&console.log(this._formatter(`// Context.fn[${e.index}]
`+c.toString()))}return l.join(`
`)}getRuleFromSchema(e){e=this.resolveType(e);let i=this.aliases[e.type];i&&(delete e.type,e=d(e,i,{skipIfExist:!0}));let u=this.rules[e.type];if(!u)throw new Error("Invalid '"+e.type+"' type in validator schema.");return{messages:Object.assign({},this.messages,e.messages),schema:d(e,this.defaults[e.type],{skipIfExist:!0}),ruleFunction:u}}parseShortHand(e){let i=e.split("|").map(a=>a.trim()),u=i[0],r;return u.endsWith("[]")?r=this.getRuleFromSchema({type:"array",items:u.slice(0,-2)}).schema:r={type:i[0]},i.slice(1).map(a=>{let l=a.indexOf(":");if(l!==-1){let s=a.substr(0,l).trim(),n=a.substr(l+1).trim();n==="true"||n==="false"?n=n==="true":Number.isNaN(Number(n))||(n=Number(n)),r[s]=n}else a.startsWith("no-")?r[a.slice(3)]=!1:r[a]=!0}),r}makeError({type:e,field:i,expected:u,actual:r,messages:a}){let l={type:`"${e}"`,message:`"${a[e]}"`};return i?l.field=`"${i}"`:l.field="field",u!=null&&(l.expected=u),r!=null&&(l.actual=r),l.label="label",`errors.push({ ${Object.keys(l).map(n=>`${n}: ${l[n]}`).join(", ")} });`}makeCustomValidator({vName:e="value",fnName:i="custom",ruleIndex:u,path:r,schema:a,context:l,messages:s}){let n="rule"+u,p="fnCustomErrors"+u;if(typeof a[i]=="function"){if(l.customs[u]?(l.customs[u].messages=s,l.customs[u].schema=a):l.customs[u]={messages:s,schema:a},this.opts.useNewCustomCheckerFunction)return`
               		const ${n} = context.customs[${u}];
					const ${p} = [];
					${e} = ${l.async?"await ":""}${n}.schema.${i}.call(this, ${e}, ${p} , ${n}.schema, "${r}", parent, context);
					if (Array.isArray(${p} )) {
                  		${p} .forEach(err => errors.push(Object.assign({ message: ${n}.messages[err.type], field }, err)));
					}
				`;let f="res_"+n;return`
				const ${n} = context.customs[${u}];
				const ${f} = ${l.async?"await ":""}${n}.schema.${i}.call(this, ${e}, ${n}.schema, "${r}", parent, context);
				if (Array.isArray(${f})) {
					${f}.forEach(err => errors.push(Object.assign({ message: ${n}.messages[err.type], field }, err)));
				}
		`}return""}add(e,i){this.rules[e]=i}addMessage(e,i){this.messages[e]=i}alias(e,i){if(this.rules[e])throw new Error("Alias name must not be a rule name");this.aliases[e]=i}plugin(e){if(typeof e!="function")throw new Error("Plugin fn type must be function");return e(this)}resolveType(e){if(typeof e=="string")e=this.parseShortHand(e);else if(Array.isArray(e)){if(e.length===0)throw new Error("Invalid schema.");e={type:"multi",rules:e},e.rules.map(a=>this.getRuleFromSchema(a)).every(a=>a.schema.optional===!0)&&(e.optional=!0);let u=!this.opts.considerNullAsAValue;e.rules.map(a=>this.getRuleFromSchema(a)).every(a=>a.schema.nullable===u)&&(e.nullable=u)}if(e.$$type){let i=e.$$type,u=this.getRuleFromSchema(i).schema;delete e.$$type;let r=Object.assign({},e);for(let a in e)delete e[a];d(e,u,{skipIfExist:!0}),e.props=r}return e}normalize(e){let i=this.resolveType(e);if(this.aliases[i.type]&&(i=d(i,this.normalize(this.aliases[i.type]),{skipIfExists:!0})),i=d(i,this.defaults[i.type],{skipIfExist:!0}),i.type==="multi")return i.rules=i.rules.map(u=>this.normalize(u)),i.optional=i.rules.every(u=>u.optional===!0),i;if(i.type==="array")return i.items=this.normalize(i.items),i;if(i.type==="object"&&i.props&&Object.entries(i.props).forEach(([u,r])=>i.props[u]=this.normalize(r)),typeof e=="object")if(e.type){let u=this.normalize(e.type);d(i,u,{skipIfExists:!0})}else Object.entries(e).forEach(([u,r])=>i[u]=this.normalize(r));return i}};Ae.exports=$});var Oe=o((Ut,qe)=>{qe.exports=Ne()});var dt={};_e(dt,{FastestValidator:()=>b,default:()=>ct});module.exports=Ue(dt);(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="3b0e043d-50cd-4a35-8f45-ceb570f91273",t._sentryDebugIdIdentifier="sentry-dbid-3b0e043d-50cd-4a35-8f45-ceb570f91273")}catch{}})();var Re=Le(Oe()),b=class{async validate(e,i){let r=await new Re.default({useNewCustomCheckerFunction:!0}).validate(e,i);return r===!0?{isValid:r,errors:[]}:{isValid:!1,errors:r.map(a=>a.message||`${a.field} - ${a.type}`)}}};var ct=void 0;0&&(module.exports={FastestValidator});
//# sourceMappingURL=FastestValidator.js.map
