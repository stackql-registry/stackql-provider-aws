--- 
title: service_linked_role_deletion_status
hide_title: false
hide_table_of_contents: false
keywords:
  - service_linked_role_deletion_status
  - iam
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

Creates, updates, deletes, gets or lists a <code>service_linked_role_deletion_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_linked_role_deletion_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.service_linked_role_deletion_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_linked_role_deletion_status"
    values={[
        { label: 'get_service_linked_role_deletion_status', value: 'get_service_linked_role_deletion_status' }
    ]}
>
<TabItem value="get_service_linked_role_deletion_status">

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
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td>An object that contains details about the reason the deletion failed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the deletion.</td>
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
    <td><a href="#get_service_linked_role_deletion_status"><CopyableCode code="get_service_linked_role_deletion_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DeletionTaskId"><code>DeletionTaskId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the status of your service-linked role deletion. After you use DeleteServiceLinkedRole to submit a service-linked role for deletion, you can use the DeletionTaskId parameter in GetServiceLinkedRoleDeletionStatus to check the status of the deletion. If the deletion fails, this operation returns the reason that it failed, if that information is returned by the service.</td>
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
<tr id="parameter-DeletionTaskId">
    <td><CopyableCode code="DeletionTaskId" /></td>
    <td><code>string</code></td>
    <td>The deletion task identifier. This identifier is returned by the DeleteServiceLinkedRole operation in the format task/aws-service-role/<code>&lt;service-principal-name&gt;</code>/<code>&lt;role-name&gt;</code>/<code>&lt;task-uuid&gt;</code>.</td>
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
    defaultValue="get_service_linked_role_deletion_status"
    values={[
        { label: 'get_service_linked_role_deletion_status', value: 'get_service_linked_role_deletion_status' }
    ]}
>
<TabItem value="get_service_linked_role_deletion_status">

Retrieves the status of your service-linked role deletion. After you use DeleteServiceLinkedRole to submit a service-linked role for deletion, you can use the DeletionTaskId parameter in GetServiceLinkedRoleDeletionStatus to check the status of the deletion. If the deletion fails, this operation returns the reason that it failed, if that information is returned by the service.

```sql
SELECT
reason,
status
FROM aws.iam.service_linked_role_deletion_status
WHERE DeletionTaskId = '{{ DeletionTaskId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
