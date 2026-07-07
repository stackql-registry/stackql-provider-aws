--- 
title: limits
hide_title: false
hide_table_of_contents: false
keywords:
  - limits
  - deadline
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

Creates, updates, deletes, gets or lists a <code>limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_limit"
    values={[
        { label: 'get_limit', value: 'get_limit' },
        { label: 'list_limits', value: 'list_limits' }
    ]}
>
<TabItem value="get_limit">

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
    <td><CopyableCode code="amountRequirementName" /></td>
    <td><code>string</code></td>
    <td>The value that you specify as the name in the amounts field of the hostRequirements in a step of a job template to declare the limit requirement.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp of the date and time that the limit was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user identifier of the person that created the limit.</td>
</tr>
<tr>
    <td><CopyableCode code="currentCount" /></td>
    <td><code>integer</code></td>
    <td>The number of resources from the limit that are being used by jobs. The result is delayed and may not be the count at the time that you called the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the limit that helps identify what the limit is used for. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the limit. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="farmId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the farm that contains the limit. (pattern: &lt;code&gt;farm-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="limitId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the limit. (pattern: &lt;code&gt;limit-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="maxCount" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of resources constrained by this limit. When all of the resources are in use, steps that require the limit won't be scheduled until the resource is available. The maxValue must not be 0. If the value is -1, there is no restriction on the number of resources that can be acquired for this limit.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp of the date and time that the limit was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The user identifier of the person that last updated the limit.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_limits">

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
    <td><CopyableCode code="amountRequirementName" /></td>
    <td><code>string</code></td>
    <td>The value that you specify as the name in the amounts field of the hostRequirements in a step of a job template to declare the limit requirement.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp of the date and time that the limit was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user identifier of the person that created the limit.</td>
</tr>
<tr>
    <td><CopyableCode code="currentCount" /></td>
    <td><code>integer</code></td>
    <td>The number of resources from the limit that are being used by jobs. The result is delayed and may not be the count at the time that you called the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The name of the limit used in lists to identify the limit. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="farmId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the farm that contains the limit. (pattern: &lt;code&gt;farm-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="limitId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the limit. (pattern: &lt;code&gt;limit-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="maxCount" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of resources constrained by this limit. When all of the resources are in use, steps that require the limit won't be scheduled until the resource is available. The maxValue must not be 0. If the value is -1, there is no restriction on the number of resources that can be acquired for this limit.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp of the date and time that the limit was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The user identifier of the person that last updated the limit.</td>
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
    <td><a href="#get_limit"><CopyableCode code="get_limit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-limit_id"><code>limit_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specific limit.</td>
</tr>
<tr>
    <td><a href="#list_limits"><CopyableCode code="list_limits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Gets a list of limits defined in the specified farm.</td>
</tr>
<tr>
    <td><a href="#create_limit"><CopyableCode code="create_limit" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-amountRequirementName"><code>amountRequirementName</code></a>, <a href="#parameter-maxCount"><code>maxCount</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Creates a limit that manages the distribution of shared resources, such as floating licenses. A limit can throttle work assignments, help manage workloads, and track current usage. Before you use a limit, you must associate the limit with one or more queues. You must add the amountRequirementName to a step in a job template to declare the limit requirement.</td>
</tr>
<tr>
    <td><a href="#update_limit"><CopyableCode code="update_limit" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-limit_id"><code>limit_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the properties of the specified limit.</td>
</tr>
<tr>
    <td><a href="#delete_limit"><CopyableCode code="delete_limit" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-limit_id"><code>limit_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a limit from the specified farm. Before you delete a limit you must use the DeleteQueueLimitAssociation operation to remove the association with any queues.</td>
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
<tr id="parameter-farm_id">
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the farm that contains the limit to delete.</td>
</tr>
<tr id="parameter-limit_id">
    <td><CopyableCode code="limit_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the limit to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-X-Amz-Client-Token">
    <td><CopyableCode code="X-Amz-Client-Token" /></td>
    <td><code>string</code></td>
    <td>The unique token which the server uses to recognize retries of the same request.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of limits to return in each page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null to start from the beginning.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_limit"
    values={[
        { label: 'get_limit', value: 'get_limit' },
        { label: 'list_limits', value: 'list_limits' }
    ]}
>
<TabItem value="get_limit">

Gets information about a specific limit.

```sql
SELECT
amountRequirementName,
createdAt,
createdBy,
currentCount,
description,
displayName,
farmId,
limitId,
maxCount,
updatedAt,
updatedBy
FROM aws.deadline.limits
WHERE farm_id = '{{ farm_id }}' -- required
AND limit_id = '{{ limit_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_limits">

Gets a list of limits defined in the specified farm.

```sql
SELECT
amountRequirementName,
createdAt,
createdBy,
currentCount,
displayName,
farmId,
limitId,
maxCount,
updatedAt,
updatedBy
FROM aws.deadline.limits
WHERE farm_id = '{{ farm_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_limit"
    values={[
        { label: 'create_limit', value: 'create_limit' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_limit">

Creates a limit that manages the distribution of shared resources, such as floating licenses. A limit can throttle work assignments, help manage workloads, and track current usage. Before you use a limit, you must associate the limit with one or more queues. You must add the amountRequirementName to a step in a job template to declare the limit requirement.

```sql
INSERT INTO aws.deadline.limits (
displayName,
amountRequirementName,
maxCount,
description,
farm_id,
region,
`X-Amz-Client-Token`
)
SELECT 
'{{ displayName }}' /* required */,
'{{ amountRequirementName }}' /* required */,
{{ maxCount }} /* required */,
'{{ description }}',
'{{ farm_id }}',
'{{ region }}',
'{{ X-Amz-Client-Token }}'
RETURNING
limitId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: limits
  props:
    - name: farm_id
      value: "{{ farm_id }}"
      description: Required parameter for the limits resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the limits resource.
    - name: displayName
      value: "{{ displayName }}"
    - name: amountRequirementName
      value: "{{ amountRequirementName }}"
    - name: maxCount
      value: {{ maxCount }}
    - name: description
      value: "{{ description }}"
    - name: X-Amz-Client-Token
      value: "{{ X-Amz-Client-Token }}"
      description: The unique token which the server uses to recognize retries of the same request.
      description: The unique token which the server uses to recognize retries of the same request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_limit"
    values={[
        { label: 'update_limit', value: 'update_limit' }
    ]}
>
<TabItem value="update_limit">

Updates the properties of the specified limit.

```sql
UPDATE aws.deadline.limits
SET 
displayName = '{{ displayName }}',
description = '{{ description }}',
maxCount = {{ maxCount }}
WHERE 
farm_id = '{{ farm_id }}' --required
AND limit_id = '{{ limit_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_limit"
    values={[
        { label: 'delete_limit', value: 'delete_limit' }
    ]}
>
<TabItem value="delete_limit">

Removes a limit from the specified farm. Before you delete a limit you must use the DeleteQueueLimitAssociation operation to remove the association with any queues.

```sql
DELETE FROM aws.deadline.limits
WHERE farm_id = '{{ farm_id }}' --required
AND limit_id = '{{ limit_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
