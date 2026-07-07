--- 
title: deployment_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - deployment_groups
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

Creates, updates, deletes, gets or lists a <code>deployment_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployment_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codedeploy.deployment_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_deployment_groups"
    values={[
        { label: 'batch_get_deployment_groups', value: 'batch_get_deployment_groups' },
        { label: 'get_deployment_group', value: 'get_deployment_group' },
        { label: 'list_deployment_groups', value: 'list_deployment_groups' }
    ]}
>
<TabItem value="batch_get_deployment_groups">

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
    <td><CopyableCode code="deploymentGroupsInfo" /></td>
    <td><code>array</code></td>
    <td>Information about the deployment groups.</td>
</tr>
<tr>
    <td><CopyableCode code="errorMessage" /></td>
    <td><code>string</code></td>
    <td>Information about errors that might have occurred during the API call.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_deployment_group">

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
    <td><CopyableCode code="alarmConfiguration" /></td>
    <td><code>object</code></td>
    <td>A list of alarms associated with the deployment group.</td>
</tr>
<tr>
    <td><CopyableCode code="applicationName" /></td>
    <td><code>string</code></td>
    <td>The application name.</td>
</tr>
<tr>
    <td><CopyableCode code="autoRollbackConfiguration" /></td>
    <td><code>object</code></td>
    <td>Information about the automatic rollback configuration associated with the deployment group.</td>
</tr>
<tr>
    <td><CopyableCode code="autoScalingGroups" /></td>
    <td><code>array</code></td>
    <td>A list of associated Auto Scaling groups.</td>
</tr>
<tr>
    <td><CopyableCode code="blueGreenDeploymentConfiguration" /></td>
    <td><code>object</code></td>
    <td>Information about blue/green deployment options for a deployment group.</td>
</tr>
<tr>
    <td><CopyableCode code="computePlatform" /></td>
    <td><code>string</code></td>
    <td>The destination platform type for the deployment (Lambda, Server, or ECS). (Server, Lambda, ECS)</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentConfigName" /></td>
    <td><code>string</code></td>
    <td>The deployment configuration name.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentGroupId" /></td>
    <td><code>string</code></td>
    <td>The deployment group ID.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentGroupName" /></td>
    <td><code>string</code></td>
    <td>The deployment group name.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentStyle" /></td>
    <td><code>object</code></td>
    <td>Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="ec2TagFilters" /></td>
    <td><code>array</code></td>
    <td>The Amazon EC2 tags on which to filter. The deployment group includes EC2 instances with any of the specified tags.</td>
</tr>
<tr>
    <td><CopyableCode code="ec2TagSet" /></td>
    <td><code>object</code></td>
    <td>Information about groups of tags applied to an Amazon EC2 instance. The deployment group includes only Amazon EC2 instances identified by all of the tag groups. Cannot be used in the same call as ec2TagFilters.</td>
</tr>
<tr>
    <td><CopyableCode code="ecsServices" /></td>
    <td><code>array</code></td>
    <td>The target Amazon ECS services in the deployment group. This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format <code>&lt;clustername&gt;</code>:<code>&lt;servicename&gt;</code>.</td>
</tr>
<tr>
    <td><CopyableCode code="lastAttemptedDeployment" /></td>
    <td><code>object</code></td>
    <td>Information about the most recent attempted deployment to the deployment group.</td>
</tr>
<tr>
    <td><CopyableCode code="lastSuccessfulDeployment" /></td>
    <td><code>object</code></td>
    <td>Information about the most recent successful deployment to the deployment group.</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancerInfo" /></td>
    <td><code>object</code></td>
    <td>Information about the load balancer to use in a deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="onPremisesInstanceTagFilters" /></td>
    <td><code>array</code></td>
    <td>The on-premises instance tags on which to filter. The deployment group includes on-premises instances with any of the specified tags.</td>
</tr>
<tr>
    <td><CopyableCode code="onPremisesTagSet" /></td>
    <td><code>object</code></td>
    <td>Information about groups of tags applied to an on-premises instance. The deployment group includes only on-premises instances identified by all the tag groups. Cannot be used in the same call as onPremisesInstanceTagFilters.</td>
</tr>
<tr>
    <td><CopyableCode code="outdatedInstancesStrategy" /></td>
    <td><code>string</code></td>
    <td>Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision. If this option is set to UPDATE or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances. If this option is set to IGNORE, CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions. (UPDATE, IGNORE)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceRoleArn" /></td>
    <td><code>string</code></td>
    <td>A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to Amazon Web Services services on your behalf. For more information, see Create a Service Role for CodeDeploy in the CodeDeploy User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="targetRevision" /></td>
    <td><code>object</code></td>
    <td>Information about the location of an application revision.</td>
</tr>
<tr>
    <td><CopyableCode code="terminationHookEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the deployment group was configured to have CodeDeploy install a termination hook into an Auto Scaling group. For more information about the termination hook, see How Amazon EC2 Auto Scaling works with CodeDeploy in the CodeDeploy User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="triggerConfigurations" /></td>
    <td><code>array</code></td>
    <td>Information about triggers associated with the deployment group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_deployment_groups">

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
    <td><CopyableCode code="deployment_group" /></td>
    <td><code>string</code></td>
    <td>A list of deployment group names.</td>
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
    <td><a href="#batch_get_deployment_groups"><CopyableCode code="batch_get_deployment_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about one or more deployment groups.</td>
</tr>
<tr>
    <td><a href="#get_deployment_group"><CopyableCode code="get_deployment_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a deployment group.</td>
</tr>
<tr>
    <td><a href="#list_deployment_groups"><CopyableCode code="list_deployment_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the deployment groups for an application registered with the Amazon Web Services user or Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_deployment_group"><CopyableCode code="create_deployment_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-applicationName"><code>applicationName</code></a>, <a href="#parameter-deploymentGroupName"><code>deploymentGroupName</code></a>, <a href="#parameter-serviceRoleArn"><code>serviceRoleArn</code></a></td>
    <td></td>
    <td>Creates a deployment group to which application revisions are deployed.</td>
</tr>
<tr>
    <td><a href="#update_deployment_group"><CopyableCode code="update_deployment_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-applicationName"><code>applicationName</code></a>, <a href="#parameter-currentDeploymentGroupName"><code>currentDeploymentGroupName</code></a></td>
    <td></td>
    <td>Changes information about a deployment group.</td>
</tr>
<tr>
    <td><a href="#delete_deployment_group"><CopyableCode code="delete_deployment_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a deployment group.</td>
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
    defaultValue="batch_get_deployment_groups"
    values={[
        { label: 'batch_get_deployment_groups', value: 'batch_get_deployment_groups' },
        { label: 'get_deployment_group', value: 'get_deployment_group' },
        { label: 'list_deployment_groups', value: 'list_deployment_groups' }
    ]}
>
<TabItem value="batch_get_deployment_groups">

Gets information about one or more deployment groups.

```sql
SELECT
deploymentGroupsInfo,
errorMessage
FROM aws.codedeploy.deployment_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_deployment_group">

Gets information about a deployment group.

```sql
SELECT
alarmConfiguration,
applicationName,
autoRollbackConfiguration,
autoScalingGroups,
blueGreenDeploymentConfiguration,
computePlatform,
deploymentConfigName,
deploymentGroupId,
deploymentGroupName,
deploymentStyle,
ec2TagFilters,
ec2TagSet,
ecsServices,
lastAttemptedDeployment,
lastSuccessfulDeployment,
loadBalancerInfo,
onPremisesInstanceTagFilters,
onPremisesTagSet,
outdatedInstancesStrategy,
serviceRoleArn,
targetRevision,
terminationHookEnabled,
triggerConfigurations
FROM aws.codedeploy.deployment_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_deployment_groups">

Lists the deployment groups for an application registered with the Amazon Web Services user or Amazon Web Services account.

```sql
SELECT
deployment_group
FROM aws.codedeploy.deployment_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_deployment_group"
    values={[
        { label: 'create_deployment_group', value: 'create_deployment_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_deployment_group">

Creates a deployment group to which application revisions are deployed.

```sql
INSERT INTO aws.codedeploy.deployment_groups (
applicationName,
deploymentGroupName,
deploymentConfigName,
ec2TagFilters,
onPremisesInstanceTagFilters,
autoScalingGroups,
serviceRoleArn,
triggerConfigurations,
alarmConfiguration,
autoRollbackConfiguration,
outdatedInstancesStrategy,
deploymentStyle,
blueGreenDeploymentConfiguration,
loadBalancerInfo,
ec2TagSet,
ecsServices,
onPremisesTagSet,
tags,
terminationHookEnabled,
region
)
SELECT 
'{{ applicationName }}' /* required */,
'{{ deploymentGroupName }}' /* required */,
'{{ deploymentConfigName }}',
'{{ ec2TagFilters }}',
'{{ onPremisesInstanceTagFilters }}',
'{{ autoScalingGroups }}',
'{{ serviceRoleArn }}' /* required */,
'{{ triggerConfigurations }}',
'{{ alarmConfiguration }}',
'{{ autoRollbackConfiguration }}',
'{{ outdatedInstancesStrategy }}',
'{{ deploymentStyle }}',
'{{ blueGreenDeploymentConfiguration }}',
'{{ loadBalancerInfo }}',
'{{ ec2TagSet }}',
'{{ ecsServices }}',
'{{ onPremisesTagSet }}',
'{{ tags }}',
{{ terminationHookEnabled }},
'{{ region }}'
RETURNING
deploymentGroupId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: deployment_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the deployment_groups resource.
    - name: applicationName
      value: "{{ applicationName }}"
      description: |
        The name of an CodeDeploy application associated with the user or Amazon Web Services account.
    - name: deploymentGroupName
      value: "{{ deploymentGroupName }}"
      description: |
        The name of a new deployment group for the specified application.
    - name: deploymentConfigName
      value: "{{ deploymentConfigName }}"
      description: |
        If specified, the deployment configuration name can be either one of the predefined configurations provided with CodeDeploy or a custom deployment configuration that you create by calling the create deployment configuration operation. CodeDeployDefault.OneAtATime is the default deployment configuration. It is used if a configuration isn't specified for the deployment or deployment group. For more information about the predefined deployment configurations in CodeDeploy, see Working with Deployment Configurations in CodeDeploy in the CodeDeploy User Guide.
    - name: ec2TagFilters
      description: |
        The Amazon EC2 tags on which to filter. The deployment group includes Amazon EC2 instances with any of the specified tags. Cannot be used in the same call as ec2TagSet.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
          Type: "{{ Type }}"
    - name: onPremisesInstanceTagFilters
      description: |
        The on-premises instance tags on which to filter. The deployment group includes on-premises instances with any of the specified tags. Cannot be used in the same call as OnPremisesTagSet.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
          Type: "{{ Type }}"
    - name: autoScalingGroups
      value:
        - "{{ autoScalingGroups }}"
      description: |
        A list of associated Amazon EC2 Auto Scaling groups.
    - name: serviceRoleArn
      value: "{{ serviceRoleArn }}"
      description: |
        A service role Amazon Resource Name (ARN) that allows CodeDeploy to act on the user's behalf when interacting with Amazon Web Services services.
    - name: triggerConfigurations
      description: |
        Information about triggers to create when the deployment group is created. For examples, see Create a Trigger for an CodeDeploy Event in the CodeDeploy User Guide.
      value:
        - triggerName: "{{ triggerName }}"
          triggerTargetArn: "{{ triggerTargetArn }}"
          triggerEvents: "{{ triggerEvents }}"
    - name: alarmConfiguration
      description: |
        Information about alarms associated with a deployment or deployment group.
      value:
        enabled: {{ enabled }}
        ignorePollAlarmFailure: {{ ignorePollAlarmFailure }}
        alarms:
          - name: "{{ name }}"
    - name: autoRollbackConfiguration
      description: |
        Configuration information for an automatic rollback that is added when a deployment group is created.
      value:
        enabled: {{ enabled }}
        events:
          - "{{ events }}"
    - name: outdatedInstancesStrategy
      value: "{{ outdatedInstancesStrategy }}"
      description: |
        Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision. If this option is set to UPDATE or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances. If this option is set to IGNORE, CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions.
      valid_values: ['UPDATE', 'IGNORE']
    - name: deploymentStyle
      description: |
        Information about the type of deployment, in-place or blue/green, that you want to run and whether to route deployment traffic behind a load balancer.
      value:
        deploymentType: "{{ deploymentType }}"
        deploymentOption: "{{ deploymentOption }}"
    - name: blueGreenDeploymentConfiguration
      description: |
        Information about blue/green deployment options for a deployment group.
      value:
        terminateBlueInstancesOnDeploymentSuccess:
          action: "{{ action }}"
          terminationWaitTimeInMinutes: {{ terminationWaitTimeInMinutes }}
        deploymentReadyOption:
          actionOnTimeout: "{{ actionOnTimeout }}"
          waitTimeInMinutes: {{ waitTimeInMinutes }}
        greenFleetProvisioningOption:
          action: "{{ action }}"
    - name: loadBalancerInfo
      description: |
        Information about the load balancer used in a deployment.
      value:
        elbInfoList:
          - name: "{{ name }}"
        targetGroupInfoList:
          - name: "{{ name }}"
        targetGroupPairInfoList:
          - targetGroups: "{{ targetGroups }}"
            prodTrafficRoute:
              listenerArns:
                - "{{ listenerArns }}"
            testTrafficRoute:
              listenerArns:
                - "{{ listenerArns }}"
    - name: ec2TagSet
      description: |
        Information about groups of tags applied to Amazon EC2 instances. The deployment group includes only Amazon EC2 instances identified by all the tag groups. Cannot be used in the same call as ec2TagFilters.
      value:
        ec2TagSetList:
          - "{{ ec2TagSetList }}"
    - name: ecsServices
      description: |
        The target Amazon ECS services in the deployment group. This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format \`<clustername>\`:\`<servicename>\`.
      value:
        - serviceName: "{{ serviceName }}"
          clusterName: "{{ clusterName }}"
    - name: onPremisesTagSet
      description: |
        Information about groups of tags applied to on-premises instances. The deployment group includes only on-premises instances identified by all of the tag groups. Cannot be used in the same call as onPremisesInstanceTagFilters.
      value:
        onPremisesTagSetList:
          - "{{ onPremisesTagSetList }}"
    - name: tags
      description: |
        The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them. Each tag consists of a key and an optional value, both of which you define.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: terminationHookEnabled
      value: {{ terminationHookEnabled }}
      description: |
        This parameter only applies if you are using CodeDeploy with Amazon EC2 Auto Scaling. For more information, see Integrating CodeDeploy with Amazon EC2 Auto Scaling in the CodeDeploy User Guide. Set terminationHookEnabled to true to have CodeDeploy install a termination hook into your Auto Scaling group when you create a deployment group. When this hook is installed, CodeDeploy will perform termination deployments. For information about termination deployments, see Enabling termination deployments during Auto Scaling scale-in events in the CodeDeploy User Guide. For more information about Auto Scaling scale-in events, see the Scale in topic in the Amazon EC2 Auto Scaling User Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_deployment_group"
    values={[
        { label: 'update_deployment_group', value: 'update_deployment_group' }
    ]}
>
<TabItem value="update_deployment_group">

Changes information about a deployment group.

```sql
UPDATE aws.codedeploy.deployment_groups
SET 
applicationName = '{{ applicationName }}',
currentDeploymentGroupName = '{{ currentDeploymentGroupName }}',
newDeploymentGroupName = '{{ newDeploymentGroupName }}',
deploymentConfigName = '{{ deploymentConfigName }}',
ec2TagFilters = '{{ ec2TagFilters }}',
onPremisesInstanceTagFilters = '{{ onPremisesInstanceTagFilters }}',
autoScalingGroups = '{{ autoScalingGroups }}',
serviceRoleArn = '{{ serviceRoleArn }}',
triggerConfigurations = '{{ triggerConfigurations }}',
alarmConfiguration = '{{ alarmConfiguration }}',
autoRollbackConfiguration = '{{ autoRollbackConfiguration }}',
outdatedInstancesStrategy = '{{ outdatedInstancesStrategy }}',
deploymentStyle = '{{ deploymentStyle }}',
blueGreenDeploymentConfiguration = '{{ blueGreenDeploymentConfiguration }}',
loadBalancerInfo = '{{ loadBalancerInfo }}',
ec2TagSet = '{{ ec2TagSet }}',
ecsServices = '{{ ecsServices }}',
onPremisesTagSet = '{{ onPremisesTagSet }}',
terminationHookEnabled = {{ terminationHookEnabled }}
WHERE 
region = '{{ region }}' --required
AND applicationName = '{{ applicationName }}' --required
AND currentDeploymentGroupName = '{{ currentDeploymentGroupName }}' --required
RETURNING
hooksNotCleanedUp;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_deployment_group"
    values={[
        { label: 'delete_deployment_group', value: 'delete_deployment_group' }
    ]}
>
<TabItem value="delete_deployment_group">

Deletes a deployment group.

```sql
DELETE FROM aws.codedeploy.deployment_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
