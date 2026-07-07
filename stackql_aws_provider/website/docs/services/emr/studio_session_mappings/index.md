--- 
title: studio_session_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - studio_session_mappings
  - emr
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

Creates, updates, deletes, gets or lists a <code>studio_session_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="studio_session_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.studio_session_mappings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_studio_session_mapping"
    values={[
        { label: 'get_studio_session_mapping', value: 'get_studio_session_mapping' },
        { label: 'list_studio_session_mappings', value: 'list_studio_session_mappings' }
    ]}
>
<TabItem value="get_studio_session_mapping">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the session mapping was created.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityId" /></td>
    <td><code>string</code></td>
    <td>The globally unique identifier (GUID) of the user or group. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityName" /></td>
    <td><code>string</code></td>
    <td>The name of the user or group. For more information, see UserName and DisplayName in the IAM Identity Center Identity Store API Reference. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the identity mapped to the Amazon EMR Studio is a user or a group. (USER, GROUP)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the session mapping was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="SessionPolicyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the session policy associated with the user or group. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StudioId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon EMR Studio. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_studio_session_mappings">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the session mapping was created.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityId" /></td>
    <td><code>string</code></td>
    <td>The globally unique identifier (GUID) of the user or group from the IAM Identity Center Identity Store. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityName" /></td>
    <td><code>string</code></td>
    <td>The name of the user or group. For more information, see UserName and DisplayName in the IAM Identity Center Identity Store API Reference. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the identity mapped to the Amazon EMR Studio is a user or a group. (USER, GROUP)</td>
</tr>
<tr>
    <td><CopyableCode code="SessionPolicyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the session policy associated with the user or group. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StudioId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon EMR Studio. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_studio_session_mapping"><CopyableCode code="get_studio_session_mapping" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Fetches mapping details for the specified Amazon EMR Studio and identity (user or group).</td>
</tr>
<tr>
    <td><a href="#list_studio_session_mappings"><CopyableCode code="list_studio_session_mappings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all user or group session mappings for the Amazon EMR Studio specified by StudioId.</td>
</tr>
<tr>
    <td><a href="#create_studio_session_mapping"><CopyableCode code="create_studio_session_mapping" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StudioId"><code>StudioId</code></a>, <a href="#parameter-IdentityType"><code>IdentityType</code></a>, <a href="#parameter-SessionPolicyArn"><code>SessionPolicyArn</code></a></td>
    <td></td>
    <td>Maps a user or group to the Amazon EMR Studio specified by StudioId, and applies a session policy to refine Studio permissions for that user or group. Use CreateStudioSessionMapping to assign users to a Studio when you use IAM Identity Center authentication. For instructions on how to assign users to a Studio when you use IAM authentication, see Assign a user or group to your EMR Studio.</td>
</tr>
<tr>
    <td><a href="#update_studio_session_mapping"><CopyableCode code="update_studio_session_mapping" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StudioId"><code>StudioId</code></a>, <a href="#parameter-IdentityType"><code>IdentityType</code></a>, <a href="#parameter-SessionPolicyArn"><code>SessionPolicyArn</code></a></td>
    <td></td>
    <td>Updates the session policy attached to the user or group for the specified Amazon EMR Studio.</td>
</tr>
<tr>
    <td><a href="#delete_studio_session_mapping"><CopyableCode code="delete_studio_session_mapping" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a user or group from an Amazon EMR Studio.</td>
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
    defaultValue="get_studio_session_mapping"
    values={[
        { label: 'get_studio_session_mapping', value: 'get_studio_session_mapping' },
        { label: 'list_studio_session_mappings', value: 'list_studio_session_mappings' }
    ]}
>
<TabItem value="get_studio_session_mapping">

Fetches mapping details for the specified Amazon EMR Studio and identity (user or group).

```sql
SELECT
CreationTime,
IdentityId,
IdentityName,
IdentityType,
LastModifiedTime,
SessionPolicyArn,
StudioId
FROM aws.emr.studio_session_mappings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_studio_session_mappings">

Returns a list of all user or group session mappings for the Amazon EMR Studio specified by StudioId.

```sql
SELECT
CreationTime,
IdentityId,
IdentityName,
IdentityType,
SessionPolicyArn,
StudioId
FROM aws.emr.studio_session_mappings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_studio_session_mapping"
    values={[
        { label: 'create_studio_session_mapping', value: 'create_studio_session_mapping' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_studio_session_mapping">

Maps a user or group to the Amazon EMR Studio specified by StudioId, and applies a session policy to refine Studio permissions for that user or group. Use CreateStudioSessionMapping to assign users to a Studio when you use IAM Identity Center authentication. For instructions on how to assign users to a Studio when you use IAM authentication, see Assign a user or group to your EMR Studio.

```sql
INSERT INTO aws.emr.studio_session_mappings (
StudioId,
IdentityId,
IdentityName,
IdentityType,
SessionPolicyArn,
region
)
SELECT 
'{{ StudioId }}' /* required */,
'{{ IdentityId }}',
'{{ IdentityName }}',
'{{ IdentityType }}' /* required */,
'{{ SessionPolicyArn }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: studio_session_mappings
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the studio_session_mappings resource.
    - name: StudioId
      value: "{{ StudioId }}"
      description: |
        The ID of the Amazon EMR Studio to which the user or group will be mapped.
    - name: IdentityId
      value: "{{ IdentityId }}"
      description: |
        The globally unique identifier (GUID) of the user or group from the IAM Identity Center Identity Store. For more information, see UserId and GroupId in the IAM Identity Center Identity Store API Reference. Either IdentityName or IdentityId must be specified, but not both.
    - name: IdentityName
      value: "{{ IdentityName }}"
      description: |
        The name of the user or group. For more information, see UserName and DisplayName in the IAM Identity Center Identity Store API Reference. Either IdentityName or IdentityId must be specified, but not both.
    - name: IdentityType
      value: "{{ IdentityType }}"
      description: |
        Specifies whether the identity to map to the Amazon EMR Studio is a user or a group.
      valid_values: ['USER', 'GROUP']
    - name: SessionPolicyArn
      value: "{{ SessionPolicyArn }}"
      description: |
        The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. You should specify the ARN for the session policy that you want to apply, not the ARN of your user role. For more information, see Create an Amazon EMR Studio User Role with Session Policies.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_studio_session_mapping"
    values={[
        { label: 'update_studio_session_mapping', value: 'update_studio_session_mapping' }
    ]}
>
<TabItem value="update_studio_session_mapping">

Updates the session policy attached to the user or group for the specified Amazon EMR Studio.

```sql
UPDATE aws.emr.studio_session_mappings
SET 
StudioId = '{{ StudioId }}',
IdentityId = '{{ IdentityId }}',
IdentityName = '{{ IdentityName }}',
IdentityType = '{{ IdentityType }}',
SessionPolicyArn = '{{ SessionPolicyArn }}'
WHERE 
region = '{{ region }}' --required
AND StudioId = '{{ StudioId }}' --required
AND IdentityType = '{{ IdentityType }}' --required
AND SessionPolicyArn = '{{ SessionPolicyArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_studio_session_mapping"
    values={[
        { label: 'delete_studio_session_mapping', value: 'delete_studio_session_mapping' }
    ]}
>
<TabItem value="delete_studio_session_mapping">

Removes a user or group from an Amazon EMR Studio.

```sql
DELETE FROM aws.emr.studio_session_mappings
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
