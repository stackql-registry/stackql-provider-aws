--- 
title: resource_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_policies
  - cloudhsmv2
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

Creates, updates, deletes, gets or lists a <code>resource_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudhsmv2.resource_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_policy"
    values={[
        { label: 'get_resource_policy', value: 'get_resource_policy' }
    ]}
>
<TabItem value="get_resource_policy">

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
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The policy attached to a resource.</td>
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
    <td><a href="#get_resource_policy"><CopyableCode code="get_resource_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the resource policy document attached to a given resource. Cross-account use: No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#put_resource_policy"><CopyableCode code="put_resource_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates or updates an CloudHSM resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your CloudHSM resources. The following resources support CloudHSM resource policies: Backup - The resource policy allows you to describe the backup and restore a cluster from the backup in another Amazon Web Services account. In order to share a backup, it must be in a 'READY' state and you must own it. While you can share a backup using the CloudHSM PutResourcePolicy operation, we recommend using Resource Access Manager (RAM) instead. Using RAM provides multiple benefits as it creates the policy for you, allows multiple resources to be shared at one time, and increases the discoverability of shared resources. If you use PutResourcePolicy and want consumers to be able to describe the backups you share with them, you must promote the backup to a standard RAM Resource Share using the RAM PromoteResourceShareCreatedFromPolicy API operation. For more information, see Working with shared backups in the CloudHSM User Guide Cross-account use: No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#delete_resource_policy"><CopyableCode code="delete_resource_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an CloudHSM resource policy. Deleting a resource policy will result in the resource being unshared and removed from any RAM resource shares. Deleting the resource policy attached to a backup will not impact any clusters created from that backup. Cross-account use: No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.</td>
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
    defaultValue="get_resource_policy"
    values={[
        { label: 'get_resource_policy', value: 'get_resource_policy' }
    ]}
>
<TabItem value="get_resource_policy">

Retrieves the resource policy document attached to a given resource. Cross-account use: No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.

```sql
SELECT
policy
FROM aws.cloudhsmv2.resource_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_resource_policy"
    values={[
        { label: 'put_resource_policy', value: 'put_resource_policy' }
    ]}
>
<TabItem value="put_resource_policy">

Creates or updates an CloudHSM resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your CloudHSM resources. The following resources support CloudHSM resource policies: Backup - The resource policy allows you to describe the backup and restore a cluster from the backup in another Amazon Web Services account. In order to share a backup, it must be in a 'READY' state and you must own it. While you can share a backup using the CloudHSM PutResourcePolicy operation, we recommend using Resource Access Manager (RAM) instead. Using RAM provides multiple benefits as it creates the policy for you, allows multiple resources to be shared at one time, and increases the discoverability of shared resources. If you use PutResourcePolicy and want consumers to be able to describe the backups you share with them, you must promote the backup to a standard RAM Resource Share using the RAM PromoteResourceShareCreatedFromPolicy API operation. For more information, see Working with shared backups in the CloudHSM User Guide Cross-account use: No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.

```sql
REPLACE aws.cloudhsmv2.resource_policies
SET 
ResourceArn = '{{ ResourceArn }}',
Policy = '{{ Policy }}'
WHERE 
region = '{{ region }}' --required
RETURNING
policy,
resource_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_policy"
    values={[
        { label: 'delete_resource_policy', value: 'delete_resource_policy' }
    ]}
>
<TabItem value="delete_resource_policy">

Deletes an CloudHSM resource policy. Deleting a resource policy will result in the resource being unshared and removed from any RAM resource shares. Deleting the resource policy attached to a backup will not impact any clusters created from that backup. Cross-account use: No. You cannot perform this operation on an CloudHSM resource in a different Amazon Web Services account.

```sql
DELETE FROM aws.cloudhsmv2.resource_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
