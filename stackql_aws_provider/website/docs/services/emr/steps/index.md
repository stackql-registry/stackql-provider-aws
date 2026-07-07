--- 
title: steps
hide_title: false
hide_table_of_contents: false
keywords:
  - steps
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

Creates, updates, deletes, gets or lists a <code>steps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="steps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.steps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_step"
    values={[
        { label: 'describe_step', value: 'describe_step' },
        { label: 'list_steps', value: 'list_steps' }
    ]}
>
<TabItem value="describe_step">

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
    <td><CopyableCode code="ActionOnFailure" /></td>
    <td><code>string</code></td>
    <td>The action to take when the cluster step fails. Possible values are TERMINATE_CLUSTER, CANCEL_AND_WAIT, and CONTINUE. TERMINATE_JOB_FLOW is provided for backward compatibility. We recommend using TERMINATE_CLUSTER instead. If a cluster's StepConcurrencyLevel is greater than 1, do not use AddJobFlowSteps to submit a step with this parameter set to CANCEL_AND_WAIT or TERMINATE_CLUSTER. The step is not submitted and the action fails with a message that the ActionOnFailure setting is not valid. If you change a cluster's StepConcurrencyLevel to be greater than 1 while a step is running, the ActionOnFailure parameter may not behave as you expect. In this case, for a step that fails with this parameter set to CANCEL_AND_WAIT, pending steps and the running step are not canceled; for a step that fails with this parameter set to TERMINATE_CLUSTER, the cluster does not terminate. (TERMINATE_JOB_FLOW, TERMINATE_CLUSTER, CANCEL_AND_WAIT, CONTINUE)</td>
</tr>
<tr>
    <td><CopyableCode code="Config" /></td>
    <td><code>object</code></td>
    <td>The Hadoop job configuration of the cluster step.</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionKeyArn" /></td>
    <td><code>string</code></td>
    <td>The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the runtime role for a step on the cluster. The runtime role can be a cross-account IAM role. The runtime role ARN is a combination of account ID, role name, and role type using the following format: arn:partition:service:region:account:resource. For example, arn:aws:IAM::1234567890:role/ReadOnly is a correctly formatted runtime role ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the cluster step.</td>
</tr>
<tr>
    <td><CopyableCode code="LogUri" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 destination URI for log publishing.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster step.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>object</code></td>
    <td>The current execution status details of the cluster step.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_steps">

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
    <td><CopyableCode code="ActionOnFailure" /></td>
    <td><code>string</code></td>
    <td>The action to take when the cluster step fails. Possible values are TERMINATE_CLUSTER, CANCEL_AND_WAIT, and CONTINUE. TERMINATE_JOB_FLOW is available for backward compatibility. (TERMINATE_JOB_FLOW, TERMINATE_CLUSTER, CANCEL_AND_WAIT, CONTINUE)</td>
</tr>
<tr>
    <td><CopyableCode code="Config" /></td>
    <td><code>object</code></td>
    <td>The Hadoop job configuration of the cluster step.</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionKeyArn" /></td>
    <td><code>string</code></td>
    <td>The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the cluster step.</td>
</tr>
<tr>
    <td><CopyableCode code="LogUri" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 destination URI for log publishing.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster step.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>object</code></td>
    <td>The current execution status details of the cluster step.</td>
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
    <td><a href="#describe_step"><CopyableCode code="describe_step" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides more detail about the cluster step.</td>
</tr>
<tr>
    <td><a href="#list_steps"><CopyableCode code="list_steps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of steps for the cluster in reverse order unless you specify stepIds with the request or filter by StepStates. You can specify a maximum of 10 stepIDs. The CLI automatically paginates results to return a list greater than 50 steps. To return more than 50 steps using the CLI, specify a Marker, which is a pagination token that indicates the next set of steps to retrieve.</td>
</tr>
<tr>
    <td><a href="#add_job_flow_steps"><CopyableCode code="add_job_flow_steps" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobFlowId"><code>JobFlowId</code></a>, <a href="#parameter-Steps"><code>Steps</code></a></td>
    <td></td>
    <td>AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed in each job flow. If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using SSH to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop. A step specifies the location of a JAR file stored either on the master node of the cluster or in Amazon S3. Each step is performed by the main function of the main class of the JAR file. The main class can be specified either in the manifest of the JAR or by using the MainFunction parameter of the step. Amazon EMR executes each step in the order listed. For a step to be considered complete, the main function must exit with a zero exit code and all Hadoop jobs started while the step was running must have completed and run successfully. You can only add steps to a cluster that is in one of the following states: STARTING, BOOTSTRAPPING, RUNNING, or WAITING. The string values passed into HadoopJarStep object cannot exceed a total of 10240 characters.</td>
</tr>
<tr>
    <td><a href="#set_keep_job_flow_alive_when_no_steps"><CopyableCode code="set_keep_job_flow_alive_when_no_steps" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobFlowIds"><code>JobFlowIds</code></a>, <a href="#parameter-KeepJobFlowAliveWhenNoSteps"><code>KeepJobFlowAliveWhenNoSteps</code></a></td>
    <td></td>
    <td>You can use the SetKeepJobFlowAliveWhenNoSteps to configure a cluster (job flow) to terminate after the step execution, i.e., all your steps are executed. If you want a transient cluster that shuts down after the last of the current executing steps are completed, you can configure SetKeepJobFlowAliveWhenNoSteps to false. If you want a long running cluster, configure SetKeepJobFlowAliveWhenNoSteps to true. For more information, see Managing Cluster Termination in the Amazon EMR Management Guide.</td>
</tr>
<tr>
    <td><a href="#cancel_steps"><CopyableCode code="cancel_steps" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterId"><code>ClusterId</code></a>, <a href="#parameter-StepIds"><code>StepIds</code></a></td>
    <td></td>
    <td>Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee that a step will be canceled, even if the request is successfully submitted. When you use Amazon EMR releases 5.28.0 and later, you can cancel steps that are in a PENDING or RUNNING state. In earlier versions of Amazon EMR, you can only cancel steps that are in a PENDING state.</td>
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
    defaultValue="describe_step"
    values={[
        { label: 'describe_step', value: 'describe_step' },
        { label: 'list_steps', value: 'list_steps' }
    ]}
>
<TabItem value="describe_step">

Provides more detail about the cluster step.

```sql
SELECT
ActionOnFailure,
Config,
EncryptionKeyArn,
ExecutionRoleArn,
Id,
LogUri,
Name,
Status
FROM aws.emr.steps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_steps">

Provides a list of steps for the cluster in reverse order unless you specify stepIds with the request or filter by StepStates. You can specify a maximum of 10 stepIDs. The CLI automatically paginates results to return a list greater than 50 steps. To return more than 50 steps using the CLI, specify a Marker, which is a pagination token that indicates the next set of steps to retrieve.

```sql
SELECT
ActionOnFailure,
Config,
EncryptionKeyArn,
Id,
LogUri,
Name,
Status
FROM aws.emr.steps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_job_flow_steps"
    values={[
        { label: 'add_job_flow_steps', value: 'add_job_flow_steps' },
        { label: 'set_keep_job_flow_alive_when_no_steps', value: 'set_keep_job_flow_alive_when_no_steps' }
    ]}
>
<TabItem value="add_job_flow_steps">

AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed in each job flow. If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using SSH to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop. A step specifies the location of a JAR file stored either on the master node of the cluster or in Amazon S3. Each step is performed by the main function of the main class of the JAR file. The main class can be specified either in the manifest of the JAR or by using the MainFunction parameter of the step. Amazon EMR executes each step in the order listed. For a step to be considered complete, the main function must exit with a zero exit code and all Hadoop jobs started while the step was running must have completed and run successfully. You can only add steps to a cluster that is in one of the following states: STARTING, BOOTSTRAPPING, RUNNING, or WAITING. The string values passed into HadoopJarStep object cannot exceed a total of 10240 characters.

```sql
UPDATE aws.emr.steps
SET 
JobFlowId = '{{ JobFlowId }}',
Steps = '{{ Steps }}',
ExecutionRoleArn = '{{ ExecutionRoleArn }}'
WHERE 
region = '{{ region }}' --required
AND JobFlowId = '{{ JobFlowId }}' --required
AND Steps = '{{ Steps }}' --required
RETURNING
StepIds;
```
</TabItem>
<TabItem value="set_keep_job_flow_alive_when_no_steps">

You can use the SetKeepJobFlowAliveWhenNoSteps to configure a cluster (job flow) to terminate after the step execution, i.e., all your steps are executed. If you want a transient cluster that shuts down after the last of the current executing steps are completed, you can configure SetKeepJobFlowAliveWhenNoSteps to false. If you want a long running cluster, configure SetKeepJobFlowAliveWhenNoSteps to true. For more information, see Managing Cluster Termination in the Amazon EMR Management Guide.

```sql
UPDATE aws.emr.steps
SET 
JobFlowIds = '{{ JobFlowIds }}',
KeepJobFlowAliveWhenNoSteps = {{ KeepJobFlowAliveWhenNoSteps }}
WHERE 
region = '{{ region }}' --required
AND JobFlowIds = '{{ JobFlowIds }}' --required
AND KeepJobFlowAliveWhenNoSteps = {{ KeepJobFlowAliveWhenNoSteps }} --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_steps"
    values={[
        { label: 'cancel_steps', value: 'cancel_steps' }
    ]}
>
<TabItem value="cancel_steps">

Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee that a step will be canceled, even if the request is successfully submitted. When you use Amazon EMR releases 5.28.0 and later, you can cancel steps that are in a PENDING or RUNNING state. In earlier versions of Amazon EMR, you can only cancel steps that are in a PENDING state.

```sql
EXEC aws.emr.steps.cancel_steps 
@region='{{ region }}' --required 
@@json=
'{
"ClusterId": "{{ ClusterId }}", 
"StepIds": "{{ StepIds }}", 
"StepCancellationOption": "{{ StepCancellationOption }}"
}'
;
```
</TabItem>
</Tabs>
