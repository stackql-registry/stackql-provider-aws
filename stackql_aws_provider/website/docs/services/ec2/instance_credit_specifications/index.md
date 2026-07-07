--- 
title: instance_credit_specifications
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_credit_specifications
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

Creates, updates, deletes, gets or lists an <code>instance_credit_specifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_credit_specifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.instance_credit_specifications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_credit_specifications"
    values={[
        { label: 'describe_instance_credit_specifications', value: 'describe_instance_credit_specifications' }
    ]}
>
<TabItem value="describe_instance_credit_specifications">

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
    <td><CopyableCode code="CpuCredits" /></td>
    <td><code>string</code></td>
    <td>The credit option for CPU usage of the instance. Valid values: standard | unlimited</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
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
    <td><a href="#describe_instance_credit_specifications"><CopyableCode code="describe_instance_credit_specifications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes the credit option for CPU usage of the specified burstable performance instances. The credit options are standard and unlimited. If you do not specify an instance ID, Amazon EC2 returns burstable performance instances with the unlimited credit option, as well as instances that were previously configured as T2, T3, and T3a with the unlimited credit option. For example, if you resize a T2 instance, while it is configured as unlimited, to an M4 instance, Amazon EC2 returns the M4 instance. If you specify one or more instance IDs, Amazon EC2 returns the credit option (standard or unlimited) of those instances. If you specify an instance ID that is not valid, such as an instance that is not a burstable performance instance, an error is returned. Recently terminated instances might appear in the returned results. This interval is usually less than one hour. If an Availability Zone is experiencing a service disruption and you specify instance IDs in the affected zone, or do not specify any instance IDs at all, the call fails. If you specify only instance IDs in an unaffected zone, the call works normally. For more information, see Burstable performance instances in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_instance_credit_specification"><CopyableCode code="modify_instance_credit_specification" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-InstanceCreditSpecification"><code>InstanceCreditSpecification</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Modifies the credit option for CPU usage on a running or stopped burstable performance instance. The credit options are standard and unlimited. For more information, see Burstable performance instances in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-InstanceCreditSpecification">
    <td><CopyableCode code="InstanceCreditSpecification" /></td>
    <td><code>array</code></td>
    <td>Information about the credit option for CPU usage.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see Ensuring Idempotency.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. instance-id - The ID of the instance.</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>array</code></td>
    <td>The instance IDs. Default: Describes all your instances. Constraints: Maximum 1000 explicitly specified instance IDs.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination. You cannot specify this parameter and the instance IDs parameter in the same call.</td>
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
    defaultValue="describe_instance_credit_specifications"
    values={[
        { label: 'describe_instance_credit_specifications', value: 'describe_instance_credit_specifications' }
    ]}
>
<TabItem value="describe_instance_credit_specifications">

Describes the credit option for CPU usage of the specified burstable performance instances. The credit options are standard and unlimited. If you do not specify an instance ID, Amazon EC2 returns burstable performance instances with the unlimited credit option, as well as instances that were previously configured as T2, T3, and T3a with the unlimited credit option. For example, if you resize a T2 instance, while it is configured as unlimited, to an M4 instance, Amazon EC2 returns the M4 instance. If you specify one or more instance IDs, Amazon EC2 returns the credit option (standard or unlimited) of those instances. If you specify an instance ID that is not valid, such as an instance that is not a burstable performance instance, an error is returned. Recently terminated instances might appear in the returned results. This interval is usually less than one hour. If an Availability Zone is experiencing a service disruption and you specify instance IDs in the affected zone, or do not specify any instance IDs at all, the call fails. If you specify only instance IDs in an unaffected zone, the call works normally. For more information, see Burstable performance instances in the Amazon EC2 User Guide.

```sql
SELECT
CpuCredits,
InstanceId
FROM aws.ec2.instance_credit_specifications
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND InstanceId = '{{ InstanceId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_instance_credit_specification"
    values={[
        { label: 'modify_instance_credit_specification', value: 'modify_instance_credit_specification' }
    ]}
>
<TabItem value="modify_instance_credit_specification">

Modifies the credit option for CPU usage on a running or stopped burstable performance instance. The credit options are standard and unlimited. For more information, see Burstable performance instances in the Amazon EC2 User Guide.

```sql
UPDATE aws.ec2.instance_credit_specifications
SET 
-- No updatable properties
WHERE 
InstanceCreditSpecification = '{{ InstanceCreditSpecification }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND ClientToken = '{{ ClientToken}}'
RETURNING
SuccessfulInstanceCreditSpecifications,
UnsuccessfulInstanceCreditSpecifications;
```
</TabItem>
</Tabs>
