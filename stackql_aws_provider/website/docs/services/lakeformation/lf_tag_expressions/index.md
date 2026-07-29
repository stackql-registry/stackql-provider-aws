--- 
title: lf_tag_expressions
hide_title: false
hide_table_of_contents: false
keywords:
  - lf_tag_expressions
  - lakeformation
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

Creates, updates, deletes, gets or lists a <code>lf_tag_expressions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lf_tag_expressions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lakeformation.lf_tag_expressions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_lf_tag_expression"
    values={[
        { label: 'get_lf_tag_expression', value: 'get_lf_tag_expression' }
    ]}
>
<TabItem value="get_lf_tag_expression">

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
    <td><CopyableCode code="catalog_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the Data Catalog. By default, the account ID in which the LF-Tag expression is saved. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description with information about the LF-Tag expression. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="expression" /></td>
    <td><code>array</code></td>
    <td>The body of the LF-Tag expression. It is composed of one or more LF-Tag key-value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for the LF-Tag expression. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_lf_tag_expression"><CopyableCode code="get_lf_tag_expression" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details about the LF-Tag expression. The caller must be a data lake admin or must have DESCRIBE permission on the LF-Tag expression resource.</td>
</tr>
<tr>
    <td><a href="#create_lf_tag_expression"><CopyableCode code="create_lf_tag_expression" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new LF-Tag expression with the provided name, description, catalog ID, and expression body. This call fails if a LF-Tag expression with the same name already exists in the caller’s account or if the underlying LF-Tags don't exist. To call this API operation, caller needs the following Lake Formation permissions: CREATE_LF_TAG_EXPRESSION on the root catalog resource. GRANT_WITH_LF_TAG_EXPRESSION on all underlying LF-Tag key:value pairs included in the expression.</td>
</tr>
<tr>
    <td><a href="#update_lf_tag_expression"><CopyableCode code="update_lf_tag_expression" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the name of the LF-Tag expression to the new description and expression body provided. Updating a LF-Tag expression immediately changes the permission boundaries of all existing LFTagPolicy permission grants that reference the given LF-Tag expression.</td>
</tr>
<tr>
    <td><a href="#delete_lf_tag_expression"><CopyableCode code="delete_lf_tag_expression" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the LF-Tag expression. The caller must be a data lake admin or have DROP permissions on the LF-Tag expression. Deleting a LF-Tag expression will also delete all LFTagPolicy permissions referencing the LF-Tag expression.</td>
</tr>
<tr>
    <td><a href="#list_lf_tag_expressions"><CopyableCode code="list_lf_tag_expressions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the LF-Tag expressions in caller’s account filtered based on caller's permissions. Data Lake and read only admins implicitly can see all tag expressions in their account, else caller needs DESCRIBE permissions on tag expression.</td>
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
    defaultValue="get_lf_tag_expression"
    values={[
        { label: 'get_lf_tag_expression', value: 'get_lf_tag_expression' }
    ]}
>
<TabItem value="get_lf_tag_expression">

Returns the details about the LF-Tag expression. The caller must be a data lake admin or must have DESCRIBE permission on the LF-Tag expression resource.

```sql
SELECT
catalog_id,
description,
expression,
name
FROM aws.lakeformation.lf_tag_expressions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_lf_tag_expression"
    values={[
        { label: 'create_lf_tag_expression', value: 'create_lf_tag_expression' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_lf_tag_expression">

Creates a new LF-Tag expression with the provided name, description, catalog ID, and expression body. This call fails if a LF-Tag expression with the same name already exists in the caller’s account or if the underlying LF-Tags don't exist. To call this API operation, caller needs the following Lake Formation permissions: CREATE_LF_TAG_EXPRESSION on the root catalog resource. GRANT_WITH_LF_TAG_EXPRESSION on all underlying LF-Tag key:value pairs included in the expression.

```sql
INSERT INTO aws.lakeformation.lf_tag_expressions (
Name,
Description,
CatalogId,
Expression,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ CatalogId }}',
'{{ Expression }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: lf_tag_expressions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the lf_tag_expressions resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: CatalogId
      value: "{{ CatalogId }}"
    - name: Expression
      value:
        - TagKey: "{{ TagKey }}"
          TagValues: "{{ TagValues }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_lf_tag_expression"
    values={[
        { label: 'update_lf_tag_expression', value: 'update_lf_tag_expression' }
    ]}
>
<TabItem value="update_lf_tag_expression">

Updates the name of the LF-Tag expression to the new description and expression body provided. Updating a LF-Tag expression immediately changes the permission boundaries of all existing LFTagPolicy permission grants that reference the given LF-Tag expression.

```sql
UPDATE aws.lakeformation.lf_tag_expressions
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
CatalogId = '{{ CatalogId }}',
Expression = '{{ Expression }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_lf_tag_expression"
    values={[
        { label: 'delete_lf_tag_expression', value: 'delete_lf_tag_expression' }
    ]}
>
<TabItem value="delete_lf_tag_expression">

Deletes the LF-Tag expression. The caller must be a data lake admin or have DROP permissions on the LF-Tag expression. Deleting a LF-Tag expression will also delete all LFTagPolicy permissions referencing the LF-Tag expression.

```sql
DELETE FROM aws.lakeformation.lf_tag_expressions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_lf_tag_expressions"
    values={[
        { label: 'list_lf_tag_expressions', value: 'list_lf_tag_expressions' }
    ]}
>
<TabItem value="list_lf_tag_expressions">

Returns the LF-Tag expressions in caller’s account filtered based on caller's permissions. Data Lake and read only admins implicitly can see all tag expressions in their account, else caller needs DESCRIBE permissions on tag expression.

```sql
EXEC aws.lakeformation.lf_tag_expressions.list_lf_tag_expressions 
@region='{{ region }}' --required 
@@json=
'{
"CatalogId": "{{ CatalogId }}", 
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
</Tabs>
