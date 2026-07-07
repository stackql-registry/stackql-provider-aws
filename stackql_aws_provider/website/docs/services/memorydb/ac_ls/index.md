--- 
title: ac_ls
hide_title: false
hide_table_of_contents: false
keywords:
  - ac_ls
  - memorydb
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

Creates, updates, deletes, gets or lists an <code>ac_ls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ac_ls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.memorydb.ac_ls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ac_ls"
    values={[
        { label: 'describe_ac_ls', value: 'describe_ac_ls' }
    ]}
>
<TabItem value="describe_ac_ls">

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
    <td><CopyableCode code="ARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ACL</td>
</tr>
<tr>
    <td><CopyableCode code="Clusters" /></td>
    <td><code>array</code></td>
    <td>A list of clusters associated with the ACL.</td>
</tr>
<tr>
    <td><CopyableCode code="MinimumEngineVersion" /></td>
    <td><code>string</code></td>
    <td>The minimum engine version supported for the ACL</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the Access Control List</td>
</tr>
<tr>
    <td><CopyableCode code="PendingChanges" /></td>
    <td><code>object</code></td>
    <td>A list of updates being applied to the ACL.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Indicates ACL status. Can be "creating", "active", "modifying", "deleting".</td>
</tr>
<tr>
    <td><CopyableCode code="UserNames" /></td>
    <td><code>array</code></td>
    <td>The list of user names that belong to the ACL.</td>
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
    <td><a href="#describe_ac_ls"><CopyableCode code="describe_ac_ls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of ACLs.</td>
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
    defaultValue="describe_ac_ls"
    values={[
        { label: 'describe_ac_ls', value: 'describe_ac_ls' }
    ]}
>
<TabItem value="describe_ac_ls">

Returns a list of ACLs.

```sql
SELECT
ARN,
Clusters,
MinimumEngineVersion,
Name,
PendingChanges,
Status,
UserNames
FROM aws.memorydb.ac_ls
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
