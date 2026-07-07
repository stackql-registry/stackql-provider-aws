--- 
title: device_ec2_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - device_ec2_instances
  - snow_device_management
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

Creates, updates, deletes, gets or lists a <code>device_ec2_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="device_ec2_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.snow_device_management.device_ec2_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_device_ec2_instances"
    values={[
        { label: 'describe_device_ec2_instances', value: 'describe_device_ec2_instances' }
    ]}
>
<TabItem value="describe_device_ec2_instances">

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
    <td><CopyableCode code="instances" /></td>
    <td><code>array</code></td>
    <td>A list of structures containing information about each instance.</td>
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
    <td><a href="#describe_device_ec2_instances"><CopyableCode code="describe_device_ec2_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-managed_device_id"><code>managed_device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Checks the current state of the Amazon EC2 instances. The output is similar to describeDevice, but the results are sourced from the device cache in the Amazon Web Services Cloud and include a subset of the available fields.</td>
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
<tr id="parameter-managed_device_id">
    <td><CopyableCode code="managed_device_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the managed device.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_device_ec2_instances"
    values={[
        { label: 'describe_device_ec2_instances', value: 'describe_device_ec2_instances' }
    ]}
>
<TabItem value="describe_device_ec2_instances">

Checks the current state of the Amazon EC2 instances. The output is similar to describeDevice, but the results are sourced from the device cache in the Amazon Web Services Cloud and include a subset of the available fields.

```sql
SELECT
instances
FROM aws.snow_device_management.device_ec2_instances
WHERE managed_device_id = '{{ managed_device_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
