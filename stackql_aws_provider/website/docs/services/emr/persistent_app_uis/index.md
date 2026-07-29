--- 
title: persistent_app_uis
hide_title: false
hide_table_of_contents: false
keywords:
  - persistent_app_uis
  - emr
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

Creates, updates, deletes, gets or lists a <code>persistent_app_uis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="persistent_app_uis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.persistent_app_uis" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_persistent_app_ui"
    values={[
        { label: 'describe_persistent_app_ui', value: 'describe_persistent_app_ui' }
    ]}
>
<TabItem value="describe_persistent_app_ui">

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
    <td><CopyableCode code="author_id" /></td>
    <td><code>string</code></td>
    <td>The author ID for the persistent application user interface object. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date and time for the persistent application user interface object.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the persistent application user interface object was last changed.</td>
</tr>
<tr>
    <td><CopyableCode code="last_state_change_reason" /></td>
    <td><code>string</code></td>
    <td>The reason the persistent application user interface object was last changed. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="persistent_app_ui_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the persistent application user interface object. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="persistent_app_ui_status" /></td>
    <td><code>string</code></td>
    <td>The status for the persistent application user interface object. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="persistent_app_ui_type_list" /></td>
    <td><code>array</code></td>
    <td>The type list for the persistent application user interface object. Valid values include SHS, YTS, or TEZ.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A collection of tags for the persistent application user interface object.</td>
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
    <td><a href="#describe_persistent_app_ui"><CopyableCode code="describe_persistent_app_ui" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a persistent application user interface.</td>
</tr>
<tr>
    <td><a href="#create_persistent_app_ui"><CopyableCode code="create_persistent_app_ui" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TargetResourceArn"><code>TargetResourceArn</code></a></td>
    <td></td>
    <td>Creates a persistent application user interface.</td>
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
    defaultValue="describe_persistent_app_ui"
    values={[
        { label: 'describe_persistent_app_ui', value: 'describe_persistent_app_ui' }
    ]}
>
<TabItem value="describe_persistent_app_ui">

Describes a persistent application user interface.

```sql
SELECT
author_id,
creation_time,
last_modified_time,
last_state_change_reason,
persistent_app_ui_id,
persistent_app_ui_status,
persistent_app_ui_type_list,
tags
FROM aws.emr.persistent_app_uis
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_persistent_app_ui"
    values={[
        { label: 'create_persistent_app_ui', value: 'create_persistent_app_ui' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_persistent_app_ui">

Creates a persistent application user interface.

```sql
INSERT INTO aws.emr.persistent_app_uis (
TargetResourceArn,
EMRContainersConfig,
Tags,
XReferer,
ProfilerType,
region
)
SELECT 
'{{ TargetResourceArn }}' /* required */,
'{{ EMRContainersConfig }}',
'{{ Tags }}',
'{{ XReferer }}',
'{{ ProfilerType }}',
'{{ region }}'
RETURNING
persistent_app_ui_id,
runtime_role_enabled_cluster
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: persistent_app_uis
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the persistent_app_uis resource.
    - name: TargetResourceArn
      value: "{{ TargetResourceArn }}"
      description: |
        The unique Amazon Resource Name (ARN) of the target resource.
    - name: EMRContainersConfig
      description: |
        The EMR containers configuration.
      value:
        JobRunId: "{{ JobRunId }}"
    - name: Tags
      description: |
        Tags for the persistent application user interface.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: XReferer
      value: "{{ XReferer }}"
      description: |
        The cross reference for the persistent application user interface.
    - name: ProfilerType
      value: "{{ ProfilerType }}"
      description: |
        The profiler type for the persistent application user interface.
      valid_values: ['SHS', 'TEZUI', 'YTS']
`}</CodeBlock>

</TabItem>
</Tabs>
