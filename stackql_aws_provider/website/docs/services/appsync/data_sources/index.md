--- 
title: data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sources
  - appsync
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appsync.data_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_source"
    values={[
        { label: 'get_data_source', value: 'get_data_source' },
        { label: 'list_data_sources', value: 'list_data_sources' }
    ]}
>
<TabItem value="get_data_source">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the data source. (pattern: &lt;code&gt;&#91;_A-Za-z&#93;&#91;_0-9A-Za-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceArn" /></td>
    <td><code>string</code></td>
    <td>The data source Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="dynamodbConfig" /></td>
    <td><code>object</code></td>
    <td>Describes an Amazon DynamoDB data source configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="elasticsearchConfig" /></td>
    <td><code>object</code></td>
    <td>Describes an OpenSearch data source configuration. As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This configuration is deprecated. For new data sources, use OpenSearchServiceDataSourceConfig to specify an OpenSearch data source.</td>
</tr>
<tr>
    <td><CopyableCode code="eventBridgeConfig" /></td>
    <td><code>object</code></td>
    <td>Describes an Amazon EventBridge bus data source configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="httpConfig" /></td>
    <td><code>object</code></td>
    <td>Describes an HTTP data source configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="lambdaConfig" /></td>
    <td><code>object</code></td>
    <td>Describes an Lambda data source configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="metricsConfig" /></td>
    <td><code>string</code></td>
    <td>Enables or disables enhanced data source metrics for specified data sources. Note that metricsConfig won't be used unless the dataSourceLevelMetricsBehavior value is set to PER_DATA_SOURCE_METRICS. If the dataSourceLevelMetricsBehavior is set to FULL_REQUEST_DATA_SOURCE_METRICS instead, metricsConfig will be ignored. However, you can still set its value. metricsConfig can be ENABLED or DISABLED. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="openSearchServiceConfig" /></td>
    <td><code>object</code></td>
    <td>Describes an OpenSearch data source configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="relationalDatabaseConfig" /></td>
    <td><code>object</code></td>
    <td>Describes a relational database data source configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Identity and Access Management (IAM) service role Amazon Resource Name (ARN) for the data source. The system assumes this role when accessing the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the data source. AWS_LAMBDA: The data source is an Lambda function. AMAZON_DYNAMODB: The data source is an Amazon DynamoDB table. AMAZON_ELASTICSEARCH: The data source is an Amazon OpenSearch Service domain. AMAZON_OPENSEARCH_SERVICE: The data source is an Amazon OpenSearch Service domain. AMAZON_EVENTBRIDGE: The data source is an Amazon EventBridge configuration. AMAZON_BEDROCK_RUNTIME: The data source is the Amazon Bedrock runtime. NONE: There is no data source. Use this type when you want to invoke a GraphQL operation without connecting to a data source, such as when you're performing data transformation with resolvers or invoking a subscription from a mutation. HTTP: The data source is an HTTP endpoint. RELATIONAL_DATABASE: The data source is a relational database. (AWS_LAMBDA, AMAZON_DYNAMODB, AMAZON_ELASTICSEARCH, NONE, HTTP, RELATIONAL_DATABASE, AMAZON_OPENSEARCH_SERVICE, AMAZON_EVENTBRIDGE, AMAZON_BEDROCK_RUNTIME)</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the data source. (pattern: &lt;code&gt;&#91;_A-Za-z&#93;&#91;_0-9A-Za-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataSourceArn" /></td>
    <td><code>string</code></td>
    <td>The data source Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="dynamodbConfig" /></td>
    <td><code>object</code></td>
    <td>Describes an Amazon DynamoDB data source configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="elasticsearchConfig" /></td>
    <td><code>object</code></td>
    <td>Describes an OpenSearch data source configuration. As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This configuration is deprecated. For new data sources, use OpenSearchServiceDataSourceConfig to specify an OpenSearch data source.</td>
</tr>
<tr>
    <td><CopyableCode code="eventBridgeConfig" /></td>
    <td><code>object</code></td>
    <td>Describes an Amazon EventBridge bus data source configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="httpConfig" /></td>
    <td><code>object</code></td>
    <td>Describes an HTTP data source configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="lambdaConfig" /></td>
    <td><code>object</code></td>
    <td>Describes an Lambda data source configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="metricsConfig" /></td>
    <td><code>string</code></td>
    <td>Enables or disables enhanced data source metrics for specified data sources. Note that metricsConfig won't be used unless the dataSourceLevelMetricsBehavior value is set to PER_DATA_SOURCE_METRICS. If the dataSourceLevelMetricsBehavior is set to FULL_REQUEST_DATA_SOURCE_METRICS instead, metricsConfig will be ignored. However, you can still set its value. metricsConfig can be ENABLED or DISABLED. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="openSearchServiceConfig" /></td>
    <td><code>object</code></td>
    <td>Describes an OpenSearch data source configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="relationalDatabaseConfig" /></td>
    <td><code>object</code></td>
    <td>Describes a relational database data source configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Identity and Access Management (IAM) service role Amazon Resource Name (ARN) for the data source. The system assumes this role when accessing the data source.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the data source. AWS_LAMBDA: The data source is an Lambda function. AMAZON_DYNAMODB: The data source is an Amazon DynamoDB table. AMAZON_ELASTICSEARCH: The data source is an Amazon OpenSearch Service domain. AMAZON_OPENSEARCH_SERVICE: The data source is an Amazon OpenSearch Service domain. AMAZON_EVENTBRIDGE: The data source is an Amazon EventBridge configuration. AMAZON_BEDROCK_RUNTIME: The data source is the Amazon Bedrock runtime. NONE: There is no data source. Use this type when you want to invoke a GraphQL operation without connecting to a data source, such as when you're performing data transformation with resolvers or invoking a subscription from a mutation. HTTP: The data source is an HTTP endpoint. RELATIONAL_DATABASE: The data source is a relational database. (AWS_LAMBDA, AMAZON_DYNAMODB, AMAZON_ELASTICSEARCH, NONE, HTTP, RELATIONAL_DATABASE, AMAZON_OPENSEARCH_SERVICE, AMAZON_EVENTBRIDGE, AMAZON_BEDROCK_RUNTIME)</td>
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
    <td><a href="#get_data_source"><CopyableCode code="get_data_source" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a DataSource object.</td>
</tr>
<tr>
    <td><a href="#list_data_sources"><CopyableCode code="list_data_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the data sources for a given API.</td>
</tr>
<tr>
    <td><a href="#create_data_source"><CopyableCode code="create_data_source" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Creates a DataSource object.</td>
</tr>
<tr>
    <td><a href="#update_data_source"><CopyableCode code="update_data_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Updates a DataSource object.</td>
</tr>
<tr>
    <td><a href="#delete_data_source"><CopyableCode code="delete_data_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a DataSource object.</td>
</tr>
<tr>
    <td><a href="#start_data_source_introspection"><CopyableCode code="start_data_source_introspection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new introspection. Returns the introspectionId of the new introspection after its creation.</td>
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
<tr id="parameter-api_id">
    <td><CopyableCode code="api_id" /></td>
    <td><code>string</code></td>
    <td>The API ID.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the data source.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that you want the request to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_source"
    values={[
        { label: 'get_data_source', value: 'get_data_source' },
        { label: 'list_data_sources', value: 'list_data_sources' }
    ]}
>
<TabItem value="get_data_source">

Retrieves a DataSource object.

```sql
SELECT
name,
dataSourceArn,
description,
dynamodbConfig,
elasticsearchConfig,
eventBridgeConfig,
httpConfig,
lambdaConfig,
metricsConfig,
openSearchServiceConfig,
relationalDatabaseConfig,
serviceRoleArn,
type_
FROM aws.appsync.data_sources
WHERE api_id = '{{ api_id }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_sources">

Lists the data sources for a given API.

```sql
SELECT
name,
dataSourceArn,
description,
dynamodbConfig,
elasticsearchConfig,
eventBridgeConfig,
httpConfig,
lambdaConfig,
metricsConfig,
openSearchServiceConfig,
relationalDatabaseConfig,
serviceRoleArn,
type_
FROM aws.appsync.data_sources
WHERE api_id = '{{ api_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
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

Creates a DataSource object.

```sql
INSERT INTO aws.appsync.data_sources (
name,
description,
type,
serviceRoleArn,
dynamodbConfig,
lambdaConfig,
elasticsearchConfig,
openSearchServiceConfig,
httpConfig,
relationalDatabaseConfig,
eventBridgeConfig,
metricsConfig,
api_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ type }}' /* required */,
'{{ serviceRoleArn }}',
'{{ dynamodbConfig }}',
'{{ lambdaConfig }}',
'{{ elasticsearchConfig }}',
'{{ openSearchServiceConfig }}',
'{{ httpConfig }}',
'{{ relationalDatabaseConfig }}',
'{{ eventBridgeConfig }}',
'{{ metricsConfig }}',
'{{ api_id }}',
'{{ region }}'
RETURNING
dataSource
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_sources
  props:
    - name: api_id
      value: "{{ api_id }}"
      description: Required parameter for the data_sources resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_sources resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['AWS_LAMBDA', 'AMAZON_DYNAMODB', 'AMAZON_ELASTICSEARCH', 'NONE', 'HTTP', 'RELATIONAL_DATABASE', 'AMAZON_OPENSEARCH_SERVICE', 'AMAZON_EVENTBRIDGE', 'AMAZON_BEDROCK_RUNTIME']
    - name: serviceRoleArn
      value: "{{ serviceRoleArn }}"
    - name: dynamodbConfig
      description: |
        Describes an Amazon DynamoDB data source configuration.
      value:
        tableName: "{{ tableName }}"
        awsRegion: "{{ awsRegion }}"
        useCallerCredentials: {{ useCallerCredentials }}
        deltaSyncConfig:
          baseTableTTL: {{ baseTableTTL }}
          deltaSyncTableName: "{{ deltaSyncTableName }}"
          deltaSyncTableTTL: {{ deltaSyncTableTTL }}
        versioned: {{ versioned }}
    - name: lambdaConfig
      description: |
        Describes an Lambda data source configuration.
      value:
        lambdaFunctionArn: "{{ lambdaFunctionArn }}"
    - name: elasticsearchConfig
      description: |
        Describes an OpenSearch data source configuration. As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This configuration is deprecated. For new data sources, use OpenSearchServiceDataSourceConfig to specify an OpenSearch data source.
      value:
        endpoint: "{{ endpoint }}"
        awsRegion: "{{ awsRegion }}"
    - name: openSearchServiceConfig
      description: |
        Describes an OpenSearch data source configuration.
      value:
        endpoint: "{{ endpoint }}"
        awsRegion: "{{ awsRegion }}"
    - name: httpConfig
      description: |
        Describes an HTTP data source configuration.
      value:
        endpoint: "{{ endpoint }}"
        authorizationConfig:
          authorizationType: "{{ authorizationType }}"
          awsIamConfig:
            signingRegion: "{{ signingRegion }}"
            signingServiceName: "{{ signingServiceName }}"
    - name: relationalDatabaseConfig
      description: |
        Describes a relational database data source configuration.
      value:
        relationalDatabaseSourceType: "{{ relationalDatabaseSourceType }}"
        rdsHttpEndpointConfig:
          awsRegion: "{{ awsRegion }}"
          dbClusterIdentifier: "{{ dbClusterIdentifier }}"
          databaseName: "{{ databaseName }}"
          schema: "{{ schema }}"
          awsSecretStoreArn: "{{ awsSecretStoreArn }}"
    - name: eventBridgeConfig
      description: |
        Describes an Amazon EventBridge bus data source configuration.
      value:
        eventBusArn: "{{ eventBusArn }}"
    - name: metricsConfig
      value: "{{ metricsConfig }}"
      valid_values: ['ENABLED', 'DISABLED']
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

Updates a DataSource object.

```sql
UPDATE aws.appsync.data_sources
SET 
description = '{{ description }}',
type = '{{ type }}',
serviceRoleArn = '{{ serviceRoleArn }}',
dynamodbConfig = '{{ dynamodbConfig }}',
lambdaConfig = '{{ lambdaConfig }}',
elasticsearchConfig = '{{ elasticsearchConfig }}',
openSearchServiceConfig = '{{ openSearchServiceConfig }}',
httpConfig = '{{ httpConfig }}',
relationalDatabaseConfig = '{{ relationalDatabaseConfig }}',
eventBridgeConfig = '{{ eventBridgeConfig }}',
metricsConfig = '{{ metricsConfig }}'
WHERE 
api_id = '{{ api_id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND type = '{{ type }}' --required
RETURNING
dataSource;
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

Deletes a DataSource object.

```sql
DELETE FROM aws.appsync.data_sources
WHERE api_id = '{{ api_id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_data_source_introspection"
    values={[
        { label: 'start_data_source_introspection', value: 'start_data_source_introspection' }
    ]}
>
<TabItem value="start_data_source_introspection">

Creates a new introspection. Returns the introspectionId of the new introspection after its creation.

```sql
EXEC aws.appsync.data_sources.start_data_source_introspection 
@region='{{ region }}' --required 
@@json=
'{
"rdsDataApiConfig": "{{ rdsDataApiConfig }}"
}'
;
```
</TabItem>
</Tabs>
