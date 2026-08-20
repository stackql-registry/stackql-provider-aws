--- 
title: glossaries
hide_title: false
hide_table_of_contents: false
keywords:
  - glossaries
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

Creates, updates, deletes, gets or lists a <code>glossaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="glossaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.glossaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_glossary"
    values={[
        { label: 'get_glossary', value: 'get_glossary' },
        { label: 'list_glossaries', value: 'list_glossaries' }
    ]}
>
<TabItem value="get_glossary">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the glossary.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_glossaries">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the glossary.</td>
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
    <td><a href="#get_glossary"><CopyableCode code="get_glossary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a business glossary in Glue Data Catalog by its identifier.</td>
</tr>
<tr>
    <td><a href="#list_glossaries"><CopyableCode code="list_glossaries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists business glossaries in Glue Data Catalog.</td>
</tr>
<tr>
    <td><a href="#create_glossary"><CopyableCode code="create_glossary" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a business glossary in Glue Data Catalog. A glossary is a container for glossary terms that define business concepts.</td>
</tr>
<tr>
    <td><a href="#update_glossary"><CopyableCode code="update_glossary" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a></td>
    <td></td>
    <td>Updates a business glossary in Glue Data Catalog.</td>
</tr>
<tr>
    <td><a href="#delete_glossary"><CopyableCode code="delete_glossary" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a business glossary from Glue Data Catalog. A glossary cannot be deleted if it still contains glossary terms.</td>
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
    defaultValue="get_glossary"
    values={[
        { label: 'get_glossary', value: 'get_glossary' },
        { label: 'list_glossaries', value: 'list_glossaries' }
    ]}
>
<TabItem value="get_glossary">

Retrieves a business glossary in Glue Data Catalog by its identifier.

```sql
SELECT
description,
id,
name
FROM aws.glue.glossaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_glossaries">

Lists business glossaries in Glue Data Catalog.

```sql
SELECT
description,
id,
name
FROM aws.glue.glossaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_glossary"
    values={[
        { label: 'create_glossary', value: 'create_glossary' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_glossary">

Creates a business glossary in Glue Data Catalog. A glossary is a container for glossary terms that define business concepts.

```sql
INSERT INTO aws.glue.glossaries (
Name,
Description,
ClientToken,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
description,
id,
name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: glossaries
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the glossaries resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the glossary.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the glossary.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_glossary"
    values={[
        { label: 'update_glossary', value: 'update_glossary' }
    ]}
>
<TabItem value="update_glossary">

Updates a business glossary in Glue Data Catalog.

```sql
UPDATE aws.glue.glossaries
SET 
Identifier = '{{ Identifier }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
ClientToken = '{{ ClientToken }}'
WHERE 
region = '{{ region }}' --required
AND Identifier = '{{ Identifier }}' --required
RETURNING
description,
id,
name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_glossary"
    values={[
        { label: 'delete_glossary', value: 'delete_glossary' }
    ]}
>
<TabItem value="delete_glossary">

Deletes a business glossary from Glue Data Catalog. A glossary cannot be deleted if it still contains glossary terms.

```sql
DELETE FROM aws.glue.glossaries
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
