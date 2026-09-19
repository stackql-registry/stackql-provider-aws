--- 
title: resource_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_policies
  - lambda
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.resource_policies" /></td></tr>
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
    <td>The resource-based policy attached to the Lambda resource you specified. (pattern: &lt;code&gt;&#91;\s\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="revision_id" /></td>
    <td><code>string</code></td>
    <td>The revision ID of the policy. Pass this value as the RevisionId in a PutResourcePolicy or DeleteResourcePolicy request. Doing so ensures the operation acts on the expected version of the policy. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the resource-based policy attached to a Lambda resource.</td>
</tr>
<tr>
    <td><a href="#put_resource_policy"><CopyableCode code="put_resource_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds a resource-based policy to a Lambda resource. Resource-based policies grant access to other Amazon Web Services accounts, organizations, or services. Resource-based policies apply to a single Lambda resource (for example, a function, function version, or function alias). This operation replaces any existing policy on the Lambda resource. If you previously added permissions using the AddPermission operation, the new policy overwrites those permissions.</td>
</tr>
<tr>
    <td><a href="#delete_resource_policy"><CopyableCode code="delete_resource_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RevisionId"><code>RevisionId</code></a></td>
    <td>Deletes a resource-based policy from a Lambda resource.</td>
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
<tr id="parameter-resource_arn">
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Lambda resource you want to delete the policy from. You can use a qualified or an unqualified ARN. The value must be a complete ARN, and the operation does not accept wildcard characters.</td>
</tr>
<tr id="parameter-RevisionId">
    <td><CopyableCode code="RevisionId" /></td>
    <td><code>string</code></td>
    <td>The revision ID that the existing policy must match for the deletion to proceed. If the revision ID doesn't match, the operation fails with a PreconditionFailedException error. To retrieve the current revision ID, use the GetResourcePolicy operation.</td>
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

Retrieves the resource-based policy attached to a Lambda resource.

```sql
SELECT
policy,
revision_id
FROM aws.lambda.resource_policies
WHERE resource_arn = '{{ resource_arn }}' -- required
AND region = '{{ region }}' -- required
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

Adds a resource-based policy to a Lambda resource. Resource-based policies grant access to other Amazon Web Services accounts, organizations, or services. Resource-based policies apply to a single Lambda resource (for example, a function, function version, or function alias). This operation replaces any existing policy on the Lambda resource. If you previously added permissions using the AddPermission operation, the new policy overwrites those permissions.

```sql
REPLACE aws.lambda.resource_policies
SET 
Policy = '{{ Policy }}',
RevisionId = '{{ RevisionId }}'
WHERE 
resource_arn = '{{ resource_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
policy,
revision_id;
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

Deletes a resource-based policy from a Lambda resource.

```sql
DELETE FROM aws.lambda.resource_policies
WHERE resource_arn = '{{ resource_arn }}' --required
AND region = '{{ region }}' --required
AND RevisionId = '{{ RevisionId }}'
;
```
</TabItem>
</Tabs>
