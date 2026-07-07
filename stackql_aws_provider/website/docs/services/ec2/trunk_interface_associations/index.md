--- 
title: trunk_interface_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - trunk_interface_associations
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

Creates, updates, deletes, gets or lists a <code>trunk_interface_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trunk_interface_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.trunk_interface_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_trunk_interface_associations"
    values={[
        { label: 'describe_trunk_interface_associations', value: 'describe_trunk_interface_associations' }
    ]}
>
<TabItem value="describe_trunk_interface_associations">

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
    <td><CopyableCode code="AssociationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the association.</td>
</tr>
<tr>
    <td><CopyableCode code="BranchInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the branch network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="GreKey" /></td>
    <td><code>integer</code></td>
    <td>The application key when you use the GRE protocol.</td>
</tr>
<tr>
    <td><CopyableCode code="InterfaceProtocol" /></td>
    <td><code>string</code></td>
    <td>The interface protocol. Valid values are VLAN and GRE.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags for the trunk interface association.</td>
</tr>
<tr>
    <td><CopyableCode code="TrunkInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the trunk network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="VlanId" /></td>
    <td><code>integer</code></td>
    <td>The ID of the VLAN when you use the VLAN protocol.</td>
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
    <td><a href="#describe_trunk_interface_associations"><CopyableCode code="describe_trunk_interface_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AssociationId"><code>AssociationId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Describes one or more network interface trunk associations.</td>
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
<tr id="parameter-AssociationId">
    <td><CopyableCode code="AssociationId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the associations.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. gre-key - The ID of a trunk interface association. interface-protocol - The interface protocol. Valid values are VLAN and GRE.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_trunk_interface_associations"
    values={[
        { label: 'describe_trunk_interface_associations', value: 'describe_trunk_interface_associations' }
    ]}
>
<TabItem value="describe_trunk_interface_associations">

Describes one or more network interface trunk associations.

```sql
SELECT
AssociationId,
BranchInterfaceId,
GreKey,
InterfaceProtocol,
Tags,
TrunkInterfaceId,
VlanId
FROM aws.ec2.trunk_interface_associations
WHERE region = '{{ region }}' -- required
AND AssociationId = '{{ AssociationId }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
