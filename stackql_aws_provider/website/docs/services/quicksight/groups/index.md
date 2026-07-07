--- 
title: groups
hide_title: false
hide_table_of_contents: false
keywords:
  - groups
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

Creates, updates, deletes, gets or lists a <code>groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_group"
    values={[
        { label: 'describe_group', value: 'describe_group' },
        { label: 'search_groups', value: 'search_groups' },
        { label: 'list_groups', value: 'list_groups' }
    ]}
>
<TabItem value="describe_group">

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
    <td><CopyableCode code="Group" /></td>
    <td><code>object</code></td>
    <td>A group in Quick Sight consists of a set of users. You can use groups to make it easier to manage access and security.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_groups">

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
<TabItem value="list_groups">

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
    <td><a href="#describe_group"><CopyableCode code="describe_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-group_name"><code>group_name</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an Amazon Quick Sight group's description and Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><a href="#search_groups"><CopyableCode code="search_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Use the SearchGroups operation to search groups in a specified Quick Sight namespace using the supplied filters.</td>
</tr>
<tr>
    <td><a href="#list_groups"><CopyableCode code="list_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists all user groups in Amazon Quick Sight.</td>
</tr>
<tr>
    <td><a href="#create_group"><CopyableCode code="create_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a></td>
    <td></td>
    <td>Use the CreateGroup operation to create a group in Quick Sight. You can create up to 10,000 groups in a namespace. If you want to create more than 10,000 groups in a namespace, contact Amazon Web Services Support. The permissions resource is arn:aws:quicksight:<code>&lt;your-region&gt;</code>:<code>&lt;relevant-aws-account-id&gt;</code>:group/default/<code>&lt;group-name&gt;</code> . The response is a group object.</td>
</tr>
<tr>
    <td><a href="#update_group"><CopyableCode code="update_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-group_name"><code>group_name</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Changes a group description.</td>
</tr>
<tr>
    <td><a href="#delete_group"><CopyableCode code="delete_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-group_name"><code>group_name</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a user group from Amazon Quick Sight.</td>
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
    <td>The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon Quick Sight account.</td>
</tr>
<tr id="parameter-group_name">
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the group that you want to delete.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the group that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
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
    defaultValue="describe_group"
    values={[
        { label: 'describe_group', value: 'describe_group' },
        { label: 'search_groups', value: 'search_groups' },
        { label: 'list_groups', value: 'list_groups' }
    ]}
>
<TabItem value="describe_group">

Returns an Amazon Quick Sight group's description and Amazon Resource Name (ARN).

```sql
SELECT
Group,
RequestId,
Status
FROM aws.quicksight.groups
WHERE group_name = '{{ group_name }}' -- required
AND aws_account_id = '{{ aws_account_id }}' -- required
AND namespace = '{{ namespace }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_groups">

Use the SearchGroups operation to search groups in a specified Quick Sight namespace using the supplied filters.

```sql
SELECT
Arn,
Description,
GroupName,
PrincipalId
FROM aws.quicksight.groups
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND namespace = '{{ namespace }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
<TabItem value="list_groups">

Lists all user groups in Amazon Quick Sight.

```sql
SELECT
Arn,
Description,
GroupName,
PrincipalId
FROM aws.quicksight.groups
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND namespace = '{{ namespace }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_group"
    values={[
        { label: 'create_group', value: 'create_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_group">

Use the CreateGroup operation to create a group in Quick Sight. You can create up to 10,000 groups in a namespace. If you want to create more than 10,000 groups in a namespace, contact Amazon Web Services Support. The permissions resource is arn:aws:quicksight:<code>&lt;your-region&gt;</code>:<code>&lt;relevant-aws-account-id&gt;</code>:group/default/<code>&lt;group-name&gt;</code> . The response is a group object.

```sql
INSERT INTO aws.quicksight.groups (
GroupName,
Description,
aws_account_id,
namespace,
region
)
SELECT 
'{{ GroupName }}' /* required */,
'{{ Description }}',
'{{ aws_account_id }}',
'{{ namespace }}',
'{{ region }}'
RETURNING
Group,
RequestId,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: groups
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the groups resource.
    - name: namespace
      value: "{{ namespace }}"
      description: Required parameter for the groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the groups resource.
    - name: GroupName
      value: "{{ GroupName }}"
    - name: Description
      value: "{{ Description }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_group"
    values={[
        { label: 'update_group', value: 'update_group' }
    ]}
>
<TabItem value="update_group">

Changes a group description.

```sql
UPDATE aws.quicksight.groups
SET 
Description = '{{ Description }}'
WHERE 
group_name = '{{ group_name }}' --required
AND aws_account_id = '{{ aws_account_id }}' --required
AND namespace = '{{ namespace }}' --required
AND region = '{{ region }}' --required
RETURNING
Group,
RequestId,
Status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_group"
    values={[
        { label: 'delete_group', value: 'delete_group' }
    ]}
>
<TabItem value="delete_group">

Removes a user group from Amazon Quick Sight.

```sql
DELETE FROM aws.quicksight.groups
WHERE group_name = '{{ group_name }}' --required
AND aws_account_id = '{{ aws_account_id }}' --required
AND namespace = '{{ namespace }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
