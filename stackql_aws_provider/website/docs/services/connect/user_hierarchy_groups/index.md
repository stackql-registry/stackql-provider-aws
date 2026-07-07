--- 
title: user_hierarchy_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - user_hierarchy_groups
  - connect
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

Creates, updates, deletes, gets or lists a <code>user_hierarchy_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_hierarchy_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.user_hierarchy_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_user_hierarchy_group"
    values={[
        { label: 'describe_user_hierarchy_group', value: 'describe_user_hierarchy_group' },
        { label: 'list_user_hierarchy_groups', value: 'list_user_hierarchy_groups' },
        { label: 'search_user_hierarchy_groups', value: 'search_user_hierarchy_groups' }
    ]}
>
<TabItem value="describe_user_hierarchy_group">

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
    <td>The Amazon Resource Name (ARN) of the hierarchy group.</td>
</tr>
<tr>
    <td><CopyableCode code="HierarchyPath" /></td>
    <td><code>object</code></td>
    <td>Information about the levels in the hierarchy group.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the hierarchy group.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="LevelId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the level in the hierarchy group.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the hierarchy group.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_user_hierarchy_groups">

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
    <td>The Amazon Resource Name (ARN) of the hierarchy group.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the hierarchy group.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the hierarchy group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_user_hierarchy_groups">

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
    <td>The Amazon Resource Name (ARN) of the hierarchy group.</td>
</tr>
<tr>
    <td><CopyableCode code="HierarchyPath" /></td>
    <td><code>object</code></td>
    <td>Information about the levels in the hierarchy group.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the hierarchy group.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="LevelId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the level in the hierarchy group.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the hierarchy group.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
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
    <td><a href="#describe_user_hierarchy_group"><CopyableCode code="describe_user_hierarchy_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-hierarchy_group_id"><code>hierarchy_group_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified hierarchy group.</td>
</tr>
<tr>
    <td><a href="#list_user_hierarchy_groups"><CopyableCode code="list_user_hierarchy_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Provides summary information about the hierarchy groups for the specified Amazon Connect instance. For more information about agent hierarchies, see Set Up Agent Hierarchies in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#search_user_hierarchy_groups"><CopyableCode code="search_user_hierarchy_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches UserHierarchyGroups in an Amazon Connect instance, with optional filtering. The UserHierarchyGroup with "LevelId": "0" is the foundation for building levels on top of an instance. It is not user-definable, nor is it visible in the UI.</td>
</tr>
<tr>
    <td><a href="#create_user_hierarchy_group"><CopyableCode code="create_user_hierarchy_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new user hierarchy group.</td>
</tr>
<tr>
    <td><a href="#update_user_hierarchy_group_name"><CopyableCode code="update_user_hierarchy_group_name" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-hierarchy_group_id"><code>hierarchy_group_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the name of the user hierarchy group.</td>
</tr>
<tr>
    <td><a href="#delete_user_hierarchy_group"><CopyableCode code="delete_user_hierarchy_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-hierarchy_group_id"><code>hierarchy_group_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing user hierarchy group. It must not be associated with any agents or have any active child groups.</td>
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
<tr id="parameter-hierarchy_group_id">
    <td><CopyableCode code="hierarchy_group_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the hierarchy group.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. The default MaxResult size is 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_user_hierarchy_group"
    values={[
        { label: 'describe_user_hierarchy_group', value: 'describe_user_hierarchy_group' },
        { label: 'list_user_hierarchy_groups', value: 'list_user_hierarchy_groups' },
        { label: 'search_user_hierarchy_groups', value: 'search_user_hierarchy_groups' }
    ]}
>
<TabItem value="describe_user_hierarchy_group">

Describes the specified hierarchy group.

```sql
SELECT
Arn,
HierarchyPath,
Id,
LastModifiedRegion,
LastModifiedTime,
LevelId,
Name,
Tags
FROM aws.connect.user_hierarchy_groups
WHERE hierarchy_group_id = '{{ hierarchy_group_id }}' -- required
AND instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_user_hierarchy_groups">

Provides summary information about the hierarchy groups for the specified Amazon Connect instance. For more information about agent hierarchies, see Set Up Agent Hierarchies in the Amazon Connect Administrator Guide.

```sql
SELECT
Arn,
Id,
LastModifiedRegion,
LastModifiedTime,
Name
FROM aws.connect.user_hierarchy_groups
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="search_user_hierarchy_groups">

Searches UserHierarchyGroups in an Amazon Connect instance, with optional filtering. The UserHierarchyGroup with "LevelId": "0" is the foundation for building levels on top of an instance. It is not user-definable, nor is it visible in the UI.

```sql
SELECT
Arn,
HierarchyPath,
Id,
LastModifiedRegion,
LastModifiedTime,
LevelId,
Name,
Tags
FROM aws.connect.user_hierarchy_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_hierarchy_group"
    values={[
        { label: 'create_user_hierarchy_group', value: 'create_user_hierarchy_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_hierarchy_group">

Creates a new user hierarchy group.

```sql
INSERT INTO aws.connect.user_hierarchy_groups (
Name,
ParentGroupId,
Tags,
instance_id,
region
)
SELECT 
'{{ Name }}',
'{{ ParentGroupId }}',
'{{ Tags }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
HierarchyGroupArn,
HierarchyGroupId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: user_hierarchy_groups
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the user_hierarchy_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the user_hierarchy_groups resource.
    - name: Name
      value: "{{ Name }}"
    - name: ParentGroupId
      value: "{{ ParentGroupId }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_user_hierarchy_group_name"
    values={[
        { label: 'update_user_hierarchy_group_name', value: 'update_user_hierarchy_group_name' }
    ]}
>
<TabItem value="update_user_hierarchy_group_name">

Updates the name of the user hierarchy group.

```sql
UPDATE aws.connect.user_hierarchy_groups
SET 
Name = '{{ Name }}'
WHERE 
hierarchy_group_id = '{{ hierarchy_group_id }}' --required
AND instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user_hierarchy_group"
    values={[
        { label: 'delete_user_hierarchy_group', value: 'delete_user_hierarchy_group' }
    ]}
>
<TabItem value="delete_user_hierarchy_group">

Deletes an existing user hierarchy group. It must not be associated with any agents or have any active child groups.

```sql
DELETE FROM aws.connect.user_hierarchy_groups
WHERE hierarchy_group_id = '{{ hierarchy_group_id }}' --required
AND instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
