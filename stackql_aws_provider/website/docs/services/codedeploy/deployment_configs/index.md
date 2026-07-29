--- 
title: deployment_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - deployment_configs
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

Creates, updates, deletes, gets or lists a <code>deployment_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployment_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codedeploy.deployment_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_deployment_config"
    values={[
        { label: 'get_deployment_config', value: 'get_deployment_config' },
        { label: 'list_deployment_configs', value: 'list_deployment_configs' }
    ]}
>
<TabItem value="get_deployment_config">

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
    <td><CopyableCode code="compute_platform" /></td>
    <td><code>string</code></td>
    <td>The destination platform type for the deployment (Lambda, Server, or ECS). (Server, Lambda, ECS)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the deployment configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_config_id" /></td>
    <td><code>string</code></td>
    <td>The deployment configuration ID.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_config_name" /></td>
    <td><code>string</code></td>
    <td>The deployment configuration name.</td>
</tr>
<tr>
    <td><CopyableCode code="minimum_healthy_hosts" /></td>
    <td><code>object</code></td>
    <td>Information about the number or percentage of minimum healthy instances.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_routing_config" /></td>
    <td><code>object</code></td>
    <td>The configuration that specifies how the deployment traffic is routed. Used for deployments with a Lambda or Amazon ECS compute platform only.</td>
</tr>
<tr>
    <td><CopyableCode code="zonal_config" /></td>
    <td><code>object</code></td>
    <td>Information about a zonal configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_deployment_configs">

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
    <td><CopyableCode code="deployment_configs" /></td>
    <td><code>string</code></td>
    <td>A list of deployment configurations, including built-in configurations such as CodeDeployDefault.OneAtATime.</td>
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
    <td><a href="#get_deployment_config"><CopyableCode code="get_deployment_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a deployment configuration.</td>
</tr>
<tr>
    <td><a href="#list_deployment_configs"><CopyableCode code="list_deployment_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the deployment configurations with the user or Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_deployment_config"><CopyableCode code="create_deployment_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-deploymentConfigName"><code>deploymentConfigName</code></a></td>
    <td></td>
    <td>Creates a deployment configuration.</td>
</tr>
<tr>
    <td><a href="#delete_deployment_config"><CopyableCode code="delete_deployment_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a deployment configuration. A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.</td>
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
    defaultValue="get_deployment_config"
    values={[
        { label: 'get_deployment_config', value: 'get_deployment_config' },
        { label: 'list_deployment_configs', value: 'list_deployment_configs' }
    ]}
>
<TabItem value="get_deployment_config">

Gets information about a deployment configuration.

```sql
SELECT
compute_platform,
create_time,
deployment_config_id,
deployment_config_name,
minimum_healthy_hosts,
traffic_routing_config,
zonal_config
FROM aws.codedeploy.deployment_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_deployment_configs">

Lists the deployment configurations with the user or Amazon Web Services account.

```sql
SELECT
deployment_configs
FROM aws.codedeploy.deployment_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_deployment_config"
    values={[
        { label: 'create_deployment_config', value: 'create_deployment_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_deployment_config">

Creates a deployment configuration.

```sql
INSERT INTO aws.codedeploy.deployment_configs (
deploymentConfigName,
minimumHealthyHosts,
trafficRoutingConfig,
computePlatform,
zonalConfig,
region
)
SELECT 
'{{ deploymentConfigName }}' /* required */,
'{{ minimumHealthyHosts }}',
'{{ trafficRoutingConfig }}',
'{{ computePlatform }}',
'{{ zonalConfig }}',
'{{ region }}'
RETURNING
deployment_config_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: deployment_configs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the deployment_configs resource.
    - name: deploymentConfigName
      value: "{{ deploymentConfigName }}"
      description: |
        The name of the deployment configuration to create.
    - name: minimumHealthyHosts
      description: |
        The minimum number of healthy instances that should be available at any time during the deployment. There are two parameters expected in the input: type and value. The type parameter takes either of the following values: HOST_COUNT: The value parameter represents the minimum number of healthy instances as an absolute value. FLEET_PERCENT: The value parameter represents the minimum number of healthy instances as a percentage of the total number of instances in the deployment. If you specify FLEET_PERCENT, at the start of the deployment, CodeDeploy converts the percentage to the equivalent number of instances and rounds up fractional instances. The value parameter takes an integer. For example, to set a minimum of 95% healthy instance, specify a type of FLEET_PERCENT and a value of 95.
      value:
        type_: "{{ type_ }}"
        value: {{ value }}
    - name: trafficRoutingConfig
      description: |
        The configuration that specifies how the deployment traffic is routed.
      value:
        type_: "{{ type_ }}"
        timeBasedCanary:
          canaryPercentage: {{ canaryPercentage }}
          canaryInterval: {{ canaryInterval }}
        timeBasedLinear:
          linearPercentage: {{ linearPercentage }}
          linearInterval: {{ linearInterval }}
    - name: computePlatform
      value: "{{ computePlatform }}"
      description: |
        The destination platform type for the deployment (Lambda, Server, or ECS).
      valid_values: ['Server', 'Lambda', 'ECS']
    - name: zonalConfig
      description: |
        Configure the ZonalConfig object if you want CodeDeploy to deploy your application to one Availability Zone at a time, within an Amazon Web Services Region. For more information about the zonal configuration feature, see zonal configuration in the CodeDeploy User Guide.
      value:
        firstZoneMonitorDurationInSeconds: {{ firstZoneMonitorDurationInSeconds }}
        monitorDurationInSeconds: {{ monitorDurationInSeconds }}
        minimumHealthyHostsPerZone:
          type_: "{{ type_ }}"
          value: {{ value }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_deployment_config"
    values={[
        { label: 'delete_deployment_config', value: 'delete_deployment_config' }
    ]}
>
<TabItem value="delete_deployment_config">

Deletes a deployment configuration. A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.

```sql
DELETE FROM aws.codedeploy.deployment_configs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
