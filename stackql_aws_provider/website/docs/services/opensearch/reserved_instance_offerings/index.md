--- 
title: reserved_instance_offerings
hide_title: false
hide_table_of_contents: false
keywords:
  - reserved_instance_offerings
  - opensearch
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

Creates, updates, deletes, gets or lists a <code>reserved_instance_offerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reserved_instance_offerings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.reserved_instance_offerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_reserved_instance_offerings"
    values={[
        { label: 'describe_reserved_instance_offerings', value: 'describe_reserved_instance_offerings' }
    ]}
>
<TabItem value="describe_reserved_instance_offerings">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>When nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservedInstanceOfferings" /></td>
    <td><code>array</code></td>
    <td>List of Reserved Instance offerings.</td>
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
    <td><a href="#describe_reserved_instance_offerings"><CopyableCode code="describe_reserved_instance_offerings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-offeringId"><code>offeringId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Describes the available Amazon OpenSearch Service Reserved Instance offerings for a given Region. For more information, see Reserved Instances in Amazon OpenSearch Service.</td>
</tr>
<tr>
    <td><a href="#purchase_reserved_instance_offering"><CopyableCode code="purchase_reserved_instance_offering" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReservedInstanceOfferingId"><code>ReservedInstanceOfferingId</code></a>, <a href="#parameter-ReservationName"><code>ReservationName</code></a></td>
    <td></td>
    <td>Allows you to purchase Amazon OpenSearch Service Reserved Instances.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If your initial DescribeReservedInstanceOfferings operation returns a nextToken, you can include the returned nextToken in subsequent DescribeReservedInstanceOfferings operations, which returns results in the next page.</td>
</tr>
<tr id="parameter-offeringId">
    <td><CopyableCode code="offeringId" /></td>
    <td><code>string</code></td>
    <td>The Reserved Instance identifier filter value. Use this parameter to show only the available instance types that match the specified reservation identifier.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_reserved_instance_offerings"
    values={[
        { label: 'describe_reserved_instance_offerings', value: 'describe_reserved_instance_offerings' }
    ]}
>
<TabItem value="describe_reserved_instance_offerings">

Describes the available Amazon OpenSearch Service Reserved Instance offerings for a given Region. For more information, see Reserved Instances in Amazon OpenSearch Service.

```sql
SELECT
NextToken,
ReservedInstanceOfferings
FROM aws.opensearch.reserved_instance_offerings
WHERE region = '{{ region }}' -- required
AND offeringId = '{{ offeringId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="purchase_reserved_instance_offering"
    values={[
        { label: 'purchase_reserved_instance_offering', value: 'purchase_reserved_instance_offering' }
    ]}
>
<TabItem value="purchase_reserved_instance_offering">

Allows you to purchase Amazon OpenSearch Service Reserved Instances.

```sql
EXEC aws.opensearch.reserved_instance_offerings.purchase_reserved_instance_offering 
@region='{{ region }}' --required 
@@json=
'{
"ReservedInstanceOfferingId": "{{ ReservedInstanceOfferingId }}", 
"ReservationName": "{{ ReservationName }}", 
"InstanceCount": {{ InstanceCount }}
}'
;
```
</TabItem>
</Tabs>
