--- 
title: template_steps
hide_title: false
hide_table_of_contents: false
keywords:
  - template_steps
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

Creates, updates, deletes, gets or lists a <code>template_steps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="template_steps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.migrationhuborchestrator.template_steps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_template_step"
    values={[
        { label: 'get_template_step', value: 'get_template_step' },
        { label: 'list_template_steps', value: 'list_template_steps' }
    ]}
>
<TabItem value="get_template_step">

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
    <td>The ID of the step. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string</code></td>
    <td>The time at which the step was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="next" /></td>
    <td><code>array</code></td>
    <td>The next step.</td>
</tr>
<tr>
    <td><CopyableCode code="outputs" /></td>
    <td><code>array</code></td>
    <td>The outputs of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="previous" /></td>
    <td><code>array</code></td>
    <td>The previous step.</td>
</tr>
<tr>
    <td><CopyableCode code="stepActionType" /></td>
    <td><code>string</code></td>
    <td>The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step. (MANUAL, AUTOMATED)</td>
</tr>
<tr>
    <td><CopyableCode code="stepAutomationConfiguration" /></td>
    <td><code>object</code></td>
    <td>The custom script to run tests on source or target environments.</td>
</tr>
<tr>
    <td><CopyableCode code="stepGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the step group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="templateId" /></td>
    <td><code>string</code></td>
    <td>The ID of the template. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9_.+&#93;+&#91;-a-zA-Z0-9_.+ &#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_template_steps">

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
    <td>The ID of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the step.</td>
</tr>
<tr>
    <td><CopyableCode code="next" /></td>
    <td><code>array</code></td>
    <td>The next step.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the step. (AWS_MANAGED, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="previous" /></td>
    <td><code>array</code></td>
    <td>The previous step.</td>
</tr>
<tr>
    <td><CopyableCode code="stepActionType" /></td>
    <td><code>string</code></td>
    <td>The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step. (MANUAL, AUTOMATED)</td>
</tr>
<tr>
    <td><CopyableCode code="stepGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the step group.</td>
</tr>
<tr>
    <td><CopyableCode code="targetType" /></td>
    <td><code>string</code></td>
    <td>The servers on which to run the script. (SINGLE, ALL, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="templateId" /></td>
    <td><code>string</code></td>
    <td>The ID of the template.</td>
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
    <td><a href="#get_template_step"><CopyableCode code="get_template_step" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-templateId"><code>templateId</code></a>, <a href="#parameter-stepGroupId"><code>stepGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a specific step in a template.</td>
</tr>
<tr>
    <td><a href="#list_template_steps"><CopyableCode code="list_template_steps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-templateId"><code>templateId</code></a>, <a href="#parameter-stepGroupId"><code>stepGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List the steps in a template.</td>
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
    <td>The ID of the step.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-stepGroupId">
    <td><CopyableCode code="stepGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the step group.</td>
</tr>
<tr id="parameter-templateId">
    <td><CopyableCode code="templateId" /></td>
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
    defaultValue="get_template_step"
    values={[
        { label: 'get_template_step', value: 'get_template_step' },
        { label: 'list_template_steps', value: 'list_template_steps' }
    ]}
>
<TabItem value="get_template_step">

Get a specific step in a template.

```sql
SELECT
id,
name,
creationTime,
description,
next,
outputs,
previous,
stepActionType,
stepAutomationConfiguration,
stepGroupId,
templateId
FROM aws.migrationhuborchestrator.template_steps
WHERE id = '{{ id }}' -- required
AND templateId = '{{ templateId }}' -- required
AND stepGroupId = '{{ stepGroupId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_template_steps">

List the steps in a template.

```sql
SELECT
id,
name,
next,
owner,
previous,
stepActionType,
stepGroupId,
targetType,
templateId
FROM aws.migrationhuborchestrator.template_steps
WHERE templateId = '{{ templateId }}' -- required
AND stepGroupId = '{{ stepGroupId }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
