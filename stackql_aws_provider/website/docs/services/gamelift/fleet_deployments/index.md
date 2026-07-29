--- 
title: fleet_deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - fleet_deployments
  - gamelift
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

Creates, updates, deletes, gets or lists a <code>fleet_deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fleet_deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.fleet_deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fleet_deployment"
    values={[
        { label: 'describe_fleet_deployment', value: 'describe_fleet_deployment' },
        { label: 'list_fleet_deployments', value: 'list_fleet_deployments' }
    ]}
>
<TabItem value="describe_fleet_deployment">

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
    <td><CopyableCode code="fleet_deployment" /></td>
    <td><code>object</code></td>
    <td>The requested deployment information.</td>
</tr>
<tr>
    <td><CopyableCode code="locational_deployments" /></td>
    <td><code>object</code></td>
    <td>If the deployment is for a multi-location fleet, the requests returns the deployment status in each fleet location.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fleet_deployments">

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
    <td>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_configuration" /></td>
    <td><code>object</code></td>
    <td>Instructions for how to deploy updates to a container fleet and what actions to take if the deployment fails.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the deployment. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_status" /></td>
    <td><code>string</code></td>
    <td>The status of fleet deployment activity in the location. IN_PROGRESS -- The deployment is in progress. IMPAIRED -- The deployment failed and the fleet has some impaired containers. COMPLETE -- The deployment has completed successfully. ROLLBACK_IN_PROGRESS -- The deployment failed and rollback has been initiated. ROLLBACK_IN_COMPLETE -- The deployment failed and rollback has been completed. CANCELLED -- The deployment was cancelled. (IN_PROGRESS, IMPAIRED, COMPLETE, ROLLBACK_IN_PROGRESS, ROLLBACK_COMPLETE, CANCELLED, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the container fleet. (pattern: &lt;code&gt;^&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="game_server_binary_arn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the version of the game server container group definition that is being deployed. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="per_instance_binary_arn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the version of the per-instance container group definition that is being deployed. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rollback_game_server_binary_arn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the version of the game server container group definition to roll back to if deployment fails. Amazon GameLift Servers sets this property to the container group definition version that the fleet used when it was last active. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rollback_per_instance_binary_arn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the version of the per-instance container group definition to roll back to if deployment fails. Amazon GameLift Servers sets this property to the container group definition version that the fleet used when it was last active. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_fleet_deployment"><CopyableCode code="describe_fleet_deployment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: Container Retrieves information about a managed container fleet deployment. Request options Get information about the latest deployment for a specific fleet. Provide the fleet ID or ARN. Get information about a specific deployment. Provide the fleet ID or ARN and the deployment ID. Results If successful, a FleetDeployment object is returned.</td>
</tr>
<tr>
    <td><a href="#list_fleet_deployments"><CopyableCode code="list_fleet_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: Container Retrieves a collection of container fleet deployments in an Amazon Web Services Region. Use the pagination parameters to retrieve results as a set of sequential pages. Request options Get a list of all deployments. Call this operation without specifying a fleet ID. Get a list of all deployments for a fleet. Specify the container fleet ID or ARN value. Results If successful, this operation returns a list of deployments that match the request parameters. A NextToken value is also returned if there are more result pages to retrieve. Deployments are returned starting with the latest.</td>
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
    defaultValue="describe_fleet_deployment"
    values={[
        { label: 'describe_fleet_deployment', value: 'describe_fleet_deployment' },
        { label: 'list_fleet_deployments', value: 'list_fleet_deployments' }
    ]}
>
<TabItem value="describe_fleet_deployment">

This API works with the following fleet types: Container Retrieves information about a managed container fleet deployment. Request options Get information about the latest deployment for a specific fleet. Provide the fleet ID or ARN. Get information about a specific deployment. Provide the fleet ID or ARN and the deployment ID. Results If successful, a FleetDeployment object is returned.

```sql
SELECT
fleet_deployment,
locational_deployments
FROM aws.gamelift.fleet_deployments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_fleet_deployments">

This API works with the following fleet types: Container Retrieves a collection of container fleet deployments in an Amazon Web Services Region. Use the pagination parameters to retrieve results as a set of sequential pages. Request options Get a list of all deployments. Call this operation without specifying a fleet ID. Get a list of all deployments for a fleet. Specify the container fleet ID or ARN value. Results If successful, this operation returns a list of deployments that match the request parameters. A NextToken value is also returned if there are more result pages to retrieve. Deployments are returned starting with the latest.

```sql
SELECT
creation_time,
deployment_configuration,
deployment_id,
deployment_status,
fleet_id,
game_server_binary_arn,
per_instance_binary_arn,
rollback_game_server_binary_arn,
rollback_per_instance_binary_arn
FROM aws.gamelift.fleet_deployments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
