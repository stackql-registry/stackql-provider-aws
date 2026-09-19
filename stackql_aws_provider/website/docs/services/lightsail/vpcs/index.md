--- 
title: vpcs
hide_title: false
hide_table_of_contents: false
keywords:
  - vpcs
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>vpcs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpcs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.vpcs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#peer_vpc"><CopyableCode code="peer_vpc" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Peers the Lightsail VPC with the user's default VPC.</td>
</tr>
<tr>
    <td><a href="#unpeer_vpc"><CopyableCode code="unpeer_vpc" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Unpeers the Lightsail VPC from the user's default VPC.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="peer_vpc"
    values={[
        { label: 'peer_vpc', value: 'peer_vpc' },
        { label: 'unpeer_vpc', value: 'unpeer_vpc' }
    ]}
>
<TabItem value="peer_vpc">

Peers the Lightsail VPC with the user's default VPC.

```sql
EXEC aws.lightsail.vpcs.peer_vpc 
@region='{{ region }}' --required 
;
```
</TabItem>
<TabItem value="unpeer_vpc">

Unpeers the Lightsail VPC from the user's default VPC.

```sql
EXEC aws.lightsail.vpcs.unpeer_vpc 
@region='{{ region }}' --required 
;
```
</TabItem>
</Tabs>
