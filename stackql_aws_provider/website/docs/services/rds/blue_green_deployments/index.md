--- 
title: blue_green_deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - blue_green_deployments
  - rds
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

Creates, updates, deletes, gets or lists a <code>blue_green_deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="blue_green_deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.blue_green_deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_blue_green_deployments"
    values={[
        { label: 'describe_blue_green_deployments', value: 'describe_blue_green_deployments' }
    ]}
>
<TabItem value="describe_blue_green_deployments">

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
    <td><CopyableCode code="BlueGreenDeploymentIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the blue/green deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="BlueGreenDeploymentName" /></td>
    <td><code>string</code></td>
    <td>The user-supplied name of the blue/green deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateTime" /></td>
    <td><code>string</code></td>
    <td>The time when the blue/green deployment was created, in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="DeleteTime" /></td>
    <td><code>string</code></td>
    <td>The time when the blue/green deployment was deleted, in Universal Coordinated Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>The source database for the blue/green deployment. Before switchover, the source database is the production database in the blue environment.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the blue/green deployment. Valid Values: PROVISIONING - Resources are being created in the green environment. AVAILABLE - Resources are available in the green environment. SWITCHOVER_IN_PROGRESS - The deployment is being switched from the blue environment to the green environment. SWITCHOVER_COMPLETED - Switchover from the blue environment to the green environment is complete. INVALID_CONFIGURATION - Resources in the green environment are invalid, so switchover isn't possible. SWITCHOVER_FAILED - Switchover was attempted but failed. DELETING - The blue/green deployment is being deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the blue/green deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="SwitchoverDetails" /></td>
    <td><code>string</code></td>
    <td>The details about each source and target resource in the blue/green deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="TagList" /></td>
    <td><code>string</code></td>
    <td>A list of tags. For more information, see Tagging Amazon RDS resources in the Amazon RDS User Guide or Tagging Amazon Aurora and Amazon RDS resources in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="Target" /></td>
    <td><code>string</code></td>
    <td>The target database for the blue/green deployment. Before switchover, the target database is the clone database in the green environment.</td>
</tr>
<tr>
    <td><CopyableCode code="Tasks" /></td>
    <td><code>string</code></td>
    <td>Either tasks to be performed or tasks that have been completed on the target database before switchover.</td>
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
    <td><a href="#describe_blue_green_deployments"><CopyableCode code="describe_blue_green_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-BlueGreenDeploymentIdentifier"><code>BlueGreenDeploymentIdentifier</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>Describes one or more blue/green deployments. For more information, see Using Amazon RDS Blue/Green Deployments for database updates in the Amazon RDS User Guide and Using Amazon RDS Blue/Green Deployments for database updates in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><a href="#create_blue_green_deployment"><CopyableCode code="create_blue_green_deployment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-BlueGreenDeploymentName"><code>BlueGreenDeploymentName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Source"><code>Source</code></a>, <a href="#parameter-TargetEngineVersion"><code>TargetEngineVersion</code></a>, <a href="#parameter-TargetDBParameterGroupName"><code>TargetDBParameterGroupName</code></a>, <a href="#parameter-TargetDBClusterParameterGroupName"><code>TargetDBClusterParameterGroupName</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-TargetDBInstanceClass"><code>TargetDBInstanceClass</code></a>, <a href="#parameter-UpgradeTargetStorageConfig"><code>UpgradeTargetStorageConfig</code></a>, <a href="#parameter-TargetIops"><code>TargetIops</code></a>, <a href="#parameter-TargetStorageType"><code>TargetStorageType</code></a>, <a href="#parameter-TargetAllocatedStorage"><code>TargetAllocatedStorage</code></a>, <a href="#parameter-TargetStorageThroughput"><code>TargetStorageThroughput</code></a></td>
    <td>Creates a blue/green deployment. A blue/green deployment creates a staging environment that copies the production environment. In a blue/green deployment, the blue environment is the current production environment. The green environment is the staging environment, and it stays in sync with the current production environment. You can make changes to the databases in the green environment without affecting production workloads. For example, you can upgrade the major or minor DB engine version, change database parameters, or make schema changes in the staging environment. You can thoroughly test changes in the green environment. When ready, you can switch over the environments to promote the green environment to be the new production environment. The switchover typically takes under a minute. For more information, see Using Amazon RDS Blue/Green Deployments for database updates in the Amazon RDS User Guide and Using Amazon RDS Blue/Green Deployments for database updates in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_blue_green_deployment"><CopyableCode code="delete_blue_green_deployment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-BlueGreenDeploymentIdentifier"><code>BlueGreenDeploymentIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DeleteTarget"><code>DeleteTarget</code></a></td>
    <td>Deletes a blue/green deployment. For more information, see Using Amazon RDS Blue/Green Deployments for database updates in the Amazon RDS User Guide and Using Amazon RDS Blue/Green Deployments for database updates in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><a href="#switchover_blue_green_deployment"><CopyableCode code="switchover_blue_green_deployment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-BlueGreenDeploymentIdentifier"><code>BlueGreenDeploymentIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SwitchoverTimeout"><code>SwitchoverTimeout</code></a></td>
    <td>Switches over a blue/green deployment. Before you switch over, production traffic is routed to the databases in the blue environment. After you switch over, production traffic is routed to the databases in the green environment. For more information, see Using Amazon RDS Blue/Green Deployments for database updates in the Amazon RDS User Guide and Using Amazon RDS Blue/Green Deployments for database updates in the Amazon Aurora User Guide.</td>
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
<tr id="parameter-BlueGreenDeploymentIdentifier">
    <td><CopyableCode code="BlueGreenDeploymentIdentifier" /></td>
    <td><code>string</code></td>
    <td>The resource ID of the blue/green deployment. Constraints: Must match an existing blue/green deployment resource ID.</td>
</tr>
<tr id="parameter-BlueGreenDeploymentName">
    <td><CopyableCode code="BlueGreenDeploymentName" /></td>
    <td><code>string</code></td>
    <td>The name of the blue/green deployment. Constraints: Can't be the same as an existing blue/green deployment name in the same account and Amazon Web Services Region.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-BlueGreenDeploymentIdentifier">
    <td><CopyableCode code="BlueGreenDeploymentIdentifier" /></td>
    <td><code>string</code></td>
    <td>The blue/green deployment identifier. If you specify this parameter, the response only includes information about the specific blue/green deployment. This parameter isn't case-sensitive. Constraints: Must match an existing blue/green deployment identifier.</td>
</tr>
<tr id="parameter-DeleteTarget">
    <td><CopyableCode code="DeleteTarget" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to delete the resources in the green environment. You can't specify this option if the blue/green deployment status is SWITCHOVER_COMPLETED.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more blue/green deployments to describe. Valid Values: blue-green-deployment-identifier - Accepts system-generated identifiers for blue/green deployments. The results list only includes information about the blue/green deployments with the specified identifiers. blue-green-deployment-name - Accepts user-supplied names for blue/green deployments. The results list only includes information about the blue/green deployments with the specified names. source - Accepts source databases for a blue/green deployment. The results list only includes information about the blue/green deployments with the specified source databases. target - Accepts target databases for a blue/green deployment. The results list only includes information about the blue/green deployments with the specified target databases.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeBlueGreenDeployments request. If you specify this parameter, the response only includes records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Must be a minimum of 20. Can't exceed 100.</td>
</tr>
<tr id="parameter-Source">
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the source production database. Specify the database that you want to clone. The blue/green deployment creates this database in the green environment. You can make updates to the database in the green environment, such as an engine version upgrade. When you are ready, you can switch the database in the green environment to be the production database.</td>
</tr>
<tr id="parameter-SwitchoverTimeout">
    <td><CopyableCode code="SwitchoverTimeout" /></td>
    <td><code>integer</code></td>
    <td>The amount of time, in seconds, for the switchover to complete. Default: 300 If the switchover takes longer than the specified duration, then any changes are rolled back, and no changes are made to the environments.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Tags to assign to the blue/green deployment.</td>
</tr>
<tr id="parameter-TargetAllocatedStorage">
    <td><CopyableCode code="TargetAllocatedStorage" /></td>
    <td><code>integer</code></td>
    <td>The amount of storage in gibibytes (GiB) to allocate for the green DB instance. You can choose to increase or decrease the allocated storage on the green DB instance. This setting doesn't apply to Amazon Aurora blue/green deployments.</td>
</tr>
<tr id="parameter-TargetDBClusterParameterGroupName">
    <td><CopyableCode code="TargetDBClusterParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The DB cluster parameter group associated with the Aurora DB cluster in the green environment. To test parameter changes, specify a DB cluster parameter group that is different from the one associated with the source DB cluster.</td>
</tr>
<tr id="parameter-TargetDBInstanceClass">
    <td><CopyableCode code="TargetDBInstanceClass" /></td>
    <td><code>string</code></td>
    <td>Specify the DB instance class for the databases in the green environment. This parameter only applies to RDS DB instances, because DB instances within an Aurora DB cluster can have multiple different instance classes. If you're creating a blue/green deployment from an Aurora DB cluster, don't specify this parameter. After the green environment is created, you can individually modify the instance classes of the DB instances within the green DB cluster.</td>
</tr>
<tr id="parameter-TargetDBParameterGroupName">
    <td><CopyableCode code="TargetDBParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The DB parameter group associated with the DB instance in the green environment. To test parameter changes, specify a DB parameter group that is different from the one associated with the source DB instance.</td>
</tr>
<tr id="parameter-TargetEngineVersion">
    <td><CopyableCode code="TargetEngineVersion" /></td>
    <td><code>string</code></td>
    <td>The engine version of the database in the green environment. Specify the engine version to upgrade to in the green environment.</td>
</tr>
<tr id="parameter-TargetIops">
    <td><CopyableCode code="TargetIops" /></td>
    <td><code>integer</code></td>
    <td>The amount of Provisioned IOPS (input/output operations per second) to allocate for the green DB instance. For information about valid IOPS values, see Amazon RDS DB instance storage in the Amazon RDS User Guide. This setting doesn't apply to Amazon Aurora blue/green deployments.</td>
</tr>
<tr id="parameter-TargetStorageThroughput">
    <td><CopyableCode code="TargetStorageThroughput" /></td>
    <td><code>integer</code></td>
    <td>The storage throughput value for the green DB instance. This setting applies only to the gp3 storage type. This setting doesn't apply to Amazon Aurora blue/green deployments.</td>
</tr>
<tr id="parameter-TargetStorageType">
    <td><CopyableCode code="TargetStorageType" /></td>
    <td><code>string</code></td>
    <td>The storage type to associate with the green DB instance. Valid Values: gp2 | gp3 | io1 | io2 This setting doesn't apply to Amazon Aurora blue/green deployments.</td>
</tr>
<tr id="parameter-UpgradeTargetStorageConfig">
    <td><CopyableCode code="UpgradeTargetStorageConfig" /></td>
    <td><code>boolean</code></td>
    <td>Whether to upgrade the storage file system configuration on the green database. This option migrates the green DB instance from the older 32-bit file system to the preferred configuration. For more information, see Upgrading the storage file system for a DB instance.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_blue_green_deployments"
    values={[
        { label: 'describe_blue_green_deployments', value: 'describe_blue_green_deployments' }
    ]}
>
<TabItem value="describe_blue_green_deployments">

Describes one or more blue/green deployments. For more information, see Using Amazon RDS Blue/Green Deployments for database updates in the Amazon RDS User Guide and Using Amazon RDS Blue/Green Deployments for database updates in the Amazon Aurora User Guide.

```sql
SELECT
BlueGreenDeploymentIdentifier,
BlueGreenDeploymentName,
CreateTime,
DeleteTime,
Source,
Status,
StatusDetails,
SwitchoverDetails,
TagList,
Target,
Tasks
FROM aws.rds.blue_green_deployments
WHERE region = '{{ region }}' -- required
AND BlueGreenDeploymentIdentifier = '{{ BlueGreenDeploymentIdentifier }}'
AND Filters = '{{ Filters }}'
AND Marker = '{{ Marker }}'
AND MaxRecords = '{{ MaxRecords }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_blue_green_deployment"
    values={[
        { label: 'create_blue_green_deployment', value: 'create_blue_green_deployment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_blue_green_deployment">

Creates a blue/green deployment. A blue/green deployment creates a staging environment that copies the production environment. In a blue/green deployment, the blue environment is the current production environment. The green environment is the staging environment, and it stays in sync with the current production environment. You can make changes to the databases in the green environment without affecting production workloads. For example, you can upgrade the major or minor DB engine version, change database parameters, or make schema changes in the staging environment. You can thoroughly test changes in the green environment. When ready, you can switch over the environments to promote the green environment to be the new production environment. The switchover typically takes under a minute. For more information, see Using Amazon RDS Blue/Green Deployments for database updates in the Amazon RDS User Guide and Using Amazon RDS Blue/Green Deployments for database updates in the Amazon Aurora User Guide.

```sql
INSERT INTO aws.rds.blue_green_deployments (
BlueGreenDeploymentName,
region,
Source,
TargetEngineVersion,
TargetDBParameterGroupName,
TargetDBClusterParameterGroupName,
Tags,
TargetDBInstanceClass,
UpgradeTargetStorageConfig,
TargetIops,
TargetStorageType,
TargetAllocatedStorage,
TargetStorageThroughput
)
SELECT 
'{{ BlueGreenDeploymentName }}',
'{{ region }}',
'{{ Source }}',
'{{ TargetEngineVersion }}',
'{{ TargetDBParameterGroupName }}',
'{{ TargetDBClusterParameterGroupName }}',
'{{ Tags }}',
'{{ TargetDBInstanceClass }}',
'{{ UpgradeTargetStorageConfig }}',
'{{ TargetIops }}',
'{{ TargetStorageType }}',
'{{ TargetAllocatedStorage }}',
'{{ TargetStorageThroughput }}'
RETURNING
BlueGreenDeploymentIdentifier,
BlueGreenDeploymentName,
CreateTime,
DeleteTime,
Source,
Status,
StatusDetails,
SwitchoverDetails,
TagList,
Target,
Tasks
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: blue_green_deployments
  props:
    - name: BlueGreenDeploymentName
      value: "{{ BlueGreenDeploymentName }}"
      description: Required parameter for the blue_green_deployments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the blue_green_deployments resource.
    - name: Source
      value: "{{ Source }}"
      description: The Amazon Resource Name (ARN) of the source production database. Specify the database that you want to clone. The blue/green deployment creates this database in the green environment. You can make updates to the database in the green environment, such as an engine version upgrade. When you are ready, you can switch the database in the green environment to be the production database.
      description: The Amazon Resource Name (ARN) of the source production database. Specify the database that you want to clone. The blue/green deployment creates this database in the green environment. You can make updates to the database in the green environment, such as an engine version upgrade. When you are ready, you can switch the database in the green environment to be the production database.
    - name: TargetEngineVersion
      value: "{{ TargetEngineVersion }}"
      description: The engine version of the database in the green environment. Specify the engine version to upgrade to in the green environment.
      description: The engine version of the database in the green environment. Specify the engine version to upgrade to in the green environment.
    - name: TargetDBParameterGroupName
      value: "{{ TargetDBParameterGroupName }}"
      description: The DB parameter group associated with the DB instance in the green environment. To test parameter changes, specify a DB parameter group that is different from the one associated with the source DB instance.
      description: The DB parameter group associated with the DB instance in the green environment. To test parameter changes, specify a DB parameter group that is different from the one associated with the source DB instance.
    - name: TargetDBClusterParameterGroupName
      value: "{{ TargetDBClusterParameterGroupName }}"
      description: The DB cluster parameter group associated with the Aurora DB cluster in the green environment. To test parameter changes, specify a DB cluster parameter group that is different from the one associated with the source DB cluster.
      description: The DB cluster parameter group associated with the Aurora DB cluster in the green environment. To test parameter changes, specify a DB cluster parameter group that is different from the one associated with the source DB cluster.
    - name: Tags
      value: "{{ Tags }}"
      description: Tags to assign to the blue/green deployment.
      description: Tags to assign to the blue/green deployment.
    - name: TargetDBInstanceClass
      value: "{{ TargetDBInstanceClass }}"
      description: Specify the DB instance class for the databases in the green environment. This parameter only applies to RDS DB instances, because DB instances within an Aurora DB cluster can have multiple different instance classes. If you're creating a blue/green deployment from an Aurora DB cluster, don't specify this parameter. After the green environment is created, you can individually modify the instance classes of the DB instances within the green DB cluster.
      description: Specify the DB instance class for the databases in the green environment. This parameter only applies to RDS DB instances, because DB instances within an Aurora DB cluster can have multiple different instance classes. If you're creating a blue/green deployment from an Aurora DB cluster, don't specify this parameter. After the green environment is created, you can individually modify the instance classes of the DB instances within the green DB cluster.
    - name: UpgradeTargetStorageConfig
      value: {{ UpgradeTargetStorageConfig }}
      description: Whether to upgrade the storage file system configuration on the green database. This option migrates the green DB instance from the older 32-bit file system to the preferred configuration. For more information, see Upgrading the storage file system for a DB instance.
      description: Whether to upgrade the storage file system configuration on the green database. This option migrates the green DB instance from the older 32-bit file system to the preferred configuration. For more information, see Upgrading the storage file system for a DB instance.
    - name: TargetIops
      value: {{ TargetIops }}
      description: The amount of Provisioned IOPS (input/output operations per second) to allocate for the green DB instance. For information about valid IOPS values, see Amazon RDS DB instance storage in the Amazon RDS User Guide. This setting doesn't apply to Amazon Aurora blue/green deployments.
      description: The amount of Provisioned IOPS (input/output operations per second) to allocate for the green DB instance. For information about valid IOPS values, see Amazon RDS DB instance storage in the Amazon RDS User Guide. This setting doesn't apply to Amazon Aurora blue/green deployments.
    - name: TargetStorageType
      value: "{{ TargetStorageType }}"
      description: The storage type to associate with the green DB instance. Valid Values: gp2 | gp3 | io1 | io2 This setting doesn't apply to Amazon Aurora blue/green deployments.
      description: The storage type to associate with the green DB instance. Valid Values: gp2 | gp3 | io1 | io2 This setting doesn't apply to Amazon Aurora blue/green deployments.
    - name: TargetAllocatedStorage
      value: {{ TargetAllocatedStorage }}
      description: The amount of storage in gibibytes (GiB) to allocate for the green DB instance. You can choose to increase or decrease the allocated storage on the green DB instance. This setting doesn't apply to Amazon Aurora blue/green deployments.
      description: The amount of storage in gibibytes (GiB) to allocate for the green DB instance. You can choose to increase or decrease the allocated storage on the green DB instance. This setting doesn't apply to Amazon Aurora blue/green deployments.
    - name: TargetStorageThroughput
      value: {{ TargetStorageThroughput }}
      description: The storage throughput value for the green DB instance. This setting applies only to the gp3 storage type. This setting doesn't apply to Amazon Aurora blue/green deployments.
      description: The storage throughput value for the green DB instance. This setting applies only to the gp3 storage type. This setting doesn't apply to Amazon Aurora blue/green deployments.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_blue_green_deployment"
    values={[
        { label: 'delete_blue_green_deployment', value: 'delete_blue_green_deployment' }
    ]}
>
<TabItem value="delete_blue_green_deployment">

Deletes a blue/green deployment. For more information, see Using Amazon RDS Blue/Green Deployments for database updates in the Amazon RDS User Guide and Using Amazon RDS Blue/Green Deployments for database updates in the Amazon Aurora User Guide.

```sql
DELETE FROM aws.rds.blue_green_deployments
WHERE BlueGreenDeploymentIdentifier = '{{ BlueGreenDeploymentIdentifier }}' --required
AND region = '{{ region }}' --required
AND DeleteTarget = '{{ DeleteTarget }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="switchover_blue_green_deployment"
    values={[
        { label: 'switchover_blue_green_deployment', value: 'switchover_blue_green_deployment' }
    ]}
>
<TabItem value="switchover_blue_green_deployment">

Switches over a blue/green deployment. Before you switch over, production traffic is routed to the databases in the blue environment. After you switch over, production traffic is routed to the databases in the green environment. For more information, see Using Amazon RDS Blue/Green Deployments for database updates in the Amazon RDS User Guide and Using Amazon RDS Blue/Green Deployments for database updates in the Amazon Aurora User Guide.

```sql
EXEC aws.rds.blue_green_deployments.switchover_blue_green_deployment 
@BlueGreenDeploymentIdentifier='{{ BlueGreenDeploymentIdentifier }}' --required, 
@region='{{ region }}' --required, 
@SwitchoverTimeout='{{ SwitchoverTimeout }}'
;
```
</TabItem>
</Tabs>
