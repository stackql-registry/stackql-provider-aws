--- 
title: data_set_import_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - data_set_import_tasks
  - m2
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

Creates, updates, deletes, gets or lists a <code>data_set_import_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_set_import_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.m2.data_set_import_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_set_import_task"
    values={[
        { label: 'get_data_set_import_task', value: 'get_data_set_import_task' }
    ]}
>
<TabItem value="get_data_set_import_task">

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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the task. (Creating, Running, Completed, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>object</code></td>
    <td>A summary of the status of the task.</td>
</tr>
<tr>
    <td><CopyableCode code="taskId" /></td>
    <td><code>string</code></td>
    <td>The task identifier. (pattern: &lt;code&gt;^\S&#123;1,80&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#get_data_set_import_task"><CopyableCode code="get_data_set_import_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-task_id"><code>task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the status of a data set import task initiated with the CreateDataSetImportTask operation.</td>
</tr>
<tr>
    <td><a href="#create_data_set_import_task"><CopyableCode code="create_data_set_import_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-importConfig"><code>importConfig</code></a></td>
    <td></td>
    <td>Starts a data set import task for a specific application.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the application for which you want to import data sets.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The task identifier returned by the CreateDataSetImportTask operation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_set_import_task"
    values={[
        { label: 'get_data_set_import_task', value: 'get_data_set_import_task' }
    ]}
>
<TabItem value="get_data_set_import_task">

Gets the status of a data set import task initiated with the CreateDataSetImportTask operation.

```sql
SELECT
status,
summary,
taskId
FROM aws.m2.data_set_import_tasks
WHERE application_id = '{{ application_id }}' -- required
AND task_id = '{{ task_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_set_import_task"
    values={[
        { label: 'create_data_set_import_task', value: 'create_data_set_import_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_set_import_task">

Starts a data set import task for a specific application.

```sql
INSERT INTO aws.m2.data_set_import_tasks (
clientToken,
importConfig,
application_id,
region
)
SELECT 
'{{ clientToken }}',
'{{ importConfig }}' /* required */,
'{{ application_id }}',
'{{ region }}'
RETURNING
taskId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_set_import_tasks
  props:
    - name: application_id
      value: "{{ application_id }}"
      description: Required parameter for the data_set_import_tasks resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_set_import_tasks resource.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A client token is a unique, case-sensitive string of up to 128 ASCII characters with ASCII values of 33-126 inclusive. It is generated by the client to ensure idempotent operations, allowing safe retries without unintended side effects.
    - name: importConfig
      description: |
        Identifies one or more data sets you want to import with the CreateDataSetImportTask operation.
      value:
        dataSets:
          - dataSet:
              datasetName: "{{ datasetName }}"
              datasetOrg:
                gdg:
                  limit: {{ limit }}
                  rollDisposition: "{{ rollDisposition }}"
                po:
                  encoding: "{{ encoding }}"
                  format_: "{{ format_ }}"
                  memberFileExtensions: "{{ memberFileExtensions }}"
                ps:
                  encoding: "{{ encoding }}"
                  format_: "{{ format_ }}"
                vsam:
                  alternateKeys: "{{ alternateKeys }}"
                  compressed: {{ compressed }}
                  encoding: "{{ encoding }}"
                  format_: "{{ format_ }}"
                  primaryKey: "{{ primaryKey }}"
              recordLength:
                max: {{ max }}
                min: {{ min }}
              relativePath: "{{ relativePath }}"
              storageType: "{{ storageType }}"
            externalLocation:
              s3Location: "{{ s3Location }}"
        s3Location: "{{ s3Location }}"
`}</CodeBlock>

</TabItem>
</Tabs>
