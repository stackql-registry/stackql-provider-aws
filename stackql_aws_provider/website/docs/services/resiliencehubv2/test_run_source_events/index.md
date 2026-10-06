--- 
title: test_run_source_events
hide_title: false
hide_table_of_contents: false
keywords:
  - test_run_source_events
  - resiliencehubv2
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

Creates, updates, deletes, gets or lists a <code>test_run_source_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_run_source_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.test_run_source_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_test_run_source_events"
    values={[
        { label: 'list_test_run_source_events', value: 'list_test_run_source_events' }
    ]}
>
<TabItem value="list_test_run_source_events">

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
    <td><CopyableCode code="detail" /></td>
    <td><code>object</code></td>
    <td>The event payload.</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>The type of the event. ALARM indicates an event from a CloudWatch alarm source; the detail member carries either the alarm state change or a collection error. (ALARM)</td>
</tr>
<tr>
    <td><CopyableCode code="source_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a test run monitoring source, such as a CloudWatch alarm. (pattern: &lt;code&gt;arn:aws&#91;a-zA-Z-&#93;*:&#91;a-z&#93;&#91;a-z0-9-&#93;*:&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)+-\d&#123;1&#125;:\d&#123;12&#125;:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the event occurred.</td>
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
    <td><a href="#list_test_run_source_events"><CopyableCode code="list_test_run_source_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-test_run_id"><code>test_run_id</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-sourceArn"><code>sourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the state-change events observed for a test run monitoring source. Events are returned for one source per call, in chronological order.</td>
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
<tr id="parameter-serviceArn">
    <td><CopyableCode code="serviceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the service the test run belongs to.</td>
</tr>
<tr id="parameter-sourceArn">
    <td><CopyableCode code="sourceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the monitoring source to list events for, such as the ARN of a CloudWatch alarm. If the source was not monitored during the test run, the response is an empty list.</td>
</tr>
<tr id="parameter-test_run_id">
    <td><CopyableCode code="test_run_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the test run to list source events for.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_test_run_source_events"
    values={[
        { label: 'list_test_run_source_events', value: 'list_test_run_source_events' }
    ]}
>
<TabItem value="list_test_run_source_events">

Lists the state-change events observed for a test run monitoring source. Events are returned for one source per call, in chronological order.

```sql
SELECT
detail,
event_type,
source_arn,
timestamp
FROM aws.resiliencehubv2.test_run_source_events
WHERE test_run_id = '{{ test_run_id }}' -- required
AND serviceArn = '{{ serviceArn }}' -- required
AND sourceArn = '{{ sourceArn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
