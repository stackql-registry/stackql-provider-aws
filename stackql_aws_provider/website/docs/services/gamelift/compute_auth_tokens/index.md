--- 
title: compute_auth_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - compute_auth_tokens
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

Creates, updates, deletes, gets or lists a <code>compute_auth_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compute_auth_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.compute_auth_tokens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_compute_auth_token"
    values={[
        { label: 'get_compute_auth_token', value: 'get_compute_auth_token' }
    ]}
>
<TabItem value="get_compute_auth_token">

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
    <td><CopyableCode code="auth_token" /></td>
    <td><code>string</code></td>
    <td>A valid temporary authentication token. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to an Amazon GameLift Servers compute resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::compute/compute-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912. (pattern: &lt;code&gt;^arn:.*:compute\/&#91;a-zA-Z0-9\-&#93;+(\/&#91;a-zA-Z0-9\-&#93;+)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_name" /></td>
    <td><code>string</code></td>
    <td>The name of the compute resource that the authentication token is issued to. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-&#93;+(\/&#91;a-zA-Z0-9\-&#93;+)?$|^arn:.*:compute\/&#91;a-zA-Z0-9\-&#93;+(\/&#91;a-zA-Z0-9\-&#93;+)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The amount of time until the authentication token is no longer valid.</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912. (pattern: &lt;code&gt;^arn:.*:&#91;a-z&#93;*fleet\/&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the fleet that the compute is registered to. (pattern: &lt;code&gt;^&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$|^arn:.*:&#91;a-z&#93;*fleet\/&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#get_compute_auth_token"><CopyableCode code="get_compute_auth_token" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Requests an authentication token from Amazon GameLift Servers for a compute resource in an Amazon GameLift Servers fleet. Game servers that are running on the compute use this token to communicate with the Amazon GameLift Servers service, such as when calling the Amazon GameLift Servers server SDK action InitSDK(). Authentication tokens are valid for a limited time span, so you need to request a fresh token before the current token expires. Request options For managed EC2 fleets (compute type EC2), auth token retrieval and refresh is handled automatically. All game servers that are running on all fleet instances have access to a valid auth token. For Anywhere fleets (compute type ANYWHERE), if you're using the Amazon GameLift Servers Agent, auth token retrieval and refresh is handled automatically for any compute where the Agent is running. If you're not using the Agent, create a mechanism to retrieve and refresh auth tokens for computes that are running game server processes. Learn more Create an Anywhere fleet Test your integration Server SDK reference guides (for version 5.x)</td>
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
    defaultValue="get_compute_auth_token"
    values={[
        { label: 'get_compute_auth_token', value: 'get_compute_auth_token' }
    ]}
>
<TabItem value="get_compute_auth_token">

This API works with the following fleet types: EC2, Anywhere, Container Requests an authentication token from Amazon GameLift Servers for a compute resource in an Amazon GameLift Servers fleet. Game servers that are running on the compute use this token to communicate with the Amazon GameLift Servers service, such as when calling the Amazon GameLift Servers server SDK action InitSDK(). Authentication tokens are valid for a limited time span, so you need to request a fresh token before the current token expires. Request options For managed EC2 fleets (compute type EC2), auth token retrieval and refresh is handled automatically. All game servers that are running on all fleet instances have access to a valid auth token. For Anywhere fleets (compute type ANYWHERE), if you're using the Amazon GameLift Servers Agent, auth token retrieval and refresh is handled automatically for any compute where the Agent is running. If you're not using the Agent, create a mechanism to retrieve and refresh auth tokens for computes that are running game server processes. Learn more Create an Anywhere fleet Test your integration Server SDK reference guides (for version 5.x)

```sql
SELECT
auth_token,
compute_arn,
compute_name,
expiration_timestamp,
fleet_arn,
fleet_id
FROM aws.gamelift.compute_auth_tokens
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
