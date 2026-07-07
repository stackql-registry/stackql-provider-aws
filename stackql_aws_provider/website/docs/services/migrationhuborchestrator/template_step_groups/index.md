--- 
title: template_step_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - template_step_groups
  - migrationhuborchestrator
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

Creates, updates, deletes, gets or lists a <code>template_step_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="template_step_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.migrationhuborchestrator.template_step_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_template_step_group"
    values={[
        { label: 'get_template_step_group', value: 'get_template_step_group' },
        { label: 'list_template_step_groups', value: 'list_template_step_groups' }
    ]}
>
<TabItem value="get_template_step_group">

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
    <td>The ID of the step group.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the step group.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the step group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the step group.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the step group was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="next" /></td>
    <td><code>array</code></td>
    <td>The next step group.</td>
</tr>
<tr>
    <td><CopyableCode code="previous" /></td>
    <td><code>array</code></td>
    <td>The previous step group.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the step group. (AWAITING_DEPENDENCIES, READY, IN_PROGRESS, COMPLETED, FAILED, PAUSED, PAUSING, USER_ATTENTION_REQUIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="templateId" /></td>
    <td><code>string</code></td>
    <td>The ID of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="tools" /></td>
    <td><code>array</code></td>
    <td>List of AWS services utilized in a migration workflow.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_template_step_groups">

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
    <td>The ID of the step group.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the step group.</td>
</tr>
<tr>
    <td><CopyableCode code="next" /></td>
    <td><code>array</code></td>
    <td>The next step group.</td>
</tr>
<tr>
    <td><CopyableCode code="previous" /></td>
    <td><code>array</code></td>
    <td>The previous step group.</td>
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
    <td><a href="#get_template_step_group"><CopyableCode code="get_template_step_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a step group in a template.</td>
</tr>
<tr>
    <td><a href="#list_template_step_groups"><CopyableCode code="list_template_step_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List the step groups in a template.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the step group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-template_id">
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the template.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that can be returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_template_step_group"
    values={[
        { label: 'get_template_step_group', value: 'get_template_step_group' },
        { label: 'list_template_step_groups', value: 'list_template_step_groups' }
    ]}
>
<TabItem value="get_template_step_group">

Get a step group in a template.

```sql
SELECT
id,
name,
creationTime,
description,
lastModifiedTime,
next,
previous,
status,
templateId,
tools
FROM aws.migrationhuborchestrator.template_step_groups
WHERE template_id = '{{ template_id }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_template_step_groups">

List the step groups in a template.

```sql
SELECT
id,
name,
next,
previous
FROM aws.migrationhuborchestrator.template_step_groups
WHERE template_id = '{{ template_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
