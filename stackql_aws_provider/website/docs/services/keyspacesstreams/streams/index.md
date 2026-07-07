--- 
title: streams
hide_title: false
hide_table_of_contents: false
keywords:
  - streams
  - keyspacesstreams
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

Creates, updates, deletes, gets or lists a <code>streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.keyspacesstreams.streams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_stream"
    values={[
        { label: 'get_stream', value: 'get_stream' },
        { label: 'list_streams', value: 'list_streams' }
    ]}
>
<TabItem value="get_stream">

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
    <td><CopyableCode code="parentShardIds" /></td>
    <td><code>array</code></td>
    <td>The identifiers of parent shards that this shard evolved from, if this shard was created through resharding.</td>
</tr>
<tr>
    <td><CopyableCode code="sequenceNumberRange" /></td>
    <td><code>object</code></td>
    <td>The range of sequence numbers contained within this shard.</td>
</tr>
<tr>
    <td><CopyableCode code="shardId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for this shard within the stream.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_streams">

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
    <td><CopyableCode code="keyspaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the keyspace containing the table associated with this stream. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="streamArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies this stream.</td>
</tr>
<tr>
    <td><CopyableCode code="streamLabel" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for this stream that can be used in stream operations.</td>
</tr>
<tr>
    <td><CopyableCode code="tableName" /></td>
    <td><code>string</code></td>
    <td>The name of the table associated with this stream. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_stream"><CopyableCode code="get_stream" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information about a specific data capture stream for an Amazon Keyspaces table. The information includes the stream's Amazon Resource Name (ARN), creation time, current status, retention period, shard composition, and associated table details. This operation helps you monitor and manage the configuration of your Amazon Keyspaces data streams.</td>
</tr>
<tr>
    <td><a href="#list_streams"><CopyableCode code="list_streams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all data capture streams associated with your Amazon Keyspaces account or for a specific keyspace or table. The response includes information such as stream ARNs, table associations, creation timestamps, and current status. This operation helps you discover and manage all active data streams in your Amazon Keyspaces environment.</td>
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
    defaultValue="get_stream"
    values={[
        { label: 'get_stream', value: 'get_stream' },
        { label: 'list_streams', value: 'list_streams' }
    ]}
>
<TabItem value="get_stream">

Returns detailed information about a specific data capture stream for an Amazon Keyspaces table. The information includes the stream's Amazon Resource Name (ARN), creation time, current status, retention period, shard composition, and associated table details. This operation helps you monitor and manage the configuration of your Amazon Keyspaces data streams.

```sql
SELECT
parentShardIds,
sequenceNumberRange,
shardId
FROM aws.keyspacesstreams.streams
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_streams">

Returns a list of all data capture streams associated with your Amazon Keyspaces account or for a specific keyspace or table. The response includes information such as stream ARNs, table associations, creation timestamps, and current status. This operation helps you discover and manage all active data streams in your Amazon Keyspaces environment.

```sql
SELECT
keyspaceName,
streamArn,
streamLabel,
tableName
FROM aws.keyspacesstreams.streams
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
