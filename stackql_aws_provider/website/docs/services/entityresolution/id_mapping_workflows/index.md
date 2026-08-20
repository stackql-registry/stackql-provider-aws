--- 
title: id_mapping_workflows
hide_title: false
hide_table_of_contents: false
keywords:
  - id_mapping_workflows
  - entityresolution
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

Creates, updates, deletes, gets or lists an <code>id_mapping_workflows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="id_mapping_workflows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.entityresolution.id_mapping_workflows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_id_mapping_workflow"
    values={[
        { label: 'get_id_mapping_workflow', value: 'get_id_mapping_workflow' },
        { label: 'list_id_mapping_workflows', value: 'list_id_mapping_workflows' }
    ]}
>
<TabItem value="get_id_mapping_workflow">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the workflow was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="id_mapping_techniques" /></td>
    <td><code>object</code></td>
    <td>An object which defines the ID mapping technique and any additional configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="incremental_run_config" /></td>
    <td><code>object</code></td>
    <td>Incremental run configuration for an ID mapping workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="input_source_config" /></td>
    <td><code>array</code></td>
    <td>A list of InputSource objects, which have the fields InputSourceARN and SchemaName.</td>
</tr>
<tr>
    <td><CopyableCode code="output_source_config" /></td>
    <td><code>array</code></td>
    <td>A list of OutputSource objects, each of which contains fields outputS3Path and KMSArn.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access Amazon Web Services resources on your behalf. (pattern: &lt;code&gt;$|^arn:aws:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the workflow was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) that Entity Resolution generated for the IdMappingWorkflow . (pattern: &lt;code&gt;arn:(aws|aws-us-gov|aws-cn):entityresolution:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;1,10&#125;-&#91;0-9&#93;:&#91;0-9&#93;&#123;12&#125;:(idmappingworkflow/&#91;a-zA-Z_0-9-&#93;&#123;1,255&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9-&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_id_mapping_workflows">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the workflow was created.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the workflow was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) that Entity Resolution generated for the IdMappingWorkflow. (pattern: &lt;code&gt;arn:(aws|aws-us-gov|aws-cn):entityresolution:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;1,10&#125;-&#91;0-9&#93;:&#91;0-9&#93;&#123;12&#125;:(idmappingworkflow/&#91;a-zA-Z_0-9-&#93;&#123;1,255&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9-&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_id_mapping_workflow"><CopyableCode code="get_id_mapping_workflow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workflow_name"><code>workflow_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the IdMappingWorkflow with a given name, if it exists.</td>
</tr>
<tr>
    <td><a href="#list_id_mapping_workflows"><CopyableCode code="list_id_mapping_workflows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of all the IdMappingWorkflows that have been created for an Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_id_mapping_workflow"><CopyableCode code="create_id_mapping_workflow" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-workflowName"><code>workflowName</code></a>, <a href="#parameter-inputSourceConfig"><code>inputSourceConfig</code></a>, <a href="#parameter-idMappingTechniques"><code>idMappingTechniques</code></a></td>
    <td></td>
    <td>Creates an IdMappingWorkflow object which stores the configuration of the data processing job to be run. Each IdMappingWorkflow must have a unique workflow name. To modify an existing workflow, use the UpdateIdMappingWorkflow API. Incremental processing is not supported for ID mapping workflows.</td>
</tr>
<tr>
    <td><a href="#update_id_mapping_workflow"><CopyableCode code="update_id_mapping_workflow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workflow_name"><code>workflow_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-inputSourceConfig"><code>inputSourceConfig</code></a>, <a href="#parameter-idMappingTechniques"><code>idMappingTechniques</code></a></td>
    <td></td>
    <td>Updates an existing IdMappingWorkflow. This method is identical to CreateIdMappingWorkflow, except it uses an HTTP PUT request instead of a POST request, and the IdMappingWorkflow must already exist for the method to succeed. Incremental processing is not supported for ID mapping workflows.</td>
</tr>
<tr>
    <td><a href="#delete_id_mapping_workflow"><CopyableCode code="delete_id_mapping_workflow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workflow_name"><code>workflow_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the IdMappingWorkflow with a given name. This operation returns a ResourceNotFoundException if a workflow with the given name does not exist.</td>
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
<tr id="parameter-workflow_name">
    <td><CopyableCode code="workflow_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow to be deleted.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of objects returned per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the previous API call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_id_mapping_workflow"
    values={[
        { label: 'get_id_mapping_workflow', value: 'get_id_mapping_workflow' },
        { label: 'list_id_mapping_workflows', value: 'list_id_mapping_workflows' }
    ]}
>
<TabItem value="get_id_mapping_workflow">

Returns the IdMappingWorkflow with a given name, if it exists.

```sql
SELECT
created_at,
description,
id_mapping_techniques,
incremental_run_config,
input_source_config,
output_source_config,
role_arn,
tags,
updated_at,
workflow_arn,
workflow_name
FROM aws.entityresolution.id_mapping_workflows
WHERE workflow_name = '{{ workflow_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_id_mapping_workflows">

Returns a list of all the IdMappingWorkflows that have been created for an Amazon Web Services account.

```sql
SELECT
created_at,
updated_at,
workflow_arn,
workflow_name
FROM aws.entityresolution.id_mapping_workflows
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_id_mapping_workflow"
    values={[
        { label: 'create_id_mapping_workflow', value: 'create_id_mapping_workflow' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_id_mapping_workflow">

Creates an IdMappingWorkflow object which stores the configuration of the data processing job to be run. Each IdMappingWorkflow must have a unique workflow name. To modify an existing workflow, use the UpdateIdMappingWorkflow API. Incremental processing is not supported for ID mapping workflows.

```sql
INSERT INTO aws.entityresolution.id_mapping_workflows (
workflowName,
description,
inputSourceConfig,
outputSourceConfig,
idMappingTechniques,
incrementalRunConfig,
roleArn,
tags,
region
)
SELECT 
'{{ workflowName }}' /* required */,
'{{ description }}',
'{{ inputSourceConfig }}' /* required */,
'{{ outputSourceConfig }}',
'{{ idMappingTechniques }}' /* required */,
'{{ incrementalRunConfig }}',
'{{ roleArn }}',
'{{ tags }}',
'{{ region }}'
RETURNING
description,
id_mapping_techniques,
incremental_run_config,
input_source_config,
output_source_config,
role_arn,
workflow_arn,
workflow_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: id_mapping_workflows
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the id_mapping_workflows resource.
    - name: workflowName
      value: "{{ workflowName }}"
    - name: description
      value: "{{ description }}"
    - name: inputSourceConfig
      value:
        - inputSourceARN: "{{ inputSourceARN }}"
          schemaName: "{{ schemaName }}"
          type_: "{{ type_ }}"
    - name: outputSourceConfig
      value:
        - KMSArn: "{{ KMSArn }}"
          outputS3Path: "{{ outputS3Path }}"
    - name: idMappingTechniques
      description: |
        An object which defines the ID mapping technique and any additional configurations.
      value:
        idMappingType: "{{ idMappingType }}"
        ruleBasedProperties:
          rules:
            - ruleName: "{{ ruleName }}"
              matchingKeys: "{{ matchingKeys }}"
          ruleDefinitionType: "{{ ruleDefinitionType }}"
          attributeMatchingModel: "{{ attributeMatchingModel }}"
          recordMatchingModel: "{{ recordMatchingModel }}"
        providerProperties:
          providerServiceArn: "{{ providerServiceArn }}"
          providerConfiguration: "{{ providerConfiguration }}"
          intermediateSourceConfiguration:
            intermediateS3Path: "{{ intermediateS3Path }}"
    - name: incrementalRunConfig
      description: |
        Incremental run configuration for an ID mapping workflow.
      value:
        incrementalRunType: "{{ incrementalRunType }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_id_mapping_workflow"
    values={[
        { label: 'update_id_mapping_workflow', value: 'update_id_mapping_workflow' }
    ]}
>
<TabItem value="update_id_mapping_workflow">

Updates an existing IdMappingWorkflow. This method is identical to CreateIdMappingWorkflow, except it uses an HTTP PUT request instead of a POST request, and the IdMappingWorkflow must already exist for the method to succeed. Incremental processing is not supported for ID mapping workflows.

```sql
UPDATE aws.entityresolution.id_mapping_workflows
SET 
description = '{{ description }}',
inputSourceConfig = '{{ inputSourceConfig }}',
outputSourceConfig = '{{ outputSourceConfig }}',
idMappingTechniques = '{{ idMappingTechniques }}',
incrementalRunConfig = '{{ incrementalRunConfig }}',
roleArn = '{{ roleArn }}'
WHERE 
workflow_name = '{{ workflow_name }}' --required
AND region = '{{ region }}' --required
AND inputSourceConfig = '{{ inputSourceConfig }}' --required
AND idMappingTechniques = '{{ idMappingTechniques }}' --required
RETURNING
description,
id_mapping_techniques,
incremental_run_config,
input_source_config,
output_source_config,
role_arn,
workflow_arn,
workflow_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_id_mapping_workflow"
    values={[
        { label: 'delete_id_mapping_workflow', value: 'delete_id_mapping_workflow' }
    ]}
>
<TabItem value="delete_id_mapping_workflow">

Deletes the IdMappingWorkflow with a given name. This operation returns a ResourceNotFoundException if a workflow with the given name does not exist.

```sql
DELETE FROM aws.entityresolution.id_mapping_workflows
WHERE workflow_name = '{{ workflow_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
