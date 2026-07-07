--- 
title: flow_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_definitions
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>flow_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flow_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.flow_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_flow_definition"
    values={[
        { label: 'describe_flow_definition', value: 'describe_flow_definition' },
        { label: 'list_flow_definitions', value: 'list_flow_definitions' }
    ]}
>
<TabItem value="describe_flow_definition">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the flow definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>The reason your flow definition failed.</td>
</tr>
<tr>
    <td><CopyableCode code="FlowDefinitionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the flow defintion. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;+:&#91;0-9&#93;&#123;12&#125;:flow-definition/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FlowDefinitionName" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the flow definition. (pattern: &lt;code&gt;&#91;a-z0-9&#93;(-*&#91;a-z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FlowDefinitionStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the flow definition. Valid values are listed below. (Initializing, Active, Failed, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="HumanLoopActivationConfig" /></td>
    <td><code>object</code></td>
    <td>An object containing information about what triggers a human review workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="HumanLoopConfig" /></td>
    <td><code>object</code></td>
    <td>An object containing information about who works on the task, the workforce task price, and other task details.</td>
</tr>
<tr>
    <td><CopyableCode code="HumanLoopRequestSource" /></td>
    <td><code>object</code></td>
    <td>Container for configuring the source of human task requests. Used to specify if Amazon Rekognition or Amazon Textract is used as an integration source.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputConfig" /></td>
    <td><code>object</code></td>
    <td>An object containing information about the output file.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) execution role for the flow definition. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_flow_definitions">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when SageMaker created the flow definition.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>The reason why the flow definition creation failed. A failure reason is returned only when the flow definition status is Failed.</td>
</tr>
<tr>
    <td><CopyableCode code="FlowDefinitionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the flow definition. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;+:&#91;0-9&#93;&#123;12&#125;:flow-definition/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FlowDefinitionName" /></td>
    <td><code>string</code></td>
    <td>The name of the flow definition. (pattern: &lt;code&gt;&#91;a-z0-9&#93;(-*&#91;a-z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FlowDefinitionStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the flow definition. Valid values: (Initializing, Active, Failed, Deleting)</td>
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
    <td><a href="#describe_flow_definition"><CopyableCode code="describe_flow_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified flow definition.</td>
</tr>
<tr>
    <td><a href="#list_flow_definitions"><CopyableCode code="list_flow_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the flow definitions in your account.</td>
</tr>
<tr>
    <td><a href="#create_flow_definition"><CopyableCode code="create_flow_definition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FlowDefinitionName"><code>FlowDefinitionName</code></a>, <a href="#parameter-OutputConfig"><code>OutputConfig</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates a flow definition.</td>
</tr>
<tr>
    <td><a href="#delete_flow_definition"><CopyableCode code="delete_flow_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified flow definition.</td>
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
    defaultValue="describe_flow_definition"
    values={[
        { label: 'describe_flow_definition', value: 'describe_flow_definition' },
        { label: 'list_flow_definitions', value: 'list_flow_definitions' }
    ]}
>
<TabItem value="describe_flow_definition">

Returns information about the specified flow definition.

```sql
SELECT
CreationTime,
FailureReason,
FlowDefinitionArn,
FlowDefinitionName,
FlowDefinitionStatus,
HumanLoopActivationConfig,
HumanLoopConfig,
HumanLoopRequestSource,
OutputConfig,
RoleArn
FROM aws.sagemaker.flow_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_flow_definitions">

Returns information about the flow definitions in your account.

```sql
SELECT
CreationTime,
FailureReason,
FlowDefinitionArn,
FlowDefinitionName,
FlowDefinitionStatus
FROM aws.sagemaker.flow_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_flow_definition"
    values={[
        { label: 'create_flow_definition', value: 'create_flow_definition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_flow_definition">

Creates a flow definition.

```sql
INSERT INTO aws.sagemaker.flow_definitions (
FlowDefinitionName,
HumanLoopRequestSource,
HumanLoopActivationConfig,
HumanLoopConfig,
OutputConfig,
RoleArn,
Tags,
region
)
SELECT 
'{{ FlowDefinitionName }}' /* required */,
'{{ HumanLoopRequestSource }}',
'{{ HumanLoopActivationConfig }}',
'{{ HumanLoopConfig }}',
'{{ OutputConfig }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
FlowDefinitionArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: flow_definitions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the flow_definitions resource.
    - name: FlowDefinitionName
      value: "{{ FlowDefinitionName }}"
      description: |
        The name of your flow definition.
    - name: HumanLoopRequestSource
      description: |
        Container for configuring the source of human task requests. Use to specify if Amazon Rekognition or Amazon Textract is used as an integration source.
      value:
        AwsManagedHumanLoopRequestSource: "{{ AwsManagedHumanLoopRequestSource }}"
    - name: HumanLoopActivationConfig
      description: |
        An object containing information about the events that trigger a human workflow.
      value:
        HumanLoopActivationConditionsConfig:
          HumanLoopActivationConditions: "{{ HumanLoopActivationConditions }}"
    - name: HumanLoopConfig
      description: |
        An object containing information about the tasks the human reviewers will perform.
      value:
        WorkteamArn: "{{ WorkteamArn }}"
        HumanTaskUiArn: "{{ HumanTaskUiArn }}"
        TaskTitle: "{{ TaskTitle }}"
        TaskDescription: "{{ TaskDescription }}"
        TaskCount: {{ TaskCount }}
        TaskAvailabilityLifetimeInSeconds: {{ TaskAvailabilityLifetimeInSeconds }}
        TaskTimeLimitInSeconds: {{ TaskTimeLimitInSeconds }}
        TaskKeywords:
          - "{{ TaskKeywords }}"
        PublicWorkforceTaskPrice:
          AmountInUsd:
            Dollars: {{ Dollars }}
            Cents: {{ Cents }}
            TenthFractionsOfACent: {{ TenthFractionsOfACent }}
    - name: OutputConfig
      description: |
        An object containing information about where the human review results will be uploaded.
      value:
        S3OutputPath: "{{ S3OutputPath }}"
        KmsKeyId: "{{ KmsKeyId }}"
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the role needed to call other services on your behalf. For example, arn:aws:iam::1234567890:role/service-role/AmazonSageMaker-ExecutionRole-20180111T151298.
    - name: Tags
      description: |
        An array of key-value pairs that contain metadata to help you categorize and organize a flow definition. Each tag consists of a key and a value, both of which you define.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_flow_definition"
    values={[
        { label: 'delete_flow_definition', value: 'delete_flow_definition' }
    ]}
>
<TabItem value="delete_flow_definition">

Deletes the specified flow definition.

```sql
DELETE FROM aws.sagemaker.flow_definitions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
