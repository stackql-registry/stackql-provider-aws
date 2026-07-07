--- 
title: log_streams
hide_title: false
hide_table_of_contents: false
keywords:
  - log_streams
  - logs
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

Creates, updates, deletes, gets or lists a <code>log_streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="log_streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.log_streams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_log_streams"
    values={[
        { label: 'describe_log_streams', value: 'describe_log_streams' }
    ]}
>
<TabItem value="describe_log_streams">

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
    <td>The Amazon Resource Name (ARN) of the log stream.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The creation time of the stream, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="firstEventTimestamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time of the first event, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="lastEventTimestamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time of the most recent log event in the log stream in CloudWatch Logs. This number is expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. The lastEventTime value updates on an eventual consistency basis. It typically updates in less than an hour from ingestion, but in rare situations might take longer.</td>
</tr>
<tr>
    <td><CopyableCode code="lastIngestionTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>The ingestion time, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC The lastIngestionTime value updates on an eventual consistency basis. It typically updates in less than an hour after ingestion, but in rare situations might take longer.</td>
</tr>
<tr>
    <td><CopyableCode code="logStreamName" /></td>
    <td><code>string</code></td>
    <td>The name of the log stream. (pattern: &lt;code&gt;&#91;^:*&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="storedBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of bytes stored. Important: As of June 17, 2019, this parameter is no longer supported for log streams, and is always reported as zero. This change applies only to log streams. The storedBytes parameter for log groups is not affected.</td>
</tr>
<tr>
    <td><CopyableCode code="uploadSequenceToken" /></td>
    <td><code>string</code></td>
    <td>The sequence token. The sequence token is now ignored in PutLogEvents actions. PutLogEvents actions are always accepted regardless of receiving an invalid sequence token. You don't need to obtain uploadSequenceToken to use a PutLogEvents action.</td>
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
    <td><a href="#describe_log_streams"><CopyableCode code="describe_log_streams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the log streams for the specified log group. You can list all the log streams or filter the results by prefix. You can also control how the results are ordered. You can specify the log group to search by using either logGroupIdentifier or logGroupName. You must include one of these two parameters, but you can't include both. This operation has a limit of 25 transactions per second, after which transactions are throttled. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see CloudWatch cross-account observability.</td>
</tr>
<tr>
    <td><a href="#create_log_stream"><CopyableCode code="create_log_stream" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupName"><code>logGroupName</code></a>, <a href="#parameter-logStreamName"><code>logStreamName</code></a></td>
    <td></td>
    <td>Creates a log stream for the specified log group. A log stream is a sequence of log events that originate from a single source, such as an application instance or a resource that is being monitored. There is no limit on the number of log streams that you can create for a log group. There is a limit of 50 TPS on CreateLogStream operations, after which transactions are throttled. You must use the following guidelines when naming a log stream: Log stream names must be unique within the log group. Log stream names can be between 1 and 512 characters long. Don't use ':' (colon) or '*' (asterisk) characters.</td>
</tr>
<tr>
    <td><a href="#delete_log_stream"><CopyableCode code="delete_log_stream" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified log stream and permanently deletes all the archived log events associated with the log stream.</td>
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
    defaultValue="describe_log_streams"
    values={[
        { label: 'describe_log_streams', value: 'describe_log_streams' }
    ]}
>
<TabItem value="describe_log_streams">

Lists the log streams for the specified log group. You can list all the log streams or filter the results by prefix. You can also control how the results are ordered. You can specify the log group to search by using either logGroupIdentifier or logGroupName. You must include one of these two parameters, but you can't include both. This operation has a limit of 25 transactions per second, after which transactions are throttled. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see CloudWatch cross-account observability.

```sql
SELECT
arn,
creationTime,
firstEventTimestamp,
lastEventTimestamp,
lastIngestionTime,
logStreamName,
storedBytes,
uploadSequenceToken
FROM aws.logs.log_streams
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_log_stream"
    values={[
        { label: 'create_log_stream', value: 'create_log_stream' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_log_stream">

Creates a log stream for the specified log group. A log stream is a sequence of log events that originate from a single source, such as an application instance or a resource that is being monitored. There is no limit on the number of log streams that you can create for a log group. There is a limit of 50 TPS on CreateLogStream operations, after which transactions are throttled. You must use the following guidelines when naming a log stream: Log stream names must be unique within the log group. Log stream names can be between 1 and 512 characters long. Don't use ':' (colon) or '*' (asterisk) characters.

```sql
INSERT INTO aws.logs.log_streams (
logGroupName,
logStreamName,
region
)
SELECT 
'{{ logGroupName }}' /* required */,
'{{ logStreamName }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: log_streams
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the log_streams resource.
    - name: logGroupName
      value: "{{ logGroupName }}"
      description: |
        The name of the log group.
    - name: logStreamName
      value: "{{ logStreamName }}"
      description: |
        The name of the log stream.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_log_stream"
    values={[
        { label: 'delete_log_stream', value: 'delete_log_stream' }
    ]}
>
<TabItem value="delete_log_stream">

Deletes the specified log stream and permanently deletes all the archived log events associated with the log stream.

```sql
DELETE FROM aws.logs.log_streams
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
