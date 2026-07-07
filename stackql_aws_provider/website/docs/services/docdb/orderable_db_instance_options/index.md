--- 
title: orderable_db_instance_options
hide_title: false
hide_table_of_contents: false
keywords:
  - orderable_db_instance_options
  - docdb
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

Creates, updates, deletes, gets or lists an <code>orderable_db_instance_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="orderable_db_instance_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.docdb.orderable_db_instance_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_orderable_db_instance_options"
    values={[
        { label: 'describe_orderable_db_instance_options', value: 'describe_orderable_db_instance_options' }
    ]}
>
<TabItem value="describe_orderable_db_instance_options">

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
    <td><CopyableCode code="AvailabilityZones" /></td>
    <td><code>string</code></td>
    <td>A list of Availability Zones for an instance.</td>
</tr>
<tr>
    <td><CopyableCode code="DBInstanceClass" /></td>
    <td><code>string</code></td>
    <td>The instance class for an instance.</td>
</tr>
<tr>
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The engine type of an instance.</td>
</tr>
<tr>
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The engine version of an instance.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseModel" /></td>
    <td><code>string</code></td>
    <td>The license model for an instance.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageType" /></td>
    <td><code>string</code></td>
    <td>The storage type to associate with the DB cluster</td>
</tr>
<tr>
    <td><CopyableCode code="Vpc" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether an instance is in a virtual private cloud (VPC).</td>
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
    <td><a href="#describe_orderable_db_instance_options"><CopyableCode code="describe_orderable_db_instance_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-DBInstanceClass"><code>DBInstanceClass</code></a>, <a href="#parameter-LicenseModel"><code>LicenseModel</code></a>, <a href="#parameter-Vpc"><code>Vpc</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a list of orderable instance options for the specified engine.</td>
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
<tr id="parameter-DBInstanceClass">
    <td><CopyableCode code="DBInstanceClass" /></td>
    <td><code>string</code></td>
    <td>The instance class filter value. Specify this parameter to show only the available offerings that match the specified instance class.</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The name of the engine to retrieve instance options for.</td>
</tr>
<tr id="parameter-EngineVersion">
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The engine version filter value. Specify this parameter to show only the available offerings that match the specified engine version.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter is not currently supported.</td>
</tr>
<tr id="parameter-LicenseModel">
    <td><CopyableCode code="LicenseModel" /></td>
    <td><code>string</code></td>
    <td>The license model filter value. Specify this parameter to show only the available offerings that match the specified license model.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token (marker) is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-Vpc">
    <td><CopyableCode code="Vpc" /></td>
    <td><code>boolean</code></td>
    <td>The virtual private cloud (VPC) filter value. Specify this parameter to show only the available VPC or non-VPC offerings.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_orderable_db_instance_options"
    values={[
        { label: 'describe_orderable_db_instance_options', value: 'describe_orderable_db_instance_options' }
    ]}
>
<TabItem value="describe_orderable_db_instance_options">

Returns a list of orderable instance options for the specified engine.

```sql
SELECT
AvailabilityZones,
DBInstanceClass,
Engine,
EngineVersion,
LicenseModel,
StorageType,
Vpc
FROM aws.docdb.orderable_db_instance_options
WHERE region = '{{ region }}' -- required
AND Engine = '{{ Engine }}'
AND EngineVersion = '{{ EngineVersion }}'
AND DBInstanceClass = '{{ DBInstanceClass }}'
AND LicenseModel = '{{ LicenseModel }}'
AND Vpc = '{{ Vpc }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
