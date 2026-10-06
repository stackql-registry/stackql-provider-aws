--- 
title: streams
hide_title: false
hide_table_of_contents: false
keywords:
  - streams
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

Creates, updates, deletes, gets or lists a <code>streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.streams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_stream_for_segments"
    values={[
        { label: 'get_stream_for_segments', value: 'get_stream_for_segments' }
    ]}
>
<TabItem value="get_stream_for_segments">

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
    <td><CopyableCode code="associated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the stream was associated.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_segments" /></td>
    <td><code>array</code></td>
    <td>A list of segments currently associated with the stream and their subscription status.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Kinesis data stream receiving segment membership events.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role used for Amazon Kinesis and AWS Key Management Service (KMS) operations. (pattern: &lt;code&gt;.*arn:aws:iam:.*:&#91;0-9&#93;+:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="disassociated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the stream was disassociated.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason why the stream is in an unhealthy state, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The operational state of the destination stream. The following are valid values: RUNNING: The stream is associated and healthy. Segment membership events are being published. UNHEALTHY: The stream is associated but events cannot currently be published. See FailureReason for details. STOPPED: The stream is no longer publishing segment membership events. (RUNNING, UNHEALTHY, STOPPED)</td>
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
    <td><a href="#get_stream_for_segments"><CopyableCode code="get_stream_for_segments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the segment membership event stream configured for a specific domain, including the stream state and associated segments.</td>
</tr>
<tr>
    <td><a href="#associate_stream_for_segments"><CopyableCode code="associate_stream_for_segments" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DestinationArn"><code>DestinationArn</code></a>, <a href="#parameter-DestinationRoleArn"><code>DestinationRoleArn</code></a></td>
    <td></td>
    <td>Associates an Amazon Kinesis data stream to receive segment membership events for a given domain. This is a domain-level configuration that applies to all segment subscriptions within the domain. A domain can have only one associated stream at a time.</td>
</tr>
<tr>
    <td><a href="#disassociate_stream_for_segments"><CopyableCode code="disassociate_stream_for_segments" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates the Amazon Kinesis data stream configured for segment membership events. All active segment subscriptions delivering events to this stream are eventually stopped.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_stream_for_segments"
    values={[
        { label: 'get_stream_for_segments', value: 'get_stream_for_segments' }
    ]}
>
<TabItem value="get_stream_for_segments">

Returns information about the segment membership event stream configured for a specific domain, including the stream state and associated segments.

```sql
SELECT
associated_at,
associated_segments,
destination_arn,
destination_role_arn,
disassociated_at,
domain_name,
failure_reason,
state
FROM aws.customer_profiles.streams
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_stream_for_segments"
    values={[
        { label: 'associate_stream_for_segments', value: 'associate_stream_for_segments' },
        { label: 'disassociate_stream_for_segments', value: 'disassociate_stream_for_segments' }
    ]}
>
<TabItem value="associate_stream_for_segments">

Associates an Amazon Kinesis data stream to receive segment membership events for a given domain. This is a domain-level configuration that applies to all segment subscriptions within the domain. A domain can have only one associated stream at a time.

```sql
UPDATE aws.customer_profiles.streams
SET 
DestinationArn = '{{ DestinationArn }}',
DestinationRoleArn = '{{ DestinationRoleArn }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
AND DestinationArn = '{{ DestinationArn }}' --required
AND DestinationRoleArn = '{{ DestinationRoleArn }}' --required;
```
</TabItem>
<TabItem value="disassociate_stream_for_segments">

Disassociates the Amazon Kinesis data stream configured for segment membership events. All active segment subscriptions delivering events to this stream are eventually stopped.

```sql
UPDATE aws.customer_profiles.streams
SET 
-- No updatable properties
WHERE 
domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
RETURNING
message;
```
</TabItem>
</Tabs>
