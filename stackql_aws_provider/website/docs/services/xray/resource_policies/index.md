--- 
title: resource_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_policies
  - xray
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.xray.resource_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resource_policies"
    values={[
        { label: 'list_resource_policies', value: 'list_resource_policies' }
    ]}
>
<TabItem value="list_resource_policies">

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
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the policy was last updated, in Unix time seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyDocument" /></td>
    <td><code>string</code></td>
    <td>The resource policy document, which can be up to 5kb in size.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyName" /></td>
    <td><code>string</code></td>
    <td>The name of the resource policy. Must be unique within a specific Amazon Web Services account. (pattern: &lt;code&gt;&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyRevisionId" /></td>
    <td><code>string</code></td>
    <td>Returns the current policy revision id for this policy name.</td>
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
    <td><a href="#list_resource_policies"><CopyableCode code="list_resource_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the list of resource policies in the target Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#put_resource_policy"><CopyableCode code="put_resource_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PolicyName"><code>PolicyName</code></a>, <a href="#parameter-PolicyDocument"><code>PolicyDocument</code></a></td>
    <td></td>
    <td>Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy will be associated with a specific Amazon Web Services account. Each Amazon Web Services account can have a maximum of 5 resource policies, and each policy name must be unique within that account. The maximum size of each resource policy is 5KB.</td>
</tr>
<tr>
    <td><a href="#delete_resource_policy"><CopyableCode code="delete_resource_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a resource policy from the target Amazon Web Services account.</td>
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
    defaultValue="list_resource_policies"
    values={[
        { label: 'list_resource_policies', value: 'list_resource_policies' }
    ]}
>
<TabItem value="list_resource_policies">

Returns the list of resource policies in the target Amazon Web Services account.

```sql
SELECT
LastUpdatedTime,
PolicyDocument,
PolicyName,
PolicyRevisionId
FROM aws.xray.resource_policies
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

Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy will be associated with a specific Amazon Web Services account. Each Amazon Web Services account can have a maximum of 5 resource policies, and each policy name must be unique within that account. The maximum size of each resource policy is 5KB.

```sql
REPLACE aws.xray.resource_policies
SET 
PolicyName = '{{ PolicyName }}',
PolicyDocument = '{{ PolicyDocument }}',
PolicyRevisionId = '{{ PolicyRevisionId }}',
BypassPolicyLockoutCheck = {{ BypassPolicyLockoutCheck }}
WHERE 
region = '{{ region }}' --required
AND PolicyName = '{{ PolicyName }}' --required
AND PolicyDocument = '{{ PolicyDocument }}' --required
RETURNING
ResourcePolicy;
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

Deletes a resource policy from the target Amazon Web Services account.

```sql
DELETE FROM aws.xray.resource_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
