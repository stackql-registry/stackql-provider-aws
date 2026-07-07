--- 
title: api_caches
hide_title: false
hide_table_of_contents: false
keywords:
  - api_caches
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

Creates, updates, deletes, gets or lists an <code>api_caches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="api_caches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appsync.api_caches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_api_cache"
    values={[
        { label: 'get_api_cache', value: 'get_api_cache' }
    ]}
>
<TabItem value="get_api_cache">

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
    <td><CopyableCode code="apiCachingBehavior" /></td>
    <td><code>string</code></td>
    <td>Caching behavior. FULL_REQUEST_CACHING: All requests from the same user are cached. Individual resolvers are automatically cached. All API calls will try to return responses from the cache. PER_RESOLVER_CACHING: Individual resolvers that you specify are cached. OPERATION_LEVEL_CACHING: Full requests are cached together and returned without executing resolvers. (FULL_REQUEST_CACHING, PER_RESOLVER_CACHING, OPERATION_LEVEL_CACHING)</td>
</tr>
<tr>
    <td><CopyableCode code="atRestEncryptionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>At-rest encryption flag for cache. You cannot update this setting after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="healthMetricsConfig" /></td>
    <td><code>string</code></td>
    <td>Controls how cache health metrics will be emitted to CloudWatch. Cache health metrics include: NetworkBandwidthOutAllowanceExceeded: The network packets dropped because the throughput exceeded the aggregated bandwidth limit. This is useful for diagnosing bottlenecks in a cache configuration. EngineCPUUtilization: The CPU utilization (percentage) allocated to the Redis process. This is useful for diagnosing bottlenecks in a cache configuration. Metrics will be recorded by API ID. You can set the value to ENABLED or DISABLED. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The cache instance status. AVAILABLE: The instance is available for use. CREATING: The instance is currently creating. DELETING: The instance is currently deleting. MODIFYING: The instance is currently modifying. FAILED: The instance has failed creation. (AVAILABLE, CREATING, DELETING, MODIFYING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="transitEncryptionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Transit encryption flag when connecting to cache. You cannot update this setting after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer (int64)</code></td>
    <td>TTL in seconds for cache entries. Valid values are 1–3,600 seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The cache instance type. Valid values are SMALL MEDIUM LARGE XLARGE LARGE_2X LARGE_4X LARGE_8X (not available in all regions) LARGE_12X Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used. The following legacy instance types are available, but their use is discouraged: T2_SMALL: A t2.small instance type. T2_MEDIUM: A t2.medium instance type. R4_LARGE: A r4.large instance type. R4_XLARGE: A r4.xlarge instance type. R4_2XLARGE: A r4.2xlarge instance type. R4_4XLARGE: A r4.4xlarge instance type. R4_8XLARGE: A r4.8xlarge instance type. (T2_SMALL, T2_MEDIUM, R4_LARGE, R4_XLARGE, R4_2XLARGE, R4_4XLARGE, R4_8XLARGE, SMALL, MEDIUM, LARGE, XLARGE, LARGE_2X, LARGE_4X, LARGE_8X, LARGE_12X)</td>
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
    <td><a href="#get_api_cache"><CopyableCode code="get_api_cache" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves an ApiCache object.</td>
</tr>
<tr>
    <td><a href="#create_api_cache"><CopyableCode code="create_api_cache" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ttl"><code>ttl</code></a>, <a href="#parameter-apiCachingBehavior"><code>apiCachingBehavior</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Creates a cache for the GraphQL API.</td>
</tr>
<tr>
    <td><a href="#update_api_cache"><CopyableCode code="update_api_cache" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ttl"><code>ttl</code></a>, <a href="#parameter-apiCachingBehavior"><code>apiCachingBehavior</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Updates the cache for the GraphQL API.</td>
</tr>
<tr>
    <td><a href="#delete_api_cache"><CopyableCode code="delete_api_cache" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an ApiCache object.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_api_cache"
    values={[
        { label: 'get_api_cache', value: 'get_api_cache' }
    ]}
>
<TabItem value="get_api_cache">

Retrieves an ApiCache object.

```sql
SELECT
apiCachingBehavior,
atRestEncryptionEnabled,
healthMetricsConfig,
status,
transitEncryptionEnabled,
ttl,
type_
FROM aws.appsync.api_caches
WHERE api_id = '{{ api_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_api_cache"
    values={[
        { label: 'create_api_cache', value: 'create_api_cache' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_api_cache">

Creates a cache for the GraphQL API.

```sql
INSERT INTO aws.appsync.api_caches (
ttl,
transitEncryptionEnabled,
atRestEncryptionEnabled,
apiCachingBehavior,
type,
healthMetricsConfig,
api_id,
region
)
SELECT 
{{ ttl }} /* required */,
{{ transitEncryptionEnabled }},
{{ atRestEncryptionEnabled }},
'{{ apiCachingBehavior }}' /* required */,
'{{ type }}' /* required */,
'{{ healthMetricsConfig }}',
'{{ api_id }}',
'{{ region }}'
RETURNING
apiCache
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: api_caches
  props:
    - name: api_id
      value: "{{ api_id }}"
      description: Required parameter for the api_caches resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the api_caches resource.
    - name: ttl
      value: {{ ttl }}
    - name: transitEncryptionEnabled
      value: {{ transitEncryptionEnabled }}
    - name: atRestEncryptionEnabled
      value: {{ atRestEncryptionEnabled }}
    - name: apiCachingBehavior
      value: "{{ apiCachingBehavior }}"
      valid_values: ['FULL_REQUEST_CACHING', 'PER_RESOLVER_CACHING', 'OPERATION_LEVEL_CACHING']
    - name: type
      value: "{{ type }}"
      valid_values: ['T2_SMALL', 'T2_MEDIUM', 'R4_LARGE', 'R4_XLARGE', 'R4_2XLARGE', 'R4_4XLARGE', 'R4_8XLARGE', 'SMALL', 'MEDIUM', 'LARGE', 'XLARGE', 'LARGE_2X', 'LARGE_4X', 'LARGE_8X', 'LARGE_12X']
    - name: healthMetricsConfig
      value: "{{ healthMetricsConfig }}"
      valid_values: ['ENABLED', 'DISABLED']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_api_cache"
    values={[
        { label: 'update_api_cache', value: 'update_api_cache' }
    ]}
>
<TabItem value="update_api_cache">

Updates the cache for the GraphQL API.

```sql
UPDATE aws.appsync.api_caches
SET 
ttl = {{ ttl }},
apiCachingBehavior = '{{ apiCachingBehavior }}',
type = '{{ type }}',
healthMetricsConfig = '{{ healthMetricsConfig }}'
WHERE 
api_id = '{{ api_id }}' --required
AND region = '{{ region }}' --required
AND ttl = '{{ ttl }}' --required
AND apiCachingBehavior = '{{ apiCachingBehavior }}' --required
AND type = '{{ type }}' --required
RETURNING
apiCache;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_api_cache"
    values={[
        { label: 'delete_api_cache', value: 'delete_api_cache' }
    ]}
>
<TabItem value="delete_api_cache">

Deletes an ApiCache object.

```sql
DELETE FROM aws.appsync.api_caches
WHERE api_id = '{{ api_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
