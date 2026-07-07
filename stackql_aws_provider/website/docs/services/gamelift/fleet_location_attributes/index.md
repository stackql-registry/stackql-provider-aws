--- 
title: fleet_location_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - fleet_location_attributes
  - gamelift
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

Creates, updates, deletes, gets or lists a <code>fleet_location_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fleet_location_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.fleet_location_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fleet_location_attributes"
    values={[
        { label: 'describe_fleet_location_attributes', value: 'describe_fleet_location_attributes' }
    ]}
>
<TabItem value="describe_fleet_location_attributes">

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
    <td><CopyableCode code="FleetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912. (pattern: &lt;code&gt;^arn:.*:&#91;a-z&#93;*fleet\/&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FleetId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the fleet that location attributes were requested for. (pattern: &lt;code&gt;^&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$|^arn:.*:&#91;a-z&#93;*fleet\/&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LocationAttributes" /></td>
    <td><code>array</code></td>
    <td>Location-specific information on the requested fleet's remote locations.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</td>
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
    <td><a href="#describe_fleet_location_attributes"><CopyableCode code="describe_fleet_location_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Container Retrieves information on a fleet's remote locations, including life-cycle status and any suspended fleet activity. This operation can be used in the following ways: To get data for specific locations, provide a fleet identifier and a list of locations. Location data is returned in the order that it is requested. To get data for all locations, provide a fleet identifier only. Location data is returned in no particular order. When requesting attributes for multiple locations, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a LocationAttributes object is returned for each requested location. If the fleet does not have a requested location, no information is returned. This operation does not return the home Region. To get information on a fleet's home Region, call DescribeFleetAttributes. Learn more Setting up Amazon GameLift Servers fleets Amazon GameLift Servers service locations for managed hosting</td>
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
    defaultValue="describe_fleet_location_attributes"
    values={[
        { label: 'describe_fleet_location_attributes', value: 'describe_fleet_location_attributes' }
    ]}
>
<TabItem value="describe_fleet_location_attributes">

This API works with the following fleet types: EC2, Container Retrieves information on a fleet's remote locations, including life-cycle status and any suspended fleet activity. This operation can be used in the following ways: To get data for specific locations, provide a fleet identifier and a list of locations. Location data is returned in the order that it is requested. To get data for all locations, provide a fleet identifier only. Location data is returned in no particular order. When requesting attributes for multiple locations, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a LocationAttributes object is returned for each requested location. If the fleet does not have a requested location, no information is returned. This operation does not return the home Region. To get information on a fleet's home Region, call DescribeFleetAttributes. Learn more Setting up Amazon GameLift Servers fleets Amazon GameLift Servers service locations for managed hosting

```sql
SELECT
FleetArn,
FleetId,
LocationAttributes,
NextToken
FROM aws.gamelift.fleet_location_attributes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
