--- 
title: traces
hide_title: false
hide_table_of_contents: false
keywords:
  - traces
  - xray
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

Creates, updates, deletes, gets or lists a <code>traces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="traces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.xray.traces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_traces"
    values={[
        { label: 'batch_get_traces', value: 'batch_get_traces' }
    ]}
>
<TabItem value="batch_get_traces">

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
    <td><CopyableCode code="duration" /></td>
    <td><code>number (double)</code></td>
    <td>The length of time in seconds between the start time of the earliest segment that started and the end time of the last segment that completed.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the request that generated the trace's segments and subsegments.</td>
</tr>
<tr>
    <td><CopyableCode code="limit_exceeded" /></td>
    <td><code>boolean</code></td>
    <td>LimitExceeded is set to true when the trace has exceeded the Trace document size limit. For more information about this limit and other X-Ray limits and quotas, see Amazon Web Services X-Ray endpoints and quotas.</td>
</tr>
<tr>
    <td><CopyableCode code="segments" /></td>
    <td><code>array</code></td>
    <td>Segment documents for the segments and subsegments that comprise the trace.</td>
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
    <td><a href="#batch_get_traces"><CopyableCode code="batch_get_traces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>You cannot find traces through this API if Transaction Search is enabled since trace is not indexed in X-Ray. Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use GetTraceSummaries to get a list of trace IDs.</td>
</tr>
<tr>
    <td><a href="#put_trace_segments"><CopyableCode code="put_trace_segments" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TraceSegmentDocuments"><code>TraceSegmentDocuments</code></a></td>
    <td></td>
    <td>Uploads segment documents to Amazon Web Services X-Ray. A segment document can be a completed segment, an in-progress segment, or an array of subsegments. Segments must include the following fields. For the full segment document schema, see Amazon Web Services X-Ray Segment Documents in the Amazon Web Services X-Ray Developer Guide. Required segment document fields name - The name of the service that handled the request. id - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits. trace_id - A unique identifier that connects all segments and subsegments originating from a single client request. start_time - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, 1480615200.010 or 1.480615200010E9. end_time - Time the segment or subsegment was closed. For example, 1480615200.090 or 1.480615200090E9. Specify either an end_time or in_progress. in_progress - Set to true instead of specifying an end_time to record that a segment has been started, but is not complete. Send an in-progress segment when your application receives a request that will take a long time to serve, to trace that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment. A trace_id consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. For trace IDs created by an X-Ray SDK, or by Amazon Web Services services integrated with X-Ray, a trace ID includes: Trace ID Format The version number, for instance, 1. The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is 1480615200 seconds, or 58406520 in hexadecimal. A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits. Trace IDs created via OpenTelemetry have a different format based on the W3C Trace Context specification. A W3C trace ID must be formatted in the X-Ray trace ID format when sending to X-Ray. For example, a W3C trace ID 4efaaf4d1e8720b39541901950019ee5 should be formatted as 1-4efaaf4d-1e8720b39541901950019ee5 when sending to X-Ray. While X-Ray trace IDs include the original request timestamp in Unix epoch time, this is not required or validated.</td>
</tr>
<tr>
    <td><a href="#cancel_trace_retrieval"><CopyableCode code="cancel_trace_retrieval" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RetrievalToken"><code>RetrievalToken</code></a></td>
    <td></td>
    <td>Cancels an ongoing trace retrieval job initiated by StartTraceRetrieval using the provided RetrievalToken. A successful cancellation will return an HTTP 200 response.</td>
</tr>
<tr>
    <td><a href="#start_trace_retrieval"><CopyableCode code="start_trace_retrieval" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TraceIds"><code>TraceIds</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a></td>
    <td></td>
    <td>Initiates a trace retrieval process using the specified time range and for the given trace IDs in the Transaction Search generated CloudWatch log group. For more information, see Transaction Search. API returns a RetrievalToken, which can be used with ListRetrievedTraces or GetRetrievedTracesGraph to fetch results. Retrievals will time out after 60 minutes. To execute long time ranges, consider segmenting into multiple retrievals. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to retrieve data from a linked source account, as long as both accounts have transaction search enabled. For retrieving data from X-Ray directly as opposed to the Transaction-Search Log group, see BatchGetTraces.</td>
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
    defaultValue="batch_get_traces"
    values={[
        { label: 'batch_get_traces', value: 'batch_get_traces' }
    ]}
>
<TabItem value="batch_get_traces">

You cannot find traces through this API if Transaction Search is enabled since trace is not indexed in X-Ray. Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use GetTraceSummaries to get a list of trace IDs.

```sql
SELECT
duration,
id,
limit_exceeded,
segments
FROM aws.xray.traces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_trace_segments"
    values={[
        { label: 'put_trace_segments', value: 'put_trace_segments' }
    ]}
>
<TabItem value="put_trace_segments">

Uploads segment documents to Amazon Web Services X-Ray. A segment document can be a completed segment, an in-progress segment, or an array of subsegments. Segments must include the following fields. For the full segment document schema, see Amazon Web Services X-Ray Segment Documents in the Amazon Web Services X-Ray Developer Guide. Required segment document fields name - The name of the service that handled the request. id - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits. trace_id - A unique identifier that connects all segments and subsegments originating from a single client request. start_time - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, 1480615200.010 or 1.480615200010E9. end_time - Time the segment or subsegment was closed. For example, 1480615200.090 or 1.480615200090E9. Specify either an end_time or in_progress. in_progress - Set to true instead of specifying an end_time to record that a segment has been started, but is not complete. Send an in-progress segment when your application receives a request that will take a long time to serve, to trace that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment. A trace_id consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. For trace IDs created by an X-Ray SDK, or by Amazon Web Services services integrated with X-Ray, a trace ID includes: Trace ID Format The version number, for instance, 1. The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is 1480615200 seconds, or 58406520 in hexadecimal. A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits. Trace IDs created via OpenTelemetry have a different format based on the W3C Trace Context specification. A W3C trace ID must be formatted in the X-Ray trace ID format when sending to X-Ray. For example, a W3C trace ID 4efaaf4d1e8720b39541901950019ee5 should be formatted as 1-4efaaf4d-1e8720b39541901950019ee5 when sending to X-Ray. While X-Ray trace IDs include the original request timestamp in Unix epoch time, this is not required or validated.

```sql
REPLACE aws.xray.traces
SET 
TraceSegmentDocuments = '{{ TraceSegmentDocuments }}'
WHERE 
region = '{{ region }}' --required
AND TraceSegmentDocuments = '{{ TraceSegmentDocuments }}' --required
RETURNING
unprocessed_trace_segments;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_trace_retrieval"
    values={[
        { label: 'cancel_trace_retrieval', value: 'cancel_trace_retrieval' },
        { label: 'start_trace_retrieval', value: 'start_trace_retrieval' }
    ]}
>
<TabItem value="cancel_trace_retrieval">

Cancels an ongoing trace retrieval job initiated by StartTraceRetrieval using the provided RetrievalToken. A successful cancellation will return an HTTP 200 response.

```sql
EXEC aws.xray.traces.cancel_trace_retrieval 
@region='{{ region }}' --required 
@@json=
'{
"RetrievalToken": "{{ RetrievalToken }}"
}'
;
```
</TabItem>
<TabItem value="start_trace_retrieval">

Initiates a trace retrieval process using the specified time range and for the given trace IDs in the Transaction Search generated CloudWatch log group. For more information, see Transaction Search. API returns a RetrievalToken, which can be used with ListRetrievedTraces or GetRetrievedTracesGraph to fetch results. Retrievals will time out after 60 minutes. To execute long time ranges, consider segmenting into multiple retrievals. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to retrieve data from a linked source account, as long as both accounts have transaction search enabled. For retrieving data from X-Ray directly as opposed to the Transaction-Search Log group, see BatchGetTraces.

```sql
EXEC aws.xray.traces.start_trace_retrieval 
@region='{{ region }}' --required 
@@json=
'{
"TraceIds": "{{ TraceIds }}", 
"StartTime": "{{ StartTime }}", 
"EndTime": "{{ EndTime }}"
}'
;
```
</TabItem>
</Tabs>
