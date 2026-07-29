--- 
title: matching_workflows
hide_title: false
hide_table_of_contents: false
keywords:
  - matching_workflows
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

Creates, updates, deletes, gets or lists a <code>matching_workflows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="matching_workflows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.entityresolution.matching_workflows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_matching_workflow"
    values={[
        { label: 'get_matching_workflow', value: 'get_matching_workflow' },
        { label: 'list_matching_workflows', value: 'list_matching_workflows' }
    ]}
>
<TabItem value="get_matching_workflow">

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
    <td><CopyableCode code="incremental_run_config" /></td>
    <td><code>object</code></td>
    <td>Optional. An object that defines the incremental run type. This object contains only the incrementalRunType field, which appears as "Automatic" in the console. For workflows where resolutionType is ML_MATCHING or PROVIDER, incremental processing is not supported.</td>
</tr>
<tr>
    <td><CopyableCode code="input_source_config" /></td>
    <td><code>array</code></td>
    <td>A list of InputSource objects, which have the fields InputSourceARN and SchemaName.</td>
</tr>
<tr>
    <td><CopyableCode code="output_source_config" /></td>
    <td><code>array</code></td>
    <td>A list of OutputSource objects, each of which contains fields outputS3Path, applyNormalization, KMSArn, and output.</td>
</tr>
<tr>
    <td><CopyableCode code="resolution_techniques" /></td>
    <td><code>object</code></td>
    <td>An object which defines the resolutionType and the ruleBasedProperties.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access Amazon Web Services resources on your behalf.</td>
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
    <td>The ARN (Amazon Resource Name) that Entity Resolution generated for the MatchingWorkflow. (pattern: &lt;code&gt;arn:(aws|aws-us-gov|aws-cn):entityresolution:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;1,10&#125;-&#91;0-9&#93;:&#91;0-9&#93;&#123;12&#125;:(matchingworkflow/&#91;a-zA-Z_0-9-&#93;&#123;1,255&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9-&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_matching_workflows">

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
    <td><CopyableCode code="resolution_type" /></td>
    <td><code>string</code></td>
    <td>The method that has been specified for data matching, either using matching provided by Entity Resolution or through a provider service. (RULE_MATCHING, ML_MATCHING, PROVIDER)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the workflow was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) that Entity Resolution generated for the MatchingWorkflow. (pattern: &lt;code&gt;arn:(aws|aws-us-gov|aws-cn):entityresolution:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;1,10&#125;-&#91;0-9&#93;:&#91;0-9&#93;&#123;12&#125;:(matchingworkflow/&#91;a-zA-Z_0-9-&#93;&#123;1,255&#125;)&lt;/code&gt;)</td>
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
    <td><a href="#get_matching_workflow"><CopyableCode code="get_matching_workflow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workflow_name"><code>workflow_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the MatchingWorkflow with a given name, if it exists.</td>
</tr>
<tr>
    <td><a href="#list_matching_workflows"><CopyableCode code="list_matching_workflows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of all the MatchingWorkflows that have been created for an Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_matching_workflow"><CopyableCode code="create_matching_workflow" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-workflowName"><code>workflowName</code></a>, <a href="#parameter-inputSourceConfig"><code>inputSourceConfig</code></a>, <a href="#parameter-outputSourceConfig"><code>outputSourceConfig</code></a>, <a href="#parameter-resolutionTechniques"><code>resolutionTechniques</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates a matching workflow that defines the configuration for a data processing job. The workflow name must be unique. To modify an existing workflow, use UpdateMatchingWorkflow. For workflows where resolutionType is ML_MATCHING or PROVIDER, incremental processing is not supported.</td>
</tr>
<tr>
    <td><a href="#update_matching_workflow"><CopyableCode code="update_matching_workflow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workflow_name"><code>workflow_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-inputSourceConfig"><code>inputSourceConfig</code></a>, <a href="#parameter-outputSourceConfig"><code>outputSourceConfig</code></a>, <a href="#parameter-resolutionTechniques"><code>resolutionTechniques</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Updates an existing matching workflow. The workflow must already exist for this operation to succeed. For workflows where resolutionType is ML_MATCHING or PROVIDER, incremental processing is not supported.</td>
</tr>
<tr>
    <td><a href="#delete_matching_workflow"><CopyableCode code="delete_matching_workflow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workflow_name"><code>workflow_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the MatchingWorkflow with a given name. This operation will succeed even if a workflow with the given name does not exist.</td>
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
    <td>The name of the workflow to be retrieved.</td>
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
    defaultValue="get_matching_workflow"
    values={[
        { label: 'get_matching_workflow', value: 'get_matching_workflow' },
        { label: 'list_matching_workflows', value: 'list_matching_workflows' }
    ]}
>
<TabItem value="get_matching_workflow">

Returns the MatchingWorkflow with a given name, if it exists.

```sql
SELECT
created_at,
description,
incremental_run_config,
input_source_config,
output_source_config,
resolution_techniques,
role_arn,
tags,
updated_at,
workflow_arn,
workflow_name
FROM aws.entityresolution.matching_workflows
WHERE workflow_name = '{{ workflow_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_matching_workflows">

Returns a list of all the MatchingWorkflows that have been created for an Amazon Web Services account.

```sql
SELECT
created_at,
resolution_type,
updated_at,
workflow_arn,
workflow_name
FROM aws.entityresolution.matching_workflows
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_matching_workflow"
    values={[
        { label: 'create_matching_workflow', value: 'create_matching_workflow' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_matching_workflow">

Creates a matching workflow that defines the configuration for a data processing job. The workflow name must be unique. To modify an existing workflow, use UpdateMatchingWorkflow. For workflows where resolutionType is ML_MATCHING or PROVIDER, incremental processing is not supported.

```sql
INSERT INTO aws.entityresolution.matching_workflows (
workflowName,
description,
inputSourceConfig,
outputSourceConfig,
resolutionTechniques,
incrementalRunConfig,
roleArn,
tags,
region
)
SELECT 
'{{ workflowName }}' /* required */,
'{{ description }}',
'{{ inputSourceConfig }}' /* required */,
'{{ outputSourceConfig }}' /* required */,
'{{ resolutionTechniques }}' /* required */,
'{{ incrementalRunConfig }}',
'{{ roleArn }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
description,
incremental_run_config,
input_source_config,
output_source_config,
resolution_techniques,
role_arn,
workflow_arn,
workflow_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: matching_workflows
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the matching_workflows resource.
    - name: workflowName
      value: "{{ workflowName }}"
    - name: description
      value: "{{ description }}"
    - name: inputSourceConfig
      value:
        - inputSourceARN: "{{ inputSourceARN }}"
          schemaName: "{{ schemaName }}"
          applyNormalization: {{ applyNormalization }}
    - name: outputSourceConfig
      value:
        - KMSArn: "{{ KMSArn }}"
          outputS3Path: "{{ outputS3Path }}"
          output: "{{ output }}"
          applyNormalization: {{ applyNormalization }}
          customerProfilesIntegrationConfig:
            domainArn: "{{ domainArn }}"
            objectTypeArn: "{{ objectTypeArn }}"
    - name: resolutionTechniques
      description: |
        An object which defines the resolutionType and the ruleBasedProperties.
      value:
        resolutionType: "{{ resolutionType }}"
        ruleBasedProperties:
          rules:
            - ruleName: "{{ ruleName }}"
              matchingKeys: "{{ matchingKeys }}"
          attributeMatchingModel: "{{ attributeMatchingModel }}"
          matchPurpose: "{{ matchPurpose }}"
        ruleConditionProperties:
          rules:
            - ruleName: "{{ ruleName }}"
              condition: "{{ condition }}"
          matchingConfig:
            enableTransitiveMatching: {{ enableTransitiveMatching }}
        providerProperties:
          providerServiceArn: "{{ providerServiceArn }}"
          providerConfiguration: "{{ providerConfiguration }}"
          intermediateSourceConfiguration:
            intermediateS3Path: "{{ intermediateS3Path }}"
    - name: incrementalRunConfig
      description: |
        Optional. An object that defines the incremental run type. This object contains only the incrementalRunType field, which appears as "Automatic" in the console. For workflows where resolutionType is ML_MATCHING or PROVIDER, incremental processing is not supported.
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
    defaultValue="update_matching_workflow"
    values={[
        { label: 'update_matching_workflow', value: 'update_matching_workflow' }
    ]}
>
<TabItem value="update_matching_workflow">

Updates an existing matching workflow. The workflow must already exist for this operation to succeed. For workflows where resolutionType is ML_MATCHING or PROVIDER, incremental processing is not supported.

```sql
UPDATE aws.entityresolution.matching_workflows
SET 
description = '{{ description }}',
inputSourceConfig = '{{ inputSourceConfig }}',
outputSourceConfig = '{{ outputSourceConfig }}',
resolutionTechniques = '{{ resolutionTechniques }}',
incrementalRunConfig = '{{ incrementalRunConfig }}',
roleArn = '{{ roleArn }}'
WHERE 
workflow_name = '{{ workflow_name }}' --required
AND region = '{{ region }}' --required
AND inputSourceConfig = '{{ inputSourceConfig }}' --required
AND outputSourceConfig = '{{ outputSourceConfig }}' --required
AND resolutionTechniques = '{{ resolutionTechniques }}' --required
AND roleArn = '{{ roleArn }}' --required
RETURNING
description,
incremental_run_config,
input_source_config,
output_source_config,
resolution_techniques,
role_arn,
workflow_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_matching_workflow"
    values={[
        { label: 'delete_matching_workflow', value: 'delete_matching_workflow' }
    ]}
>
<TabItem value="delete_matching_workflow">

Deletes the MatchingWorkflow with a given name. This operation will succeed even if a workflow with the given name does not exist.

```sql
DELETE FROM aws.entityresolution.matching_workflows
WHERE workflow_name = '{{ workflow_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
