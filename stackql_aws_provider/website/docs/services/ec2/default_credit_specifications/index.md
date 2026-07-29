--- 
title: default_credit_specifications
hide_title: false
hide_table_of_contents: false
keywords:
  - default_credit_specifications
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

Creates, updates, deletes, gets or lists a <code>default_credit_specifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="default_credit_specifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.default_credit_specifications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_default_credit_specification"
    values={[
        { label: 'get_default_credit_specification', value: 'get_default_credit_specification' }
    ]}
>
<TabItem value="get_default_credit_specification">

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
    <td><CopyableCode code="cpu_credits" /></td>
    <td><code>string</code></td>
    <td>The default credit option for CPU usage of the instance family. Valid values are standard and unlimited.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_family" /></td>
    <td><code>string</code></td>
    <td>The instance family.</td>
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
    <td><a href="#get_default_credit_specification"><CopyableCode code="get_default_credit_specification" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-InstanceFamily"><code>InstanceFamily</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the default credit option for CPU usage of a burstable performance instance family. For more information, see Burstable performance instances in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_default_credit_specification"><CopyableCode code="modify_default_credit_specification" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-InstanceFamily"><code>InstanceFamily</code></a>, <a href="#parameter-CpuCredits"><code>CpuCredits</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies the default credit option for CPU usage of burstable performance instances. The default credit option is set at the account level per Amazon Web Services Region, and is specified per instance family. All new burstable performance instances in the account launch using the default credit option. ModifyDefaultCreditSpecification is an asynchronous operation, which works at an Amazon Web Services Region level and modifies the credit option for each Availability Zone. All zones in a Region are updated within five minutes. But if instances are launched during this operation, they might not get the new credit option until the zone is updated. To verify whether the update has occurred, you can call GetDefaultCreditSpecification and check DefaultCreditSpecification for updates. For more information, see Burstable performance instances in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-CpuCredits">
    <td><CopyableCode code="CpuCredits" /></td>
    <td><code>string</code></td>
    <td>The credit option for CPU usage of the instance family. Valid Values: standard | unlimited</td>
</tr>
<tr id="parameter-InstanceFamily">
    <td><CopyableCode code="InstanceFamily" /></td>
    <td><code>string</code></td>
    <td>The instance family.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_default_credit_specification"
    values={[
        { label: 'get_default_credit_specification', value: 'get_default_credit_specification' }
    ]}
>
<TabItem value="get_default_credit_specification">

Describes the default credit option for CPU usage of a burstable performance instance family. For more information, see Burstable performance instances in the Amazon EC2 User Guide.

```sql
SELECT
cpu_credits,
instance_family
FROM aws.ec2.default_credit_specifications
WHERE InstanceFamily = '{{ InstanceFamily }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_default_credit_specification"
    values={[
        { label: 'modify_default_credit_specification', value: 'modify_default_credit_specification' }
    ]}
>
<TabItem value="modify_default_credit_specification">

Modifies the default credit option for CPU usage of burstable performance instances. The default credit option is set at the account level per Amazon Web Services Region, and is specified per instance family. All new burstable performance instances in the account launch using the default credit option. ModifyDefaultCreditSpecification is an asynchronous operation, which works at an Amazon Web Services Region level and modifies the credit option for each Availability Zone. All zones in a Region are updated within five minutes. But if instances are launched during this operation, they might not get the new credit option until the zone is updated. To verify whether the update has occurred, you can call GetDefaultCreditSpecification and check DefaultCreditSpecification for updates. For more information, see Burstable performance instances in the Amazon EC2 User Guide.

```sql
UPDATE aws.ec2.default_credit_specifications
SET 
-- No updatable properties
WHERE 
InstanceFamily = '{{ InstanceFamily }}' --required
AND CpuCredits = '{{ CpuCredits }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
cpu_credits,
instance_family;
```
</TabItem>
</Tabs>
