"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["403160"],{399767(e,n,r){r.r(n),r.d(n,{metadata:()=>s,default:()=>j,frontMatter:()=>l,contentTitle:()=>h,toc:()=>u,assets:()=>x});var s=JSON.parse('{"id":"services/bedrock_agentcore_control/harness/index","title":"harness","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/bedrock_agentcore_control/harness/index.md","sourceDirName":"services/bedrock_agentcore_control/harness","slug":"/services/bedrock_agentcore_control/harness/","permalink":"/services/bedrock_agentcore_control/harness/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"harness","hide_title":false,"hide_table_of_contents":false,"keywords":["harness","bedrock_agentcore_control","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"gateways","permalink":"/services/bedrock_agentcore_control/gateways/"},"next":{"title":"harnesses","permalink":"/services/bedrock_agentcore_control/harnesses/"}}'),t=r(474848),i=r(28453),a=r(97362),d=r(897272),o=r(413554),c=r(541647);let l={title:"harness",hide_title:!1,hide_table_of_contents:!1,keywords:["harness","bedrock_agentcore_control","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,x={},u=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function m(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Creates, updates, deletes, gets or lists a ",(0,t.jsx)("code",{children:"harness"})," resource."]}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)("table",{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Name"})}),(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"harness"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Type"})}),(0,t.jsx)("td",{children:"Resource"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Id"})}),(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"aws.bedrock_agentcore_control.harness"})})]})]})}),"\n",(0,t.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.p,{children:["The following fields are returned by ",(0,t.jsx)(n.code,{children:"SELECT"})," queries:"]}),"\n",(0,t.jsx)(o.A,{defaultValue:"get_harness",values:[{label:"get_harness",value:"get_harness"}],children:(0,t.jsx)(c.A,{value:"get_harness",children:(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Datatype"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"allowedTools"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"array"})}),(0,t.jsx)("td",{children:"The allowed tools of the Harness. All tools are allowed by default."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"arn"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsxs)("td",{children:["The ARN of the Harness. (pattern: <code>arn:([^:]+)?:bedrock-agentcore:[a-z0-9-]+:[0-9]{12}",":harness","/[a-zA-Z][a-zA-Z0-9_]{0,39}-[a-zA-Z0-9]{10}</code>)"]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"authorizerConfiguration"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"object"})}),(0,t.jsx)("td",{children:"Represents inbound authorization configuration options used to authenticate incoming requests."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"createdAt"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string (date-time)"})}),(0,t.jsx)("td",{children:"The createdAt time of the Harness."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"environment"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"object"})}),(0,t.jsx)("td",{children:"The compute environment on which the Harness runs."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"environmentArtifact"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"object"})}),(0,t.jsx)("td",{children:"The environment artifact for a harness, such as a container image containing custom dependencies."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"environmentVariables"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"object"})}),(0,t.jsx)("td",{children:"Environment variables exposed in the environment in which the Harness operates."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"executionRoleArn"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsxs)("td",{children:["IAM role the Harness assumes when running. (pattern: <code>arn",":aws","(-[^:]+)?:iam::([0-9]{12})?",":role","/.+</code>)"]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"failureReason"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"Reason why create or update operations fail."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"harnessId"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The ID of the Harness. (pattern: <code>[a-zA-Z][a-zA-Z0-9_]{0,39}-[a-zA-Z0-9]{10}</code>)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"harnessName"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The name of the Harness. (pattern: <code>[a-zA-Z][a-zA-Z0-9_]{0,39}</code>)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"maxIterations"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"integer"})}),(0,t.jsx)("td",{children:"The maximum number of iterations in the agent loop allowed before exiting per invocation."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"maxTokens"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"integer"})}),(0,t.jsx)("td",{children:"The maximum total number of output tokens the agent can generate across all model calls within a single invocation."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"memory"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"object"})}),(0,t.jsx)("td",{children:"The memory configuration for a harness."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"model"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"object"})}),(0,t.jsx)("td",{children:"Specification of which model to use."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"skills"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"array"})}),(0,t.jsx)("td",{children:"The skills of the Harness."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"status"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The status of the Harness. (CREATING, CREATE_FAILED, UPDATING, UPDATE_FAILED, READY, DELETING, DELETE_FAILED)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"systemPrompt"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"array"})}),(0,t.jsx)("td",{children:"The system prompt of the Harness."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"timeoutSeconds"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"integer"})}),(0,t.jsx)("td",{children:"The maximum duration per invocation."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"tools"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"array"})}),(0,t.jsx)("td",{children:"The tools of the Harness."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"truncation"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"object"})}),(0,t.jsx)("td",{children:"Configuration for truncating conversation context when it exceeds model limits."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"updatedAt"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string (date-time)"})}),(0,t.jsx)("td",{children:"The updatedAt time of the Harness."})]})]})]})})}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.p,{children:"The following methods are available for this resource:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Accessible by"}),(0,t.jsx)("th",{children:"Required Params"}),(0,t.jsx)("th",{children:"Optional Params"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#get_harness",children:(0,t.jsx)(a.A,{code:"get_harness"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"select"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-harness_id",children:(0,t.jsx)("code",{children:"harness_id"})}),", ",(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Operation to get a single Harness."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#create_harness",children:(0,t.jsx)(a.A,{code:"create_harness"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"insert"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})}),", ",(0,t.jsx)("a",{href:"#parameter-harnessName",children:(0,t.jsx)("code",{children:"harnessName"})}),", ",(0,t.jsx)("a",{href:"#parameter-executionRoleArn",children:(0,t.jsx)("code",{children:"executionRoleArn"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Operation to create a Harness."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#update_harness",children:(0,t.jsx)(a.A,{code:"update_harness"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"update"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-harness_id",children:(0,t.jsx)("code",{children:"harness_id"})}),", ",(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Operation to update a Harness."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#delete_harness",children:(0,t.jsx)(a.A,{code:"delete_harness"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"delete"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-harness_id",children:(0,t.jsx)("code",{children:"harness_id"})}),", ",(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})})]}),(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#parameter-clientToken",children:(0,t.jsx)("code",{children:"clientToken"})})}),(0,t.jsx)("td",{children:"Operation to delete a Harness."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["Parameters can be passed in the ",(0,t.jsx)(n.code,{children:"WHERE"})," clause of a query. Check the ",(0,t.jsx)(n.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Datatype"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{id:"parameter-harness_id",children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"harness_id"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The ID of the harness to delete."})]}),(0,t.jsxs)("tr",{id:"parameter-region",children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"region"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,t.jsxs)("tr",{id:"parameter-clientToken",children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"clientToken"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"A unique, case-sensitive identifier to ensure idempotency of the request."})]})]})]}),"\n",(0,t.jsxs)(n.h2,{id:"select-examples",children:[(0,t.jsx)(n.code,{children:"SELECT"})," examples"]}),"\n",(0,t.jsx)(o.A,{defaultValue:"get_harness",values:[{label:"get_harness",value:"get_harness"}],children:(0,t.jsxs)(c.A,{value:"get_harness",children:[(0,t.jsx)(n.p,{children:"Operation to get a single Harness."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT\nallowedTools,\narn,\nauthorizerConfiguration,\ncreatedAt,\nenvironment,\nenvironmentArtifact,\nenvironmentVariables,\nexecutionRoleArn,\nfailureReason,\nharnessId,\nharnessName,\nmaxIterations,\nmaxTokens,\nmemory,\nmodel,\nskills,\nstatus,\nsystemPrompt,\ntimeoutSeconds,\ntools,\ntruncation,\nupdatedAt\nFROM aws.bedrock_agentcore_control.harness\nWHERE harness_id = '{{ harness_id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]})}),"\n",(0,t.jsxs)(n.h2,{id:"insert-examples",children:[(0,t.jsx)(n.code,{children:"INSERT"})," examples"]}),"\n",(0,t.jsxs)(o.A,{defaultValue:"create_harness",values:[{label:"create_harness",value:"create_harness"},{label:"Manifest",value:"manifest"}],children:[(0,t.jsxs)(c.A,{value:"create_harness",children:[(0,t.jsx)(n.p,{children:"Operation to create a Harness."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO aws.bedrock_agentcore_control.harness (\nharnessName,\nclientToken,\nexecutionRoleArn,\nenvironment,\nenvironmentArtifact,\nenvironmentVariables,\nauthorizerConfiguration,\nmodel,\nsystemPrompt,\ntools,\nskills,\nallowedTools,\nmemory,\ntruncation,\nmaxIterations,\nmaxTokens,\ntimeoutSeconds,\ntags,\nregion\n)\nSELECT \n'{{ harnessName }}' /* required */,\n'{{ clientToken }}',\n'{{ executionRoleArn }}' /* required */,\n'{{ environment }}',\n'{{ environmentArtifact }}',\n'{{ environmentVariables }}',\n'{{ authorizerConfiguration }}',\n'{{ model }}',\n'{{ systemPrompt }}',\n'{{ tools }}',\n'{{ skills }}',\n'{{ allowedTools }}',\n'{{ memory }}',\n'{{ truncation }}',\n{{ maxIterations }},\n{{ maxTokens }},\n{{ timeoutSeconds }},\n'{{ tags }}',\n'{{ region }}'\nRETURNING\nharness\n;\n"})})]}),(0,t.jsx)(c.A,{value:"manifest",children:(0,t.jsx)(d.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: harness
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the harness resource.
  - name: harnessName
    value: "{{ harnessName }}"
  - name: clientToken
    value: "{{ clientToken }}"
  - name: executionRoleArn
    value: "{{ executionRoleArn }}"
  - name: environment
    description: |
      The environment provider request configuration.
    value:
      agentCoreRuntimeEnvironment:
        lifecycleConfiguration:
          idleRuntimeSessionTimeout: {{ idleRuntimeSessionTimeout }}
          maxLifetime: {{ maxLifetime }}
        networkConfiguration:
          networkMode: "{{ networkMode }}"
          networkModeConfig:
            securityGroups:
              - "{{ securityGroups }}"
            subnets:
              - "{{ subnets }}"
            requireServiceS3Endpoint: {{ requireServiceS3Endpoint }}
        filesystemConfigurations:
          - sessionStorage:
              mountPath: "{{ mountPath }}"
            s3FilesAccessPoint:
              accessPointArn: "{{ accessPointArn }}"
              mountPath: "{{ mountPath }}"
            efsAccessPoint:
              accessPointArn: "{{ accessPointArn }}"
              mountPath: "{{ mountPath }}"
  - name: environmentArtifact
    description: |
      The environment artifact for a harness, such as a container image containing custom dependencies.
    value:
      containerConfiguration:
        containerUri: "{{ containerUri }}"
  - name: environmentVariables
    value: "{{ environmentVariables }}"
  - name: authorizerConfiguration
    description: |
      Represents inbound authorization configuration options used to authenticate incoming requests.
    value:
      customJWTAuthorizer:
        discoveryUrl: "{{ discoveryUrl }}"
        allowedAudience:
          - "{{ allowedAudience }}"
        allowedClients:
          - "{{ allowedClients }}"
        allowedScopes:
          - "{{ allowedScopes }}"
        customClaims:
          - inboundTokenClaimName: "{{ inboundTokenClaimName }}"
            inboundTokenClaimValueType: "{{ inboundTokenClaimValueType }}"
            authorizingClaimMatchValue:
              claimMatchValue:
                matchValueString: "{{ matchValueString }}"
                matchValueStringList: "{{ matchValueStringList }}"
              claimMatchOperator: "{{ claimMatchOperator }}"
        privateEndpoint:
          selfManagedLatticeResource:
            resourceConfigurationIdentifier: "{{ resourceConfigurationIdentifier }}"
          managedVpcResource:
            vpcIdentifier: "{{ vpcIdentifier }}"
            subnetIds:
              - "{{ subnetIds }}"
            endpointIpAddressType: "{{ endpointIpAddressType }}"
            securityGroupIds:
              - "{{ securityGroupIds }}"
            tags: "{{ tags }}"
            routingDomain: "{{ routingDomain }}"
        privateEndpointOverrides:
          - domain: "{{ domain }}"
            privateEndpoint:
              selfManagedLatticeResource:
                resourceConfigurationIdentifier: "{{ resourceConfigurationIdentifier }}"
              managedVpcResource:
                vpcIdentifier: "{{ vpcIdentifier }}"
                subnetIds: "{{ subnetIds }}"
                endpointIpAddressType: "{{ endpointIpAddressType }}"
                securityGroupIds: "{{ securityGroupIds }}"
                tags: "{{ tags }}"
                routingDomain: "{{ routingDomain }}"
  - name: model
    description: |
      Specification of which model to use.
    value:
      bedrockModelConfig:
        modelId: "{{ modelId }}"
        maxTokens: {{ maxTokens }}
        temperature: {{ temperature }}
        topP: {{ topP }}
      openAiModelConfig:
        modelId: "{{ modelId }}"
        apiKeyArn: "{{ apiKeyArn }}"
        maxTokens: {{ maxTokens }}
        temperature: {{ temperature }}
        topP: {{ topP }}
      geminiModelConfig:
        modelId: "{{ modelId }}"
        apiKeyArn: "{{ apiKeyArn }}"
        maxTokens: {{ maxTokens }}
        temperature: {{ temperature }}
        topP: {{ topP }}
        topK: {{ topK }}
  - name: systemPrompt
    value:
      - text: "{{ text }}"
  - name: tools
    value:
      - type_: "{{ type_ }}"
        name: "{{ name }}"
        config:
          remoteMcp:
            url: "{{ url }}"
            headers: "{{ headers }}"
          agentCoreBrowser:
            browserArn: "{{ browserArn }}"
          agentCoreGateway:
            gatewayArn: "{{ gatewayArn }}"
            outboundAuth:
              awsIam: "{{ awsIam }}"
              none: "{{ none }}"
              oauth:
                providerArn: "{{ providerArn }}"
                scopes: "{{ scopes }}"
                customParameters: "{{ customParameters }}"
                grantType: "{{ grantType }}"
                defaultReturnUrl: "{{ defaultReturnUrl }}"
          inlineFunction:
            description: "{{ description }}"
            inputSchema: "{{ inputSchema }}"
          agentCoreCodeInterpreter:
            codeInterpreterArn: "{{ codeInterpreterArn }}"
  - name: skills
    value:
      - path: "{{ path }}"
  - name: allowedTools
    value:
      - "{{ allowedTools }}"
  - name: memory
    description: |
      The memory configuration for a harness.
    value:
      agentCoreMemoryConfiguration:
        arn: "{{ arn }}"
        actorId: "{{ actorId }}"
        messagesCount: {{ messagesCount }}
        retrievalConfig: "{{ retrievalConfig }}"
  - name: truncation
    description: |
      Configuration for truncating conversation context when it exceeds model limits.
    value:
      strategy: "{{ strategy }}"
      config:
        slidingWindow:
          messagesCount: {{ messagesCount }}
        summarization:
          summaryRatio: {{ summaryRatio }}
          preserveRecentMessages: {{ preserveRecentMessages }}
          summarizationSystemPrompt: "{{ summarizationSystemPrompt }}"
  - name: maxIterations
    value: {{ maxIterations }}
  - name: maxTokens
    value: {{ maxTokens }}
  - name: timeoutSeconds
    value: {{ timeoutSeconds }}
  - name: tags
    value: "{{ tags }}"
`})})]}),"\n",(0,t.jsxs)(n.h2,{id:"update-examples",children:[(0,t.jsx)(n.code,{children:"UPDATE"})," examples"]}),"\n",(0,t.jsx)(o.A,{defaultValue:"update_harness",values:[{label:"update_harness",value:"update_harness"}],children:(0,t.jsxs)(c.A,{value:"update_harness",children:[(0,t.jsx)(n.p,{children:"Operation to update a Harness."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"UPDATE aws.bedrock_agentcore_control.harness\nSET \nclientToken = '{{ clientToken }}',\nexecutionRoleArn = '{{ executionRoleArn }}',\nenvironment = '{{ environment }}',\nenvironmentArtifact = '{{ environmentArtifact }}',\nenvironmentVariables = '{{ environmentVariables }}',\nauthorizerConfiguration = '{{ authorizerConfiguration }}',\nmodel = '{{ model }}',\nsystemPrompt = '{{ systemPrompt }}',\ntools = '{{ tools }}',\nskills = '{{ skills }}',\nallowedTools = '{{ allowedTools }}',\nmemory = '{{ memory }}',\ntruncation = '{{ truncation }}',\nmaxIterations = {{ maxIterations }},\nmaxTokens = {{ maxTokens }},\ntimeoutSeconds = {{ timeoutSeconds }}\nWHERE \nharness_id = '{{ harness_id }}' --required\nAND region = '{{ region }}' --required\nRETURNING\nharness;\n"})})]})}),"\n",(0,t.jsxs)(n.h2,{id:"delete-examples",children:[(0,t.jsx)(n.code,{children:"DELETE"})," examples"]}),"\n",(0,t.jsx)(o.A,{defaultValue:"delete_harness",values:[{label:"delete_harness",value:"delete_harness"}],children:(0,t.jsxs)(c.A,{value:"delete_harness",children:[(0,t.jsx)(n.p,{children:"Operation to delete a Harness."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DELETE FROM aws.bedrock_agentcore_control.harness\nWHERE harness_id = '{{ harness_id }}' --required\nAND region = '{{ region }}' --required\nAND clientToken = '{{ clientToken }}'\n;\n"})})]})})]})}function j(e={}){let{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}}}]);