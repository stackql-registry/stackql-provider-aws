--- 
title: lists
hide_title: false
hide_table_of_contents: false
keywords:
  - lists
  - frauddetector
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

Creates, updates, deletes, gets or lists a <code>lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.frauddetector.lists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_list"><CopyableCode code="create_list" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a list. List is a set of input data for a variable in your event dataset. You use the input data in a rule that's associated with your detector. For more information, see Lists.</td>
</tr>
<tr>
    <td><a href="#update_list"><CopyableCode code="update_list" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates a list.</td>
</tr>
<tr>
    <td><a href="#delete_list"><CopyableCode code="delete_list" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the list, provided it is not used in a rule. When you delete a list, Amazon Fraud Detector permanently deletes that list and the elements in the list.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_list"
    values={[
        { label: 'create_list', value: 'create_list' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_list">

Creates a list. List is a set of input data for a variable in your event dataset. You use the input data in a rule that's associated with your detector. For more information, see Lists.

```sql
INSERT INTO aws.frauddetector.lists (
name,
elements,
variableType,
description,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ elements }}',
'{{ variableType }}',
'{{ description }}',
'{{ tags }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: lists
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the lists resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the list.
    - name: elements
      value:
        - "{{ elements }}"
      description: |
        The names of the elements, if providing. You can also create an empty list and add elements later using the UpdateList API.
    - name: variableType
      value: "{{ variableType }}"
      description: |
        The variable type of the list. You can only assign the variable type with String data type. For more information, see Variable types.
    - name: description
      value: "{{ description }}"
      description: |
        The description of the list.
    - name: tags
      description: |
        A collection of the key and value pairs.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_list"
    values={[
        { label: 'update_list', value: 'update_list' }
    ]}
>
<TabItem value="update_list">

Updates a list.

```sql
UPDATE aws.frauddetector.lists
SET 
name = '{{ name }}',
elements = '{{ elements }}',
description = '{{ description }}',
updateMode = '{{ updateMode }}',
variableType = '{{ variableType }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_list"
    values={[
        { label: 'delete_list', value: 'delete_list' }
    ]}
>
<TabItem value="delete_list">

Deletes the list, provided it is not used in a rule. When you delete a list, Amazon Fraud Detector permanently deletes that list and the elements in the list.

```sql
DELETE FROM aws.frauddetector.lists
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
