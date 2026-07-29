--- 
title: regions
hide_title: false
hide_table_of_contents: false
keywords:
  - regions
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

Creates, updates, deletes, gets or lists a <code>regions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="regions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.regions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_regions"
    values={[
        { label: 'describe_regions', value: 'describe_regions' }
    ]}
>
<TabItem value="describe_regions">

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
    <td>The Region service endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="geography" /></td>
    <td><code>string</code></td>
    <td>The geography information for the Region. The geography is returned as a list.</td>
</tr>
<tr>
    <td><CopyableCode code="opt_in_status" /></td>
    <td><code>string</code></td>
    <td>The Region opt-in status. The possible values are opt-in-not-required, opted-in, and not-opted-in.</td>
</tr>
<tr>
    <td><CopyableCode code="region_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Region.</td>
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
    <td><a href="#describe_regions"><CopyableCode code="describe_regions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RegionName"><code>RegionName</code></a>, <a href="#parameter-AllRegions"><code>AllRegions</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes the Regions that are enabled for your account, or all Regions. For a list of the Regions supported by Amazon EC2, see Amazon EC2 service endpoints. For information about enabling and disabling Regions for your account, see Specify which Amazon Web Services Regions your account can use in the Amazon Web Services Account Management Reference Guide. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.</td>
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
<tr id="parameter-AllRegions">
    <td><CopyableCode code="AllRegions" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to display all Regions, including Regions that are disabled for your account.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. endpoint - The endpoint of the Region (for example, ec2.us-east-1.amazonaws.com). opt-in-status - The opt-in status of the Region (opt-in-not-required | opted-in | not-opted-in). region-name - The name of the Region (for example, us-east-1).</td>
</tr>
<tr id="parameter-RegionName">
    <td><CopyableCode code="RegionName" /></td>
    <td><code>array</code></td>
    <td>The names of the Regions. You can specify any Regions, whether they are enabled and disabled for your account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_regions"
    values={[
        { label: 'describe_regions', value: 'describe_regions' }
    ]}
>
<TabItem value="describe_regions">

Describes the Regions that are enabled for your account, or all Regions. For a list of the Regions supported by Amazon EC2, see Amazon EC2 service endpoints. For information about enabling and disabling Regions for your account, see Specify which Amazon Web Services Regions your account can use in the Amazon Web Services Account Management Reference Guide. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.

```sql
SELECT
endpoint,
geography,
opt_in_status,
region_name
FROM aws.ec2.regions
WHERE region = '{{ region }}' -- required
AND RegionName = '{{ RegionName }}'
AND AllRegions = '{{ AllRegions }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>
