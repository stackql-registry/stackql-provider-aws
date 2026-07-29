--- 
title: inputs
hide_title: false
hide_table_of_contents: false
keywords:
  - inputs
  - iotevents
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

Creates, updates, deletes, gets or lists an <code>inputs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inputs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotevents.inputs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_input"
    values={[
        { label: 'describe_input', value: 'describe_input' },
        { label: 'list_inputs', value: 'list_inputs' }
    ]}
>
<TabItem value="describe_input">

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
    <td><CopyableCode code="input_configuration" /></td>
    <td><code>object</code></td>
    <td>Information about the configuration of an input.</td>
</tr>
<tr>
    <td><CopyableCode code="input_definition" /></td>
    <td><code>object</code></td>
    <td>The definition of the input.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_inputs">

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
    <td><CopyableCode code="input_summaries" /></td>
    <td><code>array</code></td>
    <td>Summary information about the inputs.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token that you can use to return the next set of results, or null if there are no more results.</td>
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
    <td><a href="#describe_input"><CopyableCode code="describe_input" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-input_name"><code>input_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an input.</td>
</tr>
<tr>
    <td><a href="#list_inputs"><CopyableCode code="list_inputs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the inputs you have created.</td>
</tr>
<tr>
    <td><a href="#create_input"><CopyableCode code="create_input" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-inputName"><code>inputName</code></a>, <a href="#parameter-inputDefinition"><code>inputDefinition</code></a></td>
    <td></td>
    <td>Creates an input.</td>
</tr>
<tr>
    <td><a href="#update_input"><CopyableCode code="update_input" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-input_name"><code>input_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-inputDefinition"><code>inputDefinition</code></a></td>
    <td></td>
    <td>Updates an input.</td>
</tr>
<tr>
    <td><a href="#delete_input"><CopyableCode code="delete_input" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-input_name"><code>input_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an input.</td>
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
<tr id="parameter-input_name">
    <td><CopyableCode code="input_name" /></td>
    <td><code>string</code></td>
    <td>The name of the input to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that you can use to return the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_input"
    values={[
        { label: 'describe_input', value: 'describe_input' },
        { label: 'list_inputs', value: 'list_inputs' }
    ]}
>
<TabItem value="describe_input">

Describes an input.

```sql
SELECT
input_configuration,
input_definition
FROM aws.iotevents.inputs
WHERE input_name = '{{ input_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_inputs">

Lists the inputs you have created.

```sql
SELECT
input_summaries,
next_token
FROM aws.iotevents.inputs
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_input"
    values={[
        { label: 'create_input', value: 'create_input' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_input">

Creates an input.

```sql
INSERT INTO aws.iotevents.inputs (
inputName,
inputDescription,
inputDefinition,
tags,
region
)
SELECT 
'{{ inputName }}' /* required */,
'{{ inputDescription }}',
'{{ inputDefinition }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
input_configuration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: inputs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the inputs resource.
    - name: inputName
      value: "{{ inputName }}"
    - name: inputDescription
      value: "{{ inputDescription }}"
    - name: inputDefinition
      description: |
        The definition of the input.
      value:
        attributes:
          - jsonPath: "{{ jsonPath }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_input"
    values={[
        { label: 'update_input', value: 'update_input' }
    ]}
>
<TabItem value="update_input">

Updates an input.

```sql
UPDATE aws.iotevents.inputs
SET 
inputDescription = '{{ inputDescription }}',
inputDefinition = '{{ inputDefinition }}'
WHERE 
input_name = '{{ input_name }}' --required
AND region = '{{ region }}' --required
AND inputDefinition = '{{ inputDefinition }}' --required
RETURNING
input_configuration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_input"
    values={[
        { label: 'delete_input', value: 'delete_input' }
    ]}
>
<TabItem value="delete_input">

Deletes an input.

```sql
DELETE FROM aws.iotevents.inputs
WHERE input_name = '{{ input_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
