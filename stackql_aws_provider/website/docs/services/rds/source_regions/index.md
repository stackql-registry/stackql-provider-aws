--- 
title: source_regions
hide_title: false
hide_table_of_contents: false
keywords:
  - source_regions
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

Creates, updates, deletes, gets or lists a <code>source_regions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="source_regions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.source_regions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_source_regions"
    values={[
        { label: 'describe_source_regions', value: 'describe_source_regions' }
    ]}
>
<TabItem value="describe_source_regions">

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
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint for the source Amazon Web Services Region endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="region_name" /></td>
    <td><code>string</code></td>
    <td>The name of the source Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the source Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="supports_db_instance_automated_backups_replication" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the source Amazon Web Services Region supports replicating automated backups to the current Amazon Web Services Region.</td>
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
    <td><a href="#describe_source_regions"><CopyableCode code="describe_source_regions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RegionName"><code>RegionName</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-Filters"><code>Filters</code></a></td>
    <td>Returns a list of the source Amazon Web Services Regions where the current Amazon Web Services Region can create a read replica, copy a DB snapshot from, or replicate automated backups from. Use this operation to determine whether cross-Region features are supported between other Regions and your current Region. This operation supports pagination. To return information about the Regions that are enabled for your account, or all Regions, use the EC2 operation DescribeRegions. For more information, see DescribeRegions in the Amazon EC2 API Reference.</td>
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
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter isn't currently supported.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeSourceRegions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-RegionName">
    <td><CopyableCode code="RegionName" /></td>
    <td><code>string</code></td>
    <td>The source Amazon Web Services Region name. For example, us-east-1. Constraints: Must specify a valid Amazon Web Services Region name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_source_regions"
    values={[
        { label: 'describe_source_regions', value: 'describe_source_regions' }
    ]}
>
<TabItem value="describe_source_regions">

Returns a list of the source Amazon Web Services Regions where the current Amazon Web Services Region can create a read replica, copy a DB snapshot from, or replicate automated backups from. Use this operation to determine whether cross-Region features are supported between other Regions and your current Region. This operation supports pagination. To return information about the Regions that are enabled for your account, or all Regions, use the EC2 operation DescribeRegions. For more information, see DescribeRegions in the Amazon EC2 API Reference.

```sql
SELECT
endpoint,
region_name,
status,
supports_db_instance_automated_backups_replication
FROM aws.rds.source_regions
WHERE region = '{{ region }}' -- required
AND RegionName = '{{ RegionName }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND Filters = '{{ Filters }}'
;
```
</TabItem>
</Tabs>
