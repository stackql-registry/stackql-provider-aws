--- 
title: user_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - user_groups
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>user_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.user_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_user_groups"
    values={[
        { label: 'list_user_groups', value: 'list_user_groups' }
    ]}
>
<TabItem value="list_user_groups">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the group.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The group description.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the group. (pattern: &lt;code&gt;&#91;\u0020-\u00FF&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PrincipalId" /></td>
    <td><code>string</code></td>
    <td>The principal ID of the group.</td>
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
    <td><a href="#list_user_groups"><CopyableCode code="list_user_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-user_name"><code>user_name</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists the Amazon Quick Sight groups that an Amazon Quick Sight user is a member of.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace. Currently, you should set this to default.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-user_name">
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>The Amazon Quick Sight user name that you want to list group memberships for.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return from this request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>A pagination token that can be used in a subsequent request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_user_groups"
    values={[
        { label: 'list_user_groups', value: 'list_user_groups' }
    ]}
>
<TabItem value="list_user_groups">

Lists the Amazon Quick Sight groups that an Amazon Quick Sight user is a member of.

```sql
SELECT
Arn,
Description,
GroupName,
PrincipalId
FROM aws.quicksight.user_groups
WHERE user_name = '{{ user_name }}' -- required
AND aws_account_id = '{{ aws_account_id }}' -- required
AND namespace = '{{ namespace }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>
