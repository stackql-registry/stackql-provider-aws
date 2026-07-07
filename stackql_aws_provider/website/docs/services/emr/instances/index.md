--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - emr
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_instances"
    values={[
        { label: 'list_instances', value: 'list_instances' }
    ]}
>
<TabItem value="list_instances">

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
    <td><CopyableCode code="EbsVolumes" /></td>
    <td><code>array</code></td>
    <td>The list of Amazon EBS volumes that are attached to this instance.</td>
</tr>
<tr>
    <td><CopyableCode code="Ec2InstanceId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the instance in Amazon EC2.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the instance in Amazon EMR.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceFleetId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the instance fleet to which an Amazon EC2 instance belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceGroupId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the instance group to which this instance belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>The Amazon EC2 instance type, for example m3.xlarge. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Market" /></td>
    <td><code>string</code></td>
    <td>The instance purchasing option. Valid values are ON_DEMAND or SPOT. (ON_DEMAND, SPOT)</td>
</tr>
<tr>
    <td><CopyableCode code="PrivateDnsName" /></td>
    <td><code>string</code></td>
    <td>The private DNS name of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="PrivateIpAddress" /></td>
    <td><code>string</code></td>
    <td>The private IP address of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="PublicDnsName" /></td>
    <td><code>string</code></td>
    <td>The public DNS name of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="PublicIpAddress" /></td>
    <td><code>string</code></td>
    <td>The public IP address of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>object</code></td>
    <td>The current status of the instance.</td>
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
    <td><a href="#list_instances"><CopyableCode code="list_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information for all active Amazon EC2 instances and Amazon EC2 instances terminated in the last 30 days, up to a maximum of 2,000. Amazon EC2 instances in any of the following states are considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING.</td>
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
    defaultValue="list_instances"
    values={[
        { label: 'list_instances', value: 'list_instances' }
    ]}
>
<TabItem value="list_instances">

Provides information for all active Amazon EC2 instances and Amazon EC2 instances terminated in the last 30 days, up to a maximum of 2,000. Amazon EC2 instances in any of the following states are considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING.

```sql
SELECT
EbsVolumes,
Ec2InstanceId,
Id,
InstanceFleetId,
InstanceGroupId,
InstanceType,
Market,
PrivateDnsName,
PrivateIpAddress,
PublicDnsName,
PublicIpAddress,
Status
FROM aws.emr.instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
