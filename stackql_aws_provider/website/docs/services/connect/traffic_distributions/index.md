--- 
title: traffic_distributions
hide_title: false
hide_table_of_contents: false
keywords:
  - traffic_distributions
  - connect
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

Creates, updates, deletes, gets or lists a <code>traffic_distributions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="traffic_distributions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.traffic_distributions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_traffic_distribution"
    values={[
        { label: 'get_traffic_distribution', value: 'get_traffic_distribution' }
    ]}
>
<TabItem value="get_traffic_distribution">

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
    <td><CopyableCode code="agent_config" /></td>
    <td><code>object</code></td>
    <td>The distribution of agents between the instance and its replica(s).</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the traffic distribution group. (pattern: &lt;code&gt;^arn:(aws|aws-us-gov):connect:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;+-&#91;0-9&#93;&#123;1&#125;:&#91;0-9&#93;&#123;1,20&#125;:traffic-distribution-group/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sign_in_config" /></td>
    <td><code>object</code></td>
    <td>The distribution that determines which Amazon Web Services Regions should be used to sign in agents in to both the instance and its replica(s).</td>
</tr>
<tr>
    <td><CopyableCode code="telephony_config" /></td>
    <td><code>object</code></td>
    <td>The distribution of traffic between the instance and its replicas.</td>
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
    <td><a href="#get_traffic_distribution"><CopyableCode code="get_traffic_distribution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current traffic distribution for a given traffic distribution group.</td>
</tr>
<tr>
    <td><a href="#update_traffic_distribution"><CopyableCode code="update_traffic_distribution" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the traffic distribution for a given traffic distribution group. When you shift telephony traffic, also shift agents and/or agent sign-ins to ensure they can handle the calls in the other Region. If you don't shift the agents, voice calls will go to the shifted Region but there won't be any agents available to receive the calls. The SignInConfig distribution is available only on a default TrafficDistributionGroup (see the IsDefault parameter in the TrafficDistributionGroup data type). If you call UpdateTrafficDistribution with a modified SignInConfig and a non-default TrafficDistributionGroup, an InvalidRequestException is returned. For more information about updating a traffic distribution group, see Update telephony traffic distribution across Amazon Web Services Regions in the Connect Customer Administrator Guide. Important things to know Invoke the UpdateTrafficDistribution API in the region that should handle traffic.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_traffic_distribution"
    values={[
        { label: 'get_traffic_distribution', value: 'get_traffic_distribution' }
    ]}
>
<TabItem value="get_traffic_distribution">

Retrieves the current traffic distribution for a given traffic distribution group.

```sql
SELECT
agent_config,
arn,
id,
sign_in_config,
telephony_config
FROM aws.connect.traffic_distributions
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_traffic_distribution"
    values={[
        { label: 'update_traffic_distribution', value: 'update_traffic_distribution' }
    ]}
>
<TabItem value="update_traffic_distribution">

Updates the traffic distribution for a given traffic distribution group. When you shift telephony traffic, also shift agents and/or agent sign-ins to ensure they can handle the calls in the other Region. If you don't shift the agents, voice calls will go to the shifted Region but there won't be any agents available to receive the calls. The SignInConfig distribution is available only on a default TrafficDistributionGroup (see the IsDefault parameter in the TrafficDistributionGroup data type). If you call UpdateTrafficDistribution with a modified SignInConfig and a non-default TrafficDistributionGroup, an InvalidRequestException is returned. For more information about updating a traffic distribution group, see Update telephony traffic distribution across Amazon Web Services Regions in the Connect Customer Administrator Guide. Important things to know Invoke the UpdateTrafficDistribution API in the region that should handle traffic.

```sql
UPDATE aws.connect.traffic_distributions
SET 
TelephonyConfig = '{{ TelephonyConfig }}',
SignInConfig = '{{ SignInConfig }}',
AgentConfig = '{{ AgentConfig }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
