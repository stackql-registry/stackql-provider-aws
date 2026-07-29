--- 
title: resolvers_by_functions
hide_title: false
hide_table_of_contents: false
keywords:
  - resolvers_by_functions
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

Creates, updates, deletes, gets or lists a <code>resolvers_by_functions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resolvers_by_functions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appsync.resolvers_by_functions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resolvers_by_function"
    values={[
        { label: 'list_resolvers_by_function', value: 'list_resolvers_by_function' }
    ]}
>
<TabItem value="list_resolvers_by_function">

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
    <td><a href="#list_resolvers_by_function"><CopyableCode code="list_resolvers_by_function" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-function_id"><code>function_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>List the resolvers that are associated with a specific function.</td>
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
<tr id="parameter-function_id">
    <td><CopyableCode code="function_id" /></td>
    <td><code>string</code></td>
    <td>The function ID.</td>
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
    defaultValue="list_resolvers_by_function"
    values={[
        { label: 'list_resolvers_by_function', value: 'list_resolvers_by_function' }
    ]}
>
<TabItem value="list_resolvers_by_function">

List the resolvers that are associated with a specific function.

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
FROM aws.appsync.resolvers_by_functions
WHERE api_id = '{{ api_id }}' -- required
AND function_id = '{{ function_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
