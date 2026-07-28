"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["258506"],{774865(e,r,t){t.r(r),t.d(r,{metadata:()=>a,default:()=>A,frontMatter:()=>l,contentTitle:()=>h,toc:()=>x,assets:()=>u});var a=JSON.parse('{"id":"services/quicksight/data_sources/index","title":"data_sources","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/quicksight/data_sources/index.md","sourceDirName":"services/quicksight/data_sources","slug":"/services/quicksight/data_sources/","permalink":"/services/quicksight/data_sources/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"data_sources","hide_title":false,"hide_table_of_contents":false,"keywords":["data_sources","quicksight","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"data_source_permissions","permalink":"/services/quicksight/data_source_permissions/"},"next":{"title":"default_q_business_applications","permalink":"/services/quicksight/default_q_business_applications/"}}'),s=t(474848),n=t(28453),o=t(97362),d=t(897272),i=t(413554),c=t(541647);let l={title:"data_sources",hide_title:!1,hide_table_of_contents:!1,keywords:["data_sources","quicksight","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},x=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function j(e){let r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Creates, updates, deletes, gets or lists a ",(0,s.jsx)("code",{children:"data_sources"})," resource."]}),"\n",(0,s.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Name"})}),(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"data_sources"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Type"})}),(0,s.jsx)("td",{children:"Resource"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("b",{children:"Id"})}),(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"aws.quicksight.data_sources"})})]})]})}),"\n",(0,s.jsx)(r.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(r.p,{children:["The following fields are returned by ",(0,s.jsx)(r.code,{children:"SELECT"})," queries:"]}),"\n",(0,s.jsxs)(i.A,{defaultValue:"describe_data_source",values:[{label:"describe_data_source",value:"describe_data_source"},{label:"search_data_sources",value:"search_data_sources"},{label:"list_data_sources",value:"list_data_sources"}],children:[(0,s.jsx)(c.A,{value:"describe_data_source",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"DataSource"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"object"})}),(0,s.jsx)("td",{children:"The structure of a data source."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"RequestId"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The Amazon Web Services request ID for this operation."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"Status"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"integer"})}),(0,s.jsx)("td",{children:"The HTTP status of the request."})]})]})]})}),(0,s.jsx)(c.A,{value:"search_data_sources",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"Arn"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The arn of the datasource."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"CreatedTime"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string (date-time)"})}),(0,s.jsxs)("td",{children:["The date and time that the data source was created. This value is expressed in MM-DD-YYYY HH:MM",":SS"," format."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"DataSourceId"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The unique ID of the data source."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"LastUpdatedTime"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string (date-time)"})}),(0,s.jsxs)("td",{children:["The date and time the data source was last updated. This value is expressed in MM-DD-YYYY HH:MM",":SS"," format."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"Name"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The name of the data source."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"Type"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The type of the data source. (ADOBE_ANALYTICS, AMAZON_ELASTICSEARCH, ATHENA, AURORA, AURORA_POSTGRESQL, AWS_IOT_ANALYTICS, GITHUB, JIRA, MARIADB, MYSQL, ORACLE, POSTGRESQL, PRESTO, REDSHIFT, S3, S3_TABLES, SALESFORCE, SERVICENOW, SNOWFLAKE, SPARK, SQLSERVER, TERADATA, TWITTER, TIMESTREAM, AMAZON_OPENSEARCH, EXASOL, DATABRICKS, STARBURST, TRINO, BIGQUERY, GOOGLESHEETS, GOOGLE_DRIVE, CONFLUENCE, SHAREPOINT, ONE_DRIVE, WEB_CRAWLER, S3_KNOWLEDGE_BASE, QBUSINESS)"})]})]})]})}),(0,s.jsx)(c.A,{value:"list_data_sources",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"AlternateDataSourceParameters"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"array"})}),(0,s.jsx)("td",{children:"A set of alternate data source parameters that you want to share for the credentials stored with this data source. The credentials are applied in tandem with the data source parameters when you copy a data source by using a create or update request. The API operation compares the DataSourceParameters structure that's in the request with the structures in the AlternateDataSourceParameters allow list. If the structures are an exact match, the request is allowed to use the credentials from this existing data source. If the AlternateDataSourceParameters list is null, the Credentials originally used with this DataSourceParameters are automatically allowed."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"Arn"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The Amazon Resource Name (ARN) of the data source."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"CreatedTime"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string (date-time)"})}),(0,s.jsx)("td",{children:"The time that this data source was created."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"DataSourceId"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"DataSourceParameters"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"object"})}),(0,s.jsx)("td",{children:"The parameters that Quick Sight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"ErrorInfo"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"object"})}),(0,s.jsx)("td",{children:"Error information from the last update or the creation of the data source."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"LastUpdatedTime"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string (date-time)"})}),(0,s.jsx)("td",{children:"The last time that this data source was updated."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"Name"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"A display name for the data source."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"SecretArn"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager. (pattern: <code>^arn:[-a-z0-9]",(0,s.jsx)(r.em,{children:":secretsmanager:[-a-z0-9]"}),":[0-9]{12}","\u3299\uFE0F",".+</code>)"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"SslProperties"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"object"})}),(0,s.jsx)("td",{children:"Secure Socket Layer (SSL) properties that apply when Quick Sight connects to your underlying data source."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"Status"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The HTTP status of the request. (CREATION_IN_PROGRESS, CREATION_SUCCESSFUL, CREATION_FAILED, UPDATE_IN_PROGRESS, UPDATE_SUCCESSFUL, UPDATE_FAILED, DELETED)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"Type"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The type of the data source. This type indicates which database engine the data source connects to. (ADOBE_ANALYTICS, AMAZON_ELASTICSEARCH, ATHENA, AURORA, AURORA_POSTGRESQL, AWS_IOT_ANALYTICS, GITHUB, JIRA, MARIADB, MYSQL, ORACLE, POSTGRESQL, PRESTO, REDSHIFT, S3, S3_TABLES, SALESFORCE, SERVICENOW, SNOWFLAKE, SPARK, SQLSERVER, TERADATA, TWITTER, TIMESTREAM, AMAZON_OPENSEARCH, EXASOL, DATABRICKS, STARBURST, TRINO, BIGQUERY, GOOGLESHEETS, GOOGLE_DRIVE, CONFLUENCE, SHAREPOINT, ONE_DRIVE, WEB_CRAWLER, S3_KNOWLEDGE_BASE, QBUSINESS)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"VpcConnectionProperties"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"object"})}),(0,s.jsx)("td",{children:"VPC connection properties."})]})]})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(r.p,{children:"The following methods are available for this resource:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Accessible by"}),(0,s.jsx)("th",{children:"Required Params"}),(0,s.jsx)("th",{children:"Optional Params"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#describe_data_source",children:(0,s.jsx)(o.A,{code:"describe_data_source"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"select"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-aws_account_id",children:(0,s.jsx)("code",{children:"aws_account_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-data_source_id",children:(0,s.jsx)("code",{children:"data_source_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Describes a data source."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#search_data_sources",children:(0,s.jsx)(o.A,{code:"search_data_sources"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"select"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-aws_account_id",children:(0,s.jsx)("code",{children:"aws_account_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Use the SearchDataSources operation to search for data sources that belong to an account."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#list_data_sources",children:(0,s.jsx)(o.A,{code:"list_data_sources"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"select"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-aws_account_id",children:(0,s.jsx)("code",{children:"aws_account_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})]}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-next-token",children:(0,s.jsx)("code",{children:"next-token"})}),", ",(0,s.jsx)("a",{href:"#parameter-max-results",children:(0,s.jsx)("code",{children:"max-results"})})]}),(0,s.jsx)("td",{children:"Lists data sources in current Amazon Web Services Region that belong to this Amazon Web Services account."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#create_data_source",children:(0,s.jsx)(o.A,{code:"create_data_source"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"insert"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-aws_account_id",children:(0,s.jsx)("code",{children:"aws_account_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})}),", ",(0,s.jsx)("a",{href:"#parameter-DataSourceId",children:(0,s.jsx)("code",{children:"DataSourceId"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Creates a data source."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#update_data_source",children:(0,s.jsx)(o.A,{code:"update_data_source"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"update"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-aws_account_id",children:(0,s.jsx)("code",{children:"aws_account_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-data_source_id",children:(0,s.jsx)("code",{children:"data_source_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Updates a data source."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"#delete_data_source",children:(0,s.jsx)(o.A,{code:"delete_data_source"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"delete"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"#parameter-aws_account_id",children:(0,s.jsx)("code",{children:"aws_account_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-data_source_id",children:(0,s.jsx)("code",{children:"data_source_id"})}),", ",(0,s.jsx)("a",{href:"#parameter-region",children:(0,s.jsx)("code",{children:"region"})})]}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Deletes the data source permanently. This operation breaks all the datasets that reference the deleted data source."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["Parameters can be passed in the ",(0,s.jsx)(r.code,{children:"WHERE"})," clause of a query. Check the ",(0,s.jsx)(r.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Datatype"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{id:"parameter-aws_account_id",children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"aws_account_id"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The Amazon Web Services account ID."})]}),(0,s.jsxs)("tr",{id:"parameter-data_source_id",children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"data_source_id"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account."})]}),(0,s.jsxs)("tr",{id:"parameter-region",children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"region"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,s.jsxs)("tr",{id:"parameter-max-results",children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"max-results"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"integer"})}),(0,s.jsx)("td",{children:"The maximum number of results to be returned per request."})]}),(0,s.jsxs)("tr",{id:"parameter-next-token",children:[(0,s.jsx)("td",{children:(0,s.jsx)(o.A,{code:"next-token"})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"string"})}),(0,s.jsx)("td",{children:"The token for the next set of results, or null if there are no more results."})]})]})]}),"\n",(0,s.jsxs)(r.h2,{id:"select-examples",children:[(0,s.jsx)(r.code,{children:"SELECT"})," examples"]}),"\n",(0,s.jsxs)(i.A,{defaultValue:"describe_data_source",values:[{label:"describe_data_source",value:"describe_data_source"},{label:"search_data_sources",value:"search_data_sources"},{label:"list_data_sources",value:"list_data_sources"}],children:[(0,s.jsxs)(c.A,{value:"describe_data_source",children:[(0,s.jsx)(r.p,{children:"Describes a data source."}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"SELECT\nDataSource,\nRequestId,\nStatus\nFROM aws.quicksight.data_sources\nWHERE aws_account_id = '{{ aws_account_id }}' -- required\nAND data_source_id = '{{ data_source_id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,s.jsxs)(c.A,{value:"search_data_sources",children:[(0,s.jsx)(r.p,{children:"Use the SearchDataSources operation to search for data sources that belong to an account."}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"SELECT\nArn,\nCreatedTime,\nDataSourceId,\nLastUpdatedTime,\nName,\nType\nFROM aws.quicksight.data_sources\nWHERE aws_account_id = '{{ aws_account_id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,s.jsxs)(c.A,{value:"list_data_sources",children:[(0,s.jsx)(r.p,{children:"Lists data sources in current Amazon Web Services Region that belong to this Amazon Web Services account."}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"SELECT\nAlternateDataSourceParameters,\nArn,\nCreatedTime,\nDataSourceId,\nDataSourceParameters,\nErrorInfo,\nLastUpdatedTime,\nName,\nSecretArn,\nSslProperties,\nStatus,\nType,\nVpcConnectionProperties\nFROM aws.quicksight.data_sources\nWHERE aws_account_id = '{{ aws_account_id }}' -- required\nAND region = '{{ region }}' -- required\nAND `next-token` = '{{ next-token }}'\nAND `max-results` = '{{ max-results }}'\n;\n"})})]})]}),"\n",(0,s.jsxs)(r.h2,{id:"insert-examples",children:[(0,s.jsx)(r.code,{children:"INSERT"})," examples"]}),"\n",(0,s.jsxs)(i.A,{defaultValue:"create_data_source",values:[{label:"create_data_source",value:"create_data_source"},{label:"Manifest",value:"manifest"}],children:[(0,s.jsxs)(c.A,{value:"create_data_source",children:[(0,s.jsx)(r.p,{children:"Creates a data source."}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"INSERT INTO aws.quicksight.data_sources (\nDataSourceId,\nName,\nType,\nDataSourceParameters,\nCredentials,\nPermissions,\nVpcConnectionProperties,\nSslProperties,\nTags,\nFolderArns,\naws_account_id,\nregion\n)\nSELECT \n'{{ DataSourceId }}' /* required */,\n'{{ Name }}',\n'{{ Type }}',\n'{{ DataSourceParameters }}',\n'{{ Credentials }}',\n'{{ Permissions }}',\n'{{ VpcConnectionProperties }}',\n'{{ SslProperties }}',\n'{{ Tags }}',\n'{{ FolderArns }}',\n'{{ aws_account_id }}',\n'{{ region }}'\nRETURNING\nArn,\nCreationStatus,\nDataSourceId,\nRequestId,\nStatus\n;\n"})})]}),(0,s.jsx)(c.A,{value:"manifest",children:(0,s.jsx)(d.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: data_sources
props:
  - name: aws_account_id
    value: "{{ aws_account_id }}"
    description: Required parameter for the data_sources resource.
  - name: region
    value: "{{ region }}"
    description: Required parameter for the data_sources resource.
  - name: DataSourceId
    value: "{{ DataSourceId }}"
  - name: Name
    value: "{{ Name }}"
  - name: Type
    value: "{{ Type }}"
    valid_values: ['ADOBE_ANALYTICS', 'AMAZON_ELASTICSEARCH', 'ATHENA', 'AURORA', 'AURORA_POSTGRESQL', 'AWS_IOT_ANALYTICS', 'GITHUB', 'JIRA', 'MARIADB', 'MYSQL', 'ORACLE', 'POSTGRESQL', 'PRESTO', 'REDSHIFT', 'S3', 'S3_TABLES', 'SALESFORCE', 'SERVICENOW', 'SNOWFLAKE', 'SPARK', 'SQLSERVER', 'TERADATA', 'TWITTER', 'TIMESTREAM', 'AMAZON_OPENSEARCH', 'EXASOL', 'DATABRICKS', 'STARBURST', 'TRINO', 'BIGQUERY', 'GOOGLESHEETS', 'GOOGLE_DRIVE', 'CONFLUENCE', 'SHAREPOINT', 'ONE_DRIVE', 'WEB_CRAWLER', 'S3_KNOWLEDGE_BASE', 'QBUSINESS']
  - name: DataSourceParameters
    description: |
      The parameters that Quick Sight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
    value:
      AmazonElasticsearchParameters:
        Domain: "{{ Domain }}"
      AthenaParameters:
        WorkGroup: "{{ WorkGroup }}"
        RoleArn: "{{ RoleArn }}"
        ConsumerAccountRoleArn: "{{ ConsumerAccountRoleArn }}"
        IdentityCenterConfiguration:
          EnableIdentityPropagation: {{ EnableIdentityPropagation }}
      AuroraParameters:
        Host: "{{ Host }}"
        Port: {{ Port }}
        Database: "{{ Database }}"
      AuroraPostgreSqlParameters:
        Host: "{{ Host }}"
        Port: {{ Port }}
        Database: "{{ Database }}"
      AwsIotAnalyticsParameters:
        DataSetName: "{{ DataSetName }}"
      JiraParameters:
        SiteBaseUrl: "{{ SiteBaseUrl }}"
      MariaDbParameters:
        Host: "{{ Host }}"
        Port: {{ Port }}
        Database: "{{ Database }}"
      MySqlParameters:
        Host: "{{ Host }}"
        Port: {{ Port }}
        Database: "{{ Database }}"
      OracleParameters:
        Host: "{{ Host }}"
        Port: {{ Port }}
        Database: "{{ Database }}"
        UseServiceName: {{ UseServiceName }}
      PostgreSqlParameters:
        Host: "{{ Host }}"
        Port: {{ Port }}
        Database: "{{ Database }}"
      PrestoParameters:
        Host: "{{ Host }}"
        Port: {{ Port }}
        Catalog: "{{ Catalog }}"
      RdsParameters:
        InstanceId: "{{ InstanceId }}"
        Database: "{{ Database }}"
      RedshiftParameters:
        Host: "{{ Host }}"
        Port: {{ Port }}
        Database: "{{ Database }}"
        ClusterId: "{{ ClusterId }}"
        IAMParameters:
          RoleArn: "{{ RoleArn }}"
          DatabaseUser: "{{ DatabaseUser }}"
          DatabaseGroups:
            - "{{ DatabaseGroups }}"
          AutoCreateDatabaseUser: {{ AutoCreateDatabaseUser }}
        IdentityCenterConfiguration:
          EnableIdentityPropagation: {{ EnableIdentityPropagation }}
      S3Parameters:
        ManifestFileLocation:
          Bucket: "{{ Bucket }}"
          Key: "{{ Key }}"
        RoleArn: "{{ RoleArn }}"
      S3TablesParameters:
        TableBucketArn: "{{ TableBucketArn }}"
      S3KnowledgeBaseParameters:
        RoleArn: "{{ RoleArn }}"
        BucketUrl: "{{ BucketUrl }}"
        MetadataFilesLocation: "{{ MetadataFilesLocation }}"
      ServiceNowParameters:
        SiteBaseUrl: "{{ SiteBaseUrl }}"
      SnowflakeParameters:
        Host: "{{ Host }}"
        Database: "{{ Database }}"
        Warehouse: "{{ Warehouse }}"
        AuthenticationType: "{{ AuthenticationType }}"
        DatabaseAccessControlRole: "{{ DatabaseAccessControlRole }}"
        OAuthParameters:
          TokenProviderUrl: "{{ TokenProviderUrl }}"
          OAuthScope: "{{ OAuthScope }}"
          IdentityProviderVpcConnectionProperties:
            VpcConnectionArn: "{{ VpcConnectionArn }}"
          IdentityProviderResourceUri: "{{ IdentityProviderResourceUri }}"
          IdentityProviderCACertificatesBundleS3Uri: "{{ IdentityProviderCACertificatesBundleS3Uri }}"
      SparkParameters:
        Host: "{{ Host }}"
        Port: {{ Port }}
      SqlServerParameters:
        Host: "{{ Host }}"
        Port: {{ Port }}
        Database: "{{ Database }}"
      TeradataParameters:
        Host: "{{ Host }}"
        Port: {{ Port }}
        Database: "{{ Database }}"
      TwitterParameters:
        Query: "{{ Query }}"
        MaxRows: {{ MaxRows }}
      AmazonOpenSearchParameters:
        Domain: "{{ Domain }}"
      ExasolParameters:
        Host: "{{ Host }}"
        Port: {{ Port }}
      DatabricksParameters:
        Host: "{{ Host }}"
        Port: {{ Port }}
        SqlEndpointPath: "{{ SqlEndpointPath }}"
      StarburstParameters:
        Host: "{{ Host }}"
        Port: {{ Port }}
        Catalog: "{{ Catalog }}"
        ProductType: "{{ ProductType }}"
        DatabaseAccessControlRole: "{{ DatabaseAccessControlRole }}"
        AuthenticationType: "{{ AuthenticationType }}"
        OAuthParameters:
          TokenProviderUrl: "{{ TokenProviderUrl }}"
          OAuthScope: "{{ OAuthScope }}"
          IdentityProviderVpcConnectionProperties:
            VpcConnectionArn: "{{ VpcConnectionArn }}"
          IdentityProviderResourceUri: "{{ IdentityProviderResourceUri }}"
          IdentityProviderCACertificatesBundleS3Uri: "{{ IdentityProviderCACertificatesBundleS3Uri }}"
      TrinoParameters:
        Host: "{{ Host }}"
        Port: {{ Port }}
        Catalog: "{{ Catalog }}"
      BigQueryParameters:
        ProjectId: "{{ ProjectId }}"
        DataSetRegion: "{{ DataSetRegion }}"
      ImpalaParameters:
        Host: "{{ Host }}"
        Port: {{ Port }}
        Database: "{{ Database }}"
        SqlEndpointPath: "{{ SqlEndpointPath }}"
      CustomConnectionParameters:
        ConnectionType: "{{ ConnectionType }}"
      WebCrawlerParameters:
        WebCrawlerAuthType: "{{ WebCrawlerAuthType }}"
        UsernameFieldXpath: "{{ UsernameFieldXpath }}"
        PasswordFieldXpath: "{{ PasswordFieldXpath }}"
        UsernameButtonXpath: "{{ UsernameButtonXpath }}"
        PasswordButtonXpath: "{{ PasswordButtonXpath }}"
        LoginPageUrl: "{{ LoginPageUrl }}"
        WebProxyHostName: "{{ WebProxyHostName }}"
        WebProxyPortNumber: {{ WebProxyPortNumber }}
      ConfluenceParameters:
        ConfluenceUrl: "{{ ConfluenceUrl }}"
      QBusinessParameters:
        ApplicationArn: "{{ ApplicationArn }}"
  - name: Credentials
    description: |
      Data source credentials. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
    value:
      CredentialPair:
        Username: "{{ Username }}"
        Password: "{{ Password }}"
        AlternateDataSourceParameters:
          - AmazonElasticsearchParameters:
              Domain: "{{ Domain }}"
            AthenaParameters:
              WorkGroup: "{{ WorkGroup }}"
              RoleArn: "{{ RoleArn }}"
              ConsumerAccountRoleArn: "{{ ConsumerAccountRoleArn }}"
              IdentityCenterConfiguration:
                EnableIdentityPropagation: {{ EnableIdentityPropagation }}
            AuroraParameters:
              Host: "{{ Host }}"
              Port: {{ Port }}
              Database: "{{ Database }}"
            AuroraPostgreSqlParameters:
              Host: "{{ Host }}"
              Port: {{ Port }}
              Database: "{{ Database }}"
            AwsIotAnalyticsParameters:
              DataSetName: "{{ DataSetName }}"
            JiraParameters:
              SiteBaseUrl: "{{ SiteBaseUrl }}"
            MariaDbParameters:
              Host: "{{ Host }}"
              Port: {{ Port }}
              Database: "{{ Database }}"
            MySqlParameters:
              Host: "{{ Host }}"
              Port: {{ Port }}
              Database: "{{ Database }}"
            OracleParameters:
              Host: "{{ Host }}"
              Port: {{ Port }}
              Database: "{{ Database }}"
              UseServiceName: {{ UseServiceName }}
            PostgreSqlParameters:
              Host: "{{ Host }}"
              Port: {{ Port }}
              Database: "{{ Database }}"
            PrestoParameters:
              Host: "{{ Host }}"
              Port: {{ Port }}
              Catalog: "{{ Catalog }}"
            RdsParameters:
              InstanceId: "{{ InstanceId }}"
              Database: "{{ Database }}"
            RedshiftParameters:
              Host: "{{ Host }}"
              Port: {{ Port }}
              Database: "{{ Database }}"
              ClusterId: "{{ ClusterId }}"
              IAMParameters:
                RoleArn: "{{ RoleArn }}"
                DatabaseUser: "{{ DatabaseUser }}"
                DatabaseGroups: "{{ DatabaseGroups }}"
                AutoCreateDatabaseUser: {{ AutoCreateDatabaseUser }}
              IdentityCenterConfiguration:
                EnableIdentityPropagation: {{ EnableIdentityPropagation }}
            S3Parameters:
              ManifestFileLocation:
                Bucket: "{{ Bucket }}"
                Key: "{{ Key }}"
              RoleArn: "{{ RoleArn }}"
            S3TablesParameters:
              TableBucketArn: "{{ TableBucketArn }}"
            S3KnowledgeBaseParameters:
              RoleArn: "{{ RoleArn }}"
              BucketUrl: "{{ BucketUrl }}"
              MetadataFilesLocation: "{{ MetadataFilesLocation }}"
            ServiceNowParameters:
              SiteBaseUrl: "{{ SiteBaseUrl }}"
            SnowflakeParameters:
              Host: "{{ Host }}"
              Database: "{{ Database }}"
              Warehouse: "{{ Warehouse }}"
              AuthenticationType: "{{ AuthenticationType }}"
              DatabaseAccessControlRole: "{{ DatabaseAccessControlRole }}"
              OAuthParameters:
                TokenProviderUrl: "{{ TokenProviderUrl }}"
                OAuthScope: "{{ OAuthScope }}"
                IdentityProviderVpcConnectionProperties: "{{ IdentityProviderVpcConnectionProperties }}"
                IdentityProviderResourceUri: "{{ IdentityProviderResourceUri }}"
                IdentityProviderCACertificatesBundleS3Uri: "{{ IdentityProviderCACertificatesBundleS3Uri }}"
            SparkParameters:
              Host: "{{ Host }}"
              Port: {{ Port }}
            SqlServerParameters:
              Host: "{{ Host }}"
              Port: {{ Port }}
              Database: "{{ Database }}"
            TeradataParameters:
              Host: "{{ Host }}"
              Port: {{ Port }}
              Database: "{{ Database }}"
            TwitterParameters:
              Query: "{{ Query }}"
              MaxRows: {{ MaxRows }}
            AmazonOpenSearchParameters:
              Domain: "{{ Domain }}"
            ExasolParameters:
              Host: "{{ Host }}"
              Port: {{ Port }}
            DatabricksParameters:
              Host: "{{ Host }}"
              Port: {{ Port }}
              SqlEndpointPath: "{{ SqlEndpointPath }}"
            StarburstParameters:
              Host: "{{ Host }}"
              Port: {{ Port }}
              Catalog: "{{ Catalog }}"
              ProductType: "{{ ProductType }}"
              DatabaseAccessControlRole: "{{ DatabaseAccessControlRole }}"
              AuthenticationType: "{{ AuthenticationType }}"
              OAuthParameters:
                TokenProviderUrl: "{{ TokenProviderUrl }}"
                OAuthScope: "{{ OAuthScope }}"
                IdentityProviderVpcConnectionProperties: "{{ IdentityProviderVpcConnectionProperties }}"
                IdentityProviderResourceUri: "{{ IdentityProviderResourceUri }}"
                IdentityProviderCACertificatesBundleS3Uri: "{{ IdentityProviderCACertificatesBundleS3Uri }}"
            TrinoParameters:
              Host: "{{ Host }}"
              Port: {{ Port }}
              Catalog: "{{ Catalog }}"
            BigQueryParameters:
              ProjectId: "{{ ProjectId }}"
              DataSetRegion: "{{ DataSetRegion }}"
            ImpalaParameters:
              Host: "{{ Host }}"
              Port: {{ Port }}
              Database: "{{ Database }}"
              SqlEndpointPath: "{{ SqlEndpointPath }}"
            CustomConnectionParameters:
              ConnectionType: "{{ ConnectionType }}"
            WebCrawlerParameters:
              WebCrawlerAuthType: "{{ WebCrawlerAuthType }}"
              UsernameFieldXpath: "{{ UsernameFieldXpath }}"
              PasswordFieldXpath: "{{ PasswordFieldXpath }}"
              UsernameButtonXpath: "{{ UsernameButtonXpath }}"
              PasswordButtonXpath: "{{ PasswordButtonXpath }}"
              LoginPageUrl: "{{ LoginPageUrl }}"
              WebProxyHostName: "{{ WebProxyHostName }}"
              WebProxyPortNumber: {{ WebProxyPortNumber }}
            ConfluenceParameters:
              ConfluenceUrl: "{{ ConfluenceUrl }}"
            QBusinessParameters:
              ApplicationArn: "{{ ApplicationArn }}"
      CopySourceArn: "{{ CopySourceArn }}"
      SecretArn: "{{ SecretArn }}"
      KeyPairCredentials:
        KeyPairUsername: "{{ KeyPairUsername }}"
        PrivateKey: "{{ PrivateKey }}"
        PrivateKeyPassphrase: "{{ PrivateKeyPassphrase }}"
      WebProxyCredentials:
        WebProxyUsername: "{{ WebProxyUsername }}"
        WebProxyPassword: "{{ WebProxyPassword }}"
      OAuthClientCredentials:
        ClientId: "{{ ClientId }}"
        ClientSecret: "{{ ClientSecret }}"
        Username: "{{ Username }}"
  - name: Permissions
    value:
      - Principal: "{{ Principal }}"
        Actions: "{{ Actions }}"
  - name: VpcConnectionProperties
    description: |
      VPC connection properties.
    value:
      VpcConnectionArn: "{{ VpcConnectionArn }}"
  - name: SslProperties
    description: |
      Secure Socket Layer (SSL) properties that apply when Quick Sight connects to your underlying data source.
    value:
      DisableSsl: {{ DisableSsl }}
  - name: Tags
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: FolderArns
    value:
      - "{{ FolderArns }}"
`})})]}),"\n",(0,s.jsxs)(r.h2,{id:"update-examples",children:[(0,s.jsx)(r.code,{children:"UPDATE"})," examples"]}),"\n",(0,s.jsx)(i.A,{defaultValue:"update_data_source",values:[{label:"update_data_source",value:"update_data_source"}],children:(0,s.jsxs)(c.A,{value:"update_data_source",children:[(0,s.jsx)(r.p,{children:"Updates a data source."}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"UPDATE aws.quicksight.data_sources\nSET \nName = '{{ Name }}',\nDataSourceParameters = '{{ DataSourceParameters }}',\nCredentials = '{{ Credentials }}',\nVpcConnectionProperties = '{{ VpcConnectionProperties }}',\nSslProperties = '{{ SslProperties }}'\nWHERE \naws_account_id = '{{ aws_account_id }}' --required\nAND data_source_id = '{{ data_source_id }}' --required\nAND region = '{{ region }}' --required\nRETURNING\nArn,\nDataSourceId,\nRequestId,\nStatus,\nUpdateStatus;\n"})})]})}),"\n",(0,s.jsxs)(r.h2,{id:"delete-examples",children:[(0,s.jsx)(r.code,{children:"DELETE"})," examples"]}),"\n",(0,s.jsx)(i.A,{defaultValue:"delete_data_source",values:[{label:"delete_data_source",value:"delete_data_source"}],children:(0,s.jsxs)(c.A,{value:"delete_data_source",children:[(0,s.jsx)(r.p,{children:"Deletes the data source permanently. This operation breaks all the datasets that reference the deleted data source."}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:"DELETE FROM aws.quicksight.data_sources\nWHERE aws_account_id = '{{ aws_account_id }}' --required\nAND data_source_id = '{{ data_source_id }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})})]})}function A(e={}){let{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}}}]);