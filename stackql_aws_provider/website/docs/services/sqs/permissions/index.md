--- 
title: permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - permissions
  - sqs
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

Creates, updates, deletes, gets or lists a <code>permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sqs.permissions" /></td></tr>
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
    <td><a href="#add_permission"><CopyableCode code="add_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QueueUrl"><code>QueueUrl</code></a>, <a href="#parameter-Label"><code>Label</code></a>, <a href="#parameter-AWSAccountIds"><code>AWSAccountIds</code></a>, <a href="#parameter-Actions"><code>Actions</code></a></td>
    <td></td>
    <td>Adds a permission to a queue for a specific principal. This allows sharing access to the queue. When you create a queue, you have full control access rights for the queue. Only you, the owner of the queue, can grant or deny permissions to the queue. For more information about these permissions, see Allow Developers to Write Messages to a Shared Queue in the Amazon SQS Developer Guide. AddPermission generates a policy for you. You can use SetQueueAttributes to upload your policy. For more information, see Using Custom Policies with the Amazon SQS Access Policy Language in the Amazon SQS Developer Guide. An Amazon SQS policy can have a maximum of seven actions per statement. To remove the ability to change queue permissions, you must deny permission to the AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM policy. Amazon SQS AddPermission does not support adding a non-account principal. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.</td>
</tr>
<tr>
    <td><a href="#remove_permission"><CopyableCode code="remove_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QueueUrl"><code>QueueUrl</code></a>, <a href="#parameter-Label"><code>Label</code></a></td>
    <td></td>
    <td>Revokes any permissions in the queue policy that matches the specified Label parameter. Only the owner of a queue can remove permissions from it. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide. To remove the ability to change queue permissions, you must deny permission to the AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM policy.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="add_permission"
    values={[
        { label: 'add_permission', value: 'add_permission' },
        { label: 'remove_permission', value: 'remove_permission' }
    ]}
>
<TabItem value="add_permission">

Adds a permission to a queue for a specific principal. This allows sharing access to the queue. When you create a queue, you have full control access rights for the queue. Only you, the owner of the queue, can grant or deny permissions to the queue. For more information about these permissions, see Allow Developers to Write Messages to a Shared Queue in the Amazon SQS Developer Guide. AddPermission generates a policy for you. You can use SetQueueAttributes to upload your policy. For more information, see Using Custom Policies with the Amazon SQS Access Policy Language in the Amazon SQS Developer Guide. An Amazon SQS policy can have a maximum of seven actions per statement. To remove the ability to change queue permissions, you must deny permission to the AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM policy. Amazon SQS AddPermission does not support adding a non-account principal. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide.

```sql
UPDATE aws.sqs.permissions
SET 
QueueUrl = '{{ QueueUrl }}',
Label = '{{ Label }}',
AWSAccountIds = '{{ AWSAccountIds }}',
Actions = '{{ Actions }}'
WHERE 
region = '{{ region }}' --required
AND QueueUrl = '{{ QueueUrl }}' --required
AND Label = '{{ Label }}' --required
AND AWSAccountIds = '{{ AWSAccountIds }}' --required
AND Actions = '{{ Actions }}' --required;
```
</TabItem>
<TabItem value="remove_permission">

Revokes any permissions in the queue policy that matches the specified Label parameter. Only the owner of a queue can remove permissions from it. Cross-account permissions don't apply to this action. For more information, see Grant cross-account permissions to a role and a username in the Amazon SQS Developer Guide. To remove the ability to change queue permissions, you must deny permission to the AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM policy.

```sql
UPDATE aws.sqs.permissions
SET 
QueueUrl = '{{ QueueUrl }}',
Label = '{{ Label }}'
WHERE 
region = '{{ region }}' --required
AND QueueUrl = '{{ QueueUrl }}' --required
AND Label = '{{ Label }}' --required;
```
</TabItem>
</Tabs>
