--- 
title: db_cluster_backtracks
hide_title: false
hide_table_of_contents: false
keywords:
  - db_cluster_backtracks
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

Creates, updates, deletes, gets or lists a <code>db_cluster_backtracks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_cluster_backtracks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_cluster_backtracks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_cluster_backtracks"
    values={[
        { label: 'describe_db_cluster_backtracks', value: 'describe_db_cluster_backtracks' }
    ]}
>
<TabItem value="describe_db_cluster_backtracks">

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
    <td><CopyableCode code="backtrack_identifier" /></td>
    <td><code>string</code></td>
    <td>Contains the backtrack identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="backtrack_request_creation_time" /></td>
    <td><code>string</code></td>
    <td>The timestamp of the time at which the backtrack was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="backtrack_to" /></td>
    <td><code>string</code></td>
    <td>The timestamp of the time to which the DB cluster was backtracked.</td>
</tr>
<tr>
    <td><CopyableCode code="backtracked_from" /></td>
    <td><code>string</code></td>
    <td>The timestamp of the time from which the DB cluster was backtracked.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the backtrack. This property returns one of the following values: applying - The backtrack is currently being applied to or rolled back from the DB cluster. completed - The backtrack has successfully been applied to or rolled back from the DB cluster. failed - An error occurred while the backtrack was applied to or rolled back from the DB cluster. pending - The backtrack is currently pending application to or rollback from the DB cluster.</td>
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
    <td><a href="#describe_db_cluster_backtracks"><CopyableCode code="describe_db_cluster_backtracks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-BacktrackIdentifier"><code>BacktrackIdentifier</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns information about backtracks for a DB cluster. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. This action only applies to Aurora MySQL DB clusters.</td>
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
<tr id="parameter-DBClusterIdentifier">
    <td><CopyableCode code="DBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The DB cluster identifier of the DB cluster to be described. This parameter is stored as a lowercase string. Constraints: Must contain from 1 to 63 alphanumeric characters or hyphens. First character must be a letter. Can't end with a hyphen or contain two consecutive hyphens. Example: my-cluster1</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-BacktrackIdentifier">
    <td><CopyableCode code="BacktrackIdentifier" /></td>
    <td><code>string</code></td>
    <td>If specified, this value is the backtrack identifier of the backtrack to be described. Constraints: Must contain a valid universally unique identifier (UUID). For more information about UUIDs, see Universally unique identifier. Example: 123e4567-e89b-12d3-a456-426655440000</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more DB clusters to describe. Supported filters include the following: db-cluster-backtrack-id - Accepts backtrack identifiers. The results list includes information about only the backtracks identified by these identifiers. db-cluster-backtrack-status - Accepts any of the following backtrack status values: applying completed failed pending The results list includes information about only the backtracks identified by these values.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeDBClusterBacktracks request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_cluster_backtracks"
    values={[
        { label: 'describe_db_cluster_backtracks', value: 'describe_db_cluster_backtracks' }
    ]}
>
<TabItem value="describe_db_cluster_backtracks">

Returns information about backtracks for a DB cluster. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. This action only applies to Aurora MySQL DB clusters.

```sql
SELECT
backtrack_identifier,
backtrack_request_creation_time,
backtrack_to,
backtracked_from,
db_cluster_identifier,
status
FROM aws.rds.db_cluster_backtracks
WHERE DBClusterIdentifier = '{{ DBClusterIdentifier }}' -- required
AND region = '{{ region }}' -- required
AND BacktrackIdentifier = '{{ BacktrackIdentifier }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
