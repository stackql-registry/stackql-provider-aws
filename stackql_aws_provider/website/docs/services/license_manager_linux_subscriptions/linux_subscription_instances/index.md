--- 
title: linux_subscription_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - linux_subscription_instances
  - license_manager_linux_subscriptions
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

Creates, updates, deletes, gets or lists a <code>linux_subscription_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="linux_subscription_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager_linux_subscriptions.linux_subscription_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_linux_subscription_instances"
    values={[
        { label: 'list_linux_subscription_instances', value: 'list_linux_subscription_instances' }
    ]}
>
<TabItem value="list_linux_subscription_instances">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The account ID which owns the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ami_id" /></td>
    <td><code>string</code></td>
    <td>The AMI ID used to launch the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="dual_subscription" /></td>
    <td><code>string</code></td>
    <td>Indicates that you have two different license subscriptions for the same software on your instance.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The instance ID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string</code></td>
    <td>The time in which the last discovery updated the instance details.</td>
</tr>
<tr>
    <td><CopyableCode code="os_version" /></td>
    <td><code>string</code></td>
    <td>The operating system software version that runs on your instance.</td>
</tr>
<tr>
    <td><CopyableCode code="product_code" /></td>
    <td><code>array</code></td>
    <td>The product code for the instance. For more information, see Usage operation values in the License Manager User Guide .</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Region the instance is running in.</td>
</tr>
<tr>
    <td><CopyableCode code="registered_with_subscription_provider" /></td>
    <td><code>string</code></td>
    <td>Indicates that your instance uses a BYOL license subscription from a third-party Linux subscription provider that you've registered with License Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_name" /></td>
    <td><code>string</code></td>
    <td>The name of the license subscription that the instance uses.</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_provider_create_time" /></td>
    <td><code>string</code></td>
    <td>The timestamp when you registered the third-party Linux subscription provider for the subscription that the instance uses.</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_provider_update_time" /></td>
    <td><code>string</code></td>
    <td>The timestamp from the last time that the instance synced with the registered third-party Linux subscription provider.</td>
</tr>
<tr>
    <td><CopyableCode code="usage_operation" /></td>
    <td><code>string</code></td>
    <td>The usage operation of the instance. For more information, see For more information, see Usage operation values in the License Manager User Guide.</td>
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
    <td><a href="#list_linux_subscription_instances"><CopyableCode code="list_linux_subscription_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the running Amazon EC2 instances that were discovered with commercial Linux subscriptions.</td>
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
    defaultValue="list_linux_subscription_instances"
    values={[
        { label: 'list_linux_subscription_instances', value: 'list_linux_subscription_instances' }
    ]}
>
<TabItem value="list_linux_subscription_instances">

Lists the running Amazon EC2 instances that were discovered with commercial Linux subscriptions.

```sql
SELECT
account_id,
ami_id,
dual_subscription,
instance_id,
instance_type,
last_updated_time,
os_version,
product_code,
region,
registered_with_subscription_provider,
status,
subscription_name,
subscription_provider_create_time,
subscription_provider_update_time,
usage_operation
FROM aws.license_manager_linux_subscriptions.linux_subscription_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
