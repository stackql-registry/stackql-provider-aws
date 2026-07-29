--- 
title: code_bindings
hide_title: false
hide_table_of_contents: false
keywords:
  - code_bindings
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

Creates, updates, deletes, gets or lists a <code>code_bindings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="code_bindings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.schemas.code_bindings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_code_binding"
    values={[
        { label: 'describe_code_binding', value: 'describe_code_binding' }
    ]}
>
<TabItem value="describe_code_binding">

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time and date that the code binding was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that code bindings were modified.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_version" /></td>
    <td><code>string</code></td>
    <td>The version number of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of code binding generation. (CREATE_IN_PROGRESS, CREATE_COMPLETE, CREATE_FAILED)</td>
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
    <td><a href="#describe_code_binding"><CopyableCode code="describe_code_binding" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-language"><code>language</code></a>, <a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-schema_name"><code>schema_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-schemaVersion"><code>schemaVersion</code></a></td>
    <td>Describe the code binding URI.</td>
</tr>
<tr>
    <td><a href="#put_code_binding"><CopyableCode code="put_code_binding" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-language"><code>language</code></a>, <a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-schema_name"><code>schema_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-schemaVersion"><code>schemaVersion</code></a></td>
    <td>Put code binding URI</td>
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
    defaultValue="describe_code_binding"
    values={[
        { label: 'describe_code_binding', value: 'describe_code_binding' }
    ]}
>
<TabItem value="describe_code_binding">

Describe the code binding URI.

```sql
SELECT
creation_date,
last_modified,
schema_version,
status
FROM aws.schemas.code_bindings
WHERE language = '{{ language }}' -- required
AND registry_name = '{{ registry_name }}' -- required
AND schema_name = '{{ schema_name }}' -- required
AND region = '{{ region }}' -- required
AND schemaVersion = '{{ schemaVersion }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_code_binding"
    values={[
        { label: 'put_code_binding', value: 'put_code_binding' }
    ]}
>
<TabItem value="put_code_binding">

Put code binding URI

```sql
REPLACE aws.schemas.code_bindings
SET 
-- No updatable properties
WHERE 
language = '{{ language }}' --required
AND registry_name = '{{ registry_name }}' --required
AND schema_name = '{{ schema_name }}' --required
AND region = '{{ region }}' --required
AND schemaVersion = '{{ schemaVersion}}'
RETURNING
creation_date,
last_modified,
schema_version,
status;
```
</TabItem>
</Tabs>
