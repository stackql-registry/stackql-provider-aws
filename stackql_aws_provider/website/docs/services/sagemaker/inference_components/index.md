--- 
title: inference_components
hide_title: false
hide_table_of_contents: false
keywords:
  - inference_components
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

Creates, updates, deletes, gets or lists an <code>inference_components</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inference_components" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.inference_components" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_inference_component"
    values={[
        { label: 'describe_inference_component', value: 'describe_inference_component' },
        { label: 'list_inference_components', value: 'list_inference_components' }
    ]}
>
<TabItem value="describe_inference_component">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the inference component was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the endpoint that hosts the inference component. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:endpoint/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name of the endpoint that hosts the inference component. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If the inference component status is Failed, the reason for the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="inference_component_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the inference component.</td>
</tr>
<tr>
    <td><CopyableCode code="inference_component_name" /></td>
    <td><code>string</code></td>
    <td>The name of the inference component. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;\-a-zA-Z0-9&#93;*&#91;a-zA-Z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="inference_component_status" /></td>
    <td><code>string</code></td>
    <td>The status of the inference component. (InService, Creating, Updating, Failed, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="last_deployment_config" /></td>
    <td><code>object</code></td>
    <td>The deployment and rollback settings that you assigned to the inference component.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the inference component was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_config" /></td>
    <td><code>object</code></td>
    <td>Details about the runtime settings for the model that is deployed with the inference component.</td>
</tr>
<tr>
    <td><CopyableCode code="specification" /></td>
    <td><code>object</code></td>
    <td>Details about the resources that are deployed with this inference component.</td>
</tr>
<tr>
    <td><CopyableCode code="specifications" /></td>
    <td><code>array</code></td>
    <td>A list of specification summaries for the inference component, one per instance type. This parameter is populated when the inference component was created with multiple specifications. When this parameter is populated, the singular Specification parameter is not returned.</td>
</tr>
<tr>
    <td><CopyableCode code="variant_name" /></td>
    <td><code>string</code></td>
    <td>The name of the production variant that hosts the inference component. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_inference_components">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the inference component was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the endpoint that hosts the inference component. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:endpoint/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name of the endpoint that hosts the inference component. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="inference_component_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the inference component.</td>
</tr>
<tr>
    <td><CopyableCode code="inference_component_name" /></td>
    <td><code>string</code></td>
    <td>The name of the inference component. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;\-a-zA-Z0-9&#93;*&#91;a-zA-Z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="inference_component_status" /></td>
    <td><code>string</code></td>
    <td>The status of the inference component. (InService, Creating, Updating, Failed, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the inference component was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="variant_name" /></td>
    <td><code>string</code></td>
    <td>The name of the production variant that hosts the inference component. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_inference_component"><CopyableCode code="describe_inference_component" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an inference component.</td>
</tr>
<tr>
    <td><a href="#list_inference_components"><CopyableCode code="list_inference_components" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the inference components in your account and their properties.</td>
</tr>
<tr>
    <td><a href="#create_inference_component"><CopyableCode code="create_inference_component" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InferenceComponentName"><code>InferenceComponentName</code></a>, <a href="#parameter-EndpointName"><code>EndpointName</code></a></td>
    <td></td>
    <td>Creates an inference component, which is a SageMaker AI hosting object that you can use to deploy a model to an endpoint. In the inference component settings, you specify the model, the endpoint, and how the model utilizes the resources that the endpoint hosts. You can optimize resource utilization by tailoring how the required CPU cores, accelerators, and memory are allocated. You can deploy multiple inference components to an endpoint, where each inference component contains one model and the resource utilization needs for that individual model. After you deploy an inference component, you can directly invoke the associated model when you use the InvokeEndpoint API action.</td>
</tr>
<tr>
    <td><a href="#update_inference_component_runtime_config"><CopyableCode code="update_inference_component_runtime_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InferenceComponentName"><code>InferenceComponentName</code></a>, <a href="#parameter-DesiredRuntimeConfig"><code>DesiredRuntimeConfig</code></a></td>
    <td></td>
    <td>Runtime settings for a model that is deployed with an inference component.</td>
</tr>
<tr>
    <td><a href="#update_inference_component"><CopyableCode code="update_inference_component" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InferenceComponentName"><code>InferenceComponentName</code></a></td>
    <td></td>
    <td>Updates an inference component.</td>
</tr>
<tr>
    <td><a href="#delete_inference_component"><CopyableCode code="delete_inference_component" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an inference component.</td>
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
    defaultValue="describe_inference_component"
    values={[
        { label: 'describe_inference_component', value: 'describe_inference_component' },
        { label: 'list_inference_components', value: 'list_inference_components' }
    ]}
>
<TabItem value="describe_inference_component">

Returns information about an inference component.

```sql
SELECT
creation_time,
endpoint_arn,
endpoint_name,
failure_reason,
inference_component_arn,
inference_component_name,
inference_component_status,
last_deployment_config,
last_modified_time,
runtime_config,
specification,
specifications,
variant_name
FROM aws.sagemaker.inference_components
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_inference_components">

Lists the inference components in your account and their properties.

```sql
SELECT
creation_time,
endpoint_arn,
endpoint_name,
inference_component_arn,
inference_component_name,
inference_component_status,
last_modified_time,
variant_name
FROM aws.sagemaker.inference_components
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_inference_component"
    values={[
        { label: 'create_inference_component', value: 'create_inference_component' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_inference_component">

Creates an inference component, which is a SageMaker AI hosting object that you can use to deploy a model to an endpoint. In the inference component settings, you specify the model, the endpoint, and how the model utilizes the resources that the endpoint hosts. You can optimize resource utilization by tailoring how the required CPU cores, accelerators, and memory are allocated. You can deploy multiple inference components to an endpoint, where each inference component contains one model and the resource utilization needs for that individual model. After you deploy an inference component, you can directly invoke the associated model when you use the InvokeEndpoint API action.

```sql
INSERT INTO aws.sagemaker.inference_components (
InferenceComponentName,
EndpointName,
VariantName,
Specification,
Specifications,
RuntimeConfig,
Tags,
region
)
SELECT 
'{{ InferenceComponentName }}' /* required */,
'{{ EndpointName }}' /* required */,
'{{ VariantName }}',
'{{ Specification }}',
'{{ Specifications }}',
'{{ RuntimeConfig }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
inference_component_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: inference_components
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the inference_components resource.
    - name: InferenceComponentName
      value: "{{ InferenceComponentName }}"
      description: |
        A unique name to assign to the inference component.
    - name: EndpointName
      value: "{{ EndpointName }}"
      description: |
        The name of an existing endpoint where you host the inference component.
    - name: VariantName
      value: "{{ VariantName }}"
      description: |
        The name of an existing production variant where you host the inference component.
    - name: Specification
      description: |
        Details about the resources to deploy with this inference component, including the model, container, and compute resources.
      value:
        InstanceType: "{{ InstanceType }}"
        ModelName: "{{ ModelName }}"
        Container:
          Image: "{{ Image }}"
          ArtifactUrl: "{{ ArtifactUrl }}"
          Environment: "{{ Environment }}"
          ContainerMetricsConfig:
            MetricsEndpoints:
              - MetricsEndpointPath: "{{ MetricsEndpointPath }}"
                MetricPublishFrequencyInSeconds: {{ MetricPublishFrequencyInSeconds }}
        StartupParameters:
          ModelDataDownloadTimeoutInSeconds: {{ ModelDataDownloadTimeoutInSeconds }}
          ContainerStartupHealthCheckTimeoutInSeconds: {{ ContainerStartupHealthCheckTimeoutInSeconds }}
        ComputeResourceRequirements:
          NumberOfCpuCoresRequired: {{ NumberOfCpuCoresRequired }}
          NumberOfAcceleratorDevicesRequired: {{ NumberOfAcceleratorDevicesRequired }}
          MinMemoryRequiredInMb: {{ MinMemoryRequiredInMb }}
          MaxMemoryRequiredInMb: {{ MaxMemoryRequiredInMb }}
        BaseInferenceComponentName: "{{ BaseInferenceComponentName }}"
        DataCacheConfig:
          EnableCaching: {{ EnableCaching }}
        SchedulingConfig:
          PlacementStrategy: "{{ PlacementStrategy }}"
          AvailabilityZoneBalance:
            EnforcementMode: "{{ EnforcementMode }}"
            MaxImbalance: {{ MaxImbalance }}
    - name: Specifications
      description: |
        A list of specification objects for the inference component, one per instance type. Use this parameter when you want to deploy a different model or resource configuration for the inference component on each instance type. You can use either this parameter or the singular Specification parameter, but not both.
      value:
        - InstanceType: "{{ InstanceType }}"
          ModelName: "{{ ModelName }}"
          Container:
            Image: "{{ Image }}"
            ArtifactUrl: "{{ ArtifactUrl }}"
            Environment: "{{ Environment }}"
            ContainerMetricsConfig:
              MetricsEndpoints:
                - MetricsEndpointPath: "{{ MetricsEndpointPath }}"
                  MetricPublishFrequencyInSeconds: {{ MetricPublishFrequencyInSeconds }}
          StartupParameters:
            ModelDataDownloadTimeoutInSeconds: {{ ModelDataDownloadTimeoutInSeconds }}
            ContainerStartupHealthCheckTimeoutInSeconds: {{ ContainerStartupHealthCheckTimeoutInSeconds }}
          ComputeResourceRequirements:
            NumberOfCpuCoresRequired: {{ NumberOfCpuCoresRequired }}
            NumberOfAcceleratorDevicesRequired: {{ NumberOfAcceleratorDevicesRequired }}
            MinMemoryRequiredInMb: {{ MinMemoryRequiredInMb }}
            MaxMemoryRequiredInMb: {{ MaxMemoryRequiredInMb }}
          BaseInferenceComponentName: "{{ BaseInferenceComponentName }}"
          DataCacheConfig:
            EnableCaching: {{ EnableCaching }}
          SchedulingConfig:
            PlacementStrategy: "{{ PlacementStrategy }}"
            AvailabilityZoneBalance:
              EnforcementMode: "{{ EnforcementMode }}"
              MaxImbalance: {{ MaxImbalance }}
    - name: RuntimeConfig
      description: |
        Runtime settings for a model that is deployed with an inference component.
      value:
        CopyCount: {{ CopyCount }}
    - name: Tags
      description: |
        A list of key-value pairs associated with the model. For more information, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_inference_component_runtime_config"
    values={[
        { label: 'update_inference_component_runtime_config', value: 'update_inference_component_runtime_config' },
        { label: 'update_inference_component', value: 'update_inference_component' }
    ]}
>
<TabItem value="update_inference_component_runtime_config">

Runtime settings for a model that is deployed with an inference component.

```sql
UPDATE aws.sagemaker.inference_components
SET 
InferenceComponentName = '{{ InferenceComponentName }}',
DesiredRuntimeConfig = '{{ DesiredRuntimeConfig }}'
WHERE 
region = '{{ region }}' --required
AND InferenceComponentName = '{{ InferenceComponentName }}' --required
AND DesiredRuntimeConfig = '{{ DesiredRuntimeConfig }}' --required
RETURNING
inference_component_arn;
```
</TabItem>
<TabItem value="update_inference_component">

Updates an inference component.

```sql
UPDATE aws.sagemaker.inference_components
SET 
InferenceComponentName = '{{ InferenceComponentName }}',
Specification = '{{ Specification }}',
Specifications = '{{ Specifications }}',
RuntimeConfig = '{{ RuntimeConfig }}',
DeploymentConfig = '{{ DeploymentConfig }}'
WHERE 
region = '{{ region }}' --required
AND InferenceComponentName = '{{ InferenceComponentName }}' --required
RETURNING
inference_component_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_inference_component"
    values={[
        { label: 'delete_inference_component', value: 'delete_inference_component' }
    ]}
>
<TabItem value="delete_inference_component">

Deletes an inference component.

```sql
DELETE FROM aws.sagemaker.inference_components
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
