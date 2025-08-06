var Xe=Object.create;var y=Object.defineProperty;var Ke=Object.getOwnPropertyDescriptor;var We=Object.getOwnPropertyNames;var Qe=Object.getPrototypeOf,Ye=Object.prototype.hasOwnProperty;var o=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),et=(t,e)=>{for(var i in e)y(t,i,{get:e[i],enumerable:!0})},C=(t,e,i,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of We(e))!Ye.call(t,r)&&r!==i&&y(t,r,{get:()=>e[r],enumerable:!(s=Ke(e,r))||s.enumerable});return t};var tt=(t,e,i)=>(i=t!=null?Xe(Qe(t)):{},C(e||!t||!t.__esModule?y(i,"default",{value:t,enumerable:!0}):i,t)),rt=t=>C(y({},"__esModule",{value:!0}),t);var D=o((Ft,F)=>{"use strict";function it(t){return typeof t!="object"||Array.isArray(t)||t==null?!1:Object.keys(t).length>0}function P(t,e,i={}){for(let s in e)if(it(e[s]))t[s]=t[s]||{},P(t[s],e[s],i);else{if(i.skipIfExist===!0&&t[s]!==void 0)continue;t[s]=e[s]}return t}F.exports=P});var M=o((Dt,z)=>{function at(t){return t===void 0||t===null?"":typeof t.toString=="function"?t:typeof t}z.exports=(t,e,i)=>t.replace(e,at(i))});var H=o((zt,L)=>{"use strict";L.exports={required:"The '{field}' field is required.",string:"The '{field}' field must be a string.",stringEmpty:"The '{field}' field must not be empty.",stringMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",stringMax:"The '{field}' field length must be less than or equal to {expected} characters long.",stringLength:"The '{field}' field length must be {expected} characters long.",stringPattern:"The '{field}' field fails to match the required pattern.",stringContains:"The '{field}' field must contain the '{expected}' text.",stringEnum:"The '{field}' field does not match any of the allowed values.",stringNumeric:"The '{field}' field must be a numeric string.",stringAlpha:"The '{field}' field must be an alphabetic string.",stringAlphanum:"The '{field}' field must be an alphanumeric string.",stringAlphadash:"The '{field}' field must be an alphadash string.",stringHex:"The '{field}' field must be a hex string.",stringSingleLine:"The '{field}' field must be a single line string.",stringBase64:"The '{field}' field must be a base64 string.",number:"The '{field}' field must be a number.",numberMin:"The '{field}' field must be greater than or equal to {expected}.",numberMax:"The '{field}' field must be less than or equal to {expected}.",numberEqual:"The '{field}' field must be equal to {expected}.",numberNotEqual:"The '{field}' field can't be equal to {expected}.",numberInteger:"The '{field}' field must be an integer.",numberPositive:"The '{field}' field must be a positive number.",numberNegative:"The '{field}' field must be a negative number.",array:"The '{field}' field must be an array.",arrayEmpty:"The '{field}' field must not be an empty array.",arrayMin:"The '{field}' field must contain at least {expected} items.",arrayMax:"The '{field}' field must contain less than or equal to {expected} items.",arrayLength:"The '{field}' field must contain {expected} items.",arrayContains:"The '{field}' field must contain the '{expected}' item.",arrayUnique:"The '{actual}' value in '{field}' field does not unique the '{expected}' values.",arrayEnum:"The '{actual}' value in '{field}' field does not match any of the '{expected}' values.",tuple:"The '{field}' field must be an array.",tupleEmpty:"The '{field}' field must not be an empty array.",tupleLength:"The '{field}' field must contain {expected} items.",boolean:"The '{field}' field must be a boolean.",currency:"The '{field}' must be a valid currency format",date:"The '{field}' field must be a Date.",dateMin:"The '{field}' field must be greater than or equal to {expected}.",dateMax:"The '{field}' field must be less than or equal to {expected}.",enumValue:"The '{field}' field value '{expected}' does not match any of the allowed values.",equalValue:"The '{field}' field value must be equal to '{expected}'.",equalField:"The '{field}' field value must be equal to '{expected}' field value.",forbidden:"The '{field}' field is forbidden.",function:"The '{field}' field must be a function.",email:"The '{field}' field must be a valid e-mail.",emailEmpty:"The '{field}' field must not be empty.",emailMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",emailMax:"The '{field}' field length must be less than or equal to {expected} characters long.",luhn:"The '{field}' field must be a valid checksum luhn.",mac:"The '{field}' field must be a valid MAC address.",object:"The '{field}' must be an Object.",objectStrict:"The object '{field}' contains forbidden keys: '{actual}'.",objectMinProps:"The object '{field}' must contain at least {expected} properties.",objectMaxProps:"The object '{field}' must contain {expected} properties at most.",url:"The '{field}' field must be a valid URL.",urlEmpty:"The '{field}' field must not be empty.",uuid:"The '{field}' field must be a valid UUID.",uuidVersion:"The '{field}' field must be a valid UUID version provided.",classInstanceOf:"The '{field}' field must be an instance of the '{expected}' class.",objectID:"The '{field}' field must be an valid ObjectID",record:"The '{field}' must be an Object."}});var G=o((Mt,J)=>{"use strict";J.exports=function(){let t=[];return t.push(`
		return value;
	`),{source:t.join(`
`)}}});var B=o((Lt,Z)=>{"use strict";Z.exports=function({schema:t,messages:e},i,s){let r=[],a=!1;if(t.convert===!0&&(a=!0,r.push(`
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
		`);let n=i+"[]",u=this.getRuleFromSchema(t.items),l=`arr[i] = ${s.async?"await ":""}context.fn[%%INDEX%%](arr[i], (parentField ? parentField : "") + "[" + i + "]", parent, errors, context)`;r.push(this.compileRule(u,s,n,l,"arr[i]")),r.push(`
			}
		`),r.push(`
		return arr;
	`)}else r.push(`
		return value;
	`);return{sanitized:a,source:r.join(`
`)}}});var K=o((Ht,X)=>{"use strict";X.exports=function({schema:t,messages:e},i,s){let r=[],a=!1;return r.push(`
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
`)}}});var Q=o((Jt,W)=>{"use strict";W.exports=function({schema:t,messages:e,index:i},s,r){let a=[],n=t.instanceOf.name?t.instanceOf.name:"<UnknowClass>";return r.customs[i]?r.customs[i].schema=t:r.customs[i]={schema:t},a.push(`
		if (!(value instanceof context.customs[${i}].schema.instanceOf))
			${this.makeError({type:"classInstanceOf",actual:"value",expected:"'"+n+"'",messages:e})}
	`),a.push(`
		return value;
	`),{source:a.join(`
`)}}});var ee=o((Gt,Y)=>{"use strict";Y.exports=function({schema:t,messages:e,index:i},s,r){let a=[];return a.push(`
		${this.makeCustomValidator({fnName:"check",path:s,schema:t,messages:e,context:r,ruleIndex:i})}
		return value;
	`),{source:a.join(`
`)}}});var re=o((Zt,te)=>{"use strict";var st="(?=.*\\d)^(-?~1|~1-?)(([0-9]\\d{0,2}(~2\\d{3})*)|0)?(\\~3\\d{1,2})?$";te.exports=function({schema:t,messages:e},i,s){let r=t.currencySymbol||null,a=t.thousandSeparator||",",n=t.decimalSeparator||".",u=t.customRegex,l=!t.symbolOptional,p=st.replace(/~1/g,r?`\\${r}${l?"":"?"}`:"").replace("~2",a).replace("~3",n),c=[];return c.push(`
		if (!value.match(${u||new RegExp(p)})) {
			${this.makeError({type:"currency",actual:"value",messages:e})}
			return value;
		}

		return value;
	`),{source:c.join(`
`)}}});var ae=o((Bt,ie)=>{"use strict";ie.exports=function({schema:t,messages:e},i,s){let r=[],a=!1;return r.push(`
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
`)}}});var ne=o((Xt,se)=>{"use strict";var nt=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,lt=/^\S+@\S+\.\S+$/;se.exports=function({schema:t,messages:e},i,s){let r=[],a=t.mode=="precise"?nt:lt,n=!1;return r.push(`
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
		if (!${a.toString()}.test(value)) {
			${this.makeError({type:"email",actual:"value",messages:e})}
		}

		return value;
	`),{sanitized:n,source:r.join(`
`)}}});var ue=o((Kt,le)=>{"use strict";le.exports=function({schema:t,messages:e},i,s){return{source:`
			if (${JSON.stringify(t.values||[])}.indexOf(value) === -1)
				${this.makeError({type:"enumValue",expected:'"'+t.values.join(", ")+'"',actual:"value",messages:e})}
			
			return value;
		`}}});var pe=o((Wt,oe)=>{"use strict";oe.exports=function({schema:t,messages:e},i,s){let r=[];return t.field?(t.strict?r.push(`
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
`)}}});var fe=o((Qt,ce)=>{"use strict";ce.exports=function({schema:e,messages:i},s,r){let a=[];return a.push(`
		if (value !== null && value !== undefined) {
	`),e.remove?a.push(`
			return undefined;
		`):a.push(`
			${this.makeError({type:"forbidden",actual:"value",messages:i})}
		`),a.push(`
		}

		return value;
	`),{source:a.join(`
`)}}});var he=o((Yt,de)=>{"use strict";de.exports=function({schema:t,messages:e},i,s){return{source:`
			if (typeof value !== "function")
				${this.makeError({type:"function",actual:"value",messages:e})}

			return value;
		`}}});var me=o((er,ye)=>{"use strict";ye.exports=function({schema:t,messages:e},i,s){let r=[];r.push(`
		var hasValid = false;
		var newVal = value;
		var checkErrors = [];
		var errorsSize = errors.length;
	`);for(let a=0;a<t.rules.length;a++){r.push(`
			if (!hasValid) {
				var _errors = [];
		`);let n=this.getRuleFromSchema(t.rules[a]);r.push(this.compileRule(n,s,i,`var tmpVal = ${s.async?"await ":""}context.fn[%%INDEX%%](value, field, parent, _errors, context);`,"tmpVal")),r.push(`
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
`)}}});var ge=o((tr,ve)=>{"use strict";ve.exports=function({schema:t,messages:e},i,s){let r=[];r.push(`
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
`)}}});var xe=o((rr,be)=>{"use strict";var ut=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,ot=/["'\\\n\r\u2028\u2029]/g;function R(t){return t.replace(ot,function(e){switch(e){case'"':case"'":case"\\":return"\\"+e;case`
`:return"\\n";case"\r":return"\\r";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029"}})}be.exports=function({schema:t,messages:e},i,s){let r=[];r.push(`
		if (typeof value !== "object" || value === null || Array.isArray(value)) {
			${this.makeError({type:"object",actual:"value",messages:e})}
			return value;
		}
	`);let a=t.properties||t.props;if(a){r.push("var parentObj = value;"),r.push("var parentField = field;");let n=Object.keys(a);for(let u=0;u<n.length;u++){let l=n[u],p=R(l),c=ut.test(p)?`.${p}`:`['${p}']`,f=`parentObj${c}`,V=(i?i+".":"")+l,q=a[l].label,Ge=q?`'${R(q)}'`:void 0;r.push(`
// Field: ${R(V)}`),r.push(`field = parentField ? parentField + "${c}" : "${p}";`),r.push(`value = ${f};`),r.push(`label = ${Ge}`);let Ze=this.getRuleFromSchema(a[l]),Be=`
				${f} = ${s.async?"await ":""}context.fn[%%INDEX%%](value, field, parentObj, errors, context, label);
			`;r.push(this.compileRule(Ze,s,V,Be,f)),this.opts.haltOnFirstError===!0&&r.push("if (errors.length) return parentObj;")}if(t.strict){let u=Object.keys(a);r.push(`
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
`)}}});var Ee=o((ir,$e)=>{"use strict";$e.exports=function({schema:t,messages:e,index:i},s,r){let a=[];return r.customs[i]?r.customs[i].schema=t:r.customs[i]={schema:t},a.push(`
		const ObjectID = context.customs[${i}].schema.ObjectID;
		if (!ObjectID.isValid(value)) {
			${this.makeError({type:"objectID",actual:"value",messages:e})}
			return;
		}
	`),t.convert===!0?a.push("return new ObjectID(value)"):t.convert==="hexString"?a.push("return value.toString()"):a.push("return value"),{source:a.join(`
`)}}});var ke=o((ar,Se)=>{function pt(t){for(let e in t.messages)e.startsWith("string")&&(t.messages[e]=t.messages[e].replace(" field "," key "))}Se.exports=function({schema:e,messages:i},s,r){let a=[];a.push(`
		if (typeof value !== "object" || value === null || Array.isArray(value)) {
			${this.makeError({type:"record",actual:"value",messages:i})}
			return value;
		}
	`);let n=e.key||"string",u=e.value||"any";a.push(`
		const record = value;
		let sanitizedKey, sanitizedValue;
		const result = {};
		for (let key in value) {
	`),a.push("sanitizedKey = value = key;");let l=this.getRuleFromSchema(n);pt(l);let p=`
		sanitizedKey = ${r.async?"await ":""}context.fn[%%INDEX%%](key, field ? field + "." + key : key, record, errors, context);
	`;a.push(this.compileRule(l,r,null,p,"sanitizedKey")),a.push("sanitizedValue = value = record[key];");let c=this.getRuleFromSchema(u),f=`
		sanitizedValue = ${r.async?"await ":""}context.fn[%%INDEX%%](value, field ? field + "." + key : key, record, errors, context);
	`;return a.push(this.compileRule(c,r,`${s}[key]`,f,"sanitizedValue")),a.push("result[sanitizedKey] = sanitizedValue;"),a.push(`
		}
	`),a.push("return result;"),{source:a.join(`
`)}}});var Te=o((sr,Oe)=>{"use strict";var ct=/^-?[0-9]\d*(\.\d+)?$/,ft=/^[a-zA-Z]+$/,dt=/^[a-zA-Z0-9]+$/,ht=/^[a-zA-Z0-9_-]+$/,yt=/^[0-9a-fA-F]+$/,mt=/^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?$/;Oe.exports=function({schema:e,messages:i},s,r){let a=[],n=!1;if(e.convert===!0&&(n=!0,a.push(`
			if (typeof value !== "string") {
				value = String(value);
			}
		`)),a.push(`
		if (typeof value !== "string") {
			${this.makeError({type:"string",actual:"value",messages:i})}
			return value;
		}

		var origValue = value;
	`),e.trim&&(n=!0,a.push(`
			value = value.trim();
		`)),e.trimLeft&&(n=!0,a.push(`
			value = value.trimLeft();
		`)),e.trimRight&&(n=!0,a.push(`
			value = value.trimRight();
		`)),e.padStart){n=!0;let u=e.padChar!=null?e.padChar:" ";a.push(`
			value = value.padStart(${e.padStart}, ${JSON.stringify(u)});
		`)}if(e.padEnd){n=!0;let u=e.padChar!=null?e.padChar:" ";a.push(`
			value = value.padEnd(${e.padEnd}, ${JSON.stringify(u)});
		`)}if(e.lowercase&&(n=!0,a.push(`
			value = value.toLowerCase();
		`)),e.uppercase&&(n=!0,a.push(`
			value = value.toUpperCase();
		`)),e.localeLowercase&&(n=!0,a.push(`
			value = value.toLocaleLowerCase();
		`)),e.localeUppercase&&(n=!0,a.push(`
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
			if (!${ct.toString()}.test(value) ) {
				${this.makeError({type:"stringNumeric",actual:"origValue",messages:i})}
			}
		`),e.alpha===!0&&a.push(`
			if(!${ft.toString()}.test(value)) {
				${this.makeError({type:"stringAlpha",actual:"origValue",messages:i})}
			}
		`),e.alphanum===!0&&a.push(`
			if(!${dt.toString()}.test(value)) {
				${this.makeError({type:"stringAlphanum",actual:"origValue",messages:i})}
			}
		`),e.alphadash===!0&&a.push(`
			if(!${ht.toString()}.test(value)) {
				${this.makeError({type:"stringAlphadash",actual:"origValue",messages:i})}
			}
		`),e.hex===!0&&a.push(`
			if(value.length % 2 !== 0 || !${yt.toString()}.test(value)) {
				${this.makeError({type:"stringHex",actual:"origValue",messages:i})}
			}
		`),e.singleLine===!0&&a.push(`
			if(value.includes("\\n")) {
				${this.makeError({type:"stringSingleLine",messages:i})}
			}
		`),e.base64===!0&&a.push(`
			if(!${mt.toString()}.test(value)) {
				${this.makeError({type:"stringBase64",actual:"origValue",messages:i})}
			}
		`),a.push(`
		return value;
	`),{sanitized:n,source:a.join(`
`)}}});var Ae=o((nr,Re)=>{"use strict";Re.exports=function({schema:t,messages:e},i,s){let r=[];if(t.items!=null){if(!Array.isArray(t.items))throw new Error(`Invalid '${t.type}' schema. The 'items' field must be an array.`);if(t.items.length===0)throw new Error(`Invalid '${t.type}' schema. The 'items' field must not be an empty array.`)}if(r.push(`
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
		`);let n=`${i}[${a}]`,u=this.getRuleFromSchema(t.items[a]),l=`
			arr[${a}] = ${s.async?"await ":""}context.fn[%%INDEX%%](arr[${a}], (parentField ? parentField : "") + "[" + ${a} + "]", parent, errors, context);
		`;r.push(this.compileRule(u,s,n,l,`arr[${a}]`))}r.push(`
		return arr;
	`)}else r.push(`
		return value;
	`);return{source:r.join(`
`)}}});var Ue=o((lr,je)=>{"use strict";var vt=/^https?:\/\/\S+/;je.exports=function({schema:t,messages:e},i,s){let r=[];return r.push(`
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
		if (!${vt.toString()}.test(value)) {
			${this.makeError({type:"url",actual:"value",messages:e})}
		}

		return value;
	`),{source:r.join(`
`)}}});var Ne=o((ur,we)=>{"use strict";var gt=/^([0-9a-f]{8}-[0-9a-f]{4}-[1-6][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}|[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12})$/i;we.exports=function({schema:t,messages:e},i){let s=[];return s.push(`
		if (typeof value !== "string") {
			${this.makeError({type:"string",actual:"value",messages:e})}
			return value;
		}

		var val = value.toLowerCase();
		if (!${gt.toString()}.test(val)) {
			${this.makeError({type:"uuid",actual:"value",messages:e})}
			return value;
		}

		const version = val.charAt(14) | 0;
	`),parseInt(t.version)<7&&s.push(`
			if (${t.version} !== version) {
				${this.makeError({type:"uuidVersion",expected:t.version,actual:"version",messages:e})}
				return value;
			}
		`),s.push(`
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
	`),{source:s.join(`
`)}}});var Ve=o((or,Ie)=>{"use strict";var bt=/^((([a-f0-9][a-f0-9]+[-]){5}|([a-f0-9][a-f0-9]+[:]){5})([a-f0-9][a-f0-9])$)|(^([a-f0-9][a-f0-9][a-f0-9][a-f0-9]+[.]){2}([a-f0-9][a-f0-9][a-f0-9][a-f0-9]))$/i;Ie.exports=function({schema:t,messages:e},i,s){return{source:`
			if (typeof value !== "string") {
				${this.makeError({type:"string",actual:"value",messages:e})}
				return value;
			}

			var v = value.toLowerCase();
			if (!${bt.toString()}.test(v)) {
				${this.makeError({type:"mac",actual:"value",messages:e})}
			}
			
			return value;
		`}}});var Ce=o((pr,qe)=>{"use strict";qe.exports=function({schema:t,messages:e},i,s){return{source:`
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
		`}}});var De=o((cr,Fe)=>{var A,_e,j,Pe,xt="prettier",$t="cli-highlight";Fe.exports=function(t){A||(A=require(xt),_e={parser:"babel",useTabs:!1,printWidth:120,trailingComma:"none",tabWidth:4,singleQuote:!1,semi:!0,bracketSpacing:!0},j=require($t),Pe={language:"js",theme:j.fromJson({keyword:["white","bold"],built_in:"magenta",literal:"cyan",number:"magenta",regexp:"red",string:["yellow","bold"],symbol:"plain",class:"blue",attr:"plain",function:["white","bold"],title:"plain",params:"green",comment:"grey"})});let e=A.format(t,_e);return j.highlight(e,Pe)}});var Me=o((fr,ze)=>{"use strict";var S;try{S=new Function("return Object.getPrototypeOf(async function(){}).constructor")()}catch{}var d=D(),Et=M();function St(){return Object.assign({},H())}function kt(){return{any:G(),array:B(),boolean:K(),class:Q(),custom:ee(),currency:re(),date:ae(),email:ne(),enum:ue(),equal:pe(),forbidden:fe(),function:he(),multi:me(),number:ge(),object:xe(),objectID:Ee(),record:ke(),string:Te(),tuple:Ae(),url:Ue(),uuid:Ne(),mac:Ve(),luhn:Ce()}}var U=class{constructor(e){if(this.opts={},this.defaults={},this.messages=St(),this.rules=kt(),this.aliases={},this.cache=new Map,e){if(d(this.opts,e),e.defaults&&d(this.defaults,e.defaults),e.messages)for(let i in e.messages)this.addMessage(i,e.messages[i]);if(e.aliases)for(let i in e.aliases)this.alias(i,e.aliases[i]);if(e.customRules)for(let i in e.customRules)this.add(i,e.customRules[i]);if(e.plugins){let i=e.plugins;if(!Array.isArray(i))throw new Error("Plugins type must be array");i.forEach(this.plugin.bind(this))}if(this.opts.debug){let i=function(s){return s};typeof window>"u"&&(i=De()),this._formatter=i}}}validate(e,i){return this.compile(i)(e)}wrapRequiredCheckSourceCode(e,i,s,r){let a=[],{considerNullAsAValue:n=!1}=this.opts,u,l=e.schema.optional===!0||e.schema.type==="forbidden",p=n?e.schema.nullable!==!1||e.schema.type==="forbidden":e.schema.optional===!0||e.schema.nullable===!0||e.schema.type==="forbidden";if(n?e.schema.default!=null&&e.schema.default!=null:e.schema.default!=null){l=!1,n?e.schema.nullable===!1&&(p=!1):e.schema.nullable!==!0&&(p=!1);let f;typeof e.schema.default=="function"?(s.customs[e.index]||(s.customs[e.index]={}),s.customs[e.index].defaultFn=e.schema.default,f=`context.customs[${e.index}].defaultFn.call(this, context.rules[${e.index}].schema, field, parent, context)`):f=JSON.stringify(e.schema.default),u=`
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
`)}compile(e){if(e===null||typeof e!="object")throw new Error("Invalid schema.");let i=this,s={index:0,async:e.$$async===!0,rules:[],fn:[],customs:{},utils:{replace:Et}};if(this.cache.clear(),delete e.$$async,s.async&&!S)throw new Error("Asynchronous mode is not supported.");if(e.$$root!==!0)if(Array.isArray(e))e=this.getRuleFromSchema(e).schema;else{let c=Object.assign({},e);e={type:"object",strict:c.$$strict,properties:c},delete c.$$strict}let r=["var errors = [];","var field;","var parent = null;",`var label = ${e.label?'"'+e.label+'"':"null"};`],a=this.getRuleFromSchema(e);r.push(this.compileRule(a,s,null,`${s.async?"await ":""}context.fn[%%INDEX%%](value, field, null, errors, context, label);`,"value")),r.push("if (errors.length) {"),r.push(`
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
`),u=s.async?S:Function,l=new u("value","context",n);this.opts.debug&&console.log(this._formatter(`// Main check function
`+l.toString())),this.cache.clear();let p=function(c,f){return s.data=c,f&&f.meta&&(s.meta=f.meta),l.call(i,c,s)};return p.async=s.async,p}compileRule(e,i,s,r,a){let n=[],u=this.cache.get(e.schema);if(u)e=u,e.cycle=!0,e.cycleStack=[],n.push(this.wrapRequiredCheckSourceCode(e,`
				var rule = context.rules[${e.index}];
				if (rule.cycleStack.indexOf(value) === -1) {
					rule.cycleStack.push(value);
					${r.replace(/%%INDEX%%/g,e.index)}
					rule.cycleStack.pop(value);
				}
			`,i,a));else{this.cache.set(e.schema,e),e.index=i.index,i.rules[i.index]=e;let l=s??"$$root";i.index++;let p=e.ruleFunction.call(this,e,s,i);p.source=p.source.replace(/%%INDEX%%/g,e.index);let c=i.async?S:Function,f=new c("value","field","parent","errors","context","label",p.source);i.fn[e.index]=f.bind(this),n.push(this.wrapRequiredCheckSourceCode(e,r.replace(/%%INDEX%%/g,e.index),i,a)),n.push(this.makeCustomValidator({vName:a,path:l,schema:e.schema,context:i,messages:e.messages,ruleIndex:e.index})),this.opts.debug&&console.log(this._formatter(`// Context.fn[${e.index}]
`+f.toString()))}return n.join(`
`)}getRuleFromSchema(e){e=this.resolveType(e);let i=this.aliases[e.type];i&&(delete e.type,e=d(e,i,{skipIfExist:!0}));let s=this.rules[e.type];if(!s)throw new Error("Invalid '"+e.type+"' type in validator schema.");return{messages:Object.assign({},this.messages,e.messages),schema:d(e,this.defaults[e.type],{skipIfExist:!0}),ruleFunction:s}}parseShortHand(e){let i=e.split("|").map(a=>a.trim()),s=i[0],r;return s.endsWith("[]")?r=this.getRuleFromSchema({type:"array",items:s.slice(0,-2)}).schema:r={type:i[0]},i.slice(1).map(a=>{let n=a.indexOf(":");if(n!==-1){let u=a.substr(0,n).trim(),l=a.substr(n+1).trim();l==="true"||l==="false"?l=l==="true":Number.isNaN(Number(l))||(l=Number(l)),r[u]=l}else a.startsWith("no-")?r[a.slice(3)]=!1:r[a]=!0}),r}makeError({type:e,field:i,expected:s,actual:r,messages:a}){let n={type:`"${e}"`,message:`"${a[e]}"`};return i?n.field=`"${i}"`:n.field="field",s!=null&&(n.expected=s),r!=null&&(n.actual=r),n.label="label",`errors.push({ ${Object.keys(n).map(l=>`${l}: ${n[l]}`).join(", ")} });`}makeCustomValidator({vName:e="value",fnName:i="custom",ruleIndex:s,path:r,schema:a,context:n,messages:u}){let l="rule"+s,p="fnCustomErrors"+s;if(typeof a[i]=="function"){if(n.customs[s]?(n.customs[s].messages=u,n.customs[s].schema=a):n.customs[s]={messages:u,schema:a},this.opts.useNewCustomCheckerFunction)return`
               		const ${l} = context.customs[${s}];
					const ${p} = [];
					${e} = ${n.async?"await ":""}${l}.schema.${i}.call(this, ${e}, ${p} , ${l}.schema, "${r}", parent, context);
					if (Array.isArray(${p} )) {
                  		${p} .forEach(err => errors.push(Object.assign({ message: ${l}.messages[err.type], field }, err)));
					}
				`;let c="res_"+l;return`
				const ${l} = context.customs[${s}];
				const ${c} = ${n.async?"await ":""}${l}.schema.${i}.call(this, ${e}, ${l}.schema, "${r}", parent, context);
				if (Array.isArray(${c})) {
					${c}.forEach(err => errors.push(Object.assign({ message: ${l}.messages[err.type], field }, err)));
				}
		`}return""}add(e,i){this.rules[e]=i}addMessage(e,i){this.messages[e]=i}alias(e,i){if(this.rules[e])throw new Error("Alias name must not be a rule name");this.aliases[e]=i}plugin(e){if(typeof e!="function")throw new Error("Plugin fn type must be function");return e(this)}resolveType(e){if(typeof e=="string")e=this.parseShortHand(e);else if(Array.isArray(e)){if(e.length===0)throw new Error("Invalid schema.");e={type:"multi",rules:e},e.rules.map(a=>this.getRuleFromSchema(a)).every(a=>a.schema.optional===!0)&&(e.optional=!0);let s=!this.opts.considerNullAsAValue;e.rules.map(a=>this.getRuleFromSchema(a)).every(a=>a.schema.nullable===s)&&(e.nullable=s)}if(e.$$type){let i=e.$$type,s=this.getRuleFromSchema(i).schema;delete e.$$type;let r=Object.assign({},e);for(let a in e)delete e[a];d(e,s,{skipIfExist:!0}),e.props=r}return e}normalize(e){let i=this.resolveType(e);if(this.aliases[i.type]&&(i=d(i,this.normalize(this.aliases[i.type]),{skipIfExists:!0})),i=d(i,this.defaults[i.type],{skipIfExist:!0}),i.type==="multi")return i.rules=i.rules.map(s=>this.normalize(s)),i.optional=i.rules.every(s=>s.optional===!0),i;if(i.type==="array")return i.items=this.normalize(i.items),i;if(i.type==="object"&&i.props&&Object.entries(i.props).forEach(([s,r])=>i.props[s]=this.normalize(r)),typeof e=="object")if(e.type){let s=this.normalize(e.type);d(i,s,{skipIfExists:!0})}else Object.entries(e).forEach(([s,r])=>i[s]=this.normalize(r));return i}};ze.exports=U});var He=o((dr,Le)=>{Le.exports=Me()});var Tt={};et(Tt,{ApproveUserController:()=>N,default:()=>Ot});module.exports=rt(Tt);(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="7fedd64a-23c6-4972-ac42-b8822916336c",t._sentryDebugIdIdentifier="sentry-dbid-7fedd64a-23c6-4972-ac42-b8822916336c")}catch{}})();var m=class t extends Error{constructor(i,s,r,a=500){super(i);this.message=i;this.data=s;this.stack=r;this.statusCode=a;this.name="HttpError",Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace(this,t)}},v=class t extends m{constructor(i,s="HttpBadRequestError",r,a="BAD_REQUEST",n=400){super(a,i,r,n);this.data=i;this.name=s;this.stack=r;this.message=a;this.statusCode=n;Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace(this,t)}};var g=class t extends m{constructor(i,s,r="HttpNotFoundError",a="NOT_FOUND",n=404){super(a,i,s,n);this.data=i;this.stack=s;this.name=r;this.message=a;this.statusCode=n;Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace(this,t)}};var _=t=>({user_id:t.user_id,name:t.name,email:t.email,email_verified:t.email_verified,role:t.role,languages:t.languages,created_at:t.created_at,bio:t.bio||void 0,photo_url:t.photo_url||void 0,deleted_at:t.deleted_at||void 0,approved_at:t.approved_at});var O=class{constructor(e,i){this.body=e;this.statusCode=i}},b=class t extends O{constructor(i){super(i,200);this.body=i;Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace(this,t)}};var T=class{constructor(e){this.entityModel=e;this.clientSession=e}clientSession;start(){return this.clientSession=[],!!this.clientSession}getSession(){if(this.clientSession)return this.clientSession;throw new Error("START_DATABASE_ERROR")}updateSession(e){return this.clientSession=e,this.clientSession}},h=new T([]);var x=class{async execute(e){return h.getSession().find(s=>s.user_id===e.user_id||s.auth_token===e.user_id||s.email===e.user_id)||null}};var $=class{async execute(e){let i,s=h.getSession(),r=s.find(n=>n.user_id===e.user_id||e.user_id===n.email)||null;if(!r)return r;let a=s.map(n=>n.user_id===e.user_id&&n.user_id===e.user_id?(i={user_id:e.user_id,...e.to_update,email:n.email,created_at:n.created_at},i):n);return h.updateSession(a),i}};var E=class{constructor(e,i,s=new x,r=new $){this.logger=e;this.appConfig=i;this.getUserRepository=s;this.updateUserRepository=r;this.logger=this.logger.getChild("ApproveUserUseCase")}async execute(e){this.logger.debug("execute input",JSON.stringify(e));let i=await this.getUserRepository.execute({user_id:e.admin_id});if(!i)throw new Error("ADMIN_USER_NOT_FOUND");if(i.role!=="Admin")throw new Error("ADMIN_USER_NOT_AUTHORIZED");let s=this.updateUserRepository.execute({user_id:e.user_id,to_update:{approved_at:new Date}});return this.logger.debug("update user repository response",s),s&&(this.logger.debug("execute output",s),s)}};var Je=tt(He()),k=class{async validate(e,i){let r=await new Je.default({useNewCustomCheckerFunction:!0}).validate(e,i);return r===!0?{isValid:r,errors:[]}:{isValid:!1,errors:r.map(a=>a.message||`${a.field} - ${a.type}`)}}};var w=({optional:t=!1})=>({type:"uuid",version:4,optional:t});var N=class{constructor(e,i,s=new k,r=new E(e,i)){this.logger=e;this.appConfig=i;this.requestValidator=s;this.approveUserUseCase=r;this.logger=this.logger.getChild("ApproveUserController")}async handle(e){let{user_id:i,admin_id:s}=e.params,r=await this.requestValidator.validate({user_id:i,admin_id:s},{user_id:w({optional:!1}),admin_id:w({optional:!1})});if(!r.isValid)return new v(r.errors);let a=await this.approveUserUseCase.execute({user_id:i,admin_id:s});return a?new b(_(a)):new g("USER_NOT_FOUND")}};var Ot=void 0;0&&(module.exports={ApproveUserController});
//# sourceMappingURL=ApproveUserController.js.map
