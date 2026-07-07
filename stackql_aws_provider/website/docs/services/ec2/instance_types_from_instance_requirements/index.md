--- 
title: instance_types_from_instance_requirements
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_types_from_instance_requirements
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

Creates, updates, deletes, gets or lists an <code>instance_types_from_instance_requirements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_types_from_instance_requirements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.instance_types_from_instance_requirements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_instance_types_from_instance_requirements"
    values={[
        { label: 'get_instance_types_from_instance_requirements', value: 'get_instance_types_from_instance_requirements' }
    ]}
>
<TabItem value="get_instance_types_from_instance_requirements">

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
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>The matching instance type.</td>
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
    <td><a href="#get_instance_types_from_instance_requirements"><CopyableCode code="get_instance_types_from_instance_requirements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ArchitectureType"><code>ArchitectureType</code></a>, <a href="#parameter-VirtualizationType"><code>VirtualizationType</code></a>, <a href="#parameter-InstanceRequirements"><code>InstanceRequirements</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Context"><code>Context</code></a></td>
    <td>Returns a list of instance types with the specified instance attributes. You can use the response to preview the instance types without launching instances. Note that the response does not consider capacity. When you specify multiple parameters, you get instance types that satisfy all of the specified parameters. If you specify multiple values for a parameter, you get instance types that satisfy any of the specified values. For more information, see Preview instance types with specified attributes, Specify attributes for instance type selection for EC2 Fleet or Spot Fleet, and Spot placement score in the Amazon EC2 User Guide, and Creating mixed instance groups using attribute-based instance type selection in the Amazon EC2 Auto Scaling User Guide.</td>
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
<tr id="parameter-ArchitectureType">
    <td><CopyableCode code="ArchitectureType" /></td>
    <td><code>array</code></td>
    <td>The processor architecture type.</td>
</tr>
<tr id="parameter-InstanceRequirements">
    <td><CopyableCode code="InstanceRequirements" /></td>
    <td><code>object</code></td>
    <td>The attributes required for the instance types.</td>
</tr>
<tr id="parameter-VirtualizationType">
    <td><CopyableCode code="VirtualizationType" /></td>
    <td><code>array</code></td>
    <td>The virtualization type.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Context">
    <td><CopyableCode code="Context" /></td>
    <td><code>string</code></td>
    <td>Reserved.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
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
    defaultValue="get_instance_types_from_instance_requirements"
    values={[
        { label: 'get_instance_types_from_instance_requirements', value: 'get_instance_types_from_instance_requirements' }
    ]}
>
<TabItem value="get_instance_types_from_instance_requirements">

Returns a list of instance types with the specified instance attributes. You can use the response to preview the instance types without launching instances. Note that the response does not consider capacity. When you specify multiple parameters, you get instance types that satisfy all of the specified parameters. If you specify multiple values for a parameter, you get instance types that satisfy any of the specified values. For more information, see Preview instance types with specified attributes, Specify attributes for instance type selection for EC2 Fleet or Spot Fleet, and Spot placement score in the Amazon EC2 User Guide, and Creating mixed instance groups using attribute-based instance type selection in the Amazon EC2 Auto Scaling User Guide.

```sql
SELECT
InstanceType
FROM aws.ec2.instance_types_from_instance_requirements
WHERE ArchitectureType = '{{ ArchitectureType }}' -- required
AND VirtualizationType = '{{ VirtualizationType }}' -- required
AND InstanceRequirements = '{{ InstanceRequirements }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND Context = '{{ Context }}'
;
```
</TabItem>
</Tabs>
