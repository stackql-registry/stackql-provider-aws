--- 
title: continuous_deployment_policy_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - continuous_deployment_policy_configs
  - cloudfront
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

Creates, updates, deletes, gets or lists a <code>continuous_deployment_policy_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="continuous_deployment_policy_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.continuous_deployment_policy_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_continuous_deployment_policy_config"
    values={[
        { label: 'get_continuous_deployment_policy_config', value: 'get_continuous_deployment_policy_config' }
    ]}
>
<TabItem value="get_continuous_deployment_policy_config">

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
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean that indicates whether this continuous deployment policy is enabled (in effect). When this value is true, this policy is enabled and in effect. When this value is false, this policy is not enabled and has no effect.</td>
</tr>
<tr>
    <td><CopyableCode code="StagingDistributionDnsNames" /></td>
    <td><code>string</code></td>
    <td>The CloudFront domain name of the staging distribution. For example: d111111abcdef8.cloudfront.net.</td>
</tr>
<tr>
    <td><CopyableCode code="TrafficConfig" /></td>
    <td><code>string</code></td>
    <td>Contains the parameters for routing production traffic from your primary to staging distributions.</td>
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
    <td><a href="#get_continuous_deployment_policy_config"><CopyableCode code="get_continuous_deployment_policy_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets configuration information about a continuous deployment policy.</td>
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
    <td>The identifier of the continuous deployment policy whose configuration you are getting.</td>
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
    defaultValue="get_continuous_deployment_policy_config"
    values={[
        { label: 'get_continuous_deployment_policy_config', value: 'get_continuous_deployment_policy_config' }
    ]}
>
<TabItem value="get_continuous_deployment_policy_config">

Gets configuration information about a continuous deployment policy.

```sql
SELECT
Enabled,
StagingDistributionDnsNames,
TrafficConfig
FROM aws.cloudfront.continuous_deployment_policy_configs
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
