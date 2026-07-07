--- 
title: data_automation_library_entities
hide_title: false
hide_table_of_contents: false
keywords:
  - data_automation_library_entities
  - bedrock_data_automation
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

Creates, updates, deletes, gets or lists a <code>data_automation_library_entities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_automation_library_entities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_data_automation.data_automation_library_entities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_automation_library_entity"
    values={[
        { label: 'get_data_automation_library_entity', value: 'get_data_automation_library_entity' },
        { label: 'list_data_automation_library_entities', value: 'list_data_automation_library_entities' }
    ]}
>
<TabItem value="get_data_automation_library_entity">

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
    <td><CopyableCode code="vocabulary" /></td>
    <td><code>object</code></td>
    <td>Vocabulary entity with detailed information</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_automation_library_entities">

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
    <td><CopyableCode code="vocabulary" /></td>
    <td><code>object</code></td>
    <td>Summary of a Vocabulary entity</td>
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
    <td><a href="#get_data_automation_library_entity"><CopyableCode code="get_data_automation_library_entity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-library_arn"><code>library_arn</code></a>, <a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-entity_id"><code>entity_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an existing entity based on entity type from the library</td>
</tr>
<tr>
    <td><a href="#list_data_automation_library_entities"><CopyableCode code="list_data_automation_library_entities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-library_arn"><code>library_arn</code></a>, <a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all stored entities in the library</td>
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
<tr id="parameter-entity_id">
    <td><CopyableCode code="entity_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the entity</td>
</tr>
<tr id="parameter-entity_type">
    <td><CopyableCode code="entity_type" /></td>
    <td><code>string</code></td>
    <td>The entity type for which the entity list is requested</td>
</tr>
<tr id="parameter-library_arn">
    <td><CopyableCode code="library_arn" /></td>
    <td><code>string</code></td>
    <td>ARN generated at the server side when a DataAutomationLibrary is created</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_automation_library_entity"
    values={[
        { label: 'get_data_automation_library_entity', value: 'get_data_automation_library_entity' },
        { label: 'list_data_automation_library_entities', value: 'list_data_automation_library_entities' }
    ]}
>
<TabItem value="get_data_automation_library_entity">

Gets an existing entity based on entity type from the library

```sql
SELECT
vocabulary
FROM aws.bedrock_data_automation.data_automation_library_entities
WHERE library_arn = '{{ library_arn }}' -- required
AND entity_type = '{{ entity_type }}' -- required
AND entity_id = '{{ entity_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_automation_library_entities">

Lists all stored entities in the library

```sql
SELECT
vocabulary
FROM aws.bedrock_data_automation.data_automation_library_entities
WHERE library_arn = '{{ library_arn }}' -- required
AND entity_type = '{{ entity_type }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
