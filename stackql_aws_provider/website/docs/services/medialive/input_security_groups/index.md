--- 
title: input_security_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - input_security_groups
  - medialive
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

Creates, updates, deletes, gets or lists an <code>input_security_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="input_security_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.input_security_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_input_security_group"
    values={[
        { label: 'describe_input_security_group', value: 'describe_input_security_group' },
        { label: 'list_input_security_groups', value: 'list_input_security_groups' }
    ]}
>
<TabItem value="describe_input_security_group">

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
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="channels" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="inputs" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the Input Security Group. (IDLE, IN_USE, UPDATING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A collection of key-value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="whitelist_rules" /></td>
    <td><code>array</code></td>
    <td>Whitelist rules and their sync status</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_input_security_groups">

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
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="channels" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="inputs" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the Input Security Group. (IDLE, IN_USE, UPDATING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A collection of key-value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="whitelist_rules" /></td>
    <td><code>array</code></td>
    <td>Whitelist rules and their sync status</td>
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
    <td><a href="#describe_input_security_group"><CopyableCode code="describe_input_security_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-input_security_group_id"><code>input_security_group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Produces a summary of an Input Security Group</td>
</tr>
<tr>
    <td><a href="#list_input_security_groups"><CopyableCode code="list_input_security_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Produces a list of Input Security Groups for an account</td>
</tr>
<tr>
    <td><a href="#create_input_security_group"><CopyableCode code="create_input_security_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a Input Security Group</td>
</tr>
<tr>
    <td><a href="#update_input_security_group"><CopyableCode code="update_input_security_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-input_security_group_id"><code>input_security_group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update an Input Security Group's Whilelists.</td>
</tr>
<tr>
    <td><a href="#delete_input_security_group"><CopyableCode code="delete_input_security_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-input_security_group_id"><code>input_security_group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Input Security Group</td>
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
<tr id="parameter-input_security_group_id">
    <td><CopyableCode code="input_security_group_id" /></td>
    <td><code>string</code></td>
    <td>The Input Security Group to delete</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_input_security_group"
    values={[
        { label: 'describe_input_security_group', value: 'describe_input_security_group' },
        { label: 'list_input_security_groups', value: 'list_input_security_groups' }
    ]}
>
<TabItem value="describe_input_security_group">

Produces a summary of an Input Security Group

```sql
SELECT
arn,
channels,
id,
inputs,
state,
tags,
whitelist_rules
FROM aws.medialive.input_security_groups
WHERE input_security_group_id = '{{ input_security_group_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_input_security_groups">

Produces a list of Input Security Groups for an account

```sql
SELECT
arn,
channels,
id,
inputs,
state,
tags,
whitelist_rules
FROM aws.medialive.input_security_groups
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_input_security_group"
    values={[
        { label: 'create_input_security_group', value: 'create_input_security_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_input_security_group">

Creates a Input Security Group

```sql
INSERT INTO aws.medialive.input_security_groups (
Tags,
WhitelistRules,
region
)
SELECT 
'{{ Tags }}',
'{{ WhitelistRules }}',
'{{ region }}'
RETURNING
security_group
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: input_security_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the input_security_groups resource.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Placeholder documentation for Tags
    - name: WhitelistRules
      description: |
        Placeholder documentation for __listOfInputWhitelistRuleCidr
      value:
        - Cidr: "{{ Cidr }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_input_security_group"
    values={[
        { label: 'update_input_security_group', value: 'update_input_security_group' }
    ]}
>
<TabItem value="update_input_security_group">

Update an Input Security Group's Whilelists.

```sql
UPDATE aws.medialive.input_security_groups
SET 
Tags = '{{ Tags }}',
WhitelistRules = '{{ WhitelistRules }}'
WHERE 
input_security_group_id = '{{ input_security_group_id }}' --required
AND region = '{{ region }}' --required
RETURNING
security_group;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_input_security_group"
    values={[
        { label: 'delete_input_security_group', value: 'delete_input_security_group' }
    ]}
>
<TabItem value="delete_input_security_group">

Deletes an Input Security Group

```sql
DELETE FROM aws.medialive.input_security_groups
WHERE input_security_group_id = '{{ input_security_group_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
