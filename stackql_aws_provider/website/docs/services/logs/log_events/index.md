--- 
title: log_events
hide_title: false
hide_table_of_contents: false
keywords:
  - log_events
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

Creates, updates, deletes, gets or lists a <code>log_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="log_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.log_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_log_events"
    values={[
        { label: 'get_log_events', value: 'get_log_events' }
    ]}
>
<TabItem value="get_log_events">

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
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>The events.</td>
</tr>
<tr>
    <td><CopyableCode code="next_backward_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. The token expires after 24 hours.</td>
</tr>
<tr>
    <td><CopyableCode code="next_forward_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. The token expires after 24 hours.</td>
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
    <td><a href="#get_log_events"><CopyableCode code="get_log_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists log events from the specified log stream. You can list all of the log events or filter using a time range. GetLogEvents is a paginated operation. Each page returned can contain up to 1 MB of log events or up to 10,000 log events. A returned page might only be partially full, or even empty. For example, if the result of a query would return 15,000 log events, the first page isn't guaranteed to have 10,000 log events even if they all fit into 1 MB. Partially full or empty pages don't necessarily mean that pagination is finished. As long as the nextBackwardToken or nextForwardToken returned is NOT equal to the nextToken that you passed into the API call, there might be more log events available. The token that you use depends on the direction you want to move in along the log stream. The returned tokens are never null. If you set startFromHead to true and you don’t include endTime in your request, you can end up in a situation where the pagination doesn't terminate. This can happen when the new log events are being added to the target log streams faster than they are being read. This situation is a good use case for the CloudWatch Logs Live Tail feature. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see CloudWatch cross-account observability. You can specify the log group to search by using either logGroupIdentifier or logGroupName. You must include one of these two parameters, but you can't include both. If you are using log transformation, the GetLogEvents operation returns only the original versions of log events, before they were transformed. To view the transformed versions, you must use a CloudWatch Logs query.</td>
</tr>
<tr>
    <td><a href="#put_log_events"><CopyableCode code="put_log_events" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupName"><code>logGroupName</code></a>, <a href="#parameter-logStreamName"><code>logStreamName</code></a>, <a href="#parameter-logEvents"><code>logEvents</code></a></td>
    <td></td>
    <td>Uploads a batch of log events to the specified log stream. The sequence token is now ignored in PutLogEvents actions. PutLogEvents actions are always accepted and never return InvalidSequenceTokenException or DataAlreadyAcceptedException even if the sequence token is not valid. You can use parallel PutLogEvents actions on the same log stream. The batch of events must satisfy the following constraints: The maximum batch size is 1,048,576 bytes. This size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event. Events more than 2 hours in the future are rejected while processing remaining valid events. Events older than 14 days or preceding the log group's retention period are rejected while processing remaining valid events. The log events in the batch must be in chronological order by their timestamp. The timestamp is the time that the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. (In Amazon Web Services Tools for PowerShell and the Amazon Web Services SDK for .NET, the timestamp is specified in .NET format: yyyy-mm-ddThh:mm:ss. For example, 2017-09-15T13:45:30.) A batch of log events in a single request must be in a chronological order. Otherwise, the operation fails. Each log event can be no larger than 1 MB. The maximum number of log events in a batch is 10,000. For valid events (within 14 days in the past to 2 hours in future), the time span in a single batch cannot exceed 24 hours. Otherwise, the operation fails. The quota of five requests per second per log stream has been removed. Instead, PutLogEvents actions are throttled based on a per-second per-account quota. You can request an increase to the per-second throttling quota by using the Service Quotas service. If a call to PutLogEvents returns "UnrecognizedClientException" the most likely cause is a non-valid Amazon Web Services access key ID or secret key.</td>
</tr>
<tr>
    <td><a href="#filter_log_events"><CopyableCode code="filter_log_events" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists log events from the specified log group. You can list all the log events or filter the results using one or more of the following: A filter pattern A time range The log stream name, or a log stream name prefix that matches multiple log streams You must have the logs:FilterLogEvents permission to perform this operation. You can specify the log group to search by using either logGroupIdentifier or logGroupName. You must include one of these two parameters, but you can't include both. FilterLogEvents is a paginated operation. Each page returned can contain up to 1 MB of log events or up to 10,000 log events. A returned page might only be partially full, or even empty. For example, if the result of a query would return 15,000 log events, the first page isn't guaranteed to have 10,000 log events even if they all fit into 1 MB. Partially full or empty pages don't necessarily mean that pagination is finished. If the results include a nextToken, there might be more log events available. You can return these additional log events by providing the nextToken in a subsequent FilterLogEvents operation. If the results don't include a nextToken, then pagination is finished. Specifying the limit parameter only guarantees that a single page doesn't return more log events than the specified limit, but it might return fewer events than the limit. This is the expected API behavior. The returned log events are sorted by event timestamp, the timestamp when the event was ingested by CloudWatch Logs, and the ID of the PutLogEvents request. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see CloudWatch cross-account observability. If you are using log transformation, the FilterLogEvents operation returns only the original versions of log events, before they were transformed. To view the transformed versions, you must use a CloudWatch Logs query.</td>
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
    defaultValue="get_log_events"
    values={[
        { label: 'get_log_events', value: 'get_log_events' }
    ]}
>
<TabItem value="get_log_events">

Lists log events from the specified log stream. You can list all of the log events or filter using a time range. GetLogEvents is a paginated operation. Each page returned can contain up to 1 MB of log events or up to 10,000 log events. A returned page might only be partially full, or even empty. For example, if the result of a query would return 15,000 log events, the first page isn't guaranteed to have 10,000 log events even if they all fit into 1 MB. Partially full or empty pages don't necessarily mean that pagination is finished. As long as the nextBackwardToken or nextForwardToken returned is NOT equal to the nextToken that you passed into the API call, there might be more log events available. The token that you use depends on the direction you want to move in along the log stream. The returned tokens are never null. If you set startFromHead to true and you don’t include endTime in your request, you can end up in a situation where the pagination doesn't terminate. This can happen when the new log events are being added to the target log streams faster than they are being read. This situation is a good use case for the CloudWatch Logs Live Tail feature. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see CloudWatch cross-account observability. You can specify the log group to search by using either logGroupIdentifier or logGroupName. You must include one of these two parameters, but you can't include both. If you are using log transformation, the GetLogEvents operation returns only the original versions of log events, before they were transformed. To view the transformed versions, you must use a CloudWatch Logs query.

```sql
SELECT
events,
next_backward_token,
next_forward_token
FROM aws.logs.log_events
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_log_events"
    values={[
        { label: 'put_log_events', value: 'put_log_events' }
    ]}
>
<TabItem value="put_log_events">

Uploads a batch of log events to the specified log stream. The sequence token is now ignored in PutLogEvents actions. PutLogEvents actions are always accepted and never return InvalidSequenceTokenException or DataAlreadyAcceptedException even if the sequence token is not valid. You can use parallel PutLogEvents actions on the same log stream. The batch of events must satisfy the following constraints: The maximum batch size is 1,048,576 bytes. This size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event. Events more than 2 hours in the future are rejected while processing remaining valid events. Events older than 14 days or preceding the log group's retention period are rejected while processing remaining valid events. The log events in the batch must be in chronological order by their timestamp. The timestamp is the time that the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. (In Amazon Web Services Tools for PowerShell and the Amazon Web Services SDK for .NET, the timestamp is specified in .NET format: yyyy-mm-ddThh:mm:ss. For example, 2017-09-15T13:45:30.) A batch of log events in a single request must be in a chronological order. Otherwise, the operation fails. Each log event can be no larger than 1 MB. The maximum number of log events in a batch is 10,000. For valid events (within 14 days in the past to 2 hours in future), the time span in a single batch cannot exceed 24 hours. Otherwise, the operation fails. The quota of five requests per second per log stream has been removed. Instead, PutLogEvents actions are throttled based on a per-second per-account quota. You can request an increase to the per-second throttling quota by using the Service Quotas service. If a call to PutLogEvents returns "UnrecognizedClientException" the most likely cause is a non-valid Amazon Web Services access key ID or secret key.

```sql
REPLACE aws.logs.log_events
SET 
logGroupName = '{{ logGroupName }}',
logStreamName = '{{ logStreamName }}',
logEvents = '{{ logEvents }}',
sequenceToken = '{{ sequenceToken }}',
entity = '{{ entity }}'
WHERE 
region = '{{ region }}' --required
AND logGroupName = '{{ logGroupName }}' --required
AND logStreamName = '{{ logStreamName }}' --required
AND logEvents = '{{ logEvents }}' --required
RETURNING
next_sequence_token,
rejected_entity_info,
rejected_log_events_info;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="filter_log_events"
    values={[
        { label: 'filter_log_events', value: 'filter_log_events' }
    ]}
>
<TabItem value="filter_log_events">

Lists log events from the specified log group. You can list all the log events or filter the results using one or more of the following: A filter pattern A time range The log stream name, or a log stream name prefix that matches multiple log streams You must have the logs:FilterLogEvents permission to perform this operation. You can specify the log group to search by using either logGroupIdentifier or logGroupName. You must include one of these two parameters, but you can't include both. FilterLogEvents is a paginated operation. Each page returned can contain up to 1 MB of log events or up to 10,000 log events. A returned page might only be partially full, or even empty. For example, if the result of a query would return 15,000 log events, the first page isn't guaranteed to have 10,000 log events even if they all fit into 1 MB. Partially full or empty pages don't necessarily mean that pagination is finished. If the results include a nextToken, there might be more log events available. You can return these additional log events by providing the nextToken in a subsequent FilterLogEvents operation. If the results don't include a nextToken, then pagination is finished. Specifying the limit parameter only guarantees that a single page doesn't return more log events than the specified limit, but it might return fewer events than the limit. This is the expected API behavior. The returned log events are sorted by event timestamp, the timestamp when the event was ingested by CloudWatch Logs, and the ID of the PutLogEvents request. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see CloudWatch cross-account observability. If you are using log transformation, the FilterLogEvents operation returns only the original versions of log events, before they were transformed. To view the transformed versions, you must use a CloudWatch Logs query.

```sql
EXEC aws.logs.log_events.filter_log_events 
@region='{{ region }}' --required 
@@json=
'{
"logGroupName": "{{ logGroupName }}", 
"logGroupIdentifier": "{{ logGroupIdentifier }}", 
"logStreamNames": "{{ logStreamNames }}", 
"logStreamNamePrefix": "{{ logStreamNamePrefix }}", 
"startTime": {{ startTime }}, 
"endTime": {{ endTime }}, 
"filterPattern": "{{ filterPattern }}", 
"nextToken": "{{ nextToken }}", 
"limit": {{ limit }}, 
"interleaved": {{ interleaved }}, 
"unmask": {{ unmask }}
}'
;
```
</TabItem>
</Tabs>
