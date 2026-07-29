--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
  - greengrassv2
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

Creates, updates, deletes, gets or lists a <code>deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrassv2.deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_deployment"
    values={[
        { label: 'get_deployment', value: 'get_deployment' },
        { label: 'list_deployments', value: 'list_deployments' }
    ]}
>
<TabItem value="get_deployment">

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
    <td><CopyableCode code="components" /></td>
    <td><code>object</code></td>
    <td>The components to deploy. This is a dictionary, where each key is the name of a component, and each key's value is the version and configuration to deploy for that component.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the deployment was created, expressed in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_policies" /></td>
    <td><code>object</code></td>
    <td>Contains information about policies that define how a deployment updates components and handles failure.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_status" /></td>
    <td><code>string</code></td>
    <td>The status of the deployment. (ACTIVE, COMPLETED, CANCELED, FAILED, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="iot_job_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IoT job that applies the deployment to target devices. (pattern: &lt;code&gt;arn:&#91;^:&#93;*:iot:&#91;^:&#93;+:&#91;0-9&#93;+:job/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="iot_job_configuration" /></td>
    <td><code>object</code></td>
    <td>Contains information about an IoT job configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="iot_job_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the IoT job that applies the deployment to target devices.</td>
</tr>
<tr>
    <td><CopyableCode code="is_latest_for_target" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the deployment is the latest revision for its target.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_target_arn" /></td>
    <td><code>string</code></td>
    <td>The parent deployment's target ARN within a subdeployment. (pattern: &lt;code&gt;arn:&#91;^:&#93;*:iot:&#91;^:&#93;*:&#91;0-9&#93;+:thinggroup/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="revision_id" /></td>
    <td><code>string</code></td>
    <td>The revision number of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A list of key-value pairs that contain metadata for the resource. For more information, see Tag your resources in the IoT Greengrass V2 Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="target_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the target IoT thing or thing group. (pattern: &lt;code&gt;arn:&#91;^:&#93;*:iot:&#91;^:&#93;*:&#91;0-9&#93;+:(thing|thinggroup)/.+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_deployments">

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
    <td><CopyableCode code="creation_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the deployment was created, expressed in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_status" /></td>
    <td><code>string</code></td>
    <td>The status of the deployment. (ACTIVE, COMPLETED, CANCELED, FAILED, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="is_latest_for_target" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the deployment is the latest revision for its target.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_target_arn" /></td>
    <td><code>string</code></td>
    <td>The parent deployment's target ARN within a subdeployment. (pattern: &lt;code&gt;arn:&#91;^:&#93;*:iot:&#91;^:&#93;*:&#91;0-9&#93;+:thinggroup/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="revision_id" /></td>
    <td><code>string</code></td>
    <td>The revision number of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="target_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the target IoT thing or thing group. When creating a subdeployment, the targetARN can only be a thing group. (pattern: &lt;code&gt;arn:&#91;^:&#93;*:iot:&#91;^:&#93;*:&#91;0-9&#93;+:(thing|thinggroup)/.+&lt;/code&gt;)</td>
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
    <td><a href="#get_deployment"><CopyableCode code="get_deployment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a deployment. Deployments define the components that run on Greengrass core devices.</td>
</tr>
<tr>
    <td><a href="#list_deployments"><CopyableCode code="list_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-targetArn"><code>targetArn</code></a>, <a href="#parameter-historyFilter"><code>historyFilter</code></a>, <a href="#parameter-parentTargetArn"><code>parentTargetArn</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a paginated list of deployments.</td>
</tr>
<tr>
    <td><a href="#create_deployment"><CopyableCode code="create_deployment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetArn"><code>targetArn</code></a></td>
    <td></td>
    <td>Creates a continuous deployment for a target, which is a Greengrass core device or group of core devices. When you add a new core device to a group of core devices that has a deployment, IoT Greengrass deploys that group's deployment to the new device. You can define one deployment for each target. When you create a new deployment for a target that has an existing deployment, you replace the previous deployment. IoT Greengrass applies the new deployment to the target devices. Every deployment has a revision number that indicates how many deployment revisions you define for a target. Use this operation to create a new revision of an existing deployment. For more information, see the Create deployments in the IoT Greengrass V2 Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_deployment"><CopyableCode code="delete_deployment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a deployment. To delete an active deployment, you must first cancel it. For more information, see CancelDeployment. Deleting a deployment doesn't affect core devices that run that deployment, because core devices store the deployment's configuration on the device. Additionally, core devices can roll back to a previous deployment that has been deleted.</td>
</tr>
<tr>
    <td><a href="#cancel_deployment"><CopyableCode code="cancel_deployment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels a deployment. This operation cancels the deployment for devices that haven't yet received it. If a device already received the deployment, this operation doesn't change anything for that device.</td>
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
<tr id="parameter-deployment_id">
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the deployment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-historyFilter">
    <td><CopyableCode code="historyFilter" /></td>
    <td><code>string</code></td>
    <td>The filter for the list of deployments. Choose one of the following options: ALL – The list includes all deployments. LATEST_ONLY – The list includes only the latest revision of each deployment. Default: LATEST_ONLY</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per paginated request. Default: 50</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
<tr id="parameter-parentTargetArn">
    <td><CopyableCode code="parentTargetArn" /></td>
    <td><code>string</code></td>
    <td>The parent deployment's target ARN within a subdeployment.</td>
</tr>
<tr id="parameter-targetArn">
    <td><CopyableCode code="targetArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the target IoT thing or thing group.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_deployment"
    values={[
        { label: 'get_deployment', value: 'get_deployment' },
        { label: 'list_deployments', value: 'list_deployments' }
    ]}
>
<TabItem value="get_deployment">

Gets a deployment. Deployments define the components that run on Greengrass core devices.

```sql
SELECT
components,
creation_timestamp,
deployment_id,
deployment_name,
deployment_policies,
deployment_status,
iot_job_arn,
iot_job_configuration,
iot_job_id,
is_latest_for_target,
parent_target_arn,
revision_id,
tags,
target_arn
FROM aws.greengrassv2.deployments
WHERE deployment_id = '{{ deployment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_deployments">

Retrieves a paginated list of deployments.

```sql
SELECT
creation_timestamp,
deployment_id,
deployment_name,
deployment_status,
is_latest_for_target,
parent_target_arn,
revision_id,
target_arn
FROM aws.greengrassv2.deployments
WHERE region = '{{ region }}' -- required
AND targetArn = '{{ targetArn }}'
AND historyFilter = '{{ historyFilter }}'
AND parentTargetArn = '{{ parentTargetArn }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_deployment"
    values={[
        { label: 'create_deployment', value: 'create_deployment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_deployment">

Creates a continuous deployment for a target, which is a Greengrass core device or group of core devices. When you add a new core device to a group of core devices that has a deployment, IoT Greengrass deploys that group's deployment to the new device. You can define one deployment for each target. When you create a new deployment for a target that has an existing deployment, you replace the previous deployment. IoT Greengrass applies the new deployment to the target devices. Every deployment has a revision number that indicates how many deployment revisions you define for a target. Use this operation to create a new revision of an existing deployment. For more information, see the Create deployments in the IoT Greengrass V2 Developer Guide.

```sql
INSERT INTO aws.greengrassv2.deployments (
targetArn,
deploymentName,
components,
iotJobConfiguration,
deploymentPolicies,
parentTargetArn,
tags,
clientToken,
region
)
SELECT 
'{{ targetArn }}' /* required */,
'{{ deploymentName }}',
'{{ components }}',
'{{ iotJobConfiguration }}',
'{{ deploymentPolicies }}',
'{{ parentTargetArn }}',
'{{ tags }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
deployment_id,
iot_job_arn,
iot_job_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: deployments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the deployments resource.
    - name: targetArn
      value: "{{ targetArn }}"
    - name: deploymentName
      value: "{{ deploymentName }}"
    - name: components
      value: "{{ components }}"
    - name: iotJobConfiguration
      description: |
        Contains information about an IoT job configuration.
      value:
        jobExecutionsRolloutConfig:
          exponentialRate:
            baseRatePerMinute: {{ baseRatePerMinute }}
            incrementFactor: {{ incrementFactor }}
            rateIncreaseCriteria:
              numberOfNotifiedThings: {{ numberOfNotifiedThings }}
              numberOfSucceededThings: {{ numberOfSucceededThings }}
          maximumPerMinute: {{ maximumPerMinute }}
        abortConfig:
          criteriaList:
            - failureType: "{{ failureType }}"
              action: "{{ action }}"
              thresholdPercentage: {{ thresholdPercentage }}
              minNumberOfExecutedThings: {{ minNumberOfExecutedThings }}
        timeoutConfig:
          inProgressTimeoutInMinutes: {{ inProgressTimeoutInMinutes }}
    - name: deploymentPolicies
      description: |
        Contains information about policies that define how a deployment updates components and handles failure.
      value:
        failureHandlingPolicy: "{{ failureHandlingPolicy }}"
        componentUpdatePolicy:
          timeoutInSeconds: {{ timeoutInSeconds }}
          action: "{{ action }}"
        configurationValidationPolicy:
          timeoutInSeconds: {{ timeoutInSeconds }}
    - name: parentTargetArn
      value: "{{ parentTargetArn }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_deployment"
    values={[
        { label: 'delete_deployment', value: 'delete_deployment' }
    ]}
>
<TabItem value="delete_deployment">

Deletes a deployment. To delete an active deployment, you must first cancel it. For more information, see CancelDeployment. Deleting a deployment doesn't affect core devices that run that deployment, because core devices store the deployment's configuration on the device. Additionally, core devices can roll back to a previous deployment that has been deleted.

```sql
DELETE FROM aws.greengrassv2.deployments
WHERE deployment_id = '{{ deployment_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_deployment"
    values={[
        { label: 'cancel_deployment', value: 'cancel_deployment' }
    ]}
>
<TabItem value="cancel_deployment">

Cancels a deployment. This operation cancels the deployment for devices that haven't yet received it. If a device already received the deployment, this operation doesn't change anything for that device.

```sql
EXEC aws.greengrassv2.deployments.cancel_deployment 
@deployment_id='{{ deployment_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
