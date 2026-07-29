--- 
title: resolvers
hide_title: false
hide_table_of_contents: false
keywords:
  - resolvers
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

Creates, updates, deletes, gets or lists a <code>resolvers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resolvers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appsync.resolvers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resolver"
    values={[
        { label: 'get_resolver', value: 'get_resolver' },
        { label: 'list_resolvers', value: 'list_resolvers' }
    ]}
>
<TabItem value="get_resolver">

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
    <td><CopyableCode code="caching_config" /></td>
    <td><code>object</code></td>
    <td>The caching configuration for a resolver that has caching activated.</td>
</tr>
<tr>
    <td><CopyableCode code="code" /></td>
    <td><code>string</code></td>
    <td>The resolver code that contains the request and response functions. When code is used, the runtime is required. The runtime value must be APPSYNC_JS.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_name" /></td>
    <td><code>string</code></td>
    <td>The resolver data source name. (pattern: &lt;code&gt;&#91;_A-Za-z&#93;&#91;_0-9A-Za-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="field_name" /></td>
    <td><code>string</code></td>
    <td>The resolver field name. (pattern: &lt;code&gt;&#91;_A-Za-z&#93;&#91;_0-9A-Za-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The resolver type. UNIT: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source. PIPELINE: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of Function objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources. (UNIT, PIPELINE)</td>
</tr>
<tr>
    <td><CopyableCode code="max_batch_size" /></td>
    <td><code>integer</code></td>
    <td>The maximum batching size for a resolver.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics_config" /></td>
    <td><code>string</code></td>
    <td>Enables or disables enhanced resolver metrics for specified resolvers. Note that metricsConfig won't be used unless the resolverLevelMetricsBehavior value is set to PER_RESOLVER_METRICS. If the resolverLevelMetricsBehavior is set to FULL_REQUEST_RESOLVER_METRICS instead, metricsConfig will be ignored. However, you can still set its value. metricsConfig can be ENABLED or DISABLED. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_config" /></td>
    <td><code>object</code></td>
    <td>The pipeline configuration for a resolver of kind PIPELINE.</td>
</tr>
<tr>
    <td><CopyableCode code="request_mapping_template" /></td>
    <td><code>string</code></td>
    <td>The request mapping template. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resolver_arn" /></td>
    <td><code>string</code></td>
    <td>The resolver Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="response_mapping_template" /></td>
    <td><code>string</code></td>
    <td>The response mapping template. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime" /></td>
    <td><code>object</code></td>
    <td>Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.</td>
</tr>
<tr>
    <td><CopyableCode code="sync_config" /></td>
    <td><code>object</code></td>
    <td>Describes a Sync configuration for a resolver. Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</td>
</tr>
<tr>
    <td><CopyableCode code="type_name" /></td>
    <td><code>string</code></td>
    <td>The resolver type name. (pattern: &lt;code&gt;&#91;_A-Za-z&#93;&#91;_0-9A-Za-z&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resolvers">

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
    <td><CopyableCode code="caching_config" /></td>
    <td><code>object</code></td>
    <td>The caching configuration for a resolver that has caching activated.</td>
</tr>
<tr>
    <td><CopyableCode code="code" /></td>
    <td><code>string</code></td>
    <td>The resolver code that contains the request and response functions. When code is used, the runtime is required. The runtime value must be APPSYNC_JS.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_name" /></td>
    <td><code>string</code></td>
    <td>The resolver data source name. (pattern: &lt;code&gt;&#91;_A-Za-z&#93;&#91;_0-9A-Za-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="field_name" /></td>
    <td><code>string</code></td>
    <td>The resolver field name. (pattern: &lt;code&gt;&#91;_A-Za-z&#93;&#91;_0-9A-Za-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>The resolver type. UNIT: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source. PIPELINE: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of Function objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources. (UNIT, PIPELINE)</td>
</tr>
<tr>
    <td><CopyableCode code="max_batch_size" /></td>
    <td><code>integer</code></td>
    <td>The maximum batching size for a resolver.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics_config" /></td>
    <td><code>string</code></td>
    <td>Enables or disables enhanced resolver metrics for specified resolvers. Note that metricsConfig won't be used unless the resolverLevelMetricsBehavior value is set to PER_RESOLVER_METRICS. If the resolverLevelMetricsBehavior is set to FULL_REQUEST_RESOLVER_METRICS instead, metricsConfig will be ignored. However, you can still set its value. metricsConfig can be ENABLED or DISABLED. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_config" /></td>
    <td><code>object</code></td>
    <td>The pipeline configuration for a resolver of kind PIPELINE.</td>
</tr>
<tr>
    <td><CopyableCode code="request_mapping_template" /></td>
    <td><code>string</code></td>
    <td>The request mapping template. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resolver_arn" /></td>
    <td><code>string</code></td>
    <td>The resolver Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="response_mapping_template" /></td>
    <td><code>string</code></td>
    <td>The response mapping template. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime" /></td>
    <td><code>object</code></td>
    <td>Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.</td>
</tr>
<tr>
    <td><CopyableCode code="sync_config" /></td>
    <td><code>object</code></td>
    <td>Describes a Sync configuration for a resolver. Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</td>
</tr>
<tr>
    <td><CopyableCode code="type_name" /></td>
    <td><code>string</code></td>
    <td>The resolver type name. (pattern: &lt;code&gt;&#91;_A-Za-z&#93;&#91;_0-9A-Za-z&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_resolver"><CopyableCode code="get_resolver" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-type_name"><code>type_name</code></a>, <a href="#parameter-field_name"><code>field_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a Resolver object.</td>
</tr>
<tr>
    <td><a href="#list_resolvers"><CopyableCode code="list_resolvers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-type_name"><code>type_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the resolvers for a given API and type.</td>
</tr>
<tr>
    <td><a href="#create_resolver"><CopyableCode code="create_resolver" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-type_name"><code>type_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-fieldName"><code>fieldName</code></a></td>
    <td></td>
    <td>Creates a Resolver object. A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.</td>
</tr>
<tr>
    <td><a href="#update_resolver"><CopyableCode code="update_resolver" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-type_name"><code>type_name</code></a>, <a href="#parameter-field_name"><code>field_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a Resolver object.</td>
</tr>
<tr>
    <td><a href="#delete_resolver"><CopyableCode code="delete_resolver" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-type_name"><code>type_name</code></a>, <a href="#parameter-field_name"><code>field_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Resolver object.</td>
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
<tr id="parameter-field_name">
    <td><CopyableCode code="field_name" /></td>
    <td><code>string</code></td>
    <td>The resolver field name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-type_name">
    <td><CopyableCode code="type_name" /></td>
    <td><code>string</code></td>
    <td>The name of the resolver type.</td>
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
    defaultValue="get_resolver"
    values={[
        { label: 'get_resolver', value: 'get_resolver' },
        { label: 'list_resolvers', value: 'list_resolvers' }
    ]}
>
<TabItem value="get_resolver">

Retrieves a Resolver object.

```sql
SELECT
caching_config,
code,
data_source_name,
field_name,
kind,
max_batch_size,
metrics_config,
pipeline_config,
request_mapping_template,
resolver_arn,
response_mapping_template,
runtime,
sync_config,
type_name
FROM aws.appsync.resolvers
WHERE api_id = '{{ api_id }}' -- required
AND type_name = '{{ type_name }}' -- required
AND field_name = '{{ field_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resolvers">

Lists the resolvers for a given API and type.

```sql
SELECT
caching_config,
code,
data_source_name,
field_name,
kind,
max_batch_size,
metrics_config,
pipeline_config,
request_mapping_template,
resolver_arn,
response_mapping_template,
runtime,
sync_config,
type_name
FROM aws.appsync.resolvers
WHERE api_id = '{{ api_id }}' -- required
AND type_name = '{{ type_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resolver"
    values={[
        { label: 'create_resolver', value: 'create_resolver' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resolver">

Creates a Resolver object. A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.

```sql
INSERT INTO aws.appsync.resolvers (
fieldName,
dataSourceName,
requestMappingTemplate,
responseMappingTemplate,
kind,
pipelineConfig,
syncConfig,
cachingConfig,
maxBatchSize,
runtime,
code,
metricsConfig,
api_id,
type_name,
region
)
SELECT 
'{{ fieldName }}' /* required */,
'{{ dataSourceName }}',
'{{ requestMappingTemplate }}',
'{{ responseMappingTemplate }}',
'{{ kind }}',
'{{ pipelineConfig }}',
'{{ syncConfig }}',
'{{ cachingConfig }}',
{{ maxBatchSize }},
'{{ runtime }}',
'{{ code }}',
'{{ metricsConfig }}',
'{{ api_id }}',
'{{ type_name }}',
'{{ region }}'
RETURNING
resolver
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resolvers
  props:
    - name: api_id
      value: "{{ api_id }}"
      description: Required parameter for the resolvers resource.
    - name: type_name
      value: "{{ type_name }}"
      description: Required parameter for the resolvers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resolvers resource.
    - name: fieldName
      value: "{{ fieldName }}"
    - name: dataSourceName
      value: "{{ dataSourceName }}"
    - name: requestMappingTemplate
      value: "{{ requestMappingTemplate }}"
    - name: responseMappingTemplate
      value: "{{ responseMappingTemplate }}"
    - name: kind
      value: "{{ kind }}"
      valid_values: ['UNIT', 'PIPELINE']
    - name: pipelineConfig
      description: |
        The pipeline configuration for a resolver of kind PIPELINE.
      value:
        functions:
          - "{{ functions }}"
    - name: syncConfig
      description: |
        Describes a Sync configuration for a resolver. Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.
      value:
        conflictHandler: "{{ conflictHandler }}"
        conflictDetection: "{{ conflictDetection }}"
        lambdaConflictHandlerConfig:
          lambdaConflictHandlerArn: "{{ lambdaConflictHandlerArn }}"
    - name: cachingConfig
      description: |
        The caching configuration for a resolver that has caching activated.
      value:
        ttl: {{ ttl }}
        cachingKeys:
          - "{{ cachingKeys }}"
    - name: maxBatchSize
      value: {{ maxBatchSize }}
    - name: runtime
      description: |
        Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
      value:
        name: "{{ name }}"
        runtimeVersion: "{{ runtimeVersion }}"
    - name: code
      value: "{{ code }}"
    - name: metricsConfig
      value: "{{ metricsConfig }}"
      valid_values: ['ENABLED', 'DISABLED']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_resolver"
    values={[
        { label: 'update_resolver', value: 'update_resolver' }
    ]}
>
<TabItem value="update_resolver">

Updates a Resolver object.

```sql
UPDATE aws.appsync.resolvers
SET 
dataSourceName = '{{ dataSourceName }}',
requestMappingTemplate = '{{ requestMappingTemplate }}',
responseMappingTemplate = '{{ responseMappingTemplate }}',
kind = '{{ kind }}',
pipelineConfig = '{{ pipelineConfig }}',
syncConfig = '{{ syncConfig }}',
cachingConfig = '{{ cachingConfig }}',
maxBatchSize = {{ maxBatchSize }},
runtime = '{{ runtime }}',
code = '{{ code }}',
metricsConfig = '{{ metricsConfig }}'
WHERE 
api_id = '{{ api_id }}' --required
AND type_name = '{{ type_name }}' --required
AND field_name = '{{ field_name }}' --required
AND region = '{{ region }}' --required
RETURNING
resolver;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resolver"
    values={[
        { label: 'delete_resolver', value: 'delete_resolver' }
    ]}
>
<TabItem value="delete_resolver">

Deletes a Resolver object.

```sql
DELETE FROM aws.appsync.resolvers
WHERE api_id = '{{ api_id }}' --required
AND type_name = '{{ type_name }}' --required
AND field_name = '{{ field_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
