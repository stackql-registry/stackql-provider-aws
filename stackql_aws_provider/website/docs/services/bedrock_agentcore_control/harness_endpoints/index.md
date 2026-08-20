--- 
title: harness_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - harness_endpoints
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

Creates, updates, deletes, gets or lists a <code>harness_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="harness_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.harness_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_harness_endpoint"
    values={[
        { label: 'get_harness_endpoint', value: 'get_harness_endpoint' },
        { label: 'list_harness_endpoints', value: 'list_harness_endpoints' }
    ]}
>
<TabItem value="get_harness_endpoint">

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
    <td>The ARN of the endpoint. (pattern: &lt;code&gt;arn:(&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:harness/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,39&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;/harness-endpoint/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name of the endpoint. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason the endpoint's last create or update operation failed.</td>
</tr>
<tr>
    <td><CopyableCode code="harness_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the harness that the endpoint belongs to. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,39&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="harness_name" /></td>
    <td><code>string</code></td>
    <td>The name of the harness that the endpoint belongs to. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,39&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="live_version" /></td>
    <td><code>string</code></td>
    <td>The harness version that the endpoint is currently serving. (pattern: &lt;code&gt;(&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the endpoint. (CREATING, CREATE_FAILED, UPDATING, UPDATE_FAILED, READY, DELETING, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="target_version" /></td>
    <td><code>string</code></td>
    <td>The harness version that the endpoint points to. While an update is in progress, this can differ from the live version until the endpoint finishes transitioning. (pattern: &lt;code&gt;(&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the endpoint was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_harness_endpoints">

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
    <td>The ARN of the endpoint. (pattern: &lt;code&gt;arn:(&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:harness/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,39&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;/harness-endpoint/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name of the endpoint. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason the endpoint's last create or update operation failed.</td>
</tr>
<tr>
    <td><CopyableCode code="harness_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the harness that the endpoint belongs to. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,39&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="harness_name" /></td>
    <td><code>string</code></td>
    <td>The name of the harness that the endpoint belongs to. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,39&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="live_version" /></td>
    <td><code>string</code></td>
    <td>The harness version that the endpoint is currently serving. (pattern: &lt;code&gt;(&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the endpoint. (CREATING, CREATE_FAILED, UPDATING, UPDATE_FAILED, READY, DELETING, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="target_version" /></td>
    <td><code>string</code></td>
    <td>The harness version that the endpoint points to. While an update is in progress, this can differ from the live version until the endpoint finishes transitioning. (pattern: &lt;code&gt;(&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the endpoint was last updated.</td>
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
    <td><a href="#get_harness_endpoint"><CopyableCode code="get_harness_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-harness_id"><code>harness_id</code></a>, <a href="#parameter-endpoint_name"><code>endpoint_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Operation to get a single harness endpoint.</td>
</tr>
<tr>
    <td><a href="#list_harness_endpoints"><CopyableCode code="list_harness_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-harness_id"><code>harness_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Operation to list the endpoints of a harness.</td>
</tr>
<tr>
    <td><a href="#create_harness_endpoint"><CopyableCode code="create_harness_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-harness_id"><code>harness_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-endpointName"><code>endpointName</code></a></td>
    <td></td>
    <td>Operation to create a harness endpoint.</td>
</tr>
<tr>
    <td><a href="#update_harness_endpoint"><CopyableCode code="update_harness_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-harness_id"><code>harness_id</code></a>, <a href="#parameter-endpoint_name"><code>endpoint_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Operation to update a harness endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_harness_endpoint"><CopyableCode code="delete_harness_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-harness_id"><code>harness_id</code></a>, <a href="#parameter-endpoint_name"><code>endpoint_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Operation to delete a harness endpoint.</td>
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
<tr id="parameter-endpoint_name">
    <td><CopyableCode code="endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name of the endpoint to delete.</td>
</tr>
<tr id="parameter-harness_id">
    <td><CopyableCode code="harness_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the harness that the endpoint belongs to.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure idempotency of the request.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_harness_endpoint"
    values={[
        { label: 'get_harness_endpoint', value: 'get_harness_endpoint' },
        { label: 'list_harness_endpoints', value: 'list_harness_endpoints' }
    ]}
>
<TabItem value="get_harness_endpoint">

Operation to get a single harness endpoint.

```sql
SELECT
arn,
created_at,
description,
endpoint_name,
failure_reason,
harness_id,
harness_name,
live_version,
status,
target_version,
updated_at
FROM aws.bedrock_agentcore_control.harness_endpoints
WHERE harness_id = '{{ harness_id }}' -- required
AND endpoint_name = '{{ endpoint_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_harness_endpoints">

Operation to list the endpoints of a harness.

```sql
SELECT
arn,
created_at,
description,
endpoint_name,
failure_reason,
harness_id,
harness_name,
live_version,
status,
target_version,
updated_at
FROM aws.bedrock_agentcore_control.harness_endpoints
WHERE harness_id = '{{ harness_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_harness_endpoint"
    values={[
        { label: 'create_harness_endpoint', value: 'create_harness_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_harness_endpoint">

Operation to create a harness endpoint.

```sql
INSERT INTO aws.bedrock_agentcore_control.harness_endpoints (
endpointName,
targetVersion,
description,
clientToken,
tags,
harness_id,
region
)
SELECT 
'{{ endpointName }}' /* required */,
'{{ targetVersion }}',
'{{ description }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ harness_id }}',
'{{ region }}'
RETURNING
endpoint
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: harness_endpoints
  props:
    - name: harness_id
      value: "{{ harness_id }}"
      description: Required parameter for the harness_endpoints resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the harness_endpoints resource.
    - name: endpointName
      value: "{{ endpointName }}"
    - name: targetVersion
      value: "{{ targetVersion }}"
    - name: description
      value: "{{ description }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_harness_endpoint"
    values={[
        { label: 'update_harness_endpoint', value: 'update_harness_endpoint' }
    ]}
>
<TabItem value="update_harness_endpoint">

Operation to update a harness endpoint.

```sql
UPDATE aws.bedrock_agentcore_control.harness_endpoints
SET 
targetVersion = '{{ targetVersion }}',
description = '{{ description }}',
clientToken = '{{ clientToken }}'
WHERE 
harness_id = '{{ harness_id }}' --required
AND endpoint_name = '{{ endpoint_name }}' --required
AND region = '{{ region }}' --required
RETURNING
endpoint;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_harness_endpoint"
    values={[
        { label: 'delete_harness_endpoint', value: 'delete_harness_endpoint' }
    ]}
>
<TabItem value="delete_harness_endpoint">

Operation to delete a harness endpoint.

```sql
DELETE FROM aws.bedrock_agentcore_control.harness_endpoints
WHERE harness_id = '{{ harness_id }}' --required
AND endpoint_name = '{{ endpoint_name }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
