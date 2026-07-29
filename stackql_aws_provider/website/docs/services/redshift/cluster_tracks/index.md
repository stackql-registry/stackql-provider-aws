--- 
title: cluster_tracks
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_tracks
  - redshift
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

Creates, updates, deletes, gets or lists a <code>cluster_tracks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_tracks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.cluster_tracks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster_tracks"
    values={[
        { label: 'describe_cluster_tracks', value: 'describe_cluster_tracks' }
    ]}
>
<TabItem value="describe_cluster_tracks">

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
    <td><CopyableCode code="database_version" /></td>
    <td><code>string</code></td>
    <td>The version number for the cluster release.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_track_name" /></td>
    <td><code>string</code></td>
    <td>The name of the maintenance track. Possible values are current and trailing.</td>
</tr>
<tr>
    <td><CopyableCode code="update_targets" /></td>
    <td><code>string</code></td>
    <td>An array of UpdateTarget objects to update with the maintenance track.</td>
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
    <td><a href="#describe_cluster_tracks"><CopyableCode code="describe_cluster_tracks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaintenanceTrackName"><code>MaintenanceTrackName</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a list of all the available maintenance tracks.</td>
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
<tr id="parameter-MaintenanceTrackName">
    <td><CopyableCode code="MaintenanceTrackName" /></td>
    <td><code>string</code></td>
    <td>The name of the maintenance track.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeClusterTracks request exceed the value specified in MaxRecords, Amazon Redshift returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>An integer value for the maximum number of maintenance tracks to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_cluster_tracks"
    values={[
        { label: 'describe_cluster_tracks', value: 'describe_cluster_tracks' }
    ]}
>
<TabItem value="describe_cluster_tracks">

Returns a list of all the available maintenance tracks.

```sql
SELECT
database_version,
maintenance_track_name,
update_targets
FROM aws.redshift.cluster_tracks
WHERE region = '{{ region }}' -- required
AND MaintenanceTrackName = '{{ MaintenanceTrackName }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
