--- 
title: queue_quick_connects
hide_title: false
hide_table_of_contents: false
keywords:
  - queue_quick_connects
  - connect
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

Creates, updates, deletes, gets or lists a <code>queue_quick_connects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="queue_quick_connects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.queue_quick_connects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_queue_quick_connects"
    values={[
        { label: 'list_queue_quick_connects', value: 'list_queue_quick_connects' }
    ]}
>
<TabItem value="list_queue_quick_connects">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the quick connect.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the quick connect.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the quick connect.</td>
</tr>
<tr>
    <td><CopyableCode code="QuickConnectType" /></td>
    <td><code>string</code></td>
    <td>The type of quick connect. In the Amazon Connect admin website, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE). (USER, QUEUE, PHONE_NUMBER, FLOW)</td>
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
    <td><a href="#list_queue_quick_connects"><CopyableCode code="list_queue_quick_connects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the quick connects associated with a queue.</td>
</tr>
<tr>
    <td><a href="#associate_queue_quick_connects"><CopyableCode code="associate_queue_quick_connects" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QuickConnectIds"><code>QuickConnectIds</code></a></td>
    <td></td>
    <td>Associates a set of quick connects with a queue.</td>
</tr>
<tr>
    <td><a href="#disassociate_queue_quick_connects"><CopyableCode code="disassociate_queue_quick_connects" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QuickConnectIds"><code>QuickConnectIds</code></a></td>
    <td></td>
    <td>Disassociates a set of quick connects from a queue.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-queue_id">
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the queue.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. The default MaxResult size is 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_queue_quick_connects"
    values={[
        { label: 'list_queue_quick_connects', value: 'list_queue_quick_connects' }
    ]}
>
<TabItem value="list_queue_quick_connects">

Lists the quick connects associated with a queue.

```sql
SELECT
Arn,
Id,
LastModifiedRegion,
LastModifiedTime,
Name,
QuickConnectType
FROM aws.connect.queue_quick_connects
WHERE instance_id = '{{ instance_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_queue_quick_connects"
    values={[
        { label: 'associate_queue_quick_connects', value: 'associate_queue_quick_connects' }
    ]}
>
<TabItem value="associate_queue_quick_connects">

Associates a set of quick connects with a queue.

```sql
UPDATE aws.connect.queue_quick_connects
SET 
QuickConnectIds = '{{ QuickConnectIds }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND region = '{{ region }}' --required
AND QuickConnectIds = '{{ QuickConnectIds }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_queue_quick_connects"
    values={[
        { label: 'disassociate_queue_quick_connects', value: 'disassociate_queue_quick_connects' }
    ]}
>
<TabItem value="disassociate_queue_quick_connects">

Disassociates a set of quick connects from a queue.

```sql
EXEC aws.connect.queue_quick_connects.disassociate_queue_quick_connects 
@instance_id='{{ instance_id }}' --required, 
@queue_id='{{ queue_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"QuickConnectIds": "{{ QuickConnectIds }}"
}'
;
```
</TabItem>
</Tabs>
