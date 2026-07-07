--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
  - codedeploy
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codedeploy.deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_deployments"
    values={[
        { label: 'batch_get_deployments', value: 'batch_get_deployments' },
        { label: 'get_deployment', value: 'get_deployment' },
        { label: 'list_deployments', value: 'list_deployments' }
    ]}
>
<TabItem value="batch_get_deployments">

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
    <td><CopyableCode code="deploymentsInfo" /></td>
    <td><code>array</code></td>
    <td>Information about the deployments.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="additionalDeploymentStatusInfo" /></td>
    <td><code>string</code></td>
    <td>Provides information about the results of a deployment, such as whether instances in the original environment in a blue/green deployment were not terminated.</td>
</tr>
<tr>
    <td><CopyableCode code="applicationName" /></td>
    <td><code>string</code></td>
    <td>The application name.</td>
</tr>
<tr>
    <td><CopyableCode code="autoRollbackConfiguration" /></td>
    <td><code>object</code></td>
    <td>Information about the automatic rollback configuration associated with the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="blueGreenDeploymentConfiguration" /></td>
    <td><code>object</code></td>
    <td>Information about blue/green deployment options for this deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="completeTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the deployment was complete.</td>
</tr>
<tr>
    <td><CopyableCode code="computePlatform" /></td>
    <td><code>string</code></td>
    <td>The destination platform type for the deployment (Lambda, Server, or ECS). (Server, Lambda, ECS)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the deployment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>The means by which the deployment was created: user: A user created the deployment. autoscaling: Amazon EC2 Auto Scaling created the deployment. codeDeployRollback: A rollback process created the deployment. CodeDeployAutoUpdate: An auto-update process created the deployment when it detected outdated Amazon EC2 instances. (user, autoscaling, codeDeployRollback, CodeDeploy, CodeDeployAutoUpdate, CloudFormation, CloudFormationRollback, autoscalingTermination)</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentConfigName" /></td>
    <td><code>string</code></td>
    <td>The deployment configuration name.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentGroupName" /></td>
    <td><code>string</code></td>
    <td>The deployment group name.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of a deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentOverview" /></td>
    <td><code>object</code></td>
    <td>A summary of the deployment status of the instances in the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentStatusMessages" /></td>
    <td><code>array</code></td>
    <td>Messages that contain information about the status of a deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentStyle" /></td>
    <td><code>object</code></td>
    <td>Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A comment about the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="errorInformation" /></td>
    <td><code>object</code></td>
    <td>Information about any error associated with this deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="externalId" /></td>
    <td><code>string</code></td>
    <td>The unique ID for an external resource (for example, a CloudFormation stack ID) that is linked to this deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="fileExistsBehavior" /></td>
    <td><code>string</code></td>
    <td>Information about how CodeDeploy handles files that already exist in a deployment target location but weren't part of the previous successful deployment. DISALLOW: The deployment fails. This is also the default behavior if no option is specified. OVERWRITE: The version of the file from the application revision currently being deployed replaces the version already on the instance. RETAIN: The version of the file already on the instance is kept and used as part of the new deployment. (DISALLOW, OVERWRITE, RETAIN)</td>
</tr>
<tr>
    <td><CopyableCode code="ignoreApplicationStopFailures" /></td>
    <td><code>boolean</code></td>
    <td>If true, then if an ApplicationStop, BeforeBlockTraffic, or AfterBlockTraffic deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event. For example, if ApplicationStop fails, the deployment continues with DownloadBundle. If BeforeBlockTraffic fails, the deployment continues with BlockTraffic. If AfterBlockTraffic fails, the deployment continues with ApplicationStop. If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted. During a deployment, the CodeDeploy agent runs the scripts specified for ApplicationStop, BeforeBlockTraffic, and AfterBlockTraffic in the AppSpec file from the previous successful deployment. (All other scripts are run from the AppSpec file in the current deployment.) If one of these scripts contains an error and does not run successfully, the deployment can fail. If the cause of the failure is a script from the last successful deployment that will never run successfully, create a new deployment and use ignoreApplicationStopFailures to specify that the ApplicationStop, BeforeBlockTraffic, and AfterBlockTraffic failures should be ignored.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceTerminationWaitTimeStarted" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the wait period set for the termination of instances in the original environment has started. Status is 'false' if the KEEP_ALIVE option is specified. Otherwise, 'true' as soon as the termination wait period starts.</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancerInfo" /></td>
    <td><code>object</code></td>
    <td>Information about the load balancer used in the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="overrideAlarmConfiguration" /></td>
    <td><code>object</code></td>
    <td>Information about alarms associated with a deployment or deployment group.</td>
</tr>
<tr>
    <td><CopyableCode code="previousRevision" /></td>
    <td><code>object</code></td>
    <td>Information about the location of an application revision.</td>
</tr>
<tr>
    <td><CopyableCode code="relatedDeployments" /></td>
    <td><code>object</code></td>
    <td>Information about deployments related to the specified deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>object</code></td>
    <td>Information about the location of an application revision.</td>
</tr>
<tr>
    <td><CopyableCode code="rollbackInfo" /></td>
    <td><code>object</code></td>
    <td>Information about a deployment rollback.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the deployment was deployed to the deployment group. In some cases, the reported value of the start time might be later than the complete time. This is due to differences in the clock settings of backend servers that participate in the deployment process.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current state of the deployment as a whole. (Created, Queued, InProgress, Baking, Succeeded, Failed, Stopped, Ready)</td>
</tr>
<tr>
    <td><CopyableCode code="targetInstances" /></td>
    <td><code>object</code></td>
    <td>Information about the instances that belong to the replacement environment in a blue/green deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="updateOutdatedInstancesOnly" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether only instances that are not running the latest application revision are to be deployed to.</td>
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
    <td><CopyableCode code="deployment" /></td>
    <td><code>string</code></td>
    <td>A list of deployment IDs.</td>
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
    <td><a href="#batch_get_deployments"><CopyableCode code="batch_get_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.</td>
</tr>
<tr>
    <td><a href="#get_deployment"><CopyableCode code="get_deployment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a deployment. The content property of the appSpecContent object in the returned revision is always null. Use GetApplicationRevision and the sha256 property of the returned appSpecContent object to get the content of the deployment’s AppSpec file.</td>
</tr>
<tr>
    <td><a href="#list_deployments"><CopyableCode code="list_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the deployments in a deployment group for an application registered with the user or Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_deployment"><CopyableCode code="create_deployment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-applicationName"><code>applicationName</code></a></td>
    <td></td>
    <td>Deploys an application revision through the specified deployment group.</td>
</tr>
<tr>
    <td><a href="#stop_deployment"><CopyableCode code="stop_deployment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-deploymentId"><code>deploymentId</code></a></td>
    <td></td>
    <td>Attempts to stop an ongoing deployment.</td>
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
    defaultValue="batch_get_deployments"
    values={[
        { label: 'batch_get_deployments', value: 'batch_get_deployments' },
        { label: 'get_deployment', value: 'get_deployment' },
        { label: 'list_deployments', value: 'list_deployments' }
    ]}
>
<TabItem value="batch_get_deployments">

Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.

```sql
SELECT
deploymentsInfo
FROM aws.codedeploy.deployments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_deployment">

Gets information about a deployment. The content property of the appSpecContent object in the returned revision is always null. Use GetApplicationRevision and the sha256 property of the returned appSpecContent object to get the content of the deployment’s AppSpec file.

```sql
SELECT
additionalDeploymentStatusInfo,
applicationName,
autoRollbackConfiguration,
blueGreenDeploymentConfiguration,
completeTime,
computePlatform,
createTime,
creator,
deploymentConfigName,
deploymentGroupName,
deploymentId,
deploymentOverview,
deploymentStatusMessages,
deploymentStyle,
description,
errorInformation,
externalId,
fileExistsBehavior,
ignoreApplicationStopFailures,
instanceTerminationWaitTimeStarted,
loadBalancerInfo,
overrideAlarmConfiguration,
previousRevision,
relatedDeployments,
revision,
rollbackInfo,
startTime,
status,
targetInstances,
updateOutdatedInstancesOnly
FROM aws.codedeploy.deployments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_deployments">

Lists the deployments in a deployment group for an application registered with the user or Amazon Web Services account.

```sql
SELECT
deployment
FROM aws.codedeploy.deployments
WHERE region = '{{ region }}' -- required
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

Deploys an application revision through the specified deployment group.

```sql
INSERT INTO aws.codedeploy.deployments (
applicationName,
deploymentGroupName,
revision,
deploymentConfigName,
description,
ignoreApplicationStopFailures,
targetInstances,
autoRollbackConfiguration,
updateOutdatedInstancesOnly,
fileExistsBehavior,
overrideAlarmConfiguration,
region
)
SELECT 
'{{ applicationName }}' /* required */,
'{{ deploymentGroupName }}',
'{{ revision }}',
'{{ deploymentConfigName }}',
'{{ description }}',
{{ ignoreApplicationStopFailures }},
'{{ targetInstances }}',
'{{ autoRollbackConfiguration }}',
{{ updateOutdatedInstancesOnly }},
'{{ fileExistsBehavior }}',
'{{ overrideAlarmConfiguration }}',
'{{ region }}'
RETURNING
deploymentId
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
    - name: applicationName
      value: "{{ applicationName }}"
      description: |
        The name of an CodeDeploy application associated with the user or Amazon Web Services account.
    - name: deploymentGroupName
      value: "{{ deploymentGroupName }}"
      description: |
        The name of the deployment group.
    - name: revision
      description: |
        Information about the location of an application revision.
      value:
        revisionType: "{{ revisionType }}"
        s3Location:
          bucket: "{{ bucket }}"
          key: "{{ key }}"
          bundleType: "{{ bundleType }}"
          version: "{{ version }}"
          eTag: "{{ eTag }}"
        gitHubLocation:
          repository: "{{ repository }}"
          commitId: "{{ commitId }}"
        string:
          content: "{{ content }}"
          sha256: "{{ sha256 }}"
        appSpecContent:
          content: "{{ content }}"
          sha256: "{{ sha256 }}"
    - name: deploymentConfigName
      value: "{{ deploymentConfigName }}"
      description: |
        The name of a deployment configuration associated with the user or Amazon Web Services account. If not specified, the value configured in the deployment group is used as the default. If the deployment group does not have a deployment configuration associated with it, CodeDeployDefault.OneAtATime is used by default.
    - name: description
      value: "{{ description }}"
      description: |
        A comment about the deployment.
    - name: ignoreApplicationStopFailures
      value: {{ ignoreApplicationStopFailures }}
      description: |
        If true, then if an ApplicationStop, BeforeBlockTraffic, or AfterBlockTraffic deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event. For example, if ApplicationStop fails, the deployment continues with DownloadBundle. If BeforeBlockTraffic fails, the deployment continues with BlockTraffic. If AfterBlockTraffic fails, the deployment continues with ApplicationStop. If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted. During a deployment, the CodeDeploy agent runs the scripts specified for ApplicationStop, BeforeBlockTraffic, and AfterBlockTraffic in the AppSpec file from the previous successful deployment. (All other scripts are run from the AppSpec file in the current deployment.) If one of these scripts contains an error and does not run successfully, the deployment can fail. If the cause of the failure is a script from the last successful deployment that will never run successfully, create a new deployment and use ignoreApplicationStopFailures to specify that the ApplicationStop, BeforeBlockTraffic, and AfterBlockTraffic failures should be ignored.
    - name: targetInstances
      description: |
        Information about the instances that belong to the replacement environment in a blue/green deployment.
      value:
        tagFilters:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
            Type: "{{ Type }}"
        autoScalingGroups:
          - "{{ autoScalingGroups }}"
        ec2TagSet:
          ec2TagSetList:
            - "{{ ec2TagSetList }}"
    - name: autoRollbackConfiguration
      description: |
        Configuration information for an automatic rollback that is added when a deployment is created.
      value:
        enabled: {{ enabled }}
        events:
          - "{{ events }}"
    - name: updateOutdatedInstancesOnly
      value: {{ updateOutdatedInstancesOnly }}
      description: |
        Indicates whether to deploy to all instances or only to instances that are not running the latest application revision.
    - name: fileExistsBehavior
      value: "{{ fileExistsBehavior }}"
      description: |
        Information about how CodeDeploy handles files that already exist in a deployment target location but weren't part of the previous successful deployment. The fileExistsBehavior parameter takes any of the following values: DISALLOW: The deployment fails. This is also the default behavior if no option is specified. OVERWRITE: The version of the file from the application revision currently being deployed replaces the version already on the instance. RETAIN: The version of the file already on the instance is kept and used as part of the new deployment.
      valid_values: ['DISALLOW', 'OVERWRITE', 'RETAIN']
    - name: overrideAlarmConfiguration
      description: |
        Information about alarms associated with a deployment or deployment group.
      value:
        enabled: {{ enabled }}
        ignorePollAlarmFailure: {{ ignorePollAlarmFailure }}
        alarms:
          - name: "{{ name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop_deployment"
    values={[
        { label: 'stop_deployment', value: 'stop_deployment' }
    ]}
>
<TabItem value="stop_deployment">

Attempts to stop an ongoing deployment.

```sql
EXEC aws.codedeploy.deployments.stop_deployment 
@region='{{ region }}' --required 
@@json=
'{
"deploymentId": "{{ deploymentId }}", 
"autoRollbackEnabled": {{ autoRollbackEnabled }}
}'
;
```
</TabItem>
</Tabs>
