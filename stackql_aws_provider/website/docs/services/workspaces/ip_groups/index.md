--- 
title: ip_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_groups
  - workspaces
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

Creates, updates, deletes, gets or lists an <code>ip_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.ip_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ip_groups"
    values={[
        { label: 'describe_ip_groups', value: 'describe_ip_groups' }
    ]}
>
<TabItem value="describe_ip_groups">

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
    <td><CopyableCode code="groupDesc" /></td>
    <td><code>string</code></td>
    <td>The description of the group.</td>
</tr>
<tr>
    <td><CopyableCode code="groupId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the group. (pattern: &lt;code&gt;wsipg-&#91;0-9a-z&#93;&#123;8,63&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="groupName" /></td>
    <td><code>string</code></td>
    <td>The name of the group.</td>
</tr>
<tr>
    <td><CopyableCode code="userRules" /></td>
    <td><code>array</code></td>
    <td>The rules.</td>
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
    <td><a href="#describe_ip_groups"><CopyableCode code="describe_ip_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes one or more of your IP access control groups.</td>
</tr>
<tr>
    <td><a href="#create_ip_group"><CopyableCode code="create_ip_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a></td>
    <td></td>
    <td>Creates an IP access control group. An IP access control group provides you with the ability to control the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group and then associate the group with your directory. You can add rules when you create the group or at any time using AuthorizeIpRules. There is a default IP access control group associated with your directory. If you don't associate an IP access control group with your directory, the default group is used. The default group includes a default rule that allows users to access their WorkSpaces from anywhere. You cannot modify the default IP access control group for your directory.</td>
</tr>
<tr>
    <td><a href="#associate_ip_groups"><CopyableCode code="associate_ip_groups" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-GroupIds"><code>GroupIds</code></a></td>
    <td></td>
    <td>Associates the specified IP access control group with the specified directory.</td>
</tr>
<tr>
    <td><a href="#update_rules_of_ip_group"><CopyableCode code="update_rules_of_ip_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-UserRules"><code>UserRules</code></a></td>
    <td></td>
    <td>Replaces the current rules of the specified IP access control group with the specified rules.</td>
</tr>
<tr>
    <td><a href="#delete_ip_group"><CopyableCode code="delete_ip_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified IP access control group. You cannot delete an IP access control group that is associated with a directory.</td>
</tr>
<tr>
    <td><a href="#disassociate_ip_groups"><CopyableCode code="disassociate_ip_groups" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-GroupIds"><code>GroupIds</code></a></td>
    <td></td>
    <td>Disassociates the specified IP access control group from the specified directory.</td>
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
    defaultValue="describe_ip_groups"
    values={[
        { label: 'describe_ip_groups', value: 'describe_ip_groups' }
    ]}
>
<TabItem value="describe_ip_groups">

Describes one or more of your IP access control groups.

```sql
SELECT
groupDesc,
groupId,
groupName,
userRules
FROM aws.workspaces.ip_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ip_group"
    values={[
        { label: 'create_ip_group', value: 'create_ip_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ip_group">

Creates an IP access control group. An IP access control group provides you with the ability to control the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group and then associate the group with your directory. You can add rules when you create the group or at any time using AuthorizeIpRules. There is a default IP access control group associated with your directory. If you don't associate an IP access control group with your directory, the default group is used. The default group includes a default rule that allows users to access their WorkSpaces from anywhere. You cannot modify the default IP access control group for your directory.

```sql
INSERT INTO aws.workspaces.ip_groups (
GroupName,
GroupDesc,
UserRules,
Tags,
region
)
SELECT 
'{{ GroupName }}' /* required */,
'{{ GroupDesc }}',
'{{ UserRules }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
GroupId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ip_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ip_groups resource.
    - name: GroupName
      value: "{{ GroupName }}"
      description: |
        The name of the group.
    - name: GroupDesc
      value: "{{ GroupDesc }}"
      description: |
        The description of the group.
    - name: UserRules
      description: |
        The rules to add to the group.
      value:
        - ipRule: "{{ ipRule }}"
          ruleDesc: "{{ ruleDesc }}"
    - name: Tags
      description: |
        The tags. Each WorkSpaces resource can have a maximum of 50 tags.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_ip_groups"
    values={[
        { label: 'associate_ip_groups', value: 'associate_ip_groups' },
        { label: 'update_rules_of_ip_group', value: 'update_rules_of_ip_group' }
    ]}
>
<TabItem value="associate_ip_groups">

Associates the specified IP access control group with the specified directory.

```sql
UPDATE aws.workspaces.ip_groups
SET 
DirectoryId = '{{ DirectoryId }}',
GroupIds = '{{ GroupIds }}'
WHERE 
region = '{{ region }}' --required
AND DirectoryId = '{{ DirectoryId }}' --required
AND GroupIds = '{{ GroupIds }}' --required;
```
</TabItem>
<TabItem value="update_rules_of_ip_group">

Replaces the current rules of the specified IP access control group with the specified rules.

```sql
UPDATE aws.workspaces.ip_groups
SET 
GroupId = '{{ GroupId }}',
UserRules = '{{ UserRules }}'
WHERE 
region = '{{ region }}' --required
AND GroupId = '{{ GroupId }}' --required
AND UserRules = '{{ UserRules }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ip_group"
    values={[
        { label: 'delete_ip_group', value: 'delete_ip_group' }
    ]}
>
<TabItem value="delete_ip_group">

Deletes the specified IP access control group. You cannot delete an IP access control group that is associated with a directory.

```sql
DELETE FROM aws.workspaces.ip_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_ip_groups"
    values={[
        { label: 'disassociate_ip_groups', value: 'disassociate_ip_groups' }
    ]}
>
<TabItem value="disassociate_ip_groups">

Disassociates the specified IP access control group from the specified directory.

```sql
EXEC aws.workspaces.ip_groups.disassociate_ip_groups 
@region='{{ region }}' --required 
@@json=
'{
"DirectoryId": "{{ DirectoryId }}", 
"GroupIds": "{{ GroupIds }}"
}'
;
```
</TabItem>
</Tabs>
