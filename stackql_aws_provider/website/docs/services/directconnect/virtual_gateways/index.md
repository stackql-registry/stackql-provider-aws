--- 
title: virtual_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_gateways
  - directconnect
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

Creates, updates, deletes, gets or lists a <code>virtual_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="virtual_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.directconnect.virtual_gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_virtual_gateways"
    values={[
        { label: 'describe_virtual_gateways', value: 'describe_virtual_gateways' }
    ]}
>
<TabItem value="describe_virtual_gateways">

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
    <td><CopyableCode code="virtual_gateways" /></td>
    <td><code>array</code></td>
    <td>The virtual private gateways.</td>
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
    <td><a href="#describe_virtual_gateways"><CopyableCode code="describe_virtual_gateways" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deprecated. Use DescribeVpnGateways instead. See DescribeVPNGateways in the Amazon Elastic Compute Cloud API Reference. Lists the virtual private gateways owned by the Amazon Web Services account. You can create one or more Direct Connect private virtual interfaces linked to a virtual private gateway.</td>
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
    defaultValue="describe_virtual_gateways"
    values={[
        { label: 'describe_virtual_gateways', value: 'describe_virtual_gateways' }
    ]}
>
<TabItem value="describe_virtual_gateways">

Deprecated. Use DescribeVpnGateways instead. See DescribeVPNGateways in the Amazon Elastic Compute Cloud API Reference. Lists the virtual private gateways owned by the Amazon Web Services account. You can create one or more Direct Connect private virtual interfaces linked to a virtual private gateway.

```sql
SELECT
virtual_gateways
FROM aws.directconnect.virtual_gateways
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
