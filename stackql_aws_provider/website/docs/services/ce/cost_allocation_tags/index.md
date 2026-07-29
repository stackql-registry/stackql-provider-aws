--- 
title: cost_allocation_tags
hide_title: false
hide_table_of_contents: false
keywords:
  - cost_allocation_tags
  - ce
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

Creates, updates, deletes, gets or lists a <code>cost_allocation_tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cost_allocation_tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.cost_allocation_tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_cost_allocation_tags"
    values={[
        { label: 'list_cost_allocation_tags', value: 'list_cost_allocation_tags' }
    ]}
>
<TabItem value="list_cost_allocation_tags">

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
    <td><CopyableCode code="last_updated_date" /></td>
    <td><code>string</code></td>
    <td>The period of time that you want the usage and costs for. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d\d-\d\dT\d\d:\d\d:\d\d((&#91;+-&#93;\d\d:\d\d)|Z)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_used_date" /></td>
    <td><code>string</code></td>
    <td>The period of time that you want the usage and costs for. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d\d-\d\dT\d\d:\d\d:\d\d((&#91;+-&#93;\d\d:\d\d)|Z)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a cost allocation tag. (Active, Inactive)</td>
</tr>
<tr>
    <td><CopyableCode code="tag_key" /></td>
    <td><code>string</code></td>
    <td>The key for the cost allocation tag. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of cost allocation tag. You can use AWSGenerated or UserDefined type tags. AWSGenerated type tags are tags that Amazon Web Services defines and applies to support Amazon Web Services resources for cost allocation purposes. UserDefined type tags are tags that you define, create, and apply to resources. (AWSGenerated, UserDefined)</td>
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
    <td><a href="#list_cost_allocation_tags"><CopyableCode code="list_cost_allocation_tags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a list of cost allocation tags. All inputs in the API are optional and serve as filters. By default, all cost allocation tags are returned.</td>
</tr>
<tr>
    <td><a href="#update_cost_allocation_tags_status"><CopyableCode code="update_cost_allocation_tags_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CostAllocationTagsStatus"><code>CostAllocationTagsStatus</code></a></td>
    <td></td>
    <td>Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag status that's updated is the same as the existing tag status, the request doesn't fail. Instead, it doesn't have any effect on the tag status (for example, activating the active tag).</td>
</tr>
<tr>
    <td><a href="#start_cost_allocation_tag_backfill"><CopyableCode code="start_cost_allocation_tag_backfill" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BackfillFrom"><code>BackfillFrom</code></a></td>
    <td></td>
    <td>Request a cost allocation tag backfill. This will backfill the activation status (either active or inactive) for all tag keys from para:BackfillFrom up to the time this request is made. You can request a backfill once every 24 hours.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_cost_allocation_tags"
    values={[
        { label: 'list_cost_allocation_tags', value: 'list_cost_allocation_tags' }
    ]}
>
<TabItem value="list_cost_allocation_tags">

Get a list of cost allocation tags. All inputs in the API are optional and serve as filters. By default, all cost allocation tags are returned.

```sql
SELECT
last_updated_date,
last_used_date,
status,
tag_key,
type
FROM aws.ce.cost_allocation_tags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cost_allocation_tags_status"
    values={[
        { label: 'update_cost_allocation_tags_status', value: 'update_cost_allocation_tags_status' }
    ]}
>
<TabItem value="update_cost_allocation_tags_status">

Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag status that's updated is the same as the existing tag status, the request doesn't fail. Instead, it doesn't have any effect on the tag status (for example, activating the active tag).

```sql
UPDATE aws.ce.cost_allocation_tags
SET 
CostAllocationTagsStatus = '{{ CostAllocationTagsStatus }}'
WHERE 
region = '{{ region }}' --required
AND CostAllocationTagsStatus = '{{ CostAllocationTagsStatus }}' --required
RETURNING
errors;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_cost_allocation_tag_backfill"
    values={[
        { label: 'start_cost_allocation_tag_backfill', value: 'start_cost_allocation_tag_backfill' }
    ]}
>
<TabItem value="start_cost_allocation_tag_backfill">

Request a cost allocation tag backfill. This will backfill the activation status (either active or inactive) for all tag keys from para:BackfillFrom up to the time this request is made. You can request a backfill once every 24 hours.

```sql
EXEC aws.ce.cost_allocation_tags.start_cost_allocation_tag_backfill 
@region='{{ region }}' --required 
@@json=
'{
"BackfillFrom": "{{ BackfillFrom }}"
}'
;
```
</TabItem>
</Tabs>
