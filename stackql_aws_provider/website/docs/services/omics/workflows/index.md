--- 
title: workflows
hide_title: false
hide_table_of_contents: false
keywords:
  - workflows
  - omics
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

Creates, updates, deletes, gets or lists a <code>workflows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.workflows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflow"
    values={[
        { label: 'get_workflow', value: 'get_workflow' },
        { label: 'list_workflows', value: 'list_workflows' }
    ]}
>
<TabItem value="get_workflow">

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
    <td>The workflow's ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The workflow's name. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="accelerators" /></td>
    <td><code>string</code></td>
    <td>The computational accelerator specified to run the workflow. (GPU)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The workflow's ARN. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="container_registry_map" /></td>
    <td><code>object</code></td>
    <td>Use a container registry map to specify mappings between the ECR private repository and one or more upstream registries. For more information, see Container images in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the workflow was created.</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>string</code></td>
    <td>The workflow's definition. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="definition_repository_details" /></td>
    <td><code>object</code></td>
    <td>Details about the source code repository that hosts the workflow definition files.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The workflow's description. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="digest" /></td>
    <td><code>string</code></td>
    <td>The workflow's digest.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The workflow's engine. (WDL, NEXTFLOW, CWL, WDL_LENIENT)</td>
</tr>
<tr>
    <td><CopyableCode code="main" /></td>
    <td><code>string</code></td>
    <td>The path of the main definition file for the workflow. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Gets metadata for the workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="parameter_template" /></td>
    <td><code>object</code></td>
    <td>The workflow's parameter template.</td>
</tr>
<tr>
    <td><CopyableCode code="readme" /></td>
    <td><code>string</code></td>
    <td>The README content for the workflow, providing documentation and usage information. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="readme_path" /></td>
    <td><code>string</code></td>
    <td>The path to the workflow README markdown file within the repository. This file provides documentation and usage information for the workflow. If not specified, the README.md file from the root directory of the repository will be used. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The workflow's status. (CREATING, ACTIVE, UPDATING, DELETED, FAILED, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The workflow's status message. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="storage_capacity" /></td>
    <td><code>integer</code></td>
    <td>The default static storage capacity (in gibibytes) for runs that use this workflow or workflow version.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_type" /></td>
    <td><code>string</code></td>
    <td>The default storage type for runs using this workflow. (STATIC, DYNAMIC)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The workflow's tags.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The workflow's type. (PRIVATE, READY2RUN)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>The universally unique identifier (UUID) value for this workflow. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workflows">

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
    <td>The workflow's ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The workflow's name. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The workflow's ARN. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the workflow was created.</td>
</tr>
<tr>
    <td><CopyableCode code="digest" /></td>
    <td><code>string</code></td>
    <td>The workflow's digest.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Any metadata available for workflow. The information listed may vary depending on the workflow, and there may also be no metadata to return.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The workflow's status. (CREATING, ACTIVE, UPDATING, DELETED, FAILED, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The workflow's type. (PRIVATE, READY2RUN)</td>
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
    <td><a href="#get_workflow"><CopyableCode code="get_workflow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-export"><code>export</code></a>, <a href="#parameter-workflowOwnerId"><code>workflowOwnerId</code></a></td>
    <td>Gets all information about a workflow using its ID. If a workflow is shared with you, you cannot export the workflow. For more information about your workflow status, see Verify the workflow status in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#list_workflows"><CopyableCode code="list_workflows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-startingToken"><code>startingToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of existing workflows. You can filter for specific workflows by their name and type. Using the type parameter, specify PRIVATE to retrieve a list of private workflows or specify READY2RUN for a list of all Ready2Run workflows. If you do not specify the type of workflow, this operation returns a list of existing workflows.</td>
</tr>
<tr>
    <td><a href="#create_workflow"><CopyableCode code="create_workflow" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td></td>
    <td>Creates a private workflow. Before you create a private workflow, you must create and configure these required resources: Workflow definition file: A workflow definition file written in WDL, Nextflow, or CWL. The workflow definition specifies the inputs and outputs for runs that use the workflow. It also includes specifications for the runs and run tasks for your workflow, including compute and memory requirements. The workflow definition file must be in .zip format. For more information, see Workflow definition files in Amazon Web Services HealthOmics. You can use Amazon Q CLI to build and validate your workflow definition files in WDL, Nextflow, and CWL. For more information, see Example prompts for Amazon Q CLI and the Amazon Web Services HealthOmics Agentic generative AI tutorial on GitHub. (Optional) Parameter template file: A parameter template file written in JSON. Create the file to define the run parameters, or Amazon Web Services HealthOmics generates the parameter template for you. For more information, see Parameter template files for HealthOmics workflows. ECR container images: Create container images for the workflow in a private ECR repository, or synchronize images from a supported upstream registry with your Amazon ECR private repository. (Optional) Sentieon licenses: Request a Sentieon license to use the Sentieon software in private workflows. For more information, see Creating or updating a private workflow in Amazon Web Services HealthOmics in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#update_workflow"><CopyableCode code="update_workflow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates information about a workflow. You can update the following workflow information: Name Description Default storage type Default storage capacity (with workflow ID) This operation returns a response with no body if the operation is successful. You can check the workflow updates by calling the GetWorkflow API operation. For more information, see Update a private workflow in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_workflow"><CopyableCode code="delete_workflow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a workflow by specifying its ID. This operation returns a response with no body if the deletion is successful. To verify that the workflow is deleted: Use ListWorkflows to confirm the workflow no longer appears in the list. Use GetWorkflow to verify the workflow cannot be found.</td>
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
    <td>The workflow's ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-export">
    <td><CopyableCode code="export" /></td>
    <td><code>array</code></td>
    <td>The export format for the workflow.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of workflows to return in one page of results.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filter the list by workflow name.</td>
</tr>
<tr id="parameter-startingToken">
    <td><CopyableCode code="startingToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Filter the list by workflow type.</td>
</tr>
<tr id="parameter-workflowOwnerId">
    <td><CopyableCode code="workflowOwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the workflow owner.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_workflow"
    values={[
        { label: 'get_workflow', value: 'get_workflow' },
        { label: 'list_workflows', value: 'list_workflows' }
    ]}
>
<TabItem value="get_workflow">

Gets all information about a workflow using its ID. If a workflow is shared with you, you cannot export the workflow. For more information about your workflow status, see Verify the workflow status in the Amazon Web Services HealthOmics User Guide.

```sql
SELECT
id,
name,
accelerators,
arn,
container_registry_map,
creation_time,
definition,
definition_repository_details,
description,
digest,
engine,
main,
metadata,
parameter_template,
readme,
readme_path,
status,
status_message,
storage_capacity,
storage_type,
tags,
type_,
uuid
FROM aws.omics.workflows
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND type = '{{ type }}'
AND export = '{{ export }}'
AND workflowOwnerId = '{{ workflowOwnerId }}'
;
```
</TabItem>
<TabItem value="list_workflows">

Retrieves a list of existing workflows. You can filter for specific workflows by their name and type. Using the type parameter, specify PRIVATE to retrieve a list of private workflows or specify READY2RUN for a list of all Ready2Run workflows. If you do not specify the type of workflow, this operation returns a list of existing workflows.

```sql
SELECT
id,
name,
arn,
creation_time,
digest,
metadata,
status,
type_
FROM aws.omics.workflows
WHERE region = '{{ region }}' -- required
AND type = '{{ type }}'
AND name = '{{ name }}'
AND startingToken = '{{ startingToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workflow"
    values={[
        { label: 'create_workflow', value: 'create_workflow' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workflow">

Creates a private workflow. Before you create a private workflow, you must create and configure these required resources: Workflow definition file: A workflow definition file written in WDL, Nextflow, or CWL. The workflow definition specifies the inputs and outputs for runs that use the workflow. It also includes specifications for the runs and run tasks for your workflow, including compute and memory requirements. The workflow definition file must be in .zip format. For more information, see Workflow definition files in Amazon Web Services HealthOmics. You can use Amazon Q CLI to build and validate your workflow definition files in WDL, Nextflow, and CWL. For more information, see Example prompts for Amazon Q CLI and the Amazon Web Services HealthOmics Agentic generative AI tutorial on GitHub. (Optional) Parameter template file: A parameter template file written in JSON. Create the file to define the run parameters, or Amazon Web Services HealthOmics generates the parameter template for you. For more information, see Parameter template files for HealthOmics workflows. ECR container images: Create container images for the workflow in a private ECR repository, or synchronize images from a supported upstream registry with your Amazon ECR private repository. (Optional) Sentieon licenses: Request a Sentieon license to use the Sentieon software in private workflows. For more information, see Creating or updating a private workflow in Amazon Web Services HealthOmics in the Amazon Web Services HealthOmics User Guide.

```sql
INSERT INTO aws.omics.workflows (
name,
description,
engine,
definitionZip,
definitionUri,
main,
parameterTemplate,
storageCapacity,
tags,
requestId,
accelerators,
storageType,
containerRegistryMap,
containerRegistryMapUri,
readmeMarkdown,
parameterTemplatePath,
readmePath,
definitionRepository,
workflowBucketOwnerId,
readmeUri,
region
)
SELECT 
'{{ name }}',
'{{ description }}',
'{{ engine }}',
'{{ definitionZip }}',
'{{ definitionUri }}',
'{{ main }}',
'{{ parameterTemplate }}',
{{ storageCapacity }},
'{{ tags }}',
'{{ requestId }}' /* required */,
'{{ accelerators }}',
'{{ storageType }}',
'{{ containerRegistryMap }}',
'{{ containerRegistryMapUri }}',
'{{ readmeMarkdown }}',
'{{ parameterTemplatePath }}',
'{{ readmePath }}',
'{{ definitionRepository }}',
'{{ workflowBucketOwnerId }}',
'{{ readmeUri }}',
'{{ region }}'
RETURNING
id,
arn,
status,
tags,
uuid
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workflows
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workflows resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: engine
      value: "{{ engine }}"
      valid_values: ['WDL', 'NEXTFLOW', 'CWL', 'WDL_LENIENT']
    - name: definitionZip
      value: "{{ definitionZip }}"
    - name: definitionUri
      value: "{{ definitionUri }}"
    - name: main
      value: "{{ main }}"
    - name: parameterTemplate
      value: "{{ parameterTemplate }}"
    - name: storageCapacity
      value: {{ storageCapacity }}
    - name: tags
      value: "{{ tags }}"
    - name: requestId
      value: "{{ requestId }}"
    - name: accelerators
      value: "{{ accelerators }}"
      valid_values: ['GPU']
    - name: storageType
      value: "{{ storageType }}"
      valid_values: ['STATIC', 'DYNAMIC']
    - name: containerRegistryMap
      description: |
        Use a container registry map to specify mappings between the ECR private repository and one or more upstream registries. For more information, see Container images in the Amazon Web Services HealthOmics User Guide.
      value:
        registryMappings:
          - upstreamRegistryUrl: "{{ upstreamRegistryUrl }}"
            ecrRepositoryPrefix: "{{ ecrRepositoryPrefix }}"
            upstreamRepositoryPrefix: "{{ upstreamRepositoryPrefix }}"
            ecrAccountId: "{{ ecrAccountId }}"
        imageMappings:
          - sourceImage: "{{ sourceImage }}"
            destinationImage: "{{ destinationImage }}"
    - name: containerRegistryMapUri
      value: "{{ containerRegistryMapUri }}"
    - name: readmeMarkdown
      value: "{{ readmeMarkdown }}"
    - name: parameterTemplatePath
      value: "{{ parameterTemplatePath }}"
    - name: readmePath
      value: "{{ readmePath }}"
    - name: definitionRepository
      description: |
        Contains information about a source code repository that hosts the workflow definition files.
      value:
        connectionArn: "{{ connectionArn }}"
        fullRepositoryId: "{{ fullRepositoryId }}"
        sourceReference:
          type_: "{{ type_ }}"
          value: "{{ value }}"
        excludeFilePatterns:
          - "{{ excludeFilePatterns }}"
    - name: workflowBucketOwnerId
      value: "{{ workflowBucketOwnerId }}"
    - name: readmeUri
      value: "{{ readmeUri }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workflow"
    values={[
        { label: 'update_workflow', value: 'update_workflow' }
    ]}
>
<TabItem value="update_workflow">

Updates information about a workflow. You can update the following workflow information: Name Description Default storage type Default storage capacity (with workflow ID) This operation returns a response with no body if the operation is successful. You can check the workflow updates by calling the GetWorkflow API operation. For more information, see Update a private workflow in the Amazon Web Services HealthOmics User Guide.

```sql
UPDATE aws.omics.workflows
SET 
name = '{{ name }}',
description = '{{ description }}',
storageType = '{{ storageType }}',
storageCapacity = {{ storageCapacity }},
readmeMarkdown = '{{ readmeMarkdown }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workflow"
    values={[
        { label: 'delete_workflow', value: 'delete_workflow' }
    ]}
>
<TabItem value="delete_workflow">

Deletes a workflow by specifying its ID. This operation returns a response with no body if the deletion is successful. To verify that the workflow is deleted: Use ListWorkflows to confirm the workflow no longer appears in the list. Use GetWorkflow to verify the workflow cannot be found.

```sql
DELETE FROM aws.omics.workflows
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
