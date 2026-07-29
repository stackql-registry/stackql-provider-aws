--- 
title: budgets
hide_title: false
hide_table_of_contents: false
keywords:
  - budgets
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

Creates, updates, deletes, gets or lists a <code>budgets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="budgets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.budgets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_budget"
    values={[
        { label: 'get_budget', value: 'get_budget' },
        { label: 'list_budgets', value: 'list_budgets' }
    ]}
>
<TabItem value="get_budget">

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
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>The budget actions for the budget.</td>
</tr>
<tr>
    <td><CopyableCode code="approximate_dollar_limit" /></td>
    <td><code>number (float)</code></td>
    <td>The consumed usage limit for the budget.</td>
</tr>
<tr>
    <td><CopyableCode code="budget_id" /></td>
    <td><code>string</code></td>
    <td>The budget ID. (pattern: &lt;code&gt;budget-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
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
    <td>The description of the budget. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the budget. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="queue_stopped_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the queue stopped.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td>The start and end time of the budget.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the budget. ACTIVE–Get a budget being evaluated. INACTIVE–Get an inactive budget. This can include expired, canceled, or deleted statuses. (ACTIVE, INACTIVE)</td>
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
<tr>
    <td><CopyableCode code="usage_tracking_resource" /></td>
    <td><code>object</code></td>
    <td>The usage details of the allotted budget.</td>
</tr>
<tr>
    <td><CopyableCode code="usages" /></td>
    <td><code>object</code></td>
    <td>The usages of the budget.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_budgets">

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
    <td><CopyableCode code="approximate_dollar_limit" /></td>
    <td><code>number (float)</code></td>
    <td>The approximate dollar limit of the budget.</td>
</tr>
<tr>
    <td><CopyableCode code="budget_id" /></td>
    <td><code>string</code></td>
    <td>The budget ID. (pattern: &lt;code&gt;budget-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
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
    <td>The description of the budget summary. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the budget summary to update. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the budget. ACTIVE–The budget is being evaluated. INACTIVE–The budget is inactive. This can include Expired, Canceled, or deleted Deleted statuses. (ACTIVE, INACTIVE)</td>
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
<tr>
    <td><CopyableCode code="usage_tracking_resource" /></td>
    <td><code>object</code></td>
    <td>The usage details of the allotted budget.</td>
</tr>
<tr>
    <td><CopyableCode code="usages" /></td>
    <td><code>object</code></td>
    <td>The consumed usage for the budget.</td>
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
    <td><a href="#get_budget"><CopyableCode code="get_budget" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-budget_id"><code>budget_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a budget.</td>
</tr>
<tr>
    <td><a href="#list_budgets"><CopyableCode code="list_budgets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>A list of budgets in a farm.</td>
</tr>
<tr>
    <td><a href="#create_budget"><CopyableCode code="create_budget" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-usageTrackingResource"><code>usageTrackingResource</code></a>, <a href="#parameter-approximateDollarLimit"><code>approximateDollarLimit</code></a>, <a href="#parameter-actions"><code>actions</code></a>, <a href="#parameter-schedule"><code>schedule</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Creates a budget to set spending thresholds for your rendering activity.</td>
</tr>
<tr>
    <td><a href="#update_budget"><CopyableCode code="update_budget" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-budget_id"><code>budget_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Updates a budget that sets spending thresholds for rendering activity.</td>
</tr>
<tr>
    <td><a href="#delete_budget"><CopyableCode code="delete_budget" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-budget_id"><code>budget_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a budget.</td>
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
<tr id="parameter-budget_id">
    <td><CopyableCode code="budget_id" /></td>
    <td><code>string</code></td>
    <td>The budget ID of the budget to delete.</td>
</tr>
<tr id="parameter-farm_id">
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The farm ID of the farm to remove from the budget.</td>
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
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status to list for the budgets.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_budget"
    values={[
        { label: 'get_budget', value: 'get_budget' },
        { label: 'list_budgets', value: 'list_budgets' }
    ]}
>
<TabItem value="get_budget">

Get a budget.

```sql
SELECT
actions,
approximate_dollar_limit,
budget_id,
created_at,
created_by,
description,
display_name,
queue_stopped_at,
schedule,
status,
updated_at,
updated_by,
usage_tracking_resource,
usages
FROM aws.deadline.budgets
WHERE farm_id = '{{ farm_id }}' -- required
AND budget_id = '{{ budget_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_budgets">

A list of budgets in a farm.

```sql
SELECT
approximate_dollar_limit,
budget_id,
created_at,
created_by,
description,
display_name,
status,
updated_at,
updated_by,
usage_tracking_resource,
usages
FROM aws.deadline.budgets
WHERE farm_id = '{{ farm_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_budget"
    values={[
        { label: 'create_budget', value: 'create_budget' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_budget">

Creates a budget to set spending thresholds for your rendering activity.

```sql
INSERT INTO aws.deadline.budgets (
displayName,
description,
usageTrackingResource,
approximateDollarLimit,
actions,
schedule,
tags,
farm_id,
region,
`X-Amz-Client-Token`
)
SELECT 
'{{ displayName }}' /* required */,
'{{ description }}',
'{{ usageTrackingResource }}' /* required */,
{{ approximateDollarLimit }} /* required */,
'{{ actions }}' /* required */,
'{{ schedule }}' /* required */,
'{{ tags }}',
'{{ farm_id }}',
'{{ region }}',
'{{ X-Amz-Client-Token }}'
RETURNING
budget_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: budgets
  props:
    - name: farm_id
      value: "{{ farm_id }}"
      description: Required parameter for the budgets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the budgets resource.
    - name: displayName
      value: "{{ displayName }}"
    - name: description
      value: "{{ description }}"
    - name: usageTrackingResource
      description: |
        The usage details of the allotted budget.
      value:
        queueId: "{{ queueId }}"
    - name: approximateDollarLimit
      value: {{ approximateDollarLimit }}
    - name: actions
      value:
        - type_: "{{ type_ }}"
          thresholdPercentage: {{ thresholdPercentage }}
          description: "{{ description }}"
    - name: schedule
      description: |
        The start and end time of the budget.
      value:
        fixed:
          startTime: "{{ startTime }}"
          endTime: "{{ endTime }}"
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
    defaultValue="update_budget"
    values={[
        { label: 'update_budget', value: 'update_budget' }
    ]}
>
<TabItem value="update_budget">

Updates a budget that sets spending thresholds for rendering activity.

```sql
UPDATE aws.deadline.budgets
SET 
displayName = '{{ displayName }}',
description = '{{ description }}',
status = '{{ status }}',
approximateDollarLimit = {{ approximateDollarLimit }},
actionsToAdd = '{{ actionsToAdd }}',
actionsToRemove = '{{ actionsToRemove }}',
schedule = '{{ schedule }}'
WHERE 
farm_id = '{{ farm_id }}' --required
AND budget_id = '{{ budget_id }}' --required
AND region = '{{ region }}' --required
AND `X-Amz-Client-Token` = '{{ X-Amz-Client-Token}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_budget"
    values={[
        { label: 'delete_budget', value: 'delete_budget' }
    ]}
>
<TabItem value="delete_budget">

Deletes a budget.

```sql
DELETE FROM aws.deadline.budgets
WHERE farm_id = '{{ farm_id }}' --required
AND budget_id = '{{ budget_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
