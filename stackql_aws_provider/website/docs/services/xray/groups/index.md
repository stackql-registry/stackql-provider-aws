--- 
title: groups
hide_title: false
hide_table_of_contents: false
keywords:
  - groups
  - xray
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.xray.groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_group"
    values={[
        { label: 'get_group', value: 'get_group' }
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
    <td><CopyableCode code="filter_expression" /></td>
    <td><code>string</code></td>
    <td>The filter expression defining the parameters to include traces.</td>
</tr>
<tr>
    <td><CopyableCode code="group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the group generated based on the GroupName.</td>
</tr>
<tr>
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>The unique case-sensitive name of the group.</td>
</tr>
<tr>
    <td><CopyableCode code="insights_configuration" /></td>
    <td><code>object</code></td>
    <td>The structure containing configurations related to insights.</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves group resource details.</td>
</tr>
<tr>
    <td><a href="#create_group"><CopyableCode code="create_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a></td>
    <td></td>
    <td>Creates a group resource with a name and a filter expression.</td>
</tr>
<tr>
    <td><a href="#update_group"><CopyableCode code="update_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a group resource.</td>
</tr>
<tr>
    <td><a href="#delete_group"><CopyableCode code="delete_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a group resource.</td>
</tr>
<tr>
    <td><a href="#get_groups"><CopyableCode code="get_groups" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves all active group details.</td>
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
    defaultValue="get_group"
    values={[
        { label: 'get_group', value: 'get_group' }
    ]}
>
<TabItem value="get_group">

Retrieves group resource details.

```sql
SELECT
filter_expression,
group_arn,
group_name,
insights_configuration
FROM aws.xray.groups
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

Creates a group resource with a name and a filter expression.

```sql
INSERT INTO aws.xray.groups (
GroupName,
FilterExpression,
InsightsConfiguration,
Tags,
region
)
SELECT 
'{{ GroupName }}' /* required */,
'{{ FilterExpression }}',
'{{ InsightsConfiguration }}',
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
    - name: GroupName
      value: "{{ GroupName }}"
    - name: FilterExpression
      value: "{{ FilterExpression }}"
    - name: InsightsConfiguration
      description: |
        The structure containing configurations related to insights.
      value:
        InsightsEnabled: {{ InsightsEnabled }}
        NotificationsEnabled: {{ NotificationsEnabled }}
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
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

Updates a group resource.

```sql
UPDATE aws.xray.groups
SET 
GroupName = '{{ GroupName }}',
GroupARN = '{{ GroupARN }}',
FilterExpression = '{{ FilterExpression }}',
InsightsConfiguration = '{{ InsightsConfiguration }}'
WHERE 
region = '{{ region }}' --required
RETURNING
group;
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

Deletes a group resource.

```sql
DELETE FROM aws.xray.groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_groups"
    values={[
        { label: 'get_groups', value: 'get_groups' }
    ]}
>
<TabItem value="get_groups">

Retrieves all active group details.

```sql
EXEC aws.xray.groups.get_groups 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
</Tabs>
