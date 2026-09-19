--- 
title: resiliency_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - resiliency_groups
  - directconnect
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

Creates, updates, deletes, gets or lists a <code>resiliency_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resiliency_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.directconnect.resiliency_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resiliency_group"
    values={[
        { label: 'get_resiliency_group', value: 'get_resiliency_group' },
        { label: 'list_resiliency_groups', value: 'list_resiliency_groups' }
    ]}
>
<TabItem value="get_resiliency_group">

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
    <td><CopyableCode code="owner_account" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the resiliency group.</td>
</tr>
<tr>
    <td><CopyableCode code="resiliency_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resiliency group. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):directconnect::&#91;0-9&#93;&#123;12&#125;:dx-resiliency-group/dxrg-&#91;0-9a-z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resiliency_group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resiliency group. (pattern: &lt;code&gt;^(dxrg|DXRG)-&#91;0-9a-zA-Z&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resiliency_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the resiliency group. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resiliency_group_type" /></td>
    <td><code>string</code></td>
    <td>The type of the resiliency group. The valid value is Managed. (Managed)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the resiliency group. The valid values are pending, available, deleting, and deleted. (pending, available, deleting, deleted)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags associated with the resiliency group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resiliency_groups">

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
    <td><CopyableCode code="items_" /></td>
    <td><code>array</code></td>
    <td>Summary information about the resiliency groups.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</td>
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
    <td><a href="#get_resiliency_group"><CopyableCode code="get_resiliency_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified resiliency group.</td>
</tr>
<tr>
    <td><a href="#list_resiliency_groups"><CopyableCode code="list_resiliency_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the resiliency groups owned by your Amazon Web Services account in the current Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#create_resiliency_group"><CopyableCode code="create_resiliency_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resiliencyGroupName"><code>resiliencyGroupName</code></a>, <a href="#parameter-intendedResiliencyModel"><code>intendedResiliencyModel</code></a></td>
    <td></td>
    <td>Creates a resiliency group. A resiliency group lets you group Direct Connect connections together and manage them as a single unit to meet a target resiliency model.</td>
</tr>
<tr>
    <td><a href="#update_resiliency_group"><CopyableCode code="update_resiliency_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resiliencyGroupId"><code>resiliencyGroupId</code></a>, <a href="#parameter-resiliencyGroupName"><code>resiliencyGroupName</code></a></td>
    <td></td>
    <td>Updates the name of the specified resiliency group.</td>
</tr>
<tr>
    <td><a href="#associate_connections_to_resiliency_group"><CopyableCode code="associate_connections_to_resiliency_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectionIdentifiers"><code>connectionIdentifiers</code></a>, <a href="#parameter-resiliencyGroupId"><code>resiliencyGroupId</code></a></td>
    <td></td>
    <td>Associates one or more connections with the specified resiliency group. This operation is atomic: either all of the specified connections are associated, or the operation fails and no changes are made.</td>
</tr>
<tr>
    <td><a href="#delete_resiliency_group"><CopyableCode code="delete_resiliency_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified resiliency group. Deletion is asynchronous: the resiliency group transitions through the deleting state before it reaches the deleted state. The response returns the resiliency group so you can observe its current state without a subsequent GetResiliencyGroup call.</td>
</tr>
<tr>
    <td><a href="#disassociate_connections_from_resiliency_group"><CopyableCode code="disassociate_connections_from_resiliency_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectionIdentifiers"><code>connectionIdentifiers</code></a>, <a href="#parameter-resiliencyGroupId"><code>resiliencyGroupId</code></a></td>
    <td></td>
    <td>Disassociates one or more connections from the specified resiliency group. This operation is atomic: either all of the specified connections are disassociated, or the operation fails and no changes are made.</td>
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
    defaultValue="get_resiliency_group"
    values={[
        { label: 'get_resiliency_group', value: 'get_resiliency_group' },
        { label: 'list_resiliency_groups', value: 'list_resiliency_groups' }
    ]}
>
<TabItem value="get_resiliency_group">

Gets information about the specified resiliency group.

```sql
SELECT
owner_account,
resiliency_group_arn,
resiliency_group_id,
resiliency_group_name,
resiliency_group_type,
state,
tags
FROM aws.directconnect.resiliency_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resiliency_groups">

Lists the resiliency groups owned by your Amazon Web Services account in the current Amazon Web Services Region.

```sql
SELECT
items_,
next_token
FROM aws.directconnect.resiliency_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resiliency_group"
    values={[
        { label: 'create_resiliency_group', value: 'create_resiliency_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resiliency_group">

Creates a resiliency group. A resiliency group lets you group Direct Connect connections together and manage them as a single unit to meet a target resiliency model.

```sql
INSERT INTO aws.directconnect.resiliency_groups (
resiliencyGroupName,
intendedResiliencyModel,
clientToken,
tags,
region
)
SELECT 
'{{ resiliencyGroupName }}' /* required */,
'{{ intendedResiliencyModel }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
resiliency_group
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resiliency_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resiliency_groups resource.
    - name: resiliencyGroupName
      value: "{{ resiliencyGroupName }}"
      description: |
        The name of the resiliency group.
    - name: intendedResiliencyModel
      value: "{{ intendedResiliencyModel }}"
      description: |
        The resiliency model that the resiliency group is intended to meet. The valid values are maximum-resiliency, high-resiliency, and basic-resiliency.
      valid_values: ['maximum-resiliency', 'high-resiliency', 'basic-resiliency']
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
    - name: tags
      description: |
        The tags to associate with the resiliency group.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_resiliency_group"
    values={[
        { label: 'update_resiliency_group', value: 'update_resiliency_group' },
        { label: 'associate_connections_to_resiliency_group', value: 'associate_connections_to_resiliency_group' }
    ]}
>
<TabItem value="update_resiliency_group">

Updates the name of the specified resiliency group.

```sql
UPDATE aws.directconnect.resiliency_groups
SET 
resiliencyGroupId = '{{ resiliencyGroupId }}',
resiliencyGroupName = '{{ resiliencyGroupName }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND resiliencyGroupId = '{{ resiliencyGroupId }}' --required
AND resiliencyGroupName = '{{ resiliencyGroupName }}' --required
RETURNING
resiliency_group;
```
</TabItem>
<TabItem value="associate_connections_to_resiliency_group">

Associates one or more connections with the specified resiliency group. This operation is atomic: either all of the specified connections are associated, or the operation fails and no changes are made.

```sql
UPDATE aws.directconnect.resiliency_groups
SET 
connectionIdentifiers = '{{ connectionIdentifiers }}',
resiliencyGroupId = '{{ resiliencyGroupId }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND connectionIdentifiers = '{{ connectionIdentifiers }}' --required
AND resiliencyGroupId = '{{ resiliencyGroupId }}' --required
RETURNING
resiliency_group_associations;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resiliency_group"
    values={[
        { label: 'delete_resiliency_group', value: 'delete_resiliency_group' }
    ]}
>
<TabItem value="delete_resiliency_group">

Deletes the specified resiliency group. Deletion is asynchronous: the resiliency group transitions through the deleting state before it reaches the deleted state. The response returns the resiliency group so you can observe its current state without a subsequent GetResiliencyGroup call.

```sql
DELETE FROM aws.directconnect.resiliency_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_connections_from_resiliency_group"
    values={[
        { label: 'disassociate_connections_from_resiliency_group', value: 'disassociate_connections_from_resiliency_group' }
    ]}
>
<TabItem value="disassociate_connections_from_resiliency_group">

Disassociates one or more connections from the specified resiliency group. This operation is atomic: either all of the specified connections are disassociated, or the operation fails and no changes are made.

```sql
EXEC aws.directconnect.resiliency_groups.disassociate_connections_from_resiliency_group 
@region='{{ region }}' --required 
@@json=
'{
"connectionIdentifiers": "{{ connectionIdentifiers }}", 
"resiliencyGroupId": "{{ resiliencyGroupId }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
