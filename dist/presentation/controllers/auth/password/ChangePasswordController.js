var Be=Object.create;var h=Object.defineProperty;var Xe=Object.getOwnPropertyDescriptor;var Ke=Object.getOwnPropertyNames;var We=Object.getPrototypeOf,Qe=Object.prototype.hasOwnProperty;var o=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ye=(t,e)=>{for(var r in e)h(t,r,{get:e[r],enumerable:!0})},N=(t,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Ke(e))!Qe.call(t,i)&&i!==r&&h(t,i,{get:()=>e[i],enumerable:!(s=Xe(e,i))||s.enumerable});return t};var et=(t,e,r)=>(r=t!=null?Be(We(t)):{},N(e||!t||!t.__esModule?h(r,"default",{value:t,enumerable:!0}):r,t)),tt=t=>N(h({},"__esModule",{value:!0}),t);var D=o((qt,F)=>{"use strict";function rt(t){return typeof t!="object"||Array.isArray(t)||t==null?!1:Object.keys(t).length>0}function q(t,e,r={}){for(let s in e)if(rt(e[s]))t[s]=t[s]||{},q(t[s],e[s],r);else{if(r.skipIfExist===!0&&t[s]!==void 0)continue;t[s]=e[s]}return t}F.exports=q});var _=o((Ft,z)=>{function it(t){return t===void 0||t===null?"":typeof t.toString=="function"?t:typeof t}z.exports=(t,e,r)=>t.replace(e,it(r))});var L=o((Dt,M)=>{"use strict";M.exports={required:"The '{field}' field is required.",string:"The '{field}' field must be a string.",stringEmpty:"The '{field}' field must not be empty.",stringMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",stringMax:"The '{field}' field length must be less than or equal to {expected} characters long.",stringLength:"The '{field}' field length must be {expected} characters long.",stringPattern:"The '{field}' field fails to match the required pattern.",stringContains:"The '{field}' field must contain the '{expected}' text.",stringEnum:"The '{field}' field does not match any of the allowed values.",stringNumeric:"The '{field}' field must be a numeric string.",stringAlpha:"The '{field}' field must be an alphabetic string.",stringAlphanum:"The '{field}' field must be an alphanumeric string.",stringAlphadash:"The '{field}' field must be an alphadash string.",stringHex:"The '{field}' field must be a hex string.",stringSingleLine:"The '{field}' field must be a single line string.",stringBase64:"The '{field}' field must be a base64 string.",number:"The '{field}' field must be a number.",numberMin:"The '{field}' field must be greater than or equal to {expected}.",numberMax:"The '{field}' field must be less than or equal to {expected}.",numberEqual:"The '{field}' field must be equal to {expected}.",numberNotEqual:"The '{field}' field can't be equal to {expected}.",numberInteger:"The '{field}' field must be an integer.",numberPositive:"The '{field}' field must be a positive number.",numberNegative:"The '{field}' field must be a negative number.",array:"The '{field}' field must be an array.",arrayEmpty:"The '{field}' field must not be an empty array.",arrayMin:"The '{field}' field must contain at least {expected} items.",arrayMax:"The '{field}' field must contain less than or equal to {expected} items.",arrayLength:"The '{field}' field must contain {expected} items.",arrayContains:"The '{field}' field must contain the '{expected}' item.",arrayUnique:"The '{actual}' value in '{field}' field does not unique the '{expected}' values.",arrayEnum:"The '{actual}' value in '{field}' field does not match any of the '{expected}' values.",tuple:"The '{field}' field must be an array.",tupleEmpty:"The '{field}' field must not be an empty array.",tupleLength:"The '{field}' field must contain {expected} items.",boolean:"The '{field}' field must be a boolean.",currency:"The '{field}' must be a valid currency format",date:"The '{field}' field must be a Date.",dateMin:"The '{field}' field must be greater than or equal to {expected}.",dateMax:"The '{field}' field must be less than or equal to {expected}.",enumValue:"The '{field}' field value '{expected}' does not match any of the allowed values.",equalValue:"The '{field}' field value must be equal to '{expected}'.",equalField:"The '{field}' field value must be equal to '{expected}' field value.",forbidden:"The '{field}' field is forbidden.",function:"The '{field}' field must be a function.",email:"The '{field}' field must be a valid e-mail.",emailEmpty:"The '{field}' field must not be empty.",emailMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",emailMax:"The '{field}' field length must be less than or equal to {expected} characters long.",luhn:"The '{field}' field must be a valid checksum luhn.",mac:"The '{field}' field must be a valid MAC address.",object:"The '{field}' must be an Object.",objectStrict:"The object '{field}' contains forbidden keys: '{actual}'.",objectMinProps:"The object '{field}' must contain at least {expected} properties.",objectMaxProps:"The object '{field}' must contain {expected} properties at most.",url:"The '{field}' field must be a valid URL.",urlEmpty:"The '{field}' field must not be empty.",uuid:"The '{field}' field must be a valid UUID.",uuidVersion:"The '{field}' field must be a valid UUID version provided.",classInstanceOf:"The '{field}' field must be an instance of the '{expected}' class.",objectID:"The '{field}' field must be an valid ObjectID",record:"The '{field}' must be an Object."}});var G=o((zt,H)=>{"use strict";H.exports=function(){let t=[];return t.push(`
		return value;
	`),{source:t.join(`
`)}}});var Z=o((_t,J)=>{"use strict";J.exports=function({schema:t,messages:e},r,s){let i=[],a=!1;if(t.convert===!0&&(a=!0,i.push(`
			if (!Array.isArray(value) && value != null) {
				value = [value];
			}
		`)),i.push(`
		if (!Array.isArray(value)) {
			${this.makeError({type:"array",actual:"value",messages:e})}
			return value;
		}

		var len = value.length;
	`),t.empty===!1&&i.push(`
			if (len === 0) {
				${this.makeError({type:"arrayEmpty",actual:"value",messages:e})}
			}
		`),t.min!=null&&i.push(`
			if (len < ${t.min}) {
				${this.makeError({type:"arrayMin",expected:t.min,actual:"len",messages:e})}
			}
		`),t.max!=null&&i.push(`
			if (len > ${t.max}) {
				${this.makeError({type:"arrayMax",expected:t.max,actual:"len",messages:e})}
			}
		`),t.length!=null&&i.push(`
			if (len !== ${t.length}) {
				${this.makeError({type:"arrayLength",expected:t.length,actual:"len",messages:e})}
			}
		`),t.contains!=null&&i.push(`
			if (value.indexOf(${JSON.stringify(t.contains)}) === -1) {
				${this.makeError({type:"arrayContains",expected:JSON.stringify(t.contains),actual:"value",messages:e})}
			}
		`),t.unique===!0&&i.push(`
			if(len > (new Set(value)).size) {
				${this.makeError({type:"arrayUnique",expected:"Array.from(new Set(value.filter((item, index) => value.indexOf(item) !== index)))",actual:"value",messages:e})}
			}
		`),t.enum!=null){let n=JSON.stringify(t.enum);i.push(`
			for (var i = 0; i < value.length; i++) {
				if (${n}.indexOf(value[i]) === -1) {
					${this.makeError({type:"arrayEnum",expected:'"'+t.enum.join(", ")+'"',actual:"value[i]",messages:e})}
				}
			}
		`)}if(t.items!=null){i.push(`
			var arr = value;
			var parentField = field;
			for (var i = 0; i < arr.length; i++) {
				value = arr[i];
		`);let n=r+"[]",l=this.getRuleFromSchema(t.items),u=`arr[i] = ${s.async?"await ":""}context.fn[%%INDEX%%](arr[i], (parentField ? parentField : "") + "[" + i + "]", parent, errors, context)`;i.push(this.compileRule(l,s,n,u,"arr[i]")),i.push(`
			}
		`),i.push(`
		return arr;
	`)}else i.push(`
		return value;
	`);return{sanitized:a,source:i.join(`
`)}}});var X=o((Mt,B)=>{"use strict";B.exports=function({schema:t,messages:e},r,s){let i=[],a=!1;return i.push(`
		var origValue = value;
	`),t.convert===!0&&(a=!0,i.push(`
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
		`)),i.push(`
		if (typeof value !== "boolean") {
			${this.makeError({type:"boolean",actual:"origValue",messages:e})}
		}
		
		return value;
	`),{sanitized:a,source:i.join(`
`)}}});var W=o((Lt,K)=>{"use strict";K.exports=function({schema:t,messages:e,index:r},s,i){let a=[],n=t.instanceOf.name?t.instanceOf.name:"<UnknowClass>";return i.customs[r]?i.customs[r].schema=t:i.customs[r]={schema:t},a.push(`
		if (!(value instanceof context.customs[${r}].schema.instanceOf))
			${this.makeError({type:"classInstanceOf",actual:"value",expected:"'"+n+"'",messages:e})}
	`),a.push(`
		return value;
	`),{source:a.join(`
`)}}});var Y=o((Ht,Q)=>{"use strict";Q.exports=function({schema:t,messages:e,index:r},s,i){let a=[];return a.push(`
		${this.makeCustomValidator({fnName:"check",path:s,schema:t,messages:e,context:i,ruleIndex:r})}
		return value;
	`),{source:a.join(`
`)}}});var te=o((Gt,ee)=>{"use strict";var at="(?=.*\\d)^(-?~1|~1-?)(([0-9]\\d{0,2}(~2\\d{3})*)|0)?(\\~3\\d{1,2})?$";ee.exports=function({schema:t,messages:e},r,s){let i=t.currencySymbol||null,a=t.thousandSeparator||",",n=t.decimalSeparator||".",l=t.customRegex,u=!t.symbolOptional,p=at.replace(/~1/g,i?`\\${i}${u?"":"?"}`:"").replace("~2",a).replace("~3",n),c=[];return c.push(`
		if (!value.match(${l||new RegExp(p)})) {
			${this.makeError({type:"currency",actual:"value",messages:e})}
			return value;
		}

		return value;
	`),{source:c.join(`
`)}}});var ie=o((Jt,re)=>{"use strict";re.exports=function({schema:t,messages:e},r,s){let i=[],a=!1;return i.push(`
		var origValue = value;
	`),t.convert===!0&&(a=!0,i.push(`
			if (!(value instanceof Date)) {
				value = new Date(value.length && !isNaN(+value) ? +value : value);
			}
		`)),i.push(`
		if (!(value instanceof Date) || isNaN(value.getTime()))
			${this.makeError({type:"date",actual:"origValue",messages:e})}

		return value;
	`),{sanitized:a,source:i.join(`
`)}}});var se=o((Zt,ae)=>{"use strict";var st=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,nt=/^\S+@\S+\.\S+$/;ae.exports=function({schema:t,messages:e},r,s){let i=[],a=t.mode=="precise"?st:nt,n=!1;return i.push(`
		if (typeof value !== "string") {
			${this.makeError({type:"string",actual:"value",messages:e})}
			return value;
		}
	`),t.empty?i.push(`
			if (value.length === 0) return value;
		`):i.push(`
			if (value.length === 0) {
				${this.makeError({type:"emailEmpty",actual:"value",messages:e})}
				return value;
			}
		`),t.normalize&&(n=!0,i.push(`
			value = value.trim().toLowerCase();
		`)),t.min!=null&&i.push(`
			if (value.length < ${t.min}) {
				${this.makeError({type:"emailMin",expected:t.min,actual:"value.length",messages:e})}
			}
		`),t.max!=null&&i.push(`
			if (value.length > ${t.max}) {
				${this.makeError({type:"emailMax",expected:t.max,actual:"value.length",messages:e})}
			}
		`),i.push(`
		if (!${a.toString()}.test(value)) {
			${this.makeError({type:"email",actual:"value",messages:e})}
		}

		return value;
	`),{sanitized:n,source:i.join(`
`)}}});var ue=o((Bt,ne)=>{"use strict";ne.exports=function({schema:t,messages:e},r,s){return{source:`
			if (${JSON.stringify(t.values||[])}.indexOf(value) === -1)
				${this.makeError({type:"enumValue",expected:'"'+t.values.join(", ")+'"',actual:"value",messages:e})}
			
			return value;
		`}}});var oe=o((Xt,le)=>{"use strict";le.exports=function({schema:t,messages:e},r,s){let i=[];return t.field?(t.strict?i.push(`
				if (value !== parent["${t.field}"])
			`):i.push(`
				if (value != parent["${t.field}"])
			`),i.push(`
				${this.makeError({type:"equalField",actual:"value",expected:JSON.stringify(t.field),messages:e})}
		`)):(t.strict?i.push(`
				if (value !== ${JSON.stringify(t.value)})
			`):i.push(`
				if (value != ${JSON.stringify(t.value)})
			`),i.push(`
				${this.makeError({type:"equalValue",actual:"value",expected:JSON.stringify(t.value),messages:e})}
		`)),i.push(`
		return value;
	`),{source:i.join(`
`)}}});var ce=o((Kt,pe)=>{"use strict";pe.exports=function({schema:e,messages:r},s,i){let a=[];return a.push(`
		if (value !== null && value !== undefined) {
	`),e.remove?a.push(`
			return undefined;
		`):a.push(`
			${this.makeError({type:"forbidden",actual:"value",messages:r})}
		`),a.push(`
		}

		return value;
	`),{source:a.join(`
`)}}});var de=o((Wt,fe)=>{"use strict";fe.exports=function({schema:t,messages:e},r,s){return{source:`
			if (typeof value !== "function")
				${this.makeError({type:"function",actual:"value",messages:e})}

			return value;
		`}}});var ye=o((Qt,he)=>{"use strict";he.exports=function({schema:t,messages:e},r,s){let i=[];i.push(`
		var hasValid = false;
		var newVal = value;
		var checkErrors = [];
		var errorsSize = errors.length;
	`);for(let a=0;a<t.rules.length;a++){i.push(`
			if (!hasValid) {
				var _errors = [];
		`);let n=this.getRuleFromSchema(t.rules[a]);i.push(this.compileRule(n,s,r,`var tmpVal = ${s.async?"await ":""}context.fn[%%INDEX%%](value, field, parent, _errors, context);`,"tmpVal")),i.push(`
				if (errors.length == errorsSize && _errors.length == 0) {
					hasValid = true;
					newVal = tmpVal;
				} else {
					Array.prototype.push.apply(checkErrors, [].concat(_errors, errors.splice(errorsSize)));
				}
			}
		`)}return i.push(`
		if (!hasValid) {
			Array.prototype.push.apply(errors, checkErrors);
		}

		return newVal;
	`),{source:i.join(`
`)}}});var ve=o((Yt,me)=>{"use strict";me.exports=function({schema:t,messages:e},r,s){let i=[];i.push(`
		var origValue = value;
	`);let a=!1;return t.convert===!0&&(a=!0,i.push(`
			if (typeof value !== "number") {
				value = Number(value);
			}
		`)),i.push(`
		if (typeof value !== "number" || isNaN(value) || !isFinite(value)) {
			${this.makeError({type:"number",actual:"origValue",messages:e})}
			return value;
		}
	`),t.min!=null&&i.push(`
			if (value < ${t.min}) {
				${this.makeError({type:"numberMin",expected:t.min,actual:"origValue",messages:e})}
			}
		`),t.max!=null&&i.push(`
			if (value > ${t.max}) {
				${this.makeError({type:"numberMax",expected:t.max,actual:"origValue",messages:e})}
			}
		`),t.equal!=null&&i.push(`
			if (value !== ${t.equal}) {
				${this.makeError({type:"numberEqual",expected:t.equal,actual:"origValue",messages:e})}
			}
		`),t.notEqual!=null&&i.push(`
			if (value === ${t.notEqual}) {
				${this.makeError({type:"numberNotEqual",expected:t.notEqual,actual:"origValue",messages:e})}
			}
		`),t.integer===!0&&i.push(`
			if (value % 1 !== 0) {
				${this.makeError({type:"numberInteger",actual:"origValue",messages:e})}
			}
		`),t.positive===!0&&i.push(`
			if (value <= 0) {
				${this.makeError({type:"numberPositive",actual:"origValue",messages:e})}
			}
		`),t.negative===!0&&i.push(`
			if (value >= 0) {
				${this.makeError({type:"numberNegative",actual:"origValue",messages:e})}
			}
		`),i.push(`
		return value;
	`),{sanitized:a,source:i.join(`
`)}}});var be=o((er,ge)=>{"use strict";var ut=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,lt=/["'\\\n\r\u2028\u2029]/g;function O(t){return t.replace(lt,function(e){switch(e){case'"':case"'":case"\\":return"\\"+e;case`
`:return"\\n";case"\r":return"\\r";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029"}})}ge.exports=function({schema:t,messages:e},r,s){let i=[];i.push(`
		if (typeof value !== "object" || value === null || Array.isArray(value)) {
			${this.makeError({type:"object",actual:"value",messages:e})}
			return value;
		}
	`);let a=t.properties||t.props;if(a){i.push("var parentObj = value;"),i.push("var parentField = field;");let n=Object.keys(a);for(let l=0;l<n.length;l++){let u=n[l],p=O(u),c=ut.test(p)?`.${p}`:`['${p}']`,f=`parentObj${c}`,I=(r?r+".":"")+u,A=a[u].label,Ge=A?`'${O(A)}'`:void 0;i.push(`
// Field: ${O(I)}`),i.push(`field = parentField ? parentField + "${c}" : "${p}";`),i.push(`value = ${f};`),i.push(`label = ${Ge}`);let Je=this.getRuleFromSchema(a[u]),Ze=`
				${f} = ${s.async?"await ":""}context.fn[%%INDEX%%](value, field, parentObj, errors, context, label);
			`;i.push(this.compileRule(Je,s,I,Ze,f)),this.opts.haltOnFirstError===!0&&i.push("if (errors.length) return parentObj;")}if(t.strict){let l=Object.keys(a);i.push(`
				field = parentField;
				var invalidProps = [];
				var props = Object.keys(parentObj);

				for (let i = 0; i < props.length; i++) {
					if (${JSON.stringify(l)}.indexOf(props[i]) === -1) {
						invalidProps.push(props[i]);
					}
				}
				if (invalidProps.length) {
			`),t.strict==="remove"?(i.push(`
					if (errors.length === 0) {
				`),i.push(`
						invalidProps.forEach(function(field) {
							delete parentObj[field];
						});
				`),i.push(`
					}
				`)):i.push(`
					${this.makeError({type:"objectStrict",expected:'"'+l.join(", ")+'"',actual:"invalidProps.join(', ')",messages:e})}
				`),i.push(`
				}
			`)}}return(t.minProps!=null||t.maxProps!=null)&&(t.strict?i.push(`
				props = Object.keys(${a?"parentObj":"value"});
			`):i.push(`
				var props = Object.keys(${a?"parentObj":"value"});
				${a?"field = parentField;":""}
			`)),t.minProps!=null&&i.push(`
			if (props.length < ${t.minProps}) {
				${this.makeError({type:"objectMinProps",expected:t.minProps,actual:"props.length",messages:e})}
			}
		`),t.maxProps!=null&&i.push(`
			if (props.length > ${t.maxProps}) {
				${this.makeError({type:"objectMaxProps",expected:t.maxProps,actual:"props.length",messages:e})}
			}
		`),a?i.push(`
			return parentObj;
		`):i.push(`
			return value;
		`),{source:i.join(`
`)}}});var $e=o((tr,xe)=>{"use strict";xe.exports=function({schema:t,messages:e,index:r},s,i){let a=[];return i.customs[r]?i.customs[r].schema=t:i.customs[r]={schema:t},a.push(`
		const ObjectID = context.customs[${r}].schema.ObjectID;
		if (!ObjectID.isValid(value)) {
			${this.makeError({type:"objectID",actual:"value",messages:e})}
			return;
		}
	`),t.convert===!0?a.push("return new ObjectID(value)"):t.convert==="hexString"?a.push("return value.toString()"):a.push("return value"),{source:a.join(`
`)}}});var Se=o((rr,Ee)=>{function ot(t){for(let e in t.messages)e.startsWith("string")&&(t.messages[e]=t.messages[e].replace(" field "," key "))}Ee.exports=function({schema:e,messages:r},s,i){let a=[];a.push(`
		if (typeof value !== "object" || value === null || Array.isArray(value)) {
			${this.makeError({type:"record",actual:"value",messages:r})}
			return value;
		}
	`);let n=e.key||"string",l=e.value||"any";a.push(`
		const record = value;
		let sanitizedKey, sanitizedValue;
		const result = {};
		for (let key in value) {
	`),a.push("sanitizedKey = value = key;");let u=this.getRuleFromSchema(n);ot(u);let p=`
		sanitizedKey = ${i.async?"await ":""}context.fn[%%INDEX%%](key, field ? field + "." + key : key, record, errors, context);
	`;a.push(this.compileRule(u,i,null,p,"sanitizedKey")),a.push("sanitizedValue = value = record[key];");let c=this.getRuleFromSchema(l),f=`
		sanitizedValue = ${i.async?"await ":""}context.fn[%%INDEX%%](value, field ? field + "." + key : key, record, errors, context);
	`;return a.push(this.compileRule(c,i,`${s}[key]`,f,"sanitizedValue")),a.push("result[sanitizedKey] = sanitizedValue;"),a.push(`
		}
	`),a.push("return result;"),{source:a.join(`
`)}}});var Oe=o((ir,ke)=>{"use strict";var pt=/^-?[0-9]\d*(\.\d+)?$/,ct=/^[a-zA-Z]+$/,ft=/^[a-zA-Z0-9]+$/,dt=/^[a-zA-Z0-9_-]+$/,ht=/^[0-9a-fA-F]+$/,yt=/^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?$/;ke.exports=function({schema:e,messages:r},s,i){let a=[],n=!1;if(e.convert===!0&&(n=!0,a.push(`
			if (typeof value !== "string") {
				value = String(value);
			}
		`)),a.push(`
		if (typeof value !== "string") {
			${this.makeError({type:"string",actual:"value",messages:r})}
			return value;
		}

		var origValue = value;
	`),e.trim&&(n=!0,a.push(`
			value = value.trim();
		`)),e.trimLeft&&(n=!0,a.push(`
			value = value.trimLeft();
		`)),e.trimRight&&(n=!0,a.push(`
			value = value.trimRight();
		`)),e.padStart){n=!0;let l=e.padChar!=null?e.padChar:" ";a.push(`
			value = value.padStart(${e.padStart}, ${JSON.stringify(l)});
		`)}if(e.padEnd){n=!0;let l=e.padChar!=null?e.padChar:" ";a.push(`
			value = value.padEnd(${e.padEnd}, ${JSON.stringify(l)});
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
				${this.makeError({type:"stringEmpty",actual:"value",messages:r})}
			}
		`):e.empty===!0&&a.push(`
			if (len === 0) {
				return value;
			}
		`),e.min!=null&&a.push(`
			if (len < ${e.min}) {
				${this.makeError({type:"stringMin",expected:e.min,actual:"len",messages:r})}
			}
		`),e.max!=null&&a.push(`
			if (len > ${e.max}) {
				${this.makeError({type:"stringMax",expected:e.max,actual:"len",messages:r})}
			}
		`),e.length!=null&&a.push(`
			if (len !== ${e.length}) {
				${this.makeError({type:"stringLength",expected:e.length,actual:"len",messages:r})}
			}
		`),e.pattern!=null){let l=e.pattern;typeof e.pattern=="string"&&(l=new RegExp(e.pattern,e.patternFlags)),a.push(`
			if (!${l.toString()}.test(value)) {
				${this.makeError({type:"stringPattern",expected:`"${l.toString().replace(/"/g,"\\$&")}"`,actual:"origValue",messages:r})}
			}
		`)}if(e.contains!=null&&a.push(`
			if (value.indexOf("${e.contains}") === -1) {
				${this.makeError({type:"stringContains",expected:'"'+e.contains+'"',actual:"origValue",messages:r})}
			}
		`),e.enum!=null){let l=JSON.stringify(e.enum);a.push(`
			if (${l}.indexOf(value) === -1) {
				${this.makeError({type:"stringEnum",expected:'"'+e.enum.join(", ")+'"',actual:"origValue",messages:r})}
			}
		`)}return e.numeric===!0&&a.push(`
			if (!${pt.toString()}.test(value) ) {
				${this.makeError({type:"stringNumeric",actual:"origValue",messages:r})}
			}
		`),e.alpha===!0&&a.push(`
			if(!${ct.toString()}.test(value)) {
				${this.makeError({type:"stringAlpha",actual:"origValue",messages:r})}
			}
		`),e.alphanum===!0&&a.push(`
			if(!${ft.toString()}.test(value)) {
				${this.makeError({type:"stringAlphanum",actual:"origValue",messages:r})}
			}
		`),e.alphadash===!0&&a.push(`
			if(!${dt.toString()}.test(value)) {
				${this.makeError({type:"stringAlphadash",actual:"origValue",messages:r})}
			}
		`),e.hex===!0&&a.push(`
			if(value.length % 2 !== 0 || !${ht.toString()}.test(value)) {
				${this.makeError({type:"stringHex",actual:"origValue",messages:r})}
			}
		`),e.singleLine===!0&&a.push(`
			if(value.includes("\\n")) {
				${this.makeError({type:"stringSingleLine",messages:r})}
			}
		`),e.base64===!0&&a.push(`
			if(!${yt.toString()}.test(value)) {
				${this.makeError({type:"stringBase64",actual:"origValue",messages:r})}
			}
		`),a.push(`
		return value;
	`),{sanitized:n,source:a.join(`
`)}}});var Te=o((ar,we)=>{"use strict";we.exports=function({schema:t,messages:e},r,s){let i=[];if(t.items!=null){if(!Array.isArray(t.items))throw new Error(`Invalid '${t.type}' schema. The 'items' field must be an array.`);if(t.items.length===0)throw new Error(`Invalid '${t.type}' schema. The 'items' field must not be an empty array.`)}if(i.push(`
		if (!Array.isArray(value)) {
			${this.makeError({type:"tuple",actual:"value",messages:e})}
			return value;
		}

		var len = value.length;
	`),t.empty===!1&&i.push(`
			if (len === 0) {
				${this.makeError({type:"tupleEmpty",actual:"value",messages:e})}
				return value;
			}
		`),t.items!=null){i.push(`
			if (${t.empty} !== false && len === 0) {
				return value;
			}

			if (len !== ${t.items.length}) {
				${this.makeError({type:"tupleLength",expected:t.items.length,actual:"len",messages:e})}
				return value;
			}
		`),i.push(`
			var arr = value;
			var parentField = field;
		`);for(let a=0;a<t.items.length;a++){i.push(`
			value = arr[${a}];
		`);let n=`${r}[${a}]`,l=this.getRuleFromSchema(t.items[a]),u=`
			arr[${a}] = ${s.async?"await ":""}context.fn[%%INDEX%%](arr[${a}], (parentField ? parentField : "") + "[" + ${a} + "]", parent, errors, context);
		`;i.push(this.compileRule(l,s,n,u,`arr[${a}]`))}i.push(`
		return arr;
	`)}else i.push(`
		return value;
	`);return{source:i.join(`
`)}}});var je=o((sr,Pe)=>{"use strict";var mt=/^https?:\/\/\S+/;Pe.exports=function({schema:t,messages:e},r,s){let i=[];return i.push(`
		if (typeof value !== "string") {
			${this.makeError({type:"string",actual:"value",messages:e})}
			return value;
		}
	`),t.empty?i.push(`
			if (value.length === 0) return value;
		`):i.push(`
			if (value.length === 0) {
				${this.makeError({type:"urlEmpty",actual:"value",messages:e})}
				return value;
			}
		`),i.push(`
		if (!${mt.toString()}.test(value)) {
			${this.makeError({type:"url",actual:"value",messages:e})}
		}

		return value;
	`),{source:i.join(`
`)}}});var Ie=o((nr,Re)=>{"use strict";var vt=/^([0-9a-f]{8}-[0-9a-f]{4}-[1-6][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}|[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12})$/i;Re.exports=function({schema:t,messages:e},r){let s=[];return s.push(`
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
`)}}});var Ne=o((ur,Ae)=>{"use strict";var gt=/^((([a-f0-9][a-f0-9]+[-]){5}|([a-f0-9][a-f0-9]+[:]){5})([a-f0-9][a-f0-9])$)|(^([a-f0-9][a-f0-9][a-f0-9][a-f0-9]+[.]){2}([a-f0-9][a-f0-9][a-f0-9][a-f0-9]))$/i;Ae.exports=function({schema:t,messages:e},r,s){return{source:`
			if (typeof value !== "string") {
				${this.makeError({type:"string",actual:"value",messages:e})}
				return value;
			}

			var v = value.toLowerCase();
			if (!${gt.toString()}.test(v)) {
				${this.makeError({type:"mac",actual:"value",messages:e})}
			}
			
			return value;
		`}}});var Ce=o((lr,Ve)=>{"use strict";Ve.exports=function({schema:t,messages:e},r,s){return{source:`
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
		`}}});var De=o((or,Fe)=>{var w,Ue,T,qe,bt="prettier",xt="cli-highlight";Fe.exports=function(t){w||(w=require(bt),Ue={parser:"babel",useTabs:!1,printWidth:120,trailingComma:"none",tabWidth:4,singleQuote:!1,semi:!0,bracketSpacing:!0},T=require(xt),qe={language:"js",theme:T.fromJson({keyword:["white","bold"],built_in:"magenta",literal:"cyan",number:"magenta",regexp:"red",string:["yellow","bold"],symbol:"plain",class:"blue",attr:"plain",function:["white","bold"],title:"plain",params:"green",comment:"grey"})});let e=w.format(t,Ue);return T.highlight(e,qe)}});var _e=o((pr,ze)=>{"use strict";var x;try{x=new Function("return Object.getPrototypeOf(async function(){}).constructor")()}catch{}var d=D(),$t=_();function Et(){return Object.assign({},L())}function St(){return{any:G(),array:Z(),boolean:X(),class:W(),custom:Y(),currency:te(),date:ie(),email:se(),enum:ue(),equal:oe(),forbidden:ce(),function:de(),multi:ye(),number:ve(),object:be(),objectID:$e(),record:Se(),string:Oe(),tuple:Te(),url:je(),uuid:Ie(),mac:Ne(),luhn:Ce()}}var P=class{constructor(e){if(this.opts={},this.defaults={},this.messages=Et(),this.rules=St(),this.aliases={},this.cache=new Map,e){if(d(this.opts,e),e.defaults&&d(this.defaults,e.defaults),e.messages)for(let r in e.messages)this.addMessage(r,e.messages[r]);if(e.aliases)for(let r in e.aliases)this.alias(r,e.aliases[r]);if(e.customRules)for(let r in e.customRules)this.add(r,e.customRules[r]);if(e.plugins){let r=e.plugins;if(!Array.isArray(r))throw new Error("Plugins type must be array");r.forEach(this.plugin.bind(this))}if(this.opts.debug){let r=function(s){return s};typeof window>"u"&&(r=De()),this._formatter=r}}}validate(e,r){return this.compile(r)(e)}wrapRequiredCheckSourceCode(e,r,s,i){let a=[],{considerNullAsAValue:n=!1}=this.opts,l,u=e.schema.optional===!0||e.schema.type==="forbidden",p=n?e.schema.nullable!==!1||e.schema.type==="forbidden":e.schema.optional===!0||e.schema.nullable===!0||e.schema.type==="forbidden";if(n?e.schema.default!=null&&e.schema.default!=null:e.schema.default!=null){u=!1,n?e.schema.nullable===!1&&(p=!1):e.schema.nullable!==!0&&(p=!1);let f;typeof e.schema.default=="function"?(s.customs[e.index]||(s.customs[e.index]={}),s.customs[e.index].defaultFn=e.schema.default,f=`context.customs[${e.index}].defaultFn.call(this, context.rules[${e.index}].schema, field, parent, context)`):f=JSON.stringify(e.schema.default),l=`
				value = ${f};
				${i} = value;
			`}else l=this.makeError({type:"required",actual:"value",messages:e.messages});return a.push(`
			${`if (value === undefined) { ${u?`
// allow undefined
`:l} }`}
			${`else if (value === null) { ${p?`
// allow null
`:l} }`}
			${r?`else { ${r} }`:""}
		`),a.join(`
`)}compile(e){if(e===null||typeof e!="object")throw new Error("Invalid schema.");let r=this,s={index:0,async:e.$$async===!0,rules:[],fn:[],customs:{},utils:{replace:$t}};if(this.cache.clear(),delete e.$$async,s.async&&!x)throw new Error("Asynchronous mode is not supported.");if(e.$$root!==!0)if(Array.isArray(e))e=this.getRuleFromSchema(e).schema;else{let c=Object.assign({},e);e={type:"object",strict:c.$$strict,properties:c},delete c.$$strict}let i=["var errors = [];","var field;","var parent = null;",`var label = ${e.label?'"'+e.label+'"':"null"};`],a=this.getRuleFromSchema(e);i.push(this.compileRule(a,s,null,`${s.async?"await ":""}context.fn[%%INDEX%%](value, field, null, errors, context, label);`,"value")),i.push("if (errors.length) {"),i.push(`
			return errors.map(err => {
				if (err.message) {
					err.message = context.utils.replace(err.message, /\\{field\\}/g, err.label || err.field);
					err.message = context.utils.replace(err.message, /\\{expected\\}/g, err.expected);
					err.message = context.utils.replace(err.message, /\\{actual\\}/g, err.actual);
				}
				if(!err.label) delete err.label
				return err;
			});
		`),i.push("}"),i.push("return true;");let n=i.join(`
`),l=s.async?x:Function,u=new l("value","context",n);this.opts.debug&&console.log(this._formatter(`// Main check function
`+u.toString())),this.cache.clear();let p=function(c,f){return s.data=c,f&&f.meta&&(s.meta=f.meta),u.call(r,c,s)};return p.async=s.async,p}compileRule(e,r,s,i,a){let n=[],l=this.cache.get(e.schema);if(l)e=l,e.cycle=!0,e.cycleStack=[],n.push(this.wrapRequiredCheckSourceCode(e,`
				var rule = context.rules[${e.index}];
				if (rule.cycleStack.indexOf(value) === -1) {
					rule.cycleStack.push(value);
					${i.replace(/%%INDEX%%/g,e.index)}
					rule.cycleStack.pop(value);
				}
			`,r,a));else{this.cache.set(e.schema,e),e.index=r.index,r.rules[r.index]=e;let u=s??"$$root";r.index++;let p=e.ruleFunction.call(this,e,s,r);p.source=p.source.replace(/%%INDEX%%/g,e.index);let c=r.async?x:Function,f=new c("value","field","parent","errors","context","label",p.source);r.fn[e.index]=f.bind(this),n.push(this.wrapRequiredCheckSourceCode(e,i.replace(/%%INDEX%%/g,e.index),r,a)),n.push(this.makeCustomValidator({vName:a,path:u,schema:e.schema,context:r,messages:e.messages,ruleIndex:e.index})),this.opts.debug&&console.log(this._formatter(`// Context.fn[${e.index}]
`+f.toString()))}return n.join(`
`)}getRuleFromSchema(e){e=this.resolveType(e);let r=this.aliases[e.type];r&&(delete e.type,e=d(e,r,{skipIfExist:!0}));let s=this.rules[e.type];if(!s)throw new Error("Invalid '"+e.type+"' type in validator schema.");return{messages:Object.assign({},this.messages,e.messages),schema:d(e,this.defaults[e.type],{skipIfExist:!0}),ruleFunction:s}}parseShortHand(e){let r=e.split("|").map(a=>a.trim()),s=r[0],i;return s.endsWith("[]")?i=this.getRuleFromSchema({type:"array",items:s.slice(0,-2)}).schema:i={type:r[0]},r.slice(1).map(a=>{let n=a.indexOf(":");if(n!==-1){let l=a.substr(0,n).trim(),u=a.substr(n+1).trim();u==="true"||u==="false"?u=u==="true":Number.isNaN(Number(u))||(u=Number(u)),i[l]=u}else a.startsWith("no-")?i[a.slice(3)]=!1:i[a]=!0}),i}makeError({type:e,field:r,expected:s,actual:i,messages:a}){let n={type:`"${e}"`,message:`"${a[e]}"`};return r?n.field=`"${r}"`:n.field="field",s!=null&&(n.expected=s),i!=null&&(n.actual=i),n.label="label",`errors.push({ ${Object.keys(n).map(u=>`${u}: ${n[u]}`).join(", ")} });`}makeCustomValidator({vName:e="value",fnName:r="custom",ruleIndex:s,path:i,schema:a,context:n,messages:l}){let u="rule"+s,p="fnCustomErrors"+s;if(typeof a[r]=="function"){if(n.customs[s]?(n.customs[s].messages=l,n.customs[s].schema=a):n.customs[s]={messages:l,schema:a},this.opts.useNewCustomCheckerFunction)return`
               		const ${u} = context.customs[${s}];
					const ${p} = [];
					${e} = ${n.async?"await ":""}${u}.schema.${r}.call(this, ${e}, ${p} , ${u}.schema, "${i}", parent, context);
					if (Array.isArray(${p} )) {
                  		${p} .forEach(err => errors.push(Object.assign({ message: ${u}.messages[err.type], field }, err)));
					}
				`;let c="res_"+u;return`
				const ${u} = context.customs[${s}];
				const ${c} = ${n.async?"await ":""}${u}.schema.${r}.call(this, ${e}, ${u}.schema, "${i}", parent, context);
				if (Array.isArray(${c})) {
					${c}.forEach(err => errors.push(Object.assign({ message: ${u}.messages[err.type], field }, err)));
				}
		`}return""}add(e,r){this.rules[e]=r}addMessage(e,r){this.messages[e]=r}alias(e,r){if(this.rules[e])throw new Error("Alias name must not be a rule name");this.aliases[e]=r}plugin(e){if(typeof e!="function")throw new Error("Plugin fn type must be function");return e(this)}resolveType(e){if(typeof e=="string")e=this.parseShortHand(e);else if(Array.isArray(e)){if(e.length===0)throw new Error("Invalid schema.");e={type:"multi",rules:e},e.rules.map(a=>this.getRuleFromSchema(a)).every(a=>a.schema.optional===!0)&&(e.optional=!0);let s=!this.opts.considerNullAsAValue;e.rules.map(a=>this.getRuleFromSchema(a)).every(a=>a.schema.nullable===s)&&(e.nullable=s)}if(e.$$type){let r=e.$$type,s=this.getRuleFromSchema(r).schema;delete e.$$type;let i=Object.assign({},e);for(let a in e)delete e[a];d(e,s,{skipIfExist:!0}),e.props=i}return e}normalize(e){let r=this.resolveType(e);if(this.aliases[r.type]&&(r=d(r,this.normalize(this.aliases[r.type]),{skipIfExists:!0})),r=d(r,this.defaults[r.type],{skipIfExist:!0}),r.type==="multi")return r.rules=r.rules.map(s=>this.normalize(s)),r.optional=r.rules.every(s=>s.optional===!0),r;if(r.type==="array")return r.items=this.normalize(r.items),r;if(r.type==="object"&&r.props&&Object.entries(r.props).forEach(([s,i])=>r.props[s]=this.normalize(i)),typeof e=="object")if(e.type){let s=this.normalize(e.type);d(r,s,{skipIfExists:!0})}else Object.entries(e).forEach(([s,i])=>r[s]=this.normalize(i));return r}};ze.exports=P});var Le=o((cr,Me)=>{Me.exports=_e()});var Ot={};Ye(Ot,{ChangePasswordController:()=>j,default:()=>kt});module.exports=tt(Ot);(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="7216af4b-88ac-4fb2-baa3-e39c48cd99c8",t._sentryDebugIdIdentifier="sentry-dbid-7216af4b-88ac-4fb2-baa3-e39c48cd99c8")}catch{}})();var E=class{constructor(e,r){this.body=e;this.statusCode=r}},y=class t extends E{constructor(r){super(r,200);this.body=r;Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace(this,t)}};var S=class t extends Error{constructor(r,s,i,a=500){super(r);this.message=r;this.data=s;this.stack=i;this.statusCode=a;this.name="HttpError",Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace(this,t)}},m=class t extends S{constructor(r,s="HttpBadRequestError",i,a="BAD_REQUEST",n=400){super(a,r,i,n);this.data=r;this.name=s;this.stack=i;this.message=a;this.statusCode=n;Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace(this,t)}};var V=({optional:t=!1})=>({type:"uuid",version:4,optional:t});var C=({optional:t=!1})=>({type:"string",pattern:"^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,99}$",optional:t});var v=class{async createUser(e){return console.log(e),{userName:e.user_id,userEmail:e.email}}async getUser(e){return console.log(e),{userName:"User Name",userEmail:"user@fanzo.com"}}async deleteUser(e){console.log(e)}async setPhoneNumber(e){console.log(e)}async setUserPassword(e){console.log(e)}async setEmailVerified(e){console.log(e)}async initiateAuth(e){return console.log(e),{access_token:"access_token",refresh_token:"refresh_token",expires_in:30}}async revalidateAuth(e){return console.log(e),{access_token:"access_token",expires_in:30}}};var k=class{constructor(e){this.entityModel=e;this.clientSession=e}clientSession;start(){return this.clientSession=[],!!this.clientSession}getSession(){if(this.clientSession)return this.clientSession;throw new Error("START_DATABASE_ERROR")}updateSession(e){return this.clientSession=e,this.clientSession}},U=new k([]);var g=class{async execute(e){return U.getSession().find(s=>s.user_id===e.user_id||s.auth_token===e.user_id||s.email===e.user_id)||null}};var b=class{constructor(e,r=new g,s=new v){this.logger=e;this.getUserRepository=r;this.identityServiceProvider=s;this.logger=this.logger.getChild("ChangePasswordUseCase")}async execute(e){this.logger.debug("execute input",JSON.stringify(e));try{let r=await this.getUserRepository.execute({user_id:e.auth_token});if(this.logger.debug("user repository response",r),!r)throw new Error("USER_NOT_FOUND");if(r.auth_token!==e.auth_token)throw new Error("USER_NOT_AUTHORIZED");return await this.identityServiceProvider.setUserPassword({password:e.new_password,email:r.email}),this.logger.debug("identityServiceProvider setUserPassword"),r}catch(r){throw this.logger.error("execute error",r),r}}};var He=et(Le()),$=class{async validate(e,r){let i=await new He.default({useNewCustomCheckerFunction:!0}).validate(e,r);return i===!0?{isValid:i,errors:[]}:{isValid:!1,errors:i.map(a=>a.message||`${a.field} - ${a.type}`)}}};var j=class{constructor(e,r=new $,s=new b(e)){this.logger=e;this.requestValidator=r;this.changePasswordUseCase=s;this.logger=this.logger.getChild("ChangePasswordController")}async handle(e){let{auth_token:r,new_password:s}=e.body,i=await this.requestValidator.validate({auth_token:r,new_password:s},{auth_token:V({optional:!1}),new_password:C({optional:!1})});if(!i.isValid)return new m(i.errors);let a=await this.changePasswordUseCase.execute({auth_token:r,new_password:s});return new y(a)}};var kt=void 0;0&&(module.exports={ChangePasswordController});
//# sourceMappingURL=ChangePasswordController.js.map
