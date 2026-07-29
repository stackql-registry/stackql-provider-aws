--- 
title: workflow_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_versions
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

Creates, updates, deletes, gets or lists a <code>workflow_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.workflow_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflow_version"
    values={[
        { label: 'get_workflow_version', value: 'get_workflow_version' },
        { label: 'list_workflow_versions', value: 'list_workflow_versions' }
    ]}
>
<TabItem value="get_workflow_version">

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
    <td><CopyableCode code="accelerators" /></td>
    <td><code>string</code></td>
    <td>The accelerator for this workflow version. (GPU)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the workflow version. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="container_registry_map" /></td>
    <td><code>object</code></td>
    <td>Use a container registry map to specify mappings between the ECR private repository and one or more upstream registries. For more information, see Container images in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the workflow version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>string</code></td>
    <td>Definition of the workflow version. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="definition_repository_details" /></td>
    <td><code>object</code></td>
    <td>Details about the source code repository that hosts the workflow version definition files.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the workflow version. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="digest" /></td>
    <td><code>string</code></td>
    <td>The workflow version's digest.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The workflow engine for this workflow version. (WDL, NEXTFLOW, CWL, WDL_LENIENT)</td>
</tr>
<tr>
    <td><CopyableCode code="main" /></td>
    <td><code>string</code></td>
    <td>The path of the main definition file for the workflow. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata for the workflow version.</td>
</tr>
<tr>
    <td><CopyableCode code="parameter_template" /></td>
    <td><code>object</code></td>
    <td>The parameter template for the workflow version.</td>
</tr>
<tr>
    <td><CopyableCode code="readme" /></td>
    <td><code>string</code></td>
    <td>The README content for the workflow version, providing documentation and usage information specific to this version. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="readme_path" /></td>
    <td><code>string</code></td>
    <td>The path to the workflow version README markdown file within the repository. This file provides documentation and usage information for the workflow. If not specified, the README.md file from the root directory of the repository will be used. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The workflow version status (CREATING, ACTIVE, UPDATING, DELETED, FAILED, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The workflow version status message (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="storage_capacity" /></td>
    <td><code>integer</code></td>
    <td>The default run storage capacity for static storage.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_type" /></td>
    <td><code>string</code></td>
    <td>The default storage type for the run. (STATIC, DYNAMIC)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The workflow version tags</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The workflow version type (PRIVATE, READY2RUN)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>The universally unique identifier (UUID) value for this workflow version (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="version_name" /></td>
    <td><code>string</code></td>
    <td>The workflow version name. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9\-\._&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_bucket_owner_id" /></td>
    <td><code>string</code></td>
    <td>Amazon Web Services Id of the owner of the bucket. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_id" /></td>
    <td><code>string</code></td>
    <td>The workflow's ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workflow_versions">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the workflow version. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the workflow version.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the workflow version. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="digest" /></td>
    <td><code>string</code></td>
    <td>The digist of the workflow version.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata for the workflow version.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the workflow version. (CREATING, ACTIVE, UPDATING, DELETED, FAILED, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the workflow version. (PRIVATE, READY2RUN)</td>
</tr>
<tr>
    <td><CopyableCode code="version_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow version. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9\-\._&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_id" /></td>
    <td><code>string</code></td>
    <td>The workflow's ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_workflow_version"><CopyableCode code="get_workflow_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workflow_id"><code>workflow_id</code></a>, <a href="#parameter-version_name"><code>version_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-export"><code>export</code></a>, <a href="#parameter-workflowOwnerId"><code>workflowOwnerId</code></a></td>
    <td>Gets information about a workflow version. For more information, see Workflow versioning in Amazon Web Services HealthOmics in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#list_workflow_versions"><CopyableCode code="list_workflow_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workflow_id"><code>workflow_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-workflowOwnerId"><code>workflowOwnerId</code></a>, <a href="#parameter-startingToken"><code>startingToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the workflow versions for the specified workflow. For more information, see Workflow versioning in Amazon Web Services HealthOmics in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#create_workflow_version"><CopyableCode code="create_workflow_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workflow_id"><code>workflow_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-versionName"><code>versionName</code></a>, <a href="#parameter-requestId"><code>requestId</code></a></td>
    <td></td>
    <td>Creates a new workflow version for the workflow that you specify with the workflowId parameter. When you create a new version of a workflow, you need to specify the configuration for the new version. It doesn't inherit any configuration values from the workflow. Provide a version name that is unique for this workflow. You cannot change the name after HealthOmics creates the version. Don't include any personally identifiable information (PII) in the version name. Version names appear in the workflow version ARN. For more information, see Workflow versioning in Amazon Web Services HealthOmics in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#update_workflow_version"><CopyableCode code="update_workflow_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workflow_id"><code>workflow_id</code></a>, <a href="#parameter-version_name"><code>version_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates information about the workflow version. For more information, see Workflow versioning in Amazon Web Services HealthOmics in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_workflow_version"><CopyableCode code="delete_workflow_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workflow_id"><code>workflow_id</code></a>, <a href="#parameter-version_name"><code>version_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a workflow version. Deleting a workflow version doesn't affect any ongoing runs that are using the workflow version. For more information, see Workflow versioning in Amazon Web Services HealthOmics in the Amazon Web Services HealthOmics User Guide.</td>
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
<tr id="parameter-version_name">
    <td><CopyableCode code="version_name" /></td>
    <td><code>string</code></td>
    <td>The workflow version name.</td>
</tr>
<tr id="parameter-workflow_id">
    <td><CopyableCode code="workflow_id" /></td>
    <td><code>string</code></td>
    <td>The workflow's ID.</td>
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
<tr id="parameter-startingToken">
    <td><CopyableCode code="startingToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The workflow type.</td>
</tr>
<tr id="parameter-workflowOwnerId">
    <td><CopyableCode code="workflowOwnerId" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account ID of the workflow owner. The workflow owner ID can be retrieved using the GetShare API operation. If you are the workflow owner, you do not need to include this ID.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_workflow_version"
    values={[
        { label: 'get_workflow_version', value: 'get_workflow_version' },
        { label: 'list_workflow_versions', value: 'list_workflow_versions' }
    ]}
>
<TabItem value="get_workflow_version">

Gets information about a workflow version. For more information, see Workflow versioning in Amazon Web Services HealthOmics in the Amazon Web Services HealthOmics User Guide.

```sql
SELECT
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
uuid,
version_name,
workflow_bucket_owner_id,
workflow_id
FROM aws.omics.workflow_versions
WHERE workflow_id = '{{ workflow_id }}' -- required
AND version_name = '{{ version_name }}' -- required
AND region = '{{ region }}' -- required
AND type = '{{ type }}'
AND export = '{{ export }}'
AND workflowOwnerId = '{{ workflowOwnerId }}'
;
```
</TabItem>
<TabItem value="list_workflow_versions">

Lists the workflow versions for the specified workflow. For more information, see Workflow versioning in Amazon Web Services HealthOmics in the Amazon Web Services HealthOmics User Guide.

```sql
SELECT
arn,
creation_time,
description,
digest,
metadata,
status,
type_,
version_name,
workflow_id
FROM aws.omics.workflow_versions
WHERE workflow_id = '{{ workflow_id }}' -- required
AND region = '{{ region }}' -- required
AND type = '{{ type }}'
AND workflowOwnerId = '{{ workflowOwnerId }}'
AND startingToken = '{{ startingToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workflow_version"
    values={[
        { label: 'create_workflow_version', value: 'create_workflow_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workflow_version">

Creates a new workflow version for the workflow that you specify with the workflowId parameter. When you create a new version of a workflow, you need to specify the configuration for the new version. It doesn't inherit any configuration values from the workflow. Provide a version name that is unique for this workflow. You cannot change the name after HealthOmics creates the version. Don't include any personally identifiable information (PII) in the version name. Version names appear in the workflow version ARN. For more information, see Workflow versioning in Amazon Web Services HealthOmics in the Amazon Web Services HealthOmics User Guide.

```sql
INSERT INTO aws.omics.workflow_versions (
versionName,
definitionZip,
definitionUri,
accelerators,
description,
engine,
main,
parameterTemplate,
requestId,
storageType,
storageCapacity,
tags,
workflowBucketOwnerId,
containerRegistryMap,
containerRegistryMapUri,
readmeMarkdown,
parameterTemplatePath,
readmePath,
definitionRepository,
readmeUri,
workflow_id,
region
)
SELECT 
'{{ versionName }}' /* required */,
'{{ definitionZip }}',
'{{ definitionUri }}',
'{{ accelerators }}',
'{{ description }}',
'{{ engine }}',
'{{ main }}',
'{{ parameterTemplate }}',
'{{ requestId }}' /* required */,
'{{ storageType }}',
{{ storageCapacity }},
'{{ tags }}',
'{{ workflowBucketOwnerId }}',
'{{ containerRegistryMap }}',
'{{ containerRegistryMapUri }}',
'{{ readmeMarkdown }}',
'{{ parameterTemplatePath }}',
'{{ readmePath }}',
'{{ definitionRepository }}',
'{{ readmeUri }}',
'{{ workflow_id }}',
'{{ region }}'
RETURNING
arn,
status,
tags,
uuid,
version_name,
workflow_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workflow_versions
  props:
    - name: workflow_id
      value: "{{ workflow_id }}"
      description: Required parameter for the workflow_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workflow_versions resource.
    - name: versionName
      value: "{{ versionName }}"
    - name: definitionZip
      value: "{{ definitionZip }}"
    - name: definitionUri
      value: "{{ definitionUri }}"
    - name: accelerators
      value: "{{ accelerators }}"
      valid_values: ['GPU']
    - name: description
      value: "{{ description }}"
    - name: engine
      value: "{{ engine }}"
      valid_values: ['WDL', 'NEXTFLOW', 'CWL', 'WDL_LENIENT']
    - name: main
      value: "{{ main }}"
    - name: parameterTemplate
      value: "{{ parameterTemplate }}"
    - name: requestId
      value: "{{ requestId }}"
    - name: storageType
      value: "{{ storageType }}"
      valid_values: ['STATIC', 'DYNAMIC']
    - name: storageCapacity
      value: {{ storageCapacity }}
    - name: tags
      value: "{{ tags }}"
    - name: workflowBucketOwnerId
      value: "{{ workflowBucketOwnerId }}"
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
    - name: readmeUri
      value: "{{ readmeUri }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workflow_version"
    values={[
        { label: 'update_workflow_version', value: 'update_workflow_version' }
    ]}
>
<TabItem value="update_workflow_version">

Updates information about the workflow version. For more information, see Workflow versioning in Amazon Web Services HealthOmics in the Amazon Web Services HealthOmics User Guide.

```sql
UPDATE aws.omics.workflow_versions
SET 
description = '{{ description }}',
storageType = '{{ storageType }}',
storageCapacity = {{ storageCapacity }},
readmeMarkdown = '{{ readmeMarkdown }}'
WHERE 
workflow_id = '{{ workflow_id }}' --required
AND version_name = '{{ version_name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workflow_version"
    values={[
        { label: 'delete_workflow_version', value: 'delete_workflow_version' }
    ]}
>
<TabItem value="delete_workflow_version">

Deletes a workflow version. Deleting a workflow version doesn't affect any ongoing runs that are using the workflow version. For more information, see Workflow versioning in Amazon Web Services HealthOmics in the Amazon Web Services HealthOmics User Guide.

```sql
DELETE FROM aws.omics.workflow_versions
WHERE workflow_id = '{{ workflow_id }}' --required
AND version_name = '{{ version_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
