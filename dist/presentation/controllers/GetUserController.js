var Xe=Object.create;var h=Object.defineProperty;var Ze=Object.getOwnPropertyDescriptor;var Ke=Object.getOwnPropertyNames;var We=Object.getPrototypeOf,Qe=Object.prototype.hasOwnProperty;var o=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ye=(t,e)=>{for(var i in e)h(t,i,{get:e[i],enumerable:!0})},q=(t,e,i,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Ke(e))!Qe.call(t,r)&&r!==i&&h(t,r,{get:()=>e[r],enumerable:!(n=Ze(e,r))||n.enumerable});return t};var et=(t,e,i)=>(i=t!=null?Xe(We(t)):{},q(e||!t||!t.__esModule?h(i,"default",{value:t,enumerable:!0}):i,t)),tt=t=>q(h({},"__esModule",{value:!0}),t);var D=o((It,F)=>{"use strict";function rt(t){return typeof t!="object"||Array.isArray(t)||t==null?!1:Object.keys(t).length>0}function P(t,e,i={}){for(let n in e)if(rt(e[n]))t[n]=t[n]||{},P(t[n],e[n],i);else{if(i.skipIfExist===!0&&t[n]!==void 0)continue;t[n]=e[n]}return t}F.exports=P});var z=o((Pt,_)=>{function it(t){return t===void 0||t===null?"":typeof t.toString=="function"?t:typeof t}_.exports=(t,e,i)=>t.replace(e,it(i))});var L=o((Ft,M)=>{"use strict";M.exports={required:"The '{field}' field is required.",string:"The '{field}' field must be a string.",stringEmpty:"The '{field}' field must not be empty.",stringMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",stringMax:"The '{field}' field length must be less than or equal to {expected} characters long.",stringLength:"The '{field}' field length must be {expected} characters long.",stringPattern:"The '{field}' field fails to match the required pattern.",stringContains:"The '{field}' field must contain the '{expected}' text.",stringEnum:"The '{field}' field does not match any of the allowed values.",stringNumeric:"The '{field}' field must be a numeric string.",stringAlpha:"The '{field}' field must be an alphabetic string.",stringAlphanum:"The '{field}' field must be an alphanumeric string.",stringAlphadash:"The '{field}' field must be an alphadash string.",stringHex:"The '{field}' field must be a hex string.",stringSingleLine:"The '{field}' field must be a single line string.",stringBase64:"The '{field}' field must be a base64 string.",number:"The '{field}' field must be a number.",numberMin:"The '{field}' field must be greater than or equal to {expected}.",numberMax:"The '{field}' field must be less than or equal to {expected}.",numberEqual:"The '{field}' field must be equal to {expected}.",numberNotEqual:"The '{field}' field can't be equal to {expected}.",numberInteger:"The '{field}' field must be an integer.",numberPositive:"The '{field}' field must be a positive number.",numberNegative:"The '{field}' field must be a negative number.",array:"The '{field}' field must be an array.",arrayEmpty:"The '{field}' field must not be an empty array.",arrayMin:"The '{field}' field must contain at least {expected} items.",arrayMax:"The '{field}' field must contain less than or equal to {expected} items.",arrayLength:"The '{field}' field must contain {expected} items.",arrayContains:"The '{field}' field must contain the '{expected}' item.",arrayUnique:"The '{actual}' value in '{field}' field does not unique the '{expected}' values.",arrayEnum:"The '{actual}' value in '{field}' field does not match any of the '{expected}' values.",tuple:"The '{field}' field must be an array.",tupleEmpty:"The '{field}' field must not be an empty array.",tupleLength:"The '{field}' field must contain {expected} items.",boolean:"The '{field}' field must be a boolean.",currency:"The '{field}' must be a valid currency format",date:"The '{field}' field must be a Date.",dateMin:"The '{field}' field must be greater than or equal to {expected}.",dateMax:"The '{field}' field must be less than or equal to {expected}.",enumValue:"The '{field}' field value '{expected}' does not match any of the allowed values.",equalValue:"The '{field}' field value must be equal to '{expected}'.",equalField:"The '{field}' field value must be equal to '{expected}' field value.",forbidden:"The '{field}' field is forbidden.",function:"The '{field}' field must be a function.",email:"The '{field}' field must be a valid e-mail.",emailEmpty:"The '{field}' field must not be empty.",emailMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",emailMax:"The '{field}' field length must be less than or equal to {expected} characters long.",luhn:"The '{field}' field must be a valid checksum luhn.",mac:"The '{field}' field must be a valid MAC address.",object:"The '{field}' must be an Object.",objectStrict:"The object '{field}' contains forbidden keys: '{actual}'.",objectMinProps:"The object '{field}' must contain at least {expected} properties.",objectMaxProps:"The object '{field}' must contain {expected} properties at most.",url:"The '{field}' field must be a valid URL.",urlEmpty:"The '{field}' field must not be empty.",uuid:"The '{field}' field must be a valid UUID.",uuidVersion:"The '{field}' field must be a valid UUID version provided.",classInstanceOf:"The '{field}' field must be an instance of the '{expected}' class.",objectID:"The '{field}' field must be an valid ObjectID",record:"The '{field}' must be an Object."}});var H=o((Dt,G)=>{"use strict";G.exports=function(){let t=[];return t.push(`
		return value;
	`),{source:t.join(`
`)}}});var B=o((_t,J)=>{"use strict";J.exports=function({schema:t,messages:e},i,n){let r=[],a=!1;if(t.convert===!0&&(a=!0,r.push(`
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
		`),t.enum!=null){let s=JSON.stringify(t.enum);r.push(`
			for (var i = 0; i < value.length; i++) {
				if (${s}.indexOf(value[i]) === -1) {
					${this.makeError({type:"arrayEnum",expected:'"'+t.enum.join(", ")+'"',actual:"value[i]",messages:e})}
				}
			}
		`)}if(t.items!=null){r.push(`
			var arr = value;
			var parentField = field;
			for (var i = 0; i < arr.length; i++) {
				value = arr[i];
		`);let s=i+"[]",u=this.getRuleFromSchema(t.items),l=`arr[i] = ${n.async?"await ":""}context.fn[%%INDEX%%](arr[i], (parentField ? parentField : "") + "[" + i + "]", parent, errors, context)`;r.push(this.compileRule(u,n,s,l,"arr[i]")),r.push(`
			}
		`),r.push(`
		return arr;
	`)}else r.push(`
		return value;
	`);return{sanitized:a,source:r.join(`
`)}}});var Z=o((zt,X)=>{"use strict";X.exports=function({schema:t,messages:e},i,n){let r=[],a=!1;return r.push(`
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
`)}}});var W=o((Mt,K)=>{"use strict";K.exports=function({schema:t,messages:e,index:i},n,r){let a=[],s=t.instanceOf.name?t.instanceOf.name:"<UnknowClass>";return r.customs[i]?r.customs[i].schema=t:r.customs[i]={schema:t},a.push(`
		if (!(value instanceof context.customs[${i}].schema.instanceOf))
			${this.makeError({type:"classInstanceOf",actual:"value",expected:"'"+s+"'",messages:e})}
	`),a.push(`
		return value;
	`),{source:a.join(`
`)}}});var Y=o((Lt,Q)=>{"use strict";Q.exports=function({schema:t,messages:e,index:i},n,r){let a=[];return a.push(`
		${this.makeCustomValidator({fnName:"check",path:n,schema:t,messages:e,context:r,ruleIndex:i})}
		return value;
	`),{source:a.join(`
`)}}});var te=o((Gt,ee)=>{"use strict";var at="(?=.*\\d)^(-?~1|~1-?)(([0-9]\\d{0,2}(~2\\d{3})*)|0)?(\\~3\\d{1,2})?$";ee.exports=function({schema:t,messages:e},i,n){let r=t.currencySymbol||null,a=t.thousandSeparator||",",s=t.decimalSeparator||".",u=t.customRegex,l=!t.symbolOptional,p=at.replace(/~1/g,r?`\\${r}${l?"":"?"}`:"").replace("~2",a).replace("~3",s),c=[];return c.push(`
		if (!value.match(${u||new RegExp(p)})) {
			${this.makeError({type:"currency",actual:"value",messages:e})}
			return value;
		}

		return value;
	`),{source:c.join(`
`)}}});var ie=o((Ht,re)=>{"use strict";re.exports=function({schema:t,messages:e},i,n){let r=[],a=!1;return r.push(`
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
`)}}});var ne=o((Jt,ae)=>{"use strict";var nt=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,st=/^\S+@\S+\.\S+$/;ae.exports=function({schema:t,messages:e},i,n){let r=[],a=t.mode=="precise"?nt:st,s=!1;return r.push(`
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
		`),t.normalize&&(s=!0,r.push(`
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
	`),{sanitized:s,source:r.join(`
`)}}});var le=o((Bt,se)=>{"use strict";se.exports=function({schema:t,messages:e},i,n){return{source:`
			if (${JSON.stringify(t.values||[])}.indexOf(value) === -1)
				${this.makeError({type:"enumValue",expected:'"'+t.values.join(", ")+'"',actual:"value",messages:e})}
			
			return value;
		`}}});var oe=o((Xt,ue)=>{"use strict";ue.exports=function({schema:t,messages:e},i,n){let r=[];return t.field?(t.strict?r.push(`
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
`)}}});var ce=o((Zt,pe)=>{"use strict";pe.exports=function({schema:e,messages:i},n,r){let a=[];return a.push(`
		if (value !== null && value !== undefined) {
	`),e.remove?a.push(`
			return undefined;
		`):a.push(`
			${this.makeError({type:"forbidden",actual:"value",messages:i})}
		`),a.push(`
		}

		return value;
	`),{source:a.join(`
`)}}});var de=o((Kt,fe)=>{"use strict";fe.exports=function({schema:t,messages:e},i,n){return{source:`
			if (typeof value !== "function")
				${this.makeError({type:"function",actual:"value",messages:e})}

			return value;
		`}}});var ye=o((Wt,he)=>{"use strict";he.exports=function({schema:t,messages:e},i,n){let r=[];r.push(`
		var hasValid = false;
		var newVal = value;
		var checkErrors = [];
		var errorsSize = errors.length;
	`);for(let a=0;a<t.rules.length;a++){r.push(`
			if (!hasValid) {
				var _errors = [];
		`);let s=this.getRuleFromSchema(t.rules[a]);r.push(this.compileRule(s,n,i,`var tmpVal = ${n.async?"await ":""}context.fn[%%INDEX%%](value, field, parent, _errors, context);`,"tmpVal")),r.push(`
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
`)}}});var ve=o((Qt,me)=>{"use strict";me.exports=function({schema:t,messages:e},i,n){let r=[];r.push(`
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
`)}}});var be=o((Yt,ge)=>{"use strict";var lt=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,ut=/["'\\\n\r\u2028\u2029]/g;function O(t){return t.replace(ut,function(e){switch(e){case'"':case"'":case"\\":return"\\"+e;case`
`:return"\\n";case"\r":return"\\r";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029"}})}ge.exports=function({schema:t,messages:e},i,n){let r=[];r.push(`
		if (typeof value !== "object" || value === null || Array.isArray(value)) {
			${this.makeError({type:"object",actual:"value",messages:e})}
			return value;
		}
	`);let a=t.properties||t.props;if(a){r.push("var parentObj = value;"),r.push("var parentField = field;");let s=Object.keys(a);for(let u=0;u<s.length;u++){let l=s[u],p=O(l),c=lt.test(p)?`.${p}`:`['${p}']`,f=`parentObj${c}`,N=(i?i+".":"")+l,V=a[l].label,He=V?`'${O(V)}'`:void 0;r.push(`
// Field: ${O(N)}`),r.push(`field = parentField ? parentField + "${c}" : "${p}";`),r.push(`value = ${f};`),r.push(`label = ${He}`);let Je=this.getRuleFromSchema(a[l]),Be=`
				${f} = ${n.async?"await ":""}context.fn[%%INDEX%%](value, field, parentObj, errors, context, label);
			`;r.push(this.compileRule(Je,n,N,Be,f)),this.opts.haltOnFirstError===!0&&r.push("if (errors.length) return parentObj;")}if(t.strict){let u=Object.keys(a);r.push(`
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
`)}}});var $e=o((er,xe)=>{"use strict";xe.exports=function({schema:t,messages:e,index:i},n,r){let a=[];return r.customs[i]?r.customs[i].schema=t:r.customs[i]={schema:t},a.push(`
		const ObjectID = context.customs[${i}].schema.ObjectID;
		if (!ObjectID.isValid(value)) {
			${this.makeError({type:"objectID",actual:"value",messages:e})}
			return;
		}
	`),t.convert===!0?a.push("return new ObjectID(value)"):t.convert==="hexString"?a.push("return value.toString()"):a.push("return value"),{source:a.join(`
`)}}});var Se=o((tr,Ee)=>{function ot(t){for(let e in t.messages)e.startsWith("string")&&(t.messages[e]=t.messages[e].replace(" field "," key "))}Ee.exports=function({schema:e,messages:i},n,r){let a=[];a.push(`
		if (typeof value !== "object" || value === null || Array.isArray(value)) {
			${this.makeError({type:"record",actual:"value",messages:i})}
			return value;
		}
	`);let s=e.key||"string",u=e.value||"any";a.push(`
		const record = value;
		let sanitizedKey, sanitizedValue;
		const result = {};
		for (let key in value) {
	`),a.push("sanitizedKey = value = key;");let l=this.getRuleFromSchema(s);ot(l);let p=`
		sanitizedKey = ${r.async?"await ":""}context.fn[%%INDEX%%](key, field ? field + "." + key : key, record, errors, context);
	`;a.push(this.compileRule(l,r,null,p,"sanitizedKey")),a.push("sanitizedValue = value = record[key];");let c=this.getRuleFromSchema(u),f=`
		sanitizedValue = ${r.async?"await ":""}context.fn[%%INDEX%%](value, field ? field + "." + key : key, record, errors, context);
	`;return a.push(this.compileRule(c,r,`${n}[key]`,f,"sanitizedValue")),a.push("result[sanitizedKey] = sanitizedValue;"),a.push(`
		}
	`),a.push("return result;"),{source:a.join(`
`)}}});var Oe=o((rr,ke)=>{"use strict";var pt=/^-?[0-9]\d*(\.\d+)?$/,ct=/^[a-zA-Z]+$/,ft=/^[a-zA-Z0-9]+$/,dt=/^[a-zA-Z0-9_-]+$/,ht=/^[0-9a-fA-F]+$/,yt=/^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?$/;ke.exports=function({schema:e,messages:i},n,r){let a=[],s=!1;if(e.convert===!0&&(s=!0,a.push(`
			if (typeof value !== "string") {
				value = String(value);
			}
		`)),a.push(`
		if (typeof value !== "string") {
			${this.makeError({type:"string",actual:"value",messages:i})}
			return value;
		}

		var origValue = value;
	`),e.trim&&(s=!0,a.push(`
			value = value.trim();
		`)),e.trimLeft&&(s=!0,a.push(`
			value = value.trimLeft();
		`)),e.trimRight&&(s=!0,a.push(`
			value = value.trimRight();
		`)),e.padStart){s=!0;let u=e.padChar!=null?e.padChar:" ";a.push(`
			value = value.padStart(${e.padStart}, ${JSON.stringify(u)});
		`)}if(e.padEnd){s=!0;let u=e.padChar!=null?e.padChar:" ";a.push(`
			value = value.padEnd(${e.padEnd}, ${JSON.stringify(u)});
		`)}if(e.lowercase&&(s=!0,a.push(`
			value = value.toLowerCase();
		`)),e.uppercase&&(s=!0,a.push(`
			value = value.toUpperCase();
		`)),e.localeLowercase&&(s=!0,a.push(`
			value = value.toLocaleLowerCase();
		`)),e.localeUppercase&&(s=!0,a.push(`
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
		`),e.pattern!=null){let u=e.pattern;typeof e.pattern=="string"&&(u=new RegExp(e.pattern,e.patternFlags)),a.push(`
			if (!${u.toString()}.test(value)) {
				${this.makeError({type:"stringPattern",expected:`"${u.toString().replace(/"/g,"\\$&")}"`,actual:"origValue",messages:i})}
			}
		`)}if(e.contains!=null&&a.push(`
			if (value.indexOf("${e.contains}") === -1) {
				${this.makeError({type:"stringContains",expected:'"'+e.contains+'"',actual:"origValue",messages:i})}
			}
		`),e.enum!=null){let u=JSON.stringify(e.enum);a.push(`
			if (${u}.indexOf(value) === -1) {
				${this.makeError({type:"stringEnum",expected:'"'+e.enum.join(", ")+'"',actual:"origValue",messages:i})}
			}
		`)}return e.numeric===!0&&a.push(`
			if (!${pt.toString()}.test(value) ) {
				${this.makeError({type:"stringNumeric",actual:"origValue",messages:i})}
			}
		`),e.alpha===!0&&a.push(`
			if(!${ct.toString()}.test(value)) {
				${this.makeError({type:"stringAlpha",actual:"origValue",messages:i})}
			}
		`),e.alphanum===!0&&a.push(`
			if(!${ft.toString()}.test(value)) {
				${this.makeError({type:"stringAlphanum",actual:"origValue",messages:i})}
			}
		`),e.alphadash===!0&&a.push(`
			if(!${dt.toString()}.test(value)) {
				${this.makeError({type:"stringAlphadash",actual:"origValue",messages:i})}
			}
		`),e.hex===!0&&a.push(`
			if(value.length % 2 !== 0 || !${ht.toString()}.test(value)) {
				${this.makeError({type:"stringHex",actual:"origValue",messages:i})}
			}
		`),e.singleLine===!0&&a.push(`
			if(value.includes("\\n")) {
				${this.makeError({type:"stringSingleLine",messages:i})}
			}
		`),e.base64===!0&&a.push(`
			if(!${yt.toString()}.test(value)) {
				${this.makeError({type:"stringBase64",actual:"origValue",messages:i})}
			}
		`),a.push(`
		return value;
	`),{sanitized:s,source:a.join(`
`)}}});var je=o((ir,Te)=>{"use strict";Te.exports=function({schema:t,messages:e},i,n){let r=[];if(t.items!=null){if(!Array.isArray(t.items))throw new Error(`Invalid '${t.type}' schema. The 'items' field must be an array.`);if(t.items.length===0)throw new Error(`Invalid '${t.type}' schema. The 'items' field must not be an empty array.`)}if(r.push(`
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
		`);let s=`${i}[${a}]`,u=this.getRuleFromSchema(t.items[a]),l=`
			arr[${a}] = ${n.async?"await ":""}context.fn[%%INDEX%%](arr[${a}], (parentField ? parentField : "") + "[" + ${a} + "]", parent, errors, context);
		`;r.push(this.compileRule(u,n,s,l,`arr[${a}]`))}r.push(`
		return arr;
	`)}else r.push(`
		return value;
	`);return{source:r.join(`
`)}}});var we=o((ar,Re)=>{"use strict";var mt=/^https?:\/\/\S+/;Re.exports=function({schema:t,messages:e},i,n){let r=[];return r.push(`
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
		if (!${mt.toString()}.test(value)) {
			${this.makeError({type:"url",actual:"value",messages:e})}
		}

		return value;
	`),{source:r.join(`
`)}}});var Ne=o((nr,Ae)=>{"use strict";var vt=/^([0-9a-f]{8}-[0-9a-f]{4}-[1-6][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}|[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12})$/i;Ae.exports=function({schema:t,messages:e},i){let n=[];return n.push(`
		if (typeof value !== "string") {
			${this.makeError({type:"string",actual:"value",messages:e})}
			return value;
		}

		var val = value.toLowerCase();
		if (!${vt.toString()}.test(val)) {
			${this.makeError({type:"uuid",actual:"value",messages:e})}
			return value;
		}

		const version = val.charAt(14) | 0;
	`),parseInt(t.version)<7&&n.push(`
			if (${t.version} !== version) {
				${this.makeError({type:"uuidVersion",expected:t.version,actual:"version",messages:e})}
				return value;
			}
		`),n.push(`
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
	`),{source:n.join(`
`)}}});var qe=o((sr,Ve)=>{"use strict";var gt=/^((([a-f0-9][a-f0-9]+[-]){5}|([a-f0-9][a-f0-9]+[:]){5})([a-f0-9][a-f0-9])$)|(^([a-f0-9][a-f0-9][a-f0-9][a-f0-9]+[.]){2}([a-f0-9][a-f0-9][a-f0-9][a-f0-9]))$/i;Ve.exports=function({schema:t,messages:e},i,n){return{source:`
			if (typeof value !== "string") {
				${this.makeError({type:"string",actual:"value",messages:e})}
				return value;
			}

			var v = value.toLowerCase();
			if (!${gt.toString()}.test(v)) {
				${this.makeError({type:"mac",actual:"value",messages:e})}
			}
			
			return value;
		`}}});var Ce=o((lr,Ue)=>{"use strict";Ue.exports=function({schema:t,messages:e},i,n){return{source:`
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
		`}}});var De=o((ur,Fe)=>{var T,Ie,j,Pe,bt="prettier",xt="cli-highlight";Fe.exports=function(t){T||(T=require(bt),Ie={parser:"babel",useTabs:!1,printWidth:120,trailingComma:"none",tabWidth:4,singleQuote:!1,semi:!0,bracketSpacing:!0},j=require(xt),Pe={language:"js",theme:j.fromJson({keyword:["white","bold"],built_in:"magenta",literal:"cyan",number:"magenta",regexp:"red",string:["yellow","bold"],symbol:"plain",class:"blue",attr:"plain",function:["white","bold"],title:"plain",params:"green",comment:"grey"})});let e=T.format(t,Ie);return j.highlight(e,Pe)}});var ze=o((or,_e)=>{"use strict";var $;try{$=new Function("return Object.getPrototypeOf(async function(){}).constructor")()}catch{}var d=D(),$t=z();function Et(){return Object.assign({},L())}function St(){return{any:H(),array:B(),boolean:Z(),class:W(),custom:Y(),currency:te(),date:ie(),email:ne(),enum:le(),equal:oe(),forbidden:ce(),function:de(),multi:ye(),number:ve(),object:be(),objectID:$e(),record:Se(),string:Oe(),tuple:je(),url:we(),uuid:Ne(),mac:qe(),luhn:Ce()}}var R=class{constructor(e){if(this.opts={},this.defaults={},this.messages=Et(),this.rules=St(),this.aliases={},this.cache=new Map,e){if(d(this.opts,e),e.defaults&&d(this.defaults,e.defaults),e.messages)for(let i in e.messages)this.addMessage(i,e.messages[i]);if(e.aliases)for(let i in e.aliases)this.alias(i,e.aliases[i]);if(e.customRules)for(let i in e.customRules)this.add(i,e.customRules[i]);if(e.plugins){let i=e.plugins;if(!Array.isArray(i))throw new Error("Plugins type must be array");i.forEach(this.plugin.bind(this))}if(this.opts.debug){let i=function(n){return n};typeof window>"u"&&(i=De()),this._formatter=i}}}validate(e,i){return this.compile(i)(e)}wrapRequiredCheckSourceCode(e,i,n,r){let a=[],{considerNullAsAValue:s=!1}=this.opts,u,l=e.schema.optional===!0||e.schema.type==="forbidden",p=s?e.schema.nullable!==!1||e.schema.type==="forbidden":e.schema.optional===!0||e.schema.nullable===!0||e.schema.type==="forbidden";if(s?e.schema.default!=null&&e.schema.default!=null:e.schema.default!=null){l=!1,s?e.schema.nullable===!1&&(p=!1):e.schema.nullable!==!0&&(p=!1);let f;typeof e.schema.default=="function"?(n.customs[e.index]||(n.customs[e.index]={}),n.customs[e.index].defaultFn=e.schema.default,f=`context.customs[${e.index}].defaultFn.call(this, context.rules[${e.index}].schema, field, parent, context)`):f=JSON.stringify(e.schema.default),u=`
				value = ${f};
				${r} = value;
			`}else u=this.makeError({type:"required",actual:"value",messages:e.messages});return a.push(`
			${`if (value === undefined) { ${l?`
// allow undefined
`:u} }`}
			${`else if (value === null) { ${p?`
// allow null
`:u} }`}
			${i?`else { ${i} }`:""}
		`),a.join(`
`)}compile(e){if(e===null||typeof e!="object")throw new Error("Invalid schema.");let i=this,n={index:0,async:e.$$async===!0,rules:[],fn:[],customs:{},utils:{replace:$t}};if(this.cache.clear(),delete e.$$async,n.async&&!$)throw new Error("Asynchronous mode is not supported.");if(e.$$root!==!0)if(Array.isArray(e))e=this.getRuleFromSchema(e).schema;else{let c=Object.assign({},e);e={type:"object",strict:c.$$strict,properties:c},delete c.$$strict}let r=["var errors = [];","var field;","var parent = null;",`var label = ${e.label?'"'+e.label+'"':"null"};`],a=this.getRuleFromSchema(e);r.push(this.compileRule(a,n,null,`${n.async?"await ":""}context.fn[%%INDEX%%](value, field, null, errors, context, label);`,"value")),r.push("if (errors.length) {"),r.push(`
			return errors.map(err => {
				if (err.message) {
					err.message = context.utils.replace(err.message, /\\{field\\}/g, err.label || err.field);
					err.message = context.utils.replace(err.message, /\\{expected\\}/g, err.expected);
					err.message = context.utils.replace(err.message, /\\{actual\\}/g, err.actual);
				}
				if(!err.label) delete err.label
				return err;
			});
		`),r.push("}"),r.push("return true;");let s=r.join(`
`),u=n.async?$:Function,l=new u("value","context",s);this.opts.debug&&console.log(this._formatter(`// Main check function
`+l.toString())),this.cache.clear();let p=function(c,f){return n.data=c,f&&f.meta&&(n.meta=f.meta),l.call(i,c,n)};return p.async=n.async,p}compileRule(e,i,n,r,a){let s=[],u=this.cache.get(e.schema);if(u)e=u,e.cycle=!0,e.cycleStack=[],s.push(this.wrapRequiredCheckSourceCode(e,`
				var rule = context.rules[${e.index}];
				if (rule.cycleStack.indexOf(value) === -1) {
					rule.cycleStack.push(value);
					${r.replace(/%%INDEX%%/g,e.index)}
					rule.cycleStack.pop(value);
				}
			`,i,a));else{this.cache.set(e.schema,e),e.index=i.index,i.rules[i.index]=e;let l=n??"$$root";i.index++;let p=e.ruleFunction.call(this,e,n,i);p.source=p.source.replace(/%%INDEX%%/g,e.index);let c=i.async?$:Function,f=new c("value","field","parent","errors","context","label",p.source);i.fn[e.index]=f.bind(this),s.push(this.wrapRequiredCheckSourceCode(e,r.replace(/%%INDEX%%/g,e.index),i,a)),s.push(this.makeCustomValidator({vName:a,path:l,schema:e.schema,context:i,messages:e.messages,ruleIndex:e.index})),this.opts.debug&&console.log(this._formatter(`// Context.fn[${e.index}]
`+f.toString()))}return s.join(`
`)}getRuleFromSchema(e){e=this.resolveType(e);let i=this.aliases[e.type];i&&(delete e.type,e=d(e,i,{skipIfExist:!0}));let n=this.rules[e.type];if(!n)throw new Error("Invalid '"+e.type+"' type in validator schema.");return{messages:Object.assign({},this.messages,e.messages),schema:d(e,this.defaults[e.type],{skipIfExist:!0}),ruleFunction:n}}parseShortHand(e){let i=e.split("|").map(a=>a.trim()),n=i[0],r;return n.endsWith("[]")?r=this.getRuleFromSchema({type:"array",items:n.slice(0,-2)}).schema:r={type:i[0]},i.slice(1).map(a=>{let s=a.indexOf(":");if(s!==-1){let u=a.substr(0,s).trim(),l=a.substr(s+1).trim();l==="true"||l==="false"?l=l==="true":Number.isNaN(Number(l))||(l=Number(l)),r[u]=l}else a.startsWith("no-")?r[a.slice(3)]=!1:r[a]=!0}),r}makeError({type:e,field:i,expected:n,actual:r,messages:a}){let s={type:`"${e}"`,message:`"${a[e]}"`};return i?s.field=`"${i}"`:s.field="field",n!=null&&(s.expected=n),r!=null&&(s.actual=r),s.label="label",`errors.push({ ${Object.keys(s).map(l=>`${l}: ${s[l]}`).join(", ")} });`}makeCustomValidator({vName:e="value",fnName:i="custom",ruleIndex:n,path:r,schema:a,context:s,messages:u}){let l="rule"+n,p="fnCustomErrors"+n;if(typeof a[i]=="function"){if(s.customs[n]?(s.customs[n].messages=u,s.customs[n].schema=a):s.customs[n]={messages:u,schema:a},this.opts.useNewCustomCheckerFunction)return`
               		const ${l} = context.customs[${n}];
					const ${p} = [];
					${e} = ${s.async?"await ":""}${l}.schema.${i}.call(this, ${e}, ${p} , ${l}.schema, "${r}", parent, context);
					if (Array.isArray(${p} )) {
                  		${p} .forEach(err => errors.push(Object.assign({ message: ${l}.messages[err.type], field }, err)));
					}
				`;let c="res_"+l;return`
				const ${l} = context.customs[${n}];
				const ${c} = ${s.async?"await ":""}${l}.schema.${i}.call(this, ${e}, ${l}.schema, "${r}", parent, context);
				if (Array.isArray(${c})) {
					${c}.forEach(err => errors.push(Object.assign({ message: ${l}.messages[err.type], field }, err)));
				}
		`}return""}add(e,i){this.rules[e]=i}addMessage(e,i){this.messages[e]=i}alias(e,i){if(this.rules[e])throw new Error("Alias name must not be a rule name");this.aliases[e]=i}plugin(e){if(typeof e!="function")throw new Error("Plugin fn type must be function");return e(this)}resolveType(e){if(typeof e=="string")e=this.parseShortHand(e);else if(Array.isArray(e)){if(e.length===0)throw new Error("Invalid schema.");e={type:"multi",rules:e},e.rules.map(a=>this.getRuleFromSchema(a)).every(a=>a.schema.optional===!0)&&(e.optional=!0);let n=!this.opts.considerNullAsAValue;e.rules.map(a=>this.getRuleFromSchema(a)).every(a=>a.schema.nullable===n)&&(e.nullable=n)}if(e.$$type){let i=e.$$type,n=this.getRuleFromSchema(i).schema;delete e.$$type;let r=Object.assign({},e);for(let a in e)delete e[a];d(e,n,{skipIfExist:!0}),e.props=r}return e}normalize(e){let i=this.resolveType(e);if(this.aliases[i.type]&&(i=d(i,this.normalize(this.aliases[i.type]),{skipIfExists:!0})),i=d(i,this.defaults[i.type],{skipIfExist:!0}),i.type==="multi")return i.rules=i.rules.map(n=>this.normalize(n)),i.optional=i.rules.every(n=>n.optional===!0),i;if(i.type==="array")return i.items=this.normalize(i.items),i;if(i.type==="object"&&i.props&&Object.entries(i.props).forEach(([n,r])=>i.props[n]=this.normalize(r)),typeof e=="object")if(e.type){let n=this.normalize(e.type);d(i,n,{skipIfExists:!0})}else Object.entries(e).forEach(([n,r])=>i[n]=this.normalize(r));return i}};_e.exports=R});var Le=o((pr,Me)=>{Me.exports=ze()});var Ot={};Ye(Ot,{GetUserController:()=>w,default:()=>kt});module.exports=tt(Ot);(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="25995464-f4d2-46b1-b41b-fbe65260f3ca",t._sentryDebugIdIdentifier="sentry-dbid-25995464-f4d2-46b1-b41b-fbe65260f3ca")}catch{}})();var S=class{constructor(e,i){this.body=e;this.statusCode=i}},y=class t extends S{constructor(i){super(i,200);this.body=i;Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace(this,t)}};var m=class t extends Error{constructor(i,n,r,a=500){super(i);this.message=i;this.data=n;this.stack=r;this.statusCode=a;this.name="HttpError",Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace(this,t)}},v=class t extends m{constructor(i,n="HttpBadRequestError",r,a="BAD_REQUEST",s=400){super(a,i,r,s);this.data=i;this.name=n;this.stack=r;this.message=a;this.statusCode=s;Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace(this,t)}};var g=class t extends m{constructor(i,n,r="HttpNotFoundError",a="NOT_FOUND",s=404){super(a,i,n,s);this.data=i;this.stack=n;this.name=r;this.message=a;this.statusCode=s;Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace(this,t)}};var U=t=>({user_id:t.user_id,name:t.name,email:t.email,email_verified:t.email_verified,role:t.role,languages:t.languages,created_at:t.created_at,bio:t.bio||void 0,photo_url:t.photo_url||void 0,deleted_at:t.deleted_at||void 0,approved_at:t.approved_at});var k=class{constructor(e){this.entityModel=e;this.clientSession=e}clientSession;start(){return this.clientSession=[],!!this.clientSession}getSession(){if(this.clientSession)return this.clientSession;throw new Error("START_DATABASE_ERROR")}updateSession(e){return this.clientSession=e,this.clientSession}},C=new k([]);var b=class{async execute(e){return C.getSession().find(n=>n.user_id===e.user_id||n.auth_token===e.user_id||n.email===e.user_id)||null}};var x=class{constructor(e,i=new b){this.logger=e;this.getUserRepository=i;this.logger=this.logger.getChild("GetUserUseCase")}async execute(e){this.logger.debug("execute input",JSON.stringify(e));let i=await this.getUserRepository.execute({user_id:e.user_id});return this.logger.debug("get user repository response",i),this.logger.debug("execute output",i),i}};var I=({optional:t=!1})=>({type:"uuid",version:4,optional:t});var Ge=et(Le()),E=class{async validate(e,i){let r=await new Ge.default({useNewCustomCheckerFunction:!0}).validate(e,i);return r===!0?{isValid:r,errors:[]}:{isValid:!1,errors:r.map(a=>a.message||`${a.field} - ${a.type}`)}}};var w=class{constructor(e,i=new E,n=new x(e)){this.logger=e;this.requestValidator=i;this.getUserUseCase=n;this.logger=this.logger.getChild("GetUserController")}async handle(e){let{user_id:i}=e.params,n=await this.requestValidator.validate({user_id:i},{user_id:I({optional:!1})});if(!n.isValid)return new v(n.errors);let r=await this.getUserUseCase.execute({user_id:i});return r?new y(U(r)):new g("USER_NOT_FOUND")}};var kt=void 0;0&&(module.exports={GetUserController});
//# sourceMappingURL=GetUserController.js.map
