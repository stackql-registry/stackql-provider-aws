--- 
title: edge_deployment_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - edge_deployment_plans
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

Creates, updates, deletes, gets or lists an <code>edge_deployment_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="edge_deployment_plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.edge_deployment_plans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_edge_deployment_plan"
    values={[
        { label: 'describe_edge_deployment_plan', value: 'describe_edge_deployment_plan' },
        { label: 'list_edge_deployment_plans', value: 'list_edge_deployment_plans' }
    ]}
>
<TabItem value="describe_edge_deployment_plan">

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
    <td>The time when the edge deployment plan was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceFleetName" /></td>
    <td><code>string</code></td>
    <td>The device fleet used for this edge deployment plan. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EdgeDeploymentFailed" /></td>
    <td><code>integer</code></td>
    <td>The number of edge devices that failed the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="EdgeDeploymentPending" /></td>
    <td><code>integer</code></td>
    <td>The number of edge devices yet to pick up deployment, or in progress.</td>
</tr>
<tr>
    <td><CopyableCode code="EdgeDeploymentPlanArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of edge deployment plan. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z\-&#93;*:\d&#123;12&#125;:edge-deployment/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EdgeDeploymentPlanName" /></td>
    <td><code>string</code></td>
    <td>The name of the edge deployment plan. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EdgeDeploymentSuccess" /></td>
    <td><code>integer</code></td>
    <td>The number of edge devices with the successful deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the edge deployment plan was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelConfigs" /></td>
    <td><code>array</code></td>
    <td>List of models associated with the edge deployment plan.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Token to use when calling the next set of stages in the edge deployment plan. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Stages" /></td>
    <td><code>array</code></td>
    <td>List of stages in the edge deployment plan.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_edge_deployment_plans">

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
    <td>The time when the edge deployment plan was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceFleetName" /></td>
    <td><code>string</code></td>
    <td>The name of the device fleet used for the deployment. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EdgeDeploymentFailed" /></td>
    <td><code>integer</code></td>
    <td>The number of edge devices that failed the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="EdgeDeploymentPending" /></td>
    <td><code>integer</code></td>
    <td>The number of edge devices yet to pick up the deployment, or in progress.</td>
</tr>
<tr>
    <td><CopyableCode code="EdgeDeploymentPlanArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the edge deployment plan. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z\-&#93;*:\d&#123;12&#125;:edge-deployment/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EdgeDeploymentPlanName" /></td>
    <td><code>string</code></td>
    <td>The name of the edge deployment plan. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EdgeDeploymentSuccess" /></td>
    <td><code>integer</code></td>
    <td>The number of edge devices with the successful deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the edge deployment plan was last updated.</td>
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
    <td><a href="#describe_edge_deployment_plan"><CopyableCode code="describe_edge_deployment_plan" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an edge deployment plan with deployment status per stage.</td>
</tr>
<tr>
    <td><a href="#list_edge_deployment_plans"><CopyableCode code="list_edge_deployment_plans" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all edge deployment plans.</td>
</tr>
<tr>
    <td><a href="#create_edge_deployment_plan"><CopyableCode code="create_edge_deployment_plan" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EdgeDeploymentPlanName"><code>EdgeDeploymentPlanName</code></a>, <a href="#parameter-ModelConfigs"><code>ModelConfigs</code></a>, <a href="#parameter-DeviceFleetName"><code>DeviceFleetName</code></a></td>
    <td></td>
    <td>Creates an edge deployment plan, consisting of multiple stages. Each stage may have a different deployment configuration and devices.</td>
</tr>
<tr>
    <td><a href="#create_edge_deployment_stage"><CopyableCode code="create_edge_deployment_stage" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EdgeDeploymentPlanName"><code>EdgeDeploymentPlanName</code></a></td>
    <td></td>
    <td>Creates a new stage in an existing edge deployment plan.</td>
</tr>
<tr>
    <td><a href="#delete_edge_deployment_stage"><CopyableCode code="delete_edge_deployment_stage" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a stage in an edge deployment plan if (and only if) the stage is inactive.</td>
</tr>
<tr>
    <td><a href="#delete_edge_deployment_plan"><CopyableCode code="delete_edge_deployment_plan" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an edge deployment plan if (and only if) all the stages in the plan are inactive or there are no stages in the plan.</td>
</tr>
<tr>
    <td><a href="#start_edge_deployment_stage"><CopyableCode code="start_edge_deployment_stage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EdgeDeploymentPlanName"><code>EdgeDeploymentPlanName</code></a>, <a href="#parameter-StageName"><code>StageName</code></a></td>
    <td></td>
    <td>Starts a stage in an edge deployment plan.</td>
</tr>
<tr>
    <td><a href="#stop_edge_deployment_stage"><CopyableCode code="stop_edge_deployment_stage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EdgeDeploymentPlanName"><code>EdgeDeploymentPlanName</code></a>, <a href="#parameter-StageName"><code>StageName</code></a></td>
    <td></td>
    <td>Stops a stage in an edge deployment plan.</td>
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
    defaultValue="describe_edge_deployment_plan"
    values={[
        { label: 'describe_edge_deployment_plan', value: 'describe_edge_deployment_plan' },
        { label: 'list_edge_deployment_plans', value: 'list_edge_deployment_plans' }
    ]}
>
<TabItem value="describe_edge_deployment_plan">

Describes an edge deployment plan with deployment status per stage.

```sql
SELECT
CreationTime,
DeviceFleetName,
EdgeDeploymentFailed,
EdgeDeploymentPending,
EdgeDeploymentPlanArn,
EdgeDeploymentPlanName,
EdgeDeploymentSuccess,
LastModifiedTime,
ModelConfigs,
NextToken,
Stages
FROM aws.sagemaker.edge_deployment_plans
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_edge_deployment_plans">

Lists all edge deployment plans.

```sql
SELECT
CreationTime,
DeviceFleetName,
EdgeDeploymentFailed,
EdgeDeploymentPending,
EdgeDeploymentPlanArn,
EdgeDeploymentPlanName,
EdgeDeploymentSuccess,
LastModifiedTime
FROM aws.sagemaker.edge_deployment_plans
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_edge_deployment_plan"
    values={[
        { label: 'create_edge_deployment_plan', value: 'create_edge_deployment_plan' },
        { label: 'create_edge_deployment_stage', value: 'create_edge_deployment_stage' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_edge_deployment_plan">

Creates an edge deployment plan, consisting of multiple stages. Each stage may have a different deployment configuration and devices.

```sql
INSERT INTO aws.sagemaker.edge_deployment_plans (
EdgeDeploymentPlanName,
ModelConfigs,
DeviceFleetName,
Stages,
Tags,
region
)
SELECT 
'{{ EdgeDeploymentPlanName }}' /* required */,
'{{ ModelConfigs }}' /* required */,
'{{ DeviceFleetName }}' /* required */,
'{{ Stages }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
EdgeDeploymentPlanArn
;
```
</TabItem>
<TabItem value="create_edge_deployment_stage">

Creates a new stage in an existing edge deployment plan.

```sql
INSERT INTO aws.sagemaker.edge_deployment_plans (
EdgeDeploymentPlanName,
Stages,
region
)
SELECT 
'{{ EdgeDeploymentPlanName }}' /* required */,
'{{ Stages }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: edge_deployment_plans
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the edge_deployment_plans resource.
    - name: EdgeDeploymentPlanName
      value: "{{ EdgeDeploymentPlanName }}"
      description: |
        The name of the edge deployment plan.
    - name: ModelConfigs
      description: |
        List of models associated with the edge deployment plan.
      value:
        - ModelHandle: "{{ ModelHandle }}"
          EdgePackagingJobName: "{{ EdgePackagingJobName }}"
    - name: DeviceFleetName
      value: "{{ DeviceFleetName }}"
      description: |
        The device fleet used for this edge deployment plan.
    - name: Stages
      description: |
        List of stages to be added to the edge deployment plan.
      value:
        - StageName: "{{ StageName }}"
          DeviceSelectionConfig:
            DeviceSubsetType: "{{ DeviceSubsetType }}"
            Percentage: {{ Percentage }}
            DeviceNames:
              - "{{ DeviceNames }}"
            DeviceNameContains: "{{ DeviceNameContains }}"
          DeploymentConfig:
            FailureHandlingPolicy: "{{ FailureHandlingPolicy }}"
    - name: Tags
      description: |
        List of tags with which to tag the edge deployment plan.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_edge_deployment_stage"
    values={[
        { label: 'delete_edge_deployment_stage', value: 'delete_edge_deployment_stage' },
        { label: 'delete_edge_deployment_plan', value: 'delete_edge_deployment_plan' }
    ]}
>
<TabItem value="delete_edge_deployment_stage">

Delete a stage in an edge deployment plan if (and only if) the stage is inactive.

```sql
DELETE FROM aws.sagemaker.edge_deployment_plans
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_edge_deployment_plan">

Deletes an edge deployment plan if (and only if) all the stages in the plan are inactive or there are no stages in the plan.

```sql
DELETE FROM aws.sagemaker.edge_deployment_plans
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_edge_deployment_stage"
    values={[
        { label: 'start_edge_deployment_stage', value: 'start_edge_deployment_stage' },
        { label: 'stop_edge_deployment_stage', value: 'stop_edge_deployment_stage' }
    ]}
>
<TabItem value="start_edge_deployment_stage">

Starts a stage in an edge deployment plan.

```sql
EXEC aws.sagemaker.edge_deployment_plans.start_edge_deployment_stage 
@region='{{ region }}' --required 
@@json=
'{
"EdgeDeploymentPlanName": "{{ EdgeDeploymentPlanName }}", 
"StageName": "{{ StageName }}"
}'
;
```
</TabItem>
<TabItem value="stop_edge_deployment_stage">

Stops a stage in an edge deployment plan.

```sql
EXEC aws.sagemaker.edge_deployment_plans.stop_edge_deployment_stage 
@region='{{ region }}' --required 
@@json=
'{
"EdgeDeploymentPlanName": "{{ EdgeDeploymentPlanName }}", 
"StageName": "{{ StageName }}"
}'
;
```
</TabItem>
</Tabs>
