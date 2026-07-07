--- 
title: kinesis_streaming_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - kinesis_streaming_destinations
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

Creates, updates, deletes, gets or lists a <code>kinesis_streaming_destinations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kinesis_streaming_destinations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dynamodb.kinesis_streaming_destinations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_kinesis_streaming_destination"
    values={[
        { label: 'describe_kinesis_streaming_destination', value: 'describe_kinesis_streaming_destination' }
    ]}
>
<TabItem value="describe_kinesis_streaming_destination">

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
    <td><CopyableCode code="KinesisDataStreamDestinations" /></td>
    <td><code>array</code></td>
    <td>The list of replica structures for the table being described.</td>
</tr>
<tr>
    <td><CopyableCode code="TableName" /></td>
    <td><code>string</code></td>
    <td>The name of the table being described. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_kinesis_streaming_destination"><CopyableCode code="describe_kinesis_streaming_destination" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the status of Kinesis streaming.</td>
</tr>
<tr>
    <td><a href="#update_kinesis_streaming_destination"><CopyableCode code="update_kinesis_streaming_destination" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-StreamArn"><code>StreamArn</code></a></td>
    <td></td>
    <td>The command to update the Kinesis stream destination.</td>
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
    defaultValue="describe_kinesis_streaming_destination"
    values={[
        { label: 'describe_kinesis_streaming_destination', value: 'describe_kinesis_streaming_destination' }
    ]}
>
<TabItem value="describe_kinesis_streaming_destination">

Returns information about the status of Kinesis streaming.

```sql
SELECT
KinesisDataStreamDestinations,
TableName
FROM aws.dynamodb.kinesis_streaming_destinations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_kinesis_streaming_destination"
    values={[
        { label: 'update_kinesis_streaming_destination', value: 'update_kinesis_streaming_destination' }
    ]}
>
<TabItem value="update_kinesis_streaming_destination">

The command to update the Kinesis stream destination.

```sql
UPDATE aws.dynamodb.kinesis_streaming_destinations
SET 
TableName = '{{ TableName }}',
StreamArn = '{{ StreamArn }}',
UpdateKinesisStreamingConfiguration = '{{ UpdateKinesisStreamingConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND TableName = '{{ TableName }}' --required
AND StreamArn = '{{ StreamArn }}' --required
RETURNING
DestinationStatus,
StreamArn,
TableName,
UpdateKinesisStreamingConfiguration;
```
</TabItem>
</Tabs>
