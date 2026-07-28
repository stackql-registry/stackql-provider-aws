"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["922298"],{62873(e,t,a){a.r(t),a.d(t,{metadata:()=>n,default:()=>F,frontMatter:()=>l,contentTitle:()=>u,toc:()=>h,assets:()=>m});var n=JSON.parse('{"id":"services/kendra/data_sources/index","title":"data_sources","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/kendra/data_sources/index.md","sourceDirName":"services/kendra/data_sources","slug":"/services/kendra/data_sources/","permalink":"/services/kendra/data_sources/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"data_sources","hide_title":false,"hide_table_of_contents":false,"keywords":["data_sources","kendra","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"data_source_sync_jobs","permalink":"/services/kendra/data_source_sync_jobs/"},"next":{"title":"document_status","permalink":"/services/kendra/document_status/"}}'),r=a(474848),i=a(28453),o=a(97362),d=a(897272),s=a(413554),c=a(541647);let l={title:"data_sources",hide_title:!1,hide_table_of_contents:!1,keywords:["data_sources","kendra","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},u,m={},h=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2}];function x(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists a ",(0,r.jsx)("code",{children:"data_sources"})," resource."]}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"data_sources"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Type"})}),(0,r.jsx)("td",{children:"Resource"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"aws.kendra.data_sources"})})]})]})}),"\n",(0,r.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.p,{children:["The following fields are returned by ",(0,r.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,r.jsx)(s.A,{defaultValue:"describe_data_source",values:[{label:"describe_data_source",value:"describe_data_source"}],children:(0,r.jsx)(c.A,{value:"describe_data_source",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"Configuration"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Configuration details for the data source connector. This shows how the data source is configured. The configuration options for a data source depend on the data source provider."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"CreatedAt"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"The Unix timestamp when the data source connector was created."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"CustomDocumentEnrichmentConfiguration"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Configuration information for altering document metadata and content during the document ingestion process when you describe a data source. For more information on how to create, modify and delete document metadata, or make other content alterations when you ingest documents into Amazon Kendra, see Customizing document metadata during the ingestion process."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"Description"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The description for the data source connector. (pattern: <code>^\\P{C}*$</code>)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"ErrorMessage"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"When the Status field value is FAILED, the ErrorMessage field contains a description of the error that caused the data source to fail. (pattern: <code>^\\P{C}*$</code>)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The identifier of the data source connector. (pattern: <code>[a-zA-Z0-9][a-zA-Z0-9_-]*</code>)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"IndexId"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The identifier of the index used with the data source connector. (pattern: <code>[a-zA-Z0-9][a-zA-Z0-9-]*</code>)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"LanguageCode"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The code for a language. This shows a supported language for all documents in the data source. English is supported by default. For more information on supported languages, including their codes, see Adding documents in languages other than English. (pattern: <code>[a-zA-Z-]*</code>)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The name for the data source connector. (pattern: <code>[a-zA-Z0-9][a-zA-Z0-9_-]*</code>)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"RoleArn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The Amazon Resource Name (ARN) of the IAM role with permission to access the data source and required resources. (pattern: <code>arn:[a-z0-9-.]{1,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[^/].{0,1023}</code>)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"Schedule"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The schedule for Amazon Kendra to update the index."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"Status"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The current status of the data source connector. When the status is ACTIVE the data source is ready to use. When the status is FAILED, the ErrorMessage field contains the reason that the data source failed. (CREATING, DELETING, FAILED, UPDATING, ACTIVE)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"Type"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The type of the data source. For example, SHAREPOINT. (S3, SHAREPOINT, DATABASE, SALESFORCE, ONEDRIVE, SERVICENOW, CUSTOM, CONFLUENCE, GOOGLEDRIVE, WEBCRAWLER, WORKDOCS, FSX, SLACK, BOX, QUIP, JIRA, GITHUB, ALFRESCO, TEMPLATE)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"UpdatedAt"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"The Unix timestamp when the data source connector was last updated."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"VpcConfiguration"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Provides the configuration information to connect to an Amazon VPC."})]})]})]})})}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Accessible by"}),(0,r.jsx)("th",{children:"Required Params"}),(0,r.jsx)("th",{children:"Optional Params"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#describe_data_source",children:(0,r.jsx)(o.A,{code:"describe_data_source"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"select"})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Gets information about an Amazon Kendra data source connector."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#create_data_source",children:(0,r.jsx)(o.A,{code:"create_data_source"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"insert"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-IndexId",children:(0,r.jsx)("code",{children:"IndexId"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Creates a data source connector that you want to use with an Amazon Kendra index. You specify a name, data source connector type and description for your data source. You also specify configuration information for the data source connector. CreateDataSource is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised. For an example of creating an index and data source using the Python SDK, see Getting started with Python SDK. For an example of creating an index and data source using the Java SDK, see Getting started with Java SDK."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#update_data_source",children:(0,r.jsx)(o.A,{code:"update_data_source"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"update"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-IndexId",children:(0,r.jsx)("code",{children:"IndexId"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Updates an Amazon Kendra data source connector."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#delete_data_source",children:(0,r.jsx)(o.A,{code:"delete_data_source"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"delete"})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Deletes an Amazon Kendra data source connector. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the Status field returned by a call to the DescribeDataSource API is set to DELETING. For more information, see Deleting Data Sources. Deleting an entire data source or re-syncing your index after deleting specific documents from a data source could take up to an hour or more, depending on the number of documents you want to delete."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#list_data_sources",children:(0,r.jsx)(o.A,{code:"list_data_sources"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"exec"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-IndexId",children:(0,r.jsx)("code",{children:"IndexId"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Lists the data source connectors that you have created."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#start_data_source_sync_job",children:(0,r.jsx)(o.A,{code:"start_data_source_sync_job"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"exec"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-IndexId",children:(0,r.jsx)("code",{children:"IndexId"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Starts a synchronization job for a data source connector. If a synchronization job is already in progress, Amazon Kendra returns a ResourceInUseException exception. Re-syncing your data source with your index after modifying, adding, or deleting documents from your data source respository could take up to an hour or more, depending on the number of documents to sync."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#stop_data_source_sync_job",children:(0,r.jsx)(o.A,{code:"stop_data_source_sync_job"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"exec"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-IndexId",children:(0,r.jsx)("code",{children:"IndexId"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Stops a synchronization job that is currently running. You can't stop a scheduled synchronization job."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,r.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,r.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{id:"parameter-region",children:[(0,r.jsx)("td",{children:(0,r.jsx)(o.A,{code:"region"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,r.jsxs)(t.h2,{id:"select-examples",children:[(0,r.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,r.jsx)(s.A,{defaultValue:"describe_data_source",values:[{label:"describe_data_source",value:"describe_data_source"}],children:(0,r.jsxs)(c.A,{value:"describe_data_source",children:[(0,r.jsx)(t.p,{children:"Gets information about an Amazon Kendra data source connector."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\nConfiguration,\nCreatedAt,\nCustomDocumentEnrichmentConfiguration,\nDescription,\nErrorMessage,\nId,\nIndexId,\nLanguageCode,\nName,\nRoleArn,\nSchedule,\nStatus,\nType,\nUpdatedAt,\nVpcConfiguration\nFROM aws.kendra.data_sources\nWHERE region = '{{ region }}' -- required\n;\n"})})]})}),"\n",(0,r.jsxs)(t.h2,{id:"insert-examples",children:[(0,r.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,r.jsxs)(s.A,{defaultValue:"create_data_source",values:[{label:"create_data_source",value:"create_data_source"},{label:"Manifest",value:"manifest"}],children:[(0,r.jsxs)(c.A,{value:"create_data_source",children:[(0,r.jsx)(t.p,{children:"Creates a data source connector that you want to use with an Amazon Kendra index. You specify a name, data source connector type and description for your data source. You also specify configuration information for the data source connector. CreateDataSource is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised. For an example of creating an index and data source using the Python SDK, see Getting started with Python SDK. For an example of creating an index and data source using the Java SDK, see Getting started with Java SDK."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.kendra.data_sources (\nName,\nIndexId,\nType,\nConfiguration,\nVpcConfiguration,\nDescription,\nSchedule,\nRoleArn,\nTags,\nClientToken,\nLanguageCode,\nCustomDocumentEnrichmentConfiguration,\nregion\n)\nSELECT \n'{{ Name }}',\n'{{ IndexId }}' /* required */,\n'{{ Type }}',\n'{{ Configuration }}',\n'{{ VpcConfiguration }}',\n'{{ Description }}',\n'{{ Schedule }}',\n'{{ RoleArn }}',\n'{{ Tags }}',\n'{{ ClientToken }}',\n'{{ LanguageCode }}',\n'{{ CustomDocumentEnrichmentConfiguration }}',\n'{{ region }}'\nRETURNING\nId\n;\n"})})]}),(0,r.jsx)(c.A,{value:"manifest",children:(0,r.jsx)(d.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: data_sources
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the data_sources resource.
  - name: Name
    value: "{{ Name }}"
    description: |
      A name for the data source connector.
  - name: IndexId
    value: "{{ IndexId }}"
    description: |
      The identifier of the index you want to use with the data source connector.
  - name: Type
    value: "{{ Type }}"
    description: |
      The type of data source repository. For example, SHAREPOINT.
    valid_values: ['S3', 'SHAREPOINT', 'DATABASE', 'SALESFORCE', 'ONEDRIVE', 'SERVICENOW', 'CUSTOM', 'CONFLUENCE', 'GOOGLEDRIVE', 'WEBCRAWLER', 'WORKDOCS', 'FSX', 'SLACK', 'BOX', 'QUIP', 'JIRA', 'GITHUB', 'ALFRESCO', 'TEMPLATE']
  - name: Configuration
    description: |
      Configuration information to connect to your data source repository. You can't specify the Configuration parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception. The Configuration parameter is required for all other data sources.
    value:
      S3Configuration:
        BucketName: "{{ BucketName }}"
        InclusionPrefixes:
          - "{{ InclusionPrefixes }}"
        InclusionPatterns:
          - "{{ InclusionPatterns }}"
        ExclusionPatterns:
          - "{{ ExclusionPatterns }}"
        DocumentsMetadataConfiguration:
          S3Prefix: "{{ S3Prefix }}"
        AccessControlListConfiguration:
          KeyPath: "{{ KeyPath }}"
      SharePointConfiguration:
        SharePointVersion: "{{ SharePointVersion }}"
        Urls:
          - "{{ Urls }}"
        SecretArn: "{{ SecretArn }}"
        CrawlAttachments: {{ CrawlAttachments }}
        UseChangeLog: {{ UseChangeLog }}
        InclusionPatterns:
          - "{{ InclusionPatterns }}"
        ExclusionPatterns:
          - "{{ ExclusionPatterns }}"
        VpcConfiguration:
          SubnetIds:
            - "{{ SubnetIds }}"
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
        FieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        DocumentTitleFieldName: "{{ DocumentTitleFieldName }}"
        DisableLocalGroups: {{ DisableLocalGroups }}
        SslCertificateS3Path:
          Bucket: "{{ Bucket }}"
          Key: "{{ Key }}"
        AuthenticationType: "{{ AuthenticationType }}"
        ProxyConfiguration:
          Host: "{{ Host }}"
          Port: {{ Port }}
          Credentials: "{{ Credentials }}"
      DatabaseConfiguration:
        DatabaseEngineType: "{{ DatabaseEngineType }}"
        ConnectionConfiguration:
          DatabaseHost: "{{ DatabaseHost }}"
          DatabasePort: {{ DatabasePort }}
          DatabaseName: "{{ DatabaseName }}"
          TableName: "{{ TableName }}"
          SecretArn: "{{ SecretArn }}"
        VpcConfiguration:
          SubnetIds:
            - "{{ SubnetIds }}"
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
        ColumnConfiguration:
          DocumentIdColumnName: "{{ DocumentIdColumnName }}"
          DocumentDataColumnName: "{{ DocumentDataColumnName }}"
          DocumentTitleColumnName: "{{ DocumentTitleColumnName }}"
          FieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          ChangeDetectingColumns:
            - "{{ ChangeDetectingColumns }}"
        AclConfiguration:
          AllowedGroupsColumnName: "{{ AllowedGroupsColumnName }}"
        SqlConfiguration:
          QueryIdentifiersEnclosingOption: "{{ QueryIdentifiersEnclosingOption }}"
      SalesforceConfiguration:
        ServerUrl: "{{ ServerUrl }}"
        SecretArn: "{{ SecretArn }}"
        StandardObjectConfigurations:
          - Name: "{{ Name }}"
            DocumentDataFieldName: "{{ DocumentDataFieldName }}"
            DocumentTitleFieldName: "{{ DocumentTitleFieldName }}"
            FieldMappings: "{{ FieldMappings }}"
        KnowledgeArticleConfiguration:
          IncludedStates:
            - "{{ IncludedStates }}"
          StandardKnowledgeArticleTypeConfiguration:
            DocumentDataFieldName: "{{ DocumentDataFieldName }}"
            DocumentTitleFieldName: "{{ DocumentTitleFieldName }}"
            FieldMappings:
              - DataSourceFieldName: "{{ DataSourceFieldName }}"
                DateFieldFormat: "{{ DateFieldFormat }}"
                IndexFieldName: "{{ IndexFieldName }}"
          CustomKnowledgeArticleTypeConfigurations:
            - Name: "{{ Name }}"
              DocumentDataFieldName: "{{ DocumentDataFieldName }}"
              DocumentTitleFieldName: "{{ DocumentTitleFieldName }}"
              FieldMappings: "{{ FieldMappings }}"
        ChatterFeedConfiguration:
          DocumentDataFieldName: "{{ DocumentDataFieldName }}"
          DocumentTitleFieldName: "{{ DocumentTitleFieldName }}"
          FieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          IncludeFilterTypes:
            - "{{ IncludeFilterTypes }}"
        CrawlAttachments: {{ CrawlAttachments }}
        StandardObjectAttachmentConfiguration:
          DocumentTitleFieldName: "{{ DocumentTitleFieldName }}"
          FieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
        IncludeAttachmentFilePatterns:
          - "{{ IncludeAttachmentFilePatterns }}"
        ExcludeAttachmentFilePatterns:
          - "{{ ExcludeAttachmentFilePatterns }}"
      OneDriveConfiguration:
        TenantDomain: "{{ TenantDomain }}"
        SecretArn: "{{ SecretArn }}"
        OneDriveUsers:
          OneDriveUserList:
            - "{{ OneDriveUserList }}"
          OneDriveUserS3Path:
            Bucket: "{{ Bucket }}"
            Key: "{{ Key }}"
        InclusionPatterns:
          - "{{ InclusionPatterns }}"
        ExclusionPatterns:
          - "{{ ExclusionPatterns }}"
        FieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        DisableLocalGroups: {{ DisableLocalGroups }}
      ServiceNowConfiguration:
        HostUrl: "{{ HostUrl }}"
        SecretArn: "{{ SecretArn }}"
        ServiceNowBuildVersion: "{{ ServiceNowBuildVersion }}"
        KnowledgeArticleConfiguration:
          CrawlAttachments: {{ CrawlAttachments }}
          IncludeAttachmentFilePatterns:
            - "{{ IncludeAttachmentFilePatterns }}"
          ExcludeAttachmentFilePatterns:
            - "{{ ExcludeAttachmentFilePatterns }}"
          DocumentDataFieldName: "{{ DocumentDataFieldName }}"
          DocumentTitleFieldName: "{{ DocumentTitleFieldName }}"
          FieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
          FilterQuery: "{{ FilterQuery }}"
        ServiceCatalogConfiguration:
          CrawlAttachments: {{ CrawlAttachments }}
          IncludeAttachmentFilePatterns:
            - "{{ IncludeAttachmentFilePatterns }}"
          ExcludeAttachmentFilePatterns:
            - "{{ ExcludeAttachmentFilePatterns }}"
          DocumentDataFieldName: "{{ DocumentDataFieldName }}"
          DocumentTitleFieldName: "{{ DocumentTitleFieldName }}"
          FieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
        AuthenticationType: "{{ AuthenticationType }}"
      ConfluenceConfiguration:
        ServerUrl: "{{ ServerUrl }}"
        SecretArn: "{{ SecretArn }}"
        Version: "{{ Version }}"
        SpaceConfiguration:
          CrawlPersonalSpaces: {{ CrawlPersonalSpaces }}
          CrawlArchivedSpaces: {{ CrawlArchivedSpaces }}
          IncludeSpaces:
            - "{{ IncludeSpaces }}"
          ExcludeSpaces:
            - "{{ ExcludeSpaces }}"
          SpaceFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
        PageConfiguration:
          PageFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
        BlogConfiguration:
          BlogFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
        AttachmentConfiguration:
          CrawlAttachments: {{ CrawlAttachments }}
          AttachmentFieldMappings:
            - DataSourceFieldName: "{{ DataSourceFieldName }}"
              DateFieldFormat: "{{ DateFieldFormat }}"
              IndexFieldName: "{{ IndexFieldName }}"
        VpcConfiguration:
          SubnetIds:
            - "{{ SubnetIds }}"
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
        InclusionPatterns:
          - "{{ InclusionPatterns }}"
        ExclusionPatterns:
          - "{{ ExclusionPatterns }}"
        ProxyConfiguration:
          Host: "{{ Host }}"
          Port: {{ Port }}
          Credentials: "{{ Credentials }}"
        AuthenticationType: "{{ AuthenticationType }}"
      GoogleDriveConfiguration:
        SecretArn: "{{ SecretArn }}"
        InclusionPatterns:
          - "{{ InclusionPatterns }}"
        ExclusionPatterns:
          - "{{ ExclusionPatterns }}"
        FieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        ExcludeMimeTypes:
          - "{{ ExcludeMimeTypes }}"
        ExcludeUserAccounts:
          - "{{ ExcludeUserAccounts }}"
        ExcludeSharedDrives:
          - "{{ ExcludeSharedDrives }}"
      WebCrawlerConfiguration:
        Urls:
          SeedUrlConfiguration:
            SeedUrls:
              - "{{ SeedUrls }}"
            WebCrawlerMode: "{{ WebCrawlerMode }}"
          SiteMapsConfiguration:
            SiteMaps:
              - "{{ SiteMaps }}"
        CrawlDepth: {{ CrawlDepth }}
        MaxLinksPerPage: {{ MaxLinksPerPage }}
        MaxContentSizePerPageInMegaBytes: {{ MaxContentSizePerPageInMegaBytes }}
        MaxUrlsPerMinuteCrawlRate: {{ MaxUrlsPerMinuteCrawlRate }}
        UrlInclusionPatterns:
          - "{{ UrlInclusionPatterns }}"
        UrlExclusionPatterns:
          - "{{ UrlExclusionPatterns }}"
        ProxyConfiguration:
          Host: "{{ Host }}"
          Port: {{ Port }}
          Credentials: "{{ Credentials }}"
        AuthenticationConfiguration:
          BasicAuthentication:
            - Host: "{{ Host }}"
              Port: {{ Port }}
              Credentials: "{{ Credentials }}"
      WorkDocsConfiguration:
        OrganizationId: "{{ OrganizationId }}"
        CrawlComments: {{ CrawlComments }}
        UseChangeLog: {{ UseChangeLog }}
        InclusionPatterns:
          - "{{ InclusionPatterns }}"
        ExclusionPatterns:
          - "{{ ExclusionPatterns }}"
        FieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
      FsxConfiguration:
        FileSystemId: "{{ FileSystemId }}"
        FileSystemType: "{{ FileSystemType }}"
        VpcConfiguration:
          SubnetIds:
            - "{{ SubnetIds }}"
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
        SecretArn: "{{ SecretArn }}"
        InclusionPatterns:
          - "{{ InclusionPatterns }}"
        ExclusionPatterns:
          - "{{ ExclusionPatterns }}"
        FieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
      SlackConfiguration:
        TeamId: "{{ TeamId }}"
        SecretArn: "{{ SecretArn }}"
        VpcConfiguration:
          SubnetIds:
            - "{{ SubnetIds }}"
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
        SlackEntityList:
          - "{{ SlackEntityList }}"
        UseChangeLog: {{ UseChangeLog }}
        CrawlBotMessage: {{ CrawlBotMessage }}
        ExcludeArchived: {{ ExcludeArchived }}
        SinceCrawlDate: "{{ SinceCrawlDate }}"
        LookBackPeriod: {{ LookBackPeriod }}
        PrivateChannelFilter:
          - "{{ PrivateChannelFilter }}"
        PublicChannelFilter:
          - "{{ PublicChannelFilter }}"
        InclusionPatterns:
          - "{{ InclusionPatterns }}"
        ExclusionPatterns:
          - "{{ ExclusionPatterns }}"
        FieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
      BoxConfiguration:
        EnterpriseId: "{{ EnterpriseId }}"
        SecretArn: "{{ SecretArn }}"
        UseChangeLog: {{ UseChangeLog }}
        CrawlComments: {{ CrawlComments }}
        CrawlTasks: {{ CrawlTasks }}
        CrawlWebLinks: {{ CrawlWebLinks }}
        FileFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        TaskFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        CommentFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        WebLinkFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        InclusionPatterns:
          - "{{ InclusionPatterns }}"
        ExclusionPatterns:
          - "{{ ExclusionPatterns }}"
        VpcConfiguration:
          SubnetIds:
            - "{{ SubnetIds }}"
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
      QuipConfiguration:
        Domain: "{{ Domain }}"
        SecretArn: "{{ SecretArn }}"
        CrawlFileComments: {{ CrawlFileComments }}
        CrawlChatRooms: {{ CrawlChatRooms }}
        CrawlAttachments: {{ CrawlAttachments }}
        FolderIds:
          - "{{ FolderIds }}"
        ThreadFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        MessageFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        AttachmentFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        InclusionPatterns:
          - "{{ InclusionPatterns }}"
        ExclusionPatterns:
          - "{{ ExclusionPatterns }}"
        VpcConfiguration:
          SubnetIds:
            - "{{ SubnetIds }}"
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
      JiraConfiguration:
        JiraAccountUrl: "{{ JiraAccountUrl }}"
        SecretArn: "{{ SecretArn }}"
        UseChangeLog: {{ UseChangeLog }}
        Project:
          - "{{ Project }}"
        IssueType:
          - "{{ IssueType }}"
        Status:
          - "{{ Status }}"
        IssueSubEntityFilter:
          - "{{ IssueSubEntityFilter }}"
        AttachmentFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        CommentFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        IssueFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        ProjectFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        WorkLogFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        InclusionPatterns:
          - "{{ InclusionPatterns }}"
        ExclusionPatterns:
          - "{{ ExclusionPatterns }}"
        VpcConfiguration:
          SubnetIds:
            - "{{ SubnetIds }}"
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
      GitHubConfiguration:
        SaaSConfiguration:
          OrganizationName: "{{ OrganizationName }}"
          HostUrl: "{{ HostUrl }}"
        OnPremiseConfiguration:
          HostUrl: "{{ HostUrl }}"
          OrganizationName: "{{ OrganizationName }}"
          SslCertificateS3Path:
            Bucket: "{{ Bucket }}"
            Key: "{{ Key }}"
        Type: "{{ Type }}"
        SecretArn: "{{ SecretArn }}"
        UseChangeLog: {{ UseChangeLog }}
        GitHubDocumentCrawlProperties:
          CrawlRepositoryDocuments: {{ CrawlRepositoryDocuments }}
          CrawlIssue: {{ CrawlIssue }}
          CrawlIssueComment: {{ CrawlIssueComment }}
          CrawlIssueCommentAttachment: {{ CrawlIssueCommentAttachment }}
          CrawlPullRequest: {{ CrawlPullRequest }}
          CrawlPullRequestComment: {{ CrawlPullRequestComment }}
          CrawlPullRequestCommentAttachment: {{ CrawlPullRequestCommentAttachment }}
        RepositoryFilter:
          - "{{ RepositoryFilter }}"
        InclusionFolderNamePatterns:
          - "{{ InclusionFolderNamePatterns }}"
        InclusionFileTypePatterns:
          - "{{ InclusionFileTypePatterns }}"
        InclusionFileNamePatterns:
          - "{{ InclusionFileNamePatterns }}"
        ExclusionFolderNamePatterns:
          - "{{ ExclusionFolderNamePatterns }}"
        ExclusionFileTypePatterns:
          - "{{ ExclusionFileTypePatterns }}"
        ExclusionFileNamePatterns:
          - "{{ ExclusionFileNamePatterns }}"
        VpcConfiguration:
          SubnetIds:
            - "{{ SubnetIds }}"
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
        GitHubRepositoryConfigurationFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        GitHubCommitConfigurationFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        GitHubIssueDocumentConfigurationFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        GitHubIssueCommentConfigurationFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        GitHubIssueAttachmentConfigurationFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        GitHubPullRequestCommentConfigurationFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        GitHubPullRequestDocumentConfigurationFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        GitHubPullRequestDocumentAttachmentConfigurationFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
      AlfrescoConfiguration:
        SiteUrl: "{{ SiteUrl }}"
        SiteId: "{{ SiteId }}"
        SecretArn: "{{ SecretArn }}"
        SslCertificateS3Path:
          Bucket: "{{ Bucket }}"
          Key: "{{ Key }}"
        CrawlSystemFolders: {{ CrawlSystemFolders }}
        CrawlComments: {{ CrawlComments }}
        EntityFilter:
          - "{{ EntityFilter }}"
        DocumentLibraryFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        BlogFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        WikiFieldMappings:
          - DataSourceFieldName: "{{ DataSourceFieldName }}"
            DateFieldFormat: "{{ DateFieldFormat }}"
            IndexFieldName: "{{ IndexFieldName }}"
        InclusionPatterns:
          - "{{ InclusionPatterns }}"
        ExclusionPatterns:
          - "{{ ExclusionPatterns }}"
        VpcConfiguration:
          SubnetIds:
            - "{{ SubnetIds }}"
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
      TemplateConfiguration:
        Template: "{{ Template }}"
  - name: VpcConfiguration
    description: |
      Provides the configuration information to connect to an Amazon VPC.
    value:
      SubnetIds:
        - "{{ SubnetIds }}"
      SecurityGroupIds:
        - "{{ SecurityGroupIds }}"
  - name: Description
    value: "{{ Description }}"
    description: |
      A description for the data source connector.
  - name: Schedule
    value: "{{ Schedule }}"
    description: |
      Sets the frequency for Amazon Kendra to check the documents in your data source repository and update the index. If you don't set a schedule Amazon Kendra will not periodically update the index. You can call the StartDataSourceSyncJob API to update the index. Specify a cron- format schedule string or an empty string to indicate that the index is updated on demand. You can't specify the Schedule parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception.
  - name: RoleArn
    value: "{{ RoleArn }}"
    description: |
      The Amazon Resource Name (ARN) of an IAM role with permission to access the data source and required resources. For more information, see IAM access roles for Amazon Kendra.. You can't specify the RoleArn parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception. The RoleArn parameter is required for all other data sources.
  - name: Tags
    description: |
      A list of key-value pairs that identify or categorize the data source connector. You can also use tags to help control access to the data source connector. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: ClientToken
    value: "{{ ClientToken }}"
    description: |
      A token that you provide to identify the request to create a data source connector. Multiple calls to the CreateDataSource API with the same client token will create only one data source connector.
  - name: LanguageCode
    value: "{{ LanguageCode }}"
    description: |
      The code for a language. This allows you to support a language for all documents when creating the data source connector. English is supported by default. For more information on supported languages, including their codes, see Adding documents in languages other than English.
  - name: CustomDocumentEnrichmentConfiguration
    description: |
      Configuration information for altering document metadata and content during the document ingestion process. For more information on how to create, modify and delete document metadata, or make other content alterations when you ingest documents into Amazon Kendra, see Customizing document metadata during the ingestion process.
    value:
      InlineConfigurations:
        - Condition:
            ConditionDocumentAttributeKey: "{{ ConditionDocumentAttributeKey }}"
            Operator: "{{ Operator }}"
            ConditionOnValue:
              StringValue: "{{ StringValue }}"
              StringListValue:
                - "{{ StringListValue }}"
              LongValue: {{ LongValue }}
              DateValue: "{{ DateValue }}"
          Target:
            TargetDocumentAttributeKey: "{{ TargetDocumentAttributeKey }}"
            TargetDocumentAttributeValueDeletion: {{ TargetDocumentAttributeValueDeletion }}
            TargetDocumentAttributeValue:
              StringValue: "{{ StringValue }}"
              StringListValue:
                - "{{ StringListValue }}"
              LongValue: {{ LongValue }}
              DateValue: "{{ DateValue }}"
          DocumentContentDeletion: {{ DocumentContentDeletion }}
      PreExtractionHookConfiguration:
        InvocationCondition:
          ConditionDocumentAttributeKey: "{{ ConditionDocumentAttributeKey }}"
          Operator: "{{ Operator }}"
          ConditionOnValue:
            StringValue: "{{ StringValue }}"
            StringListValue:
              - "{{ StringListValue }}"
            LongValue: {{ LongValue }}
            DateValue: "{{ DateValue }}"
        LambdaArn: "{{ LambdaArn }}"
        S3Bucket: "{{ S3Bucket }}"
      PostExtractionHookConfiguration:
        InvocationCondition:
          ConditionDocumentAttributeKey: "{{ ConditionDocumentAttributeKey }}"
          Operator: "{{ Operator }}"
          ConditionOnValue:
            StringValue: "{{ StringValue }}"
            StringListValue:
              - "{{ StringListValue }}"
            LongValue: {{ LongValue }}
            DateValue: "{{ DateValue }}"
        LambdaArn: "{{ LambdaArn }}"
        S3Bucket: "{{ S3Bucket }}"
      RoleArn: "{{ RoleArn }}"
`})})]}),"\n",(0,r.jsxs)(t.h2,{id:"update-examples",children:[(0,r.jsx)(t.code,{children:"UPDATE"})," examples"]}),"\n",(0,r.jsx)(s.A,{defaultValue:"update_data_source",values:[{label:"update_data_source",value:"update_data_source"}],children:(0,r.jsxs)(c.A,{value:"update_data_source",children:[(0,r.jsx)(t.p,{children:"Updates an Amazon Kendra data source connector."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.kendra.data_sources\nSET \nId = '{{ Id }}',\nName = '{{ Name }}',\nIndexId = '{{ IndexId }}',\nConfiguration = '{{ Configuration }}',\nVpcConfiguration = '{{ VpcConfiguration }}',\nDescription = '{{ Description }}',\nSchedule = '{{ Schedule }}',\nRoleArn = '{{ RoleArn }}',\nLanguageCode = '{{ LanguageCode }}',\nCustomDocumentEnrichmentConfiguration = '{{ CustomDocumentEnrichmentConfiguration }}'\nWHERE \nregion = '{{ region }}' --required\nAND IndexId = '{{ IndexId }}' --required;\n"})})]})}),"\n",(0,r.jsxs)(t.h2,{id:"delete-examples",children:[(0,r.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,r.jsx)(s.A,{defaultValue:"delete_data_source",values:[{label:"delete_data_source",value:"delete_data_source"}],children:(0,r.jsxs)(c.A,{value:"delete_data_source",children:[(0,r.jsx)(t.p,{children:"Deletes an Amazon Kendra data source connector. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the Status field returned by a call to the DescribeDataSource API is set to DELETING. For more information, see Deleting Data Sources. Deleting an entire data source or re-syncing your index after deleting specific documents from a data source could take up to an hour or more, depending on the number of documents you want to delete."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.kendra.data_sources\nWHERE region = '{{ region }}' --required\n;\n"})})]})}),"\n",(0,r.jsx)(t.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,r.jsxs)(s.A,{defaultValue:"list_data_sources",values:[{label:"list_data_sources",value:"list_data_sources"},{label:"start_data_source_sync_job",value:"start_data_source_sync_job"},{label:"stop_data_source_sync_job",value:"stop_data_source_sync_job"}],children:[(0,r.jsxs)(c.A,{value:"list_data_sources",children:[(0,r.jsx)(t.p,{children:"Lists the data source connectors that you have created."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'EXEC aws.kendra.data_sources.list_data_sources \n@region=\'{{ region }}\' --required \n@@json=\n\'{\n"IndexId": "{{ IndexId }}", \n"NextToken": "{{ NextToken }}", \n"MaxResults": {{ MaxResults }}\n}\'\n;\n'})})]}),(0,r.jsxs)(c.A,{value:"start_data_source_sync_job",children:[(0,r.jsx)(t.p,{children:"Starts a synchronization job for a data source connector. If a synchronization job is already in progress, Amazon Kendra returns a ResourceInUseException exception. Re-syncing your data source with your index after modifying, adding, or deleting documents from your data source respository could take up to an hour or more, depending on the number of documents to sync."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'EXEC aws.kendra.data_sources.start_data_source_sync_job \n@region=\'{{ region }}\' --required \n@@json=\n\'{\n"Id": "{{ Id }}", \n"IndexId": "{{ IndexId }}"\n}\'\n;\n'})})]}),(0,r.jsxs)(c.A,{value:"stop_data_source_sync_job",children:[(0,r.jsx)(t.p,{children:"Stops a synchronization job that is currently running. You can't stop a scheduled synchronization job."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'EXEC aws.kendra.data_sources.stop_data_source_sync_job \n@region=\'{{ region }}\' --required \n@@json=\n\'{\n"Id": "{{ Id }}", \n"IndexId": "{{ IndexId }}"\n}\'\n;\n'})})]})]})]})}function F(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}}}]);