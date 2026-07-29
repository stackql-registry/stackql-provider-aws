--- 
title: groups
hide_title: false
hide_table_of_contents: false
keywords:
  - groups
  - synthetics
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.synthetics.groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_group"
    values={[
        { label: 'get_group', value: 'get_group' },
        { label: 'list_groups', value: 'list_groups' }
    ]}
>
<TabItem value="get_group">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the group. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:synthetics:&#91;a-z&#93;&#123;2,4&#125;(-&#91;a-z&#93;&#123;2,4&#125;)?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:group:&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the group.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the group was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the group.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The list of key-value pairs that are associated with the canary.</td>
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
    <td><CopyableCode code="groups" /></td>
    <td><code>array</code></td>
    <td>An array of structures that each contain information about one group.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token that indicates that there is more data available. You can use this token in a subsequent ListGroups operation to retrieve the next set of results.</td>
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
    <td><a href="#get_group"><CopyableCode code="get_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-group_identifier"><code>group_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about one group. Groups are a global resource, so you can use this operation from any Region.</td>
</tr>
<tr>
    <td><a href="#list_groups"><CopyableCode code="list_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all groups in the account, displaying their names, unique IDs, and ARNs. The groups from all Regions are returned.</td>
</tr>
<tr>
    <td><a href="#create_group"><CopyableCode code="create_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Creates a group which you can use to associate canaries with each other, including cross-Region canaries. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group. Groups are global resources. When you create a group, it is replicated across Amazon Web Services Regions, and you can view it and add canaries to it from any Region. Although the group ARN format reflects the Region name where it was created, a group is not constrained to any Region. This means that you can put canaries from multiple Regions into the same group, and then use that group to view and manage all of those canaries in a single view. Groups are supported in all Regions except the Regions that are disabled by default. For more information about these Regions, see Enabling a Region. Each group can contain as many as 10 canaries. You can have as many as 20 groups in your account. Any single canary can be a member of up to 10 groups.</td>
</tr>
<tr>
    <td><a href="#associate_resource"><CopyableCode code="associate_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-group_identifier"><code>group_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Associates a canary with a group. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group. You must run this operation in the Region where the canary exists.</td>
</tr>
<tr>
    <td><a href="#delete_group"><CopyableCode code="delete_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-group_identifier"><code>group_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a group. The group doesn't need to be empty to be deleted. If there are canaries in the group, they are not deleted when you delete the group. Groups are a global resource that appear in all Regions, but the request to delete a group must be made from its home Region. You can find the home Region of a group within its ARN.</td>
</tr>
<tr>
    <td><a href="#disassociate_resource"><CopyableCode code="disassociate_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-group_identifier"><code>group_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Removes a canary from a group. You must run this operation in the Region where the canary exists.</td>
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
<tr id="parameter-group_identifier">
    <td><CopyableCode code="group_identifier" /></td>
    <td><code>string</code></td>
    <td>Specifies the group. You can specify the group name, the ARN, or the group ID as the GroupIdentifier.</td>
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
    defaultValue="get_group"
    values={[
        { label: 'get_group', value: 'get_group' },
        { label: 'list_groups', value: 'list_groups' }
    ]}
>
<TabItem value="get_group">

Returns information about one group. Groups are a global resource, so you can use this operation from any Region.

```sql
SELECT
arn,
created_time,
id,
last_modified_time,
name,
tags
FROM aws.synthetics.groups
WHERE group_identifier = '{{ group_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_groups">

Returns a list of all groups in the account, displaying their names, unique IDs, and ARNs. The groups from all Regions are returned.

```sql
SELECT
groups,
next_token
FROM aws.synthetics.groups
WHERE region = '{{ region }}' -- required
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

Creates a group which you can use to associate canaries with each other, including cross-Region canaries. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group. Groups are global resources. When you create a group, it is replicated across Amazon Web Services Regions, and you can view it and add canaries to it from any Region. Although the group ARN format reflects the Region name where it was created, a group is not constrained to any Region. This means that you can put canaries from multiple Regions into the same group, and then use that group to view and manage all of those canaries in a single view. Groups are supported in all Regions except the Regions that are disabled by default. For more information about these Regions, see Enabling a Region. Each group can contain as many as 10 canaries. You can have as many as 20 groups in your account. Any single canary can be a member of up to 10 groups.

```sql
INSERT INTO aws.synthetics.groups (
Name,
Tags,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
group
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the groups resource.
    - name: Name
      value: "{{ Name }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_resource"
    values={[
        { label: 'associate_resource', value: 'associate_resource' }
    ]}
>
<TabItem value="associate_resource">

Associates a canary with a group. Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group. You must run this operation in the Region where the canary exists.

```sql
UPDATE aws.synthetics.groups
SET 
ResourceArn = '{{ ResourceArn }}'
WHERE 
group_identifier = '{{ group_identifier }}' --required
AND region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required;
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

Deletes a group. The group doesn't need to be empty to be deleted. If there are canaries in the group, they are not deleted when you delete the group. Groups are a global resource that appear in all Regions, but the request to delete a group must be made from its home Region. You can find the home Region of a group within its ARN.

```sql
DELETE FROM aws.synthetics.groups
WHERE group_identifier = '{{ group_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_resource"
    values={[
        { label: 'disassociate_resource', value: 'disassociate_resource' }
    ]}
>
<TabItem value="disassociate_resource">

Removes a canary from a group. You must run this operation in the Region where the canary exists.

```sql
EXEC aws.synthetics.groups.disassociate_resource 
@group_identifier='{{ group_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ResourceArn": "{{ ResourceArn }}"
}'
;
```
</TabItem>
</Tabs>
