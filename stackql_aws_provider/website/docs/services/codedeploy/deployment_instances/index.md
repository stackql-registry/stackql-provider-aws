--- 
title: deployment_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - deployment_instances
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

Creates, updates, deletes, gets or lists a <code>deployment_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployment_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codedeploy.deployment_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_deployment_instances"
    values={[
        { label: 'batch_get_deployment_instances', value: 'batch_get_deployment_instances' },
        { label: 'get_deployment_instance', value: 'get_deployment_instance' },
        { label: 'list_deployment_instances', value: 'list_deployment_instances' }
    ]}
>
<TabItem value="batch_get_deployment_instances">

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
    <td><CopyableCode code="errorMessage" /></td>
    <td><code>string</code></td>
    <td>Information about errors that might have occurred during the API call.</td>
</tr>
<tr>
    <td><CopyableCode code="instancesSummary" /></td>
    <td><code>array</code></td>
    <td>Information about the instance.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_deployment_instance">

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
    <td><CopyableCode code="deploymentId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of a deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The instance ID.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceType" /></td>
    <td><code>string</code></td>
    <td>Information about which environment an instance belongs to in a blue/green deployment. BLUE: The instance is part of the original environment. GREEN: The instance is part of the replacement environment. (Blue, Green)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the instance information was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleEvents" /></td>
    <td><code>array</code></td>
    <td>A list of lifecycle events for this instance.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The deployment status for this instance: Pending: The deployment is pending for this instance. In Progress: The deployment is in progress for this instance. Succeeded: The deployment has succeeded for this instance. Failed: The deployment has failed for this instance. Skipped: The deployment has been skipped for this instance. Unknown: The deployment status is unknown for this instance. (Pending, InProgress, Succeeded, Failed, Skipped, Unknown, Ready)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_deployment_instances">

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
    <td><CopyableCode code="instances" /></td>
    <td><code>string</code></td>
    <td>A list of instance IDs.</td>
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
    <td><a href="#batch_get_deployment_instances"><CopyableCode code="batch_get_deployment_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This method works, but is deprecated. Use BatchGetDeploymentTargets instead. Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and Lambda compute platforms. The newer BatchGetDeploymentTargets works with all compute platforms. The maximum number of instances that can be returned is 25.</td>
</tr>
<tr>
    <td><a href="#get_deployment_instance"><CopyableCode code="get_deployment_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an instance as part of a deployment.</td>
</tr>
<tr>
    <td><a href="#list_deployment_instances"><CopyableCode code="list_deployment_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The newer BatchGetDeploymentTargets should be used instead because it works with all compute types. ListDeploymentInstances throws an exception if it is used with a compute platform other than EC2/On-premises or Lambda. Lists the instance for a deployment associated with the user or Amazon Web Services account.</td>
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
    defaultValue="batch_get_deployment_instances"
    values={[
        { label: 'batch_get_deployment_instances', value: 'batch_get_deployment_instances' },
        { label: 'get_deployment_instance', value: 'get_deployment_instance' },
        { label: 'list_deployment_instances', value: 'list_deployment_instances' }
    ]}
>
<TabItem value="batch_get_deployment_instances">

This method works, but is deprecated. Use BatchGetDeploymentTargets instead. Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and Lambda compute platforms. The newer BatchGetDeploymentTargets works with all compute platforms. The maximum number of instances that can be returned is 25.

```sql
SELECT
errorMessage,
instancesSummary
FROM aws.codedeploy.deployment_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_deployment_instance">

Gets information about an instance as part of a deployment.

```sql
SELECT
deploymentId,
instanceId,
instanceType,
lastUpdatedAt,
lifecycleEvents,
status
FROM aws.codedeploy.deployment_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_deployment_instances">

The newer BatchGetDeploymentTargets should be used instead because it works with all compute types. ListDeploymentInstances throws an exception if it is used with a compute platform other than EC2/On-premises or Lambda. Lists the instance for a deployment associated with the user or Amazon Web Services account.

```sql
SELECT
instances
FROM aws.codedeploy.deployment_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
