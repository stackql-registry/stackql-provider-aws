--- 
title: notebooks
hide_title: false
hide_table_of_contents: false
keywords:
  - notebooks
  - athena
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

Creates, updates, deletes, gets or lists a <code>notebooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notebooks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.athena.notebooks" /></td></tr>
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
    <td><a href="#create_notebook"><CopyableCode code="create_notebook" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkGroup"><code>WorkGroup</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Creates an empty ipynb file in the specified Apache Spark enabled workgroup. Throws an error if a file in the workgroup with the same name already exists.</td>
</tr>
<tr>
    <td><a href="#update_notebook"><CopyableCode code="update_notebook" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NotebookId"><code>NotebookId</code></a>, <a href="#parameter-Payload"><code>Payload</code></a>, <a href="#parameter-Type"><code>Type</code></a></td>
    <td></td>
    <td>Updates the contents of a Spark notebook.</td>
</tr>
<tr>
    <td><a href="#delete_notebook"><CopyableCode code="delete_notebook" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified notebook.</td>
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
    defaultValue="create_notebook"
    values={[
        { label: 'create_notebook', value: 'create_notebook' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_notebook">

Creates an empty ipynb file in the specified Apache Spark enabled workgroup. Throws an error if a file in the workgroup with the same name already exists.

```sql
INSERT INTO aws.athena.notebooks (
WorkGroup,
Name,
ClientRequestToken,
region
)
SELECT 
'{{ WorkGroup }}' /* required */,
'{{ Name }}' /* required */,
'{{ ClientRequestToken }}',
'{{ region }}'
RETURNING
NotebookId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: notebooks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the notebooks resource.
    - name: WorkGroup
      value: "{{ WorkGroup }}"
      description: |
        The name of the Spark enabled workgroup in which the notebook will be created.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the ipynb file to be created in the Spark workgroup, without the .ipynb extension.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        A unique case-sensitive string used to ensure the request to create the notebook is idempotent (executes only once). This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_notebook"
    values={[
        { label: 'update_notebook', value: 'update_notebook' }
    ]}
>
<TabItem value="update_notebook">

Updates the contents of a Spark notebook.

```sql
UPDATE aws.athena.notebooks
SET 
NotebookId = '{{ NotebookId }}',
Payload = '{{ Payload }}',
Type = '{{ Type }}',
SessionId = '{{ SessionId }}',
ClientRequestToken = '{{ ClientRequestToken }}'
WHERE 
region = '{{ region }}' --required
AND NotebookId = '{{ NotebookId }}' --required
AND Payload = '{{ Payload }}' --required
AND Type = '{{ Type }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_notebook"
    values={[
        { label: 'delete_notebook', value: 'delete_notebook' }
    ]}
>
<TabItem value="delete_notebook">

Deletes the specified notebook.

```sql
DELETE FROM aws.athena.notebooks
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
