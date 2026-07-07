--- 
title: workflows
hide_title: false
hide_table_of_contents: false
keywords:
  - workflows
  - mwaa_serverless
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mwaa_serverless.workflows" /></td></tr>
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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workflow was created, in ISO 8601 date-time format.</td>
</tr>
<tr>
    <td><CopyableCode code="DefinitionS3Location" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 location of the workflow definition file.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the workflow. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>The encryption configuration for the workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>integer</code></td>
    <td>The version of the Amazon Managed Workflows for Apache Airflow Serverless engine that this workflow uses.</td>
</tr>
<tr>
    <td><CopyableCode code="LoggingConfiguration" /></td>
    <td><code>object</code></td>
    <td>The logging configuration for the workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="ModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workflow was last modified, in ISO 8601 date-time format.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&#91;a-zA-Z0-9\.\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkConfiguration" /></td>
    <td><code>object</code></td>
    <td>The network configuration for the workflow execution environment.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role used for workflow execution. (pattern: &lt;code&gt;arn:aws(?:-(?:cn|us-gov|iso|iso-b|iso-e|iso-f))?:iam::&#91;0-9&#93;&#123;12&#125;:role(/&#91;a-zA-Z0-9+=,.@_\-&#93;&#123;1,512&#125;)*?/&#91;a-zA-Z0-9+=,.@_\-&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleConfiguration" /></td>
    <td><code>object</code></td>
    <td>The schedule configuration for the workflow, including cron expressions for automated execution. Amazon Managed Workflows for Apache Airflow Serverless uses EventBridge Scheduler for cost-effective, timezone-aware scheduling. When a workflow includes schedule information in its YAML definition, the service automatically configures the appropriate triggers for automated execution. Only one version of a workflow can have an active schedule at any given time.</td>
</tr>
<tr>
    <td><CopyableCode code="TriggerMode" /></td>
    <td><code>string</code></td>
    <td>The trigger mode for the workflow execution. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkflowArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workflow. (pattern: &lt;code&gt;arn:aws(?:-(?:cn|us-gov|iso|iso-b|iso-e|iso-f))?:airflow-serverless:(&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;+-&#91;0-9&#93;&#123;1&#125;):(&#91;0-9&#93;&#123;12&#125;):workflow/(&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\.\-_&#93;&#123;0,254&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkflowDefinition" /></td>
    <td><code>string</code></td>
    <td>The workflow definition content. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkflowStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the workflow. (READY, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkflowVersion" /></td>
    <td><code>string</code></td>
    <td>The version identifier of the workflow. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workflow was created, in ISO 8601 date-time format.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the workflow. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workflow was last modified, in ISO 8601 date-time format.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&#91;a-zA-Z0-9\.\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TriggerMode" /></td>
    <td><code>string</code></td>
    <td>The trigger mode for the workflow execution. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkflowArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workflow. (pattern: &lt;code&gt;arn:aws(?:-(?:cn|us-gov|iso|iso-b|iso-e|iso-f))?:airflow-serverless:(&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;+-&#91;0-9&#93;&#123;1&#125;):(&#91;0-9&#93;&#123;12&#125;):workflow/(&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\.\-_&#93;&#123;0,254&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkflowStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the workflow. (READY, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkflowVersion" /></td>
    <td><code>string</code></td>
    <td>The version identifier of the workflow. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a workflow, including its configuration, status, and metadata.</td>
</tr>
<tr>
    <td><a href="#list_workflows"><CopyableCode code="list_workflows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all workflows in your account, with optional pagination support. This operation returns summary information for workflows, showing only the most recently created version of each workflow. Amazon Managed Workflows for Apache Airflow Serverless maintains workflow metadata in a highly available, distributed storage system that enables efficient querying and filtering. The service implements proper access controls to ensure you can only view workflows that you have permissions to access, supporting both individual and team-based workflow management scenarios.</td>
</tr>
<tr>
    <td><a href="#create_workflow"><CopyableCode code="create_workflow" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DefinitionS3Location"><code>DefinitionS3Location</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates a new workflow in Amazon Managed Workflows for Apache Airflow Serverless. This operation initializes a workflow with the specified configuration including the workflow definition, execution role, and optional settings for encryption, logging, and networking. You must provide the workflow definition as a YAML file stored in Amazon S3 that defines the DAG structure using supported Amazon Web Services operators. Amazon Managed Workflows for Apache Airflow Serverless automatically creates the first version of the workflow and sets up the necessary execution environment with multi-tenant isolation and security controls.</td>
</tr>
<tr>
    <td><a href="#update_workflow"><CopyableCode code="update_workflow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkflowArn"><code>WorkflowArn</code></a>, <a href="#parameter-DefinitionS3Location"><code>DefinitionS3Location</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Updates an existing workflow with new configuration settings. This operation allows you to modify the workflow definition, role, and other settings. When you update a workflow, Amazon Managed Workflows for Apache Airflow Serverless automatically creates a new version with the updated configuration and disables scheduling on all previous versions to ensure only one version is actively scheduled at a time. The update operation maintains workflow history while providing a clean transition to the new configuration.</td>
</tr>
<tr>
    <td><a href="#delete_workflow"><CopyableCode code="delete_workflow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a workflow and all its versions. This operation permanently removes the workflow and cannot be undone. Amazon Managed Workflows for Apache Airflow Serverless ensures that all associated resources are properly cleaned up, including stopping any running executions, removing scheduled triggers, and cleaning up execution history. The deletion process respects the multi-tenant isolation boundaries and ensures that no residual data or configurations remain that could affect other customers or workflows.</td>
</tr>
<tr>
    <td><a href="#start_workflow_run"><CopyableCode code="start_workflow_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkflowArn"><code>WorkflowArn</code></a></td>
    <td></td>
    <td>Starts a new execution of a workflow. This operation creates a workflow run that executes the tasks that are defined in the workflow. Amazon Managed Workflows for Apache Airflow Serverless schedules the workflow execution across its managed Airflow environment, automatically scaling ECS worker tasks based on the workload. The service handles task isolation, dependency resolution, and provides comprehensive monitoring and logging throughout the execution lifecycle.</td>
</tr>
<tr>
    <td><a href="#stop_workflow_run"><CopyableCode code="stop_workflow_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkflowArn"><code>WorkflowArn</code></a>, <a href="#parameter-RunId"><code>RunId</code></a></td>
    <td></td>
    <td>Stops a running workflow execution. This operation terminates all running tasks and prevents new tasks from starting. Amazon Managed Workflows for Apache Airflow Serverless gracefully shuts down the workflow execution by stopping task scheduling and terminating active ECS worker containers. The operation transitions the workflow run to a STOPPING state and then to STOPPED once all cleanup is complete. In-flight tasks may complete or be terminated depending on their current execution state.</td>
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
    defaultValue="get_workflow"
    values={[
        { label: 'get_workflow', value: 'get_workflow' },
        { label: 'list_workflows', value: 'list_workflows' }
    ]}
>
<TabItem value="get_workflow">

Retrieves detailed information about a workflow, including its configuration, status, and metadata.

```sql
SELECT
CreatedAt,
DefinitionS3Location,
Description,
EncryptionConfiguration,
EngineVersion,
LoggingConfiguration,
ModifiedAt,
Name,
NetworkConfiguration,
RoleArn,
ScheduleConfiguration,
TriggerMode,
WorkflowArn,
WorkflowDefinition,
WorkflowStatus,
WorkflowVersion
FROM aws.mwaa_serverless.workflows
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workflows">

Lists all workflows in your account, with optional pagination support. This operation returns summary information for workflows, showing only the most recently created version of each workflow. Amazon Managed Workflows for Apache Airflow Serverless maintains workflow metadata in a highly available, distributed storage system that enables efficient querying and filtering. The service implements proper access controls to ensure you can only view workflows that you have permissions to access, supporting both individual and team-based workflow management scenarios.

```sql
SELECT
CreatedAt,
Description,
ModifiedAt,
Name,
TriggerMode,
WorkflowArn,
WorkflowStatus,
WorkflowVersion
FROM aws.mwaa_serverless.workflows
WHERE region = '{{ region }}' -- required
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

Creates a new workflow in Amazon Managed Workflows for Apache Airflow Serverless. This operation initializes a workflow with the specified configuration including the workflow definition, execution role, and optional settings for encryption, logging, and networking. You must provide the workflow definition as a YAML file stored in Amazon S3 that defines the DAG structure using supported Amazon Web Services operators. Amazon Managed Workflows for Apache Airflow Serverless automatically creates the first version of the workflow and sets up the necessary execution environment with multi-tenant isolation and security controls.

```sql
INSERT INTO aws.mwaa_serverless.workflows (
Name,
ClientToken,
DefinitionS3Location,
RoleArn,
Description,
EncryptionConfiguration,
LoggingConfiguration,
EngineVersion,
NetworkConfiguration,
Tags,
TriggerMode,
region
)
SELECT 
'{{ Name }}',
'{{ ClientToken }}',
'{{ DefinitionS3Location }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ Description }}',
'{{ EncryptionConfiguration }}',
'{{ LoggingConfiguration }}',
{{ EngineVersion }},
'{{ NetworkConfiguration }}',
'{{ Tags }}',
'{{ TriggerMode }}',
'{{ region }}'
RETURNING
CreatedAt,
IsLatestVersion,
RevisionId,
Warnings,
WorkflowArn,
WorkflowStatus,
WorkflowVersion
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
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the workflow. You must use unique workflow names within your Amazon Web Services account. The service generates a unique identifier that is appended to ensure temporal uniqueness across the account lifecycle.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This token prevents duplicate workflow creation requests.
    - name: DefinitionS3Location
      description: |
        The Amazon S3 location where the workflow definition file is stored. This must point to a valid YAML file that defines the workflow structure using supported Amazon Web Services operators and tasks. Amazon Managed Workflows for Apache Airflow Serverless takes a snapshot of the definition at creation time, so subsequent changes to the Amazon S3 object will not affect the workflow unless you create a new version. In your YAML definition, include task dependencies, scheduling information, and operator configurations that are compatible with the Amazon Managed Workflows for Apache Airflow Serverless execution environment.
      value:
        Bucket: "{{ Bucket }}"
        ObjectKey: "{{ ObjectKey }}"
        VersionId: "{{ VersionId }}"
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM role that Amazon Managed Workflows for Apache Airflow Serverless assumes when executing the workflow. This role must have the necessary permissions to access the required Amazon Web Services services and resources that your workflow tasks will interact with. The role is used for task execution in the isolated, multi-tenant environment and should follow the principle of least privilege. Amazon Managed Workflows for Apache Airflow Serverless validates role access during workflow creation but runtime permission checks are performed by the target services.
    - name: Description
      value: "{{ Description }}"
      description: |
        An optional description of the workflow that you can use to provide additional context about the workflow's purpose and functionality.
    - name: EncryptionConfiguration
      description: |
        The configuration for encrypting workflow data at rest and in transit. Specifies the encryption type and optional KMS key for customer-managed encryption.
      value:
        Type: "{{ Type }}"
        KmsKeyId: "{{ KmsKeyId }}"
    - name: LoggingConfiguration
      description: |
        The configuration for workflow logging. Specifies the CloudWatch log group where workflow execution logs are stored. Amazon Managed Workflows for Apache Airflow Serverless automatically exports worker logs and task-level information to the specified log group in your account using remote logging functionality. This provides comprehensive observability for debugging and monitoring workflow execution across the distributed, serverless environment.
      value:
        LogGroupName: "{{ LogGroupName }}"
    - name: EngineVersion
      value: {{ EngineVersion }}
      description: |
        The version of the Amazon Managed Workflows for Apache Airflow Serverless engine that you want to use for this workflow. This determines the feature set, supported operators, and execution environment capabilities available to your workflow. Amazon Managed Workflows for Apache Airflow Serverless maintains backward compatibility across versions while introducing new features and improvements. Currently supports version 1 with plans for additional versions as the service evolves.
    - name: NetworkConfiguration
      description: |
        Network configuration for the workflow execution environment, including VPC security groups and subnets for secure network access. When specified, Amazon Managed Workflows for Apache Airflow Serverless deploys ECS worker tasks in your customer VPC to provide secure connectivity to your resources. If not specified, tasks run in the service's default worker VPC with network isolation from other customers. This configuration enables secure access to VPC-only resources like RDS databases or private endpoints.
      value:
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        SubnetIds:
          - "{{ SubnetIds }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A map of tags to assign to the workflow resource. Tags are key-value pairs that are used for resource organization and cost allocation.
    - name: TriggerMode
      value: "{{ TriggerMode }}"
      description: |
        The trigger mode for the workflow execution.
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

Updates an existing workflow with new configuration settings. This operation allows you to modify the workflow definition, role, and other settings. When you update a workflow, Amazon Managed Workflows for Apache Airflow Serverless automatically creates a new version with the updated configuration and disables scheduling on all previous versions to ensure only one version is actively scheduled at a time. The update operation maintains workflow history while providing a clean transition to the new configuration.

```sql
UPDATE aws.mwaa_serverless.workflows
SET 
WorkflowArn = '{{ WorkflowArn }}',
DefinitionS3Location = '{{ DefinitionS3Location }}',
RoleArn = '{{ RoleArn }}',
Description = '{{ Description }}',
LoggingConfiguration = '{{ LoggingConfiguration }}',
EngineVersion = {{ EngineVersion }},
NetworkConfiguration = '{{ NetworkConfiguration }}',
TriggerMode = '{{ TriggerMode }}'
WHERE 
region = '{{ region }}' --required
AND WorkflowArn = '{{ WorkflowArn }}' --required
AND DefinitionS3Location = '{{ DefinitionS3Location }}' --required
AND RoleArn = '{{ RoleArn }}' --required
RETURNING
ModifiedAt,
Warnings,
WorkflowArn,
WorkflowVersion;
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

Deletes a workflow and all its versions. This operation permanently removes the workflow and cannot be undone. Amazon Managed Workflows for Apache Airflow Serverless ensures that all associated resources are properly cleaned up, including stopping any running executions, removing scheduled triggers, and cleaning up execution history. The deletion process respects the multi-tenant isolation boundaries and ensures that no residual data or configurations remain that could affect other customers or workflows.

```sql
DELETE FROM aws.mwaa_serverless.workflows
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_workflow_run"
    values={[
        { label: 'start_workflow_run', value: 'start_workflow_run' },
        { label: 'stop_workflow_run', value: 'stop_workflow_run' }
    ]}
>
<TabItem value="start_workflow_run">

Starts a new execution of a workflow. This operation creates a workflow run that executes the tasks that are defined in the workflow. Amazon Managed Workflows for Apache Airflow Serverless schedules the workflow execution across its managed Airflow environment, automatically scaling ECS worker tasks based on the workload. The service handles task isolation, dependency resolution, and provides comprehensive monitoring and logging throughout the execution lifecycle.

```sql
EXEC aws.mwaa_serverless.workflows.start_workflow_run 
@region='{{ region }}' --required 
@@json=
'{
"WorkflowArn": "{{ WorkflowArn }}", 
"ClientToken": "{{ ClientToken }}", 
"OverrideParameters": "{{ OverrideParameters }}", 
"WorkflowVersion": "{{ WorkflowVersion }}"
}'
;
```
</TabItem>
<TabItem value="stop_workflow_run">

Stops a running workflow execution. This operation terminates all running tasks and prevents new tasks from starting. Amazon Managed Workflows for Apache Airflow Serverless gracefully shuts down the workflow execution by stopping task scheduling and terminating active ECS worker containers. The operation transitions the workflow run to a STOPPING state and then to STOPPED once all cleanup is complete. In-flight tasks may complete or be terminated depending on their current execution state.

```sql
EXEC aws.mwaa_serverless.workflows.stop_workflow_run 
@region='{{ region }}' --required 
@@json=
'{
"WorkflowArn": "{{ WorkflowArn }}", 
"RunId": "{{ RunId }}"
}'
;
```
</TabItem>
</Tabs>
