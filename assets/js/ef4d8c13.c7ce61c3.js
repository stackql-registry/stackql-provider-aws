"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["742146"],{35757(e,i,n){n.r(i),n.d(i,{metadata:()=>a,default:()=>x,frontMatter:()=>c,contentTitle:()=>h,toc:()=>p,assets:()=>m});var a=JSON.parse('{"id":"services/pinpoint/campaigns/index","title":"campaigns","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/pinpoint/campaigns/index.md","sourceDirName":"services/pinpoint/campaigns","slug":"/services/pinpoint/campaigns/","permalink":"/services/pinpoint/campaigns/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"campaigns","hide_title":false,"hide_table_of_contents":false,"keywords":["campaigns","pinpoint","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"campaign_versions","permalink":"/services/pinpoint/campaign_versions/"},"next":{"title":"channels","permalink":"/services/pinpoint/channels/"}}'),t=n(474848),r=n(28453),s=n(97362),d=n(897272),l=n(413554),o=n(541647);let c={title:"campaigns",hide_title:!1,hide_table_of_contents:!1,keywords:["campaigns","pinpoint","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,m={},p=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function g(e){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["Creates, updates, deletes, gets or lists a ",(0,t.jsx)("code",{children:"campaigns"})," resource."]}),"\n",(0,t.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)("table",{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Name"})}),(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"campaigns"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Type"})}),(0,t.jsx)("td",{children:"Resource"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Id"})}),(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"aws.pinpoint.campaigns"})})]})]})}),"\n",(0,t.jsx)(i.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(i.p,{children:["The following fields are returned by ",(0,t.jsx)(i.code,{children:"SELECT"})," queries:"]}),"\n",(0,t.jsxs)(l.A,{defaultValue:"get_campaign",values:[{label:"get_campaign",value:"get_campaign"},{label:"get_campaigns",value:"get_campaigns"}],children:[(0,t.jsx)(o.A,{value:"get_campaign",children:(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Datatype"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"AdditionalTreatments"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"array"})}),(0,t.jsx)("td",{children:"An array of responses, one for each treatment that you defined for the campaign, in addition to the default treatment."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"ApplicationId"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The unique identifier for the application that the campaign applies to."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"Arn"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The Amazon Resource Name (ARN) of the campaign."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"CreationDate"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The date, in ISO 8601 format, when the campaign was created."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"CustomDeliveryConfiguration"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"object"})}),(0,t.jsx)("td",{children:"The delivery configuration settings for sending the campaign through a custom channel."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"DefaultState"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"object"})}),(0,t.jsx)("td",{children:"The current status of the campaign's default treatment. This value exists only for campaigns that have more than one treatment."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"Description"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The custom description of the campaign."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"HoldoutPercent"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"integer"})}),(0,t.jsx)("td",{children:"The allocated percentage of users (segment members) who shouldn't receive messages from the campaign."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"Hook"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"object"})}),(0,t.jsx)("td",{children:"The settings for the AWS Lambda function to use as a code hook for the campaign. You can use this hook to customize the segment that's used by the campaign."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"Id"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The unique identifier for the campaign."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"IsPaused"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"boolean"})}),(0,t.jsx)("td",{children:"Specifies whether the campaign is paused. A paused campaign doesn't run unless you resume it by changing this value to false."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"LastModifiedDate"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The date, in ISO 8601 format, when the campaign was last modified."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"Limits"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"object"})}),(0,t.jsx)("td",{children:"The messaging limits for the campaign."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"MessageConfiguration"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"object"})}),(0,t.jsx)("td",{children:"The message configuration settings for the campaign."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"Name"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The name of the campaign."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"Priority"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"integer"})}),(0,t.jsx)("td",{children:"Defines the priority of the campaign, used to decide the order of messages displayed to user if there are multiple messages scheduled to be displayed at the same moment."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"Schedule"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"object"})}),(0,t.jsx)("td",{children:"The schedule settings for the campaign."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"SegmentId"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The unique identifier for the segment that's associated with the campaign."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"SegmentVersion"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"integer"})}),(0,t.jsx)("td",{children:"The version number of the segment that's associated with the campaign."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"State"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"object"})}),(0,t.jsx)("td",{children:"The current status of the campaign."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"TemplateConfiguration"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"object"})}),(0,t.jsx)("td",{children:"The message template that\u2019s used for the campaign."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"TreatmentDescription"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The custom description of the default treatment for the campaign."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"TreatmentName"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The custom name of the default treatment for the campaign, if the campaign has multiple treatments. A treatment is a variation of a campaign that's used for A/B testing."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"Version"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"integer"})}),(0,t.jsx)("td",{children:"The version number of the campaign."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"tags"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"object"})}),(0,t.jsx)("td",{children:"A string-to-string map of key-value pairs that identifies the tags that are associated with the campaign. Each tag consists of a required tag key and an associated tag value."})]})]})]})}),(0,t.jsx)(o.A,{value:"get_campaigns",children:(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Datatype"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"Item"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"array"})}),(0,t.jsx)("td",{children:"An array of responses, one for each campaign that's associated with the application."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"NextToken"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages."})]})]})]})})]}),"\n",(0,t.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(i.p,{children:"The following methods are available for this resource:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Accessible by"}),(0,t.jsx)("th",{children:"Required Params"}),(0,t.jsx)("th",{children:"Optional Params"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#get_campaign",children:(0,t.jsx)(s.A,{code:"get_campaign"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"select"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-application-id",children:(0,t.jsx)("code",{children:"application-id"})}),", ",(0,t.jsx)("a",{href:"#parameter-campaign-id",children:(0,t.jsx)("code",{children:"campaign-id"})}),", ",(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Retrieves information about the status, configuration, and other settings for a campaign."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#get_campaigns",children:(0,t.jsx)(s.A,{code:"get_campaigns"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"select"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-application-id",children:(0,t.jsx)("code",{children:"application-id"})}),", ",(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})})]}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-page-size",children:(0,t.jsx)("code",{children:"page-size"})}),", ",(0,t.jsx)("a",{href:"#parameter-token",children:(0,t.jsx)("code",{children:"token"})})]}),(0,t.jsx)("td",{children:"Retrieves information about the status, configuration, and other settings for all the campaigns that are associated with an application."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#create_campaign",children:(0,t.jsx)(s.A,{code:"create_campaign"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"insert"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-application-id",children:(0,t.jsx)("code",{children:"application-id"})}),", ",(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})}),", ",(0,t.jsx)("a",{href:"#parameter-WriteCampaignRequest",children:(0,t.jsx)("code",{children:"WriteCampaignRequest"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Creates a new campaign for an application or updates the settings of an existing campaign for an application."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#update_campaign",children:(0,t.jsx)(s.A,{code:"update_campaign"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"update"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-application-id",children:(0,t.jsx)("code",{children:"application-id"})}),", ",(0,t.jsx)("a",{href:"#parameter-campaign-id",children:(0,t.jsx)("code",{children:"campaign-id"})}),", ",(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})}),", ",(0,t.jsx)("a",{href:"#parameter-WriteCampaignRequest",children:(0,t.jsx)("code",{children:"WriteCampaignRequest"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Updates the configuration and other settings for a campaign."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#delete_campaign",children:(0,t.jsx)(s.A,{code:"delete_campaign"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"delete"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-application-id",children:(0,t.jsx)("code",{children:"application-id"})}),", ",(0,t.jsx)("a",{href:"#parameter-campaign-id",children:(0,t.jsx)("code",{children:"campaign-id"})}),", ",(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Deletes a campaign from an application."})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(i.p,{children:["Parameters can be passed in the ",(0,t.jsx)(i.code,{children:"WHERE"})," clause of a query. Check the ",(0,t.jsx)(i.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Datatype"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{id:"parameter-application-id",children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"application-id"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console."})]}),(0,t.jsxs)("tr",{id:"parameter-campaign-id",children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"campaign-id"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The unique identifier for the campaign."})]}),(0,t.jsxs)("tr",{id:"parameter-region",children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"region"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,t.jsxs)("tr",{id:"parameter-page-size",children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"page-size"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics."})]}),(0,t.jsxs)("tr",{id:"parameter-token",children:[(0,t.jsx)("td",{children:(0,t.jsx)(s.A,{code:"token"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The NextToken string that specifies which page of results to return in a paginated response."})]})]})]}),"\n",(0,t.jsxs)(i.h2,{id:"select-examples",children:[(0,t.jsx)(i.code,{children:"SELECT"})," examples"]}),"\n",(0,t.jsxs)(l.A,{defaultValue:"get_campaign",values:[{label:"get_campaign",value:"get_campaign"},{label:"get_campaigns",value:"get_campaigns"}],children:[(0,t.jsxs)(o.A,{value:"get_campaign",children:[(0,t.jsx)(i.p,{children:"Retrieves information about the status, configuration, and other settings for a campaign."}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sql",children:"SELECT\nAdditionalTreatments,\nApplicationId,\nArn,\nCreationDate,\nCustomDeliveryConfiguration,\nDefaultState,\nDescription,\nHoldoutPercent,\nHook,\nId,\nIsPaused,\nLastModifiedDate,\nLimits,\nMessageConfiguration,\nName,\nPriority,\nSchedule,\nSegmentId,\nSegmentVersion,\nState,\nTemplateConfiguration,\nTreatmentDescription,\nTreatmentName,\nVersion,\ntags\nFROM aws.pinpoint.campaigns\nWHERE `application-id` = '{{ application-id }}' -- required\nAND `campaign-id` = '{{ campaign-id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,t.jsxs)(o.A,{value:"get_campaigns",children:[(0,t.jsx)(i.p,{children:"Retrieves information about the status, configuration, and other settings for all the campaigns that are associated with an application."}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sql",children:"SELECT\nItem,\nNextToken\nFROM aws.pinpoint.campaigns\nWHERE `application-id` = '{{ application-id }}' -- required\nAND region = '{{ region }}' -- required\nAND `page-size` = '{{ page-size }}'\nAND token = '{{ token }}'\n;\n"})})]})]}),"\n",(0,t.jsxs)(i.h2,{id:"insert-examples",children:[(0,t.jsx)(i.code,{children:"INSERT"})," examples"]}),"\n",(0,t.jsxs)(l.A,{defaultValue:"create_campaign",values:[{label:"create_campaign",value:"create_campaign"},{label:"Manifest",value:"manifest"}],children:[(0,t.jsxs)(o.A,{value:"create_campaign",children:[(0,t.jsx)(i.p,{children:"Creates a new campaign for an application or updates the settings of an existing campaign for an application."}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sql",children:"INSERT INTO aws.pinpoint.campaigns (\nWriteCampaignRequest,\n`application-id`,\nregion\n)\nSELECT \n'{{ WriteCampaignRequest }}' /* required */,\n'{{ application-id }}',\n'{{ region }}'\nRETURNING\nCampaignResponse\n;\n"})})]}),(0,t.jsx)(o.A,{value:"manifest",children:(0,t.jsx)(d.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: campaigns
props:
  - name: application-id
    value: "{{ application-id }}"
    description: Required parameter for the campaigns resource.
  - name: region
    value: "{{ region }}"
    description: Required parameter for the campaigns resource.
  - name: WriteCampaignRequest
    description: |
      Specifies the configuration and other settings for a campaign.
    value:
      AdditionalTreatments:
        - CustomDeliveryConfiguration:
            DeliveryUri: "{{ DeliveryUri }}"
            EndpointTypes:
              - "{{ EndpointTypes }}"
          MessageConfiguration:
            ADMMessage:
              Action: "{{ Action }}"
              Body: "{{ Body }}"
              ImageIconUrl: "{{ ImageIconUrl }}"
              ImageSmallIconUrl: "{{ ImageSmallIconUrl }}"
              ImageUrl: "{{ ImageUrl }}"
              JsonBody: "{{ JsonBody }}"
              MediaUrl: "{{ MediaUrl }}"
              RawContent: "{{ RawContent }}"
              SilentPush: {{ SilentPush }}
              TimeToLive: {{ TimeToLive }}
              Title: "{{ Title }}"
              Url: "{{ Url }}"
            APNSMessage:
              Action: "{{ Action }}"
              Body: "{{ Body }}"
              ImageIconUrl: "{{ ImageIconUrl }}"
              ImageSmallIconUrl: "{{ ImageSmallIconUrl }}"
              ImageUrl: "{{ ImageUrl }}"
              JsonBody: "{{ JsonBody }}"
              MediaUrl: "{{ MediaUrl }}"
              RawContent: "{{ RawContent }}"
              SilentPush: {{ SilentPush }}
              TimeToLive: {{ TimeToLive }}
              Title: "{{ Title }}"
              Url: "{{ Url }}"
            BaiduMessage:
              Action: "{{ Action }}"
              Body: "{{ Body }}"
              ImageIconUrl: "{{ ImageIconUrl }}"
              ImageSmallIconUrl: "{{ ImageSmallIconUrl }}"
              ImageUrl: "{{ ImageUrl }}"
              JsonBody: "{{ JsonBody }}"
              MediaUrl: "{{ MediaUrl }}"
              RawContent: "{{ RawContent }}"
              SilentPush: {{ SilentPush }}
              TimeToLive: {{ TimeToLive }}
              Title: "{{ Title }}"
              Url: "{{ Url }}"
            CustomMessage:
              Data: "{{ Data }}"
            DefaultMessage:
              Action: "{{ Action }}"
              Body: "{{ Body }}"
              ImageIconUrl: "{{ ImageIconUrl }}"
              ImageSmallIconUrl: "{{ ImageSmallIconUrl }}"
              ImageUrl: "{{ ImageUrl }}"
              JsonBody: "{{ JsonBody }}"
              MediaUrl: "{{ MediaUrl }}"
              RawContent: "{{ RawContent }}"
              SilentPush: {{ SilentPush }}
              TimeToLive: {{ TimeToLive }}
              Title: "{{ Title }}"
              Url: "{{ Url }}"
            EmailMessage:
              Body: "{{ Body }}"
              FromAddress: "{{ FromAddress }}"
              Headers:
                - Name: "{{ Name }}"
                  Value: "{{ Value }}"
              HtmlBody: "{{ HtmlBody }}"
              Title: "{{ Title }}"
            GCMMessage:
              Action: "{{ Action }}"
              Body: "{{ Body }}"
              ImageIconUrl: "{{ ImageIconUrl }}"
              ImageSmallIconUrl: "{{ ImageSmallIconUrl }}"
              ImageUrl: "{{ ImageUrl }}"
              JsonBody: "{{ JsonBody }}"
              MediaUrl: "{{ MediaUrl }}"
              RawContent: "{{ RawContent }}"
              SilentPush: {{ SilentPush }}
              TimeToLive: {{ TimeToLive }}
              Title: "{{ Title }}"
              Url: "{{ Url }}"
            SMSMessage:
              Body: "{{ Body }}"
              MessageType: "{{ MessageType }}"
              OriginationNumber: "{{ OriginationNumber }}"
              SenderId: "{{ SenderId }}"
              EntityId: "{{ EntityId }}"
              TemplateId: "{{ TemplateId }}"
            InAppMessage:
              Body: "{{ Body }}"
              Content:
                - BackgroundColor: "{{ BackgroundColor }}"
                  BodyConfig:
                    Alignment: "{{ Alignment }}"
                    Body: "{{ Body }}"
                    TextColor: "{{ TextColor }}"
                  HeaderConfig:
                    Alignment: "{{ Alignment }}"
                    Header: "{{ Header }}"
                    TextColor: "{{ TextColor }}"
                  ImageUrl: "{{ ImageUrl }}"
                  PrimaryBtn:
                    Android: "{{ Android }}"
                    DefaultConfig: "{{ DefaultConfig }}"
                    IOS: "{{ IOS }}"
                    Web: "{{ Web }}"
                  SecondaryBtn:
                    Android: "{{ Android }}"
                    DefaultConfig: "{{ DefaultConfig }}"
                    IOS: "{{ IOS }}"
                    Web: "{{ Web }}"
              CustomConfig: "{{ CustomConfig }}"
              Layout: "{{ Layout }}"
          Schedule:
            EndTime: "{{ EndTime }}"
            EventFilter:
              Dimensions:
                Attributes: "{{ Attributes }}"
                EventType: "{{ EventType }}"
                Metrics: "{{ Metrics }}"
              FilterType: "{{ FilterType }}"
            Frequency: "{{ Frequency }}"
            IsLocalTime: {{ IsLocalTime }}
            QuietTime:
              End: "{{ End }}"
              Start: "{{ Start }}"
            StartTime: "{{ StartTime }}"
            Timezone: "{{ Timezone }}"
          SizePercent: {{ SizePercent }}
          TemplateConfiguration:
            EmailTemplate:
              Name: "{{ Name }}"
              Version: "{{ Version }}"
            PushTemplate:
              Name: "{{ Name }}"
              Version: "{{ Version }}"
            SMSTemplate:
              Name: "{{ Name }}"
              Version: "{{ Version }}"
            VoiceTemplate:
              Name: "{{ Name }}"
              Version: "{{ Version }}"
            InAppTemplate:
              Name: "{{ Name }}"
              Version: "{{ Version }}"
          TreatmentDescription: "{{ TreatmentDescription }}"
          TreatmentName: "{{ TreatmentName }}"
      CustomDeliveryConfiguration:
        DeliveryUri: "{{ DeliveryUri }}"
        EndpointTypes:
          - "{{ EndpointTypes }}"
      Description: "{{ Description }}"
      HoldoutPercent: {{ HoldoutPercent }}
      Hook:
        LambdaFunctionName: "{{ LambdaFunctionName }}"
        Mode: "{{ Mode }}"
        WebUrl: "{{ WebUrl }}"
      IsPaused: {{ IsPaused }}
      Limits:
        Daily: {{ Daily }}
        MaximumDuration: {{ MaximumDuration }}
        MessagesPerSecond: {{ MessagesPerSecond }}
        Total: {{ Total }}
        Session: {{ Session }}
      MessageConfiguration:
        ADMMessage:
          Action: "{{ Action }}"
          Body: "{{ Body }}"
          ImageIconUrl: "{{ ImageIconUrl }}"
          ImageSmallIconUrl: "{{ ImageSmallIconUrl }}"
          ImageUrl: "{{ ImageUrl }}"
          JsonBody: "{{ JsonBody }}"
          MediaUrl: "{{ MediaUrl }}"
          RawContent: "{{ RawContent }}"
          SilentPush: {{ SilentPush }}
          TimeToLive: {{ TimeToLive }}
          Title: "{{ Title }}"
          Url: "{{ Url }}"
        APNSMessage:
          Action: "{{ Action }}"
          Body: "{{ Body }}"
          ImageIconUrl: "{{ ImageIconUrl }}"
          ImageSmallIconUrl: "{{ ImageSmallIconUrl }}"
          ImageUrl: "{{ ImageUrl }}"
          JsonBody: "{{ JsonBody }}"
          MediaUrl: "{{ MediaUrl }}"
          RawContent: "{{ RawContent }}"
          SilentPush: {{ SilentPush }}
          TimeToLive: {{ TimeToLive }}
          Title: "{{ Title }}"
          Url: "{{ Url }}"
        BaiduMessage:
          Action: "{{ Action }}"
          Body: "{{ Body }}"
          ImageIconUrl: "{{ ImageIconUrl }}"
          ImageSmallIconUrl: "{{ ImageSmallIconUrl }}"
          ImageUrl: "{{ ImageUrl }}"
          JsonBody: "{{ JsonBody }}"
          MediaUrl: "{{ MediaUrl }}"
          RawContent: "{{ RawContent }}"
          SilentPush: {{ SilentPush }}
          TimeToLive: {{ TimeToLive }}
          Title: "{{ Title }}"
          Url: "{{ Url }}"
        CustomMessage:
          Data: "{{ Data }}"
        DefaultMessage:
          Action: "{{ Action }}"
          Body: "{{ Body }}"
          ImageIconUrl: "{{ ImageIconUrl }}"
          ImageSmallIconUrl: "{{ ImageSmallIconUrl }}"
          ImageUrl: "{{ ImageUrl }}"
          JsonBody: "{{ JsonBody }}"
          MediaUrl: "{{ MediaUrl }}"
          RawContent: "{{ RawContent }}"
          SilentPush: {{ SilentPush }}
          TimeToLive: {{ TimeToLive }}
          Title: "{{ Title }}"
          Url: "{{ Url }}"
        EmailMessage:
          Body: "{{ Body }}"
          FromAddress: "{{ FromAddress }}"
          Headers:
            - Name: "{{ Name }}"
              Value: "{{ Value }}"
          HtmlBody: "{{ HtmlBody }}"
          Title: "{{ Title }}"
        GCMMessage:
          Action: "{{ Action }}"
          Body: "{{ Body }}"
          ImageIconUrl: "{{ ImageIconUrl }}"
          ImageSmallIconUrl: "{{ ImageSmallIconUrl }}"
          ImageUrl: "{{ ImageUrl }}"
          JsonBody: "{{ JsonBody }}"
          MediaUrl: "{{ MediaUrl }}"
          RawContent: "{{ RawContent }}"
          SilentPush: {{ SilentPush }}
          TimeToLive: {{ TimeToLive }}
          Title: "{{ Title }}"
          Url: "{{ Url }}"
        SMSMessage:
          Body: "{{ Body }}"
          MessageType: "{{ MessageType }}"
          OriginationNumber: "{{ OriginationNumber }}"
          SenderId: "{{ SenderId }}"
          EntityId: "{{ EntityId }}"
          TemplateId: "{{ TemplateId }}"
        InAppMessage:
          Body: "{{ Body }}"
          Content:
            - BackgroundColor: "{{ BackgroundColor }}"
              BodyConfig:
                Alignment: "{{ Alignment }}"
                Body: "{{ Body }}"
                TextColor: "{{ TextColor }}"
              HeaderConfig:
                Alignment: "{{ Alignment }}"
                Header: "{{ Header }}"
                TextColor: "{{ TextColor }}"
              ImageUrl: "{{ ImageUrl }}"
              PrimaryBtn:
                Android: "{{ Android }}"
                DefaultConfig: "{{ DefaultConfig }}"
                IOS: "{{ IOS }}"
                Web: "{{ Web }}"
              SecondaryBtn:
                Android: "{{ Android }}"
                DefaultConfig: "{{ DefaultConfig }}"
                IOS: "{{ IOS }}"
                Web: "{{ Web }}"
          CustomConfig: "{{ CustomConfig }}"
          Layout: "{{ Layout }}"
      Name: "{{ Name }}"
      Schedule:
        EndTime: "{{ EndTime }}"
        EventFilter:
          Dimensions:
            Attributes: "{{ Attributes }}"
            EventType:
              DimensionType: "{{ DimensionType }}"
              Values: "{{ Values }}"
            Metrics: "{{ Metrics }}"
          FilterType: "{{ FilterType }}"
        Frequency: "{{ Frequency }}"
        IsLocalTime: {{ IsLocalTime }}
        QuietTime:
          End: "{{ End }}"
          Start: "{{ Start }}"
        StartTime: "{{ StartTime }}"
        Timezone: "{{ Timezone }}"
      SegmentId: "{{ SegmentId }}"
      SegmentVersion: {{ SegmentVersion }}
      tags: "{{ tags }}"
      TemplateConfiguration:
        EmailTemplate:
          Name: "{{ Name }}"
          Version: "{{ Version }}"
        PushTemplate:
          Name: "{{ Name }}"
          Version: "{{ Version }}"
        SMSTemplate:
          Name: "{{ Name }}"
          Version: "{{ Version }}"
        VoiceTemplate:
          Name: "{{ Name }}"
          Version: "{{ Version }}"
        InAppTemplate:
          Name: "{{ Name }}"
          Version: "{{ Version }}"
      TreatmentDescription: "{{ TreatmentDescription }}"
      TreatmentName: "{{ TreatmentName }}"
      Priority: {{ Priority }}
`})})]}),"\n",(0,t.jsxs)(i.h2,{id:"update-examples",children:[(0,t.jsx)(i.code,{children:"UPDATE"})," examples"]}),"\n",(0,t.jsx)(l.A,{defaultValue:"update_campaign",values:[{label:"update_campaign",value:"update_campaign"}],children:(0,t.jsxs)(o.A,{value:"update_campaign",children:[(0,t.jsx)(i.p,{children:"Updates the configuration and other settings for a campaign."}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sql",children:"UPDATE aws.pinpoint.campaigns\nSET \nWriteCampaignRequest = '{{ WriteCampaignRequest }}'\nWHERE \n`application-id` = '{{ application-id }}' --required\nAND `campaign-id` = '{{ campaign-id }}' --required\nAND region = '{{ region }}' --required\nAND WriteCampaignRequest = '{{ WriteCampaignRequest }}' --required\nRETURNING\nCampaignResponse;\n"})})]})}),"\n",(0,t.jsxs)(i.h2,{id:"delete-examples",children:[(0,t.jsx)(i.code,{children:"DELETE"})," examples"]}),"\n",(0,t.jsx)(l.A,{defaultValue:"delete_campaign",values:[{label:"delete_campaign",value:"delete_campaign"}],children:(0,t.jsxs)(o.A,{value:"delete_campaign",children:[(0,t.jsx)(i.p,{children:"Deletes a campaign from an application."}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sql",children:"DELETE FROM aws.pinpoint.campaigns\nWHERE `application-id` = '{{ application-id }}' --required\nAND `campaign-id` = '{{ campaign-id }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})})]})}function x(e={}){let{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}}}]);