"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["161010"],{450008(e,t,n){n.r(t),n.d(t,{metadata:()=>s,default:()=>p,frontMatter:()=>l,contentTitle:()=>h,toc:()=>S,assets:()=>u});var s=JSON.parse('{"id":"services/dms/endpoints/index","title":"endpoints","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/dms/endpoints/index.md","sourceDirName":"services/dms/endpoints","slug":"/services/dms/endpoints/","permalink":"/services/dms/endpoints/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"endpoints","hide_title":false,"hide_table_of_contents":false,"keywords":["endpoints","dms","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"endpoint_types","permalink":"/services/dms/endpoint_types/"},"next":{"title":"engine_versions","permalink":"/services/dms/engine_versions/"}}'),r=n(474848),a=n(28453),i=n(97362),o=n(897272),d=n(413554),c=n(541647);let l={title:"endpoints",hide_title:!1,hide_table_of_contents:!1,keywords:["endpoints","dms","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},S=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function m(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists an ",(0,r.jsx)("code",{children:"endpoints"})," resource."]}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"endpoints"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Type"})}),(0,r.jsx)("td",{children:"Resource"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"aws.dms.endpoints"})})]})]})}),"\n",(0,r.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.p,{children:["The following fields are returned by ",(0,r.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,r.jsx)(d.A,{defaultValue:"describe_endpoints",values:[{label:"describe_endpoints",value:"describe_endpoints"}],children:(0,r.jsx)(c.A,{value:"describe_endpoints",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"CertificateArn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The Amazon Resource Name (ARN) used for SSL connection to the endpoint."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"DatabaseName"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The name of the database at the endpoint."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"DmsTransferSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The settings for the DMS Transfer type source. For more information, see the DmsTransferSettings structure."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"DocDbSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Provides information that defines a DocumentDB endpoint."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"DynamoDbSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The settings for the DynamoDB target endpoint. For more information, see the DynamoDBSettings structure."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"ElasticsearchSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The settings for the OpenSearch source endpoint. For more information, see the ElasticsearchSettings structure."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"EndpointArn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The Amazon Resource Name (ARN) string that uniquely identifies the endpoint."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"EndpointIdentifier"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"EndpointType"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The type of endpoint. Valid values are source and target. (source, target)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"EngineDisplayName"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:'The expanded name for the engine name. For example, if the EngineName parameter is "aurora", this value would be "Amazon Aurora MySQL".'})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"EngineName"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:'The database engine name. Valid values, depending on the EndpointType, include "mysql", "oracle", "postgres", "mariadb", "aurora", "aurora-postgresql", "redshift", "redshift-serverless", "s3", "db2", "db2-zos", "azuredb", "sybase", "dynamodb", "mongodb", "kinesis", "kafka", "elasticsearch", "documentdb", "sqlserver", "neptune", and "babelfish".'})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"ExternalId"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Value returned by a call to CreateEndpoint that can be used for cross-account validation. Use it on a subsequent call to CreateEndpoint to create the endpoint with a cross-account."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"ExternalTableDefinition"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The external table definition."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"ExtraConnectionAttributes"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Additional connection attributes used to connect to the endpoint."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"GcpMySQLSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Settings in JSON format for the source GCP MySQL endpoint."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"IBMDb2Settings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The settings for the IBM Db2 LUW source endpoint. For more information, see the IBMDb2Settings structure."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"IsReadOnly"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"boolean"})}),(0,r.jsx)("td",{children:"Indicates whether the endpoint is read-only. When set to true, this endpoint is managed by DMS as part of a zero-ETL integration and cannot be modified or deleted directly. You can only modify or delete read-only endpoints through their associated zero-ETL integration."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"KafkaSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The settings for the Apache Kafka target endpoint. For more information, see the KafkaSettings structure."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"KinesisSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The settings for the Amazon Kinesis target endpoint. For more information, see the KinesisSettings structure."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"KmsKeyId"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"An KMS key identifier that is used to encrypt the connection parameters for the endpoint. If you don't specify a value for the KmsKeyId parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"LakehouseSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Settings in JSON format for the target Lakehouse endpoint. This parameter applies to endpoints that are automatically created by DMS for a Lakehouse data warehouse as part of a zero-ETL integration."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"MicrosoftSQLServerSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The settings for the Microsoft SQL Server source and target endpoint. For more information, see the MicrosoftSQLServerSettings structure."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"MongoDbSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The settings for the MongoDB source endpoint. For more information, see the MongoDbSettings structure."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"MySQLSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The settings for the MySQL source and target endpoint. For more information, see the MySQLSettings structure."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"NeptuneSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The settings for the Amazon Neptune target endpoint. For more information, see the NeptuneSettings structure."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"OracleSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The settings for the Oracle source and target endpoint. For more information, see the OracleSettings structure."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"Port"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer"})}),(0,r.jsx)("td",{children:"The port value used to access the endpoint."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"PostgreSQLSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The settings for the PostgreSQL source and target endpoint. For more information, see the PostgreSQLSettings structure."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"RedisSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The settings for the Redis target endpoint. For more information, see the RedisSettings structure."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"RedshiftSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Provides information that defines an Amazon Redshift endpoint."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"S3Settings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The settings for the S3 target endpoint. For more information, see the S3Settings structure."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"ServerName"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The name of the server at the endpoint."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"ServiceAccessRoleArn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsxs)("td",{children:["The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the iam",":PassRole"," action."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"SslMode"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The SSL mode used to connect to the endpoint. The default value is none. (none, require, verify-ca, verify-full)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"Status"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The status of the endpoint."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"SybaseSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The settings for the SAP ASE source and target endpoint. For more information, see the SybaseSettings structure."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"TimestreamSettings"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The settings for the Amazon Timestream target endpoint. For more information, see the TimestreamSettings structure."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"Username"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The user name used to connect to the endpoint."})]})]})]})})}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Accessible by"}),(0,r.jsx)("th",{children:"Required Params"}),(0,r.jsx)("th",{children:"Optional Params"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#describe_endpoints",children:(0,r.jsx)(i.A,{code:"describe_endpoints"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"select"})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Returns information about the endpoints for your account in the current region."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#create_endpoint",children:(0,r.jsx)(i.A,{code:"create_endpoint"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"insert"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-EndpointIdentifier",children:(0,r.jsx)("code",{children:"EndpointIdentifier"})}),", ",(0,r.jsx)("a",{href:"#parameter-EndpointType",children:(0,r.jsx)("code",{children:"EndpointType"})}),", ",(0,r.jsx)("a",{href:"#parameter-EngineName",children:(0,r.jsx)("code",{children:"EngineName"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Creates an endpoint using the provided settings. For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on the CreateEndpoint API call. Specifying DatabaseName when you create a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#modify_endpoint",children:(0,r.jsx)(i.A,{code:"modify_endpoint"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"update"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-EndpointArn",children:(0,r.jsx)("code",{children:"EndpointArn"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Modifies the specified endpoint. For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on the ModifyEndpoint API call. Specifying DatabaseName when you modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#delete_endpoint",children:(0,r.jsx)(i.A,{code:"delete_endpoint"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"delete"})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Deletes the specified endpoint. All tasks associated with the endpoint must be deleted before you can delete the endpoint."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,r.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,r.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{id:"parameter-region",children:[(0,r.jsx)("td",{children:(0,r.jsx)(i.A,{code:"region"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,r.jsxs)(t.h2,{id:"select-examples",children:[(0,r.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,r.jsx)(d.A,{defaultValue:"describe_endpoints",values:[{label:"describe_endpoints",value:"describe_endpoints"}],children:(0,r.jsxs)(c.A,{value:"describe_endpoints",children:[(0,r.jsx)(t.p,{children:"Returns information about the endpoints for your account in the current region."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT\nCertificateArn,\nDatabaseName,\nDmsTransferSettings,\nDocDbSettings,\nDynamoDbSettings,\nElasticsearchSettings,\nEndpointArn,\nEndpointIdentifier,\nEndpointType,\nEngineDisplayName,\nEngineName,\nExternalId,\nExternalTableDefinition,\nExtraConnectionAttributes,\nGcpMySQLSettings,\nIBMDb2Settings,\nIsReadOnly,\nKafkaSettings,\nKinesisSettings,\nKmsKeyId,\nLakehouseSettings,\nMicrosoftSQLServerSettings,\nMongoDbSettings,\nMySQLSettings,\nNeptuneSettings,\nOracleSettings,\nPort,\nPostgreSQLSettings,\nRedisSettings,\nRedshiftSettings,\nS3Settings,\nServerName,\nServiceAccessRoleArn,\nSslMode,\nStatus,\nSybaseSettings,\nTimestreamSettings,\nUsername\nFROM aws.dms.endpoints\nWHERE region = '{{ region }}' -- required\n;\n"})})]})}),"\n",(0,r.jsxs)(t.h2,{id:"insert-examples",children:[(0,r.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,r.jsxs)(d.A,{defaultValue:"create_endpoint",values:[{label:"create_endpoint",value:"create_endpoint"},{label:"Manifest",value:"manifest"}],children:[(0,r.jsxs)(c.A,{value:"create_endpoint",children:[(0,r.jsx)(t.p,{children:"Creates an endpoint using the provided settings. For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on the CreateEndpoint API call. Specifying DatabaseName when you create a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.dms.endpoints (\nEndpointIdentifier,\nEndpointType,\nEngineName,\nUsername,\nPassword,\nServerName,\nPort,\nDatabaseName,\nExtraConnectionAttributes,\nKmsKeyId,\nTags,\nCertificateArn,\nSslMode,\nServiceAccessRoleArn,\nExternalTableDefinition,\nDynamoDbSettings,\nS3Settings,\nDmsTransferSettings,\nMongoDbSettings,\nKinesisSettings,\nKafkaSettings,\nElasticsearchSettings,\nNeptuneSettings,\nRedshiftSettings,\nPostgreSQLSettings,\nMySQLSettings,\nOracleSettings,\nSybaseSettings,\nMicrosoftSQLServerSettings,\nIBMDb2Settings,\nResourceIdentifier,\nDocDbSettings,\nRedisSettings,\nGcpMySQLSettings,\nTimestreamSettings,\nregion\n)\nSELECT \n'{{ EndpointIdentifier }}' /* required */,\n'{{ EndpointType }}' /* required */,\n'{{ EngineName }}' /* required */,\n'{{ Username }}',\n'{{ Password }}',\n'{{ ServerName }}',\n{{ Port }},\n'{{ DatabaseName }}',\n'{{ ExtraConnectionAttributes }}',\n'{{ KmsKeyId }}',\n'{{ Tags }}',\n'{{ CertificateArn }}',\n'{{ SslMode }}',\n'{{ ServiceAccessRoleArn }}',\n'{{ ExternalTableDefinition }}',\n'{{ DynamoDbSettings }}',\n'{{ S3Settings }}',\n'{{ DmsTransferSettings }}',\n'{{ MongoDbSettings }}',\n'{{ KinesisSettings }}',\n'{{ KafkaSettings }}',\n'{{ ElasticsearchSettings }}',\n'{{ NeptuneSettings }}',\n'{{ RedshiftSettings }}',\n'{{ PostgreSQLSettings }}',\n'{{ MySQLSettings }}',\n'{{ OracleSettings }}',\n'{{ SybaseSettings }}',\n'{{ MicrosoftSQLServerSettings }}',\n'{{ IBMDb2Settings }}',\n'{{ ResourceIdentifier }}',\n'{{ DocDbSettings }}',\n'{{ RedisSettings }}',\n'{{ GcpMySQLSettings }}',\n'{{ TimestreamSettings }}',\n'{{ region }}'\nRETURNING\nEndpoint\n;\n"})})]}),(0,r.jsx)(c.A,{value:"manifest",children:(0,r.jsx)(o.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: endpoints
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the endpoints resource.
  - name: EndpointIdentifier
    value: "{{ EndpointIdentifier }}"
    description: |
      The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
  - name: EndpointType
    value: "{{ EndpointType }}"
    description: |
      The type of endpoint. Valid values are source and target.
    valid_values: ['source', 'target']
  - name: EngineName
    value: "{{ EngineName }}"
    description: |
      The type of engine for the endpoint. Valid values, depending on the EndpointType value, include "mysql", "oracle", "postgres", "mariadb", "aurora", "aurora-postgresql", "opensearch", "redshift", "s3", "db2", "db2-zos", "azuredb", "sybase", "dynamodb", "mongodb", "kinesis", "kafka", "elasticsearch", "docdb", "sqlserver", "neptune", "babelfish", redshift-serverless, aurora-serverless, aurora-postgresql-serverless, gcp-mysql, azure-sql-managed-instance, redis, dms-transfer.
  - name: Username
    value: "{{ Username }}"
    description: |
      The user name to be used to log in to the endpoint database.
  - name: Password
    value: "{{ Password }}"
    description: |
      The password to be used to log in to the endpoint database.
  - name: ServerName
    value: "{{ ServerName }}"
    description: |
      The name of the server where the endpoint database resides.
  - name: Port
    value: {{ Port }}
    description: |
      The port used by the endpoint database.
  - name: DatabaseName
    value: "{{ DatabaseName }}"
    description: |
      The name of the endpoint database. For a MySQL source or target endpoint, do not specify DatabaseName. To migrate to a specific database, use this setting and targetDbType.
  - name: ExtraConnectionAttributes
    value: "{{ ExtraConnectionAttributes }}"
    description: |
      Additional attributes associated with the connection. Each attribute is specified as a name-value pair associated by an equal sign (=). Multiple attributes are separated by a semicolon (;) with no additional white space. For information on the attributes available for connecting your source or target endpoint, see Working with DMS Endpoints in the Database Migration Service User Guide.
  - name: KmsKeyId
    value: "{{ KmsKeyId }}"
    description: |
      An KMS key identifier that is used to encrypt the connection parameters for the endpoint. If you don't specify a value for the KmsKeyId parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.
  - name: Tags
    description: |
      One or more tags to be assigned to the endpoint.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
        ResourceArn: "{{ ResourceArn }}"
  - name: CertificateArn
    value: "{{ CertificateArn }}"
    description: |
      The Amazon Resource Name (ARN) for the certificate.
  - name: SslMode
    value: "{{ SslMode }}"
    description: |
      The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is none
    valid_values: ['none', 'require', 'verify-ca', 'verify-full']
  - name: ServiceAccessRoleArn
    value: "{{ ServiceAccessRoleArn }}"
    description: |
      The Amazon Resource Name (ARN) for the service access role that you want to use to create the endpoint. The role must allow the iam:PassRole action.
  - name: ExternalTableDefinition
    value: "{{ ExternalTableDefinition }}"
    description: |
      The external table definition.
  - name: DynamoDbSettings
    description: |
      Settings in JSON format for the target Amazon DynamoDB endpoint. For information about other available settings, see Using Object Mapping to Migrate Data to DynamoDB in the Database Migration Service User Guide.
    value:
      ServiceAccessRoleArn: "{{ ServiceAccessRoleArn }}"
  - name: S3Settings
    description: |
      Settings in JSON format for the target Amazon S3 endpoint. For more information about the available settings, see Extra Connection Attributes When Using Amazon S3 as a Target for DMS in the Database Migration Service User Guide.
    value:
      ServiceAccessRoleArn: "{{ ServiceAccessRoleArn }}"
      ExternalTableDefinition: "{{ ExternalTableDefinition }}"
      CsvRowDelimiter: "{{ CsvRowDelimiter }}"
      CsvDelimiter: "{{ CsvDelimiter }}"
      BucketFolder: "{{ BucketFolder }}"
      BucketName: "{{ BucketName }}"
      CompressionType: "{{ CompressionType }}"
      EncryptionMode: "{{ EncryptionMode }}"
      ServerSideEncryptionKmsKeyId: "{{ ServerSideEncryptionKmsKeyId }}"
      DataFormat: "{{ DataFormat }}"
      EncodingType: "{{ EncodingType }}"
      DictPageSizeLimit: {{ DictPageSizeLimit }}
      RowGroupLength: {{ RowGroupLength }}
      DataPageSize: {{ DataPageSize }}
      ParquetVersion: "{{ ParquetVersion }}"
      EnableStatistics: {{ EnableStatistics }}
      IncludeOpForFullLoad: {{ IncludeOpForFullLoad }}
      CdcInsertsOnly: {{ CdcInsertsOnly }}
      TimestampColumnName: "{{ TimestampColumnName }}"
      ParquetTimestampInMillisecond: {{ ParquetTimestampInMillisecond }}
      CdcInsertsAndUpdates: {{ CdcInsertsAndUpdates }}
      DatePartitionEnabled: {{ DatePartitionEnabled }}
      DatePartitionSequence: "{{ DatePartitionSequence }}"
      DatePartitionDelimiter: "{{ DatePartitionDelimiter }}"
      UseCsvNoSupValue: {{ UseCsvNoSupValue }}
      CsvNoSupValue: "{{ CsvNoSupValue }}"
      PreserveTransactions: {{ PreserveTransactions }}
      CdcPath: "{{ CdcPath }}"
      UseTaskStartTimeForFullLoadTimestamp: {{ UseTaskStartTimeForFullLoadTimestamp }}
      CannedAclForObjects: "{{ CannedAclForObjects }}"
      AddColumnName: {{ AddColumnName }}
      CdcMaxBatchInterval: {{ CdcMaxBatchInterval }}
      CdcMinFileSize: {{ CdcMinFileSize }}
      CsvNullValue: "{{ CsvNullValue }}"
      IgnoreHeaderRows: {{ IgnoreHeaderRows }}
      MaxFileSize: {{ MaxFileSize }}
      Rfc4180: {{ Rfc4180 }}
      DatePartitionTimezone: "{{ DatePartitionTimezone }}"
      AddTrailingPaddingCharacter: {{ AddTrailingPaddingCharacter }}
      ExpectedBucketOwner: "{{ ExpectedBucketOwner }}"
      GlueCatalogGeneration: {{ GlueCatalogGeneration }}
  - name: DmsTransferSettings
    description: |
      The settings in JSON format for the DMS transfer type of source endpoint. Possible settings include the following: ServiceAccessRoleArn - The Amazon Resource Name (ARN) used by the service access IAM role. The role must allow the iam:PassRole action. BucketName - The name of the S3 bucket to use. Shorthand syntax for these settings is as follows: ServiceAccessRoleArn=string,BucketName=string JSON syntax for these settings is as follows: { "ServiceAccessRoleArn": "string", "BucketName": "string", }
    value:
      ServiceAccessRoleArn: "{{ ServiceAccessRoleArn }}"
      BucketName: "{{ BucketName }}"
  - name: MongoDbSettings
    description: |
      Settings in JSON format for the source MongoDB endpoint. For more information about the available settings, see Endpoint configuration settings when using MongoDB as a source for Database Migration Service in the Database Migration Service User Guide.
    value:
      Username: "{{ Username }}"
      Password: "{{ Password }}"
      ServerName: "{{ ServerName }}"
      Port: {{ Port }}
      DatabaseName: "{{ DatabaseName }}"
      AuthType: "{{ AuthType }}"
      AuthMechanism: "{{ AuthMechanism }}"
      NestingLevel: "{{ NestingLevel }}"
      ExtractDocId: "{{ ExtractDocId }}"
      DocsToInvestigate: "{{ DocsToInvestigate }}"
      AuthSource: "{{ AuthSource }}"
      KmsKeyId: "{{ KmsKeyId }}"
      SecretsManagerAccessRoleArn: "{{ SecretsManagerAccessRoleArn }}"
      SecretsManagerSecretId: "{{ SecretsManagerSecretId }}"
      UseUpdateLookUp: {{ UseUpdateLookUp }}
      ReplicateShardCollections: {{ ReplicateShardCollections }}
  - name: KinesisSettings
    description: |
      Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For more information about the available settings, see Using object mapping to migrate data to a Kinesis data stream in the Database Migration Service User Guide.
    value:
      StreamArn: "{{ StreamArn }}"
      MessageFormat: "{{ MessageFormat }}"
      ServiceAccessRoleArn: "{{ ServiceAccessRoleArn }}"
      IncludeTransactionDetails: {{ IncludeTransactionDetails }}
      IncludePartitionValue: {{ IncludePartitionValue }}
      PartitionIncludeSchemaTable: {{ PartitionIncludeSchemaTable }}
      IncludeTableAlterOperations: {{ IncludeTableAlterOperations }}
      IncludeControlDetails: {{ IncludeControlDetails }}
      IncludeNullAndEmpty: {{ IncludeNullAndEmpty }}
      NoHexPrefix: {{ NoHexPrefix }}
      UseLargeIntegerValue: {{ UseLargeIntegerValue }}
  - name: KafkaSettings
    description: |
      Settings in JSON format for the target Apache Kafka endpoint. For more information about the available settings, see Using object mapping to migrate data to a Kafka topic in the Database Migration Service User Guide.
    value:
      Broker: "{{ Broker }}"
      Topic: "{{ Topic }}"
      MessageFormat: "{{ MessageFormat }}"
      IncludeTransactionDetails: {{ IncludeTransactionDetails }}
      IncludePartitionValue: {{ IncludePartitionValue }}
      PartitionIncludeSchemaTable: {{ PartitionIncludeSchemaTable }}
      IncludeTableAlterOperations: {{ IncludeTableAlterOperations }}
      IncludeControlDetails: {{ IncludeControlDetails }}
      MessageMaxBytes: {{ MessageMaxBytes }}
      IncludeNullAndEmpty: {{ IncludeNullAndEmpty }}
      SecurityProtocol: "{{ SecurityProtocol }}"
      SslClientCertificateArn: "{{ SslClientCertificateArn }}"
      SslClientKeyArn: "{{ SslClientKeyArn }}"
      SslClientKeyPassword: "{{ SslClientKeyPassword }}"
      SslCaCertificateArn: "{{ SslCaCertificateArn }}"
      SaslUsername: "{{ SaslUsername }}"
      SaslPassword: "{{ SaslPassword }}"
      NoHexPrefix: {{ NoHexPrefix }}
      SaslMechanism: "{{ SaslMechanism }}"
      SslEndpointIdentificationAlgorithm: "{{ SslEndpointIdentificationAlgorithm }}"
      UseLargeIntegerValue: {{ UseLargeIntegerValue }}
  - name: ElasticsearchSettings
    description: |
      Settings in JSON format for the target OpenSearch endpoint. For more information about the available settings, see Extra Connection Attributes When Using OpenSearch as a Target for DMS in the Database Migration Service User Guide.
    value:
      ServiceAccessRoleArn: "{{ ServiceAccessRoleArn }}"
      EndpointUri: "{{ EndpointUri }}"
      FullLoadErrorPercentage: {{ FullLoadErrorPercentage }}
      ErrorRetryDuration: {{ ErrorRetryDuration }}
      UseNewMappingType: {{ UseNewMappingType }}
  - name: NeptuneSettings
    description: |
      Settings in JSON format for the target Amazon Neptune endpoint. For more information about the available settings, see Specifying graph-mapping rules using Gremlin and R2RML for Amazon Neptune as a target in the Database Migration Service User Guide.
    value:
      ServiceAccessRoleArn: "{{ ServiceAccessRoleArn }}"
      S3BucketName: "{{ S3BucketName }}"
      S3BucketFolder: "{{ S3BucketFolder }}"
      ErrorRetryDuration: {{ ErrorRetryDuration }}
      MaxFileSize: {{ MaxFileSize }}
      MaxRetryCount: {{ MaxRetryCount }}
      IamAuthEnabled: {{ IamAuthEnabled }}
  - name: RedshiftSettings
    description: |
      Provides information that defines an Amazon Redshift endpoint.
    value:
      AcceptAnyDate: {{ AcceptAnyDate }}
      AfterConnectScript: "{{ AfterConnectScript }}"
      BucketFolder: "{{ BucketFolder }}"
      BucketName: "{{ BucketName }}"
      CaseSensitiveNames: {{ CaseSensitiveNames }}
      CompUpdate: {{ CompUpdate }}
      ConnectionTimeout: {{ ConnectionTimeout }}
      DatabaseName: "{{ DatabaseName }}"
      DateFormat: "{{ DateFormat }}"
      EmptyAsNull: {{ EmptyAsNull }}
      EncryptionMode: "{{ EncryptionMode }}"
      ExplicitIds: {{ ExplicitIds }}
      FileTransferUploadStreams: {{ FileTransferUploadStreams }}
      LoadTimeout: {{ LoadTimeout }}
      MaxFileSize: {{ MaxFileSize }}
      Password: "{{ Password }}"
      Port: {{ Port }}
      RemoveQuotes: {{ RemoveQuotes }}
      ReplaceInvalidChars: "{{ ReplaceInvalidChars }}"
      ReplaceChars: "{{ ReplaceChars }}"
      ServerName: "{{ ServerName }}"
      ServiceAccessRoleArn: "{{ ServiceAccessRoleArn }}"
      ServerSideEncryptionKmsKeyId: "{{ ServerSideEncryptionKmsKeyId }}"
      TimeFormat: "{{ TimeFormat }}"
      TrimBlanks: {{ TrimBlanks }}
      TruncateColumns: {{ TruncateColumns }}
      Username: "{{ Username }}"
      WriteBufferSize: {{ WriteBufferSize }}
      SecretsManagerAccessRoleArn: "{{ SecretsManagerAccessRoleArn }}"
      SecretsManagerSecretId: "{{ SecretsManagerSecretId }}"
      MapBooleanAsBoolean: {{ MapBooleanAsBoolean }}
  - name: PostgreSQLSettings
    description: |
      Settings in JSON format for the source and target PostgreSQL endpoint. For information about other available settings, see Extra connection attributes when using PostgreSQL as a source for DMS and Extra connection attributes when using PostgreSQL as a target for DMS in the Database Migration Service User Guide.
    value:
      AfterConnectScript: "{{ AfterConnectScript }}"
      CaptureDdls: {{ CaptureDdls }}
      MaxFileSize: {{ MaxFileSize }}
      DatabaseName: "{{ DatabaseName }}"
      DdlArtifactsSchema: "{{ DdlArtifactsSchema }}"
      ExecuteTimeout: {{ ExecuteTimeout }}
      FailTasksOnLobTruncation: {{ FailTasksOnLobTruncation }}
      HeartbeatEnable: {{ HeartbeatEnable }}
      HeartbeatSchema: "{{ HeartbeatSchema }}"
      HeartbeatFrequency: {{ HeartbeatFrequency }}
      Password: "{{ Password }}"
      Port: {{ Port }}
      ServerName: "{{ ServerName }}"
      Username: "{{ Username }}"
      SlotName: "{{ SlotName }}"
      PluginName: "{{ PluginName }}"
      SecretsManagerAccessRoleArn: "{{ SecretsManagerAccessRoleArn }}"
      SecretsManagerSecretId: "{{ SecretsManagerSecretId }}"
      TrimSpaceInChar: {{ TrimSpaceInChar }}
      MapBooleanAsBoolean: {{ MapBooleanAsBoolean }}
      MapJsonbAsClob: {{ MapJsonbAsClob }}
      MapLongVarcharAs: "{{ MapLongVarcharAs }}"
      DatabaseMode: "{{ DatabaseMode }}"
      BabelfishDatabaseName: "{{ BabelfishDatabaseName }}"
      DisableUnicodeSourceFilter: {{ DisableUnicodeSourceFilter }}
      ServiceAccessRoleArn: "{{ ServiceAccessRoleArn }}"
      AuthenticationMethod: "{{ AuthenticationMethod }}"
  - name: MySQLSettings
    description: |
      Settings in JSON format for the source and target MySQL endpoint. For information about other available settings, see Extra connection attributes when using MySQL as a source for DMS and Extra connection attributes when using a MySQL-compatible database as a target for DMS in the Database Migration Service User Guide.
    value:
      AfterConnectScript: "{{ AfterConnectScript }}"
      CleanSourceMetadataOnMismatch: {{ CleanSourceMetadataOnMismatch }}
      DatabaseName: "{{ DatabaseName }}"
      EventsPollInterval: {{ EventsPollInterval }}
      TargetDbType: "{{ TargetDbType }}"
      MaxFileSize: {{ MaxFileSize }}
      ParallelLoadThreads: {{ ParallelLoadThreads }}
      Password: "{{ Password }}"
      Port: {{ Port }}
      ServerName: "{{ ServerName }}"
      ServerTimezone: "{{ ServerTimezone }}"
      Username: "{{ Username }}"
      SecretsManagerAccessRoleArn: "{{ SecretsManagerAccessRoleArn }}"
      SecretsManagerSecretId: "{{ SecretsManagerSecretId }}"
      ExecuteTimeout: {{ ExecuteTimeout }}
      ServiceAccessRoleArn: "{{ ServiceAccessRoleArn }}"
      AuthenticationMethod: "{{ AuthenticationMethod }}"
  - name: OracleSettings
    description: |
      Settings in JSON format for the source and target Oracle endpoint. For information about other available settings, see Extra connection attributes when using Oracle as a source for DMS and Extra connection attributes when using Oracle as a target for DMS in the Database Migration Service User Guide.
    value:
      AddSupplementalLogging: {{ AddSupplementalLogging }}
      ArchivedLogDestId: {{ ArchivedLogDestId }}
      AdditionalArchivedLogDestId: {{ AdditionalArchivedLogDestId }}
      ExtraArchivedLogDestIds:
        - {{ ExtraArchivedLogDestIds }}
      AllowSelectNestedTables: {{ AllowSelectNestedTables }}
      ParallelAsmReadThreads: {{ ParallelAsmReadThreads }}
      ReadAheadBlocks: {{ ReadAheadBlocks }}
      AccessAlternateDirectly: {{ AccessAlternateDirectly }}
      UseAlternateFolderForOnline: {{ UseAlternateFolderForOnline }}
      OraclePathPrefix: "{{ OraclePathPrefix }}"
      UsePathPrefix: "{{ UsePathPrefix }}"
      ReplacePathPrefix: {{ ReplacePathPrefix }}
      EnableHomogenousTablespace: {{ EnableHomogenousTablespace }}
      DirectPathNoLog: {{ DirectPathNoLog }}
      ArchivedLogsOnly: {{ ArchivedLogsOnly }}
      AsmPassword: "{{ AsmPassword }}"
      AsmServer: "{{ AsmServer }}"
      AsmUser: "{{ AsmUser }}"
      CharLengthSemantics: "{{ CharLengthSemantics }}"
      DatabaseName: "{{ DatabaseName }}"
      DirectPathParallelLoad: {{ DirectPathParallelLoad }}
      FailTasksOnLobTruncation: {{ FailTasksOnLobTruncation }}
      NumberDatatypeScale: {{ NumberDatatypeScale }}
      Password: "{{ Password }}"
      Port: {{ Port }}
      ReadTableSpaceName: {{ ReadTableSpaceName }}
      RetryInterval: {{ RetryInterval }}
      SecurityDbEncryption: "{{ SecurityDbEncryption }}"
      SecurityDbEncryptionName: "{{ SecurityDbEncryptionName }}"
      ServerName: "{{ ServerName }}"
      SpatialDataOptionToGeoJsonFunctionName: "{{ SpatialDataOptionToGeoJsonFunctionName }}"
      StandbyDelayTime: {{ StandbyDelayTime }}
      Username: "{{ Username }}"
      UseBFile: {{ UseBFile }}
      UseDirectPathFullLoad: {{ UseDirectPathFullLoad }}
      UseLogminerReader: {{ UseLogminerReader }}
      SecretsManagerAccessRoleArn: "{{ SecretsManagerAccessRoleArn }}"
      SecretsManagerSecretId: "{{ SecretsManagerSecretId }}"
      SecretsManagerOracleAsmAccessRoleArn: "{{ SecretsManagerOracleAsmAccessRoleArn }}"
      SecretsManagerOracleAsmSecretId: "{{ SecretsManagerOracleAsmSecretId }}"
      TrimSpaceInChar: {{ TrimSpaceInChar }}
      ConvertTimestampWithZoneToUTC: {{ ConvertTimestampWithZoneToUTC }}
      OpenTransactionWindow: {{ OpenTransactionWindow }}
      AuthenticationMethod: "{{ AuthenticationMethod }}"
  - name: SybaseSettings
    description: |
      Settings in JSON format for the source and target SAP ASE endpoint. For information about other available settings, see Extra connection attributes when using SAP ASE as a source for DMS and Extra connection attributes when using SAP ASE as a target for DMS in the Database Migration Service User Guide.
    value:
      DatabaseName: "{{ DatabaseName }}"
      Password: "{{ Password }}"
      Port: {{ Port }}
      ServerName: "{{ ServerName }}"
      Username: "{{ Username }}"
      SecretsManagerAccessRoleArn: "{{ SecretsManagerAccessRoleArn }}"
      SecretsManagerSecretId: "{{ SecretsManagerSecretId }}"
  - name: MicrosoftSQLServerSettings
    description: |
      Settings in JSON format for the source and target Microsoft SQL Server endpoint. For information about other available settings, see Extra connection attributes when using SQL Server as a source for DMS and Extra connection attributes when using SQL Server as a target for DMS in the Database Migration Service User Guide.
    value:
      Port: {{ Port }}
      BcpPacketSize: {{ BcpPacketSize }}
      DatabaseName: "{{ DatabaseName }}"
      ControlTablesFileGroup: "{{ ControlTablesFileGroup }}"
      Password: "{{ Password }}"
      QuerySingleAlwaysOnNode: {{ QuerySingleAlwaysOnNode }}
      ReadBackupOnly: {{ ReadBackupOnly }}
      SafeguardPolicy: "{{ SafeguardPolicy }}"
      ServerName: "{{ ServerName }}"
      Username: "{{ Username }}"
      UseBcpFullLoad: {{ UseBcpFullLoad }}
      UseThirdPartyBackupDevice: {{ UseThirdPartyBackupDevice }}
      SecretsManagerAccessRoleArn: "{{ SecretsManagerAccessRoleArn }}"
      SecretsManagerSecretId: "{{ SecretsManagerSecretId }}"
      TrimSpaceInChar: {{ TrimSpaceInChar }}
      TlogAccessMode: "{{ TlogAccessMode }}"
      ForceLobLookup: {{ ForceLobLookup }}
      AuthenticationMethod: "{{ AuthenticationMethod }}"
  - name: IBMDb2Settings
    description: |
      Settings in JSON format for the source IBM Db2 LUW endpoint. For information about other available settings, see Extra connection attributes when using Db2 LUW as a source for DMS in the Database Migration Service User Guide.
    value:
      DatabaseName: "{{ DatabaseName }}"
      Password: "{{ Password }}"
      Port: {{ Port }}
      ServerName: "{{ ServerName }}"
      SetDataCaptureChanges: {{ SetDataCaptureChanges }}
      CurrentLsn: "{{ CurrentLsn }}"
      MaxKBytesPerRead: {{ MaxKBytesPerRead }}
      Username: "{{ Username }}"
      SecretsManagerAccessRoleArn: "{{ SecretsManagerAccessRoleArn }}"
      SecretsManagerSecretId: "{{ SecretsManagerSecretId }}"
      LoadTimeout: {{ LoadTimeout }}
      WriteBufferSize: {{ WriteBufferSize }}
      MaxFileSize: {{ MaxFileSize }}
      KeepCsvFiles: {{ KeepCsvFiles }}
  - name: ResourceIdentifier
    value: "{{ ResourceIdentifier }}"
    description: |
      A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as Example-App-ARN1. For example, this value might result in the EndpointArn value arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1. If you don't specify a ResourceIdentifier value, DMS generates a default identifier value for the end of EndpointArn.
  - name: DocDbSettings
    description: |
      Provides information that defines a DocumentDB endpoint.
    value:
      Username: "{{ Username }}"
      Password: "{{ Password }}"
      ServerName: "{{ ServerName }}"
      Port: {{ Port }}
      DatabaseName: "{{ DatabaseName }}"
      NestingLevel: "{{ NestingLevel }}"
      ExtractDocId: {{ ExtractDocId }}
      DocsToInvestigate: {{ DocsToInvestigate }}
      KmsKeyId: "{{ KmsKeyId }}"
      SecretsManagerAccessRoleArn: "{{ SecretsManagerAccessRoleArn }}"
      SecretsManagerSecretId: "{{ SecretsManagerSecretId }}"
      UseUpdateLookUp: {{ UseUpdateLookUp }}
      ReplicateShardCollections: {{ ReplicateShardCollections }}
  - name: RedisSettings
    description: |
      Settings in JSON format for the target Redis endpoint.
    value:
      ServerName: "{{ ServerName }}"
      Port: {{ Port }}
      SslSecurityProtocol: "{{ SslSecurityProtocol }}"
      AuthType: "{{ AuthType }}"
      AuthUserName: "{{ AuthUserName }}"
      AuthPassword: "{{ AuthPassword }}"
      SslCaCertificateArn: "{{ SslCaCertificateArn }}"
  - name: GcpMySQLSettings
    description: |
      Settings in JSON format for the source GCP MySQL endpoint.
    value:
      AfterConnectScript: "{{ AfterConnectScript }}"
      CleanSourceMetadataOnMismatch: {{ CleanSourceMetadataOnMismatch }}
      DatabaseName: "{{ DatabaseName }}"
      EventsPollInterval: {{ EventsPollInterval }}
      TargetDbType: "{{ TargetDbType }}"
      MaxFileSize: {{ MaxFileSize }}
      ParallelLoadThreads: {{ ParallelLoadThreads }}
      Password: "{{ Password }}"
      Port: {{ Port }}
      ServerName: "{{ ServerName }}"
      ServerTimezone: "{{ ServerTimezone }}"
      Username: "{{ Username }}"
      SecretsManagerAccessRoleArn: "{{ SecretsManagerAccessRoleArn }}"
      SecretsManagerSecretId: "{{ SecretsManagerSecretId }}"
  - name: TimestreamSettings
    description: |
      Settings in JSON format for the target Amazon Timestream endpoint.
    value:
      DatabaseName: "{{ DatabaseName }}"
      MemoryDuration: {{ MemoryDuration }}
      MagneticDuration: {{ MagneticDuration }}
      CdcInsertsAndUpdates: {{ CdcInsertsAndUpdates }}
      EnableMagneticStoreWrites: {{ EnableMagneticStoreWrites }}
`})})]}),"\n",(0,r.jsxs)(t.h2,{id:"update-examples",children:[(0,r.jsx)(t.code,{children:"UPDATE"})," examples"]}),"\n",(0,r.jsx)(d.A,{defaultValue:"modify_endpoint",values:[{label:"modify_endpoint",value:"modify_endpoint"}],children:(0,r.jsxs)(c.A,{value:"modify_endpoint",children:[(0,r.jsx)(t.p,{children:"Modifies the specified endpoint. For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on the ModifyEndpoint API call. Specifying DatabaseName when you modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.dms.endpoints\nSET \nEndpointArn = '{{ EndpointArn }}',\nEndpointIdentifier = '{{ EndpointIdentifier }}',\nEndpointType = '{{ EndpointType }}',\nEngineName = '{{ EngineName }}',\nUsername = '{{ Username }}',\nPassword = '{{ Password }}',\nServerName = '{{ ServerName }}',\nPort = {{ Port }},\nDatabaseName = '{{ DatabaseName }}',\nExtraConnectionAttributes = '{{ ExtraConnectionAttributes }}',\nCertificateArn = '{{ CertificateArn }}',\nSslMode = '{{ SslMode }}',\nServiceAccessRoleArn = '{{ ServiceAccessRoleArn }}',\nExternalTableDefinition = '{{ ExternalTableDefinition }}',\nDynamoDbSettings = '{{ DynamoDbSettings }}',\nS3Settings = '{{ S3Settings }}',\nDmsTransferSettings = '{{ DmsTransferSettings }}',\nMongoDbSettings = '{{ MongoDbSettings }}',\nKinesisSettings = '{{ KinesisSettings }}',\nKafkaSettings = '{{ KafkaSettings }}',\nElasticsearchSettings = '{{ ElasticsearchSettings }}',\nNeptuneSettings = '{{ NeptuneSettings }}',\nRedshiftSettings = '{{ RedshiftSettings }}',\nPostgreSQLSettings = '{{ PostgreSQLSettings }}',\nMySQLSettings = '{{ MySQLSettings }}',\nOracleSettings = '{{ OracleSettings }}',\nSybaseSettings = '{{ SybaseSettings }}',\nMicrosoftSQLServerSettings = '{{ MicrosoftSQLServerSettings }}',\nIBMDb2Settings = '{{ IBMDb2Settings }}',\nDocDbSettings = '{{ DocDbSettings }}',\nRedisSettings = '{{ RedisSettings }}',\nExactSettings = {{ ExactSettings }},\nGcpMySQLSettings = '{{ GcpMySQLSettings }}',\nTimestreamSettings = '{{ TimestreamSettings }}'\nWHERE \nregion = '{{ region }}' --required\nAND EndpointArn = '{{ EndpointArn }}' --required\nRETURNING\nEndpoint;\n"})})]})}),"\n",(0,r.jsxs)(t.h2,{id:"delete-examples",children:[(0,r.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,r.jsx)(d.A,{defaultValue:"delete_endpoint",values:[{label:"delete_endpoint",value:"delete_endpoint"}],children:(0,r.jsxs)(c.A,{value:"delete_endpoint",children:[(0,r.jsx)(t.p,{children:"Deletes the specified endpoint. All tasks associated with the endpoint must be deleted before you can delete the endpoint."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.dms.endpoints\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function p(e={}){let{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}}}]);