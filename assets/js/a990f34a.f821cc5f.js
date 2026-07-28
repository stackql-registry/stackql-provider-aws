"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["258651"],{359890(e,i,r){r.r(i),r.d(i,{metadata:()=>s,default:()=>u,frontMatter:()=>o,contentTitle:()=>h,toc:()=>p,assets:()=>x});var s=JSON.parse('{"id":"services/devops_agent/services/index","title":"services","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/devops_agent/services/index.md","sourceDirName":"services/devops_agent/services","slug":"/services/devops_agent/services/","permalink":"/services/devops_agent/services/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"services","hide_title":false,"hide_table_of_contents":false,"keywords":["services","devops_agent","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"recommendations","permalink":"/services/devops_agent/recommendations/"},"next":{"title":"tags","permalink":"/services/devops_agent/tags/"}}'),n=r(474848),t=r(28453),c=r(97362),a=r(897272),d=r(413554),l=r(541647);let o={title:"services",hide_title:!1,hide_table_of_contents:!1,keywords:["services","devops_agent","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,x={},p=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function j(e){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["Creates, updates, deletes, gets or lists a ",(0,n.jsx)("code",{children:"services"})," resource."]}),"\n",(0,n.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"services"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Type"})}),(0,n.jsx)("td",{children:"Resource"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Id"})}),(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"aws.devops_agent.services"})})]})]})}),"\n",(0,n.jsx)(i.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(i.p,{children:["The following fields are returned by ",(0,n.jsx)(i.code,{children:"SELECT"})," queries:"]}),"\n",(0,n.jsxs)(d.A,{defaultValue:"get_service",values:[{label:"get_service",value:"get_service"},{label:"list_services",value:"list_services"}],children:[(0,n.jsx)(l.A,{value:"get_service",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"service"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Represents a registered service with its configuration and accessible resources."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"tags"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Tags associated with the Service."})]})]})]})}),(0,n.jsx)(l.A,{value:"list_services",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"name"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The display name of the registered service. (pattern: <code>[\\p{L}\\p{N}\\p{P}\\p{S}\\p{Z}]+</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"accessibleResources"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"array"})}),(0,n.jsx)("td",{children:"List of accessible resources for this service."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"additionalServiceDetails"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Additional details specific to the service type."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"kmsKeyArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The ARN of the AWS Key Management Service (AWS KMS) customer managed key that's used to encrypt resources. (pattern: <code>arn",":aws","[a-zA-Z-]*:kms:[a-z0-9-]+:[0-9]{12}",":key","/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"privateConnectionName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"Unique name for a Private Connection within an account. (pattern: <code>[a-z0-9]([a-z0-9-]*[a-z0-9])?</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"serviceId"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"Unique identifier for a registered service (pattern: <code>[a-zA-Z0-9_-]+</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"serviceType"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The service type e.g github or dynatrace (github, slack, azure, azuredevops, dynatrace, servicenow, pagerduty, gitlab, eventChannel, mcpservernewrelic, mcpservergrafana, mcpserverdatadog, mcpserver, mcpserversplunk, azureidentity)"})]})]})]})})]}),"\n",(0,n.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(i.p,{children:"The following methods are available for this resource:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Accessible by"}),(0,n.jsx)("th",{children:"Required Params"}),(0,n.jsx)("th",{children:"Optional Params"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#get_service",children:(0,n.jsx)(c.A,{code:"get_service"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"select"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-service_id",children:(0,n.jsx)("code",{children:"service_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Retrieves given service by it's unique identifier"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#list_services",children:(0,n.jsx)(c.A,{code:"list_services"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"select"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-maxResults",children:(0,n.jsx)("code",{children:"maxResults"})}),", ",(0,n.jsx)("a",{href:"#parameter-nextToken",children:(0,n.jsx)("code",{children:"nextToken"})}),", ",(0,n.jsx)("a",{href:"#parameter-filterServiceType",children:(0,n.jsx)("code",{children:"filterServiceType"})})]}),(0,n.jsx)("td",{children:"List a list of registered service on the account level."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#register_service",children:(0,n.jsx)(c.A,{code:"register_service"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"insert"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-service",children:(0,n.jsx)("code",{children:"service"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-serviceDetails",children:(0,n.jsx)("code",{children:"serviceDetails"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"This operation registers the specified service"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#associate_service",children:(0,n.jsx)(c.A,{code:"associate_service"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"update"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-agent_space_id",children:(0,n.jsx)("code",{children:"agent_space_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-serviceId",children:(0,n.jsx)("code",{children:"serviceId"})}),", ",(0,n.jsx)("a",{href:"#parameter-configuration",children:(0,n.jsx)("code",{children:"configuration"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Adds a specific service association to an AgentSpace. It overwrites the existing association of the same service. Returns 201 Created on success."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#disassociate_service",children:(0,n.jsx)(c.A,{code:"disassociate_service"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"update"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-agent_space_id",children:(0,n.jsx)("code",{children:"agent_space_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-association_id",children:(0,n.jsx)("code",{children:"association_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Deletes a specific service association from an AgentSpace. This operation is idempotent and returns a 204 No Content response on success."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#deregister_service",children:(0,n.jsx)(c.A,{code:"deregister_service"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"delete"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-service_id",children:(0,n.jsx)("code",{children:"service_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Deregister a service"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.p,{children:["Parameters can be passed in the ",(0,n.jsx)(i.code,{children:"WHERE"})," clause of a query. Check the ",(0,n.jsx)(i.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{id:"parameter-agent_space_id",children:[(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"agent_space_id"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The unique identifier of the AgentSpace"})]}),(0,n.jsxs)("tr",{id:"parameter-association_id",children:[(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"association_id"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The unique identifier of the given association."})]}),(0,n.jsxs)("tr",{id:"parameter-region",children:[(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"region"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,n.jsxs)("tr",{id:"parameter-service",children:[(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"service"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{id:"parameter-service_id",children:[(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"service_id"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The service id to deregister. A service can only be deregistered if it is not associated with any AgentSpace."})]}),(0,n.jsxs)("tr",{id:"parameter-filterServiceType",children:[(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"filterServiceType"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"Optional filter to list only services of a specific type."})]}),(0,n.jsxs)("tr",{id:"parameter-maxResults",children:[(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"maxResults"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"integer"})}),(0,n.jsx)("td",{children:"Maximum number of results to return in a single call."})]}),(0,n.jsxs)("tr",{id:"parameter-nextToken",children:[(0,n.jsx)("td",{children:(0,n.jsx)(c.A,{code:"nextToken"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"Token for the next page of results."})]})]})]}),"\n",(0,n.jsxs)(i.h2,{id:"select-examples",children:[(0,n.jsx)(i.code,{children:"SELECT"})," examples"]}),"\n",(0,n.jsxs)(d.A,{defaultValue:"get_service",values:[{label:"get_service",value:"get_service"},{label:"list_services",value:"list_services"}],children:[(0,n.jsxs)(l.A,{value:"get_service",children:[(0,n.jsx)(i.p,{children:"Retrieves given service by it's unique identifier"}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-sql",children:"SELECT\nservice,\ntags\nFROM aws.devops_agent.services\nWHERE service_id = '{{ service_id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,n.jsxs)(l.A,{value:"list_services",children:[(0,n.jsx)(i.p,{children:"List a list of registered service on the account level."}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-sql",children:"SELECT\nname,\naccessibleResources,\nadditionalServiceDetails,\nkmsKeyArn,\nprivateConnectionName,\nserviceId,\nserviceType\nFROM aws.devops_agent.services\nWHERE region = '{{ region }}' -- required\nAND maxResults = '{{ maxResults }}'\nAND nextToken = '{{ nextToken }}'\nAND filterServiceType = '{{ filterServiceType }}'\n;\n"})})]})]}),"\n",(0,n.jsxs)(i.h2,{id:"insert-examples",children:[(0,n.jsx)(i.code,{children:"INSERT"})," examples"]}),"\n",(0,n.jsxs)(d.A,{defaultValue:"register_service",values:[{label:"register_service",value:"register_service"},{label:"Manifest",value:"manifest"}],children:[(0,n.jsxs)(l.A,{value:"register_service",children:[(0,n.jsx)(i.p,{children:"This operation registers the specified service"}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-sql",children:"INSERT INTO aws.devops_agent.services (\nserviceDetails,\nkmsKeyArn,\nprivateConnectionName,\nname,\ntags,\nservice,\nregion\n)\nSELECT \n'{{ serviceDetails }}' /* required */,\n'{{ kmsKeyArn }}',\n'{{ privateConnectionName }}',\n'{{ name }}',\n'{{ tags }}',\n'{{ service }}',\n'{{ region }}'\nRETURNING\nadditionalStep,\nkmsKeyArn,\nserviceId,\ntags\n;\n"})})]}),(0,n.jsx)(l.A,{value:"manifest",children:(0,n.jsx)(a.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: services
props:
  - name: service
    value: "{{ service }}"
    description: Required parameter for the services resource.
  - name: region
    value: "{{ region }}"
    description: Required parameter for the services resource.
  - name: serviceDetails
    description: |
      Union of service-specific configuration details for service registration.
    value:
      dynatrace:
        accountUrn: "{{ accountUrn }}"
        authorizationConfig:
          oAuthClientCredentials:
            clientName: "{{ clientName }}"
            clientId: "{{ clientId }}"
            exchangeParameters: "{{ exchangeParameters }}"
            clientSecret: "{{ clientSecret }}"
      servicenow:
        instanceUrl: "{{ instanceUrl }}"
        authorizationConfig:
          oAuthClientCredentials:
            clientName: "{{ clientName }}"
            clientId: "{{ clientId }}"
            exchangeParameters: "{{ exchangeParameters }}"
            clientSecret: "{{ clientSecret }}"
      mcpserverdatadog:
        name: "{{ name }}"
        endpoint: "{{ endpoint }}"
        description: "{{ description }}"
        authorizationConfig:
          authorizationDiscovery:
            returnToEndpoint: "{{ returnToEndpoint }}"
      mcpserver:
        name: "{{ name }}"
        endpoint: "{{ endpoint }}"
        description: "{{ description }}"
        authorizationConfig:
          oAuthClientCredentials:
            clientName: "{{ clientName }}"
            clientId: "{{ clientId }}"
            exchangeParameters: "{{ exchangeParameters }}"
            clientSecret: "{{ clientSecret }}"
            exchangeUrl: "{{ exchangeUrl }}"
            scopes:
              - "{{ scopes }}"
          oAuth3LO:
            clientName: "{{ clientName }}"
            clientId: "{{ clientId }}"
            exchangeParameters: "{{ exchangeParameters }}"
            returnToEndpoint: "{{ returnToEndpoint }}"
            authorizationUrl: "{{ authorizationUrl }}"
            exchangeUrl: "{{ exchangeUrl }}"
            clientSecret: "{{ clientSecret }}"
            supportCodeChallenge: {{ supportCodeChallenge }}
            scopes:
              - "{{ scopes }}"
          apiKey:
            apiKeyName: "{{ apiKeyName }}"
            apiKeyValue: "{{ apiKeyValue }}"
            apiKeyHeader: "{{ apiKeyHeader }}"
          bearerToken:
            tokenName: "{{ tokenName }}"
            tokenValue: "{{ tokenValue }}"
            authorizationHeader: "{{ authorizationHeader }}"
          authorizationDiscovery:
            returnToEndpoint: "{{ returnToEndpoint }}"
      gitlab:
        targetUrl: "{{ targetUrl }}"
        tokenType: "{{ tokenType }}"
        tokenValue: "{{ tokenValue }}"
        groupId: "{{ groupId }}"
      mcpserversplunk:
        name: "{{ name }}"
        endpoint: "{{ endpoint }}"
        description: "{{ description }}"
        authorizationConfig:
          oAuthClientCredentials:
            clientName: "{{ clientName }}"
            clientId: "{{ clientId }}"
            exchangeParameters: "{{ exchangeParameters }}"
            clientSecret: "{{ clientSecret }}"
            exchangeUrl: "{{ exchangeUrl }}"
            scopes:
              - "{{ scopes }}"
          oAuth3LO:
            clientName: "{{ clientName }}"
            clientId: "{{ clientId }}"
            exchangeParameters: "{{ exchangeParameters }}"
            returnToEndpoint: "{{ returnToEndpoint }}"
            authorizationUrl: "{{ authorizationUrl }}"
            exchangeUrl: "{{ exchangeUrl }}"
            clientSecret: "{{ clientSecret }}"
            supportCodeChallenge: {{ supportCodeChallenge }}
            scopes:
              - "{{ scopes }}"
          apiKey:
            apiKeyName: "{{ apiKeyName }}"
            apiKeyValue: "{{ apiKeyValue }}"
            apiKeyHeader: "{{ apiKeyHeader }}"
          bearerToken:
            tokenName: "{{ tokenName }}"
            tokenValue: "{{ tokenValue }}"
            authorizationHeader: "{{ authorizationHeader }}"
          authorizationDiscovery:
            returnToEndpoint: "{{ returnToEndpoint }}"
      mcpservernewrelic:
        authorizationConfig:
          apiKey:
            apiKey: "{{ apiKey }}"
            accountId: "{{ accountId }}"
            region: "{{ region }}"
            applicationIds:
              - "{{ applicationIds }}"
            entityGuids:
              - "{{ entityGuids }}"
            alertPolicyIds:
              - "{{ alertPolicyIds }}"
      eventChannel:
        type_: "{{ type_ }}"
      mcpservergrafana:
        name: "{{ name }}"
        endpoint: "{{ endpoint }}"
        description: "{{ description }}"
        authorizationConfig:
          oAuthClientCredentials:
            clientName: "{{ clientName }}"
            clientId: "{{ clientId }}"
            exchangeParameters: "{{ exchangeParameters }}"
            clientSecret: "{{ clientSecret }}"
            exchangeUrl: "{{ exchangeUrl }}"
            scopes:
              - "{{ scopes }}"
          oAuth3LO:
            clientName: "{{ clientName }}"
            clientId: "{{ clientId }}"
            exchangeParameters: "{{ exchangeParameters }}"
            returnToEndpoint: "{{ returnToEndpoint }}"
            authorizationUrl: "{{ authorizationUrl }}"
            exchangeUrl: "{{ exchangeUrl }}"
            clientSecret: "{{ clientSecret }}"
            supportCodeChallenge: {{ supportCodeChallenge }}
            scopes:
              - "{{ scopes }}"
          apiKey:
            apiKeyName: "{{ apiKeyName }}"
            apiKeyValue: "{{ apiKeyValue }}"
            apiKeyHeader: "{{ apiKeyHeader }}"
          bearerToken:
            tokenName: "{{ tokenName }}"
            tokenValue: "{{ tokenValue }}"
            authorizationHeader: "{{ authorizationHeader }}"
          authorizationDiscovery:
            returnToEndpoint: "{{ returnToEndpoint }}"
      pagerduty:
        scopes:
          - "{{ scopes }}"
        authorizationConfig:
          oAuthClientCredentials:
            clientName: "{{ clientName }}"
            clientId: "{{ clientId }}"
            exchangeParameters: "{{ exchangeParameters }}"
            clientSecret: "{{ clientSecret }}"
      azureidentity:
        tenantId: "{{ tenantId }}"
        clientId: "{{ clientId }}"
        webIdentityRoleArn: "{{ webIdentityRoleArn }}"
        webIdentityTokenAudiences:
          - "{{ webIdentityTokenAudiences }}"
  - name: kmsKeyArn
    value: "{{ kmsKeyArn }}"
    description: |
      The ARN of the AWS Key Management Service (AWS KMS) customer managed key that's used to encrypt resources.
  - name: privateConnectionName
    value: "{{ privateConnectionName }}"
    description: |
      Unique name for a Private Connection within an account.
  - name: name
    value: "{{ name }}"
    description: |
      The display name for a registered service.
  - name: tags
    value: "{{ tags }}"
    description: |
      Map of tag keys to values.
`})})]}),"\n",(0,n.jsxs)(i.h2,{id:"update-examples",children:[(0,n.jsx)(i.code,{children:"UPDATE"})," examples"]}),"\n",(0,n.jsxs)(d.A,{defaultValue:"associate_service",values:[{label:"associate_service",value:"associate_service"},{label:"disassociate_service",value:"disassociate_service"}],children:[(0,n.jsxs)(l.A,{value:"associate_service",children:[(0,n.jsx)(i.p,{children:"Adds a specific service association to an AgentSpace. It overwrites the existing association of the same service. Returns 201 Created on success."}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-sql",children:"UPDATE aws.devops_agent.services\nSET \nserviceId = '{{ serviceId }}',\nconfiguration = '{{ configuration }}'\nWHERE \nagent_space_id = '{{ agent_space_id }}' --required\nAND region = '{{ region }}' --required\nAND serviceId = '{{ serviceId }}' --required\nAND configuration = '{{ configuration }}' --required\nRETURNING\nassociation,\nwebhook;\n"})})]}),(0,n.jsxs)(l.A,{value:"disassociate_service",children:[(0,n.jsx)(i.p,{children:"Deletes a specific service association from an AgentSpace. This operation is idempotent and returns a 204 No Content response on success."}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-sql",children:"UPDATE aws.devops_agent.services\nSET \n-- No updatable properties\nWHERE \nagent_space_id = '{{ agent_space_id }}' --required\nAND association_id = '{{ association_id }}' --required\nAND region = '{{ region }}' --required;\n"})})]})]}),"\n",(0,n.jsxs)(i.h2,{id:"delete-examples",children:[(0,n.jsx)(i.code,{children:"DELETE"})," examples"]}),"\n",(0,n.jsx)(d.A,{defaultValue:"deregister_service",values:[{label:"deregister_service",value:"deregister_service"}],children:(0,n.jsxs)(l.A,{value:"deregister_service",children:[(0,n.jsx)(i.p,{children:"Deregister a service"}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-sql",children:"DELETE FROM aws.devops_agent.services\nWHERE service_id = '{{ service_id }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})})]})}function u(e={}){let{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}}}]);