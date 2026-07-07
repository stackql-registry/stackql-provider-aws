--- 
title: account_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - account_attributes
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

Creates, updates, deletes, gets or lists an <code>account_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.account_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_account_attributes"
    values={[
        { label: 'describe_account_attributes', value: 'describe_account_attributes' }
    ]}
>
<TabItem value="describe_account_attributes">

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
    <td><CopyableCode code="AttributeName" /></td>
    <td><code>string</code></td>
    <td>The name of the account attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="AttributeValues" /></td>
    <td><code>string</code></td>
    <td>The values for the account attribute.</td>
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
    <td><a href="#describe_account_attributes"><CopyableCode code="describe_account_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-AttributeName"><code>AttributeName</code></a></td>
    <td>Describes attributes of your Amazon Web Services account. The following are the supported account attributes: default-vpc: The ID of the default VPC for your account, or none. max-instances: This attribute is no longer supported. The returned value does not reflect your actual vCPU limit for running On-Demand Instances. For more information, see On-Demand Instance Limits in the Amazon Elastic Compute Cloud User Guide. max-elastic-ips: The maximum number of Elastic IP addresses that you can allocate. supported-platforms: This attribute is deprecated. vpc-max-elastic-ips: The maximum number of Elastic IP addresses that you can allocate. vpc-max-security-groups-per-interface: The maximum number of security groups that you can assign to a network interface. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.</td>
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
<tr id="parameter-AttributeName">
    <td><CopyableCode code="AttributeName" /></td>
    <td><code>array</code></td>
    <td>The account attribute names.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_account_attributes"
    values={[
        { label: 'describe_account_attributes', value: 'describe_account_attributes' }
    ]}
>
<TabItem value="describe_account_attributes">

Describes attributes of your Amazon Web Services account. The following are the supported account attributes: default-vpc: The ID of the default VPC for your account, or none. max-instances: This attribute is no longer supported. The returned value does not reflect your actual vCPU limit for running On-Demand Instances. For more information, see On-Demand Instance Limits in the Amazon Elastic Compute Cloud User Guide. max-elastic-ips: The maximum number of Elastic IP addresses that you can allocate. supported-platforms: This attribute is deprecated. vpc-max-elastic-ips: The maximum number of Elastic IP addresses that you can allocate. vpc-max-security-groups-per-interface: The maximum number of security groups that you can assign to a network interface. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.

```sql
SELECT
AttributeName,
AttributeValues
FROM aws.ec2.account_attributes
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND AttributeName = '{{ AttributeName }}'
;
```
</TabItem>
</Tabs>
