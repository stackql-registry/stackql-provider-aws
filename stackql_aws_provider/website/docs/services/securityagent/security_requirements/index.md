--- 
title: security_requirements
hide_title: false
hide_table_of_contents: false
keywords:
  - security_requirements
  - securityagent
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

Creates, updates, deletes, gets or lists a <code>security_requirements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_requirements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityagent.security_requirements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_security_requirements"
    values={[
        { label: 'batch_get_security_requirements', value: 'batch_get_security_requirements' },
        { label: 'list_security_requirements', value: 'list_security_requirements' }
    ]}
>
<TabItem value="batch_get_security_requirements">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>The list of errors for security requirements that failed to be retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="security_requirements" /></td>
    <td><code>array</code></td>
    <td>The list of security requirements that were successfully retrieved.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_security_requirements">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the security requirement.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the security requirement was created, in UTC format.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the security requirement.</td>
</tr>
<tr>
    <td><CopyableCode code="pack_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the pack containing the security requirement.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the security requirement was last updated, in UTC format.</td>
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
    <td><a href="#batch_get_security_requirements"><CopyableCode code="batch_get_security_requirements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Batch retrieves security requirements from a pack.</td>
</tr>
<tr>
    <td><a href="#list_security_requirements"><CopyableCode code="list_security_requirements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists security requirements within a pack.</td>
</tr>
<tr>
    <td><a href="#batch_create_security_requirements"><CopyableCode code="batch_create_security_requirements" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-packId"><code>packId</code></a>, <a href="#parameter-securityRequirements"><code>securityRequirements</code></a></td>
    <td></td>
    <td>Batch creates security requirements in a customer managed pack.</td>
</tr>
<tr>
    <td><a href="#batch_delete_security_requirements"><CopyableCode code="batch_delete_security_requirements" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-packId"><code>packId</code></a>, <a href="#parameter-securityRequirementNames"><code>securityRequirementNames</code></a></td>
    <td></td>
    <td>Batch deletes security requirements from a customer managed pack.</td>
</tr>
<tr>
    <td><a href="#batch_update_security_requirements"><CopyableCode code="batch_update_security_requirements" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-packId"><code>packId</code></a>, <a href="#parameter-securityRequirements"><code>securityRequirements</code></a></td>
    <td></td>
    <td>Batch updates security requirements within a customer managed pack.</td>
</tr>
<tr>
    <td><a href="#import_security_requirements"><CopyableCode code="import_security_requirements" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-packId"><code>packId</code></a>, <a href="#parameter-input"><code>input</code></a></td>
    <td></td>
    <td>Imports security requirements from uploaded documents into a customer managed security requirement pack. The import process asynchronously extracts and generates structured security requirements from the provided source files.</td>
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
    defaultValue="batch_get_security_requirements"
    values={[
        { label: 'batch_get_security_requirements', value: 'batch_get_security_requirements' },
        { label: 'list_security_requirements', value: 'list_security_requirements' }
    ]}
>
<TabItem value="batch_get_security_requirements">

Batch retrieves security requirements from a pack.

```sql
SELECT
errors,
security_requirements
FROM aws.securityagent.security_requirements
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_security_requirements">

Lists security requirements within a pack.

```sql
SELECT
name,
created_at,
description,
pack_id,
updated_at
FROM aws.securityagent.security_requirements
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_create_security_requirements"
    values={[
        { label: 'batch_create_security_requirements', value: 'batch_create_security_requirements' },
        { label: 'batch_delete_security_requirements', value: 'batch_delete_security_requirements' },
        { label: 'batch_update_security_requirements', value: 'batch_update_security_requirements' },
        { label: 'import_security_requirements', value: 'import_security_requirements' }
    ]}
>
<TabItem value="batch_create_security_requirements">

Batch creates security requirements in a customer managed pack.

```sql
EXEC aws.securityagent.security_requirements.batch_create_security_requirements 
@region='{{ region }}' --required 
@@json=
'{
"packId": "{{ packId }}", 
"securityRequirements": "{{ securityRequirements }}"
}'
;
```
</TabItem>
<TabItem value="batch_delete_security_requirements">

Batch deletes security requirements from a customer managed pack.

```sql
EXEC aws.securityagent.security_requirements.batch_delete_security_requirements 
@region='{{ region }}' --required 
@@json=
'{
"packId": "{{ packId }}", 
"securityRequirementNames": "{{ securityRequirementNames }}"
}'
;
```
</TabItem>
<TabItem value="batch_update_security_requirements">

Batch updates security requirements within a customer managed pack.

```sql
EXEC aws.securityagent.security_requirements.batch_update_security_requirements 
@region='{{ region }}' --required 
@@json=
'{
"packId": "{{ packId }}", 
"securityRequirements": "{{ securityRequirements }}"
}'
;
```
</TabItem>
<TabItem value="import_security_requirements">

Imports security requirements from uploaded documents into a customer managed security requirement pack. The import process asynchronously extracts and generates structured security requirements from the provided source files.

```sql
EXEC aws.securityagent.security_requirements.import_security_requirements 
@region='{{ region }}' --required 
@@json=
'{
"packId": "{{ packId }}", 
"input": "{{ input }}"
}'
;
```
</TabItem>
</Tabs>
