--- 
title: farms
hide_title: false
hide_table_of_contents: false
keywords:
  - farms
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

Creates, updates, deletes, gets or lists a <code>farms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="farms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.farms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_farm"
    values={[
        { label: 'get_farm', value: 'get_farm' },
        { label: 'list_farms', value: 'list_farms' }
    ]}
>
<TabItem value="get_farm">

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
    <td><CopyableCode code="cost_scale_factor" /></td>
    <td><code>number (float)</code></td>
    <td>A multiplier applied to the farm's calculated costs for usage data and budget tracking. A value less than 1 represents a discount, a value greater than 1 represents a premium, and a value of 1 represents no adjustment.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that created this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the farm. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the farm. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The farm ID of the farm to get. (pattern: &lt;code&gt;farm-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the KMS key used on the farm. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*):kms:&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(b?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:key/&#91;\w-&#93;&#123;1,120&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that updated this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_farms">

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
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that created this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the farm. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The farm ID. (pattern: &lt;code&gt;farm-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the KMS key. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*):kms:&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(b?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:key/&#91;\w-&#93;&#123;1,120&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that updated this resource.</td>
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
    <td><a href="#get_farm"><CopyableCode code="get_farm" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a farm.</td>
</tr>
<tr>
    <td><a href="#list_farms"><CopyableCode code="list_farms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-principalId"><code>principalId</code></a></td>
    <td>Lists farms.</td>
</tr>
<tr>
    <td><a href="#create_farm"><CopyableCode code="create_farm" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Creates a farm to allow space for queues and fleets. Farms are the space where the components of your renders gather and are pieced together in the cloud. Farms contain budgets and allow you to enforce permissions. Deadline Cloud farms are a useful container for large projects.</td>
</tr>
<tr>
    <td><a href="#associate_member_to_farm"><CopyableCode code="associate_member_to_farm" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-principal_id"><code>principal_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-principalType"><code>principalType</code></a>, <a href="#parameter-identityStoreId"><code>identityStoreId</code></a>, <a href="#parameter-membershipLevel"><code>membershipLevel</code></a></td>
    <td></td>
    <td>Assigns a farm membership level to a member.</td>
</tr>
<tr>
    <td><a href="#disassociate_member_from_farm"><CopyableCode code="disassociate_member_from_farm" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-principal_id"><code>principal_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a member from a farm.</td>
</tr>
<tr>
    <td><a href="#update_farm"><CopyableCode code="update_farm" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a farm.</td>
</tr>
<tr>
    <td><a href="#delete_farm"><CopyableCode code="delete_farm" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a farm.</td>
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
    <td>The farm ID of the farm to delete.</td>
</tr>
<tr id="parameter-principal_id">
    <td><CopyableCode code="principal_id" /></td>
    <td><code>string</code></td>
    <td>A member's principal ID to disassociate from a farm.</td>
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
    <td>The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null to start from the beginning.</td>
</tr>
<tr id="parameter-principalId">
    <td><CopyableCode code="principalId" /></td>
    <td><code>string</code></td>
    <td>The principal ID of the member to list on the farm.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_farm"
    values={[
        { label: 'get_farm', value: 'get_farm' },
        { label: 'list_farms', value: 'list_farms' }
    ]}
>
<TabItem value="get_farm">

Get a farm.

```sql
SELECT
cost_scale_factor,
created_at,
created_by,
description,
display_name,
farm_id,
kms_key_arn,
updated_at,
updated_by
FROM aws.deadline.farms
WHERE farm_id = '{{ farm_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_farms">

Lists farms.

```sql
SELECT
created_at,
created_by,
display_name,
farm_id,
kms_key_arn,
updated_at,
updated_by
FROM aws.deadline.farms
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND principalId = '{{ principalId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_farm"
    values={[
        { label: 'create_farm', value: 'create_farm' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_farm">

Creates a farm to allow space for queues and fleets. Farms are the space where the components of your renders gather and are pieced together in the cloud. Farms contain budgets and allow you to enforce permissions. Deadline Cloud farms are a useful container for large projects.

```sql
INSERT INTO aws.deadline.farms (
displayName,
description,
kmsKeyArn,
costScaleFactor,
tags,
region,
`X-Amz-Client-Token`
)
SELECT 
'{{ displayName }}' /* required */,
'{{ description }}',
'{{ kmsKeyArn }}',
{{ costScaleFactor }},
'{{ tags }}',
'{{ region }}',
'{{ X-Amz-Client-Token }}'
RETURNING
farm_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: farms
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the farms resource.
    - name: displayName
      value: "{{ displayName }}"
    - name: description
      value: "{{ description }}"
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
    - name: costScaleFactor
      value: {{ costScaleFactor }}
    - name: tags
      value: "{{ tags }}"
    - name: X-Amz-Client-Token
      value: "{{ X-Amz-Client-Token }}"
      description: The unique token which the server uses to recognize retries of the same request.
      description: The unique token which the server uses to recognize retries of the same request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_member_to_farm"
    values={[
        { label: 'associate_member_to_farm', value: 'associate_member_to_farm' },
        { label: 'disassociate_member_from_farm', value: 'disassociate_member_from_farm' },
        { label: 'update_farm', value: 'update_farm' }
    ]}
>
<TabItem value="associate_member_to_farm">

Assigns a farm membership level to a member.

```sql
UPDATE aws.deadline.farms
SET 
principalType = '{{ principalType }}',
identityStoreId = '{{ identityStoreId }}',
membershipLevel = '{{ membershipLevel }}',
identityCenterRegion = '{{ identityCenterRegion }}'
WHERE 
farm_id = '{{ farm_id }}' --required
AND principal_id = '{{ principal_id }}' --required
AND region = '{{ region }}' --required
AND principalType = '{{ principalType }}' --required
AND identityStoreId = '{{ identityStoreId }}' --required
AND membershipLevel = '{{ membershipLevel }}' --required;
```
</TabItem>
<TabItem value="disassociate_member_from_farm">

Disassociates a member from a farm.

```sql
UPDATE aws.deadline.farms
SET 
-- No updatable properties
WHERE 
farm_id = '{{ farm_id }}' --required
AND principal_id = '{{ principal_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_farm">

Updates a farm.

```sql
UPDATE aws.deadline.farms
SET 
displayName = '{{ displayName }}',
description = '{{ description }}',
costScaleFactor = {{ costScaleFactor }}
WHERE 
farm_id = '{{ farm_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_farm"
    values={[
        { label: 'delete_farm', value: 'delete_farm' }
    ]}
>
<TabItem value="delete_farm">

Deletes a farm.

```sql
DELETE FROM aws.deadline.farms
WHERE farm_id = '{{ farm_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
