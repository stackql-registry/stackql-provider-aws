"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["364347"],{285140(e,t,s){s.r(t),s.d(t,{metadata:()=>n,default:()=>h,frontMatter:()=>c,contentTitle:()=>p,toc:()=>m,assets:()=>u});var n=JSON.parse('{"id":"services/lexv2_models/intents/index","title":"intents","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/lexv2_models/intents/index.md","sourceDirName":"services/lexv2_models/intents","slug":"/services/lexv2_models/intents/","permalink":"/services/lexv2_models/intents/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"intents","hide_title":false,"hide_table_of_contents":false,"keywords":["intents","lexv2_models","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"intent_stage_metrics","permalink":"/services/lexv2_models/intent_stage_metrics/"},"next":{"title":"recommended_intents","permalink":"/services/lexv2_models/recommended_intents/"}}'),i=s(474848),o=s(28453),a=s(97362),r=s(897272),l=s(413554),d=s(541647);let c={title:"intents",hide_title:!1,hide_table_of_contents:!1,keywords:["intents","lexv2_models","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},p,u={},m=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function x(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists an ",(0,i.jsx)("code",{children:"intents"})," resource."]}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Name"})}),(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"intents"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Type"})}),(0,i.jsx)("td",{children:"Resource"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Id"})}),(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"aws.lexv2_models.intents"})})]})]})}),"\n",(0,i.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.p,{children:["The following fields are returned by ",(0,i.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,i.jsxs)(l.A,{defaultValue:"describe_intent",values:[{label:"describe_intent",value:"describe_intent"},{label:"list_intents",value:"list_intents"}],children:[(0,i.jsx)(d.A,{value:"describe_intent",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"botId"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The identifier of the bot associated with the intent. (pattern: <code>^[0-9a-zA-Z]+$</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"botVersion"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The version of the bot associated with the intent. (pattern: <code>^DRAFT$</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"creationDateTime"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string (date-time)"})}),(0,i.jsx)("td",{children:"A timestamp of the date and time that the intent was created."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"description"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The description of the intent."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"dialogCodeHook"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Settings that determine the Lambda function that Amazon Lex uses for processing user responses."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"fulfillmentCodeHook"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Determines if a Lambda function should be invoked for a specific intent."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"initialResponseSetting"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"inputContexts"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"A list of contexts that must be active for the intent to be considered for sending to the user."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"intentClosingSetting"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"intentConfirmationSetting"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Provides a prompt for making sure that the user is ready for the intent to be fulfilled."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"intentDisplayName"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The display name specified for the intent."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"intentId"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The unique identifier assigned to the intent when it was created. (pattern: <code>^[0-9a-zA-Z]+$</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"intentName"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The name specified for the intent. (pattern: <code>^([0-9a-zA-Z][_-]?){1,100}$</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"kendraConfiguration"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"lastUpdatedDateTime"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string (date-time)"})}),(0,i.jsx)("td",{children:"A timestamp of the date and time that the intent was last updated."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"localeId"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The language and locale specified for the intent."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"outputContexts"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"A list of contexts that are activated when the intent is fulfilled."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"parentIntentSignature"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The identifier of the built-in intent that this intent is derived from, if any."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"qInConnectIntentConfiguration"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"The configuration details of the Qinconnect intent."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"qnAIntentConfiguration"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Details about the the configuration of the built-in Amazon.QnAIntent."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"sampleUtterances"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"User utterances that trigger this intent."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"slotPriorities"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"The list that determines the priority that slots should be elicited from the user."})]})]})]})}),(0,i.jsx)(d.A,{value:"list_intents",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"botId"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The identifier of the bot that contains the intent. (pattern: <code>^[0-9a-zA-Z]+$</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"botVersion"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The version of the bot that contains the intent. (pattern: <code>^(DRAFT|[0-9]+)$</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"intentSummaries"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"Summary information for the intents that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter of the request. If there are more intents available, the nextToken field contains a token to get the next page of results."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"localeId"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The language and locale of the intents in the list."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"nextToken"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A token that indicates whether there are more results to return in a response to the ListIntents operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListIntents operation request to get the next page of results."})]})]})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Accessible by"}),(0,i.jsx)("th",{children:"Required Params"}),(0,i.jsx)("th",{children:"Optional Params"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#describe_intent",children:(0,i.jsx)(a.A,{code:"describe_intent"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"select"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-intent_id",children:(0,i.jsx)("code",{children:"intent_id"})}),", ",(0,i.jsx)("a",{href:"#parameter-bot_id",children:(0,i.jsx)("code",{children:"bot_id"})}),", ",(0,i.jsx)("a",{href:"#parameter-bot_version",children:(0,i.jsx)("code",{children:"bot_version"})}),", ",(0,i.jsx)("a",{href:"#parameter-locale_id",children:(0,i.jsx)("code",{children:"locale_id"})}),", ",(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Returns metadata about an intent."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#list_intents",children:(0,i.jsx)(a.A,{code:"list_intents"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"select"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-bot_id",children:(0,i.jsx)("code",{children:"bot_id"})}),", ",(0,i.jsx)("a",{href:"#parameter-bot_version",children:(0,i.jsx)("code",{children:"bot_version"})}),", ",(0,i.jsx)("a",{href:"#parameter-locale_id",children:(0,i.jsx)("code",{children:"locale_id"})}),", ",(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Get a list of intents that meet the specified criteria."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#create_intent",children:(0,i.jsx)(a.A,{code:"create_intent"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"insert"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-bot_id",children:(0,i.jsx)("code",{children:"bot_id"})}),", ",(0,i.jsx)("a",{href:"#parameter-bot_version",children:(0,i.jsx)("code",{children:"bot_version"})}),", ",(0,i.jsx)("a",{href:"#parameter-locale_id",children:(0,i.jsx)("code",{children:"locale_id"})}),", ",(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})}),", ",(0,i.jsx)("a",{href:"#parameter-intentName",children:(0,i.jsx)("code",{children:"intentName"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:'Creates an intent. To define the interaction between the user and your bot, you define one or more intents. For example, for a pizza ordering bot you would create an OrderPizza intent. When you create an intent, you must provide a name. You can optionally provide the following: Sample utterances. For example, "I want to order a pizza" and "Can I order a pizza." You can\'t provide utterances for built-in intents. Information to be gathered. You specify slots for the information that you bot requests from the user. You can specify standard slot types, such as date and time, or custom slot types for your application. How the intent is fulfilled. You can provide a Lambda function or configure the intent to return the intent information to your client application. If you use a Lambda function, Amazon Lex invokes the function when all of the intent information is available. A confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?" A conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza." A follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with your pizza?"'})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#update_intent",children:(0,i.jsx)(a.A,{code:"update_intent"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"update"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-intent_id",children:(0,i.jsx)("code",{children:"intent_id"})}),", ",(0,i.jsx)("a",{href:"#parameter-bot_id",children:(0,i.jsx)("code",{children:"bot_id"})}),", ",(0,i.jsx)("a",{href:"#parameter-bot_version",children:(0,i.jsx)("code",{children:"bot_version"})}),", ",(0,i.jsx)("a",{href:"#parameter-locale_id",children:(0,i.jsx)("code",{children:"locale_id"})}),", ",(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})}),", ",(0,i.jsx)("a",{href:"#parameter-intentName",children:(0,i.jsx)("code",{children:"intentName"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Updates the settings for an intent."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#delete_intent",children:(0,i.jsx)(a.A,{code:"delete_intent"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"delete"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-intent_id",children:(0,i.jsx)("code",{children:"intent_id"})}),", ",(0,i.jsx)("a",{href:"#parameter-bot_id",children:(0,i.jsx)("code",{children:"bot_id"})}),", ",(0,i.jsx)("a",{href:"#parameter-bot_version",children:(0,i.jsx)("code",{children:"bot_version"})}),", ",(0,i.jsx)("a",{href:"#parameter-locale_id",children:(0,i.jsx)("code",{children:"locale_id"})}),", ",(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Removes the specified intent. Deleting an intent also deletes the slots associated with the intent."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,i.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,i.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{id:"parameter-bot_id",children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"bot_id"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The identifier of the bot associated with the intent."})]}),(0,i.jsxs)("tr",{id:"parameter-bot_version",children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"bot_version"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The version of the bot associated with the intent."})]}),(0,i.jsxs)("tr",{id:"parameter-intent_id",children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"intent_id"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The unique identifier of the intent to delete."})]}),(0,i.jsxs)("tr",{id:"parameter-locale_id",children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"locale_id"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The identifier of the language and locale where the bot will be deleted. The string must match one of the supported locales. For more information, see Supported languages."})]}),(0,i.jsxs)("tr",{id:"parameter-region",children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"region"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"AWS region (default: us-east-1)"})]})]})]}),"\n",(0,i.jsxs)(t.h2,{id:"select-examples",children:[(0,i.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,i.jsxs)(l.A,{defaultValue:"describe_intent",values:[{label:"describe_intent",value:"describe_intent"},{label:"list_intents",value:"list_intents"}],children:[(0,i.jsxs)(d.A,{value:"describe_intent",children:[(0,i.jsx)(t.p,{children:"Returns metadata about an intent."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT\nbotId,\nbotVersion,\ncreationDateTime,\ndescription,\ndialogCodeHook,\nfulfillmentCodeHook,\ninitialResponseSetting,\ninputContexts,\nintentClosingSetting,\nintentConfirmationSetting,\nintentDisplayName,\nintentId,\nintentName,\nkendraConfiguration,\nlastUpdatedDateTime,\nlocaleId,\noutputContexts,\nparentIntentSignature,\nqInConnectIntentConfiguration,\nqnAIntentConfiguration,\nsampleUtterances,\nslotPriorities\nFROM aws.lexv2_models.intents\nWHERE intent_id = '{{ intent_id }}' -- required\nAND bot_id = '{{ bot_id }}' -- required\nAND bot_version = '{{ bot_version }}' -- required\nAND locale_id = '{{ locale_id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,i.jsxs)(d.A,{value:"list_intents",children:[(0,i.jsx)(t.p,{children:"Get a list of intents that meet the specified criteria."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT\nbotId,\nbotVersion,\nintentSummaries,\nlocaleId,\nnextToken\nFROM aws.lexv2_models.intents\nWHERE bot_id = '{{ bot_id }}' -- required\nAND bot_version = '{{ bot_version }}' -- required\nAND locale_id = '{{ locale_id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,i.jsxs)(t.h2,{id:"insert-examples",children:[(0,i.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,i.jsxs)(l.A,{defaultValue:"create_intent",values:[{label:"create_intent",value:"create_intent"},{label:"Manifest",value:"manifest"}],children:[(0,i.jsxs)(d.A,{value:"create_intent",children:[(0,i.jsx)(t.p,{children:'Creates an intent. To define the interaction between the user and your bot, you define one or more intents. For example, for a pizza ordering bot you would create an OrderPizza intent. When you create an intent, you must provide a name. You can optionally provide the following: Sample utterances. For example, "I want to order a pizza" and "Can I order a pizza." You can\'t provide utterances for built-in intents. Information to be gathered. You specify slots for the information that you bot requests from the user. You can specify standard slot types, such as date and time, or custom slot types for your application. How the intent is fulfilled. You can provide a Lambda function or configure the intent to return the intent information to your client application. If you use a Lambda function, Amazon Lex invokes the function when all of the intent information is available. A confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?" A conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza." A follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with your pizza?"'}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.lexv2_models.intents (\nintentName,\nintentDisplayName,\ndescription,\nparentIntentSignature,\nsampleUtterances,\ndialogCodeHook,\nfulfillmentCodeHook,\nintentConfirmationSetting,\nintentClosingSetting,\ninputContexts,\noutputContexts,\nkendraConfiguration,\ninitialResponseSetting,\nqnAIntentConfiguration,\nqInConnectIntentConfiguration,\nbot_id,\nbot_version,\nlocale_id,\nregion\n)\nSELECT \n'{{ intentName }}' /* required */,\n'{{ intentDisplayName }}',\n'{{ description }}',\n'{{ parentIntentSignature }}',\n'{{ sampleUtterances }}',\n'{{ dialogCodeHook }}',\n'{{ fulfillmentCodeHook }}',\n'{{ intentConfirmationSetting }}',\n'{{ intentClosingSetting }}',\n'{{ inputContexts }}',\n'{{ outputContexts }}',\n'{{ kendraConfiguration }}',\n'{{ initialResponseSetting }}',\n'{{ qnAIntentConfiguration }}',\n'{{ qInConnectIntentConfiguration }}',\n'{{ bot_id }}',\n'{{ bot_version }}',\n'{{ locale_id }}',\n'{{ region }}'\nRETURNING\nbotId,\nbotVersion,\ncreationDateTime,\ndescription,\ndialogCodeHook,\nfulfillmentCodeHook,\ninitialResponseSetting,\ninputContexts,\nintentClosingSetting,\nintentConfirmationSetting,\nintentDisplayName,\nintentId,\nintentName,\nkendraConfiguration,\nlocaleId,\noutputContexts,\nparentIntentSignature,\nqInConnectIntentConfiguration,\nqnAIntentConfiguration,\nsampleUtterances\n;\n"})})]}),(0,i.jsx)(d.A,{value:"manifest",children:(0,i.jsx)(r.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: intents
props:
  - name: bot_id
    value: "{{ bot_id }}"
    description: Required parameter for the intents resource.
  - name: bot_version
    value: "{{ bot_version }}"
    description: Required parameter for the intents resource.
  - name: locale_id
    value: "{{ locale_id }}"
    description: Required parameter for the intents resource.
  - name: region
    value: "{{ region }}"
    description: Required parameter for the intents resource.
  - name: intentName
    value: "{{ intentName }}"
  - name: intentDisplayName
    value: "{{ intentDisplayName }}"
  - name: description
    value: "{{ description }}"
  - name: parentIntentSignature
    value: "{{ parentIntentSignature }}"
  - name: sampleUtterances
    value:
      - utterance: "{{ utterance }}"
  - name: dialogCodeHook
    description: |
      Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
    value:
      enabled: {{ enabled }}
  - name: fulfillmentCodeHook
    description: |
      Determines if a Lambda function should be invoked for a specific intent.
    value:
      enabled: {{ enabled }}
      postFulfillmentStatusSpecification:
        successResponse:
          messageGroups:
            - message:
                plainTextMessage: "{{ plainTextMessage }}"
                customPayload: "{{ customPayload }}"
                ssmlMessage: "{{ ssmlMessage }}"
                imageResponseCard: "{{ imageResponseCard }}"
              variations: "{{ variations }}"
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
        timeoutResponse:
          messageGroups:
            - message:
                plainTextMessage: "{{ plainTextMessage }}"
                customPayload: "{{ customPayload }}"
                ssmlMessage: "{{ ssmlMessage }}"
                imageResponseCard: "{{ imageResponseCard }}"
              variations: "{{ variations }}"
          allowInterrupt: {{ allowInterrupt }}
        successNextStep:
          dialogAction:
            type_: "{{ type_ }}"
            slotToElicit: "{{ slotToElicit }}"
            suppressNextMessage: {{ suppressNextMessage }}
          intent:
            name: "{{ name }}"
            slots: "{{ slots }}"
          sessionAttributes: "{{ sessionAttributes }}"
        successConditional:
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
        timeoutNextStep:
          dialogAction:
            type_: "{{ type_ }}"
            slotToElicit: "{{ slotToElicit }}"
            suppressNextMessage: {{ suppressNextMessage }}
          intent:
            name: "{{ name }}"
            slots: "{{ slots }}"
          sessionAttributes: "{{ sessionAttributes }}"
        timeoutConditional:
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
      fulfillmentUpdatesSpecification:
        active: {{ active }}
        startResponse:
          delayInSeconds: {{ delayInSeconds }}
          messageGroups:
            - message:
                plainTextMessage: "{{ plainTextMessage }}"
                customPayload: "{{ customPayload }}"
                ssmlMessage: "{{ ssmlMessage }}"
                imageResponseCard: "{{ imageResponseCard }}"
              variations: "{{ variations }}"
          allowInterrupt: {{ allowInterrupt }}
        updateResponse:
          frequencyInSeconds: {{ frequencyInSeconds }}
          messageGroups:
            - message:
                plainTextMessage: "{{ plainTextMessage }}"
                customPayload: "{{ customPayload }}"
                ssmlMessage: "{{ ssmlMessage }}"
                imageResponseCard: "{{ imageResponseCard }}"
              variations: "{{ variations }}"
          allowInterrupt: {{ allowInterrupt }}
        timeoutInSeconds: {{ timeoutInSeconds }}
      active: {{ active }}
  - name: intentConfirmationSetting
    description: |
      Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
    value:
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
      declinationResponse:
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
        allowInterrupt: {{ allowInterrupt }}
      active: {{ active }}
      confirmationResponse:
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
        allowInterrupt: {{ allowInterrupt }}
      confirmationNextStep:
        dialogAction:
          type_: "{{ type_ }}"
          slotToElicit: "{{ slotToElicit }}"
          suppressNextMessage: {{ suppressNextMessage }}
        intent:
          name: "{{ name }}"
          slots: "{{ slots }}"
        sessionAttributes: "{{ sessionAttributes }}"
      confirmationConditional:
        active: {{ active }}
        conditionalBranches:
          - name: "{{ name }}"
            condition:
              expressionString: "{{ expressionString }}"
            nextStep:
              dialogAction:
                type_: "{{ type_ }}"
                slotToElicit: "{{ slotToElicit }}"
                suppressNextMessage: {{ suppressNextMessage }}
              intent:
                name: "{{ name }}"
                slots: "{{ slots }}"
              sessionAttributes: "{{ sessionAttributes }}"
            response:
              messageGroups:
                - message:
                    plainTextMessage: "{{ plainTextMessage }}"
                    customPayload: "{{ customPayload }}"
                    ssmlMessage: "{{ ssmlMessage }}"
                    imageResponseCard: "{{ imageResponseCard }}"
                  variations: "{{ variations }}"
              allowInterrupt: {{ allowInterrupt }}
        defaultBranch:
          nextStep:
            dialogAction:
              type_: "{{ type_ }}"
              slotToElicit: "{{ slotToElicit }}"
              suppressNextMessage: {{ suppressNextMessage }}
            intent:
              name: "{{ name }}"
              slots: "{{ slots }}"
            sessionAttributes: "{{ sessionAttributes }}"
          response:
            messageGroups:
              - message:
                  plainTextMessage: "{{ plainTextMessage }}"
                  customPayload: "{{ customPayload }}"
                  ssmlMessage: "{{ ssmlMessage }}"
                  imageResponseCard: "{{ imageResponseCard }}"
                variations: "{{ variations }}"
            allowInterrupt: {{ allowInterrupt }}
      declinationNextStep:
        dialogAction:
          type_: "{{ type_ }}"
          slotToElicit: "{{ slotToElicit }}"
          suppressNextMessage: {{ suppressNextMessage }}
        intent:
          name: "{{ name }}"
          slots: "{{ slots }}"
        sessionAttributes: "{{ sessionAttributes }}"
      declinationConditional:
        active: {{ active }}
        conditionalBranches:
          - name: "{{ name }}"
            condition:
              expressionString: "{{ expressionString }}"
            nextStep:
              dialogAction:
                type_: "{{ type_ }}"
                slotToElicit: "{{ slotToElicit }}"
                suppressNextMessage: {{ suppressNextMessage }}
              intent:
                name: "{{ name }}"
                slots: "{{ slots }}"
              sessionAttributes: "{{ sessionAttributes }}"
            response:
              messageGroups:
                - message:
                    plainTextMessage: "{{ plainTextMessage }}"
                    customPayload: "{{ customPayload }}"
                    ssmlMessage: "{{ ssmlMessage }}"
                    imageResponseCard: "{{ imageResponseCard }}"
                  variations: "{{ variations }}"
              allowInterrupt: {{ allowInterrupt }}
        defaultBranch:
          nextStep:
            dialogAction:
              type_: "{{ type_ }}"
              slotToElicit: "{{ slotToElicit }}"
              suppressNextMessage: {{ suppressNextMessage }}
            intent:
              name: "{{ name }}"
              slots: "{{ slots }}"
            sessionAttributes: "{{ sessionAttributes }}"
          response:
            messageGroups:
              - message:
                  plainTextMessage: "{{ plainTextMessage }}"
                  customPayload: "{{ customPayload }}"
                  ssmlMessage: "{{ ssmlMessage }}"
                  imageResponseCard: "{{ imageResponseCard }}"
                variations: "{{ variations }}"
            allowInterrupt: {{ allowInterrupt }}
      failureResponse:
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
              dialogAction:
                type_: "{{ type_ }}"
                slotToElicit: "{{ slotToElicit }}"
                suppressNextMessage: {{ suppressNextMessage }}
              intent:
                name: "{{ name }}"
                slots: "{{ slots }}"
              sessionAttributes: "{{ sessionAttributes }}"
            response:
              messageGroups:
                - message:
                    plainTextMessage: "{{ plainTextMessage }}"
                    customPayload: "{{ customPayload }}"
                    ssmlMessage: "{{ ssmlMessage }}"
                    imageResponseCard: "{{ imageResponseCard }}"
                  variations: "{{ variations }}"
              allowInterrupt: {{ allowInterrupt }}
        defaultBranch:
          nextStep:
            dialogAction:
              type_: "{{ type_ }}"
              slotToElicit: "{{ slotToElicit }}"
              suppressNextMessage: {{ suppressNextMessage }}
            intent:
              name: "{{ name }}"
              slots: "{{ slots }}"
            sessionAttributes: "{{ sessionAttributes }}"
          response:
            messageGroups:
              - message:
                  plainTextMessage: "{{ plainTextMessage }}"
                  customPayload: "{{ customPayload }}"
                  ssmlMessage: "{{ ssmlMessage }}"
                  imageResponseCard: "{{ imageResponseCard }}"
                variations: "{{ variations }}"
            allowInterrupt: {{ allowInterrupt }}
      codeHook:
        enableCodeHookInvocation: {{ enableCodeHookInvocation }}
        active: {{ active }}
        invocationLabel: "{{ invocationLabel }}"
        postCodeHookSpecification:
          successResponse:
            messageGroups:
              - message:
                  plainTextMessage: "{{ plainTextMessage }}"
                  customPayload: "{{ customPayload }}"
                  ssmlMessage: "{{ ssmlMessage }}"
                  imageResponseCard: "{{ imageResponseCard }}"
                variations: "{{ variations }}"
            allowInterrupt: {{ allowInterrupt }}
          successNextStep:
            dialogAction:
              type_: "{{ type_ }}"
              slotToElicit: "{{ slotToElicit }}"
              suppressNextMessage: {{ suppressNextMessage }}
            intent:
              name: "{{ name }}"
              slots: "{{ slots }}"
            sessionAttributes: "{{ sessionAttributes }}"
          successConditional:
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
              nextStep: "{{ nextStep }}"
              response: "{{ response }}"
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
              nextStep: "{{ nextStep }}"
              response: "{{ response }}"
          timeoutResponse:
            messageGroups:
              - message:
                  plainTextMessage: "{{ plainTextMessage }}"
                  customPayload: "{{ customPayload }}"
                  ssmlMessage: "{{ ssmlMessage }}"
                  imageResponseCard: "{{ imageResponseCard }}"
                variations: "{{ variations }}"
            allowInterrupt: {{ allowInterrupt }}
          timeoutNextStep:
            dialogAction:
              type_: "{{ type_ }}"
              slotToElicit: "{{ slotToElicit }}"
              suppressNextMessage: {{ suppressNextMessage }}
            intent:
              name: "{{ name }}"
              slots: "{{ slots }}"
            sessionAttributes: "{{ sessionAttributes }}"
          timeoutConditional:
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
              nextStep: "{{ nextStep }}"
              response: "{{ response }}"
      elicitationCodeHook:
        enableCodeHookInvocation: {{ enableCodeHookInvocation }}
        invocationLabel: "{{ invocationLabel }}"
  - name: intentClosingSetting
    description: |
      Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
    value:
      closingResponse:
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
        allowInterrupt: {{ allowInterrupt }}
      active: {{ active }}
      nextStep:
        dialogAction:
          type_: "{{ type_ }}"
          slotToElicit: "{{ slotToElicit }}"
          suppressNextMessage: {{ suppressNextMessage }}
        intent:
          name: "{{ name }}"
          slots: "{{ slots }}"
        sessionAttributes: "{{ sessionAttributes }}"
      conditional:
        active: {{ active }}
        conditionalBranches:
          - name: "{{ name }}"
            condition:
              expressionString: "{{ expressionString }}"
            nextStep:
              dialogAction:
                type_: "{{ type_ }}"
                slotToElicit: "{{ slotToElicit }}"
                suppressNextMessage: {{ suppressNextMessage }}
              intent:
                name: "{{ name }}"
                slots: "{{ slots }}"
              sessionAttributes: "{{ sessionAttributes }}"
            response:
              messageGroups:
                - message:
                    plainTextMessage: "{{ plainTextMessage }}"
                    customPayload: "{{ customPayload }}"
                    ssmlMessage: "{{ ssmlMessage }}"
                    imageResponseCard: "{{ imageResponseCard }}"
                  variations: "{{ variations }}"
              allowInterrupt: {{ allowInterrupt }}
        defaultBranch:
          nextStep:
            dialogAction:
              type_: "{{ type_ }}"
              slotToElicit: "{{ slotToElicit }}"
              suppressNextMessage: {{ suppressNextMessage }}
            intent:
              name: "{{ name }}"
              slots: "{{ slots }}"
            sessionAttributes: "{{ sessionAttributes }}"
          response:
            messageGroups:
              - message:
                  plainTextMessage: "{{ plainTextMessage }}"
                  customPayload: "{{ customPayload }}"
                  ssmlMessage: "{{ ssmlMessage }}"
                  imageResponseCard: "{{ imageResponseCard }}"
                variations: "{{ variations }}"
            allowInterrupt: {{ allowInterrupt }}
  - name: inputContexts
    value:
      - name: "{{ name }}"
  - name: outputContexts
    value:
      - name: "{{ name }}"
        timeToLiveInSeconds: {{ timeToLiveInSeconds }}
        turnsToLive: {{ turnsToLive }}
  - name: kendraConfiguration
    description: |
      Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
    value:
      kendraIndex: "{{ kendraIndex }}"
      queryFilterStringEnabled: {{ queryFilterStringEnabled }}
      queryFilterString: "{{ queryFilterString }}"
  - name: initialResponseSetting
    description: |
      Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
    value:
      initialResponse:
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
        allowInterrupt: {{ allowInterrupt }}
      nextStep:
        dialogAction:
          type_: "{{ type_ }}"
          slotToElicit: "{{ slotToElicit }}"
          suppressNextMessage: {{ suppressNextMessage }}
        intent:
          name: "{{ name }}"
          slots: "{{ slots }}"
        sessionAttributes: "{{ sessionAttributes }}"
      conditional:
        active: {{ active }}
        conditionalBranches:
          - name: "{{ name }}"
            condition:
              expressionString: "{{ expressionString }}"
            nextStep:
              dialogAction:
                type_: "{{ type_ }}"
                slotToElicit: "{{ slotToElicit }}"
                suppressNextMessage: {{ suppressNextMessage }}
              intent:
                name: "{{ name }}"
                slots: "{{ slots }}"
              sessionAttributes: "{{ sessionAttributes }}"
            response:
              messageGroups:
                - message:
                    plainTextMessage: "{{ plainTextMessage }}"
                    customPayload: "{{ customPayload }}"
                    ssmlMessage: "{{ ssmlMessage }}"
                    imageResponseCard: "{{ imageResponseCard }}"
                  variations: "{{ variations }}"
              allowInterrupt: {{ allowInterrupt }}
        defaultBranch:
          nextStep:
            dialogAction:
              type_: "{{ type_ }}"
              slotToElicit: "{{ slotToElicit }}"
              suppressNextMessage: {{ suppressNextMessage }}
            intent:
              name: "{{ name }}"
              slots: "{{ slots }}"
            sessionAttributes: "{{ sessionAttributes }}"
          response:
            messageGroups:
              - message:
                  plainTextMessage: "{{ plainTextMessage }}"
                  customPayload: "{{ customPayload }}"
                  ssmlMessage: "{{ ssmlMessage }}"
                  imageResponseCard: "{{ imageResponseCard }}"
                variations: "{{ variations }}"
            allowInterrupt: {{ allowInterrupt }}
      codeHook:
        enableCodeHookInvocation: {{ enableCodeHookInvocation }}
        active: {{ active }}
        invocationLabel: "{{ invocationLabel }}"
        postCodeHookSpecification:
          successResponse:
            messageGroups:
              - message:
                  plainTextMessage: "{{ plainTextMessage }}"
                  customPayload: "{{ customPayload }}"
                  ssmlMessage: "{{ ssmlMessage }}"
                  imageResponseCard: "{{ imageResponseCard }}"
                variations: "{{ variations }}"
            allowInterrupt: {{ allowInterrupt }}
          successNextStep:
            dialogAction:
              type_: "{{ type_ }}"
              slotToElicit: "{{ slotToElicit }}"
              suppressNextMessage: {{ suppressNextMessage }}
            intent:
              name: "{{ name }}"
              slots: "{{ slots }}"
            sessionAttributes: "{{ sessionAttributes }}"
          successConditional:
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
              nextStep: "{{ nextStep }}"
              response: "{{ response }}"
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
              nextStep: "{{ nextStep }}"
              response: "{{ response }}"
          timeoutResponse:
            messageGroups:
              - message:
                  plainTextMessage: "{{ plainTextMessage }}"
                  customPayload: "{{ customPayload }}"
                  ssmlMessage: "{{ ssmlMessage }}"
                  imageResponseCard: "{{ imageResponseCard }}"
                variations: "{{ variations }}"
            allowInterrupt: {{ allowInterrupt }}
          timeoutNextStep:
            dialogAction:
              type_: "{{ type_ }}"
              slotToElicit: "{{ slotToElicit }}"
              suppressNextMessage: {{ suppressNextMessage }}
            intent:
              name: "{{ name }}"
              slots: "{{ slots }}"
            sessionAttributes: "{{ sessionAttributes }}"
          timeoutConditional:
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
              nextStep: "{{ nextStep }}"
              response: "{{ response }}"
  - name: qnAIntentConfiguration
    description: |
      Details about the the configuration of the built-in Amazon.QnAIntent.
    value:
      dataSourceConfiguration:
        opensearchConfiguration:
          domainEndpoint: "{{ domainEndpoint }}"
          indexName: "{{ indexName }}"
          exactResponse: {{ exactResponse }}
          exactResponseFields:
            questionField: "{{ questionField }}"
            answerField: "{{ answerField }}"
          includeFields:
            - "{{ includeFields }}"
        kendraConfiguration:
          kendraIndex: "{{ kendraIndex }}"
          queryFilterStringEnabled: {{ queryFilterStringEnabled }}
          queryFilterString: "{{ queryFilterString }}"
          exactResponse: {{ exactResponse }}
        bedrockKnowledgeStoreConfiguration:
          bedrockKnowledgeBaseArn: "{{ bedrockKnowledgeBaseArn }}"
          exactResponse: {{ exactResponse }}
          exactResponseFields:
            answerField: "{{ answerField }}"
      bedrockModelConfiguration:
        modelArn: "{{ modelArn }}"
        guardrail:
          identifier: "{{ identifier }}"
          version: "{{ version }}"
        traceStatus: "{{ traceStatus }}"
        customPrompt: "{{ customPrompt }}"
  - name: qInConnectIntentConfiguration
    description: |
      The configuration details of the Qinconnect intent.
    value:
      qInConnectAssistantConfiguration:
        assistantArn: "{{ assistantArn }}"
`})})]}),"\n",(0,i.jsxs)(t.h2,{id:"update-examples",children:[(0,i.jsx)(t.code,{children:"UPDATE"})," examples"]}),"\n",(0,i.jsx)(l.A,{defaultValue:"update_intent",values:[{label:"update_intent",value:"update_intent"}],children:(0,i.jsxs)(d.A,{value:"update_intent",children:[(0,i.jsx)(t.p,{children:"Updates the settings for an intent."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.lexv2_models.intents\nSET \nintentName = '{{ intentName }}',\nintentDisplayName = '{{ intentDisplayName }}',\ndescription = '{{ description }}',\nparentIntentSignature = '{{ parentIntentSignature }}',\nsampleUtterances = '{{ sampleUtterances }}',\ndialogCodeHook = '{{ dialogCodeHook }}',\nfulfillmentCodeHook = '{{ fulfillmentCodeHook }}',\nslotPriorities = '{{ slotPriorities }}',\nintentConfirmationSetting = '{{ intentConfirmationSetting }}',\nintentClosingSetting = '{{ intentClosingSetting }}',\ninputContexts = '{{ inputContexts }}',\noutputContexts = '{{ outputContexts }}',\nkendraConfiguration = '{{ kendraConfiguration }}',\ninitialResponseSetting = '{{ initialResponseSetting }}',\nqnAIntentConfiguration = '{{ qnAIntentConfiguration }}',\nqInConnectIntentConfiguration = '{{ qInConnectIntentConfiguration }}'\nWHERE \nintent_id = '{{ intent_id }}' --required\nAND bot_id = '{{ bot_id }}' --required\nAND bot_version = '{{ bot_version }}' --required\nAND locale_id = '{{ locale_id }}' --required\nAND region = '{{ region }}' --required\nAND intentName = '{{ intentName }}' --required\nRETURNING\nbotId,\nbotVersion,\ncreationDateTime,\ndescription,\ndialogCodeHook,\nfulfillmentCodeHook,\ninitialResponseSetting,\ninputContexts,\nintentClosingSetting,\nintentConfirmationSetting,\nintentDisplayName,\nintentId,\nintentName,\nkendraConfiguration,\nlastUpdatedDateTime,\nlocaleId,\noutputContexts,\nparentIntentSignature,\nqInConnectIntentConfiguration,\nqnAIntentConfiguration,\nsampleUtterances,\nslotPriorities;\n"})})]})}),"\n",(0,i.jsxs)(t.h2,{id:"delete-examples",children:[(0,i.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,i.jsx)(l.A,{defaultValue:"delete_intent",values:[{label:"delete_intent",value:"delete_intent"}],children:(0,i.jsxs)(d.A,{value:"delete_intent",children:[(0,i.jsx)(t.p,{children:"Removes the specified intent. Deleting an intent also deletes the slots associated with the intent."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.lexv2_models.intents\nWHERE intent_id = '{{ intent_id }}' --required\nAND bot_id = '{{ bot_id }}' --required\nAND bot_version = '{{ bot_version }}' --required\nAND locale_id = '{{ locale_id }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})})]})}function h(e={}){let{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}}}]);