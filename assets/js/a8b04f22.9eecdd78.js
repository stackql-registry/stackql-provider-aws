"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["790333"],{234151(e,r,n){n.r(r),n.d(r,{metadata:()=>s,default:()=>p,frontMatter:()=>l,contentTitle:()=>m,toc:()=>x,assets:()=>h});var s=JSON.parse('{"id":"services/bedrock_agentcore_control/memories/index","title":"memories","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/bedrock_agentcore_control/memories/index.md","sourceDirName":"services/bedrock_agentcore_control/memories","slug":"/services/bedrock_agentcore_control/memories/","permalink":"/services/bedrock_agentcore_control/memories/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"memories","hide_title":false,"hide_table_of_contents":false,"keywords":["memories","bedrock_agentcore_control","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"harnesses","permalink":"/services/bedrock_agentcore_control/harnesses/"},"next":{"title":"oauth2_credential_providers","permalink":"/services/bedrock_agentcore_control/oauth2_credential_providers/"}}'),d=n(474848),t=n(28453),i=n(97362),o=n(897272),a=n(413554),c=n(541647);let l={title:"memories",hide_title:!1,hide_table_of_contents:!1,keywords:["memories","bedrock_agentcore_control","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},m,h={},x=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function j(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.p,{children:["Creates, updates, deletes, gets or lists a ",(0,d.jsx)("code",{children:"memories"})," resource."]}),"\n",(0,d.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,d.jsx)("table",{children:(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"Name"})}),(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"memories"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"Type"})}),(0,d.jsx)("td",{children:"Resource"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"Id"})}),(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"aws.bedrock_agentcore_control.memories"})})]})]})}),"\n",(0,d.jsx)(r.h2,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(r.p,{children:["The following fields are returned by ",(0,d.jsx)(r.code,{children:"SELECT"})," queries:"]}),"\n",(0,d.jsxs)(a.A,{defaultValue:"get_memory",values:[{label:"get_memory",value:"get_memory"},{label:"list_memories",value:"list_memories"}],children:[(0,d.jsx)(c.A,{value:"get_memory",children:(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Datatype"}),(0,d.jsx)("th",{children:"Description"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"id"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The unique identifier of the memory. (pattern: <code>[a-zA-Z][a-zA-Z0-9-_]{0,99}-[a-zA-Z0-9]{10}</code>)"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"name"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The name of the memory. (pattern: <code>[a-zA-Z][a-zA-Z0-9_]{0,47}</code>)"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"arn"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the memory. (pattern: <code>arn:aws:bedrock-agentcore:[a-z0-9-]+:[0-9]{12}",":memory","/[a-zA-Z][a-zA-Z0-9-_]{0,99}-[a-zA-Z0-9]{10}</code>)"]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"createdAt"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string (date-time)"})}),(0,d.jsx)("td",{children:"The timestamp when the memory was created."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"description"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The description of the memory."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"encryptionKeyArn"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The ARN of the KMS key used to encrypt the memory. (pattern: <code>arn:[a-z0-9-.]{1,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[^/].{0,1023}</code>)"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"eventExpiryDuration"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"integer"})}),(0,d.jsx)("td",{children:"The number of days after which memory events will expire."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"failureReason"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The reason for failure if the memory is in a failed state."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"indexedKeys"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"array"})}),(0,d.jsx)("td",{children:"The indexed metadata keys for this memory. Only indexed keys can be used in metadata filters."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"memoryExecutionRoleArn"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The ARN of the IAM role that provides permissions for the memory. (pattern: <code>arn:[a-z0-9-.]{1,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[^/].{0,1023}</code>)"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"status"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The current status of the memory. (CREATING, ACTIVE, FAILED, DELETING)"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"strategies"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"array"})}),(0,d.jsx)("td",{children:"The list of memory strategies associated with this memory."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"streamDeliveryResources"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"object"})}),(0,d.jsx)("td",{children:"Configuration for streaming memory record data to external resources."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"updatedAt"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string (date-time)"})}),(0,d.jsx)("td",{children:"The timestamp when the memory was last updated."})]})]})]})}),(0,d.jsx)(c.A,{value:"list_memories",children:(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Datatype"}),(0,d.jsx)("th",{children:"Description"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"id"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The unique identifier of the memory. (pattern: <code>[a-zA-Z][a-zA-Z0-9-_]{0,99}-[a-zA-Z0-9]{10}</code>)"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"arn"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the memory. (pattern: <code>arn:aws:bedrock-agentcore:[a-z0-9-]+:[0-9]{12}",":memory","/[a-zA-Z][a-zA-Z0-9-_]{0,99}-[a-zA-Z0-9]{10}</code>)"]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"createdAt"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string (date-time)"})}),(0,d.jsx)("td",{children:"The timestamp when the memory was created."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"status"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The current status of the memory. (CREATING, ACTIVE, FAILED, DELETING)"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"updatedAt"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string (date-time)"})}),(0,d.jsx)("td",{children:"The timestamp when the memory was last updated."})]})]})]})})]}),"\n",(0,d.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(r.p,{children:"The following methods are available for this resource:"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Accessible by"}),(0,d.jsx)("th",{children:"Required Params"}),(0,d.jsx)("th",{children:"Optional Params"}),(0,d.jsx)("th",{children:"Description"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("a",{href:"#get_memory",children:(0,d.jsx)(i.A,{code:"get_memory"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"select"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("a",{href:"#parameter-memory_id",children:(0,d.jsx)("code",{children:"memory_id"})}),", ",(0,d.jsx)("a",{href:"#parameter-region",children:(0,d.jsx)("code",{children:"region"})})]}),(0,d.jsx)("td",{children:(0,d.jsx)("a",{href:"#parameter-view",children:(0,d.jsx)("code",{children:"view"})})}),(0,d.jsx)("td",{children:"Retrieve an existing Amazon Bedrock AgentCore Memory resource."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("a",{href:"#list_memories",children:(0,d.jsx)(i.A,{code:"list_memories"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"select"})}),(0,d.jsx)("td",{children:(0,d.jsx)("a",{href:"#parameter-region",children:(0,d.jsx)("code",{children:"region"})})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:"Lists the available Amazon Bedrock AgentCore Memory resources in the current Amazon Web Services Region."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("a",{href:"#create_memory",children:(0,d.jsx)(i.A,{code:"create_memory"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"insert"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("a",{href:"#parameter-region",children:(0,d.jsx)("code",{children:"region"})}),", ",(0,d.jsx)("a",{href:"#parameter-name",children:(0,d.jsx)("code",{children:"name"})}),", ",(0,d.jsx)("a",{href:"#parameter-eventExpiryDuration",children:(0,d.jsx)("code",{children:"eventExpiryDuration"})})]}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:"Creates a new Amazon Bedrock AgentCore Memory resource."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("a",{href:"#update_memory",children:(0,d.jsx)(i.A,{code:"update_memory"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"update"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("a",{href:"#parameter-memory_id",children:(0,d.jsx)("code",{children:"memory_id"})}),", ",(0,d.jsx)("a",{href:"#parameter-region",children:(0,d.jsx)("code",{children:"region"})})]}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:"Update an Amazon Bedrock AgentCore Memory resource memory."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("a",{href:"#delete_memory",children:(0,d.jsx)(i.A,{code:"delete_memory"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"delete"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("a",{href:"#parameter-memory_id",children:(0,d.jsx)("code",{children:"memory_id"})}),", ",(0,d.jsx)("a",{href:"#parameter-region",children:(0,d.jsx)("code",{children:"region"})})]}),(0,d.jsx)("td",{children:(0,d.jsx)("a",{href:"#parameter-clientToken",children:(0,d.jsx)("code",{children:"clientToken"})})}),(0,d.jsx)("td",{children:"Deletes an Amazon Bedrock AgentCore Memory resource."})]})]})]}),"\n",(0,d.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(r.p,{children:["Parameters can be passed in the ",(0,d.jsx)(r.code,{children:"WHERE"})," clause of a query. Check the ",(0,d.jsx)(r.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Datatype"}),(0,d.jsx)("th",{children:"Description"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{id:"parameter-memory_id",children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"memory_id"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The unique identifier of the memory to delete."})]}),(0,d.jsxs)("tr",{id:"parameter-region",children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"region"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,d.jsxs)("tr",{id:"parameter-clientToken",children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"clientToken"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"A client token is used for keeping track of idempotent requests. It can contain a session id which can be around 250 chars, combined with a unique AWS identifier."})]}),(0,d.jsxs)("tr",{id:"parameter-view",children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"view"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The level of detail to return for the memory."})]})]})]}),"\n",(0,d.jsxs)(r.h2,{id:"select-examples",children:[(0,d.jsx)(r.code,{children:"SELECT"})," examples"]}),"\n",(0,d.jsxs)(a.A,{defaultValue:"get_memory",values:[{label:"get_memory",value:"get_memory"},{label:"list_memories",value:"list_memories"}],children:[(0,d.jsxs)(c.A,{value:"get_memory",children:[(0,d.jsx)(r.p,{children:"Retrieve an existing Amazon Bedrock AgentCore Memory resource."}),(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT\nid,\nname,\narn,\ncreatedAt,\ndescription,\nencryptionKeyArn,\neventExpiryDuration,\nfailureReason,\nindexedKeys,\nmemoryExecutionRoleArn,\nstatus,\nstrategies,\nstreamDeliveryResources,\nupdatedAt\nFROM aws.bedrock_agentcore_control.memories\nWHERE memory_id = '{{ memory_id }}' -- required\nAND region = '{{ region }}' -- required\nAND view = '{{ view }}'\n;\n"})})]}),(0,d.jsxs)(c.A,{value:"list_memories",children:[(0,d.jsx)(r.p,{children:"Lists the available Amazon Bedrock AgentCore Memory resources in the current Amazon Web Services Region."}),(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"SELECT\nid,\narn,\ncreatedAt,\nstatus,\nupdatedAt\nFROM aws.bedrock_agentcore_control.memories\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,d.jsxs)(r.h2,{id:"insert-examples",children:[(0,d.jsx)(r.code,{children:"INSERT"})," examples"]}),"\n",(0,d.jsxs)(a.A,{defaultValue:"create_memory",values:[{label:"create_memory",value:"create_memory"},{label:"Manifest",value:"manifest"}],children:[(0,d.jsxs)(c.A,{value:"create_memory",children:[(0,d.jsx)(r.p,{children:"Creates a new Amazon Bedrock AgentCore Memory resource."}),(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"INSERT INTO aws.bedrock_agentcore_control.memories (\nclientToken,\nname,\ndescription,\nencryptionKeyArn,\nmemoryExecutionRoleArn,\neventExpiryDuration,\nmemoryStrategies,\nindexedKeys,\nstreamDeliveryResources,\ntags,\nregion\n)\nSELECT \n'{{ clientToken }}',\n'{{ name }}' /* required */,\n'{{ description }}',\n'{{ encryptionKeyArn }}',\n'{{ memoryExecutionRoleArn }}',\n{{ eventExpiryDuration }} /* required */,\n'{{ memoryStrategies }}',\n'{{ indexedKeys }}',\n'{{ streamDeliveryResources }}',\n'{{ tags }}',\n'{{ region }}'\nRETURNING\nmemory\n;\n"})})]}),(0,d.jsx)(c.A,{value:"manifest",children:(0,d.jsx)(o.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: memories
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the memories resource.
  - name: clientToken
    value: "{{ clientToken }}"
  - name: name
    value: "{{ name }}"
  - name: description
    value: "{{ description }}"
  - name: encryptionKeyArn
    value: "{{ encryptionKeyArn }}"
  - name: memoryExecutionRoleArn
    value: "{{ memoryExecutionRoleArn }}"
  - name: eventExpiryDuration
    value: {{ eventExpiryDuration }}
  - name: memoryStrategies
    value:
      - semanticMemoryStrategy:
          name: "{{ name }}"
          description: "{{ description }}"
          namespaces:
            - "{{ namespaces }}"
          namespaceTemplates:
            - "{{ namespaceTemplates }}"
          memoryRecordSchema:
            metadataSchema:
              - key: "{{ key }}"
                type_: "{{ type_ }}"
                extractionConfig:
                  llmExtractionConfig: "{{ llmExtractionConfig }}"
        summaryMemoryStrategy:
          name: "{{ name }}"
          description: "{{ description }}"
          namespaces:
            - "{{ namespaces }}"
          namespaceTemplates:
            - "{{ namespaceTemplates }}"
          memoryRecordSchema:
            metadataSchema:
              - key: "{{ key }}"
                type_: "{{ type_ }}"
                extractionConfig:
                  llmExtractionConfig: "{{ llmExtractionConfig }}"
        userPreferenceMemoryStrategy:
          name: "{{ name }}"
          description: "{{ description }}"
          namespaces:
            - "{{ namespaces }}"
          namespaceTemplates:
            - "{{ namespaceTemplates }}"
          memoryRecordSchema:
            metadataSchema:
              - key: "{{ key }}"
                type_: "{{ type_ }}"
                extractionConfig:
                  llmExtractionConfig: "{{ llmExtractionConfig }}"
        customMemoryStrategy:
          name: "{{ name }}"
          description: "{{ description }}"
          namespaces:
            - "{{ namespaces }}"
          namespaceTemplates:
            - "{{ namespaceTemplates }}"
          configuration:
            semanticOverride:
              extraction:
                appendToPrompt: "{{ appendToPrompt }}"
                modelId: "{{ modelId }}"
              consolidation:
                appendToPrompt: "{{ appendToPrompt }}"
                modelId: "{{ modelId }}"
            summaryOverride:
              consolidation:
                appendToPrompt: "{{ appendToPrompt }}"
                modelId: "{{ modelId }}"
            userPreferenceOverride:
              extraction:
                appendToPrompt: "{{ appendToPrompt }}"
                modelId: "{{ modelId }}"
              consolidation:
                appendToPrompt: "{{ appendToPrompt }}"
                modelId: "{{ modelId }}"
            episodicOverride:
              extraction:
                appendToPrompt: "{{ appendToPrompt }}"
                modelId: "{{ modelId }}"
              consolidation:
                appendToPrompt: "{{ appendToPrompt }}"
                modelId: "{{ modelId }}"
              reflection:
                appendToPrompt: "{{ appendToPrompt }}"
                modelId: "{{ modelId }}"
                namespaces: "{{ namespaces }}"
                namespaceTemplates: "{{ namespaceTemplates }}"
                memoryRecordSchema: "{{ memoryRecordSchema }}"
            selfManagedConfiguration:
              triggerConditions:
                - messageBasedTrigger:
                    messageCount: {{ messageCount }}
                  tokenBasedTrigger:
                    tokenCount: {{ tokenCount }}
                  timeBasedTrigger:
                    idleSessionTimeout: {{ idleSessionTimeout }}
              invocationConfiguration:
                topicArn: "{{ topicArn }}"
                payloadDeliveryBucketName: "{{ payloadDeliveryBucketName }}"
              historicalContextWindowSize: {{ historicalContextWindowSize }}
          memoryRecordSchema:
            metadataSchema:
              - key: "{{ key }}"
                type_: "{{ type_ }}"
                extractionConfig:
                  llmExtractionConfig: "{{ llmExtractionConfig }}"
        episodicMemoryStrategy:
          name: "{{ name }}"
          description: "{{ description }}"
          namespaces:
            - "{{ namespaces }}"
          namespaceTemplates:
            - "{{ namespaceTemplates }}"
          reflectionConfiguration:
            namespaces:
              - "{{ namespaces }}"
            namespaceTemplates:
              - "{{ namespaceTemplates }}"
            memoryRecordSchema:
              metadataSchema:
                - key: "{{ key }}"
                  type_: "{{ type_ }}"
                  extractionConfig:
                    llmExtractionConfig: "{{ llmExtractionConfig }}"
          memoryRecordSchema:
            metadataSchema:
              - key: "{{ key }}"
                type_: "{{ type_ }}"
                extractionConfig:
                  llmExtractionConfig: "{{ llmExtractionConfig }}"
  - name: indexedKeys
    value:
      - key: "{{ key }}"
        type_: "{{ type_ }}"
  - name: streamDeliveryResources
    description: |
      Configuration for streaming memory record data to external resources.
    value:
      resources:
        - kinesis:
            dataStreamArn: "{{ dataStreamArn }}"
            contentConfigurations:
              - type_: "{{ type_ }}"
                level: "{{ level }}"
  - name: tags
    value: "{{ tags }}"
`})})]}),"\n",(0,d.jsxs)(r.h2,{id:"update-examples",children:[(0,d.jsx)(r.code,{children:"UPDATE"})," examples"]}),"\n",(0,d.jsx)(a.A,{defaultValue:"update_memory",values:[{label:"update_memory",value:"update_memory"}],children:(0,d.jsxs)(c.A,{value:"update_memory",children:[(0,d.jsx)(r.p,{children:"Update an Amazon Bedrock AgentCore Memory resource memory."}),(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"UPDATE aws.bedrock_agentcore_control.memories\nSET \nclientToken = '{{ clientToken }}',\ndescription = '{{ description }}',\neventExpiryDuration = {{ eventExpiryDuration }},\nmemoryExecutionRoleArn = '{{ memoryExecutionRoleArn }}',\nmemoryStrategies = '{{ memoryStrategies }}',\naddIndexedKeys = '{{ addIndexedKeys }}',\nstreamDeliveryResources = '{{ streamDeliveryResources }}'\nWHERE \nmemory_id = '{{ memory_id }}' --required\nAND region = '{{ region }}' --required\nRETURNING\nmemory;\n"})})]})}),"\n",(0,d.jsxs)(r.h2,{id:"delete-examples",children:[(0,d.jsx)(r.code,{children:"DELETE"})," examples"]}),"\n",(0,d.jsx)(a.A,{defaultValue:"delete_memory",values:[{label:"delete_memory",value:"delete_memory"}],children:(0,d.jsxs)(c.A,{value:"delete_memory",children:[(0,d.jsx)(r.p,{children:"Deletes an Amazon Bedrock AgentCore Memory resource."}),(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-sql",children:"DELETE FROM aws.bedrock_agentcore_control.memories\nWHERE memory_id = '{{ memory_id }}' --required\nAND region = '{{ region }}' --required\nAND clientToken = '{{ clientToken }}'\n;\n"})})]})})]})}function p(e={}){let{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}}}]);