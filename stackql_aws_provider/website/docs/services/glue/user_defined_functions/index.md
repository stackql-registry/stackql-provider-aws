--- 
title: user_defined_functions
hide_title: false
hide_table_of_contents: false
keywords:
  - user_defined_functions
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

Creates, updates, deletes, gets or lists a <code>user_defined_functions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_defined_functions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.user_defined_functions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user_defined_function"
    values={[
        { label: 'get_user_defined_function', value: 'get_user_defined_function' },
        { label: 'get_user_defined_functions', value: 'get_user_defined_functions' }
    ]}
>
<TabItem value="get_user_defined_function">

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
    <td><CopyableCode code="CatalogId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Data Catalog in which the function resides. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ClassName" /></td>
    <td><code>string</code></td>
    <td>The Java class that contains the function code. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the function was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DatabaseName" /></td>
    <td><code>string</code></td>
    <td>The name of the catalog database that contains the function. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FunctionName" /></td>
    <td><code>string</code></td>
    <td>The name of the function. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FunctionType" /></td>
    <td><code>string</code></td>
    <td>The type of the function. (REGULAR_FUNCTION, AGGREGATE_FUNCTION, STORED_PROCEDURE)</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerName" /></td>
    <td><code>string</code></td>
    <td>The owner of the function. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerType" /></td>
    <td><code>string</code></td>
    <td>The owner type. (USER, ROLE, GROUP)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceUris" /></td>
    <td><code>array</code></td>
    <td>The resource URIs for the function.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_user_defined_functions">

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
    <td><CopyableCode code="CatalogId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Data Catalog in which the function resides. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ClassName" /></td>
    <td><code>string</code></td>
    <td>The Java class that contains the function code. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the function was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DatabaseName" /></td>
    <td><code>string</code></td>
    <td>The name of the catalog database that contains the function. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FunctionName" /></td>
    <td><code>string</code></td>
    <td>The name of the function. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FunctionType" /></td>
    <td><code>string</code></td>
    <td>The type of the function. (REGULAR_FUNCTION, AGGREGATE_FUNCTION, STORED_PROCEDURE)</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerName" /></td>
    <td><code>string</code></td>
    <td>The owner of the function. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerType" /></td>
    <td><code>string</code></td>
    <td>The owner type. (USER, ROLE, GROUP)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceUris" /></td>
    <td><code>array</code></td>
    <td>The resource URIs for the function.</td>
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
    <td><a href="#get_user_defined_function"><CopyableCode code="get_user_defined_function" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a specified function definition from the Data Catalog.</td>
</tr>
<tr>
    <td><a href="#get_user_defined_functions"><CopyableCode code="get_user_defined_functions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves multiple function definitions from the Data Catalog.</td>
</tr>
<tr>
    <td><a href="#create_user_defined_function"><CopyableCode code="create_user_defined_function" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-FunctionInput"><code>FunctionInput</code></a></td>
    <td></td>
    <td>Creates a new function definition in the Data Catalog.</td>
</tr>
<tr>
    <td><a href="#update_user_defined_function"><CopyableCode code="update_user_defined_function" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-FunctionName"><code>FunctionName</code></a>, <a href="#parameter-FunctionInput"><code>FunctionInput</code></a></td>
    <td></td>
    <td>Updates an existing function definition in the Data Catalog.</td>
</tr>
<tr>
    <td><a href="#delete_user_defined_function"><CopyableCode code="delete_user_defined_function" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing function definition from the Data Catalog.</td>
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
    defaultValue="get_user_defined_function"
    values={[
        { label: 'get_user_defined_function', value: 'get_user_defined_function' },
        { label: 'get_user_defined_functions', value: 'get_user_defined_functions' }
    ]}
>
<TabItem value="get_user_defined_function">

Retrieves a specified function definition from the Data Catalog.

```sql
SELECT
CatalogId,
ClassName,
CreateTime,
DatabaseName,
FunctionName,
FunctionType,
OwnerName,
OwnerType,
ResourceUris
FROM aws.glue.user_defined_functions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_user_defined_functions">

Retrieves multiple function definitions from the Data Catalog.

```sql
SELECT
CatalogId,
ClassName,
CreateTime,
DatabaseName,
FunctionName,
FunctionType,
OwnerName,
OwnerType,
ResourceUris
FROM aws.glue.user_defined_functions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_defined_function"
    values={[
        { label: 'create_user_defined_function', value: 'create_user_defined_function' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_defined_function">

Creates a new function definition in the Data Catalog.

```sql
INSERT INTO aws.glue.user_defined_functions (
CatalogId,
DatabaseName,
FunctionInput,
region
)
SELECT 
'{{ CatalogId }}',
'{{ DatabaseName }}' /* required */,
'{{ FunctionInput }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: user_defined_functions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the user_defined_functions resource.
    - name: CatalogId
      value: "{{ CatalogId }}"
      description: |
        The ID of the Data Catalog in which to create the function. If none is provided, the Amazon Web Services account ID is used by default.
    - name: DatabaseName
      value: "{{ DatabaseName }}"
      description: |
        The name of the catalog database in which to create the function.
    - name: FunctionInput
      description: |
        A FunctionInput object that defines the function to create in the Data Catalog.
      value:
        FunctionName: "{{ FunctionName }}"
        ClassName: "{{ ClassName }}"
        OwnerName: "{{ OwnerName }}"
        FunctionType: "{{ FunctionType }}"
        OwnerType: "{{ OwnerType }}"
        ResourceUris:
          - ResourceType: "{{ ResourceType }}"
            Uri: "{{ Uri }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_user_defined_function"
    values={[
        { label: 'update_user_defined_function', value: 'update_user_defined_function' }
    ]}
>
<TabItem value="update_user_defined_function">

Updates an existing function definition in the Data Catalog.

```sql
UPDATE aws.glue.user_defined_functions
SET 
CatalogId = '{{ CatalogId }}',
DatabaseName = '{{ DatabaseName }}',
FunctionName = '{{ FunctionName }}',
FunctionInput = '{{ FunctionInput }}'
WHERE 
region = '{{ region }}' --required
AND DatabaseName = '{{ DatabaseName }}' --required
AND FunctionName = '{{ FunctionName }}' --required
AND FunctionInput = '{{ FunctionInput }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user_defined_function"
    values={[
        { label: 'delete_user_defined_function', value: 'delete_user_defined_function' }
    ]}
>
<TabItem value="delete_user_defined_function">

Deletes an existing function definition from the Data Catalog.

```sql
DELETE FROM aws.glue.user_defined_functions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
