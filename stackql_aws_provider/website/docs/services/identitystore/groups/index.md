--- 
title: groups
hide_title: false
hide_table_of_contents: false
keywords:
  - groups
  - identitystore
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.identitystore.groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_group"
    values={[
        { label: 'describe_group', value: 'describe_group' },
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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that created the group.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A string containing a description of the group. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The group’s display name value. The length limit is 1,024 characters. This value can consist of letters, accented characters, symbols, numbers, punctuation, tab, new line, carriage return, space, and nonbreaking space in this attribute. This value is specified at the time that the group is created and stored as an attribute of the group object in the identity store. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExternalIds" /></td>
    <td><code>array</code></td>
    <td>A list of ExternalId objects that contains the identifiers issued to this resource by an external identity provider.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupId" /></td>
    <td><code>string</code></td>
    <td>The identifier for a group in the identity store. (pattern: &lt;code&gt;(&#91;0-9a-f&#93;&#123;10&#125;-|)&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityStoreId" /></td>
    <td><code>string</code></td>
    <td>The globally unique identifier for the identity store. (pattern: &lt;code&gt;d-&#91;0-9a-f&#93;&#123;10&#125;$|^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the group was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedBy" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that last updated the group.</td>
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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that created the group.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A string containing a description of the specified group. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name value for the group. The length limit is 1,024 characters. This value can consist of letters, accented characters, symbols, numbers, punctuation, tab, new line, carriage return, space, and nonbreaking space in this attribute. This value is specified at the time the group is created and stored as an attribute of the group object in the identity store. Prefix search supports a maximum of 1,000 characters for the string. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExternalIds" /></td>
    <td><code>array</code></td>
    <td>A list of ExternalId objects that contains the identifiers issued to this resource by an external identity provider.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupId" /></td>
    <td><code>string</code></td>
    <td>The identifier for a group in the identity store. (pattern: &lt;code&gt;(&#91;0-9a-f&#93;&#123;10&#125;-|)&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityStoreId" /></td>
    <td><code>string</code></td>
    <td>The globally unique identifier for the identity store. (pattern: &lt;code&gt;d-&#91;0-9a-f&#93;&#123;10&#125;$|^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the group was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedBy" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that last updated the group.</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the group metadata and attributes from GroupId in an identity store. If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the IAM Identity Center User Guide.</td>
</tr>
<tr>
    <td><a href="#list_groups"><CopyableCode code="list_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all groups in the identity store. Returns a paginated list of complete Group objects. Filtering for a Group by the DisplayName attribute is deprecated. Instead, use the GetGroupId API action. If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the IAM Identity Center User Guide.</td>
</tr>
<tr>
    <td><a href="#create_group"><CopyableCode code="create_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityStoreId"><code>IdentityStoreId</code></a></td>
    <td></td>
    <td>Creates a group within the specified identity store.</td>
</tr>
<tr>
    <td><a href="#update_group"><CopyableCode code="update_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityStoreId"><code>IdentityStoreId</code></a>, <a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-Operations"><code>Operations</code></a></td>
    <td></td>
    <td>Updates the specified group metadata and attributes in the specified identity store.</td>
</tr>
<tr>
    <td><a href="#delete_group"><CopyableCode code="delete_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a group within an identity store given GroupId.</td>
</tr>
<tr>
    <td><a href="#is_member_in_groups"><CopyableCode code="is_member_in_groups" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityStoreId"><code>IdentityStoreId</code></a>, <a href="#parameter-MemberId"><code>MemberId</code></a>, <a href="#parameter-GroupIds"><code>GroupIds</code></a></td>
    <td></td>
    <td>Checks the user's membership in all requested groups and returns if the member exists in all queried groups. If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the IAM Identity Center User Guide.</td>
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
    defaultValue="describe_group"
    values={[
        { label: 'describe_group', value: 'describe_group' },
        { label: 'list_groups', value: 'list_groups' }
    ]}
>
<TabItem value="describe_group">

Retrieves the group metadata and attributes from GroupId in an identity store. If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the IAM Identity Center User Guide.

```sql
SELECT
CreatedAt,
CreatedBy,
Description,
DisplayName,
ExternalIds,
GroupId,
IdentityStoreId,
UpdatedAt,
UpdatedBy
FROM aws.identitystore.groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_groups">

Lists all groups in the identity store. Returns a paginated list of complete Group objects. Filtering for a Group by the DisplayName attribute is deprecated. Instead, use the GetGroupId API action. If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the IAM Identity Center User Guide.

```sql
SELECT
CreatedAt,
CreatedBy,
Description,
DisplayName,
ExternalIds,
GroupId,
IdentityStoreId,
UpdatedAt,
UpdatedBy
FROM aws.identitystore.groups
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

Creates a group within the specified identity store.

```sql
INSERT INTO aws.identitystore.groups (
IdentityStoreId,
DisplayName,
Description,
region
)
SELECT 
'{{ IdentityStoreId }}' /* required */,
'{{ DisplayName }}',
'{{ Description }}',
'{{ region }}'
RETURNING
GroupId,
IdentityStoreId
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
    - name: IdentityStoreId
      value: "{{ IdentityStoreId }}"
      description: |
        The globally unique identifier for the identity store.
    - name: DisplayName
      value: "{{ DisplayName }}"
      description: |
        A string containing the name of the group. This value is commonly displayed when the group is referenced. Administrator and AWSAdministrators are reserved names and can't be used for users or groups.
    - name: Description
      value: "{{ Description }}"
      description: |
        A string containing the description of the group.
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

Updates the specified group metadata and attributes in the specified identity store.

```sql
UPDATE aws.identitystore.groups
SET 
IdentityStoreId = '{{ IdentityStoreId }}',
GroupId = '{{ GroupId }}',
Operations = '{{ Operations }}'
WHERE 
region = '{{ region }}' --required
AND IdentityStoreId = '{{ IdentityStoreId }}' --required
AND GroupId = '{{ GroupId }}' --required
AND Operations = '{{ Operations }}' --required;
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

Delete a group within an identity store given GroupId.

```sql
DELETE FROM aws.identitystore.groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="is_member_in_groups"
    values={[
        { label: 'is_member_in_groups', value: 'is_member_in_groups' }
    ]}
>
<TabItem value="is_member_in_groups">

Checks the user's membership in all requested groups and returns if the member exists in all queried groups. If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the IAM Identity Center User Guide.

```sql
EXEC aws.identitystore.groups.is_member_in_groups 
@region='{{ region }}' --required 
@@json=
'{
"IdentityStoreId": "{{ IdentityStoreId }}", 
"MemberId": "{{ MemberId }}", 
"GroupIds": "{{ GroupIds }}"
}'
;
```
</TabItem>
</Tabs>
