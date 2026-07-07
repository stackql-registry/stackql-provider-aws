--- 
title: compute_access
hide_title: false
hide_table_of_contents: false
keywords:
  - compute_access
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

Creates, updates, deletes, gets or lists a <code>compute_access</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compute_access" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.compute_access" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_compute_access"
    values={[
        { label: 'get_compute_access', value: 'get_compute_access' }
    ]}
>
<TabItem value="get_compute_access">

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
    <td><CopyableCode code="ComputeArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to an Amazon GameLift Servers compute resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::compute/compute-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912. (pattern: &lt;code&gt;^arn:.*:compute\/&#91;a-zA-Z0-9\-&#93;+(\/&#91;a-zA-Z0-9\-&#93;+)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ComputeName" /></td>
    <td><code>string</code></td>
    <td>The identifier of the compute resource to be accessed. This value might be either a compute name or an instance ID. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-&#93;+(\/&#91;a-zA-Z0-9\-&#93;+)?$|^arn:.*:compute\/&#91;a-zA-Z0-9\-&#93;+(\/&#91;a-zA-Z0-9\-&#93;+)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ContainerIdentifiers" /></td>
    <td><code>array</code></td>
    <td>For a managed container fleet, a list of containers on the compute. Use the container runtime ID with Docker commands to connect to a specific container.</td>
</tr>
<tr>
    <td><CopyableCode code="Credentials" /></td>
    <td><code>object</code></td>
    <td>A set of temporary Amazon Web Services credentials for use when connecting to the compute resource with Amazon EC2 Systems Manager (SSM).</td>
</tr>
<tr>
    <td><CopyableCode code="FleetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912. (pattern: &lt;code&gt;^arn:.*:&#91;a-z&#93;*fleet\/&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FleetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the fleet that holds the compute resource to be accessed. (pattern: &lt;code&gt;^&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$|^arn:.*:&#91;a-z&#93;*fleet\/&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Target" /></td>
    <td><code>string</code></td>
    <td>The instance ID where the compute resource is running.</td>
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
    <td><a href="#get_compute_access"><CopyableCode code="get_compute_access" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Container Requests authorization to remotely connect to a hosting resource in a Amazon GameLift Servers managed fleet. This operation is not used with Amazon GameLift Servers Anywhere fleets. Request options Provide the fleet ID and compute name. The compute name varies depending on the type of fleet. For a compute in a managed EC2 fleet, provide an instance ID. Each instance in the fleet is a compute. For a compute in a managed container fleet, provide a compute name. In a container fleet, each game server container group on a fleet instance is assigned a compute name. Results If successful, this operation returns a set of temporary Amazon Web Services credentials, including a two-part access key and a session token. With a managed EC2 fleet (where compute type is EC2), use these credentials with Amazon EC2 Systems Manager (SSM) to start a session with the compute. For more details, see Starting a session (CLI) in the Amazon EC2 Systems Manager User Guide.</td>
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
    defaultValue="get_compute_access"
    values={[
        { label: 'get_compute_access', value: 'get_compute_access' }
    ]}
>
<TabItem value="get_compute_access">

This API works with the following fleet types: EC2, Container Requests authorization to remotely connect to a hosting resource in a Amazon GameLift Servers managed fleet. This operation is not used with Amazon GameLift Servers Anywhere fleets. Request options Provide the fleet ID and compute name. The compute name varies depending on the type of fleet. For a compute in a managed EC2 fleet, provide an instance ID. Each instance in the fleet is a compute. For a compute in a managed container fleet, provide a compute name. In a container fleet, each game server container group on a fleet instance is assigned a compute name. Results If successful, this operation returns a set of temporary Amazon Web Services credentials, including a two-part access key and a session token. With a managed EC2 fleet (where compute type is EC2), use these credentials with Amazon EC2 Systems Manager (SSM) to start a session with the compute. For more details, see Starting a session (CLI) in the Amazon EC2 Systems Manager User Guide.

```sql
SELECT
ComputeArn,
ComputeName,
ContainerIdentifiers,
Credentials,
FleetArn,
FleetId,
Target
FROM aws.gamelift.compute_access
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
