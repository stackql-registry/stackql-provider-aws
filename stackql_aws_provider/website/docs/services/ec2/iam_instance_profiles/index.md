--- 
title: iam_instance_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - iam_instance_profiles
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

Creates, updates, deletes, gets or lists an <code>iam_instance_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="iam_instance_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.iam_instance_profiles" /></td></tr>
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
    <td><a href="#associate_iam_instance_profile"><CopyableCode code="associate_iam_instance_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-IamInstanceProfile"><code>IamInstanceProfile</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates an IAM instance profile with a running or stopped instance. You cannot associate more than one IAM instance profile with an instance.</td>
</tr>
<tr>
    <td><a href="#disassociate_iam_instance_profile"><CopyableCode code="disassociate_iam_instance_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-AssociationId"><code>AssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates an IAM instance profile from a running or stopped instance. Use DescribeIamInstanceProfileAssociations to get the association ID.</td>
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
<tr id="parameter-AssociationId">
    <td><CopyableCode code="AssociationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IAM instance profile association.</td>
</tr>
<tr id="parameter-IamInstanceProfile">
    <td><CopyableCode code="IamInstanceProfile" /></td>
    <td><code>object</code></td>
    <td>The IAM instance profile.</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="associate_iam_instance_profile"
    values={[
        { label: 'associate_iam_instance_profile', value: 'associate_iam_instance_profile' },
        { label: 'disassociate_iam_instance_profile', value: 'disassociate_iam_instance_profile' }
    ]}
>
<TabItem value="associate_iam_instance_profile">

Associates an IAM instance profile with a running or stopped instance. You cannot associate more than one IAM instance profile with an instance.

```sql
UPDATE aws.ec2.iam_instance_profiles
SET 
-- No updatable properties
WHERE 
IamInstanceProfile = '{{ IamInstanceProfile }}' --required
AND InstanceId = '{{ InstanceId }}' --required
AND region = '{{ region }}' --required
RETURNING
AssociationId,
IamInstanceProfile,
InstanceId,
State,
Timestamp;
```
</TabItem>
<TabItem value="disassociate_iam_instance_profile">

Disassociates an IAM instance profile from a running or stopped instance. Use DescribeIamInstanceProfileAssociations to get the association ID.

```sql
UPDATE aws.ec2.iam_instance_profiles
SET 
-- No updatable properties
WHERE 
AssociationId = '{{ AssociationId }}' --required
AND region = '{{ region }}' --required
RETURNING
AssociationId,
IamInstanceProfile,
InstanceId,
State,
Timestamp;
```
</TabItem>
</Tabs>
