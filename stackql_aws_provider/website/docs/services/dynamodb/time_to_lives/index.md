--- 
title: time_to_lives
hide_title: false
hide_table_of_contents: false
keywords:
  - time_to_lives
  - dynamodb
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

Creates, updates, deletes, gets or lists a <code>time_to_lives</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="time_to_lives" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dynamodb.time_to_lives" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_time_to_live"
    values={[
        { label: 'describe_time_to_live', value: 'describe_time_to_live' }
    ]}
>
<TabItem value="describe_time_to_live">

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
    <td><CopyableCode code="AttributeName" /></td>
    <td><code>string</code></td>
    <td>The name of the TTL attribute for items in the table.</td>
</tr>
<tr>
    <td><CopyableCode code="TimeToLiveStatus" /></td>
    <td><code>string</code></td>
    <td>The TTL status for the table. (ENABLING, DISABLING, ENABLED, DISABLED)</td>
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
    <td><a href="#describe_time_to_live"><CopyableCode code="describe_time_to_live" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gives a description of the Time to Live (TTL) status on the specified table.</td>
</tr>
<tr>
    <td><a href="#update_time_to_live"><CopyableCode code="update_time_to_live" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-TimeToLiveSpecification"><code>TimeToLiveSpecification</code></a></td>
    <td></td>
    <td>The UpdateTimeToLive method enables or disables Time to Live (TTL) for the specified table. A successful UpdateTimeToLive call returns the current TimeToLiveSpecification. It can take up to one hour for the change to fully process. Any additional UpdateTimeToLive calls for the same table during this one hour duration result in a ValidationException. TTL compares the current time in epoch time format to the time stored in the TTL attribute of an item. If the epoch time value stored in the attribute is less than the current time, the item is marked as expired and subsequently deleted. The epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC. DynamoDB deletes expired items on a best-effort basis to ensure availability of throughput for other data operations. DynamoDB typically deletes expired items within two days of expiration. The exact duration within which an item gets deleted after expiration is specific to the nature of the workload. Items that have expired and not been deleted will still show up in reads, queries, and scans. As items are deleted, they are removed from any local secondary index and global secondary index immediately in the same eventually consistent way as a standard delete operation. For more information, see Time To Live in the Amazon DynamoDB Developer Guide.</td>
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
    defaultValue="describe_time_to_live"
    values={[
        { label: 'describe_time_to_live', value: 'describe_time_to_live' }
    ]}
>
<TabItem value="describe_time_to_live">

Gives a description of the Time to Live (TTL) status on the specified table.

```sql
SELECT
AttributeName,
TimeToLiveStatus
FROM aws.dynamodb.time_to_lives
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_time_to_live"
    values={[
        { label: 'update_time_to_live', value: 'update_time_to_live' }
    ]}
>
<TabItem value="update_time_to_live">

The UpdateTimeToLive method enables or disables Time to Live (TTL) for the specified table. A successful UpdateTimeToLive call returns the current TimeToLiveSpecification. It can take up to one hour for the change to fully process. Any additional UpdateTimeToLive calls for the same table during this one hour duration result in a ValidationException. TTL compares the current time in epoch time format to the time stored in the TTL attribute of an item. If the epoch time value stored in the attribute is less than the current time, the item is marked as expired and subsequently deleted. The epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC. DynamoDB deletes expired items on a best-effort basis to ensure availability of throughput for other data operations. DynamoDB typically deletes expired items within two days of expiration. The exact duration within which an item gets deleted after expiration is specific to the nature of the workload. Items that have expired and not been deleted will still show up in reads, queries, and scans. As items are deleted, they are removed from any local secondary index and global secondary index immediately in the same eventually consistent way as a standard delete operation. For more information, see Time To Live in the Amazon DynamoDB Developer Guide.

```sql
UPDATE aws.dynamodb.time_to_lives
SET 
TableName = '{{ TableName }}',
TimeToLiveSpecification = '{{ TimeToLiveSpecification }}'
WHERE 
region = '{{ region }}' --required
AND TableName = '{{ TableName }}' --required
AND TimeToLiveSpecification = '{{ TimeToLiveSpecification }}' --required
RETURNING
TimeToLiveSpecification;
```
</TabItem>
</Tabs>
