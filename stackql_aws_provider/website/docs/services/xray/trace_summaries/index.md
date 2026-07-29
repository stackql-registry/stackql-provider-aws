--- 
title: trace_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - trace_summaries
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

Creates, updates, deletes, gets or lists a <code>trace_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trace_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.xray.trace_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_trace_summaries"
    values={[
        { label: 'get_trace_summaries', value: 'get_trace_summaries' }
    ]}
>
<TabItem value="get_trace_summaries">

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
    <td><CopyableCode code="annotations" /></td>
    <td><code>object</code></td>
    <td>Annotations from the trace's segment documents.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>array</code></td>
    <td>A list of Availability Zones for any zone corresponding to the trace segments.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>number (double)</code></td>
    <td>The length of time in seconds between the start time of the earliest segment that started and the end time of the last segment that completed.</td>
</tr>
<tr>
    <td><CopyableCode code="entry_point" /></td>
    <td><code>object</code></td>
    <td>The root of a trace.</td>
</tr>
<tr>
    <td><CopyableCode code="error_root_causes" /></td>
    <td><code>array</code></td>
    <td>A collection of ErrorRootCause structures corresponding to the trace segments.</td>
</tr>
<tr>
    <td><CopyableCode code="fault_root_causes" /></td>
    <td><code>array</code></td>
    <td>A collection of FaultRootCause structures corresponding to the trace segments.</td>
</tr>
<tr>
    <td><CopyableCode code="has_error" /></td>
    <td><code>boolean</code></td>
    <td>The root segment document has a 400 series error.</td>
</tr>
<tr>
    <td><CopyableCode code="has_fault" /></td>
    <td><code>boolean</code></td>
    <td>The root segment document has a 500 series error.</td>
</tr>
<tr>
    <td><CopyableCode code="has_throttle" /></td>
    <td><code>boolean</code></td>
    <td>One or more of the segment documents has a 429 throttling error.</td>
</tr>
<tr>
    <td><CopyableCode code="http" /></td>
    <td><code>object</code></td>
    <td>Information about the HTTP request served by the trace.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the request that generated the trace's segments and subsegments.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_ids" /></td>
    <td><code>array</code></td>
    <td>A list of EC2 instance IDs for any instance corresponding to the trace segments.</td>
</tr>
<tr>
    <td><CopyableCode code="is_partial" /></td>
    <td><code>boolean</code></td>
    <td>One or more of the segment documents is in progress.</td>
</tr>
<tr>
    <td><CopyableCode code="matched_event_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The matched time stamp of a defined event.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arns" /></td>
    <td><code>array</code></td>
    <td>A list of resource ARNs for any resource corresponding to the trace segments.</td>
</tr>
<tr>
    <td><CopyableCode code="response_time" /></td>
    <td><code>number (double)</code></td>
    <td>The length of time in seconds between the start and end times of the root segment. If the service performs work asynchronously, the response time measures the time before the response is sent to the user, while the duration measures the amount of time before the last traced activity completes.</td>
</tr>
<tr>
    <td><CopyableCode code="response_time_root_causes" /></td>
    <td><code>array</code></td>
    <td>A collection of ResponseTimeRootCause structures corresponding to the trace segments.</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>integer</code></td>
    <td>The revision number of a trace.</td>
</tr>
<tr>
    <td><CopyableCode code="service_ids" /></td>
    <td><code>array</code></td>
    <td>Service IDs from the trace's segment documents.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of a trace, based on the earliest trace segment start time.</td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td>Users from the trace's segment documents.</td>
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
    <td><a href="#get_trace_summaries"><CopyableCode code="get_trace_summaries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to BatchGetTraces. A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through api.example.com: service("api.example.com") This filter expression finds traces that have an annotation named account with the value 12345: annotation.account = "12345" For a full list of indexed fields and keywords that you can use in filter expressions, see Use filter expressions in the Amazon Web Services X-Ray Developer Guide.</td>
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
    defaultValue="get_trace_summaries"
    values={[
        { label: 'get_trace_summaries', value: 'get_trace_summaries' }
    ]}
>
<TabItem value="get_trace_summaries">

Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to BatchGetTraces. A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through api.example.com: service("api.example.com") This filter expression finds traces that have an annotation named account with the value 12345: annotation.account = "12345" For a full list of indexed fields and keywords that you can use in filter expressions, see Use filter expressions in the Amazon Web Services X-Ray Developer Guide.

```sql
SELECT
annotations,
availability_zones,
duration,
entry_point,
error_root_causes,
fault_root_causes,
has_error,
has_fault,
has_throttle,
http,
id,
instance_ids,
is_partial,
matched_event_time,
resource_arns,
response_time,
response_time_root_causes,
revision,
service_ids,
start_time,
users
FROM aws.xray.trace_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
