--- 
title: gateway_rate_limits
hide_title: false
hide_table_of_contents: false
keywords:
  - gateway_rate_limits
  - bedrock_agentcore_control
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

Creates, updates, deletes, gets or lists a <code>gateway_rate_limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gateway_rate_limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.gateway_rate_limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_gateway_rate_limit"
    values={[
        { label: 'get_gateway_rate_limit', value: 'get_gateway_rate_limit' },
        { label: 'list_gateway_rate_limits', value: 'list_gateway_rate_limits' }
    ]}
>
<TabItem value="get_gateway_rate_limit">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the rate limit was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional human-readable description for a gateway limit.</td>
</tr>
<tr>
    <td><CopyableCode code="dimension_keys" /></td>
    <td><code>array</code></td>
    <td>An ordered list of dimension key names defining the scope of a limit.</td>
</tr>
<tr>
    <td><CopyableCode code="entries" /></td>
    <td><code>array</code></td>
    <td>A list of rule entries within a limit.</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateway. (pattern: &lt;code&gt;(&#91;0-9a-z&#93;&#91;-&#93;?)&#123;1,100&#125;-&#91;0-9a-z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rate_limit_id" /></td>
    <td><code>string</code></td>
    <td>The limit identifier. Optional on create (the system generates it if not provided by the customer). Always present in responses. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_\.&#93;&#123;0,62&#125;&#91;a-zA-Z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the rate limit. (CREATING, ACTIVE, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the rate limit was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_gateway_rate_limits">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the rate limit was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The human-readable description of the rate limit.</td>
</tr>
<tr>
    <td><CopyableCode code="dimension_keys" /></td>
    <td><code>array</code></td>
    <td>The ordered list of dimension key names that define the scope of this rate limit.</td>
</tr>
<tr>
    <td><CopyableCode code="entries" /></td>
    <td><code>array</code></td>
    <td>The list of rule entries that map dimension values to rate configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateway. (pattern: &lt;code&gt;(&#91;0-9a-z&#93;&#91;-&#93;?)&#123;1,100&#125;-&#91;0-9a-z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rate_limit_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the rate limit. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_\.&#93;&#123;0,62&#125;&#91;a-zA-Z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the rate limit. (CREATING, ACTIVE, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the rate limit was last updated.</td>
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
    <td><a href="#get_gateway_rate_limit"><CopyableCode code="get_gateway_rate_limit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-rate_limit_id"><code>rate_limit_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a gateway rate limit.</td>
</tr>
<tr>
    <td><a href="#list_gateway_rate_limits"><CopyableCode code="list_gateway_rate_limits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all rate limits for a gateway. Results are paginated. Use the nextToken parameter to retrieve additional results.</td>
</tr>
<tr>
    <td><a href="#create_gateway_rate_limit"><CopyableCode code="create_gateway_rate_limit" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-dimensionKeys"><code>dimensionKeys</code></a>, <a href="#parameter-entries"><code>entries</code></a></td>
    <td></td>
    <td>Creates a rate limit for a gateway. Rate limits define throttling rules for each dimension that control request rates, token consumption rates, and concurrent connections through the gateway.</td>
</tr>
<tr>
    <td><a href="#update_gateway_rate_limit"><CopyableCode code="update_gateway_rate_limit" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-rate_limit_id"><code>rate_limit_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-entries"><code>entries</code></a></td>
    <td></td>
    <td>Updates the entries of a gateway rate limit. The dimension keys are immutable after creation.</td>
</tr>
<tr>
    <td><a href="#delete_gateway_rate_limit"><CopyableCode code="delete_gateway_rate_limit" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-rate_limit_id"><code>rate_limit_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a gateway rate limit.</td>
</tr>
<tr>
    <td><a href="#batch_put_gateway_rate_limits"><CopyableCode code="batch_put_gateway_rate_limits" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-gateway_identifier"><code>gateway_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-rateLimits"><code>rateLimits</code></a></td>
    <td></td>
    <td>Atomically creates or updates multiple rate limits for a gateway. The operation updates existing limits with matching keys and creates new limits for new keys. If the operation fails, the service applies no changes. Retry the request after resolving the issue.</td>
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
<tr id="parameter-gateway_identifier">
    <td><CopyableCode code="gateway_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gateway.</td>
</tr>
<tr id="parameter-rate_limit_id">
    <td><CopyableCode code="rate_limit_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the rate limit to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. Use the value returned in a previous ListGatewayRateLimits response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_gateway_rate_limit"
    values={[
        { label: 'get_gateway_rate_limit', value: 'get_gateway_rate_limit' },
        { label: 'list_gateway_rate_limits', value: 'list_gateway_rate_limits' }
    ]}
>
<TabItem value="get_gateway_rate_limit">

Retrieves information about a gateway rate limit.

```sql
SELECT
created_at,
description,
dimension_keys,
entries,
gateway_identifier,
rate_limit_id,
status,
updated_at
FROM aws.bedrock_agentcore_control.gateway_rate_limits
WHERE gateway_identifier = '{{ gateway_identifier }}' -- required
AND rate_limit_id = '{{ rate_limit_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_gateway_rate_limits">

Lists all rate limits for a gateway. Results are paginated. Use the nextToken parameter to retrieve additional results.

```sql
SELECT
created_at,
description,
dimension_keys,
entries,
gateway_identifier,
rate_limit_id,
status,
updated_at
FROM aws.bedrock_agentcore_control.gateway_rate_limits
WHERE gateway_identifier = '{{ gateway_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_gateway_rate_limit"
    values={[
        { label: 'create_gateway_rate_limit', value: 'create_gateway_rate_limit' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_gateway_rate_limit">

Creates a rate limit for a gateway. Rate limits define throttling rules for each dimension that control request rates, token consumption rates, and concurrent connections through the gateway.

```sql
INSERT INTO aws.bedrock_agentcore_control.gateway_rate_limits (
clientToken,
rateLimitId,
description,
dimensionKeys,
entries,
gateway_identifier,
region
)
SELECT 
'{{ clientToken }}',
'{{ rateLimitId }}',
'{{ description }}',
'{{ dimensionKeys }}' /* required */,
'{{ entries }}' /* required */,
'{{ gateway_identifier }}',
'{{ region }}'
RETURNING
created_at,
description,
dimension_keys,
entries,
gateway_identifier,
rate_limit_id,
status,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: gateway_rate_limits
  props:
    - name: gateway_identifier
      value: "{{ gateway_identifier }}"
      description: Required parameter for the gateway_rate_limits resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the gateway_rate_limits resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: rateLimitId
      value: "{{ rateLimitId }}"
      description: |
        The limit identifier. Optional on create (the system generates it if not provided by the customer). Always present in responses.
    - name: description
      value: "{{ description }}"
      description: |
        An optional human-readable description for a gateway limit.
    - name: dimensionKeys
      value:
        - "{{ dimensionKeys }}"
      description: |
        An ordered list of dimension key names defining the scope of a limit.
    - name: entries
      description: |
        A list of rule entries within a limit.
      value:
        - dimensions: "{{ dimensions }}"
          requests: "{{ requests }}"
          tokens: "{{ tokens }}"
          connections: "{{ connections }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_gateway_rate_limit"
    values={[
        { label: 'update_gateway_rate_limit', value: 'update_gateway_rate_limit' }
    ]}
>
<TabItem value="update_gateway_rate_limit">

Updates the entries of a gateway rate limit. The dimension keys are immutable after creation.

```sql
UPDATE aws.bedrock_agentcore_control.gateway_rate_limits
SET 
description = '{{ description }}',
entries = '{{ entries }}'
WHERE 
gateway_identifier = '{{ gateway_identifier }}' --required
AND rate_limit_id = '{{ rate_limit_id }}' --required
AND region = '{{ region }}' --required
AND entries = '{{ entries }}' --required
RETURNING
created_at,
description,
dimension_keys,
entries,
gateway_identifier,
rate_limit_id,
status,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_gateway_rate_limit"
    values={[
        { label: 'delete_gateway_rate_limit', value: 'delete_gateway_rate_limit' }
    ]}
>
<TabItem value="delete_gateway_rate_limit">

Deletes a gateway rate limit.

```sql
DELETE FROM aws.bedrock_agentcore_control.gateway_rate_limits
WHERE gateway_identifier = '{{ gateway_identifier }}' --required
AND rate_limit_id = '{{ rate_limit_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_put_gateway_rate_limits"
    values={[
        { label: 'batch_put_gateway_rate_limits', value: 'batch_put_gateway_rate_limits' }
    ]}
>
<TabItem value="batch_put_gateway_rate_limits">

Atomically creates or updates multiple rate limits for a gateway. The operation updates existing limits with matching keys and creates new limits for new keys. If the operation fails, the service applies no changes. Retry the request after resolving the issue.

```sql
EXEC aws.bedrock_agentcore_control.gateway_rate_limits.batch_put_gateway_rate_limits 
@gateway_identifier='{{ gateway_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"clientToken": "{{ clientToken }}", 
"rateLimits": "{{ rateLimits }}"
}'
;
```
</TabItem>
</Tabs>
