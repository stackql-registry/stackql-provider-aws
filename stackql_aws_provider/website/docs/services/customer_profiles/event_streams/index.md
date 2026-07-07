--- 
title: event_streams
hide_title: false
hide_table_of_contents: false
keywords:
  - event_streams
  - customer_profiles
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

Creates, updates, deletes, gets or lists an <code>event_streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.event_streams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_event_stream"
    values={[
        { label: 'get_event_stream', value: 'get_event_stream' },
        { label: 'list_event_streams', value: 'list_event_streams' }
    ]}
>
<TabItem value="get_event_stream">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the export was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationDetails" /></td>
    <td><code>object</code></td>
    <td>Details regarding the Kinesis stream.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EventStreamArn" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the event stream.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The operational state of destination stream for export. (RUNNING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="StoppedSince" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the State changed to STOPPED.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_event_streams">

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
    <td><CopyableCode code="DestinationSummary" /></td>
    <td><code>object</code></td>
    <td>Summary information about the Kinesis data stream.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EventStreamArn" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the event stream.</td>
</tr>
<tr>
    <td><CopyableCode code="EventStreamName" /></td>
    <td><code>string</code></td>
    <td>The name of the event stream. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The operational state of destination stream for export. (RUNNING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="StoppedSince" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the State changed to STOPPED.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
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
    <td><a href="#get_event_stream"><CopyableCode code="get_event_stream" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-event_stream_name"><code>event_stream_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified event stream in a specific domain.</td>
</tr>
<tr>
    <td><a href="#list_event_streams"><CopyableCode code="list_event_streams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Returns a list of all the event streams in a specific domain.</td>
</tr>
<tr>
    <td><a href="#create_event_stream"><CopyableCode code="create_event_stream" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-event_stream_name"><code>event_stream_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Uri"><code>Uri</code></a></td>
    <td></td>
    <td>Creates an event stream, which is a subscription to real-time events, such as when profiles are created and updated through Amazon Connect Customer Profiles. Each event stream can be associated with only one Kinesis Data Stream destination in the same region and Amazon Web Services account as the customer profiles domain</td>
</tr>
<tr>
    <td><a href="#delete_event_stream"><CopyableCode code="delete_event_stream" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-event_stream_name"><code>event_stream_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables and deletes the specified event stream.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain.</td>
</tr>
<tr id="parameter-event_stream_name">
    <td><CopyableCode code="event_stream_name" /></td>
    <td><code>string</code></td>
    <td>The name of the event stream</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of objects returned per page.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>Identifies the next page of results to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_event_stream"
    values={[
        { label: 'get_event_stream', value: 'get_event_stream' },
        { label: 'list_event_streams', value: 'list_event_streams' }
    ]}
>
<TabItem value="get_event_stream">

Returns information about the specified event stream in a specific domain.

```sql
SELECT
CreatedAt,
DestinationDetails,
DomainName,
EventStreamArn,
State,
StoppedSince,
Tags
FROM aws.customer_profiles.event_streams
WHERE domain_name = '{{ domain_name }}' -- required
AND event_stream_name = '{{ event_stream_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_event_streams">

Returns a list of all the event streams in a specific domain.

```sql
SELECT
DestinationSummary,
DomainName,
EventStreamArn,
EventStreamName,
State,
StoppedSince,
Tags
FROM aws.customer_profiles.event_streams
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_event_stream"
    values={[
        { label: 'create_event_stream', value: 'create_event_stream' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_event_stream">

Creates an event stream, which is a subscription to real-time events, such as when profiles are created and updated through Amazon Connect Customer Profiles. Each event stream can be associated with only one Kinesis Data Stream destination in the same region and Amazon Web Services account as the customer profiles domain

```sql
INSERT INTO aws.customer_profiles.event_streams (
Uri,
Tags,
domain_name,
event_stream_name,
region
)
SELECT 
'{{ Uri }}' /* required */,
'{{ Tags }}',
'{{ domain_name }}',
'{{ event_stream_name }}',
'{{ region }}'
RETURNING
EventStreamArn,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: event_streams
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the event_streams resource.
    - name: event_stream_name
      value: "{{ event_stream_name }}"
      description: Required parameter for the event_streams resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the event_streams resource.
    - name: Uri
      value: "{{ Uri }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_event_stream"
    values={[
        { label: 'delete_event_stream', value: 'delete_event_stream' }
    ]}
>
<TabItem value="delete_event_stream">

Disables and deletes the specified event stream.

```sql
DELETE FROM aws.customer_profiles.event_streams
WHERE domain_name = '{{ domain_name }}' --required
AND event_stream_name = '{{ event_stream_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
