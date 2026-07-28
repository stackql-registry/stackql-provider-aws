"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["834375"],{21168(e,t,s){s.r(t),s.d(t,{metadata:()=>i,default:()=>p,frontMatter:()=>c,contentTitle:()=>h,toc:()=>u,assets:()=>x});var i=JSON.parse('{"id":"services/lexv2_models/slots/index","title":"slots","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/lexv2_models/slots/index.md","sourceDirName":"services/lexv2_models/slots","slug":"/services/lexv2_models/slots/","permalink":"/services/lexv2_models/slots/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"slots","hide_title":false,"hide_table_of_contents":false,"keywords":["slots","lexv2_models","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"slot_types","permalink":"/services/lexv2_models/slot_types/"},"next":{"title":"tags","permalink":"/services/lexv2_models/tags/"}}'),n=s(474848),r=s(28453),l=s(97362),o=s(897272),d=s(413554),a=s(541647);let c={title:"slots",hide_title:!1,hide_table_of_contents:!1,keywords:["slots","lexv2_models","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,x={},u=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function j(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists a ",(0,n.jsx)("code",{children:"slots"})," resource."]}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"slots"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Type"})}),(0,n.jsx)("td",{children:"Resource"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Id"})}),(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"aws.lexv2_models.slots"})})]})]})}),"\n",(0,n.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.p,{children:["The following fields are returned by ",(0,n.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,n.jsxs)(d.A,{defaultValue:"describe_slot",values:[{label:"describe_slot",value:"describe_slot"},{label:"list_slots",value:"list_slots"}],children:[(0,n.jsx)(a.A,{value:"describe_slot",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"botId"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The identifier of the bot associated with the slot. (pattern: <code>^[0-9a-zA-Z]+$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"botVersion"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The version of the bot associated with the slot. (pattern: <code>^(DRAFT|[0-9]+)$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"creationDateTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"A timestamp of the date and time that the slot was created."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"description"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The description specified for the slot."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"intentId"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The identifier of the intent associated with the slot. (pattern: <code>^[0-9a-zA-Z]+$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"lastUpdatedDateTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"A timestamp of the date and time that the slot was last updated."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"localeId"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The language and locale specified for the slot."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"multipleValuesSetting"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Indicates whether a slot can return multiple values."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"obfuscationSetting"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Determines whether Amazon Lex obscures slot values in conversation logs."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"slotId"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The unique identifier generated for the slot. (pattern: <code>^[0-9a-zA-Z]+$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"slotName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name specified for the slot. (pattern: <code>^([0-9a-zA-Z][_-]?){1,100}$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"slotTypeId"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The identifier of the slot type that determines the values entered into the slot. (pattern: <code>^((AMAZON.)[a-zA-Z_]+?|[0-9a-zA-Z]+)$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"subSlotSetting"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Specifications for the constituent sub slots and the expression for the composite slot."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"valueElicitationSetting"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Specifies the elicitation setting details eliciting a slot."})]})]})]})}),(0,n.jsx)(a.A,{value:"list_slots",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"botId"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The identifier of the bot that contains the slots. (pattern: <code>^[0-9a-zA-Z]+$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"botVersion"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The version of the bot that contains the slots. (pattern: <code>^(DRAFT|[0-9]+)$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"intentId"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The identifier of the intent that contains the slots. (pattern: <code>^[0-9a-zA-Z]+$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"localeId"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The language and locale of the slots in the list."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"nextToken"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"A token that indicates whether there are more results to return in a response to the ListSlots operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListSlots operation request to get the next page of results."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"slotSummaries"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"array"})}),(0,n.jsx)("td",{children:"Summary information for the slots that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter of the request. If there are more slots available, the nextToken field contains a token to get the next page of results."})]})]})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Accessible by"}),(0,n.jsx)("th",{children:"Required Params"}),(0,n.jsx)("th",{children:"Optional Params"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#describe_slot",children:(0,n.jsx)(l.A,{code:"describe_slot"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"select"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-slot_id",children:(0,n.jsx)("code",{children:"slot_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-bot_id",children:(0,n.jsx)("code",{children:"bot_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-bot_version",children:(0,n.jsx)("code",{children:"bot_version"})}),", ",(0,n.jsx)("a",{href:"#parameter-locale_id",children:(0,n.jsx)("code",{children:"locale_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-intent_id",children:(0,n.jsx)("code",{children:"intent_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Gets metadata information about a slot."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#list_slots",children:(0,n.jsx)(l.A,{code:"list_slots"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"select"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-bot_id",children:(0,n.jsx)("code",{children:"bot_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-bot_version",children:(0,n.jsx)("code",{children:"bot_version"})}),", ",(0,n.jsx)("a",{href:"#parameter-locale_id",children:(0,n.jsx)("code",{children:"locale_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-intent_id",children:(0,n.jsx)("code",{children:"intent_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Gets a list of slots that match the specified criteria."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#create_slot",children:(0,n.jsx)(l.A,{code:"create_slot"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"insert"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-bot_id",children:(0,n.jsx)("code",{children:"bot_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-bot_version",children:(0,n.jsx)("code",{children:"bot_version"})}),", ",(0,n.jsx)("a",{href:"#parameter-locale_id",children:(0,n.jsx)("code",{children:"locale_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-intent_id",children:(0,n.jsx)("code",{children:"intent_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-slotName",children:(0,n.jsx)("code",{children:"slotName"})}),", ",(0,n.jsx)("a",{href:"#parameter-valueElicitationSetting",children:(0,n.jsx)("code",{children:"valueElicitationSetting"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an OrderPizza intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances that Amazon Lex uses to elicit a response from the user."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#update_slot",children:(0,n.jsx)(l.A,{code:"update_slot"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"update"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-slot_id",children:(0,n.jsx)("code",{children:"slot_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-bot_id",children:(0,n.jsx)("code",{children:"bot_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-bot_version",children:(0,n.jsx)("code",{children:"bot_version"})}),", ",(0,n.jsx)("a",{href:"#parameter-locale_id",children:(0,n.jsx)("code",{children:"locale_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-intent_id",children:(0,n.jsx)("code",{children:"intent_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-slotName",children:(0,n.jsx)("code",{children:"slotName"})}),", ",(0,n.jsx)("a",{href:"#parameter-valueElicitationSetting",children:(0,n.jsx)("code",{children:"valueElicitationSetting"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Updates the settings for a slot."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#delete_slot",children:(0,n.jsx)(l.A,{code:"delete_slot"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"delete"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-slot_id",children:(0,n.jsx)("code",{children:"slot_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-bot_id",children:(0,n.jsx)("code",{children:"bot_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-bot_version",children:(0,n.jsx)("code",{children:"bot_version"})}),", ",(0,n.jsx)("a",{href:"#parameter-locale_id",children:(0,n.jsx)("code",{children:"locale_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-intent_id",children:(0,n.jsx)("code",{children:"intent_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Deletes the specified slot from an intent."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,n.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,n.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{id:"parameter-bot_id",children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"bot_id"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The identifier of the bot associated with the slot to delete."})]}),(0,n.jsxs)("tr",{id:"parameter-bot_version",children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"bot_version"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The version of the bot associated with the slot to delete."})]}),(0,n.jsxs)("tr",{id:"parameter-intent_id",children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"intent_id"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The identifier of the intent associated with the slot."})]}),(0,n.jsxs)("tr",{id:"parameter-locale_id",children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"locale_id"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The identifier of the language and locale that the slot will be deleted from. The string must match one of the supported locales. For more information, see Supported languages."})]}),(0,n.jsxs)("tr",{id:"parameter-region",children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"region"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,n.jsxs)("tr",{id:"parameter-slot_id",children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"slot_id"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The identifier of the slot to delete."})]})]})]}),"\n",(0,n.jsxs)(t.h2,{id:"select-examples",children:[(0,n.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,n.jsxs)(d.A,{defaultValue:"describe_slot",values:[{label:"describe_slot",value:"describe_slot"},{label:"list_slots",value:"list_slots"}],children:[(0,n.jsxs)(a.A,{value:"describe_slot",children:[(0,n.jsx)(t.p,{children:"Gets metadata information about a slot."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT\nbotId,\nbotVersion,\ncreationDateTime,\ndescription,\nintentId,\nlastUpdatedDateTime,\nlocaleId,\nmultipleValuesSetting,\nobfuscationSetting,\nslotId,\nslotName,\nslotTypeId,\nsubSlotSetting,\nvalueElicitationSetting\nFROM aws.lexv2_models.slots\nWHERE slot_id = '{{ slot_id }}' -- required\nAND bot_id = '{{ bot_id }}' -- required\nAND bot_version = '{{ bot_version }}' -- required\nAND locale_id = '{{ locale_id }}' -- required\nAND intent_id = '{{ intent_id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,n.jsxs)(a.A,{value:"list_slots",children:[(0,n.jsx)(t.p,{children:"Gets a list of slots that match the specified criteria."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT\nbotId,\nbotVersion,\nintentId,\nlocaleId,\nnextToken,\nslotSummaries\nFROM aws.lexv2_models.slots\nWHERE bot_id = '{{ bot_id }}' -- required\nAND bot_version = '{{ bot_version }}' -- required\nAND locale_id = '{{ locale_id }}' -- required\nAND intent_id = '{{ intent_id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,n.jsxs)(t.h2,{id:"insert-examples",children:[(0,n.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,n.jsxs)(d.A,{defaultValue:"create_slot",values:[{label:"create_slot",value:"create_slot"},{label:"Manifest",value:"manifest"}],children:[(0,n.jsxs)(a.A,{value:"create_slot",children:[(0,n.jsx)(t.p,{children:"Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an OrderPizza intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances that Amazon Lex uses to elicit a response from the user."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.lexv2_models.slots (\nslotName,\ndescription,\nslotTypeId,\nvalueElicitationSetting,\nobfuscationSetting,\nmultipleValuesSetting,\nsubSlotSetting,\nbot_id,\nbot_version,\nlocale_id,\nintent_id,\nregion\n)\nSELECT \n'{{ slotName }}' /* required */,\n'{{ description }}',\n'{{ slotTypeId }}',\n'{{ valueElicitationSetting }}' /* required */,\n'{{ obfuscationSetting }}',\n'{{ multipleValuesSetting }}',\n'{{ subSlotSetting }}',\n'{{ bot_id }}',\n'{{ bot_version }}',\n'{{ locale_id }}',\n'{{ intent_id }}',\n'{{ region }}'\nRETURNING\nbotId,\nbotVersion,\ncreationDateTime,\ndescription,\nintentId,\nlocaleId,\nmultipleValuesSetting,\nobfuscationSetting,\nslotId,\nslotName,\nslotTypeId,\nsubSlotSetting,\nvalueElicitationSetting\n;\n"})})]}),(0,n.jsx)(a.A,{value:"manifest",children:(0,n.jsx)(o.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: slots
props:
  - name: bot_id
    value: "{{ bot_id }}"
    description: Required parameter for the slots resource.
  - name: bot_version
    value: "{{ bot_version }}"
    description: Required parameter for the slots resource.
  - name: locale_id
    value: "{{ locale_id }}"
    description: Required parameter for the slots resource.
  - name: intent_id
    value: "{{ intent_id }}"
    description: Required parameter for the slots resource.
  - name: region
    value: "{{ region }}"
    description: Required parameter for the slots resource.
  - name: slotName
    value: "{{ slotName }}"
  - name: description
    value: "{{ description }}"
  - name: slotTypeId
    value: "{{ slotTypeId }}"
  - name: valueElicitationSetting
    description: |
      Specifies the elicitation setting details eliciting a slot.
    value:
      defaultValueSpecification:
        defaultValueList:
          - defaultValue: "{{ defaultValue }}"
      slotConstraint: "{{ slotConstraint }}"
      promptSpecification:
        messageGroups:
          - message:
              plainTextMessage:
                value: "{{ value }}"
              customPayload:
                value: "{{ value }}"
              ssmlMessage:
                value: "{{ value }}"
              imageResponseCard:
                title_: "{{ title_ }}"
                subtitle: "{{ subtitle }}"
                imageUrl: "{{ imageUrl }}"
                buttons: "{{ buttons }}"
            variations: "{{ variations }}"
        maxRetries: {{ maxRetries }}
        allowInterrupt: {{ allowInterrupt }}
        messageSelectionStrategy: "{{ messageSelectionStrategy }}"
        promptAttemptsSpecification: "{{ promptAttemptsSpecification }}"
      sampleUtterances:
        - utterance: "{{ utterance }}"
      waitAndContinueSpecification:
        waitingResponse:
          messageGroups:
            - message:
                plainTextMessage: "{{ plainTextMessage }}"
                customPayload: "{{ customPayload }}"
                ssmlMessage: "{{ ssmlMessage }}"
                imageResponseCard: "{{ imageResponseCard }}"
              variations: "{{ variations }}"
          allowInterrupt: {{ allowInterrupt }}
        continueResponse:
          messageGroups:
            - message:
                plainTextMessage: "{{ plainTextMessage }}"
                customPayload: "{{ customPayload }}"
                ssmlMessage: "{{ ssmlMessage }}"
                imageResponseCard: "{{ imageResponseCard }}"
              variations: "{{ variations }}"
          allowInterrupt: {{ allowInterrupt }}
        stillWaitingResponse:
          messageGroups:
            - message:
                plainTextMessage: "{{ plainTextMessage }}"
                customPayload: "{{ customPayload }}"
                ssmlMessage: "{{ ssmlMessage }}"
                imageResponseCard: "{{ imageResponseCard }}"
              variations: "{{ variations }}"
          frequencyInSeconds: {{ frequencyInSeconds }}
          timeoutInSeconds: {{ timeoutInSeconds }}
          allowInterrupt: {{ allowInterrupt }}
        active: {{ active }}
      slotCaptureSetting:
        captureResponse:
          messageGroups:
            - message:
                plainTextMessage: "{{ plainTextMessage }}"
                customPayload: "{{ customPayload }}"
                ssmlMessage: "{{ ssmlMessage }}"
                imageResponseCard: "{{ imageResponseCard }}"
              variations: "{{ variations }}"
          allowInterrupt: {{ allowInterrupt }}
        captureNextStep:
          dialogAction:
            type_: "{{ type_ }}"
            slotToElicit: "{{ slotToElicit }}"
            suppressNextMessage: {{ suppressNextMessage }}
          intent:
            name: "{{ name }}"
            slots: "{{ slots }}"
          sessionAttributes: "{{ sessionAttributes }}"
        captureConditional:
          active: {{ active }}
          conditionalBranches:
            - name: "{{ name }}"
              condition:
                expressionString: "{{ expressionString }}"
              nextStep:
                dialogAction: "{{ dialogAction }}"
                intent: "{{ intent }}"
                sessionAttributes: "{{ sessionAttributes }}"
              response:
                messageGroups: "{{ messageGroups }}"
                allowInterrupt: {{ allowInterrupt }}
          defaultBranch:
            nextStep:
              dialogAction: "{{ dialogAction }}"
              intent: "{{ intent }}"
              sessionAttributes: "{{ sessionAttributes }}"
            response:
              messageGroups: "{{ messageGroups }}"
              allowInterrupt: {{ allowInterrupt }}
        failureResponse:
          messageGroups:
            - message:
                plainTextMessage: "{{ plainTextMessage }}"
                customPayload: "{{ customPayload }}"
                ssmlMessage: "{{ ssmlMessage }}"
                imageResponseCard: "{{ imageResponseCard }}"
              variations: "{{ variations }}"
          allowInterrupt: {{ allowInterrupt }}
        failureNextStep:
          dialogAction:
            type_: "{{ type_ }}"
            slotToElicit: "{{ slotToElicit }}"
            suppressNextMessage: {{ suppressNextMessage }}
          intent:
            name: "{{ name }}"
            slots: "{{ slots }}"
          sessionAttributes: "{{ sessionAttributes }}"
        failureConditional:
          active: {{ active }}
          conditionalBranches:
            - name: "{{ name }}"
              condition:
                expressionString: "{{ expressionString }}"
              nextStep:
                dialogAction: "{{ dialogAction }}"
                intent: "{{ intent }}"
                sessionAttributes: "{{ sessionAttributes }}"
              response:
                messageGroups: "{{ messageGroups }}"
                allowInterrupt: {{ allowInterrupt }}
          defaultBranch:
            nextStep:
              dialogAction: "{{ dialogAction }}"
              intent: "{{ intent }}"
              sessionAttributes: "{{ sessionAttributes }}"
            response:
              messageGroups: "{{ messageGroups }}"
              allowInterrupt: {{ allowInterrupt }}
        codeHook:
          enableCodeHookInvocation: {{ enableCodeHookInvocation }}
          active: {{ active }}
          invocationLabel: "{{ invocationLabel }}"
          postCodeHookSpecification:
            successResponse:
              messageGroups: "{{ messageGroups }}"
              allowInterrupt: {{ allowInterrupt }}
            successNextStep:
              dialogAction: "{{ dialogAction }}"
              intent: "{{ intent }}"
              sessionAttributes: "{{ sessionAttributes }}"
            successConditional:
              active: {{ active }}
              conditionalBranches: "{{ conditionalBranches }}"
              defaultBranch: "{{ defaultBranch }}"
            failureResponse:
              messageGroups: "{{ messageGroups }}"
              allowInterrupt: {{ allowInterrupt }}
            failureNextStep:
              dialogAction: "{{ dialogAction }}"
              intent: "{{ intent }}"
              sessionAttributes: "{{ sessionAttributes }}"
            failureConditional:
              active: {{ active }}
              conditionalBranches: "{{ conditionalBranches }}"
              defaultBranch: "{{ defaultBranch }}"
            timeoutResponse:
              messageGroups: "{{ messageGroups }}"
              allowInterrupt: {{ allowInterrupt }}
            timeoutNextStep:
              dialogAction: "{{ dialogAction }}"
              intent: "{{ intent }}"
              sessionAttributes: "{{ sessionAttributes }}"
            timeoutConditional:
              active: {{ active }}
              conditionalBranches: "{{ conditionalBranches }}"
              defaultBranch: "{{ defaultBranch }}"
        elicitationCodeHook:
          enableCodeHookInvocation: {{ enableCodeHookInvocation }}
          invocationLabel: "{{ invocationLabel }}"
      slotResolutionSetting:
        slotResolutionStrategy: "{{ slotResolutionStrategy }}"
  - name: obfuscationSetting
    description: |
      Determines whether Amazon Lex obscures slot values in conversation logs.
    value:
      obfuscationSettingType: "{{ obfuscationSettingType }}"
  - name: multipleValuesSetting
    description: |
      Indicates whether a slot can return multiple values.
    value:
      allowMultipleValues: {{ allowMultipleValues }}
  - name: subSlotSetting
    description: |
      Specifications for the constituent sub slots and the expression for the composite slot.
    value:
      expression: "{{ expression }}"
      slotSpecifications: "{{ slotSpecifications }}"
`})})]}),"\n",(0,n.jsxs)(t.h2,{id:"update-examples",children:[(0,n.jsx)(t.code,{children:"UPDATE"})," examples"]}),"\n",(0,n.jsx)(d.A,{defaultValue:"update_slot",values:[{label:"update_slot",value:"update_slot"}],children:(0,n.jsxs)(a.A,{value:"update_slot",children:[(0,n.jsx)(t.p,{children:"Updates the settings for a slot."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.lexv2_models.slots\nSET \nslotName = '{{ slotName }}',\ndescription = '{{ description }}',\nslotTypeId = '{{ slotTypeId }}',\nvalueElicitationSetting = '{{ valueElicitationSetting }}',\nobfuscationSetting = '{{ obfuscationSetting }}',\nmultipleValuesSetting = '{{ multipleValuesSetting }}',\nsubSlotSetting = '{{ subSlotSetting }}'\nWHERE \nslot_id = '{{ slot_id }}' --required\nAND bot_id = '{{ bot_id }}' --required\nAND bot_version = '{{ bot_version }}' --required\nAND locale_id = '{{ locale_id }}' --required\nAND intent_id = '{{ intent_id }}' --required\nAND region = '{{ region }}' --required\nAND slotName = '{{ slotName }}' --required\nAND valueElicitationSetting = '{{ valueElicitationSetting }}' --required\nRETURNING\nbotId,\nbotVersion,\ncreationDateTime,\ndescription,\nintentId,\nlastUpdatedDateTime,\nlocaleId,\nmultipleValuesSetting,\nobfuscationSetting,\nslotId,\nslotName,\nslotTypeId,\nsubSlotSetting,\nvalueElicitationSetting;\n"})})]})}),"\n",(0,n.jsxs)(t.h2,{id:"delete-examples",children:[(0,n.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,n.jsx)(d.A,{defaultValue:"delete_slot",values:[{label:"delete_slot",value:"delete_slot"}],children:(0,n.jsxs)(a.A,{value:"delete_slot",children:[(0,n.jsx)(t.p,{children:"Deletes the specified slot from an intent."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.lexv2_models.slots\nWHERE slot_id = '{{ slot_id }}' --required\nAND bot_id = '{{ bot_id }}' --required\nAND bot_version = '{{ bot_version }}' --required\nAND locale_id = '{{ locale_id }}' --required\nAND intent_id = '{{ intent_id }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})})]})}function p(e={}){let{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}}}]);