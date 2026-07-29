--- 
title: scripts
hide_title: false
hide_table_of_contents: false
keywords:
  - scripts
  - glue
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

Creates, updates, deletes, gets or lists a <code>scripts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scripts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.scripts" /></td></tr>
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
    <td><a href="#create_script"><CopyableCode code="create_script" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Transforms a directed acyclic graph (DAG) into code.</td>
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
    defaultValue="create_script"
    values={[
        { label: 'create_script', value: 'create_script' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_script">

Transforms a directed acyclic graph (DAG) into code.

```sql
INSERT INTO aws.glue.scripts (
DagNodes,
DagEdges,
Language,
region
)
SELECT 
'{{ DagNodes }}',
'{{ DagEdges }}',
'{{ Language }}',
'{{ region }}'
RETURNING
python_script,
scala_code
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scripts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the scripts resource.
    - name: DagNodes
      description: |
        A list of the nodes in the DAG.
      value:
        - Id: "{{ Id }}"
          NodeType: "{{ NodeType }}"
          Args: "{{ Args }}"
          LineNumber: {{ LineNumber }}
    - name: DagEdges
      description: |
        A list of the edges in the DAG.
      value:
        - Source: "{{ Source }}"
          Target: "{{ Target }}"
          TargetParameter: "{{ TargetParameter }}"
    - name: Language
      value: "{{ Language }}"
      description: |
        The programming language of the resulting code from the DAG.
      valid_values: ['PYTHON', 'SCALA']
`}</CodeBlock>

</TabItem>
</Tabs>
