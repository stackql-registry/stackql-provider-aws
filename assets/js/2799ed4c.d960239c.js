"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["180529"],{775304(e,t,i){i.r(t),i.d(t,{metadata:()=>n,default:()=>u,frontMatter:()=>c,contentTitle:()=>h,toc:()=>p,assets:()=>m});var n=JSON.parse('{"id":"services/mediaconvert/job_templates/index","title":"job_templates","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/mediaconvert/job_templates/index.md","sourceDirName":"services/mediaconvert/job_templates","slug":"/services/mediaconvert/job_templates/","permalink":"/services/mediaconvert/job_templates/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"job_templates","hide_title":false,"hide_table_of_contents":false,"keywords":["job_templates","mediaconvert","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"endpoints","permalink":"/services/mediaconvert/endpoints/"},"next":{"title":"jobs","permalink":"/services/mediaconvert/jobs/"}}'),r=i(474848),a=i(28453),s=i(97362),d=i(897272),o=i(413554),l=i(541647);let c={title:"job_templates",hide_title:!1,hide_table_of_contents:!1,keywords:["job_templates","mediaconvert","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,m={},p=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function j(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists a ",(0,r.jsx)("code",{children:"job_templates"})," resource."]}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"job_templates"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Type"})}),(0,r.jsx)("td",{children:"Resource"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"aws.mediaconvert.job_templates"})})]})]})}),"\n",(0,r.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.p,{children:["The following fields are returned by ",(0,r.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,r.jsxs)(o.A,{defaultValue:"get_job_template",values:[{label:"get_job_template",value:"get_job_template"},{label:"list_job_templates",value:"list_job_templates"}],children:[(0,r.jsx)(l.A,{value:"get_job_template",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"AccelerationSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Accelerated transcoding can significantly speed up jobs with long, visually complex content."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Arn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"An identifier for this resource that is unique within all of AWS."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Category"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"An optional category you create to organize your job templates."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"CreatedAt"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"The timestamp in epoch seconds for Job template creation."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Description"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"An optional description you create for each job template."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"HopDestinations"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"array"})}),(0,r.jsx)("td",{children:"Optional list of hop destinations."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"LastUpdated"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"The timestamp in epoch seconds when the Job template was last updated."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"A name you create for each job template. Each name must be unique within your account."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Priority"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer"})}),(0,r.jsx)("td",{children:"Relative priority on the job."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Queue"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Settings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"StatusUpdateInterval"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. (SECONDS_10, SECONDS_12, SECONDS_15, SECONDS_20, SECONDS_30, SECONDS_60, SECONDS_120, SECONDS_180, SECONDS_240, SECONDS_300, SECONDS_360, SECONDS_420, SECONDS_480, SECONDS_540, SECONDS_600)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Type"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"A job template can be of two types: system or custom. System or built-in job templates can't be modified or deleted by the user. (SYSTEM, CUSTOM)"})]})]})]})}),(0,r.jsx)(l.A,{value:"list_job_templates",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"AccelerationSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Accelerated transcoding can significantly speed up jobs with long, visually complex content."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Arn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"An identifier for this resource that is unique within all of AWS."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Category"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"An optional category you create to organize your job templates."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"CreatedAt"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"The timestamp in epoch seconds for Job template creation."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Description"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"An optional description you create for each job template."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"HopDestinations"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"array"})}),(0,r.jsx)("td",{children:"Optional list of hop destinations."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"LastUpdated"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"The timestamp in epoch seconds when the Job template was last updated."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"A name you create for each job template. Each name must be unique within your account."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Priority"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer"})}),(0,r.jsx)("td",{children:"Relative priority on the job."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Queue"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Settings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"StatusUpdateInterval"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error. (SECONDS_10, SECONDS_12, SECONDS_15, SECONDS_20, SECONDS_30, SECONDS_60, SECONDS_120, SECONDS_180, SECONDS_240, SECONDS_300, SECONDS_360, SECONDS_420, SECONDS_480, SECONDS_540, SECONDS_600)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"Type"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"A job template can be of two types: system or custom. System or built-in job templates can't be modified or deleted by the user. (SYSTEM, CUSTOM)"})]})]})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Accessible by"}),(0,r.jsx)("th",{children:"Required Params"}),(0,r.jsx)("th",{children:"Optional Params"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#get_job_template",children:(0,r.jsx)(s.A,{code:"get_job_template"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"select"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-name",children:(0,r.jsx)("code",{children:"name"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Retrieve the JSON for a specific job template."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#list_job_templates",children:(0,r.jsx)(s.A,{code:"list_job_templates"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"select"})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-category",children:(0,r.jsx)("code",{children:"category"})}),", ",(0,r.jsx)("a",{href:"#parameter-listBy",children:(0,r.jsx)("code",{children:"listBy"})}),", ",(0,r.jsx)("a",{href:"#parameter-maxResults",children:(0,r.jsx)("code",{children:"maxResults"})}),", ",(0,r.jsx)("a",{href:"#parameter-nextToken",children:(0,r.jsx)("code",{children:"nextToken"})}),", ",(0,r.jsx)("a",{href:"#parameter-order",children:(0,r.jsx)("code",{children:"order"})})]}),(0,r.jsx)("td",{children:"Retrieve a JSON array of up to twenty of your job templates. This will return the templates themselves, not just a list of them. To retrieve the next twenty templates, use the nextToken string returned with the array"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#create_job_template",children:(0,r.jsx)(s.A,{code:"create_job_template"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"insert"})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Create a new job template. For information about job templates see the User Guide at http:\u200B//docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#update_job_template",children:(0,r.jsx)(s.A,{code:"update_job_template"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"update"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-name",children:(0,r.jsx)("code",{children:"name"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Modify one of your existing job templates."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#delete_job_template",children:(0,r.jsx)(s.A,{code:"delete_job_template"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"delete"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-name",children:(0,r.jsx)("code",{children:"name"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Permanently delete a job template you have created."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,r.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,r.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{id:"parameter-name",children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"name"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The name of the job template to be deleted."})]}),(0,r.jsxs)("tr",{id:"parameter-region",children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"region"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,r.jsxs)("tr",{id:"parameter-category",children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"category"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Optionally, specify a job template category to limit responses to only job templates from that category."})]}),(0,r.jsxs)("tr",{id:"parameter-listBy",children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"listBy"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name."})]}),(0,r.jsxs)("tr",{id:"parameter-maxResults",children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"maxResults"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer"})}),(0,r.jsx)("td",{children:"Optional. Number of job templates, up to twenty, that will be returned at one time."})]}),(0,r.jsxs)("tr",{id:"parameter-nextToken",children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"nextToken"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Use this string, provided with the response to a previous request, to request the next batch of job templates."})]}),(0,r.jsxs)("tr",{id:"parameter-order",children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.A,{code:"order"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource."})]})]})]}),"\n",(0,r.jsxs)(t.h2,{id:"select-examples",children:[(0,r.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,r.jsxs)(o.A,{defaultValue:"get_job_template",values:[{label:"get_job_template",value:"get_job_template"},{label:"list_job_templates",value:"list_job_templates"}],children:[(0,r.jsxs)(l.A,{value:"get_job_template",children:[(0,r.jsx)(t.p,{children:"Retrieve the JSON for a specific job template."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\nAccelerationSettings,\nArn,\nCategory,\nCreatedAt,\nDescription,\nHopDestinations,\nLastUpdated,\nName,\nPriority,\nQueue,\nSettings,\nStatusUpdateInterval,\nType\nFROM aws.mediaconvert.job_templates\nWHERE name = '{{ name }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,r.jsxs)(l.A,{value:"list_job_templates",children:[(0,r.jsx)(t.p,{children:"Retrieve a JSON array of up to twenty of your job templates. This will return the templates themselves, not just a list of them. To retrieve the next twenty templates, use the nextToken string returned with the array"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\nAccelerationSettings,\nArn,\nCategory,\nCreatedAt,\nDescription,\nHopDestinations,\nLastUpdated,\nName,\nPriority,\nQueue,\nSettings,\nStatusUpdateInterval,\nType\nFROM aws.mediaconvert.job_templates\nWHERE region = '{{ region }}' -- required\nAND category = '{{ category }}'\nAND listBy = '{{ listBy }}'\nAND maxResults = '{{ maxResults }}'\nAND nextToken = '{{ nextToken }}'\nAND order = '{{ order }}'\n;\n"})})]})]}),"\n",(0,r.jsxs)(t.h2,{id:"insert-examples",children:[(0,r.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,r.jsxs)(o.A,{defaultValue:"create_job_template",values:[{label:"create_job_template",value:"create_job_template"},{label:"Manifest",value:"manifest"}],children:[(0,r.jsxs)(l.A,{value:"create_job_template",children:[(0,r.jsxs)(t.p,{children:["Create a new job template. For information about job templates see the User Guide at ",(0,r.jsx)(t.a,{href:"http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html",children:"http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html"})]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.mediaconvert.job_templates (\nAccelerationSettings,\nCategory,\nDescription,\nHopDestinations,\nName,\nPriority,\nQueue,\nSettings,\nStatusUpdateInterval,\nTags,\nregion\n)\nSELECT \n'{{ AccelerationSettings }}',\n'{{ Category }}',\n'{{ Description }}',\n'{{ HopDestinations }}',\n'{{ Name }}',\n{{ Priority }},\n'{{ Queue }}',\n'{{ Settings }}',\n'{{ StatusUpdateInterval }}',\n'{{ Tags }}',\n'{{ region }}'\nRETURNING\nJobTemplate\n;\n"})})]}),(0,r.jsx)(l.A,{value:"manifest",children:(0,r.jsx)(d.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: job_templates
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the job_templates resource.
  - name: AccelerationSettings
    description: |
      Accelerated transcoding can significantly speed up jobs with long, visually complex content.
    value:
      Mode: "{{ Mode }}"
  - name: Category
    value: "{{ Category }}"
  - name: Description
    value: "{{ Description }}"
  - name: HopDestinations
    value:
      - Priority: {{ Priority }}
        Queue: "{{ Queue }}"
        WaitMinutes: {{ WaitMinutes }}
  - name: Name
    value: "{{ Name }}"
  - name: Priority
    value: {{ Priority }}
  - name: Queue
    value: "{{ Queue }}"
  - name: Settings
    description: |
      JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
    value:
      AdAvailOffset: {{ AdAvailOffset }}
      AvailBlanking:
        AvailBlankingImage: "{{ AvailBlankingImage }}"
      ColorConversion3DLUTSettings:
        - FileInput: "{{ FileInput }}"
          InputColorSpace: "{{ InputColorSpace }}"
          InputMasteringLuminance: {{ InputMasteringLuminance }}
          OutputColorSpace: "{{ OutputColorSpace }}"
          OutputMasteringLuminance: {{ OutputMasteringLuminance }}
      Esam:
        ManifestConfirmConditionNotification:
          MccXml: "{{ MccXml }}"
        ResponseSignalPreroll: {{ ResponseSignalPreroll }}
        SignalProcessingNotification:
          SccXml: "{{ SccXml }}"
      ExtendedDataServices:
        CopyProtectionAction: "{{ CopyProtectionAction }}"
        VchipAction: "{{ VchipAction }}"
      FollowSource: {{ FollowSource }}
      Inputs:
        - AdvancedInputFilter: "{{ AdvancedInputFilter }}"
          AdvancedInputFilterSettings:
            AddTexture: "{{ AddTexture }}"
            Sharpening: "{{ Sharpening }}"
          AudioSelectorGroups: "{{ AudioSelectorGroups }}"
          AudioSelectors: "{{ AudioSelectors }}"
          CaptionSelectors: "{{ CaptionSelectors }}"
          Crop:
            Height: {{ Height }}
            Width: {{ Width }}
            X: {{ X }}
            Y: {{ Y }}
          DeblockFilter: "{{ DeblockFilter }}"
          DenoiseFilter: "{{ DenoiseFilter }}"
          DolbyVisionMetadataXml: "{{ DolbyVisionMetadataXml }}"
          DynamicAudioSelectors: "{{ DynamicAudioSelectors }}"
          FilterEnable: "{{ FilterEnable }}"
          FilterStrength: {{ FilterStrength }}
          ImageInserter:
            InsertableImages:
              - Duration: {{ Duration }}
                FadeIn: {{ FadeIn }}
                FadeOut: {{ FadeOut }}
                Height: {{ Height }}
                ImageInserterInput: "{{ ImageInserterInput }}"
                ImageX: {{ ImageX }}
                ImageY: {{ ImageY }}
                Layer: {{ Layer }}
                Opacity: {{ Opacity }}
                StartTime: "{{ StartTime }}"
                Width: {{ Width }}
            SdrReferenceWhiteLevel: {{ SdrReferenceWhiteLevel }}
          InputClippings: "{{ InputClippings }}"
          InputScanType: "{{ InputScanType }}"
          MultiViewSettings: "{{ MultiViewSettings }}"
          Position:
            Height: {{ Height }}
            Width: {{ Width }}
            X: {{ X }}
            Y: {{ Y }}
          ProgramNumber: {{ ProgramNumber }}
          PsiControl: "{{ PsiControl }}"
          TimecodeSource: "{{ TimecodeSource }}"
          TimecodeStart: "{{ TimecodeStart }}"
          VideoOverlays: "{{ VideoOverlays }}"
          VideoSelector:
            AlphaBehavior: "{{ AlphaBehavior }}"
            ColorSpace: "{{ ColorSpace }}"
            ColorSpaceUsage: "{{ ColorSpaceUsage }}"
            EmbeddedTimecodeOverride: "{{ EmbeddedTimecodeOverride }}"
            Hdr10Metadata:
              BluePrimaryX: {{ BluePrimaryX }}
              BluePrimaryY: {{ BluePrimaryY }}
              GreenPrimaryX: {{ GreenPrimaryX }}
              GreenPrimaryY: {{ GreenPrimaryY }}
              MaxContentLightLevel: {{ MaxContentLightLevel }}
              MaxFrameAverageLightLevel: {{ MaxFrameAverageLightLevel }}
              MaxLuminance: {{ MaxLuminance }}
              MinLuminance: {{ MinLuminance }}
              RedPrimaryX: {{ RedPrimaryX }}
              RedPrimaryY: {{ RedPrimaryY }}
              WhitePointX: {{ WhitePointX }}
              WhitePointY: {{ WhitePointY }}
            MaxLuminance: {{ MaxLuminance }}
            PadVideo: "{{ PadVideo }}"
            Pid: {{ Pid }}
            ProgramNumber: {{ ProgramNumber }}
            Rotate: "{{ Rotate }}"
            SampleRange: "{{ SampleRange }}"
            SelectorType: "{{ SelectorType }}"
            Streams:
              - {{ Streams }}
      KantarWatermark:
        ChannelName: "{{ ChannelName }}"
        ContentReference: "{{ ContentReference }}"
        CredentialsSecretName: "{{ CredentialsSecretName }}"
        FileOffset: {{ FileOffset }}
        KantarLicenseId: {{ KantarLicenseId }}
        KantarServerUrl: "{{ KantarServerUrl }}"
        LogDestination: "{{ LogDestination }}"
        Metadata3: "{{ Metadata3 }}"
        Metadata4: "{{ Metadata4 }}"
        Metadata5: "{{ Metadata5 }}"
        Metadata6: "{{ Metadata6 }}"
        Metadata7: "{{ Metadata7 }}"
        Metadata8: "{{ Metadata8 }}"
      MotionImageInserter:
        Framerate:
          FramerateDenominator: {{ FramerateDenominator }}
          FramerateNumerator: {{ FramerateNumerator }}
        Input: "{{ Input }}"
        InsertionMode: "{{ InsertionMode }}"
        Offset:
          ImageX: {{ ImageX }}
          ImageY: {{ ImageY }}
        Playback: "{{ Playback }}"
        StartTime: "{{ StartTime }}"
      NielsenConfiguration:
        BreakoutCode: {{ BreakoutCode }}
        DistributorId: "{{ DistributorId }}"
      NielsenNonLinearWatermark:
        ActiveWatermarkProcess: "{{ ActiveWatermarkProcess }}"
        AdiFilename: "{{ AdiFilename }}"
        AssetId: "{{ AssetId }}"
        AssetName: "{{ AssetName }}"
        CbetSourceId: "{{ CbetSourceId }}"
        EpisodeId: "{{ EpisodeId }}"
        MetadataDestination: "{{ MetadataDestination }}"
        SourceId: {{ SourceId }}
        SourceWatermarkStatus: "{{ SourceWatermarkStatus }}"
        TicServerUrl: "{{ TicServerUrl }}"
        UniqueTicPerAudioTrack: "{{ UniqueTicPerAudioTrack }}"
      OutputGroups:
        - AutomatedEncodingSettings:
            AbrSettings:
              MaxAbrBitrate: {{ MaxAbrBitrate }}
              MaxQualityLevel: {{ MaxQualityLevel }}
              MaxRenditions: {{ MaxRenditions }}
              MinAbrBitrate: {{ MinAbrBitrate }}
              Rules:
                - AllowedRenditions: "{{ AllowedRenditions }}"
                  ForceIncludeRenditions: "{{ ForceIncludeRenditions }}"
                  MinBottomRenditionSize:
                    Height: {{ Height }}
                    Width: {{ Width }}
                  MinTopRenditionSize:
                    Height: {{ Height }}
                    Width: {{ Width }}
                  Type: "{{ Type }}"
          CustomName: "{{ CustomName }}"
          Name: "{{ Name }}"
          OutputGroupSettings:
            CmafGroupSettings:
              AdditionalManifests:
                - ManifestNameModifier: "{{ ManifestNameModifier }}"
                  SelectedOutputs: "{{ SelectedOutputs }}"
              BaseUrl: "{{ BaseUrl }}"
              ClientCache: "{{ ClientCache }}"
              CodecSpecification: "{{ CodecSpecification }}"
              DashIFrameTrickPlayNameModifier: "{{ DashIFrameTrickPlayNameModifier }}"
              DashManifestStyle: "{{ DashManifestStyle }}"
              Destination: "{{ Destination }}"
              DestinationSettings:
                S3Settings: "{{ S3Settings }}"
              Encryption:
                ClearLead: "{{ ClearLead }}"
                ConstantInitializationVector: "{{ ConstantInitializationVector }}"
                EncryptionMethod: "{{ EncryptionMethod }}"
                InitializationVectorInManifest: "{{ InitializationVectorInManifest }}"
                SpekeKeyProvider: "{{ SpekeKeyProvider }}"
                StaticKeyProvider: "{{ StaticKeyProvider }}"
                Type: "{{ Type }}"
              FragmentLength: {{ FragmentLength }}
              ImageBasedTrickPlay: "{{ ImageBasedTrickPlay }}"
              ImageBasedTrickPlaySettings:
                IntervalCadence: "{{ IntervalCadence }}"
                ThumbnailHeight: {{ ThumbnailHeight }}
                ThumbnailInterval: {{ ThumbnailInterval }}
                ThumbnailWidth: {{ ThumbnailWidth }}
                TileHeight: {{ TileHeight }}
                TileWidth: {{ TileWidth }}
              ManifestCompression: "{{ ManifestCompression }}"
              ManifestDurationFormat: "{{ ManifestDurationFormat }}"
              MinBufferTime: {{ MinBufferTime }}
              MinFinalSegmentLength: {{ MinFinalSegmentLength }}
              MpdManifestBandwidthType: "{{ MpdManifestBandwidthType }}"
              MpdProfile: "{{ MpdProfile }}"
              PtsOffsetHandlingForBFrames: "{{ PtsOffsetHandlingForBFrames }}"
              SegmentControl: "{{ SegmentControl }}"
              SegmentLength: {{ SegmentLength }}
              SegmentLengthControl: "{{ SegmentLengthControl }}"
              StreamInfResolution: "{{ StreamInfResolution }}"
              TargetDurationCompatibilityMode: "{{ TargetDurationCompatibilityMode }}"
              VideoCompositionOffsets: "{{ VideoCompositionOffsets }}"
              WriteDashManifest: "{{ WriteDashManifest }}"
              WriteHlsManifest: "{{ WriteHlsManifest }}"
              WriteSegmentTimelineInRepresentation: "{{ WriteSegmentTimelineInRepresentation }}"
            DashIsoGroupSettings:
              AdditionalManifests:
                - ManifestNameModifier: "{{ ManifestNameModifier }}"
                  SelectedOutputs: "{{ SelectedOutputs }}"
              AudioChannelConfigSchemeIdUri: "{{ AudioChannelConfigSchemeIdUri }}"
              BaseUrl: "{{ BaseUrl }}"
              DashIFrameTrickPlayNameModifier: "{{ DashIFrameTrickPlayNameModifier }}"
              DashManifestStyle: "{{ DashManifestStyle }}"
              Destination: "{{ Destination }}"
              DestinationSettings:
                S3Settings: "{{ S3Settings }}"
              Encryption:
                PlaybackDeviceCompatibility: "{{ PlaybackDeviceCompatibility }}"
                SpekeKeyProvider: "{{ SpekeKeyProvider }}"
              FragmentLength: {{ FragmentLength }}
              HbbtvCompliance: "{{ HbbtvCompliance }}"
              ImageBasedTrickPlay: "{{ ImageBasedTrickPlay }}"
              ImageBasedTrickPlaySettings:
                IntervalCadence: "{{ IntervalCadence }}"
                ThumbnailHeight: {{ ThumbnailHeight }}
                ThumbnailInterval: {{ ThumbnailInterval }}
                ThumbnailWidth: {{ ThumbnailWidth }}
                TileHeight: {{ TileHeight }}
                TileWidth: {{ TileWidth }}
              MinBufferTime: {{ MinBufferTime }}
              MinFinalSegmentLength: {{ MinFinalSegmentLength }}
              MpdManifestBandwidthType: "{{ MpdManifestBandwidthType }}"
              MpdProfile: "{{ MpdProfile }}"
              PtsOffsetHandlingForBFrames: "{{ PtsOffsetHandlingForBFrames }}"
              SegmentControl: "{{ SegmentControl }}"
              SegmentLength: {{ SegmentLength }}
              SegmentLengthControl: "{{ SegmentLengthControl }}"
              VideoCompositionOffsets: "{{ VideoCompositionOffsets }}"
              WriteSegmentTimelineInRepresentation: "{{ WriteSegmentTimelineInRepresentation }}"
            FileGroupSettings:
              Destination: "{{ Destination }}"
              DestinationSettings:
                S3Settings: "{{ S3Settings }}"
            HlsGroupSettings:
              AdMarkers:
                - "{{ AdMarkers }}"
              AdditionalManifests:
                - ManifestNameModifier: "{{ ManifestNameModifier }}"
                  SelectedOutputs: "{{ SelectedOutputs }}"
              AudioOnlyHeader: "{{ AudioOnlyHeader }}"
              BaseUrl: "{{ BaseUrl }}"
              CaptionLanguageMappings:
                - CaptionChannel: {{ CaptionChannel }}
                  CustomLanguageCode: "{{ CustomLanguageCode }}"
                  LanguageCode: "{{ LanguageCode }}"
                  LanguageDescription: "{{ LanguageDescription }}"
              CaptionLanguageSetting: "{{ CaptionLanguageSetting }}"
              CaptionSegmentLengthControl: "{{ CaptionSegmentLengthControl }}"
              ClientCache: "{{ ClientCache }}"
              CodecSpecification: "{{ CodecSpecification }}"
              Destination: "{{ Destination }}"
              DestinationSettings:
                S3Settings: "{{ S3Settings }}"
              DirectoryStructure: "{{ DirectoryStructure }}"
              Encryption:
                ConstantInitializationVector: "{{ ConstantInitializationVector }}"
                EncryptionMethod: "{{ EncryptionMethod }}"
                InitializationVectorInManifest: "{{ InitializationVectorInManifest }}"
                OfflineEncrypted: "{{ OfflineEncrypted }}"
                SpekeKeyProvider: "{{ SpekeKeyProvider }}"
                StaticKeyProvider: "{{ StaticKeyProvider }}"
                Type: "{{ Type }}"
              ImageBasedTrickPlay: "{{ ImageBasedTrickPlay }}"
              ImageBasedTrickPlaySettings:
                IntervalCadence: "{{ IntervalCadence }}"
                ThumbnailHeight: {{ ThumbnailHeight }}
                ThumbnailInterval: {{ ThumbnailInterval }}
                ThumbnailWidth: {{ ThumbnailWidth }}
                TileHeight: {{ TileHeight }}
                TileWidth: {{ TileWidth }}
              ManifestCompression: "{{ ManifestCompression }}"
              ManifestDurationFormat: "{{ ManifestDurationFormat }}"
              MinFinalSegmentLength: {{ MinFinalSegmentLength }}
              MinSegmentLength: {{ MinSegmentLength }}
              OutputSelection: "{{ OutputSelection }}"
              ProgramDateTime: "{{ ProgramDateTime }}"
              ProgramDateTimePeriod: {{ ProgramDateTimePeriod }}
              ProgressiveWriteHlsManifest: "{{ ProgressiveWriteHlsManifest }}"
              SegmentControl: "{{ SegmentControl }}"
              SegmentLength: {{ SegmentLength }}
              SegmentLengthControl: "{{ SegmentLengthControl }}"
              SegmentsPerSubdirectory: {{ SegmentsPerSubdirectory }}
              StreamInfResolution: "{{ StreamInfResolution }}"
              TargetDurationCompatibilityMode: "{{ TargetDurationCompatibilityMode }}"
              TimedMetadataId3Frame: "{{ TimedMetadataId3Frame }}"
              TimedMetadataId3Period: {{ TimedMetadataId3Period }}
              TimestampDeltaMilliseconds: {{ TimestampDeltaMilliseconds }}
            MsSmoothGroupSettings:
              AdditionalManifests:
                - ManifestNameModifier: "{{ ManifestNameModifier }}"
                  SelectedOutputs: "{{ SelectedOutputs }}"
              AudioDeduplication: "{{ AudioDeduplication }}"
              Destination: "{{ Destination }}"
              DestinationSettings:
                S3Settings: "{{ S3Settings }}"
              Encryption:
                SpekeKeyProvider: "{{ SpekeKeyProvider }}"
              FragmentLength: {{ FragmentLength }}
              FragmentLengthControl: "{{ FragmentLengthControl }}"
              ManifestEncoding: "{{ ManifestEncoding }}"
            PerFrameMetrics:
              - "{{ PerFrameMetrics }}"
            Type: "{{ Type }}"
          Outputs: "{{ Outputs }}"
      TimecodeConfig:
        Anchor: "{{ Anchor }}"
        Source: "{{ Source }}"
        Start: "{{ Start }}"
        TimestampOffset: "{{ TimestampOffset }}"
      TimedMetadataInsertion:
        Id3Insertions:
          - Id3: "{{ Id3 }}"
            Timecode: "{{ Timecode }}"
  - name: StatusUpdateInterval
    value: "{{ StatusUpdateInterval }}"
    description: |
      Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
    valid_values: ['SECONDS_10', 'SECONDS_12', 'SECONDS_15', 'SECONDS_20', 'SECONDS_30', 'SECONDS_60', 'SECONDS_120', 'SECONDS_180', 'SECONDS_240', 'SECONDS_300', 'SECONDS_360', 'SECONDS_420', 'SECONDS_480', 'SECONDS_540', 'SECONDS_600']
  - name: Tags
    value: "{{ Tags }}"
`})})]}),"\n",(0,r.jsxs)(t.h2,{id:"update-examples",children:[(0,r.jsx)(t.code,{children:"UPDATE"})," examples"]}),"\n",(0,r.jsx)(o.A,{defaultValue:"update_job_template",values:[{label:"update_job_template",value:"update_job_template"}],children:(0,r.jsxs)(l.A,{value:"update_job_template",children:[(0,r.jsx)(t.p,{children:"Modify one of your existing job templates."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.mediaconvert.job_templates\nSET \nAccelerationSettings = '{{ AccelerationSettings }}',\nCategory = '{{ Category }}',\nDescription = '{{ Description }}',\nHopDestinations = '{{ HopDestinations }}',\nPriority = {{ Priority }},\nQueue = '{{ Queue }}',\nSettings = '{{ Settings }}',\nStatusUpdateInterval = '{{ StatusUpdateInterval }}'\nWHERE \nname = '{{ name }}' --required\nAND region = '{{ region }}' --required\nRETURNING\nJobTemplate;\n"})})]})}),"\n",(0,r.jsxs)(t.h2,{id:"delete-examples",children:[(0,r.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,r.jsx)(o.A,{defaultValue:"delete_job_template",values:[{label:"delete_job_template",value:"delete_job_template"}],children:(0,r.jsxs)(l.A,{value:"delete_job_template",children:[(0,r.jsx)(t.p,{children:"Permanently delete a job template you have created."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.mediaconvert.job_templates\nWHERE name = '{{ name }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})})]})}function u(e={}){let{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}}}]);