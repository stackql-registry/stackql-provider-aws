--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
  - appconfig
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appconfig.deployments" /></td></tr>
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
    <td><CopyableCode code="ApplicationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the application that was deployed. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AppliedExtensions" /></td>
    <td><code>array</code></td>
    <td>A list of extensions that were processed as part of the deployment. The extensions that were previously associated to the configuration profile, environment, or the application when StartDeployment was called.</td>
</tr>
<tr>
    <td><CopyableCode code="CompletedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the deployment completed.</td>
</tr>
<tr>
    <td><CopyableCode code="ConfigurationLocationUri" /></td>
    <td><code>string</code></td>
    <td>Information about the source location of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="ConfigurationName" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="ConfigurationProfileId" /></td>
    <td><code>string</code></td>
    <td>The ID of the configuration profile that was deployed. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ConfigurationVersion" /></td>
    <td><code>string</code></td>
    <td>The configuration version that was deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentDurationInMinutes" /></td>
    <td><code>integer</code></td>
    <td>Total amount of time the deployment lasted.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentNumber" /></td>
    <td><code>integer</code></td>
    <td>The sequence number of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentStrategyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the deployment strategy that was deployed. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="EnvironmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment that was deployed. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EventLog" /></td>
    <td><code>array</code></td>
    <td>A list containing all events related to a deployment. The most recent events are displayed first.</td>
</tr>
<tr>
    <td><CopyableCode code="FinalBakeTimeInMinutes" /></td>
    <td><code>integer</code></td>
    <td>The amount of time that AppConfig monitored for alarms before considering the deployment to be complete and no longer eligible for automatic rollback.</td>
</tr>
<tr>
    <td><CopyableCode code="GrowthFactor" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of targets to receive a deployed configuration during each interval.</td>
</tr>
<tr>
    <td><CopyableCode code="GrowthType" /></td>
    <td><code>string</code></td>
    <td>The algorithm used to define how percentage grew over time. (LINEAR, EXPONENTIAL)</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name of the Key Management Service key used to encrypt configuration data. You can encrypt secrets stored in Secrets Manager, Amazon Simple Storage Service (Amazon S3) objects encrypted with SSE-KMS, or secure string parameters stored in Amazon Web Services Systems Manager Parameter Store. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:&#91;a-z&#93;+:((eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;)?:(\d&#123;12&#125;)?:&#91;a-zA-Z0-9-_/:.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyIdentifier" /></td>
    <td><code>string</code></td>
    <td>The Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.</td>
</tr>
<tr>
    <td><CopyableCode code="PercentageComplete" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of targets for which the deployment is available.</td>
</tr>
<tr>
    <td><CopyableCode code="StartedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the deployment started.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the deployment. (BAKING, VALIDATING, DEPLOYING, COMPLETE, ROLLING_BACK, ROLLED_BACK, REVERTED)</td>
</tr>
<tr>
    <td><CopyableCode code="VersionLabel" /></td>
    <td><code>string</code></td>
    <td>A user-defined label for an AppConfig hosted configuration version. (pattern: &lt;code&gt;.*&#91;^0-9&#93;.*&lt;/code&gt;)</td>
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
    <td><CopyableCode code="CompletedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time the deployment completed.</td>
</tr>
<tr>
    <td><CopyableCode code="ConfigurationName" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="ConfigurationVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentDurationInMinutes" /></td>
    <td><code>integer</code></td>
    <td>Total amount of time the deployment lasted.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentNumber" /></td>
    <td><code>integer</code></td>
    <td>The sequence number of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="FinalBakeTimeInMinutes" /></td>
    <td><code>integer</code></td>
    <td>The amount of time that AppConfig monitors for alarms before considering the deployment to be complete and no longer eligible for automatic rollback.</td>
</tr>
<tr>
    <td><CopyableCode code="GrowthFactor" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of targets to receive a deployed configuration during each interval.</td>
</tr>
<tr>
    <td><CopyableCode code="GrowthType" /></td>
    <td><code>string</code></td>
    <td>The algorithm used to define how percentage grows over time. (LINEAR, EXPONENTIAL)</td>
</tr>
<tr>
    <td><CopyableCode code="PercentageComplete" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of targets for which the deployment is available.</td>
</tr>
<tr>
    <td><CopyableCode code="StartedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time the deployment started.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the deployment. (BAKING, VALIDATING, DEPLOYING, COMPLETE, ROLLING_BACK, ROLLED_BACK, REVERTED)</td>
</tr>
<tr>
    <td><CopyableCode code="VersionLabel" /></td>
    <td><code>string</code></td>
    <td>A user-defined label for an AppConfig hosted configuration version. (pattern: &lt;code&gt;.*&#91;^0-9&#93;.*&lt;/code&gt;)</td>
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
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-deployment_number"><code>deployment_number</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a configuration deployment.</td>
</tr>
<tr>
    <td><a href="#list_deployments"><CopyableCode code="list_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-next_token"><code>next_token</code></a></td>
    <td>Lists the deployments for an environment in descending deployment number order.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The application ID.</td>
</tr>
<tr id="parameter-deployment_number">
    <td><CopyableCode code="deployment_number" /></td>
    <td><code>integer</code></td>
    <td>The sequence number of the deployment.</td>
</tr>
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The environment ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max_results">
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items that may be returned for this call. If there are items that have not yet been returned, the response will include a non-null NextToken that you can provide in a subsequent call to get the next set of results.</td>
</tr>
<tr id="parameter-next_token">
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token returned by a prior call to this operation indicating the next set of results to be returned. If not specified, the operation will return the first set of results.</td>
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

Retrieves information about a configuration deployment.

```sql
SELECT
ApplicationId,
AppliedExtensions,
CompletedAt,
ConfigurationLocationUri,
ConfigurationName,
ConfigurationProfileId,
ConfigurationVersion,
DeploymentDurationInMinutes,
DeploymentNumber,
DeploymentStrategyId,
Description,
EnvironmentId,
EventLog,
FinalBakeTimeInMinutes,
GrowthFactor,
GrowthType,
KmsKeyArn,
KmsKeyIdentifier,
PercentageComplete,
StartedAt,
State,
VersionLabel
FROM aws.appconfig.deployments
WHERE application_id = '{{ application_id }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND deployment_number = '{{ deployment_number }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_deployments">

Lists the deployments for an environment in descending deployment number order.

```sql
SELECT
CompletedAt,
ConfigurationName,
ConfigurationVersion,
DeploymentDurationInMinutes,
DeploymentNumber,
FinalBakeTimeInMinutes,
GrowthFactor,
GrowthType,
PercentageComplete,
StartedAt,
State,
VersionLabel
FROM aws.appconfig.deployments
WHERE application_id = '{{ application_id }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND next_token = '{{ next_token }}'
;
```
</TabItem>
</Tabs>
