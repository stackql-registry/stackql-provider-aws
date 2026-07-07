--- 
title: workflows
hide_title: false
hide_table_of_contents: false
keywords:
  - workflows
  - transfer
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transfer.workflows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workflow"
    values={[
        { label: 'describe_workflow', value: 'describe_workflow' },
        { label: 'list_workflows', value: 'list_workflows' }
    ]}
>
<TabItem value="describe_workflow">

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
    <td>Specifies the unique Amazon Resource Name (ARN) for the workflow. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Specifies the text description for the workflow. (pattern: &lt;code&gt;&#91;\w- &#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OnExceptionSteps" /></td>
    <td><code>array</code></td>
    <td>Specifies the steps (actions) to take if errors are encountered during execution of the workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="Steps" /></td>
    <td><code>array</code></td>
    <td>Specifies the details for the steps that are in the specified workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkflowId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the workflow. (pattern: &lt;code&gt;w-(&#91;a-z0-9&#93;&#123;17&#125;)&lt;/code&gt;)</td>
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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>Specifies the unique Amazon Resource Name (ARN) for the workflow. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Specifies the text description for the workflow. (pattern: &lt;code&gt;&#91;\w- &#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkflowId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the workflow. (pattern: &lt;code&gt;w-(&#91;a-z0-9&#93;&#123;17&#125;)&lt;/code&gt;)</td>
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
    <td><a href="#describe_workflow"><CopyableCode code="describe_workflow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified workflow.</td>
</tr>
<tr>
    <td><a href="#list_workflows"><CopyableCode code="list_workflows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all workflows associated with your Amazon Web Services account for your current region.</td>
</tr>
<tr>
    <td><a href="#create_workflow"><CopyableCode code="create_workflow" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Steps"><code>Steps</code></a></td>
    <td></td>
    <td>Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the workflow-details field in CreateServer and UpdateServer operations.</td>
</tr>
<tr>
    <td><a href="#delete_workflow"><CopyableCode code="delete_workflow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified workflow.</td>
</tr>
<tr>
    <td><a href="#send_workflow_step_state"><CopyableCode code="send_workflow_step_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkflowId"><code>WorkflowId</code></a>, <a href="#parameter-ExecutionId"><code>ExecutionId</code></a>, <a href="#parameter-Token"><code>Token</code></a>, <a href="#parameter-Status"><code>Status</code></a></td>
    <td></td>
    <td>Sends a callback for asynchronous custom steps. The ExecutionId, WorkflowId, and Token are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status.</td>
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
    defaultValue="describe_workflow"
    values={[
        { label: 'describe_workflow', value: 'describe_workflow' },
        { label: 'list_workflows', value: 'list_workflows' }
    ]}
>
<TabItem value="describe_workflow">

Describes the specified workflow.

```sql
SELECT
Arn,
Description,
OnExceptionSteps,
Steps,
Tags,
WorkflowId
FROM aws.transfer.workflows
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workflows">

Lists all workflows associated with your Amazon Web Services account for your current region.

```sql
SELECT
Arn,
Description,
WorkflowId
FROM aws.transfer.workflows
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

Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the workflow-details field in CreateServer and UpdateServer operations.

```sql
INSERT INTO aws.transfer.workflows (
Description,
Steps,
OnExceptionSteps,
Tags,
region
)
SELECT 
'{{ Description }}',
'{{ Steps }}' /* required */,
'{{ OnExceptionSteps }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
WorkflowId
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
    - name: Description
      value: "{{ Description }}"
      description: |
        A textual description for the workflow.
    - name: Steps
      description: |
        Specifies the details for the steps that are in the specified workflow. The TYPE specifies which of the following actions is being taken for this step. COPY - Copy the file to another location. CUSTOM - Perform a custom step with an Lambda function target. DECRYPT - Decrypt a file that was encrypted before it was uploaded. DELETE - Delete the file. TAG - Add a tag to the file. Currently, copying and tagging are supported only on S3. For file location, you specify either the Amazon S3 bucket and key, or the Amazon EFS file system ID and path.
      value:
        - Type: "{{ Type }}"
          CopyStepDetails:
            Name: "{{ Name }}"
            DestinationFileLocation:
              S3FileLocation:
                Bucket: "{{ Bucket }}"
                Key: "{{ Key }}"
              EfsFileLocation:
                FileSystemId: "{{ FileSystemId }}"
                Path: "{{ Path }}"
            OverwriteExisting: "{{ OverwriteExisting }}"
            SourceFileLocation: "{{ SourceFileLocation }}"
          CustomStepDetails:
            Name: "{{ Name }}"
            Target: "{{ Target }}"
            TimeoutSeconds: {{ TimeoutSeconds }}
            SourceFileLocation: "{{ SourceFileLocation }}"
          DeleteStepDetails:
            Name: "{{ Name }}"
            SourceFileLocation: "{{ SourceFileLocation }}"
          TagStepDetails:
            Name: "{{ Name }}"
            Tags:
              - Key: "{{ Key }}"
                Value: "{{ Value }}"
            SourceFileLocation: "{{ SourceFileLocation }}"
          DecryptStepDetails:
            Name: "{{ Name }}"
            Type: "{{ Type }}"
            SourceFileLocation: "{{ SourceFileLocation }}"
            OverwriteExisting: "{{ OverwriteExisting }}"
            DestinationFileLocation:
              S3FileLocation:
                Bucket: "{{ Bucket }}"
                Key: "{{ Key }}"
              EfsFileLocation:
                FileSystemId: "{{ FileSystemId }}"
                Path: "{{ Path }}"
    - name: OnExceptionSteps
      description: |
        Specifies the steps (actions) to take if errors are encountered during execution of the workflow. For custom steps, the Lambda function needs to send FAILURE to the call back API to kick off the exception steps. Additionally, if the Lambda does not send SUCCESS before it times out, the exception steps are executed.
      value:
        - Type: "{{ Type }}"
          CopyStepDetails:
            Name: "{{ Name }}"
            DestinationFileLocation:
              S3FileLocation:
                Bucket: "{{ Bucket }}"
                Key: "{{ Key }}"
              EfsFileLocation:
                FileSystemId: "{{ FileSystemId }}"
                Path: "{{ Path }}"
            OverwriteExisting: "{{ OverwriteExisting }}"
            SourceFileLocation: "{{ SourceFileLocation }}"
          CustomStepDetails:
            Name: "{{ Name }}"
            Target: "{{ Target }}"
            TimeoutSeconds: {{ TimeoutSeconds }}
            SourceFileLocation: "{{ SourceFileLocation }}"
          DeleteStepDetails:
            Name: "{{ Name }}"
            SourceFileLocation: "{{ SourceFileLocation }}"
          TagStepDetails:
            Name: "{{ Name }}"
            Tags:
              - Key: "{{ Key }}"
                Value: "{{ Value }}"
            SourceFileLocation: "{{ SourceFileLocation }}"
          DecryptStepDetails:
            Name: "{{ Name }}"
            Type: "{{ Type }}"
            SourceFileLocation: "{{ SourceFileLocation }}"
            OverwriteExisting: "{{ OverwriteExisting }}"
            DestinationFileLocation:
              S3FileLocation:
                Bucket: "{{ Bucket }}"
                Key: "{{ Key }}"
              EfsFileLocation:
                FileSystemId: "{{ FileSystemId }}"
                Path: "{{ Path }}"
    - name: Tags
      description: |
        Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

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

Deletes the specified workflow.

```sql
DELETE FROM aws.transfer.workflows
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="send_workflow_step_state"
    values={[
        { label: 'send_workflow_step_state', value: 'send_workflow_step_state' }
    ]}
>
<TabItem value="send_workflow_step_state">

Sends a callback for asynchronous custom steps. The ExecutionId, WorkflowId, and Token are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status.

```sql
EXEC aws.transfer.workflows.send_workflow_step_state 
@region='{{ region }}' --required 
@@json=
'{
"WorkflowId": "{{ WorkflowId }}", 
"ExecutionId": "{{ ExecutionId }}", 
"Token": "{{ Token }}", 
"Status": "{{ Status }}"
}'
;
```
</TabItem>
</Tabs>
