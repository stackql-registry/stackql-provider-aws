--- 
title: lineage_events
hide_title: false
hide_table_of_contents: false
keywords:
  - lineage_events
  - datazone
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

Creates, updates, deletes, gets or lists a <code>lineage_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lineage_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.lineage_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_lineage_event"
    values={[
        { label: 'get_lineage_event', value: 'get_lineage_event' },
        { label: 'list_lineage_events', value: 'list_lineage_events' }
    ]}
>
<TabItem value="get_lineage_event">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the lineage event. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the lineage event was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user who created the lineage event.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event" /></td>
    <td><code>string (byte)</code></td>
    <td>The lineage event details.</td>
</tr>
<tr>
    <td><CopyableCode code="event_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time of the lineage event.</td>
</tr>
<tr>
    <td><CopyableCode code="processing_status" /></td>
    <td><code>string</code></td>
    <td>The progressing status of the lineage event. (REQUESTED, PROCESSING, SUCCESS, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_lineage_events">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the data lineage event. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which data lineage event was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user who created the data lineage event.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The domain ID of the lineage event. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_summary" /></td>
    <td><code>object</code></td>
    <td>The summary of the data lineate event.</td>
</tr>
<tr>
    <td><CopyableCode code="event_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time of the data lineage event.</td>
</tr>
<tr>
    <td><CopyableCode code="processing_status" /></td>
    <td><code>string</code></td>
    <td>The processing status of the data lineage event. (REQUESTED, PROCESSING, SUCCESS, FAILED)</td>
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
    <td><a href="#get_lineage_event"><CopyableCode code="get_lineage_event" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the lineage event.</td>
</tr>
<tr>
    <td><a href="#list_lineage_events"><CopyableCode code="list_lineage_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-timestampAfter"><code>timestampAfter</code></a>, <a href="#parameter-timestampBefore"><code>timestampBefore</code></a>, <a href="#parameter-processingStatus"><code>processingStatus</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists lineage events.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain where you want to list lineage events.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the lineage event.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of lineage events to return in a single call to ListLineageEvents. When the number of lineage events to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListLineageEvents to list the next set of lineage events.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of lineage events is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of lineage events, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListLineageEvents to list the next set of lineage events.</td>
</tr>
<tr id="parameter-processingStatus">
    <td><CopyableCode code="processingStatus" /></td>
    <td><code>string</code></td>
    <td>The processing status of a lineage event.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order of the lineage events.</td>
</tr>
<tr id="parameter-timestampAfter">
    <td><CopyableCode code="timestampAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>The after timestamp of a lineage event.</td>
</tr>
<tr id="parameter-timestampBefore">
    <td><CopyableCode code="timestampBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>The before timestamp of a lineage event.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_lineage_event"
    values={[
        { label: 'get_lineage_event', value: 'get_lineage_event' },
        { label: 'list_lineage_events', value: 'list_lineage_events' }
    ]}
>
<TabItem value="get_lineage_event">

Describes the lineage event.

```sql
SELECT
id,
created_at,
created_by,
domain_id,
event,
event_time,
processing_status
FROM aws.datazone.lineage_events
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_lineage_events">

Lists lineage events.

```sql
SELECT
id,
created_at,
created_by,
domain_id,
event_summary,
event_time,
processing_status
FROM aws.datazone.lineage_events
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND timestampAfter = '{{ timestampAfter }}'
AND timestampBefore = '{{ timestampBefore }}'
AND processingStatus = '{{ processingStatus }}'
AND sortOrder = '{{ sortOrder }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
