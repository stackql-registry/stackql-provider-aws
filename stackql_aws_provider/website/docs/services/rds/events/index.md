--- 
title: events
hide_title: false
hide_table_of_contents: false
keywords:
  - events
  - rds
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

Creates, updates, deletes, gets or lists an <code>events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_events"
    values={[
        { label: 'describe_events', value: 'describe_events' }
    ]}
>
<TabItem value="describe_events">

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
    <td><CopyableCode code="Date" /></td>
    <td><code>string</code></td>
    <td>Specifies the date and time of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="EventCategories" /></td>
    <td><code>string</code></td>
    <td>Specifies the category for the event.</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>Provides the text of this event.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the event.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceIdentifier" /></td>
    <td><code>string</code></td>
    <td>Provides the identifier for the source of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceType" /></td>
    <td><code>string</code></td>
    <td>Specifies the source type for this event.</td>
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
    <td><a href="#describe_events"><CopyableCode code="describe_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SourceIdentifier"><code>SourceIdentifier</code></a>, <a href="#parameter-SourceType"><code>SourceType</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-Duration"><code>Duration</code></a>, <a href="#parameter-EventCategories"><code>EventCategories</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns events related to DB instances, DB clusters, DB parameter groups, DB security groups, DB snapshots, DB cluster snapshots, and RDS Proxies for the past 14 days. Events specific to a particular DB instance, DB cluster, DB parameter group, DB security group, DB snapshot, DB cluster snapshot group, or RDS Proxy can be obtained by providing the name as a parameter. For more information on working with events, see Monitoring Amazon RDS events in the Amazon RDS User Guide and Monitoring Amazon Aurora events in the Amazon Aurora User Guide. By default, RDS returns events that were generated in the past hour.</td>
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
<tr id="parameter-Duration">
    <td><CopyableCode code="Duration" /></td>
    <td><code>integer</code></td>
    <td>The number of minutes to retrieve events for. Default: 60</td>
</tr>
<tr id="parameter-EndTime">
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the time interval for which to retrieve events, specified in ISO 8601 format. For more information about ISO 8601, go to the ISO8601 Wikipedia page. Example: 2009-07-08T18:00Z</td>
</tr>
<tr id="parameter-EventCategories">
    <td><CopyableCode code="EventCategories" /></td>
    <td><code>array</code></td>
    <td>A list of event categories that trigger notifications for a event notification subscription.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter isn't currently supported.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeEvents request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-SourceIdentifier">
    <td><CopyableCode code="SourceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the event source for which events are returned. If not specified, then all sources are included in the response. Constraints: If SourceIdentifier is supplied, SourceType must also be provided. If the source type is a DB instance, a DBInstanceIdentifier value must be supplied. If the source type is a DB cluster, a DBClusterIdentifier value must be supplied. If the source type is a DB parameter group, a DBParameterGroupName value must be supplied. If the source type is a DB security group, a DBSecurityGroupName value must be supplied. If the source type is a DB snapshot, a DBSnapshotIdentifier value must be supplied. If the source type is a DB cluster snapshot, a DBClusterSnapshotIdentifier value must be supplied. If the source type is an RDS Proxy, a DBProxyName value must be supplied. Can't end with a hyphen or contain two consecutive hyphens.</td>
</tr>
<tr id="parameter-SourceType">
    <td><CopyableCode code="SourceType" /></td>
    <td><code>string</code></td>
    <td>The event source to retrieve events for. If no value is specified, all events are returned.</td>
</tr>
<tr id="parameter-StartTime">
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The beginning of the time interval to retrieve events for, specified in ISO 8601 format. For more information about ISO 8601, go to the ISO8601 Wikipedia page. Example: 2009-07-08T18:00Z</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_events"
    values={[
        { label: 'describe_events', value: 'describe_events' }
    ]}
>
<TabItem value="describe_events">

Returns events related to DB instances, DB clusters, DB parameter groups, DB security groups, DB snapshots, DB cluster snapshots, and RDS Proxies for the past 14 days. Events specific to a particular DB instance, DB cluster, DB parameter group, DB security group, DB snapshot, DB cluster snapshot group, or RDS Proxy can be obtained by providing the name as a parameter. For more information on working with events, see Monitoring Amazon RDS events in the Amazon RDS User Guide and Monitoring Amazon Aurora events in the Amazon Aurora User Guide. By default, RDS returns events that were generated in the past hour.

```sql
SELECT
Date,
EventCategories,
Message,
SourceArn,
SourceIdentifier,
SourceType
FROM aws.rds.events
WHERE region = '{{ region }}' -- required
AND SourceIdentifier = '{{ SourceIdentifier }}'
AND SourceType = '{{ SourceType }}'
AND StartTime = '{{ StartTime }}'
AND EndTime = '{{ EndTime }}'
AND Duration = '{{ Duration }}'
AND EventCategories = '{{ EventCategories }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
