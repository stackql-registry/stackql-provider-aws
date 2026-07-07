--- 
title: service_deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - service_deployments
  - ecs
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

Creates, updates, deletes, gets or lists a <code>service_deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecs.service_deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_service_deployments"
    values={[
        { label: 'describe_service_deployments', value: 'describe_service_deployments' },
        { label: 'list_service_deployments', value: 'list_service_deployments' }
    ]}
>
<TabItem value="describe_service_deployments">

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
    <td><CopyableCode code="failures" /></td>
    <td><code>array</code></td>
    <td>Any failures associated with the call. If you decsribe a deployment with a service revision created before October 25, 2024, the call fails. The failure includes the service revision ARN and the reason set to MISSING.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceDeployments" /></td>
    <td><code>array</code></td>
    <td>The list of service deployments described.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_service_deployments">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value to include in a future ListServiceDeployments request. When the results of a ListServiceDeployments request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceDeployments" /></td>
    <td><code>array</code></td>
    <td>An overview of the service deployment, including the following properties: The ARN of the service deployment. The ARN of the service being deployed. The ARN of the cluster that hosts the service in the service deployment. The time that the service deployment started. The time that the service deployment completed. The service deployment status. Information about why the service deployment is in the current state. The ARN of the service revision that is being deployed.</td>
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
    <td><a href="#describe_service_deployments"><CopyableCode code="describe_service_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes one or more of your service deployments. A service deployment happens when you release a software update for the service. For more information, see View service history using Amazon ECS service deployments.</td>
</tr>
<tr>
    <td><a href="#list_service_deployments"><CopyableCode code="list_service_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation lists all the service deployments that meet the specified filter criteria. A service deployment happens when you release a software update for the service. You route traffic from the running service revisions to the new service revison and control the number of running tasks. This API returns the values that you use for the request parameters in DescribeServiceRevisions.</td>
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
    defaultValue="describe_service_deployments"
    values={[
        { label: 'describe_service_deployments', value: 'describe_service_deployments' },
        { label: 'list_service_deployments', value: 'list_service_deployments' }
    ]}
>
<TabItem value="describe_service_deployments">

Describes one or more of your service deployments. A service deployment happens when you release a software update for the service. For more information, see View service history using Amazon ECS service deployments.

```sql
SELECT
failures,
serviceDeployments
FROM aws.ecs.service_deployments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_service_deployments">

This operation lists all the service deployments that meet the specified filter criteria. A service deployment happens when you release a software update for the service. You route traffic from the running service revisions to the new service revison and control the number of running tasks. This API returns the values that you use for the request parameters in DescribeServiceRevisions.

```sql
SELECT
nextToken,
serviceDeployments
FROM aws.ecs.service_deployments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
