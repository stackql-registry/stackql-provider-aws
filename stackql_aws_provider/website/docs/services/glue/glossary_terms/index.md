--- 
title: glossary_terms
hide_title: false
hide_table_of_contents: false
keywords:
  - glossary_terms
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

Creates, updates, deletes, gets or lists a <code>glossary_terms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="glossary_terms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.glossary_terms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_glossary_term"
    values={[
        { label: 'get_glossary_term', value: 'get_glossary_term' },
        { label: 'list_glossary_terms', value: 'list_glossary_terms' }
    ]}
>
<TabItem value="get_glossary_term">

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
    <td><CopyableCode code="glossary_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the glossary containing this term.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the glossary term.</td>
</tr>
<tr>
    <td><CopyableCode code="long_description" /></td>
    <td><code>string</code></td>
    <td>The long description of the glossary term.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the glossary term.</td>
</tr>
<tr>
    <td><CopyableCode code="short_description" /></td>
    <td><code>string</code></td>
    <td>The short description of the glossary term.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_glossary_terms">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the glossary term.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the glossary term.</td>
</tr>
<tr>
    <td><CopyableCode code="short_description" /></td>
    <td><code>string</code></td>
    <td>The short description of the glossary term.</td>
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
    <td><a href="#get_glossary_term"><CopyableCode code="get_glossary_term" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a glossary term in Glue Data Catalog by its identifier.</td>
</tr>
<tr>
    <td><a href="#list_glossary_terms"><CopyableCode code="list_glossary_terms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists glossary terms within a business glossary in Glue Data Catalog.</td>
</tr>
<tr>
    <td><a href="#create_glossary_term"><CopyableCode code="create_glossary_term" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GlossaryIdentifier"><code>GlossaryIdentifier</code></a></td>
    <td></td>
    <td>Creates a glossary term within a business glossary in Glue Data Catalog.</td>
</tr>
<tr>
    <td><a href="#associate_glossary_terms"><CopyableCode code="associate_glossary_terms" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AssetIdentifier"><code>AssetIdentifier</code></a>, <a href="#parameter-GlossaryTermIdentifiers"><code>GlossaryTermIdentifiers</code></a></td>
    <td></td>
    <td>Associates one or more glossary terms with an asset in Glue Data Catalog.</td>
</tr>
<tr>
    <td><a href="#update_glossary_term"><CopyableCode code="update_glossary_term" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a></td>
    <td></td>
    <td>Updates a glossary term in Glue Data Catalog.</td>
</tr>
<tr>
    <td><a href="#delete_glossary_term"><CopyableCode code="delete_glossary_term" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a glossary term from Glue Data Catalog.</td>
</tr>
<tr>
    <td><a href="#disassociate_glossary_terms"><CopyableCode code="disassociate_glossary_terms" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AssetIdentifier"><code>AssetIdentifier</code></a>, <a href="#parameter-GlossaryTermIdentifiers"><code>GlossaryTermIdentifiers</code></a></td>
    <td></td>
    <td>Removes the association of one or more glossary terms from an asset in Glue Data Catalog.</td>
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
    defaultValue="get_glossary_term"
    values={[
        { label: 'get_glossary_term', value: 'get_glossary_term' },
        { label: 'list_glossary_terms', value: 'list_glossary_terms' }
    ]}
>
<TabItem value="get_glossary_term">

Retrieves a glossary term in Glue Data Catalog by its identifier.

```sql
SELECT
glossary_id,
id,
long_description,
name,
short_description
FROM aws.glue.glossary_terms
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_glossary_terms">

Lists glossary terms within a business glossary in Glue Data Catalog.

```sql
SELECT
id,
name,
short_description
FROM aws.glue.glossary_terms
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_glossary_term"
    values={[
        { label: 'create_glossary_term', value: 'create_glossary_term' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_glossary_term">

Creates a glossary term within a business glossary in Glue Data Catalog.

```sql
INSERT INTO aws.glue.glossary_terms (
GlossaryIdentifier,
Name,
ShortDescription,
LongDescription,
ClientToken,
region
)
SELECT 
'{{ GlossaryIdentifier }}' /* required */,
'{{ Name }}',
'{{ ShortDescription }}',
'{{ LongDescription }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
glossary_id,
id,
long_description,
name,
short_description
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: glossary_terms
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the glossary_terms resource.
    - name: GlossaryIdentifier
      value: "{{ GlossaryIdentifier }}"
      description: |
        The unique identifier of the glossary in which to create the term.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the glossary term.
    - name: ShortDescription
      value: "{{ ShortDescription }}"
      description: |
        A short description of the glossary term.
    - name: LongDescription
      value: "{{ LongDescription }}"
      description: |
        A long description of the glossary term.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_glossary_terms"
    values={[
        { label: 'associate_glossary_terms', value: 'associate_glossary_terms' },
        { label: 'update_glossary_term', value: 'update_glossary_term' }
    ]}
>
<TabItem value="associate_glossary_terms">

Associates one or more glossary terms with an asset in Glue Data Catalog.

```sql
UPDATE aws.glue.glossary_terms
SET 
AssetIdentifier = '{{ AssetIdentifier }}',
IterableFormName = '{{ IterableFormName }}',
ItemIdentifier = '{{ ItemIdentifier }}',
GlossaryTermIdentifiers = '{{ GlossaryTermIdentifiers }}',
ClientToken = '{{ ClientToken }}'
WHERE 
region = '{{ region }}' --required
AND AssetIdentifier = '{{ AssetIdentifier }}' --required
AND GlossaryTermIdentifiers = '{{ GlossaryTermIdentifiers }}' --required
RETURNING
asset_identifier,
glossary_terms,
item_identifier,
iterable_form_name;
```
</TabItem>
<TabItem value="update_glossary_term">

Updates a glossary term in Glue Data Catalog.

```sql
UPDATE aws.glue.glossary_terms
SET 
Identifier = '{{ Identifier }}',
Name = '{{ Name }}',
ShortDescription = '{{ ShortDescription }}',
LongDescription = '{{ LongDescription }}',
ClientToken = '{{ ClientToken }}'
WHERE 
region = '{{ region }}' --required
AND Identifier = '{{ Identifier }}' --required
RETURNING
glossary_id,
id,
long_description,
name,
short_description;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_glossary_term"
    values={[
        { label: 'delete_glossary_term', value: 'delete_glossary_term' }
    ]}
>
<TabItem value="delete_glossary_term">

Deletes a glossary term from Glue Data Catalog.

```sql
DELETE FROM aws.glue.glossary_terms
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_glossary_terms"
    values={[
        { label: 'disassociate_glossary_terms', value: 'disassociate_glossary_terms' }
    ]}
>
<TabItem value="disassociate_glossary_terms">

Removes the association of one or more glossary terms from an asset in Glue Data Catalog.

```sql
EXEC aws.glue.glossary_terms.disassociate_glossary_terms 
@region='{{ region }}' --required 
@@json=
'{
"AssetIdentifier": "{{ AssetIdentifier }}", 
"IterableFormName": "{{ IterableFormName }}", 
"ItemIdentifier": "{{ ItemIdentifier }}", 
"GlossaryTermIdentifiers": "{{ GlossaryTermIdentifiers }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
</Tabs>
