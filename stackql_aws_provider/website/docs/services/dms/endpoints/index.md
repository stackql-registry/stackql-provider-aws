--- 
title: endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoints
  - dms
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_endpoints"
    values={[
        { label: 'describe_endpoints', value: 'describe_endpoints' }
    ]}
>
<TabItem value="describe_endpoints">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="certificate_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) used for SSL connection to the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the database at the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="dms_transfer_settings" /></td>
    <td><code>object</code></td>
    <td>The settings for the DMS Transfer type source. For more information, see the DmsTransferSettings structure.</td>
</tr>
<tr>
    <td><CopyableCode code="doc_db_settings" /></td>
    <td><code>object</code></td>
    <td>Provides information that defines a DocumentDB endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="dynamo_db_settings" /></td>
    <td><code>object</code></td>
    <td>The settings for the DynamoDB target endpoint. For more information, see the DynamoDBSettings structure.</td>
</tr>
<tr>
    <td><CopyableCode code="elasticsearch_settings" /></td>
    <td><code>object</code></td>
    <td>The settings for the OpenSearch source endpoint. For more information, see the ElasticsearchSettings structure.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_identifier" /></td>
    <td><code>string</code></td>
    <td>The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_type" /></td>
    <td><code>string</code></td>
    <td>The type of endpoint. Valid values are source and target. (source, target)</td>
</tr>
<tr>
    <td><CopyableCode code="engine_display_name" /></td>
    <td><code>string</code></td>
    <td>The expanded name for the engine name. For example, if the EngineName parameter is "aurora", this value would be "Amazon Aurora MySQL".</td>
</tr>
<tr>
    <td><CopyableCode code="engine_name" /></td>
    <td><code>string</code></td>
    <td>The database engine name. Valid values, depending on the EndpointType, include "mysql", "oracle", "postgres", "mariadb", "aurora", "aurora-postgresql", "redshift", "redshift-serverless", "s3", "db2", "db2-zos", "azuredb", "sybase", "dynamodb", "mongodb", "kinesis", "kafka", "elasticsearch", "documentdb", "sqlserver", "neptune", and "babelfish".</td>
</tr>
<tr>
    <td><CopyableCode code="external_id" /></td>
    <td><code>string</code></td>
    <td>Value returned by a call to CreateEndpoint that can be used for cross-account validation. Use it on a subsequent call to CreateEndpoint to create the endpoint with a cross-account.</td>
</tr>
<tr>
    <td><CopyableCode code="external_table_definition" /></td>
    <td><code>string</code></td>
    <td>The external table definition.</td>
</tr>
<tr>
    <td><CopyableCode code="extra_connection_attributes" /></td>
    <td><code>string</code></td>
    <td>Additional connection attributes used to connect to the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="gcp_my_sql_settings" /></td>
    <td><code>object</code></td>
    <td>Settings in JSON format for the source GCP MySQL endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="ibm_db_2_settings" /></td>
    <td><code>object</code></td>
    <td>The settings for the IBM Db2 LUW source endpoint. For more information, see the IBMDb2Settings structure.</td>
</tr>
<tr>
    <td><CopyableCode code="is_read_only" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the endpoint is read-only. When set to true, this endpoint is managed by DMS as part of a zero-ETL integration and cannot be modified or deleted directly. You can only modify or delete read-only endpoints through their associated zero-ETL integration.</td>
</tr>
<tr>
    <td><CopyableCode code="kafka_settings" /></td>
    <td><code>object</code></td>
    <td>The settings for the Apache Kafka target endpoint. For more information, see the KafkaSettings structure.</td>
</tr>
<tr>
    <td><CopyableCode code="kinesis_settings" /></td>
    <td><code>object</code></td>
    <td>The settings for the Amazon Kinesis target endpoint. For more information, see the KinesisSettings structure.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>An KMS key identifier that is used to encrypt the connection parameters for the endpoint. If you don't specify a value for the KmsKeyId parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="lakehouse_settings" /></td>
    <td><code>object</code></td>
    <td>Settings in JSON format for the target Lakehouse endpoint. This parameter applies to endpoints that are automatically created by DMS for a Lakehouse data warehouse as part of a zero-ETL integration.</td>
</tr>
<tr>
    <td><CopyableCode code="microsoft_sql_server_settings" /></td>
    <td><code>object</code></td>
    <td>The settings for the Microsoft SQL Server source and target endpoint. For more information, see the MicrosoftSQLServerSettings structure.</td>
</tr>
<tr>
    <td><CopyableCode code="mongo_db_settings" /></td>
    <td><code>object</code></td>
    <td>The settings for the MongoDB source endpoint. For more information, see the MongoDbSettings structure.</td>
</tr>
<tr>
    <td><CopyableCode code="my_sql_settings" /></td>
    <td><code>object</code></td>
    <td>The settings for the MySQL source and target endpoint. For more information, see the MySQLSettings structure.</td>
</tr>
<tr>
    <td><CopyableCode code="neptune_settings" /></td>
    <td><code>object</code></td>
    <td>The settings for the Amazon Neptune target endpoint. For more information, see the NeptuneSettings structure.</td>
</tr>
<tr>
    <td><CopyableCode code="oracle_settings" /></td>
    <td><code>object</code></td>
    <td>The settings for the Oracle source and target endpoint. For more information, see the OracleSettings structure.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port value used to access the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="postgre_sql_settings" /></td>
    <td><code>object</code></td>
    <td>The settings for the PostgreSQL source and target endpoint. For more information, see the PostgreSQLSettings structure.</td>
</tr>
<tr>
    <td><CopyableCode code="redis_settings" /></td>
    <td><code>object</code></td>
    <td>The settings for the Redis target endpoint. For more information, see the RedisSettings structure.</td>
</tr>
<tr>
    <td><CopyableCode code="redshift_settings" /></td>
    <td><code>object</code></td>
    <td>Provides information that defines an Amazon Redshift endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_settings" /></td>
    <td><code>object</code></td>
    <td>The settings for the S3 target endpoint. For more information, see the S3Settings structure.</td>
</tr>
<tr>
    <td><CopyableCode code="server_name" /></td>
    <td><code>string</code></td>
    <td>The name of the server at the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="service_access_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the iam:PassRole action.</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_mode" /></td>
    <td><code>string</code></td>
    <td>The SSL mode used to connect to the endpoint. The default value is none. (none, require, verify-ca, verify-full)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="sybase_settings" /></td>
    <td><code>object</code></td>
    <td>The settings for the SAP ASE source and target endpoint. For more information, see the SybaseSettings structure.</td>
</tr>
<tr>
    <td><CopyableCode code="timestream_settings" /></td>
    <td><code>object</code></td>
    <td>The settings for the Amazon Timestream target endpoint. For more information, see the TimestreamSettings structure.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The user name used to connect to the endpoint.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_endpoints"><CopyableCode code="describe_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the endpoints for your account in the current region.</td>
</tr>
<tr>
    <td><a href="#create_endpoint"><CopyableCode code="create_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointIdentifier"><code>EndpointIdentifier</code></a>, <a href="#parameter-EndpointType"><code>EndpointType</code></a>, <a href="#parameter-EngineName"><code>EngineName</code></a></td>
    <td></td>
    <td>Creates an endpoint using the provided settings. For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on the CreateEndpoint API call. Specifying DatabaseName when you create a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</td>
</tr>
<tr>
    <td><a href="#modify_endpoint"><CopyableCode code="modify_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointArn"><code>EndpointArn</code></a></td>
    <td></td>
    <td>Modifies the specified endpoint. For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on the ModifyEndpoint API call. Specifying DatabaseName when you modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</td>
</tr>
<tr>
    <td><a href="#delete_endpoint"><CopyableCode code="delete_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified endpoint. All tasks associated with the endpoint must be deleted before you can delete the endpoint.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_endpoints"
    values={[
        { label: 'describe_endpoints', value: 'describe_endpoints' }
    ]}
>
<TabItem value="describe_endpoints">

Returns information about the endpoints for your account in the current region.

```sql
SELECT
certificate_arn,
database_name,
dms_transfer_settings,
doc_db_settings,
dynamo_db_settings,
elasticsearch_settings,
endpoint_arn,
endpoint_identifier,
endpoint_type,
engine_display_name,
engine_name,
external_id,
external_table_definition,
extra_connection_attributes,
gcp_my_sql_settings,
ibm_db_2_settings,
is_read_only,
kafka_settings,
kinesis_settings,
kms_key_id,
lakehouse_settings,
microsoft_sql_server_settings,
mongo_db_settings,
my_sql_settings,
neptune_settings,
oracle_settings,
port,
postgre_sql_settings,
redis_settings,
redshift_settings,
s3_settings,
server_name,
service_access_role_arn,
ssl_mode,
status,
sybase_settings,
timestream_settings,
username
FROM aws.dms.endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_endpoint"
    values={[
        { label: 'create_endpoint', value: 'create_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_endpoint">

Creates an endpoint using the provided settings. For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on the CreateEndpoint API call. Specifying DatabaseName when you create a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.

```sql
INSERT INTO aws.dms.endpoints (
EndpointIdentifier,
EndpointType,
EngineName,
Username,
Password,
ServerName,
Port,
DatabaseName,
ExtraConnectionAttributes,
KmsKeyId,
Tags,
CertificateArn,
SslMode,
ServiceAccessRoleArn,
ExternalTableDefinition,
DynamoDbSettings,
S3Settings,
DmsTransferSettings,
MongoDbSettings,
KinesisSettings,
KafkaSettings,
ElasticsearchSettings,
NeptuneSettings,
RedshiftSettings,
PostgreSQLSettings,
MySQLSettings,
OracleSettings,
SybaseSettings,
MicrosoftSQLServerSettings,
IBMDb2Settings,
ResourceIdentifier,
DocDbSettings,
RedisSettings,
GcpMySQLSettings,
TimestreamSettings,
region
)
SELECT 
'{{ EndpointIdentifier }}' /* required */,
'{{ EndpointType }}' /* required */,
'{{ EngineName }}' /* required */,
'{{ Username }}',
'{{ Password }}',
'{{ ServerName }}',
{{ Port }},
'{{ DatabaseName }}',
'{{ ExtraConnectionAttributes }}',
'{{ KmsKeyId }}',
'{{ Tags }}',
'{{ CertificateArn }}',
'{{ SslMode }}',
'{{ ServiceAccessRoleArn }}',
'{{ ExternalTableDefinition }}',
'{{ DynamoDbSettings }}',
'{{ S3Settings }}',
'{{ DmsTransferSettings }}',
'{{ MongoDbSettings }}',
'{{ KinesisSettings }}',
'{{ KafkaSettings }}',
'{{ ElasticsearchSettings }}',
'{{ NeptuneSettings }}',
'{{ RedshiftSettings }}',
'{{ PostgreSQLSettings }}',
'{{ MySQLSettings }}',
'{{ OracleSettings }}',
'{{ SybaseSettings }}',
'{{ MicrosoftSQLServerSettings }}',
'{{ IBMDb2Settings }}',
'{{ ResourceIdentifier }}',
'{{ DocDbSettings }}',
'{{ RedisSettings }}',
'{{ GcpMySQLSettings }}',
'{{ TimestreamSettings }}',
'{{ region }}'
RETURNING
endpoint
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
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
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_endpoint"
    values={[
        { label: 'modify_endpoint', value: 'modify_endpoint' }
    ]}
>
<TabItem value="modify_endpoint">

Modifies the specified endpoint. For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on the ModifyEndpoint API call. Specifying DatabaseName when you modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.

```sql
UPDATE aws.dms.endpoints
SET 
EndpointArn = '{{ EndpointArn }}',
EndpointIdentifier = '{{ EndpointIdentifier }}',
EndpointType = '{{ EndpointType }}',
EngineName = '{{ EngineName }}',
Username = '{{ Username }}',
Password = '{{ Password }}',
ServerName = '{{ ServerName }}',
Port = {{ Port }},
DatabaseName = '{{ DatabaseName }}',
ExtraConnectionAttributes = '{{ ExtraConnectionAttributes }}',
CertificateArn = '{{ CertificateArn }}',
SslMode = '{{ SslMode }}',
ServiceAccessRoleArn = '{{ ServiceAccessRoleArn }}',
ExternalTableDefinition = '{{ ExternalTableDefinition }}',
DynamoDbSettings = '{{ DynamoDbSettings }}',
S3Settings = '{{ S3Settings }}',
DmsTransferSettings = '{{ DmsTransferSettings }}',
MongoDbSettings = '{{ MongoDbSettings }}',
KinesisSettings = '{{ KinesisSettings }}',
KafkaSettings = '{{ KafkaSettings }}',
ElasticsearchSettings = '{{ ElasticsearchSettings }}',
NeptuneSettings = '{{ NeptuneSettings }}',
RedshiftSettings = '{{ RedshiftSettings }}',
PostgreSQLSettings = '{{ PostgreSQLSettings }}',
MySQLSettings = '{{ MySQLSettings }}',
OracleSettings = '{{ OracleSettings }}',
SybaseSettings = '{{ SybaseSettings }}',
MicrosoftSQLServerSettings = '{{ MicrosoftSQLServerSettings }}',
IBMDb2Settings = '{{ IBMDb2Settings }}',
DocDbSettings = '{{ DocDbSettings }}',
RedisSettings = '{{ RedisSettings }}',
ExactSettings = {{ ExactSettings }},
GcpMySQLSettings = '{{ GcpMySQLSettings }}',
TimestreamSettings = '{{ TimestreamSettings }}'
WHERE 
region = '{{ region }}' --required
AND EndpointArn = '{{ EndpointArn }}' --required
RETURNING
endpoint;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_endpoint"
    values={[
        { label: 'delete_endpoint', value: 'delete_endpoint' }
    ]}
>
<TabItem value="delete_endpoint">

Deletes the specified endpoint. All tasks associated with the endpoint must be deleted before you can delete the endpoint.

```sql
DELETE FROM aws.dms.endpoints
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
