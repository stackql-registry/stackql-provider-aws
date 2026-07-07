--- 
title: insights_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - insights_datas
  - cloudtrail
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

Creates, updates, deletes, gets or lists an <code>insights_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="insights_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudtrail.insights_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_insights_data"
    values={[
        { label: 'list_insights_data', value: 'list_insights_data' }
    ]}
>
<TabItem value="list_insights_data">

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
    <td><CopyableCode code="AccessKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services access key ID that was used to sign the request. If the request was made with temporary security credentials, this is the access key ID of the temporary credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="CloudTrailEvent" /></td>
    <td><code>string</code></td>
    <td>A JSON string that contains a representation of the event returned.</td>
</tr>
<tr>
    <td><CopyableCode code="EventId" /></td>
    <td><code>string</code></td>
    <td>The CloudTrail ID of the event returned.</td>
</tr>
<tr>
    <td><CopyableCode code="EventName" /></td>
    <td><code>string</code></td>
    <td>The name of the event returned.</td>
</tr>
<tr>
    <td><CopyableCode code="EventSource" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service to which the request was made.</td>
</tr>
<tr>
    <td><CopyableCode code="EventTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the event returned.</td>
</tr>
<tr>
    <td><CopyableCode code="ReadOnly" /></td>
    <td><code>string</code></td>
    <td>Information about whether the event is a write event or a read event.</td>
</tr>
<tr>
    <td><CopyableCode code="Resources" /></td>
    <td><code>array</code></td>
    <td>A list of resources referenced by the event returned.</td>
</tr>
<tr>
    <td><CopyableCode code="Username" /></td>
    <td><code>string</code></td>
    <td>A user name or role name of the requester that called the API in the event returned.</td>
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
    <td><a href="#list_insights_data"><CopyableCode code="list_insights_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns Insights events generated on a trail that logs data events. You can list Insights events that occurred in a Region within the last 90 days. ListInsightsData supports the following Dimensions for Insights events: Event ID Event name Event source All dimensions are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results. The rate of ListInsightsData requests is limited to two per second, per account, per Region. If this limit is exceeded, a throttling error occurs.</td>
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
    defaultValue="list_insights_data"
    values={[
        { label: 'list_insights_data', value: 'list_insights_data' }
    ]}
>
<TabItem value="list_insights_data">

Returns Insights events generated on a trail that logs data events. You can list Insights events that occurred in a Region within the last 90 days. ListInsightsData supports the following Dimensions for Insights events: Event ID Event name Event source All dimensions are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results. The rate of ListInsightsData requests is limited to two per second, per account, per Region. If this limit is exceeded, a throttling error occurs.

```sql
SELECT
AccessKeyId,
CloudTrailEvent,
EventId,
EventName,
EventSource,
EventTime,
ReadOnly,
Resources,
Username
FROM aws.cloudtrail.insights_datas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
