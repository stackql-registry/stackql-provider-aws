--- 
title: storage_profile_for_queues
hide_title: false
hide_table_of_contents: false
keywords:
  - storage_profile_for_queues
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

Creates, updates, deletes, gets or lists a <code>storage_profile_for_queues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="storage_profile_for_queues" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.storage_profile_for_queues" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_storage_profile_for_queue"
    values={[
        { label: 'get_storage_profile_for_queue', value: 'get_storage_profile_for_queue' }
    ]}
>
<TabItem value="get_storage_profile_for_queue">

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
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the storage profile connected to a queue. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="fileSystemLocations" /></td>
    <td><code>array</code></td>
    <td>The location of the files for the storage profile within the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="osFamily" /></td>
    <td><code>string</code></td>
    <td>The operating system of the storage profile in the queue. (WINDOWS, LINUX, MACOS)</td>
</tr>
<tr>
    <td><CopyableCode code="storageProfileId" /></td>
    <td><code>string</code></td>
    <td>The storage profile ID. (pattern: &lt;code&gt;sp-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_storage_profile_for_queue"><CopyableCode code="get_storage_profile_for_queue" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-storage_profile_id"><code>storage_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a storage profile for a queue.</td>
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
    <td>The farm ID for the queue in storage profile.</td>
</tr>
<tr id="parameter-queue_id">
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The queue ID the queue in the storage profile.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-storage_profile_id">
    <td><CopyableCode code="storage_profile_id" /></td>
    <td><code>string</code></td>
    <td>The storage profile ID for the storage profile in the queue.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_storage_profile_for_queue"
    values={[
        { label: 'get_storage_profile_for_queue', value: 'get_storage_profile_for_queue' }
    ]}
>
<TabItem value="get_storage_profile_for_queue">

Gets a storage profile for a queue.

```sql
SELECT
displayName,
fileSystemLocations,
osFamily,
storageProfileId
FROM aws.deadline.storage_profile_for_queues
WHERE farm_id = '{{ farm_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND storage_profile_id = '{{ storage_profile_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
