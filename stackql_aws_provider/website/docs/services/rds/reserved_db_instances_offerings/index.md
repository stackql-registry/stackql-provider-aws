--- 
title: reserved_db_instances_offerings
hide_title: false
hide_table_of_contents: false
keywords:
  - reserved_db_instances_offerings
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

Creates, updates, deletes, gets or lists a <code>reserved_db_instances_offerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reserved_db_instances_offerings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.reserved_db_instances_offerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_reserved_db_instances_offerings"
    values={[
        { label: 'describe_reserved_db_instances_offerings', value: 'describe_reserved_db_instances_offerings' }
    ]}
>
<TabItem value="describe_reserved_db_instances_offerings">

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
    <td><CopyableCode code="currency_code" /></td>
    <td><code>string</code></td>
    <td>The currency code for the reserved DB instance offering.</td>
</tr>
<tr>
    <td><CopyableCode code="db_instance_class" /></td>
    <td><code>string</code></td>
    <td>The DB instance class for the reserved DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The duration of the offering in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="fixed_price" /></td>
    <td><code>number</code></td>
    <td>The fixed price charged for this offering.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_az" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the offering applies to Multi-AZ deployments.</td>
</tr>
<tr>
    <td><CopyableCode code="offering_type" /></td>
    <td><code>string</code></td>
    <td>The offering type.</td>
</tr>
<tr>
    <td><CopyableCode code="product_description" /></td>
    <td><code>string</code></td>
    <td>The database engine used by the offering.</td>
</tr>
<tr>
    <td><CopyableCode code="recurring_charges" /></td>
    <td><code>string</code></td>
    <td>The recurring price charged to run this reserved DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="reserved_db_instances_offering_id" /></td>
    <td><code>string</code></td>
    <td>The offering identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="usage_price" /></td>
    <td><code>number</code></td>
    <td>The hourly price charged for this offering.</td>
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
    <td><a href="#describe_reserved_db_instances_offerings"><CopyableCode code="describe_reserved_db_instances_offerings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ReservedDBInstancesOfferingId"><code>ReservedDBInstancesOfferingId</code></a>, <a href="#parameter-DBInstanceClass"><code>DBInstanceClass</code></a>, <a href="#parameter-Duration"><code>Duration</code></a>, <a href="#parameter-ProductDescription"><code>ProductDescription</code></a>, <a href="#parameter-OfferingType"><code>OfferingType</code></a>, <a href="#parameter-MultiAZ"><code>MultiAZ</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Lists available reserved DB instance offerings.</td>
</tr>
<tr>
    <td><a href="#purchase_reserved_db_instances_offering"><CopyableCode code="purchase_reserved_db_instances_offering" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ReservedDBInstancesOfferingId"><code>ReservedDBInstancesOfferingId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ReservedDBInstanceId"><code>ReservedDBInstanceId</code></a>, <a href="#parameter-DBInstanceCount"><code>DBInstanceCount</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Purchases a reserved DB instance offering.</td>
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
<tr id="parameter-ReservedDBInstancesOfferingId">
    <td><CopyableCode code="ReservedDBInstancesOfferingId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Reserved DB instance offering to purchase. Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DBInstanceClass">
    <td><CopyableCode code="DBInstanceClass" /></td>
    <td><code>string</code></td>
    <td>The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class.</td>
</tr>
<tr id="parameter-DBInstanceCount">
    <td><CopyableCode code="DBInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of instances to reserve. Default: 1</td>
</tr>
<tr id="parameter-Duration">
    <td><CopyableCode code="Duration" /></td>
    <td><code>string</code></td>
    <td>Duration filter value, specified in years or seconds. Specify this parameter to show only reservations for this duration. Valid Values: 1 | 3 | 31536000 | 94608000</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter isn't currently supported.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more than the MaxRecords value is available, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-MultiAZ">
    <td><CopyableCode code="MultiAZ" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to show only those reservations that support Multi-AZ.</td>
</tr>
<tr id="parameter-OfferingType">
    <td><CopyableCode code="OfferingType" /></td>
    <td><code>string</code></td>
    <td>The offering type filter value. Specify this parameter to show only the available offerings matching the specified offering type. Valid Values: "Partial Upfront" | "All Upfront" | "No Upfront"</td>
</tr>
<tr id="parameter-ProductDescription">
    <td><CopyableCode code="ProductDescription" /></td>
    <td><code>string</code></td>
    <td>Product description filter value. Specify this parameter to show only the available offerings that contain the specified product description. The results show offerings that partially match the filter value.</td>
</tr>
<tr id="parameter-ReservedDBInstanceId">
    <td><CopyableCode code="ReservedDBInstanceId" /></td>
    <td><code>string</code></td>
    <td>Customer-specified identifier to track this reservation. Example: myreservationID</td>
</tr>
<tr id="parameter-ReservedDBInstancesOfferingId">
    <td><CopyableCode code="ReservedDBInstancesOfferingId" /></td>
    <td><code>string</code></td>
    <td>The offering identifier filter value. Specify this parameter to show only the available offering that matches the specified reservation identifier. Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_reserved_db_instances_offerings"
    values={[
        { label: 'describe_reserved_db_instances_offerings', value: 'describe_reserved_db_instances_offerings' }
    ]}
>
<TabItem value="describe_reserved_db_instances_offerings">

Lists available reserved DB instance offerings.

```sql
SELECT
currency_code,
db_instance_class,
duration,
fixed_price,
multi_az,
offering_type,
product_description,
recurring_charges,
reserved_db_instances_offering_id,
usage_price
FROM aws.rds.reserved_db_instances_offerings
WHERE region = '{{ region }}' -- required
AND ReservedDBInstancesOfferingId = '{{ ReservedDBInstancesOfferingId }}'
AND DBInstanceClass = '{{ DBInstanceClass }}'
AND Duration = '{{ Duration }}'
AND ProductDescription = '{{ ProductDescription }}'
AND OfferingType = '{{ OfferingType }}'
AND MultiAZ = '{{ MultiAZ }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="purchase_reserved_db_instances_offering"
    values={[
        { label: 'purchase_reserved_db_instances_offering', value: 'purchase_reserved_db_instances_offering' }
    ]}
>
<TabItem value="purchase_reserved_db_instances_offering">

Purchases a reserved DB instance offering.

```sql
EXEC aws.rds.reserved_db_instances_offerings.purchase_reserved_db_instances_offering 
@ReservedDBInstancesOfferingId='{{ ReservedDBInstancesOfferingId }}' --required, 
@region='{{ region }}' --required, 
@ReservedDBInstanceId='{{ ReservedDBInstanceId }}', 
@DBInstanceCount='{{ DBInstanceCount }}', 
@Tags='{{ Tags }}'
;
```
</TabItem>
</Tabs>
