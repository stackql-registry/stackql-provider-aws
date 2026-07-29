--- 
title: cells
hide_title: false
hide_table_of_contents: false
keywords:
  - cells
  - route53_recovery_readiness
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

Creates, updates, deletes, gets or lists a <code>cells</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cells" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53_recovery_readiness.cells" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cell"
    values={[
        { label: 'get_cell', value: 'get_cell' },
        { label: 'list_cells', value: 'list_cells' }
    ]}
>
<TabItem value="get_cell">

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
    <td><CopyableCode code="cell_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the cell.</td>
</tr>
<tr>
    <td><CopyableCode code="cell_name" /></td>
    <td><code>string</code></td>
    <td>The name of the cell. (pattern: &lt;code&gt;\A&#91;a-zA-Z0-9_&#93;+\z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cells" /></td>
    <td><code>array</code></td>
    <td>A list of cell ARNs.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_readiness_scopes" /></td>
    <td><code>array</code></td>
    <td>The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags on the resources.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cells">

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
    <td><CopyableCode code="cell_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the cell.</td>
</tr>
<tr>
    <td><CopyableCode code="cell_name" /></td>
    <td><code>string</code></td>
    <td>The name of the cell. (pattern: &lt;code&gt;\A&#91;a-zA-Z0-9_&#93;+\z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cells" /></td>
    <td><code>array</code></td>
    <td>A list of cell ARNs.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_readiness_scopes" /></td>
    <td><code>array</code></td>
    <td>The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags on the resources.</td>
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
    <td><a href="#get_cell"><CopyableCode code="get_cell" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cell_name"><code>cell_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a cell including cell name, cell Amazon Resource Name (ARN), ARNs of nested cells for this cell, and a list of those cell ARNs with their associated recovery group ARNs.</td>
</tr>
<tr>
    <td><a href="#list_cells"><CopyableCode code="list_cells" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the cells for an account.</td>
</tr>
<tr>
    <td><a href="#create_cell"><CopyableCode code="create_cell" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CellName"><code>CellName</code></a></td>
    <td></td>
    <td>Creates a cell in an account.</td>
</tr>
<tr>
    <td><a href="#update_cell"><CopyableCode code="update_cell" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cell_name"><code>cell_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a cell to replace the list of nested cells with a new list of nested cells.</td>
</tr>
<tr>
    <td><a href="#delete_cell"><CopyableCode code="delete_cell" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cell_name"><code>cell_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a cell. When successful, the response code is 204, with no response body.</td>
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
<tr id="parameter-cell_name">
    <td><CopyableCode code="cell_name" /></td>
    <td><code>string</code></td>
    <td>The name of the cell.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of objects that you want to return with this call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies which batch of results you want to see.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cell"
    values={[
        { label: 'get_cell', value: 'get_cell' },
        { label: 'list_cells', value: 'list_cells' }
    ]}
>
<TabItem value="get_cell">

Gets information about a cell including cell name, cell Amazon Resource Name (ARN), ARNs of nested cells for this cell, and a list of those cell ARNs with their associated recovery group ARNs.

```sql
SELECT
cell_arn,
cell_name,
cells,
parent_readiness_scopes,
tags
FROM aws.route53_recovery_readiness.cells
WHERE cell_name = '{{ cell_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_cells">

Lists the cells for an account.

```sql
SELECT
cell_arn,
cell_name,
cells,
parent_readiness_scopes,
tags
FROM aws.route53_recovery_readiness.cells
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cell"
    values={[
        { label: 'create_cell', value: 'create_cell' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cell">

Creates a cell in an account.

```sql
INSERT INTO aws.route53_recovery_readiness.cells (
CellName,
Cells,
Tags,
region
)
SELECT 
'{{ CellName }}' /* required */,
'{{ Cells }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
cell_arn,
cell_name,
cells,
parent_readiness_scopes,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cells
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cells resource.
    - name: CellName
      value: "{{ CellName }}"
    - name: Cells
      value:
        - "{{ Cells }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A collection of tags associated with a resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cell"
    values={[
        { label: 'update_cell', value: 'update_cell' }
    ]}
>
<TabItem value="update_cell">

Updates a cell to replace the list of nested cells with a new list of nested cells.

```sql
UPDATE aws.route53_recovery_readiness.cells
SET 
Cells = '{{ Cells }}'
WHERE 
cell_name = '{{ cell_name }}' --required
AND region = '{{ region }}' --required
RETURNING
cell_arn,
cell_name,
cells,
parent_readiness_scopes,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cell"
    values={[
        { label: 'delete_cell', value: 'delete_cell' }
    ]}
>
<TabItem value="delete_cell">

Delete a cell. When successful, the response code is 204, with no response body.

```sql
DELETE FROM aws.route53_recovery_readiness.cells
WHERE cell_name = '{{ cell_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
