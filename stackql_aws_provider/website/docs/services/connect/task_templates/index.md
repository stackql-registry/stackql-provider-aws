--- 
title: task_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - task_templates
  - connect
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

Creates, updates, deletes, gets or lists a <code>task_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="task_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.task_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_task_template"
    values={[
        { label: 'get_task_template', value: 'get_task_template' },
        { label: 'list_task_templates', value: 'list_task_templates' }
    ]}
>
<TabItem value="get_task_template">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="Constraints" /></td>
    <td><code>object</code></td>
    <td>Describes constraints that apply to the template fields.</td>
</tr>
<tr>
    <td><CopyableCode code="ContactFlowId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the flow that runs by default when a task is created by referencing this template.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the task template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Defaults" /></td>
    <td><code>object</code></td>
    <td>Describes default values for fields on a template.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the task template.</td>
</tr>
<tr>
    <td><CopyableCode code="Fields" /></td>
    <td><code>array</code></td>
    <td>Fields that are part of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the task template.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the task template was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the task template.</td>
</tr>
<tr>
    <td><CopyableCode code="SelfAssignFlowId" /></td>
    <td><code>string</code></td>
    <td>The ContactFlowId for the flow that will be run if this template is used to create a self-assigned task.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Marks a template as ACTIVE or INACTIVE for a task to refer to it. Tasks can only be created from ACTIVE templates. If a template is marked as INACTIVE, then a task that refers to this template cannot be created. (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_task_templates">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the task template.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the task template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the task template.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the task template.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the task template was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the task template.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Marks a template as ACTIVE or INACTIVE for a task to refer to it. Tasks can only be created from ACTIVE templates. If a template is marked as INACTIVE, then a task that refers to this template cannot be created. (ACTIVE, INACTIVE)</td>
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
    <td><a href="#get_task_template"><CopyableCode code="get_task_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-task_template_id"><code>task_template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-snapshotVersion"><code>snapshotVersion</code></a></td>
    <td>Gets details about a specific task template in the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#list_task_templates"><CopyableCode code="list_task_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>Lists task templates for the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#create_task_template"><CopyableCode code="create_task_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new task template in the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#update_task_template"><CopyableCode code="update_task_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-task_template_id"><code>task_template_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates details about a specific task template in the specified Amazon Connect instance. This operation does not support partial updates. Instead it does a full update of template content.</td>
</tr>
<tr>
    <td><a href="#delete_task_template"><CopyableCode code="delete_task_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-task_template_id"><code>task_template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the task template.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-task_template_id">
    <td><CopyableCode code="task_template_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the task template.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. It is not expected that you set this.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the task template.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. It is not expected that you set this because the value returned in the previous response is always null.</td>
</tr>
<tr id="parameter-snapshotVersion">
    <td><CopyableCode code="snapshotVersion" /></td>
    <td><code>string</code></td>
    <td>The system generated version of a task template that is associated with a task, when the task is created.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Marks a template as ACTIVE or INACTIVE for a task to refer to it. Tasks can only be created from ACTIVE templates. If a template is marked as INACTIVE, then a task that refers to this template cannot be created.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_task_template"
    values={[
        { label: 'get_task_template', value: 'get_task_template' },
        { label: 'list_task_templates', value: 'list_task_templates' }
    ]}
>
<TabItem value="get_task_template">

Gets details about a specific task template in the specified Amazon Connect instance.

```sql
SELECT
Arn,
Constraints,
ContactFlowId,
CreatedTime,
Defaults,
Description,
Fields,
Id,
InstanceId,
LastModifiedTime,
Name,
SelfAssignFlowId,
Status,
Tags
FROM aws.connect.task_templates
WHERE instance_id = '{{ instance_id }}' -- required
AND task_template_id = '{{ task_template_id }}' -- required
AND region = '{{ region }}' -- required
AND snapshotVersion = '{{ snapshotVersion }}'
;
```
</TabItem>
<TabItem value="list_task_templates">

Lists task templates for the specified Amazon Connect instance.

```sql
SELECT
Arn,
CreatedTime,
Description,
Id,
LastModifiedTime,
Name,
Status
FROM aws.connect.task_templates
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND status = '{{ status }}'
AND name = '{{ name }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_task_template"
    values={[
        { label: 'create_task_template', value: 'create_task_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_task_template">

Creates a new task template in the specified Amazon Connect instance.

```sql
INSERT INTO aws.connect.task_templates (
Name,
Description,
ContactFlowId,
SelfAssignFlowId,
Constraints,
Defaults,
Status,
Fields,
ClientToken,
instance_id,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ ContactFlowId }}',
'{{ SelfAssignFlowId }}',
'{{ Constraints }}',
'{{ Defaults }}',
'{{ Status }}',
'{{ Fields }}',
'{{ ClientToken }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
Arn,
Id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: task_templates
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the task_templates resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the task_templates resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: ContactFlowId
      value: "{{ ContactFlowId }}"
    - name: SelfAssignFlowId
      value: "{{ SelfAssignFlowId }}"
    - name: Constraints
      description: |
        Describes constraints that apply to the template fields.
      value:
        RequiredFields:
          - Id:
              Name: "{{ Name }}"
        ReadOnlyFields:
          - Id:
              Name: "{{ Name }}"
        InvisibleFields:
          - Id:
              Name: "{{ Name }}"
    - name: Defaults
      description: |
        Describes default values for fields on a template.
      value:
        DefaultFieldValues:
          - Id:
              Name: "{{ Name }}"
            DefaultValue: "{{ DefaultValue }}"
    - name: Status
      value: "{{ Status }}"
      valid_values: ['ACTIVE', 'INACTIVE']
    - name: Fields
      value:
        - Id:
            Name: "{{ Name }}"
          Description: "{{ Description }}"
          Type: "{{ Type }}"
          SingleSelectOptions: "{{ SingleSelectOptions }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_task_template"
    values={[
        { label: 'update_task_template', value: 'update_task_template' }
    ]}
>
<TabItem value="update_task_template">

Updates details about a specific task template in the specified Amazon Connect instance. This operation does not support partial updates. Instead it does a full update of template content.

```sql
UPDATE aws.connect.task_templates
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
ContactFlowId = '{{ ContactFlowId }}',
SelfAssignFlowId = '{{ SelfAssignFlowId }}',
Constraints = '{{ Constraints }}',
Defaults = '{{ Defaults }}',
Status = '{{ Status }}',
Fields = '{{ Fields }}'
WHERE 
task_template_id = '{{ task_template_id }}' --required
AND instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
RETURNING
Arn,
Constraints,
ContactFlowId,
CreatedTime,
Defaults,
Description,
Fields,
Id,
InstanceId,
LastModifiedTime,
Name,
SelfAssignFlowId,
Status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_task_template"
    values={[
        { label: 'delete_task_template', value: 'delete_task_template' }
    ]}
>
<TabItem value="delete_task_template">

Deletes the task template.

```sql
DELETE FROM aws.connect.task_templates
WHERE instance_id = '{{ instance_id }}' --required
AND task_template_id = '{{ task_template_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
