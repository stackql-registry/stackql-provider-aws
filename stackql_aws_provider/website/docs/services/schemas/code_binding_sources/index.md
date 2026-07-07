--- 
title: code_binding_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - code_binding_sources
  - schemas
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

Creates, updates, deletes, gets or lists a <code>code_binding_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="code_binding_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.schemas.code_binding_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_code_binding_source"
    values={[
        { label: 'get_code_binding_source', value: 'get_code_binding_source' }
    ]}
>
<TabItem value="get_code_binding_source">

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
    <td><CopyableCode code="Body" /></td>
    <td><code>string (byte)</code></td>
    <td></td>
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
    <td><a href="#get_code_binding_source"><CopyableCode code="get_code_binding_source" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-language"><code>language</code></a>, <a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-schema_name"><code>schema_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-schemaVersion"><code>schemaVersion</code></a></td>
    <td>Get the code binding source URI.</td>
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
<tr id="parameter-language">
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The language of the code binding.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-registry_name">
    <td><CopyableCode code="registry_name" /></td>
    <td><code>string</code></td>
    <td>The name of the registry.</td>
</tr>
<tr id="parameter-schema_name">
    <td><CopyableCode code="schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the schema.</td>
</tr>
<tr id="parameter-schemaVersion">
    <td><CopyableCode code="schemaVersion" /></td>
    <td><code>string</code></td>
    <td>Specifying this limits the results to only this schema version.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_code_binding_source"
    values={[
        { label: 'get_code_binding_source', value: 'get_code_binding_source' }
    ]}
>
<TabItem value="get_code_binding_source">

Get the code binding source URI.

```sql
SELECT
Body
FROM aws.schemas.code_binding_sources
WHERE language = '{{ language }}' -- required
AND registry_name = '{{ registry_name }}' -- required
AND schema_name = '{{ schema_name }}' -- required
AND region = '{{ region }}' -- required
AND schemaVersion = '{{ schemaVersion }}'
;
```
</TabItem>
</Tabs>
