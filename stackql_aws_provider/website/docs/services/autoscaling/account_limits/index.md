--- 
title: account_limits
hide_title: false
hide_table_of_contents: false
keywords:
  - account_limits
  - autoscaling
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

Creates, updates, deletes, gets or lists an <code>account_limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling.account_limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_account_limits"
    values={[
        { label: 'describe_account_limits', value: 'describe_account_limits' }
    ]}
>
<TabItem value="describe_account_limits">

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
    <td><CopyableCode code="max_number_of_auto_scaling_groups" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of groups allowed for your account. The default is 200 groups per Region.</td>
</tr>
<tr>
    <td><CopyableCode code="max_number_of_launch_configurations" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of launch configurations allowed for your account. The default is 200 launch configurations per Region.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_auto_scaling_groups" /></td>
    <td><code>integer</code></td>
    <td>The current number of groups for your account.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_launch_configurations" /></td>
    <td><code>integer</code></td>
    <td>The current number of launch configurations for your account.</td>
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
    <td><a href="#describe_account_limits"><CopyableCode code="describe_account_limits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the current Amazon EC2 Auto Scaling resource quotas for your account. When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of Auto Scaling groups and launch configurations that you can create in a given Region. For more information, see Quotas for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.</td>
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
    defaultValue="describe_account_limits"
    values={[
        { label: 'describe_account_limits', value: 'describe_account_limits' }
    ]}
>
<TabItem value="describe_account_limits">

Describes the current Amazon EC2 Auto Scaling resource quotas for your account. When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of Auto Scaling groups and launch configurations that you can create in a given Region. For more information, see Quotas for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.

```sql
SELECT
max_number_of_auto_scaling_groups,
max_number_of_launch_configurations,
number_of_auto_scaling_groups,
number_of_launch_configurations
FROM aws.autoscaling.account_limits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
