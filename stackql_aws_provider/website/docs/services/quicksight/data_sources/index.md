--- 
title: data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sources
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>data_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.data_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_data_source"
    values={[
        { label: 'describe_data_source', value: 'describe_data_source' },
        { label: 'search_data_sources', value: 'search_data_sources' },
        { label: 'list_data_sources', value: 'list_data_sources' }
    ]}
>
<TabItem value="describe_data_source">

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
    <td><CopyableCode code="data_source" /></td>
    <td><code>object</code></td>
    <td>The structure of a data source.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_data_sources">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The arn of the datasource.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the data source was created. This value is expressed in MM-DD-YYYY HH:MM:SS format.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the data source was last updated. This value is expressed in MM-DD-YYYY HH:MM:SS format.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the data source. (ADOBE_ANALYTICS, AMAZON_ELASTICSEARCH, ATHENA, AURORA, AURORA_POSTGRESQL, AWS_IOT_ANALYTICS, GITHUB, JIRA, MARIADB, MYSQL, ORACLE, POSTGRESQL, PRESTO, REDSHIFT, S3, S3_TABLES, SALESFORCE, SERVICENOW, SNOWFLAKE, SPARK, SQLSERVER, TERADATA, TWITTER, TIMESTREAM, AMAZON_OPENSEARCH, EXASOL, DATABRICKS, STARBURST, TRINO, BIGQUERY, GOOGLESHEETS, GOOGLE_DRIVE, CONFLUENCE, SHAREPOINT, ONE_DRIVE, WEB_CRAWLER, S3_KNOWLEDGE_BASE, QBUSINESS)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_sources">

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
    <td><CopyableCode code="alternate_data_source_parameters" /></td>
    <td><code>array</code></td>
    <td>A set of alternate data source parameters that you want to share for the credentials stored with this data source. The credentials are applied in tandem with the data source parameters when you copy a data source by using a create or update request. The API operation compares the DataSourceParameters structure that's in the request with the structures in the AlternateDataSourceParameters allow list. If the structures are an exact match, the request is allowed to use the credentials from this existing data source. If the AlternateDataSourceParameters list is null, the Credentials originally used with this DataSourceParameters are automatically allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that this data source was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_parameters" /></td>
    <td><code>object</code></td>
    <td>The parameters that Quick Sight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.</td>
</tr>
<tr>
    <td><CopyableCode code="error_info" /></td>
    <td><code>object</code></td>
    <td>Error information from the last update or the creation of the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that this data source was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A display name for the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="secret_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager. (pattern: &lt;code&gt;^arn:&#91;-a-z0-9&#93;*:secretsmanager:&#91;-a-z0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:secret:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_properties" /></td>
    <td><code>object</code></td>
    <td>Secure Socket Layer (SSL) properties that apply when Quick Sight connects to your underlying data source.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The HTTP status of the request. (CREATION_IN_PROGRESS, CREATION_SUCCESSFUL, CREATION_FAILED, UPDATE_IN_PROGRESS, UPDATE_SUCCESSFUL, UPDATE_FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the data source. This type indicates which database engine the data source connects to. (ADOBE_ANALYTICS, AMAZON_ELASTICSEARCH, ATHENA, AURORA, AURORA_POSTGRESQL, AWS_IOT_ANALYTICS, GITHUB, JIRA, MARIADB, MYSQL, ORACLE, POSTGRESQL, PRESTO, REDSHIFT, S3, S3_TABLES, SALESFORCE, SERVICENOW, SNOWFLAKE, SPARK, SQLSERVER, TERADATA, TWITTER, TIMESTREAM, AMAZON_OPENSEARCH, EXASOL, DATABRICKS, STARBURST, TRINO, BIGQUERY, GOOGLESHEETS, GOOGLE_DRIVE, CONFLUENCE, SHAREPOINT, ONE_DRIVE, WEB_CRAWLER, S3_KNOWLEDGE_BASE, QBUSINESS)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_connection_properties" /></td>
    <td><code>object</code></td>
    <td>VPC connection properties.</td>
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
    <td><a href="#describe_data_source"><CopyableCode code="describe_data_source" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a data source.</td>
</tr>
<tr>
    <td><a href="#search_data_sources"><CopyableCode code="search_data_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use the SearchDataSources operation to search for data sources that belong to an account.</td>
</tr>
<tr>
    <td><a href="#list_data_sources"><CopyableCode code="list_data_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists data sources in current Amazon Web Services Region that belong to this Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_data_source"><CopyableCode code="create_data_source" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataSourceId"><code>DataSourceId</code></a></td>
    <td></td>
    <td>Creates a data source.</td>
</tr>
<tr>
    <td><a href="#update_data_source"><CopyableCode code="update_data_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a data source.</td>
</tr>
<tr>
    <td><a href="#delete_data_source"><CopyableCode code="delete_data_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the data source permanently. This operation breaks all the datasets that reference the deleted data source.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID.</td>
</tr>
<tr id="parameter-data_source_id">
    <td><CopyableCode code="data_source_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_data_source"
    values={[
        { label: 'describe_data_source', value: 'describe_data_source' },
        { label: 'search_data_sources', value: 'search_data_sources' },
        { label: 'list_data_sources', value: 'list_data_sources' }
    ]}
>
<TabItem value="describe_data_source">

Describes a data source.

```sql
SELECT
data_source,
request_id,
status
FROM aws.quicksight.data_sources
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND data_source_id = '{{ data_source_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_data_sources">

Use the SearchDataSources operation to search for data sources that belong to an account.

```sql
SELECT
arn,
created_time,
data_source_id,
last_updated_time,
name,
type
FROM aws.quicksight.data_sources
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_sources">

Lists data sources in current Amazon Web Services Region that belong to this Amazon Web Services account.

```sql
SELECT
alternate_data_source_parameters,
arn,
created_time,
data_source_id,
data_source_parameters,
error_info,
last_updated_time,
name,
secret_arn,
ssl_properties,
status,
type,
vpc_connection_properties
FROM aws.quicksight.data_sources
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_source"
    values={[
        { label: 'create_data_source', value: 'create_data_source' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_source">

Creates a data source.

```sql
INSERT INTO aws.quicksight.data_sources (
DataSourceId,
Name,
Type,
DataSourceParameters,
Credentials,
Permissions,
VpcConnectionProperties,
SslProperties,
Tags,
FolderArns,
aws_account_id,
region
)
SELECT 
'{{ DataSourceId }}' /* required */,
'{{ Name }}',
'{{ Type }}',
'{{ DataSourceParameters }}',
'{{ Credentials }}',
'{{ Permissions }}',
'{{ VpcConnectionProperties }}',
'{{ SslProperties }}',
'{{ Tags }}',
'{{ FolderArns }}',
'{{ aws_account_id }}',
'{{ region }}'
RETURNING
arn,
creation_status,
data_source_id,
request_id,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
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
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_source"
    values={[
        { label: 'update_data_source', value: 'update_data_source' }
    ]}
>
<TabItem value="update_data_source">

Updates a data source.

```sql
UPDATE aws.quicksight.data_sources
SET 
Name = '{{ Name }}',
DataSourceParameters = '{{ DataSourceParameters }}',
Credentials = '{{ Credentials }}',
VpcConnectionProperties = '{{ VpcConnectionProperties }}',
SslProperties = '{{ SslProperties }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND data_source_id = '{{ data_source_id }}' --required
AND region = '{{ region }}' --required
RETURNING
arn,
data_source_id,
request_id,
status,
update_status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_source"
    values={[
        { label: 'delete_data_source', value: 'delete_data_source' }
    ]}
>
<TabItem value="delete_data_source">

Deletes the data source permanently. This operation breaks all the datasets that reference the deleted data source.

```sql
DELETE FROM aws.quicksight.data_sources
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND data_source_id = '{{ data_source_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
