--- 
title: user_proficiencies
hide_title: false
hide_table_of_contents: false
keywords:
  - user_proficiencies
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

Creates, updates, deletes, gets or lists a <code>user_proficiencies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_proficiencies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.user_proficiencies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_user_proficiencies"
    values={[
        { label: 'list_user_proficiencies', value: 'list_user_proficiencies' }
    ]}
>
<TabItem value="list_user_proficiencies">

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
    <td><CopyableCode code="AttributeName" /></td>
    <td><code>string</code></td>
    <td>The name of user's proficiency. You must use name of predefined attribute present in the Amazon Connect instance.</td>
</tr>
<tr>
    <td><CopyableCode code="AttributeValue" /></td>
    <td><code>string</code></td>
    <td>The value of user's proficiency. You must use value of predefined attribute present in the Amazon Connect instance.</td>
</tr>
<tr>
    <td><CopyableCode code="Level" /></td>
    <td><code>number (float)</code></td>
    <td>The level of the proficiency. The valid values are 1, 2, 3, 4 and 5.</td>
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
    <td><a href="#list_user_proficiencies"><CopyableCode code="list_user_proficiencies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists proficiencies associated with a user.</td>
</tr>
<tr>
    <td><a href="#associate_user_proficiencies"><CopyableCode code="associate_user_proficiencies" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserProficiencies"><code>UserProficiencies</code></a></td>
    <td></td>
    <td>Associates a set of proficiencies with a user.</td>
</tr>
<tr>
    <td><a href="#disassociate_user_proficiencies"><CopyableCode code="disassociate_user_proficiencies" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserProficiencies"><code>UserProficiencies</code></a></td>
    <td></td>
    <td>Disassociates a set of proficiencies from a user.</td>
</tr>
<tr>
    <td><a href="#update_user_proficiencies"><CopyableCode code="update_user_proficiencies" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserProficiencies"><code>UserProficiencies</code></a></td>
    <td></td>
    <td>Updates the properties associated with the proficiencies of a user.</td>
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
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user account.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
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
    defaultValue="list_user_proficiencies"
    values={[
        { label: 'list_user_proficiencies', value: 'list_user_proficiencies' }
    ]}
>
<TabItem value="list_user_proficiencies">

Lists proficiencies associated with a user.

```sql
SELECT
AttributeName,
AttributeValue,
Level
FROM aws.connect.user_proficiencies
WHERE instance_id = '{{ instance_id }}' -- required
AND user_id = '{{ user_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_user_proficiencies"
    values={[
        { label: 'associate_user_proficiencies', value: 'associate_user_proficiencies' }
    ]}
>
<TabItem value="associate_user_proficiencies">

Associates a set of proficiencies with a user.

```sql
UPDATE aws.connect.user_proficiencies
SET 
UserProficiencies = '{{ UserProficiencies }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND user_id = '{{ user_id }}' --required
AND region = '{{ region }}' --required
AND UserProficiencies = '{{ UserProficiencies }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_user_proficiencies"
    values={[
        { label: 'disassociate_user_proficiencies', value: 'disassociate_user_proficiencies' },
        { label: 'update_user_proficiencies', value: 'update_user_proficiencies' }
    ]}
>
<TabItem value="disassociate_user_proficiencies">

Disassociates a set of proficiencies from a user.

```sql
EXEC aws.connect.user_proficiencies.disassociate_user_proficiencies 
@instance_id='{{ instance_id }}' --required, 
@user_id='{{ user_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"UserProficiencies": "{{ UserProficiencies }}"
}'
;
```
</TabItem>
<TabItem value="update_user_proficiencies">

Updates the properties associated with the proficiencies of a user.

```sql
EXEC aws.connect.user_proficiencies.update_user_proficiencies 
@instance_id='{{ instance_id }}' --required, 
@user_id='{{ user_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"UserProficiencies": "{{ UserProficiencies }}"
}'
;
```
</TabItem>
</Tabs>
