--- 
title: human_task_uis
hide_title: false
hide_table_of_contents: false
keywords:
  - human_task_uis
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>human_task_uis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="human_task_uis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.human_task_uis" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_human_task_ui"
    values={[
        { label: 'describe_human_task_ui', value: 'describe_human_task_ui' },
        { label: 'list_human_task_uis', value: 'list_human_task_uis' }
    ]}
>
<TabItem value="describe_human_task_ui">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the human task user interface was created.</td>
</tr>
<tr>
    <td><CopyableCode code="human_task_ui_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the human task user interface (worker task template). (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;+:&#91;0-9&#93;&#123;12&#125;:human-task-ui/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="human_task_ui_name" /></td>
    <td><code>string</code></td>
    <td>The name of the human task user interface (worker task template). (pattern: &lt;code&gt;&#91;a-z0-9&#93;(-*&#91;a-z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="human_task_ui_status" /></td>
    <td><code>string</code></td>
    <td>The status of the human task user interface (worker task template). Valid values are listed below. (Active, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="ui_template" /></td>
    <td><code>object</code></td>
    <td>Container for user interface template information.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_human_task_uis">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp when SageMaker created the human task user interface.</td>
</tr>
<tr>
    <td><CopyableCode code="human_task_ui_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the human task user interface. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;+:&#91;0-9&#93;&#123;12&#125;:human-task-ui/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="human_task_ui_name" /></td>
    <td><code>string</code></td>
    <td>The name of the human task user interface. (pattern: &lt;code&gt;&#91;a-z0-9&#93;(-*&#91;a-z0-9&#93;)*&lt;/code&gt;)</td>
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
    <td><a href="#describe_human_task_ui"><CopyableCode code="describe_human_task_ui" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the requested human task user interface (worker task template).</td>
</tr>
<tr>
    <td><a href="#list_human_task_uis"><CopyableCode code="list_human_task_uis" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the human task user interfaces in your account.</td>
</tr>
<tr>
    <td><a href="#create_human_task_ui"><CopyableCode code="create_human_task_ui" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HumanTaskUiName"><code>HumanTaskUiName</code></a>, <a href="#parameter-UiTemplate"><code>UiTemplate</code></a></td>
    <td></td>
    <td>Defines the settings you will use for the human review workflow user interface. Reviewers will see a three-panel interface with an instruction area, the item to review, and an input area.</td>
</tr>
<tr>
    <td><a href="#delete_human_task_ui"><CopyableCode code="delete_human_task_ui" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this operation to delete a human task user interface (worker task template). To see a list of human task user interfaces (work task templates) in your account, use ListHumanTaskUis. When you delete a worker task template, it no longer appears when you call ListHumanTaskUis.</td>
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
    defaultValue="describe_human_task_ui"
    values={[
        { label: 'describe_human_task_ui', value: 'describe_human_task_ui' },
        { label: 'list_human_task_uis', value: 'list_human_task_uis' }
    ]}
>
<TabItem value="describe_human_task_ui">

Returns information about the requested human task user interface (worker task template).

```sql
SELECT
creation_time,
human_task_ui_arn,
human_task_ui_name,
human_task_ui_status,
ui_template
FROM aws.sagemaker.human_task_uis
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_human_task_uis">

Returns information about the human task user interfaces in your account.

```sql
SELECT
creation_time,
human_task_ui_arn,
human_task_ui_name
FROM aws.sagemaker.human_task_uis
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_human_task_ui"
    values={[
        { label: 'create_human_task_ui', value: 'create_human_task_ui' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_human_task_ui">

Defines the settings you will use for the human review workflow user interface. Reviewers will see a three-panel interface with an instruction area, the item to review, and an input area.

```sql
INSERT INTO aws.sagemaker.human_task_uis (
HumanTaskUiName,
UiTemplate,
Tags,
region
)
SELECT 
'{{ HumanTaskUiName }}' /* required */,
'{{ UiTemplate }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
human_task_ui_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: human_task_uis
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the human_task_uis resource.
    - name: HumanTaskUiName
      value: "{{ HumanTaskUiName }}"
      description: |
        The name of the user interface you are creating.
    - name: UiTemplate
      description: |
        The Liquid template for the worker user interface.
      value:
        Content: "{{ Content }}"
    - name: Tags
      description: |
        An array of key-value pairs that contain metadata to help you categorize and organize a human review workflow user interface. Each tag consists of a key and a value, both of which you define.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_human_task_ui"
    values={[
        { label: 'delete_human_task_ui', value: 'delete_human_task_ui' }
    ]}
>
<TabItem value="delete_human_task_ui">

Use this operation to delete a human task user interface (worker task template). To see a list of human task user interfaces (work task templates) in your account, use ListHumanTaskUis. When you delete a worker task template, it no longer appears when you call ListHumanTaskUis.

```sql
DELETE FROM aws.sagemaker.human_task_uis
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
