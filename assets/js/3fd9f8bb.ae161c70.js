"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["650388"],{670600(e,r,n){n.r(r),n.d(r,{metadata:()=>t,default:()=>g,frontMatter:()=>l,contentTitle:()=>h,toc:()=>x,assets:()=>u});var t=JSON.parse('{"id":"services/bedrock_agent/data_sources/index","title":"data_sources","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/bedrock_agent/data_sources/index.md","sourceDirName":"services/bedrock_agent/data_sources","slug":"/services/bedrock_agent/data_sources/","permalink":"/services/bedrock_agent/data_sources/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"data_sources","hide_title":false,"hide_table_of_contents":false,"keywords":["data_sources","bedrock_agent","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"agents","permalink":"/services/bedrock_agent/agents/"},"next":{"title":"flow_alias","permalink":"/services/bedrock_agent/flow_alias/"}}'),a=n(474848),d=n(28453),s=n(97362),i=n(897272),o=n(413554),c=n(541647);let l={title:"data_sources",hide_title:!1,hide_table_of_contents:!1,keywords:["data_sources","bedrock_agent","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},x=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function j(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["Creates, updates, deletes, gets or lists a ",(0,a.jsx)("code",{children:"data_sources"})," resource."]}),"\n",(0,a.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)("table",{children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Name"})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"data_sources"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Type"})}),(0,a.jsx)("td",{children:"Resource"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Id"})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"aws.bedrock_agent.data_sources"})})]})]})}),"\n",(0,a.jsx)(r.h2,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(r.p,{children:["The following fields are returned by ",(0,a.jsx)(r.code,{children:"SELECT"})," queries:"]}),"\n",(0,a.jsxs)(o.A,{defaultValue:"get_data_source",values:[{label:"get_data_source",value:"get_data_source"},{label:"list_data_sources",value:"list_data_sources"}],children:[(0,a.jsx)(c.A,{value:"get_data_source",children:(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"name"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The name of the data source. (pattern: <code>([0-9a-zA-Z][_-]?){1,100}</code>)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"createdAt"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string (date-time)"})}),(0,a.jsx)("td",{children:"The time at which the data source was created."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"dataDeletionPolicy"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The data deletion policy for the data source. (RETAIN, DELETE)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"dataSourceConfiguration"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The connection configuration for the data source."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"dataSourceId"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The unique identifier of the data source. (pattern: <code>[0-9a-zA-Z]{10}</code>)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"description"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The description of the data source."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"failureReasons"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"array"})}),(0,a.jsx)("td",{children:"The detailed reasons on the failure to delete a data source."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"knowledgeBaseId"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The unique identifier of the knowledge base to which the data source belongs. (pattern: <code>[0-9a-zA-Z]{10}</code>)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"serverSideEncryptionConfiguration"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Contains the configuration for server-side encryption."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"status"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The status of the data source. The following statuses are possible: Available \u2013 The data source has been created and is ready for ingestion into the knowledge base. Deleting \u2013 The data source is being deleted. (AVAILABLE, DELETING, DELETE_UNSUCCESSFUL)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"updatedAt"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string (date-time)"})}),(0,a.jsx)("td",{children:"The time at which the data source was last updated."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"vectorIngestionConfiguration"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Contains details about how to ingest the documents in a data source."})]})]})]})}),(0,a.jsx)(c.A,{value:"list_data_sources",children:(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"name"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The name of the data source. (pattern: <code>([0-9a-zA-Z][_-]?){1,100}</code>)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"dataSourceId"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The unique identifier of the data source. (pattern: <code>[0-9a-zA-Z]{10}</code>)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"description"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The description of the data source."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"knowledgeBaseId"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The unique identifier of the knowledge base to which the data source belongs. (pattern: <code>[0-9a-zA-Z]{10}</code>)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"status"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The status of the data source. (AVAILABLE, DELETING, DELETE_UNSUCCESSFUL)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"updatedAt"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string (date-time)"})}),(0,a.jsx)("td",{children:"The time at which the data source was last updated."})]})]})]})})]}),"\n",(0,a.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(r.p,{children:"The following methods are available for this resource:"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Accessible by"}),(0,a.jsx)("th",{children:"Required Params"}),(0,a.jsx)("th",{children:"Optional Params"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#get_data_source",children:(0,a.jsx)(s.A,{code:"get_data_source"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"select"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-knowledge_base_id",children:(0,a.jsx)("code",{children:"knowledge_base_id"})}),", ",(0,a.jsx)("a",{href:"#parameter-data_source_id",children:(0,a.jsx)("code",{children:"data_source_id"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Gets information about a data source."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#list_data_sources",children:(0,a.jsx)(s.A,{code:"list_data_sources"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"select"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-knowledge_base_id",children:(0,a.jsx)("code",{children:"knowledge_base_id"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Lists the data sources in a knowledge base and information about each one."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#create_data_source",children:(0,a.jsx)(s.A,{code:"create_data_source"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"insert"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-knowledge_base_id",children:(0,a.jsx)("code",{children:"knowledge_base_id"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})}),", ",(0,a.jsx)("a",{href:"#parameter-name",children:(0,a.jsx)("code",{children:"name"})}),", ",(0,a.jsx)("a",{href:"#parameter-dataSourceConfiguration",children:(0,a.jsx)("code",{children:"dataSourceConfiguration"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Connects a knowledge base to a data source. You specify the configuration for the specific data source service in the dataSourceConfiguration field. You can't change the chunkingConfiguration after you create the data source connector."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#update_data_source",children:(0,a.jsx)(s.A,{code:"update_data_source"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"update"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-knowledge_base_id",children:(0,a.jsx)("code",{children:"knowledge_base_id"})}),", ",(0,a.jsx)("a",{href:"#parameter-data_source_id",children:(0,a.jsx)("code",{children:"data_source_id"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})}),", ",(0,a.jsx)("a",{href:"#parameter-name",children:(0,a.jsx)("code",{children:"name"})}),", ",(0,a.jsx)("a",{href:"#parameter-dataSourceConfiguration",children:(0,a.jsx)("code",{children:"dataSourceConfiguration"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Updates the configurations for a data source connector. You can't change the chunkingConfiguration after you create the data source connector. Specify the existing chunkingConfiguration."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#delete_data_source",children:(0,a.jsx)(s.A,{code:"delete_data_source"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"delete"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-knowledge_base_id",children:(0,a.jsx)("code",{children:"knowledge_base_id"})}),", ",(0,a.jsx)("a",{href:"#parameter-data_source_id",children:(0,a.jsx)("code",{children:"data_source_id"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Deletes a data source from a knowledge base."})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(r.p,{children:["Parameters can be passed in the ",(0,a.jsx)(r.code,{children:"WHERE"})," clause of a query. Check the ",(0,a.jsx)(r.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{id:"parameter-data_source_id",children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"data_source_id"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The unique identifier of the data source to delete."})]}),(0,a.jsxs)("tr",{id:"parameter-knowledge_base_id",children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"knowledge_base_id"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The unique identifier of the knowledge base from which to delete the data source."})]}),(0,a.jsxs)("tr",{id:"parameter-region",children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"region"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"AWS region (default: us-east-1)"})]})]})]}),"\n",(0,a.jsxs)(r.h2,{id:"select-examples",children:[(0,a.jsx)(r.code,{children:"SELECT"})," examples"]}),"\n",(0,a.jsxs)(o.A,{defaultValue:"get_data_source",values:[{label:"get_data_source",value:"get_data_source"},{label:"list_data_sources",value:"list_data_sources"}],children:[(0,a.jsxs)(c.A,{value:"get_data_source",children:[(0,a.jsx)(r.p,{children:"Gets information about a data source."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"SELECT\nname,\ncreatedAt,\ndataDeletionPolicy,\ndataSourceConfiguration,\ndataSourceId,\ndescription,\nfailureReasons,\nknowledgeBaseId,\nserverSideEncryptionConfiguration,\nstatus,\nupdatedAt,\nvectorIngestionConfiguration\nFROM aws.bedrock_agent.data_sources\nWHERE knowledge_base_id = '{{ knowledge_base_id }}' -- required\nAND data_source_id = '{{ data_source_id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,a.jsxs)(c.A,{value:"list_data_sources",children:[(0,a.jsx)(r.p,{children:"Lists the data sources in a knowledge base and information about each one."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"SELECT\nname,\ndataSourceId,\ndescription,\nknowledgeBaseId,\nstatus,\nupdatedAt\nFROM aws.bedrock_agent.data_sources\nWHERE knowledge_base_id = '{{ knowledge_base_id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,a.jsxs)(r.h2,{id:"insert-examples",children:[(0,a.jsx)(r.code,{children:"INSERT"})," examples"]}),"\n",(0,a.jsxs)(o.A,{defaultValue:"create_data_source",values:[{label:"create_data_source",value:"create_data_source"},{label:"Manifest",value:"manifest"}],children:[(0,a.jsxs)(c.A,{value:"create_data_source",children:[(0,a.jsx)(r.p,{children:"Connects a knowledge base to a data source. You specify the configuration for the specific data source service in the dataSourceConfiguration field. You can't change the chunkingConfiguration after you create the data source connector."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"INSERT INTO aws.bedrock_agent.data_sources (\nclientToken,\nname,\ndescription,\ndataSourceConfiguration,\ndataDeletionPolicy,\nserverSideEncryptionConfiguration,\nvectorIngestionConfiguration,\nknowledge_base_id,\nregion\n)\nSELECT \n'{{ clientToken }}',\n'{{ name }}' /* required */,\n'{{ description }}',\n'{{ dataSourceConfiguration }}' /* required */,\n'{{ dataDeletionPolicy }}',\n'{{ serverSideEncryptionConfiguration }}',\n'{{ vectorIngestionConfiguration }}',\n'{{ knowledge_base_id }}',\n'{{ region }}'\nRETURNING\ndataSource\n;\n"})})]}),(0,a.jsx)(c.A,{value:"manifest",children:(0,a.jsx)(i.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: data_sources
props:
  - name: knowledge_base_id
    value: "{{ knowledge_base_id }}"
    description: Required parameter for the data_sources resource.
  - name: region
    value: "{{ region }}"
    description: Required parameter for the data_sources resource.
  - name: clientToken
    value: "{{ clientToken }}"
  - name: name
    value: "{{ name }}"
  - name: description
    value: "{{ description }}"
  - name: dataSourceConfiguration
    description: |
      The connection configuration for the data source.
    value:
      type_: "{{ type_ }}"
      s3Configuration:
        bucketArn: "{{ bucketArn }}"
        inclusionPrefixes:
          - "{{ inclusionPrefixes }}"
        bucketOwnerAccountId: "{{ bucketOwnerAccountId }}"
      webConfiguration:
        sourceConfiguration:
          urlConfiguration:
            seedUrls:
              - url: "{{ url }}"
        crawlerConfiguration:
          crawlerLimits:
            rateLimit: {{ rateLimit }}
            maxPages: {{ maxPages }}
          inclusionFilters:
            - "{{ inclusionFilters }}"
          exclusionFilters:
            - "{{ exclusionFilters }}"
          scope: "{{ scope }}"
          userAgent: "{{ userAgent }}"
          userAgentHeader: "{{ userAgentHeader }}"
      confluenceConfiguration:
        sourceConfiguration:
          hostUrl: "{{ hostUrl }}"
          hostType: "{{ hostType }}"
          authType: "{{ authType }}"
          credentialsSecretArn: "{{ credentialsSecretArn }}"
        crawlerConfiguration:
          filterConfiguration:
            type_: "{{ type_ }}"
            patternObjectFilter:
              filters: "{{ filters }}"
      salesforceConfiguration:
        sourceConfiguration:
          hostUrl: "{{ hostUrl }}"
          authType: "{{ authType }}"
          credentialsSecretArn: "{{ credentialsSecretArn }}"
        crawlerConfiguration:
          filterConfiguration:
            type_: "{{ type_ }}"
            patternObjectFilter:
              filters: "{{ filters }}"
      sharePointConfiguration:
        sourceConfiguration:
          tenantId: "{{ tenantId }}"
          domain: "{{ domain }}"
          siteUrls:
            - "{{ siteUrls }}"
          hostType: "{{ hostType }}"
          authType: "{{ authType }}"
          credentialsSecretArn: "{{ credentialsSecretArn }}"
        crawlerConfiguration:
          filterConfiguration:
            type_: "{{ type_ }}"
            patternObjectFilter:
              filters: "{{ filters }}"
  - name: dataDeletionPolicy
    value: "{{ dataDeletionPolicy }}"
    valid_values: ['RETAIN', 'DELETE']
  - name: serverSideEncryptionConfiguration
    description: |
      Contains the configuration for server-side encryption.
    value:
      kmsKeyArn: "{{ kmsKeyArn }}"
  - name: vectorIngestionConfiguration
    description: |
      Contains details about how to ingest the documents in a data source.
    value:
      chunkingConfiguration:
        chunkingStrategy: "{{ chunkingStrategy }}"
        fixedSizeChunkingConfiguration:
          maxTokens: {{ maxTokens }}
          overlapPercentage: {{ overlapPercentage }}
        hierarchicalChunkingConfiguration:
          levelConfigurations:
            - maxTokens: {{ maxTokens }}
          overlapTokens: {{ overlapTokens }}
        semanticChunkingConfiguration:
          maxTokens: {{ maxTokens }}
          bufferSize: {{ bufferSize }}
          breakpointPercentileThreshold: {{ breakpointPercentileThreshold }}
      customTransformationConfiguration:
        intermediateStorage:
          s3Location:
            uri: "{{ uri }}"
        transformations:
          - transformationFunction:
              transformationLambdaConfiguration:
                lambdaArn: "{{ lambdaArn }}"
            stepToApply: "{{ stepToApply }}"
      parsingConfiguration:
        parsingStrategy: "{{ parsingStrategy }}"
        bedrockFoundationModelConfiguration:
          modelArn: "{{ modelArn }}"
          parsingPrompt:
            parsingPromptText: "{{ parsingPromptText }}"
          parsingModality: "{{ parsingModality }}"
        bedrockDataAutomationConfiguration:
          parsingModality: "{{ parsingModality }}"
      contextEnrichmentConfiguration:
        type_: "{{ type_ }}"
        bedrockFoundationModelConfiguration:
          enrichmentStrategyConfiguration:
            method: "{{ method }}"
          modelArn: "{{ modelArn }}"
`})})]}),"\n",(0,a.jsxs)(r.h2,{id:"update-examples",children:[(0,a.jsx)(r.code,{children:"UPDATE"})," examples"]}),"\n",(0,a.jsx)(o.A,{defaultValue:"update_data_source",values:[{label:"update_data_source",value:"update_data_source"}],children:(0,a.jsxs)(c.A,{value:"update_data_source",children:[(0,a.jsx)(r.p,{children:"Updates the configurations for a data source connector. You can't change the chunkingConfiguration after you create the data source connector. Specify the existing chunkingConfiguration."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"UPDATE aws.bedrock_agent.data_sources\nSET \nname = '{{ name }}',\ndescription = '{{ description }}',\ndataSourceConfiguration = '{{ dataSourceConfiguration }}',\ndataDeletionPolicy = '{{ dataDeletionPolicy }}',\nserverSideEncryptionConfiguration = '{{ serverSideEncryptionConfiguration }}',\nvectorIngestionConfiguration = '{{ vectorIngestionConfiguration }}'\nWHERE \nknowledge_base_id = '{{ knowledge_base_id }}' --required\nAND data_source_id = '{{ data_source_id }}' --required\nAND region = '{{ region }}' --required\nAND name = '{{ name }}' --required\nAND dataSourceConfiguration = '{{ dataSourceConfiguration }}' --required\nRETURNING\ndataSource;\n"})})]})}),"\n",(0,a.jsxs)(r.h2,{id:"delete-examples",children:[(0,a.jsx)(r.code,{children:"DELETE"})," examples"]}),"\n",(0,a.jsx)(o.A,{defaultValue:"delete_data_source",values:[{label:"delete_data_source",value:"delete_data_source"}],children:(0,a.jsxs)(c.A,{value:"delete_data_source",children:[(0,a.jsx)(r.p,{children:"Deletes a data source from a knowledge base."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"DELETE FROM aws.bedrock_agent.data_sources\nWHERE knowledge_base_id = '{{ knowledge_base_id }}' --required\nAND data_source_id = '{{ data_source_id }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})})]})}function g(e={}){let{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}}}]);