--- 
title: workflow_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_definitions
  - nova_act
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

Creates, updates, deletes, gets or lists a <code>workflow_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.nova_act.workflow_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflow_definition"
    values={[
        { label: 'get_workflow_definition', value: 'get_workflow_definition' },
        { label: 'list_workflow_definitions', value: 'list_workflow_definitions' }
    ]}
>
<TabItem value="get_workflow_definition">

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
    <td>The name of the workflow definition. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workflow definition. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):nova-act:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:workflow-definition/&#91;a-zA-Z0-9_-&#93;&#123;1,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workflow definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the workflow definition.</td>
</tr>
<tr>
    <td><CopyableCode code="exportConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration settings for exporting workflow execution data and logs to Amazon Simple Storage Service (Amazon S3).</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the workflow definition. (ACTIVE, DELETING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workflow_definitions">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workflow definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the workflow definition. (ACTIVE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="workflowDefinitionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workflow definition. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):nova-act:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:workflow-definition/&#91;a-zA-Z0-9_-&#93;&#123;1,40&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflowDefinitionName" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow definition. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,40&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_workflow_definition"><CopyableCode code="get_workflow_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workflow_definition_name"><code>workflow_definition_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details and configuration of a specific workflow definition.</td>
</tr>
<tr>
    <td><a href="#list_workflow_definitions"><CopyableCode code="list_workflow_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all workflow definitions in your account with optional filtering and pagination.</td>
</tr>
<tr>
    <td><a href="#create_workflow_definition"><CopyableCode code="create_workflow_definition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new workflow definition template that can be used to execute multiple workflow runs.</td>
</tr>
<tr>
    <td><a href="#delete_workflow_definition"><CopyableCode code="delete_workflow_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workflow_definition_name"><code>workflow_definition_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a workflow definition and all associated resources. This operation cannot be undone.</td>
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
<tr id="parameter-workflow_definition_name">
    <td><CopyableCode code="workflow_definition_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow definition to delete.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of workflow definitions to return in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for retrieving the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_workflow_definition"
    values={[
        { label: 'get_workflow_definition', value: 'get_workflow_definition' },
        { label: 'list_workflow_definitions', value: 'list_workflow_definitions' }
    ]}
>
<TabItem value="get_workflow_definition">

Retrieves the details and configuration of a specific workflow definition.

```sql
SELECT
name,
arn,
createdAt,
description,
exportConfig,
status
FROM aws.nova_act.workflow_definitions
WHERE workflow_definition_name = '{{ workflow_definition_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workflow_definitions">

Lists all workflow definitions in your account with optional filtering and pagination.

```sql
SELECT
createdAt,
status,
workflowDefinitionArn,
workflowDefinitionName
FROM aws.nova_act.workflow_definitions
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workflow_definition"
    values={[
        { label: 'create_workflow_definition', value: 'create_workflow_definition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workflow_definition">

Creates a new workflow definition template that can be used to execute multiple workflow runs.

```sql
INSERT INTO aws.nova_act.workflow_definitions (
name,
description,
exportConfig,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ exportConfig }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workflow_definitions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workflow_definitions resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: exportConfig
      description: |
        Configuration settings for exporting workflow execution data and logs to Amazon Simple Storage Service (Amazon S3).
      value:
        s3BucketName: "{{ s3BucketName }}"
        s3KeyPrefix: "{{ s3KeyPrefix }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workflow_definition"
    values={[
        { label: 'delete_workflow_definition', value: 'delete_workflow_definition' }
    ]}
>
<TabItem value="delete_workflow_definition">

Deletes a workflow definition and all associated resources. This operation cannot be undone.

```sql
DELETE FROM aws.nova_act.workflow_definitions
WHERE workflow_definition_name = '{{ workflow_definition_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
