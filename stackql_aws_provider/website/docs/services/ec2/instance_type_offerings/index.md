--- 
title: instance_type_offerings
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_type_offerings
  - ec2
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

Creates, updates, deletes, gets or lists an <code>instance_type_offerings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_type_offerings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.instance_type_offerings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_type_offerings"
    values={[
        { label: 'describe_instance_type_offerings', value: 'describe_instance_type_offerings' }
    ]}
>
<TabItem value="describe_instance_type_offerings">

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
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type. For more information, see Instance types in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The identifier for the location. This depends on the location type. For example, if the location type is region, the location is the Region code (for example, us-east-2.)</td>
</tr>
<tr>
    <td><CopyableCode code="location_type" /></td>
    <td><code>string</code></td>
    <td>The location type.</td>
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
    <td><a href="#describe_instance_type_offerings"><CopyableCode code="describe_instance_type_offerings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-LocationType"><code>LocationType</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists the instance types that are offered for the specified location. If no location is specified, the default is to list the instance types that are offered in the current Region.</td>
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
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. Filter names and values are case-sensitive. instance-type - The instance type. For a list of possible values, see Instance. location - The location. For a list of possible identifiers, see Regions and Zones.</td>
</tr>
<tr id="parameter-LocationType">
    <td><CopyableCode code="LocationType" /></td>
    <td><code>string</code></td>
    <td>The location type. availability-zone - The Availability Zone. When you specify a location filter, it must be an Availability Zone for the current Region. availability-zone-id - The AZ ID. When you specify a location filter, it must be an AZ ID for the current Region. outpost - The Outpost ARN. When you specify a location filter, it must be an Outpost ARN for the current Region. region - The current Region. If you specify a location filter, it must match the current Region.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_instance_type_offerings"
    values={[
        { label: 'describe_instance_type_offerings', value: 'describe_instance_type_offerings' }
    ]}
>
<TabItem value="describe_instance_type_offerings">

Lists the instance types that are offered for the specified location. If no location is specified, the default is to list the instance types that are offered in the current Region.

```sql
SELECT
instance_type,
location,
location_type
FROM aws.ec2.instance_type_offerings
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND LocationType = '{{ LocationType }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
